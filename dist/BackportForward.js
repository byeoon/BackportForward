function p(o){window.enmity.plugins.registerPlugin(o)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const l=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token;const S=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function g(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function F(o){return window.enmity.patcher.create(o)}var f="BackportForward",v="1.0.2",T="Forwarding for users running lower versions.",_="#00007d",A=[{name:"byeoon",id:"1167275288036655133"}],r={name:f,version:v,description:T,color:_,authors:A};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const b=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const C=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var E=({settings:o})=>l.createElement(b,{label:"Example Setting",trailing:l.createElement(C,{value:o.get("example",!0),onValueChange:()=>o.toggle("example",!0)})});function y(o,i,a,c){window.enmity.clyde.sendReply(o,i,a,c)}const w=F("BackportForward");g("getMessage","getMessages");const d=g("_currentDispatchActionType","_subscriptions","_waitQueue"),M={...r,onStart(){d.dispatch({type:"LOAD_MESSAGES"}),d.dispatch({type:"LOAD_MESSAGES_SUCCESS",channelId:0,messages:[],isBefore:!1,isAfter:!1,hasMoreBefore:!1,hasMoreAfter:!1,limit:30,jump:void 0,isStale:!1,truncate:void 0});let o=0,i=3;const a=()=>{try{o++,console.log(`[${r.name}] delayed start attempt ${o}/${i}.`);const c=d._actionHandlers._orderedActionHandlers.MESSAGE_CREATE.find(m=>m.name==="MessageStore"),h=d._actionHandlers._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(m=>m.name==="MessageStore");w.before(c,"actionHandler",(m,n)=>{var t,s;if(((t=n[0].message)==null?void 0:t.message_reference.type)=="1"){const u=S.get(`https://discord.com/api/channels/${n[0].message.message_reference.channel_id}/messages/${n[0].message.message_reference.message_id}}`);console.log(u.body),console.log(u),console.log(n[0]),y((s=n[0].channelId)!=null?s:"0",`This is a placeholder message. 
*Original: https://discord.com/channels/${n[0].message.message_reference.guild_id}/${n[0].message.message_reference.channel_id}/${n[0].message.message_reference.message_id}*`,n[0].message.author.username,`https://cdn.discordapp.com/avatars/${n[0].message.author.id}/${n[0].message.author.avatar}.png`)}}),w.before(h,"actionHandler",(m,n)=>{var t;n[0].message.message_reference.type=="1"&&(console.log(n[0]),y((t=n[0].channelId)!=null?t:"0","This is a placeholder message."),n[0].messages=n[0].messages.map(s=>(s.content="This is a forwarded message.",s)))})}catch{o<i?(console.warn(`${r.name} failed to start. Trying again in ${o}0s.`),setTimeout(a,o*1e4)):console.error(`${r.name} failed to start. Giving up.`)}};setTimeout(()=>{a()},300)},onStop(){w.unpatchAll()},getSettingsPanel({settings:o}){return l.createElement(E,{settings:o})}};p(M);
