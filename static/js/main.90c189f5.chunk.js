(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);a(68),a(93);var n=a(0),l=a.n(n),i=a(37),r=a.n(i),c=a(10),s=a.n(c),o=a(18),m=a(19),d=a(21),u=a(20),p=a(22),h=a(7),v=a(1),E=(a(61),a(62)),f=a.n(E),g=(a(115),a(116),a(63)),y=a.n(g),b=a(64),C=a.n(b),S=a(66);function x(e){console.log(e);var t=new Date,a=new Date(e.split(".")[2],e.split(".")[1],e.split(".")[0]);return Math.round((t.valueOf()-a.valueOf())/1e3/60/60/24/365.25)}a(117);var O=a(65),j=a.n(O),w=(a(118),a(60),a(119),a(120),a(121),Object(v.platform)(),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"profile",city:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",gameCount:"",team:""},a.onChangePanel=a.onChangePanel.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t={flexShrink:0,width:80,height:80,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12};return l.a.createElement(v.View,{id:"profile",activePanel:this.state.activePanel},l.a.createElement(v.Panel,{id:"profile"},l.a.createElement(v.PanelHeader,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),this.props.fetchedUser&&l.a.createElement(l.a.Fragment,null,l.a.createElement(v.Group,null,l.a.createElement(v.Cell,{before:this.props.fetchedUser.photo_200?l.a.createElement(v.Avatar,{size:60,src:this.props.fetchedUser.photo_200}):null,size:"l",description:(e=x(this.props.fetchedUser.bdate),(e>9&&e<21?e+" \u043b\u0435\u0442":e%10===1?e+" \u0433\u043e\u0434":e%10<5?e+" \u0433\u043e\u0434\u0430":e%10>=5?e+" \u043b\u0435\u0442":void 0)+", "+(this.props.fetchedUser.city&&this.props.fetchedUser.city.title?this.props.fetchedUser.city.title:"")),bottomContent:l.a.createElement("div",{style:{fontSize:"14px",color:"#5281b7"}},"\u041d\u043e\u0432\u0435\u043d\u044c\u043a\u0438\u0439")},"".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name))),l.a.createElement(v.Group,null,l.a.createElement(v.List,null,l.a.createElement(v.Cell,{"data-panel":"choose\u0421ity",before:l.a.createElement(j.a,null)},this.state.city))),l.a.createElement(v.Group,{title:"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f\u044f\u044f\u044f"},l.a.createElement(v.List,null,l.a.createElement(v.HorizontalScroll,null,l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:Object(S.a)({},t,{paddingLeft:4})},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1601/1601634.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1490/1490546.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1490/1490542.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1490/1490543.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/610/610333.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1541/1541393.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/610/610333.svg",style:{height:"64px",width:"64px"}})))))))))}}]),t}(l.a.Component)),z=(a(122),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"profile",city:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",gameCount:"",team:""},a.onChangePanel=a.onChangePanel.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"render",value:function(){return l.a.createElement(v.View,{id:"profile",activePanel:this.state.activePanel},l.a.createElement(v.Panel,{id:"profile"},l.a.createElement(v.PanelHeader,null,"\u041c\u043e\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),l.a.createElement(l.a.Fragment,null,l.a.createElement(v.Group,null,l.a.createElement(v.List,null,l.a.createElement(v.Cell,{before:l.a.createElement(v.Avatar,{size:72}),size:"l",description:l.a.createElement("div",null,"\u043a\u043e\u043d\u0446\u0435\u0440\u0442"),bottomContent:l.a.createElement("div",{style:{fontSize:"12px"}},"\u0411\u0430\u043b\u0442\u0438\u0439\u0441\u043a\u0430\u044f \u0443\u043b 66"),asideContent:"23 \u043c\u0430\u0440\u0442\u0430"},l.a.createElement("div",null,l.a.createElement("div",null,"\u041c\u0430\u044f\u0442\u043d\u0438\u043a \u0424\u0443\u043a\u043e"),l.a.createElement("div",null,"Gone Fludd"))))),l.a.createElement(v.Group,null,l.a.createElement(v.List,null,l.a.createElement(v.Cell,{before:l.a.createElement(v.Avatar,{size:72}),size:"l",description:l.a.createElement("div",null,"\u041a\u043e\u043d\u0446\u0435\u0440\u0442, \u0411\u0430\u043b\u0442\u0438\u0439\u0441\u043a\u0430\u044f \u0443\u043b 66"),asideContent:l.a.createElement("div",{style:{fontSize:"14px"}},l.a.createElement("div",null,"22 \u043c\u0430\u0440\u0442\u0430"),l.a.createElement("div",null,"18:00"))},l.a.createElement("div",null,l.a.createElement("div",null,"\u041c\u0430\u044f\u0442\u043d\u0438\u043a \u0424\u0443\u043a\u043e"),l.a.createElement("div",{style:{color:"#9ea1a5",fontSize:"16px"}},"Gone Fludd"))))),l.a.createElement(v.Group,null,l.a.createElement(v.List,null,l.a.createElement(v.Cell,{before:l.a.createElement(v.Avatar,{size:60}),size:"l",description:l.a.createElement("div",null,"\u041a\u043e\u043d\u0446\u0435\u0440\u0442, \u0411\u0430\u043b\u0442\u0438\u0439\u0441\u043a\u0430\u044f \u0443\u043b 66"),asideContent:l.a.createElement("div",{style:{fontSize:"14px"}},l.a.createElement("div",null,"22 \u043c\u0430\u0440\u0442\u0430"),l.a.createElement("div",null,"18:00"))},l.a.createElement("div",null,l.a.createElement("div",null,"\u041c\u0430\u044f\u0442\u043d\u0438\u043a \u0424\u0443\u043a\u043e"),l.a.createElement("div",{style:{color:"#9ea1a5",fontWeight:"500",fontSize:"14px"}},"Gone Fludd"))))),l.a.createElement(v.Group,null,l.a.createElement(v.List,null,l.a.createElement(v.Cell,{before:l.a.createElement(v.Avatar,{size:60}),size:"l",description:l.a.createElement("div",null,"\u041a\u043e\u043d\u0446\u0435\u0440\u0442, \u0411\u0430\u043b\u0442\u0438\u0439\u0441\u043a\u0430\u044f \u0443\u043b 66"),asideContent:l.a.createElement("div",{style:{fontSize:"14px"}},l.a.createElement("div",null,"22 \u043c\u0430\u0440\u0442\u0430"),l.a.createElement("div",null,"18:00"))},l.a.createElement("div",null,l.a.createElement("div",null,"\u041c\u0430\u044f\u0442\u043d\u0438\u043a \u0424\u0443\u043a\u043e"),l.a.createElement("div",{style:{color:"#9ea1a5",fontWeight:"500",fontSize:"16px"}},"Gone Fludd"))))))))}}]),t}(l.a.Component)),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={activeStory:"events",fetchedUser:null},a.onStoryChange=a.onStoryChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"componentDidMount",value:function(){var e=this;s.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data})}}),s.a.send("VKWebAppGetUserInfo",{}),s.a.subscribe(function(t){switch(console.log(t.detail),t.detail.type){case"VKWebAppGeodataResult":e.setState({locationUser:t.detail.data});break;default:console.log(t.detail.type)}}),s.a.send("VKWebAppGetGeodata",{})}},{key:"render",value:function(){return l.a.createElement(v.Epic,{activeStory:this.state.activeStory,tabbar:l.a.createElement(v.Tabbar,null,l.a.createElement(v.TabbarItem,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed"},l.a.createElement(y.a,null)),l.a.createElement(v.TabbarItem,{onClick:this.onStoryChange,selected:"events"===this.state.activeStory,"data-story":"events"},l.a.createElement(C.a,null)),l.a.createElement(v.TabbarItem,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile"},l.a.createElement(f.a,null)))},l.a.createElement(w,{id:"profile",fetchedUser:this.state.fetchedUser}),l.a.createElement(z,{id:"events",fetchedUser:this.state.fetchedUser}))}}]),t}(l.a.Component);s.a.send("VKWebAppInit",{}),r.a.render(l.a.createElement(P,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(123)}},[[67,1,2]]]);
//# sourceMappingURL=main.90c189f5.chunk.js.map