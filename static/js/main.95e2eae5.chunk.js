(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,o){},13:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),s=o(2),c=o.n(s),r=o(3),i=o(4),l=o(6),u=o(5),d=(o(12),function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods//goods.json").then((function(t){return t.json()}))}),m=function(t){var e=t.goods;return a.a.createElement("div",null,a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t.id,style:{color:"".concat(t.color)}},t.name)}))))},f=function(t){Object(l.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(r.a)(this,o);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={goods:[]},t.LoadAllGoods=function(){d().then((function(e){t.setState({goods:e})}))},t.LoadFiveFirstGoods=function(){d().then((function(e){t.setState({goods:e.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})}))},t.LoadRedGoods=function(){d().then((function(e){t.setState({goods:e.filter((function(t){return"red"===t.color}))})}))},t}return Object(i.a)(o,[{key:"render",value:function(){var t=this.state.goods;return a.a.createElement("div",null,a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement("button",{type:"button",className:"button button__loadAll",onClick:this.LoadAllGoods},"Show List"),a.a.createElement("button",{type:"button",className:"button button__fiveFirst",onClick:this.LoadFiveFirstGoods},"Show 5 first goods"),a.a.createElement("button",{type:"button",className:"button button__redGoods",onClick:this.LoadRedGoods},"Show 5 first goods"),a.a.createElement("div",{className:"GoodsList"},a.a.createElement(m,{goods:t})))}}]),o}(a.a.Component);c.a.render(a.a.createElement(f,null),document.getElementById("root"))},7:function(t,e,o){t.exports=o(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.95e2eae5.chunk.js.map