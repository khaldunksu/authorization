(this.webpackJsonpauthorization=this.webpackJsonpauthorization||[]).push([[0],{33:function(e,t,a){e.exports=a(54)},38:function(e,t,a){},39:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(29),c=a.n(r),o=(a(38),a(17)),i=a(18),s=a(20),u=a(19),m=a(21),p=(a(39),a(30)),d=a.n(p).a.initializeApp({apiKey:"AIzaSyA0P0-Yr_A6TTrH46phvuA0vyb_SoX5T8k",authDomain:"my-firebase-project-10063.firebaseapp.com",databaseURL:"https://my-firebase-project-10063.firebaseio.com",projectId:"my-firebase-project-10063",storageBucket:"my-firebase-project-10063.appspot.com",messagingSenderId:"19603774294",appId:"1:19603774294:web:d9014b5dbfca7a6f7a94f7",measurementId:"G-R8Z8B8VK6C"}),h=a(13),b=a(9),E=function(){return l.a.createElement("h1",{style:{textAlign:"center",marginTop:"50px"}},"Enjoy the news from around the world.",l.a.createElement("i",{class:"paper plane icon"}))},f=new Request("http://newsapi.org/v2/top-headlines?country=us&apiKey=d8b89ab14a2e4a6fb0ba7ed856e0ee86"),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={news:[],isLoaded:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(f).then((function(e){return e.json()})).then((function(t){e.setState({news:Object.values(t)[2]}),e.setState({isLoaded:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.news;return e.isLoaded?l.a.createElement("div",null,"...Loading"):l.a.createElement("div",{className:"container"},t.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"news"},l.a.createElement("p",{className:"title"},e.title),l.a.createElement("p",{className:"content"},e.description),l.a.createElement("p",{className:"content"},e.content?""!==e.content:""),l.a.createElement("p",null,"More...",l.a.createElement("a",{href:e.url,className:"link"},e.url)),l.a.createElement("hr",null),l.a.createElement("p",{className:"author"},l.a.createElement("i",{class:"user icon"})," ",e.author," ",l.a.createElement("i",null,e.publishedAt)),l.a.createElement("img",{src:e.urlToImage,alt:e.title,style:{width:"80%"}})))})))}}]),t}(l.a.Component),v=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Welcome to Profile page!"),l.a.createElement("button",{class:"negative ui button",type:"submit",onClick:function(){d.auth().signOut()}},"Logout"))},y=a(25),w=function(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(y.a)(c,2),i=o[0],s=o[1];return l.a.createElement("div",{className:"login"},l.a.createElement("form",{class:"ui form",onSubmit:function(e){e.preventDefault(),d.auth().signInWithEmailAndPassword(a,i).then((function(e){})).catch((function(e){console.log(e)}))}},l.a.createElement("div",{class:"field"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"first-name",placeholder:"Username",onChange:function(e){r(e.target.value)},value:a})),l.a.createElement("div",{class:"field"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{name:"last-name",placeholder:"Password",type:"password",value:i,onChange:function(e){s(e.target.value)}})),l.a.createElement("button",{class:"ui button",type:"submit"},"Log in")))},j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={user:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;d.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h.a,null,l.a.createElement("div",{className:"pos-f-t"},l.a.createElement("div",{className:"collapse",id:"navbarToggleExternalContent"},l.a.createElement("div",{className:"bg-dark p-4"},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.b,{to:"/",exact:!0},"Home")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/news",exact:!0},"News")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/profile",exact:!0},"Profile")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/login",exact:!0},"Login")))))),l.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation",style:{outline:"none"}},l.a.createElement("span",{className:"navbar-toggler-icon"})))),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",component:E}),l.a.createElement(b.a,{exact:!0,path:"/news",component:g}),this.state.user?l.a.createElement(b.a,{exact:!0,path:"/profile",component:v}):l.a.createElement(b.a,{exact:!0,path:"/login",component:w}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.36f7cada.chunk.js.map