function S(n){window.enmity.plugins.registerPlugin(n)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const w=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function u(...n){return window.enmity.modules.getByProps(...n)}window.enmity.modules.common;function f(n){return window.enmity.patcher.create(n)}var T="BackportForward",v="1.0.6",F="Forwarding for users running lower versions.",A=[{name:"byeoon",id:"263689920210534400"}],d={name:T,version:v,description:F,authors:A};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const _=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const E=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var M=({settings:n})=>w.createElement(_,{label:"Example Setting",trailing:w.createElement(E,{value:n.get("example",!0),onValueChange:()=>n.toggle("example",!0)})});function g(n,a,r,c){window.enmity.clyde.sendReply(n,a,r,c)}u("startTyping");const l=f("silent-typing");u("getMessage","getMessages");const i=u("_currentDispatchActionType","_subscriptions","_waitQueue"),b={...d,onStart(){i.dispatch({type:"LOAD_MESSAGES"}),i.dispatch({type:"LOAD_MESSAGES_SUCCESS",channelId:0,messages:[],isBefore:!1,isAfter:!1,hasMoreBefore:!1,hasMoreAfter:!1,limit:25,jump:void 0,isStale:!1,truncate:void 0});let n=0,a=3;const r=()=>{try{n++,console.log(`[${d.name}] delayed start attempt ${n}/${a}.`);const c=i._actionHandlers._orderedActionHandlers.MESSAGE_CREATE.find(t=>t.name==="MessageStore"),h=i._actionHandlers._orderedActionHandlers.MESSAGE_UPDATE.find(t=>t.name==="MessageStore"),p=i._actionHandlers._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(t=>t.name==="MessageStore");l.before(c,"actionHandler",(t,o)=>{var s,m;((s=o[0].message)==null?void 0:s.message_reference.type)=="1"&&(console.log(o[0]),g((m=o[0].channelId)!=null?m:"0",`This is a placeholder message. 
 
 Message Link: https://discord.com/channels/${o[0].message.message_reference.guild_id}/${o[0].message.message_reference.channel_id}`,o[0].message.author.username,`https://cdn.discordapp.com/avatars/${o[0].message.author.id}/${o[0].message.author.avatar}.png`),o[0].messages=o[0].messages.map(y=>(y.content=`This is a forwarded message. 
 
 Message Link: https:`,y)))}),l.before(h,"actionHandler",(t,o)=>{var s,m;if(((s=o[0].message)==null?void 0:s.message_reference.type)=="1")return console.log(o[0]),g((m=o[0].channelId)!=null?m:"0","This is a placeholder message."),o[0].message.content="This is a forwarded message.",o[0]}),l.before(p,"actionHandler",(t,o)=>{var s;o[0].message.message_reference.type=="1"&&(console.log(o[0]),g((s=o[0].channelId)!=null?s:"0","This is a placeholder message."),o[0].messages=o[0].messages.map(m=>(m.content="This is a forwarded message.",m)))})}catch{n<a?(console.warn(`${d.name} failed to start. Trying again in ${n}0s.`),setTimeout(r,n*1e4)):console.error(`${d.name} failed to start. Giving up.`)}};setTimeout(()=>{r()},300)},onStop(){l.unpatchAll()},getSettingsPanel({settings:n}){return w.createElement(M,{settings:n})}};S(b);
