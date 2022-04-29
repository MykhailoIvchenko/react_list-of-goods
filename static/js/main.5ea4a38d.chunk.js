(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s=n(4),i=n.n(s),o=n(2),c=n(5),a=n(6),r=n(8),l=n(7),d=n(1),u=n.n(d),h=(n(13),n(0)),b=function(t){var e=t.goods,n=t.lengthForDisplay;return Object(h.jsx)(h.Fragment,{children:e.map((function(t){return Object(h.jsx)("li",{className:"GoodsList-item",hidden:t.length>n,children:t},t)}))})},j=(n(15),function(t){var e=t.values,n=t.defaultValue;return Object(h.jsx)(h.Fragment,{children:e.map((function(t){return Object(h.jsxs)("option",{className:"GoodNameLength",value:t,selected:t===n,children:["Max length is"," ".concat(t)]},t)}))})}),g=(n(16),[1,2,3,4,5,6,7,8,9,10]),v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],A=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={goodsArray:v,visibleGoodsArray:v,isListHidden:!0,isButtonHidden:!1,isActionsActive:!1,selectedLength:10},t.handleStartButtonClick=function(){t.setState({isListHidden:!1,isButtonHidden:!0,isActionsActive:!0})},t.handleReverseButtonClick=function(){t.setState((function(t){return{visibleGoodsArray:Object(o.a)(t.visibleGoodsArray).reverse()}}))},t.handleSortButtonClick=function(){t.setState((function(t){return{visibleGoodsArray:Object(o.a)(t.goodsArray).sort((function(t,e){return t.localeCompare(e)}))}}))},t.handleResetButtonClick=function(){t.setState((function(t){return{visibleGoodsArray:t.goodsArray,selectedLength:10}}))},t.handleSortByLengthButtonClick=function(){t.setState((function(t){return{visibleGoodsArray:Object(o.a)(t.goodsArray).sort((function(t,e){return t.length-e.length}))}}))},t.handleSelection=function(e){t.setState({selectedLength:+e.target.value})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state,e=t.visibleGoodsArray,n=t.selectedLength;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("button",{type:"button",className:"StartButton",hidden:this.state.isButtonHidden,onClick:this.handleStartButtonClick,children:"Start"}),Object(h.jsx)("h1",{children:"Goods"}),Object(h.jsxs)("h2",{children:["Total amount of goods is:"," ".concat(v.length)]}),Object(h.jsx)("select",{className:"SelectList",onChange:this.handleSelection,children:Object(h.jsx)(j,{values:g,defaultValue:this.state.selectedLength})}),Object(h.jsx)("button",{type:"button",hidden:!this.state.isActionsActive,className:"Actions ReverseButton",onClick:this.handleReverseButtonClick,children:"Reverse"}),Object(h.jsx)("button",{type:"button",hidden:!this.state.isActionsActive,className:"Actions SortButton",onClick:this.handleSortButtonClick,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",hidden:!this.state.isActionsActive,className:"Actions ResetButton",onClick:this.handleResetButtonClick,children:"Reset"}),Object(h.jsx)("button",{type:"button",hidden:!this.state.isActionsActive,className:"Actions SortByLengthButton",onClick:this.handleSortByLengthButtonClick,children:"Sort by length"}),Object(h.jsx)("ul",{className:"GoodsList",hidden:this.state.isListHidden,children:Object(h.jsx)(b,{goods:e,lengthForDisplay:n})})]})}}]),n}(u.a.Component),f=A;i.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5ea4a38d.chunk.js.map