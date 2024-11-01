import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Messages } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';


import Settings from './components/Settings';

const Typing = getByProps('startTyping');
const Patcher = create('silent-typing');
const MessageStore = getByProps("getMessage", "getMessages");
const FluxDispatcher = getByProps(
   "_currentDispatchActionType",
   "_subscriptions",
   "_waitQueue"
 );

 // currently taken from https://github.com/spinfal/enmity-plugins/blob/master/sarp/src/index.tsx

const SilentTyping: Plugin = {
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
      limit: 25,
      jump: undefined,
      isStale: false,
      truncate: undefined,
    });

    let attempt = 0;
    let attempts = 3;
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
        const MessageUpdate =
          FluxDispatcher._actionHandlers._orderedActionHandlers.MESSAGE_UPDATE.find(
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
            console.log(args[0]);
         //   if (args[0].message.author.id !== "338517945451806731") return args[0];
         //   args[0].message.content = args[0].message.content + " 💊";
          }
        );
        Patcher.before(
          MessageUpdate,
          "actionHandler",
          (_, args: any) => {
             console.log(args[0]);
        //    if (args[0].message.author.id !== "338517945451806731") return args[0];
        //    args[0].message.content = args[0].message.content + " 💊";
          }
        );
        Patcher.before(
          LoadMessages,
          "actionHandler",
          (_, args: any) => {
            args[0].messages = args[0].messages.map((n) => {
               console.log(args[0]);
       //       if (n.author.id !== "338517945451806731") return n;
       //       n.content = n.content + " 💊";
       //       return n;
            });
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

registerPlugin(SilentTyping);
