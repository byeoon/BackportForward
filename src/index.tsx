import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Messages } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { REST } from "enmity/modules/common";

import Settings from './components/Settings';

const Patcher = create('BackportForward');
import { sendReply } from "enmity/api/clyde";
const MessageStore = getByProps("getMessage", "getMessages");
const FluxDispatcher = getByProps(
   "_currentDispatchActionType",
   "_subscriptions",
   "_waitQueue"
 );

 // currently taken from https://github.com/spinfal/enmity-plugins/blob/master/sarp/src/index.tsx

const BackportForward: Plugin = {
   ...manifest,

  onStart() {
    FluxDispatcher.dispatch({
      type: "LOAD_MESSAGES",
    });

    FluxDispatcher.dispatch({
      type: "LOAD_MESSAGES_SUCCESS",
      channelId: 0,
      messages: [],
      isBefore: false,
      isAfter: false,
      hasMoreBefore: false,
      hasMoreAfter: false,
      limit: 30,
      jump: undefined,
      isStale: false,
      truncate: undefined,
    });

    let attempt = 0;
    let attempts = 3;
    
    let currentChannel = "";
    let currentMessageId = "";
    async function callMessageContent() {
      console.log("called message content")
         const resp = await REST.get(`https://discord.com/api/channels/${currentChannel}/messages/${currentMessageId}}`);
         console.log("body: " + resp.body);
         console.log("respones: " + resp);
         console.log("is? " + resp.ok)
    }
    const lateStartup = () => {
      try {
        attempt++;
        console.log(
          `[${manifest.name}] delayed start attempt ${attempt}/${attempts}.`
        );
        const MessageCreate =
          FluxDispatcher._actionHandlers._orderedActionHandlers.MESSAGE_CREATE.find(
            (h: any) => h.name === "MessageStore"
          );
        const LoadMessages =
          FluxDispatcher._actionHandlers._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(
            (h: any) => h.name === "MessageStore"
          );

        Patcher.before(
          MessageCreate,
          "actionHandler",
          (_, args: any) => {
            if (args[0].message?.message_reference.type == "1") {
               currentChannel = args[0].message.message_reference.channel_id;
               currentMessageId = args[0].message.message_reference.message_id;
               callMessageContent();

               console.log(args[0]);
                sendReply(args[0].channelId ?? "0",
                  `This is a placeholder message. \n*Original: https://discord.com/channels/${args[0].message.message_reference.guild_id}/${args[0].message.message_reference.channel_id}/${args[0].message.message_reference.message_id}*`,
                  args[0].message.author.username,
                  `https://cdn.discordapp.com/avatars/${args[0].message.author.id}/${args[0].message.author.avatar}.png`
                );
               }
          }
        );
        Patcher.before(
          LoadMessages,
          "actionHandler",
          (_, args: any) => {
            if (args[0].message.message_reference.type == "1") {
               console.log(args[0]);
               sendReply(args[0].channelId ?? "0",
               "This is a placeholder message."
             );
               args[0].messages = args[0].messages.map((n) => {
               n.content = "This is a forwarded message.";
                return n;
               })
               }
          }
        );
      } catch {
        if (attempt < attempts) {
          console.warn(
            `${manifest.name} failed to start. Trying again in ${attempt}0s.`
          );
          setTimeout(lateStartup, attempt * 10000);
        } else {
          console.error(`${manifest['name']} failed to start. Giving up.`);
        }
      }
    };
    setTimeout(() => {
      lateStartup();
    }, 300);
  },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(BackportForward);
