(window.webpackJsonpfinalproject=window.webpackJsonpfinalproject||[]).push([[0],{104:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(8),i=t.n(c),l=(t(55),t(25)),o=t(17),m=t(34),s=t(35),u=t(39),d=(t(81),t(19)),g=t(30),h=t(66),p=t(12);function E(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?E(t,!0).forEach((function(a){Object(p.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var _={items:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_FAVOURITE":return e.concat([a.payload]);case"REMOVE_FAVOURITE":return e.filter((function(e){return e!==a.payload}));default:return e}},y=Object(g.c)({coins:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_COINS":return console.log("reducer coins"),b({},e,{items:a.payload});default:return e}},favourite:f}),k=[h.a],v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d,O=Object(g.e)(y,{},v(g.a.apply(void 0,k))),w=t(67),j=t.n(w),C=t(127),S=t(124),x=t(126),P=function(e){return{type:"ADD_FAVOURITE",payload:e}},N=function(e){return{type:"REMOVE_FAVOURITE",payload:e}};function T(e){var a=e.coin,t=Object(d.c)();return Object(d.d)((function(e){return e.favourite})).some((function(e){return e&&e.id===a.id}))?n.a.createElement(S.a,{color:"primary",onClick:function(){return t(N(a))}}):n.a.createElement(x.a,{color:"primary",onClick:function(){return t(P(a))}})}var D=t(128),B=t(129),L=t(73),A=t(130),I=t(131),R=t(132),F=t(28),W=Object(C.a)((function(e){return{root:{width:"70%",margin:"15%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650},header:{marginLeft:"0%",marginTop:"10px"}}}));function M(e){var a=W(),t=e.data.filter((function(a){return-1!==a.name.toLowerCase().indexOf(e.search.toLowerCase())}));"asc"===e.order?(console.log("asc test"),t.sort((function(e,a){var t=e.name.toLowerCase(),r=a.name.toLowerCase();return t<r?-1:t>r?1:0}))):"des"===e.order&&(console.log("des test"),t.sort((function(e,a){var t=e.name.toLowerCase(),r=a.name.toLowerCase();return r<t?-1:r>t?1:0}))),"asc"===e.orderPrice?(console.log("asc PRICE test"),t.sort((function(e,a){var t=e.market_data.current_price.gbp,r=a.market_data.current_price.gbp;return t<r?-1:t>r?1:0}))):"des"===e.orderPrice?(console.log("des PRICE test"),t.sort((function(e,a){var t=e.market_data.current_price.gbp,r=a.market_data.current_price.gbp;return r<t?-1:r>t?1:0}))):console.log("no orderPrice test");var r=t.map((function(a){return n.a.createElement(D.a,{key:a.id},n.a.createElement(B.a,{component:"th",scope:"row"},n.a.createElement(F.b,{to:{pathname:"CoinInfo",aboutCoinProps:{coin:a}},style:{textDecoration:"none"}},a.name)),n.a.createElement(B.a,{align:"right"},n.a.createElement("img",{src:a.image.thumb,alt:e.imageSmall})),n.a.createElement(B.a,{align:"right"},"\xa3",a.market_data.current_price.gbp),n.a.createElement(B.a,{align:"right"},"\u20ac",a.market_data.current_price.eur),n.a.createElement(B.a,{align:"right"},a.symbol),n.a.createElement(B.a,{align:"right"},"\xa3",a.market_data.market_cap.gbp),n.a.createElement(B.a,{align:"right"},n.a.createElement(T,{coin:a,key:a.id})))}));return n.a.createElement("div",null,n.a.createElement(L.a,{className:a.root},n.a.createElement(A.a,{className:a.table},n.a.createElement(I.a,null,n.a.createElement(D.a,null,n.a.createElement(B.a,null,"Bitcoins (Top 100 from Coin Gecko)!"),n.a.createElement(B.a,{align:"right"},"Symbol"),n.a.createElement(B.a,{align:"right"},"Price in gbp\xa0(\xa3)"),n.a.createElement(B.a,{align:"right"},"Price in eur\xa0(\u20ac)"),n.a.createElement(B.a,{align:"right"},"Sym\xa0(g)"),n.a.createElement(B.a,{align:"right"},"Market Cap\xa0(\xa3)"),n.a.createElement(B.a,{align:"right"},"Star\xa0(\u2606)"))),n.a.createElement(R.a,null,r))))}var z,V,X=t(149),G=t(148),H=t(133),U=t(134),J={display:"flex",justifyContent:"flex-end",marginTop:"10px"},Y={marginRight:"170px"},K={marginLeft:"170px"},$=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={search:"",order:"",orderPrice:""},t.handleChange=function(e){t.setState({search:e.target.value})},t.handleSort=function(){""===t.state.order?(t.setState({order:"asc"}),V=n.a.createElement(H.a,{color:"primary"}),z=""):"asc"===t.state.order?(t.setState({order:"des"}),V=n.a.createElement(U.a,{color:"primary"}),z=""):(t.setState({order:""}),V="")},t.handleSortPrice=function(){""===t.state.orderPrice?(t.setState({orderPrice:"asc"}),z=n.a.createElement(H.a,{color:"primary"}),V=""):"asc"===t.state.orderPrice?(t.setState({orderPrice:"des"}),z=n.a.createElement(U.a,{color:"primary"}),V=""):(t.setState({orderPrice:""}),z="")},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("before did mount"),this.props.fetchCoins()}},{key:"render",value:function(){var e="";console.log("coin props values:",this.props.coinsProps),e=this.props.coinsProps.data?n.a.createElement(M,{data:this.props.coinsProps.data,search:this.state.search,order:this.state.order,orderPrice:this.state.orderPrice}):n.a.createElement("div",null,"Loading Bitcoins... "),console.log(this.props);var a=this.state.search;return n.a.createElement("div",null,n.a.createElement("div",{style:J},n.a.createElement(X.a,{input:!0,type:"text",value:a,onChange:this.handleChange,placeholder:"Search..."})),n.a.createElement("h3",null,"Top 100 Bitcoins from Coin Gecko!"),n.a.createElement(G.a,{style:Y,onClick:this.handleSort},"Sort by Name ",V),n.a.createElement(G.a,{style:K,onClick:this.handleSortPrice},"Sort by Price ",z),e)}}]),a}(r.Component),q=Object(d.b)((function(e){return{coinsProps:e.coins.items}}),{fetchCoins:function(){return function(e){console.log("fetching"),j.a.get("https://api.coingecko.com/api/v3/coins?order=rank_desc&per_page=100").then((function(a){return e({type:"FETCH_COINS",payload:a})})).catch((function(e){console.log("err",e)}))}}})($),Q=t(142),Z=t(143),ee=t(44),ae=t(72),te=t(138),re=t(141),ne=t(136),ce=t(137),ie=t(139),le=t(140),oe=t(147);function me(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}var se=Object(C.a)({list:{width:250,display:"flex",flexDirection:"column"},links:{textDecoration:"none",marginLeft:"40%"}});function ue(){var e,a=se(),t=n.a.useState({left:!1}),r=Object(ae.a)(t,2),c=r[0],i=r[1],l=function(e,a){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?me(t,!0).forEach((function(a){Object(p.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},c,Object(p.a)({},e,a)))}};return n.a.createElement("div",null,n.a.createElement(re.a,{onClick:l("left",!0)}),n.a.createElement(oe.a,{open:c.left,onClose:l("left",!1),onOpen:l("left",!0)},(e="left",n.a.createElement("div",{className:a.list,role:"presentation",onClick:l(e,!1),onKeyDown:l(e,!1)},n.a.createElement(ne.a,{className:a.list},["Home","Favourites","About"].map((function(e,t){return n.a.createElement(F.c,{to:"/"+e,key:e,className:a.links},n.a.createElement(ce.a,null,t%2===0?n.a.createElement(te.a,null):n.a.createElement(S.a,null)),n.a.createElement(ie.a,{primary:e}))}))),n.a.createElement(le.a,null)))))}var de={padding:"20px"},ge=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(Q.a,{position:"static"},n.a.createElement(Z.a,{title:"Crypto-App"},n.a.createElement("div",null,n.a.createElement(ue,null)),n.a.createElement("div",null,n.a.createElement(ee.a,{variant:"h6",style:de},"Crypto-App")))))}}]),a}(n.a.Component),he=t(31),pe=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"This website was created by Ellie J."),n.a.createElement("br",null),n.a.createElement("p",null,"\u2665"))},Ee=t(144),be=t(145),_e=Object(C.a)({card:{minWidth:275,maxWidth:400},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},a:{textDecoration:"none"}});function fe(e){var a="https://www.coingecko.com/en/coins/".concat(e.data.coin.id,"/usd"),t=_e();return n.a.createElement(Ee.a,{className:t.card},n.a.createElement(be.a,null,n.a.createElement(ee.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Coin Name:"),n.a.createElement(ee.a,{variant:"h5",component:"h2"},e.data.coin.name),n.a.createElement(ee.a,{className:t.pos,color:"textSecondary"},e.data.coin.symbol),n.a.createElement(ee.a,{variant:"body2",component:"p"},n.a.createElement("img",{src:e.data.coin.image.thumb,alt:e.imageSmall}),n.a.createElement("br",null)),n.a.createElement(G.a,{size:"small"},n.a.createElement("a",{href:a,className:t.a},"Learn More"))))}var ye=t(146),ke=Object(C.a)({card:{minWidth:275,maxWidth:400},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function ve(e){var a=ke();return n.a.createElement(Ee.a,{className:a.card},n.a.createElement(be.a,null,n.a.createElement(ee.a,{className:a.title,color:"textSecondary",gutterBottom:!0},"Circulation Supply:"),n.a.createElement(ee.a,{variant:"h5",component:"h2"},e.data.coin.market_data.circulating_supply),n.a.createElement("hr",null),n.a.createElement(ee.a,{className:a.pos,color:"textSecondary"},"Last updated:"),n.a.createElement(ee.a,{variant:"body2",component:"p"},e.data.coin.last_updated,n.a.createElement("br",null))),n.a.createElement(ye.a,null))}var Oe=Object(C.a)({card:{minWidth:275,maxWidth:400},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},star:{marginTop:10,marginBottom:10}});function we(e){var a=Oe();return n.a.createElement(Ee.a,{className:a.card},n.a.createElement(be.a,null,n.a.createElement(ee.a,{className:a.title,color:"textSecondary",gutterBottom:!0},"Market Cap:"),n.a.createElement(ee.a,{variant:"h5",component:"h2"},e.data.coin.market_data.market_cap_change_24h),n.a.createElement("hr",null),n.a.createElement(ee.a,{variant:"body2",component:"p"},n.a.createElement("div",{className:a.star},"Add to Favourites:"),n.a.createElement("div",null,n.a.createElement(T,{coin:e.data.coin,key:e.data.coin.id})))),n.a.createElement(ye.a,null))}var je=Object(C.a)((function(e){return{root:{width:"70%",margin:"15%",marginTop:0,overflowX:"auto"},paper:{marginTop:e.spacing(3),width:"100%",overflowX:"auto",marginBottom:e.spacing(2)},table:{minWidth:650}}}));function Ce(e){console.log("TESTING FROM DENSE TABLE!!",e.data);var a=e.data,t=je();return n.a.createElement("div",{className:t.root},n.a.createElement(L.a,{className:t.paper},n.a.createElement(A.a,{className:t.table,size:"small"},n.a.createElement(I.a,null,n.a.createElement(D.a,null,n.a.createElement(B.a,{align:"right"},"Current Price"),n.a.createElement(B.a,{align:"right"},"High (24h)"),n.a.createElement(B.a,{align:"right"},"Low (24h)"),n.a.createElement(B.a,{align:"right"},"Market Cap Change in Currencies"))),n.a.createElement(R.a,null,n.a.createElement(D.a,{key:a.coin.id},n.a.createElement(B.a,{align:"right"},a.coin.market_data.current_price.aed,"(aed)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.high_24h.aed,"(aed)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.low_24h.aed,"(aed)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.market_cap_change_24h_in_currency.aed,"(aed)")),n.a.createElement(D.a,{key:a.coin.id},n.a.createElement(B.a,{align:"right"},a.coin.market_data.current_price.ars,"(ars)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.high_24h.ars,"(ars)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.low_24h.ars,"(ars)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.market_cap_change_24h_in_currency.ars,"(ars)")),n.a.createElement(D.a,{key:a.coin.id},n.a.createElement(B.a,{align:"right"},a.coin.market_data.current_price.aud,"(aud)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.high_24h.aud,"(aud)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.low_24h.aud,"(aud)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.market_cap_change_24h_in_currency.aud,"(aud)")),n.a.createElement(D.a,{key:a.coin.id},n.a.createElement(B.a,{align:"right"},a.coin.market_data.current_price.bch,"(bch)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.high_24h.bch,"(bch)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.low_24h.bch,"(bch)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.market_cap_change_24h_in_currency.bch,"(bch)")),n.a.createElement(D.a,{key:a.coin.id},n.a.createElement(B.a,{align:"right"},a.coin.market_data.current_price.bdt,"(bdt)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.high_24h.bdt,"(bdt)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.low_24h.bdt,"(bdt)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.market_cap_change_24h_in_currency.bdt,"(bdt)")),n.a.createElement(D.a,{key:a.coin.id},n.a.createElement(B.a,{align:"right"},a.coin.market_data.current_price.bhd,"(bhd)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.high_24h.bhd,"(bhd)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.low_24h.bhd,"(bhd)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.market_cap_change_24h_in_currency.bhd,"(bhd)")),n.a.createElement(D.a,{key:a.coin.id},n.a.createElement(B.a,{align:"right"},a.coin.market_data.current_price.brl,"(brl)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.high_24h.brl,"(brl)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.low_24h.brl,"(brl)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.market_cap_change_24h_in_currency.brl,"(brl)")),n.a.createElement(D.a,{key:a.coin.id},n.a.createElement(B.a,{align:"right"},a.coin.market_data.current_price.usd,"(usd)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.high_24h.usd,"(usd)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.low_24h.usd,"(usd)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.market_cap_change_24h_in_currency.usd,"(usd)")),n.a.createElement(D.a,{key:a.coin.id},n.a.createElement(B.a,{align:"right"},a.coin.market_data.current_price.eur,"(eur)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.high_24h.eur,"(eur)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.low_24h.eur,"(eur)"),n.a.createElement(B.a,{align:"right"},a.coin.market_data.market_cap_change_24h_in_currency.eur,"(eur)"))))))}var Se=Object(C.a)((function(e){return{root:{width:"70%",margin:"15%",marginTop:e.spacing(3),overflowX:"auto",marginBottom:10},table:{minWidth:650},bold:{fontSize:"30px",fontWeight:"bold"},header:{fontStyle:"inherit",marginLeft:"35%",marginTop:"0px",marginBottom:"0px"},spin:{height:"80px",width:"80px"},cardContainer:{display:"flex",justifyContent:"center",flexGrow:1},card:{borderRadius:50,marginTop:10,marginLeft:10,marginRight:10,marginBottom:10}}})),xe=function(e){var a=Se();console.log("test",e.location.aboutCoinProps);var t=e.location.aboutCoinProps;return n.a.createElement("div",null,n.a.createElement(L.a,{className:a.root},n.a.createElement(A.a,{className:a.table},n.a.createElement(I.a,null,n.a.createElement(D.a,null,n.a.createElement(B.a,{align:"right",className:a.bold},t.coin.name),n.a.createElement(B.a,{align:"left"}),n.a.createElement(B.a,{align:"left"}),n.a.createElement(B.a,{align:"left"}),n.a.createElement(B.a,{align:"left"},n.a.createElement("img",{className:a.spin,src:t.coin.image.large,alt:t.coin.image.small})))))),n.a.createElement("div",{className:a.cardContainer},n.a.createElement("div",{className:a.card},n.a.createElement(ve,{data:t})),n.a.createElement("div",{className:a.card},n.a.createElement(fe,{data:t})),n.a.createElement("div",{className:a.card},n.a.createElement(we,{data:t}))),n.a.createElement("div",null,n.a.createElement(Ce,{data:t})))},Pe=Object(C.a)((function(e){return{root:{width:"70%",margin:"15%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650},noFavsTxt:{fontSize:"25px",textAlign:"center",marginTop:"150px"},favTxt:{fontSize:"35px",textAlign:"center",marginTop:"50px",marginLeft:"20px",marginRight:"20px"}}})),Ne=function(){var e=Object(d.d)((function(e){return e.favourite})),a=Pe();return e.length>0?n.a.createElement("div",null,n.a.createElement("div",{className:a.header},n.a.createElement("div",{className:a.favTxt},"Your Favourites:")),n.a.createElement(L.a,{className:a.root},n.a.createElement(A.a,{className:a.table},n.a.createElement(I.a,null,n.a.createElement(D.a,null,n.a.createElement(B.a,null,"Bitcoins (Top 100 from Coin Gecko)!"),n.a.createElement(B.a,{align:"right"},"Symbol"),n.a.createElement(B.a,{align:"right"},"Price in gbp\xa0(\xa3)"),n.a.createElement(B.a,{align:"right"},"Price in eur\xa0(\u20ac)"),n.a.createElement(B.a,{align:"right"},"Sym\xa0(g)"),n.a.createElement(B.a,{align:"right"},"Market Cap\xa0(\xa3)"),n.a.createElement(B.a,{align:"right"},"Star\xa0(\u2606)"))),n.a.createElement(R.a,null,e.map((function(e){return n.a.createElement(D.a,{key:e.id},n.a.createElement(B.a,{component:"th",scope:"row"},n.a.createElement(F.b,{to:{pathname:"CoinInfo",aboutCoinProps:{coin:e}},style:{textDecoration:"none"}},e.name)),n.a.createElement(B.a,{align:"right"},n.a.createElement("img",{src:e.image.thumb,alt:e.image.small})),n.a.createElement(B.a,{align:"right"},"\xa3",e.market_data.current_price.gbp),n.a.createElement(B.a,{align:"right"},"\u20ac",e.market_data.current_price.eur),n.a.createElement(B.a,{align:"right"},e.symbol),n.a.createElement(B.a,{align:"right"},"\xa3",e.market_data.market_cap.gbp),n.a.createElement(B.a,{align:"right"},n.a.createElement(T,{coin:e,key:e.id})))})))))):n.a.createElement("div",{className:a.noFavsTxt},n.a.createElement("p",null,"You have no favourites yet... Star a bitcoin to add it to your list!"),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement(S.a,{color:"primary"})))},Te=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(d.a,{store:O},n.a.createElement(F.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(ge,null),n.a.createElement(he.a,{exact:!0,path:"/",render:function(){return n.a.createElement(q,null)}}),n.a.createElement(he.a,{path:"/Home",render:function(){return n.a.createElement(q,null)}}),n.a.createElement(he.a,{path:"/About",component:pe}),n.a.createElement(he.a,{path:"/Favourites",component:Ne}),n.a.createElement(he.a,{path:"/CoinInfo",component:xe}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,a,t){},76:function(e,a,t){e.exports=t(104)},81:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.bc3f7466.chunk.js.map