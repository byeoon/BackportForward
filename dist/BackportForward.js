function F(o){window.enmity.plugins.registerPlugin(o)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const w=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token;const f=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function y(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function v(o){return window.enmity.patcher.create(o)}var T="BackportForward",_="1.0.4",A="Forwarding for users running lower versions.",b="#00007d",E=[{name:"byeoon",id:"1167275288036655133"}],d={name:T,version:_,description:A,color:b,authors:E};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const C=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const M=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var $=({settings:o})=>w.createElement(C,{label:"Example Setting",trailing:w.createElement(M,{value:o.get("example",!0),onValueChange:()=>o.toggle("example",!0)})});function h(o,r,m,t){window.enmity.clyde.sendReply(o,r,m,t)}const u=v("BackportForward");y("getMessage","getMessages");const l=y("_currentDispatchActionType","_subscriptions","_waitQueue"),L={...d,onStart(){l.dispatch({type:"LOAD_MESSAGES"}),l.dispatch({type:"LOAD_MESSAGES_SUCCESS",channelId:0,messages:[],isBefore:!1,isAfter:!1,hasMoreBefore:!1,hasMoreAfter:!1,limit:30,jump:void 0,isStale:!1,truncate:void 0});let o=0,r=3,m="",t="";async function S(){console.log("it did not call the function because fuck you thats why");const c=await f.get(`https://discord.com/api/channels/${m}/messages/${t}}`);console.log(c.body),console.log(c)}const g=()=>{try{o++,console.log(`[${d.name}] delayed start attempt ${o}/${r}.`);const c=l._actionHandlers._orderedActionHandlers.MESSAGE_CREATE.find(s=>s.name==="MessageStore"),p=l._actionHandlers._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(s=>s.name==="MessageStore");u.before(c,"actionHandler",(s,n)=>{var i,a;((i=n[0].message)==null?void 0:i.message_reference.type)=="1"&&(m==n[0].message.message_reference.channel_id,t==n[0].message.message_reference.message_id,console.log(m),console.log(t),S(),console.log(n[0]),h((a=n[0].channelId)!=null?a:"0",`This is a placeholder message. 
*Original: https://discord.com/channels/${n[0].message.message_reference.guild_id}/${n[0].message.message_reference.channel_id}/${n[0].message.message_reference.message_id}*`,n[0].message.author.username,`https://cdn.discordapp.com/avatars/${n[0].message.author.id}/${n[0].message.author.avatar}.png`))}),u.before(p,"actionHandler",(s,n)=>{var i;n[0].message.message_reference.type=="1"&&(console.log(n[0]),h((i=n[0].channelId)!=null?i:"0","This is a placeholder message."),n[0].messages=n[0].messages.map(a=>(a.content="This is a forwarded message.",a)))})}catch{o<r?(console.warn(`${d.name} failed to start. Trying again in ${o}0s.`),setTimeout(g,o*1e4)):console.error(`${d.name} failed to start. Giving up.`)}};setTimeout(()=>{g()},300)},onStop(){u.unpatchAll()},getSettingsPanel({settings:o}){return w.createElement($,{settings:o})}};F(L);
