(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);a(68),a(93);var n=a(0),l=a.n(n),r=a(37),c=a.n(r),i=a(10),o=a.n(i),s=a(18),u=a(19),d=a(21),h=a(20),p=a(22),m=a(7),f=a(1),b=(a(61),a(62)),v=a.n(b),E=(a(115),a(116),a(63)),y=a.n(E),C=a(64),g=a.n(C);function O(e){console.log(e);var t=new Date,a=new Date(e.split(".")[2],e.split(".")[1],e.split(".")[0]);return Math.round((t.valueOf()-a.valueOf())/1e3/60/60/24/365.25)}a(117);var j=a(65),P=a.n(j),S=(a(118),a(60),a(66)),U=a.n(S),k=(a(119),Object(f.platform)(),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={activePanel:"profile",city:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",gameCount:"",team:""},a.onChangePanel=a.onChangePanel.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(f.View,{id:"profile",activePanel:this.state.activePanel},l.a.createElement(f.Panel,{id:"profile"},l.a.createElement(f.PanelHeader,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),this.props.fetchedUser&&l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Group,null,l.a.createElement(f.ListItem,{before:this.props.fetchedUser.photo_200?l.a.createElement(f.Avatar,{src:this.props.fetchedUser.photo_200}):null,description:(e=O(this.props.fetchedUser.bdate),(e>9&&e<21?e+" \u043b\u0435\u0442":e%10===1?e+" \u0433\u043e\u0434":e%10<5?e+" \u0433\u043e\u0434\u0430":e%10>=5?e+" \u043b\u0435\u0442":void 0)+", "+(this.props.fetchedUser.city&&this.props.fetchedUser.city.title?this.props.fetchedUser.city.title:""))},"".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name))),l.a.createElement(f.Group,null,l.a.createElement(f.List,null,l.a.createElement(f.Cell,{"data-panel":"choose\u0421ity",before:l.a.createElement(P.a,null)},this.state.city))),l.a.createElement(f.Group,{title:"\u0420\u0430\u043d\u0433"},l.a.createElement(f.List,null,l.a.createElement(f.Cell,{before:l.a.createElement(U.a,null)},this.state.gameCount))))));var e}}]),t}(l.a.Component)),w=(a(120),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={activePanel:"profile",city:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",gameCount:"",team:""},a.onChangePanel=a.onChangePanel.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"render",value:function(){return l.a.createElement(f.View,{id:"profile",activePanel:this.state.activePanel},l.a.createElement(f.Panel,{id:"profile"},l.a.createElement(f.PanelHeader,null,"\u041c\u043e\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Group,null,l.a.createElement(f.List,null,l.a.createElement(f.Cell,{before:l.a.createElement(f.Avatar,{size:72}),size:"l",description:l.a.createElement("div",null,"\u043a\u043e\u043d\u0446\u0435\u0440\u0442"),bottomContent:l.a.createElement("div",null,"\u0411\u0430\u043b\u0442\u0438\u0439\u0441\u043a\u0430\u044f \u0443\u043b 66"),asideContent:"23 \u043c\u0430\u0440\u0442\u0430"},l.a.createElement("div",null,l.a.createElement("div",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),l.a.createElement("br",null),l.a.createElement("div",null,"\u0421\u0435\u043c\u0451\u043d \u0415\u0444\u0438\u043c\u043e\u0432"))))))))}}]),t}(l.a.Component)),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={activeStory:"events",fetchedUser:null},a.onStoryChange=a.onStoryChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data})}}),o.a.send("VKWebAppGetUserInfo",{}),o.a.subscribe(function(t){switch(console.log(t.detail),t.detail.type){case"VKWebAppGeodataResult":e.setState({locationUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetGeodata",{})}},{key:"render",value:function(){return l.a.createElement(f.Epic,{activeStory:this.state.activeStory,tabbar:l.a.createElement(f.Tabbar,null,l.a.createElement(f.TabbarItem,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed"},l.a.createElement(y.a,null)),l.a.createElement(f.TabbarItem,{onClick:this.onStoryChange,selected:"events"===this.state.activeStory,"data-story":"events"},l.a.createElement(g.a,null)),l.a.createElement(f.TabbarItem,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile"},l.a.createElement(v.a,null)))},l.a.createElement(k,{id:"profile",fetchedUser:this.state.fetchedUser}),l.a.createElement(w,{id:"events",fetchedUser:this.state.fetchedUser}))}}]),t}(l.a.Component);o.a.send("VKWebAppInit",{}),c.a.render(l.a.createElement(G,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(121)}},[[67,1,2]]]);
//# sourceMappingURL=main.2668d7ed.chunk.js.map