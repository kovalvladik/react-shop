(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{73:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),o=n.n(c),i=(n(73),n(115)),s=n(117),j=n(118),d=n(35),l=n(82),u=n(2),b=Object(i.a)((function(e){return{root:{flexGrow:1,backgroundColor:"#afc2cb"},title:{flexGrow:1}}}));function O(){var e=b();return Object(u.jsx)("div",{className:e.root,children:Object(u.jsx)(s.a,{position:"static",className:e.root,children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(d.a,{align:"center",variant:"h6",className:e.title,children:"React Shop"}),Object(u.jsx)(l.a,{color:"inherit",children:"Login"})]})})})}var p=n(83),m=n(119),h=n(56),x=n.n(h),f=Object(i.a)((function(e){return{root:{backgroundColor:"#afc2cb",padding:e.spacing(3,2),marginTop:"20px"},icons:{position:"relative",left:"49%"}}}));function v(){var e=f();return Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsx)(p.a,{href:"https://tlgg.ru/vladohk",className:e.icons,children:Object(u.jsx)(x.a,{})}),Object(u.jsx)(m.a,{component:"main",maxWidth:"md",children:Object(u.jsxs)(d.a,{align:"center",variant:"body1",children:["\xa9 ",(new Date).getFullYear()," Kovalevskiy Production"]})})]})}var E=n(8),g=n(11),y=n(120),k=Object(i.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function S(){var e=k();return Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsx)(y.a,{}),Object(u.jsx)(y.a,{color:"secondary"})]})}var N=n(12),T=n(4),B=n(121),w=n(122),_=n(123),A=n(125),F=n(124),C=n(133),q=n(134),L=n(57),M=n.n(L),D=n(44),R=n.n(D),I=n(22);function P(e,t){var n=t.type,r=t.payload;switch(n){case"GET_ITEMS":return Object(E.a)(Object(E.a)({},e),{},{items:r});case"ADD_TO_BASKET":var a=e.order.findIndex((function(e){return e.id===r.id})),c=null;if(a<0){var o=Object(E.a)(Object(E.a)({},r),{},{quantity:1});c=[].concat(Object(I.a)(e.order),[o])}else c=e.order.map((function(e,t){return t===a?Object(E.a)(Object(E.a)({},e),{},{quantity:e.quantity+1}):e}));return Object(E.a)(Object(E.a)({},e),{},{order:c,alertName:r.name});case"REMOVE_ELEMENT":return Object(E.a)(Object(E.a)({},e),{},{order:e.order.map((function(e){if(e.id===r.id){var t=e.quantity-1;return Object(E.a)(Object(E.a)({},e),{},{quantity:t>=0?t:0})}return e}))});case"ADD_ELEMENT":return Object(E.a)(Object(E.a)({},e),{},{order:e.order.map((function(e){if(e.id===r.id){var t=e.quantity+1;return Object(E.a)(Object(E.a)({},e),{},{quantity:t})}return e}))});case"HANDLE_BASKET_SHOW":return Object(E.a)(Object(E.a)({},e),{},{basketShow:!e.basketShow});case"REMOVE_FROM_BASKET":return Object(E.a)(Object(E.a)({},e),{},{order:e.order.filter((function(e){return e.id!==r.id}))});case"CLOSE_ALERT":return Object(E.a)(Object(E.a)({},e),{},{alertName:""});default:return e}}var K=Object(r.createContext)(),z={items:[],loading:!0,order:[],basketShow:!1,alertName:""},G=function(e){var t=e.children,n=Object(r.useReducer)(P,z),a=Object(g.a)(n,2),c=a[0],o=a[1];return c.closeAlert=function(){o({type:"CLOSE_ALERT"})},c.removeFromBasket=function(e){o({type:"REMOVE_FROM_BASKET",payload:{id:e}})},c.handleBasketShow=function(){o({type:"HANDLE_BASKET_SHOW"})},c.addElement=function(e){o({type:"ADD_ELEMENT",payload:{id:e}})},c.removeElement=function(e){o({type:"REMOVE_ELEMENT",payload:{id:e}})},c.addToBasket=function(e){o({type:"ADD_TO_BASKET",payload:e})},c.getItems=function(e){o({type:"GET_ITEMS",payload:e})},Object(u.jsxs)(K.Provider,{value:c,children:[" ",t]})},H=Object(i.a)((function(e){return{root:{maxWidth:345,marginTop:"15px"},media:{height:0,paddingTop:"100%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},buttonStyles:{borderStyle:3}}}));function V(e){var t=e.id,n=e.name,c=e.description,o=e.price,i=(e.full_background,e.rarity),s=e.image,j=e.icon,b=Object(r.useContext)(K).addToBasket,O=H(),m=a.a.useState(!1),h=Object(g.a)(m,2),x=h[0],f=h[1];return Object(u.jsxs)(B.a,{id:t,className:O.root,children:[Object(u.jsx)(w.a,{avatar:Object(u.jsx)(q.a,{src:j,"aria-label":"recipe"}),title:n,subheader:i}),Object(u.jsx)(_.a,{className:O.media,image:s}),Object(u.jsxs)(F.a,{disableSpacing:!0,children:[Object(u.jsx)(p.a,{"aria-label":"add to favorites",children:Object(u.jsx)(M.a,{})}),Object(u.jsx)(l.a,{className:O.buttonStyles,onClick:function(){return b({id:t,name:n,price:o})},children:"Buy"}),Object(u.jsxs)("span",{children:[" Price: ",o," $"]}),Object(u.jsx)(p.a,{className:Object(T.a)(O.expand,Object(N.a)({},O.expandOpen,x)),onClick:function(){f(!x)},"aria-expanded":x,"aria-label":"show more",children:Object(u.jsx)(R.a,{})})]}),Object(u.jsx)(C.a,{in:x,timeout:"auto",unmountOnExit:!0,children:Object(u.jsx)(A.a,{children:Object(u.jsx)(d.a,{paragraph:!0,children:c})})})]})}var W=n(126);function J(e){var t=e.items,n=void 0===t?[]:t,r=Object(i.a)((function(e){return{root:{flexGrow:1,marginTop:"20px",marginLeft:"3px"}}}))();return n.length?Object(u.jsx)(W.a,{container:!0,spacing:1,className:r.root,children:n.map((function(e){return Object(u.jsx)(W.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(u.jsx)(V,Object(E.a)({},e),e.id)})}))}):Object(u.jsx)("h3",{children:"Nothing Here"})}var Q=n(58),Y=n.n(Q),$=Object(i.a)((function(e){return{root:{position:"fixed",bottom:"2rem",right:"2rem",cursor:"pointer",zIndex:"5",padding:"1 rem",backgroundColor:"#e1f5fe"}}}));function U(e){var t=e.quantity,n=void 0===t?0:t,r=e.handleBasketShow,a=void 0===r?Function.prototype:r,c=$();return Object(u.jsx)("div",{children:Object(u.jsxs)(p.a,{className:c.root,onClick:a,children:[Object(u.jsx)(Y.a,{}),n?Object(u.jsx)("span",{children:n}):null]})})}var X=n(59),Z=n(127),ee=n(128),te=n(132),ne=n(129),re=n(135),ae=n(130),ce=n(62),oe=n.n(ce),ie=n(61),se=n.n(ie),je=n(60),de=n.n(je),le=Object(i.a)({root:{position:"absolute",cursor:"pointer",top:"3rem",right:"0.5rem",color:"#ba000d"},button:{position:"absolute",cursor:"pointer",top:"5rem",right:"5rem"},deleteButton:{position:"absolute",cursor:"pointer",top:"4.4rem",right:"0.5rem"}});function ue(e){var t=e.id,n=e.name,a=e.price,c=e.quantity,o=e.removeFromBasket,i=void 0===o?Function.prototype:o,s=e.removeElement,j=void 0===s?Function.prototype:s,b=e.addElement,O=void 0===b?Function.prototype:b,m=Object(r.useContext)(K);Object(X.a)(m);var h=le();return Object(u.jsxs)(re.a,{children:[Object(u.jsx)(Z.a,{expandIcon:Object(u.jsx)(R.a,{}),"aria-label":"Expand","aria-controls":"additional-actions1-content",id:t,children:Object(u.jsx)(ee.a,{"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:Object(u.jsx)(te.a,{}),label:n})}),Object(u.jsxs)(ne.a,{children:[Object(u.jsxs)(d.a,{color:"textSecondary",children:["Price  for 1 element: ",a,".  Quantity : ",c,".  Price for all elements : ",a*c]}),Object(u.jsxs)(ae.a,{className:h.button,children:[Object(u.jsx)(l.a,{"aria-label":"reduce",onClick:function(){return j(t)},children:Object(u.jsx)(de.a,{fontSize:"small"})}),Object(u.jsx)(l.a,{"aria-label":"increase",onClick:function(){return O(t)},children:Object(u.jsx)(se.a,{fontSize:"small"})})]}),Object(u.jsx)(p.a,{"aria-label":"delete",className:h.deleteButton,children:Object(u.jsx)(oe.a,{onClick:function(){return i(t)}})})]})]})}var be=n(136),Oe=n(63),pe=n.n(Oe),me=Object(i.a)({root:{width:"100%",position:"fixed",backgroundColor:"#e1f5fe",top:"30%",boxShadow:"initial",borderBlock:"20px",borderBlockColor:"black"},button:{position:"absolute",cursor:"pointer",top:"0",right:"0.5rem",color:"#ba000d"}});function he(e){var t=e.order,n=void 0===t?[]:t,r=e.handleBasketShow,a=void 0===r?Function.prototype:r,c=e.removeFromBasket,o=void 0===c?Function.prototype:c,i=e.removeElement,s=void 0===i?Function.prototype:i,j=e.addElement,b=void 0===j?Function.prototype:j,O=n.reduce((function(e,t){return e+t.price*t.quantity}),0),p=me();return Object(u.jsx)("div",{children:Object(u.jsxs)(be.a,{className:p.root,children:[Object(u.jsxs)(be.a,{children:[Object(u.jsx)(l.a,{className:p.button,children:Object(u.jsx)(pe.a,{fontSize:"medium",onClick:a})}),Object(u.jsx)(d.a,{align:"center",children:" Basket"})]}),n.length?n.map((function(e){return Object(u.jsx)(ue,Object(E.a)(Object(E.a)({},e),{},{removeFromBasket:o,removeElement:s,addElement:b}),e.id)})):Object(u.jsx)(be.a,{children:" nothing here "}),Object(u.jsx)(be.a,{children:Object(u.jsxs)(d.a,{align:"center",children:[" Full Price : ",O]})})]})})}var xe=n(131),fe=Object(i.a)((function(e){return{root:{position:"fixed",bottom:"2rem",width:"30%",zIndex:"0"}}}));function ve(e){var t=fe(),n=e.name,a=void 0===n?"":n,c=e.closeAlert,o=void 0===c?Function.prototype:c;return Object(r.useEffect)((function(){var e=setTimeout(o,3e3);return function(){clearTimeout(e)}}),[a]),Object(u.jsx)("div",{className:t.root,children:Object(u.jsxs)(xe.a,{severity:"success",color:"success",children:[a," was  added"]})})}function Ee(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),o=Object(g.a)(c,2),i=o[0],s=o[1],j=Object(r.useState)([]),d=Object(g.a)(j,2),l=d[0],b=d[1],O=Object(r.useState)(!1),p=Object(g.a)(O,2),m=p[0],h=p[1],x=Object(r.useState)(""),f=Object(g.a)(x,2),v=f[0],y=f[1],k=function(){h(!m)};return Object(r.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=en",{headers:{Authorization:"a9d8993b-14154dfa-2c98731c-95814608"}}).then((function(e){return e.json()})).then((function(e){e.featured&&a(e.featured),s(!1)}))}),[]),Object(u.jsxs)("main",{children:[Object(u.jsx)(U,{quantity:l.length,handleBasketShow:k}),i?Object(u.jsx)(S,{}):Object(u.jsx)(J,{items:n}),m&&Object(u.jsx)(he,{order:l,handleBasketShow:k,addElement:function(e){var t=l.map((function(t){if(t.id===e){var n=t.quantity+1;return Object(E.a)(Object(E.a)({},t),{},{quantity:n})}return t}));b(t)},removeFromBasket:function(e){var t=l.filter((function(t){return t.id!==e}));b(t)},removeElement:function(e){var t=l.map((function(t){if(t.id===e){var n=t.quantity-1;return Object(E.a)(Object(E.a)({},t),{},{quantity:n>=0?n:0})}return t}));b(t)}}),v&&Object(u.jsx)(ve,{name:v,closeAlert:function(){y("")}})]})}var ge=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{}),Object(u.jsx)(G,{children:Object(u.jsx)(Ee,{})}),Object(u.jsx)(v,{})]})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(ge,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.e40676a3.chunk.js.map