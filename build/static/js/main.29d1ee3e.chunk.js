(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],{20:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=(a(25),a(2)),s=a(17),i=a(3),u=a.n(i);var m=function(e){var t=e.handleInput,a=e.search;return r.a.createElement("section",{className:"searchbox-wrap"},r.a.createElement("input",{type:"text",placeholder:"Search for a movie...",className:"trysearch",onChange:t,onKeyPress:a}))};var p=function(e){var t=e.result,a=e.openPopup,n=e.handleImage;return r.a.createElement("div",{className:"result",onClick:function(){return a(t.imdbID)}},r.a.createElement("img",{src:t.Poster,onError:n}),r.a.createElement("h3",null,t.Title))};var d=function(e){var t=e.results,a=e.openPopup,n=function(e){e.target.src="https://www.galamedianews.com/photo/share/no-image-300x400.jpg"};return r.a.createElement("section",{className:"results"},t.map((function(e){return r.a.createElement(p,{key:e.imdbID,result:e,openPopup:a,handleImage:n})})))};var h=function(e){var t=e.selected,a=e.closePopup;return r.a.createElement("section",{className:"popup"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,t.Title," ",r.a.createElement("span",null,"(",t.Year,")")),r.a.createElement("p",{className:"rating"},"Rating: ",t.imdbRating),r.a.createElement("div",{className:"plot"},r.a.createElement("img",{src:t.Poster,onError:function(e){e.target.src="https://www.galamedianews.com/photo/share/no-image-300x400.jpg"}}),r.a.createElement("p",null,t.Plot)),r.a.createElement("button",{className:"close",onClick:a},"Close")))},E=a(14),f=a(15),v=a(18),g=a(16),b=a(19),w=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={hasError:!1},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.state.hasError?(setTimeout((function(){return window.location.reload(!0)}),4e3),r.a.createElement("h2",{className:"error"},"Couldn't find a movie! Please try again...")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(n.Component);var j=function(){var e=Object(n.useState)({s:"",results:[],selected:{}}),t=Object(s.a)(e,2),a=t[0],o=t[1],c="http://www.omdbapi.com/?apikey=dfe6d885";return r.a.createElement(w,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Movie Database")),r.a.createElement("main",null,r.a.createElement(m,{handleInput:function(e){var t=e.target.value;o((function(e){return Object(l.a)({},e,{s:t})}))},search:function(e){"Enter"===e.key&&u()(c+"&s="+a.s).then((function(e){var t=e.data.Search;console.log(t),o((function(e){return Object(l.a)({},e,{results:t})}))}))}}),r.a.createElement(d,{results:a.results,openPopup:function(e){u()(c+"&i="+e).then((function(e){var t=e.data;console.log(t),o((function(e){return Object(l.a)({},e,{selected:t})}))}))}}),"undefined"!=typeof a.selected.Title&&r.a.createElement(h,{selected:a.selected,closePopup:function(){o((function(e){return Object(l.a)({},e,{selected:{}})}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.29d1ee3e.chunk.js.map