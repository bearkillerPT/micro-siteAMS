(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{117:function(e,t,a){e.exports=a.p+"static/media/vegifruit.9cd2e61a.png"},118:function(e,t,a){e.exports=a.p+"static/media/greencity.978665f2.png"},119:function(e,t,a){e.exports=a.p+"static/media/saladasmais.0273522e.jpg"},120:function(e,t,a){e.exports=a.p+"static/media/sandesBase.69a34ba3.jpg"},121:function(e,t,a){e.exports=a.p+"static/media/pratoCarne.92d38d67.jpg"},122:function(e,t,a){e.exports=a.p+"static/media/pratoPeixe.20f9cfe0.jpg"},233:function(e,t,a){e.exports=a.p+"static/media/xmaspromo.1e866ef4.jpg"},234:function(e,t,a){e.exports=a.p+"static/media/newYearPromo.40cdf873.jpg"},280:function(e,t,a){"use strict";a.d(t,"c",(function(){return He})),a.d(t,"d",(function(){return Qe})),a.d(t,"a",(function(){return Me})),a.d(t,"b",(function(){return Ye}));var n=a(4),r=a.n(n),o=a(0),i=a.n(o),c=a(44),l=a(3),s=a(2),u=a(5),d=a(49),m=a(452),f=a(69),g=a(453),p=a(34),y=a(31),E=a(26),b=a(27),v=a(33);a(93),a(94),a(95);function h(e){var t=Object(o.useState)({}),a=r()(t,2),n=a[0],c=a[1],l=Qe.getState().cartReducer.user;Object(p.b)();S(l,c),Object(o.useEffect)((function(){setTimeout((function(){return S(l,c)}),1e3),null==n&&setTimeout((function(){return c({})}),1e3)}),[n]);var m=function(){if(null==n)return 0;for(var e=0,t=0,a=Object.keys(n);t<a.length;t++){var r=a[t];e+=n[r].Preco}return e};return null==n?i.a.createElement(s.a,null,i.a.createElement(u.a,{style:D.restaurantesOffer},"Pre\xe7o total: ",m(),"\u20ac"),i.a.createElement(d.a,{style:D.payButtonContainer},i.a.createElement(u.a,{style:D.payButtonText},"Pagar"))):i.a.createElement(s.a,null,i.a.createElement(y.a,null,Object.keys(n).map((function(e){return i.a.createElement(b.a,{underlayColor:"#DDDDDD",style:D.button,key:e},i.a.createElement(s.a,{style:D.containerRow},i.a.createElement(s.a,{style:D.containerRow},i.a.createElement(E.a,{style:D.image,source:P(n[e].image)})),i.a.createElement(s.a,{style:D.containerColumn},i.a.createElement(u.a,{style:D.restaurantesOffer},n[e].Name),i.a.createElement(u.a,{style:D.foodText},"Op\xe7\xf5es : ",n[e].Opcoes,"\n","Pre\xe7o : ",n[e].Preco," \u20ac")),i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:D.delButton,onPress:function(){Me.ref("Users/"+l+"/cart/"+e).remove(),Me.ref("Users/"+l+"/cart").once("value").then((function(e){c(e.val())}))}},i.a.createElement(v.a,{name:"delete",size:25}))))}))),i.a.createElement(u.a,{style:D.restaurantesOffer},"Pre\xe7o total: ",m(),"\u20ac"),i.a.createElement(d.a,{style:D.payButtonContainer},i.a.createElement(u.a,{style:D.payButtonText},"Pagar")))}var O=Object(m.a)();function S(e,t){Me.ref("Users/"+e+"/cart").once("value").then((function(e){t(e.val())}))}function x(e){return i.a.createElement(O.Navigator,{initialroute:"Carrinho",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(O.Screen,{name:"Carrinho",component:h}))}var P=function(e){var t=He[e];return null!=t?t:He.default},D=l.a.create({containerRow:{flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7,backgroundColor:"#DDDDDD"},delButton:{flex:1,flexDirection:"row",justifyContent:"center",alignSelf:"center"},image:{width:150,height:100},payButtonContainer:{elevation:8,backgroundColor:"#009688",borderRadius:10,paddingVertical:10,paddingHorizontal:12},payButtonText:{fontSize:18,color:"#fff",fontWeight:"bold",alignSelf:"center",textTransform:"uppercase"}}),C=a(245),w=a(65),j=a(8),k=a.n(j),R=a(82);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){k()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A={cart:[],restaurant:"",isLogged:!1,user:""},B=function(e){return{type:"setLogged",payload:e}},I=function(e){return{type:"setUser",payload:e}};var L=Object(R.b)({cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addPrato":var a="";for(var n in void 0)for(var r in n.Pratos)r===t.payload&&(a=n.name);if(""!=e.restaurant&&e.restaurant!=a)return;return z(z({},e),{},{cart:e.cart.concat(t.payload)});case"delPrato":return z(z({},e),{},{cart:e.cart.filter((function(e){return e!==t.payload}))});case"setLogged":return z(z({},e),{},{isLogged:t.payload});case"setUser":return z(z({},e),{},{user:t.payload});default:return e}}});function N(e){var t=e.route.params.restaurante.Name,a=Object(o.useState)({}),n=r()(a,2),c=n[0],l=n[1],d=Object(o.useState)([]),m=r()(d,2),f=(m[0],m[1],Qe.getState().cartReducer.user);Object(o.useEffect)((function(){Me.ref("restaurantes/"+t+"/Pratos").once("value").then((function(e){return l(e.val())}))}),[]);Object(p.b)();return i.a.createElement(s.a,{style:{flex:1}},i.a.createElement(u.a,{style:U.restaurantesOffer},"Pratos Dispon\xedveis:"),i.a.createElement(y.a,null,Object.keys(c).map((function(e){return console.log(c[e]),i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:U.button,key:c[e].Id,onPress:function(){Me.ref("Users/"+f+"/cart").push(c[e])}},i.a.createElement(s.a,{style:U.containerRow},i.a.createElement(E.a,{style:U.image,source:V(c[e].image)}),i.a.createElement(s.a,{style:U.containerColumn},i.a.createElement(u.a,{style:U.restaurantesOffer},c[e].Name),i.a.createElement(u.a,{style:U.foodText},"Op\xe7\xf5es : ",c[e].Opcoes,"\n","Pre\xe7o : ",c[e].Preco," \u20ac"))))}))))}var V=function(e){var t=He[e];return null!=t?t:He.default},U=l.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7},image:{width:150,height:100}});function W(e){var t=e.navigation,a=(e.route,Object(o.useState)({})),n=r()(a,2),c=n[0],l=n[1];return Object(o.useEffect)((function(){Me.ref("restaurantes").once("value").then((function(e){return l(e.val())}))}),[]),console.log(c),i.a.createElement(s.a,{style:{flex:1,padding:20}},i.a.createElement(y.a,{style:q.container},Object.keys(c).map((function(e){return i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:q.button,key:c[e].id,onPress:function(){return t.push("Pratos",{restaurante:c[e]})}},i.a.createElement(s.a,{style:q.restaurante},i.a.createElement(E.a,{source:F(c[e].image),style:q.image}),i.a.createElement(s.a,{style:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}},i.a.createElement(u.a,{style:q.username},e),i.a.createElement(u.a,{style:q.bio},c[e].PricePoint,c[e].Tags.map((function(e){return" \u2e0e "+e}))))))}))))}var F=function(e){var t=He[e];return null!=t?t:He.default},q=l.a.create({container:{paddingBottom:10},restaurante:{flexDirection:"row",paddingBottom:10},username:{fontSize:15,fontWeight:"bold",textAlign:"center"},bio:{fontSize:10,padding:5,textAlign:"left",justifyContent:"flex-start"},button:{padding:7},image:{width:150,height:100}}),H=Object(m.a)();function G(e){var t="";return console.log(e),e.params&&(t=e.params.restaurante),i.a.createElement(H.Navigator,{initialroute:"Restaurantes",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(H.Screen,{name:"Restaurantes",component:W}),i.a.createElement(H.Screen,{name:"Pratos",component:N,initialParams:{restaurante:t}}))}l.a.create({image:{height:300}});var Q=a(270);function M(e){var t=e.navigation,a=(e.route,Object(o.useState)({})),n=r()(a,2),c=n[0],l=n[1],d=Object(o.useState)({}),m=r()(d,2),f=m[0],g=m[1];return Object(o.useEffect)((function(){Me.ref("restaurantes").once("value").then((function(e){return l(e.val())})),Me.ref("promos").once("value").then((function(e){return g(e.val())}))}),[]),i.a.createElement(y.a,{style:{flex:1}},i.a.createElement(s.a,{style:{flexDirection:"column",flex:1,padding:20}},i.a.createElement(u.a,{style:J.restaurantesOffer},"Destaques:"),i.a.createElement(y.a,{style:{flexDirection:"row",flex:1},horizontal:!0},Object.keys(f).map((function(e){return i.a.createElement(s.a,{style:J.restaurantesPromo},i.a.createElement(b.a,{underlayColor:"#DDDDD",activeOpacity:.3,style:J.button,key:f[e].id,onPress:function(){}},i.a.createElement(s.a,{key:f[e].id,style:J.restaurantesPromo},i.a.createElement(s.a,{style:{flexDirection:"column"}},i.a.createElement(E.a,{source:Y(f[e].image),style:J.image}),i.a.createElement(u.a,{style:J.restaurantesTitle},f[e].Name),i.a.createElement(u.a,{style:J.restaurantesDescr},f[e].descr)))))}))),i.a.createElement(u.a,{style:J.restaurantesOffer},"Restaurantes favoritos:"),i.a.createElement(y.a,{style:{flexDirection:"row",flex:1},horizontal:!0},Object.keys(c).map((function(e){return i.a.createElement(s.a,{style:J.restaurantesPromo},i.a.createElement(b.a,{underlayColor:"#DDDDD",activeOpacity:.3,style:J.button,key:c[e].id,onPress:function(){return t.push("Pratos",{restaurante:c[e]})}},i.a.createElement(s.a,{key:c[e].Id,style:J.restaurantesPromo},i.a.createElement(s.a,{style:{flexDirection:"column"}},i.a.createElement(E.a,{source:Y(c[e].image),style:J.image}),i.a.createElement(u.a,{style:J.restaurantesTitle},c[e].Name)))))}))),i.a.createElement(u.a,{style:J.restaurantesOffer,onPress:function(){return Q.a.openURL("https://micro-site-ams.herokuapp.com/")}},"Visite o nosso site!")))}var Y=function(e){var t=He[e];return null!=t?t:He.default},J=l.a.create({restaurantesPromo:{flexDirection:"column",padding:5,width:160,height:200},image:{width:150,height:100},restaurantesTitle:{fontSize:15,fontWeight:"bold",textAlign:"center"},restaurantesDescr:{fontSize:13,textAlign:"center"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},button:{padding:7,height:160}}),Z=Object(m.a)();function K(e){e.route;return i.a.createElement(Z.Navigator,{initialroute:"Home",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(Z.Screen,{name:"Home",component:M}),i.a.createElement(Z.Screen,{name:"Pratos",component:N}))}a(233),a(234),a(117),a(118),a(119),a(93),a(94),a(95),a(120),a(121),a(122);function X(e){e.navigation;return Object(f.a)(),i.a.createElement(i.a.Fragment,null)}var $=Object(g.a)();function _(){Object(p.b)()(B(!1));var e=Qe.getState().cartReducer.user;return console.log(e),i.a.createElement(C.a,{independent:!0},i.a.createElement($.Navigator,{initialRouteName:"Home",screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){e.focused;var a,n=e.color,r=e.size;if("Home"===t.name)a="ios-home";else if("Restaurantes"===t.name)a="ios-restaurant";else{if("Carrinho"!==t.name)return i.a.createElement(v.a,{name:"logout",size:r,color:n});a="md-cart"}return i.a.createElement(w.a,{name:a,size:r,color:n})}}},tabBarOptions:{activeTintColor:"tomato",inactiveTintColor:"gray"}},i.a.createElement($.Screen,{name:"Restaurantes",component:G}),i.a.createElement($.Screen,{name:"Home",component:K}),i.a.createElement($.Screen,{name:"Carrinho",component:x}),i.a.createElement($.Screen,{name:"Logout",component:X})))}var ee=a(10),te=a.n(ee);function ae(e){e.route;var t=Qe.getState().cartReducer.user,a=Object(o.useState)(""),n=r()(a,2),c=n[0],l=n[1],d=Object(o.useState)({}),m=r()(d,2),f=m[0],g=m[1];return re(t,l,g),""==c||0==Object.keys(f).length?i.a.createElement(s.a,null,i.a.createElement(u.a,null,"Sorry")):i.a.createElement(s.a,{style:{flex:1}},i.a.createElement(u.a,{style:oe.restaurantesOffer},"Pratos Disponibilizados:"),i.a.createElement(y.a,null,Object.keys(f[c].Pratos).map((function(e){return i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:oe.button,key:f[c].Pratos[e].Id,onPress:function(){}},i.a.createElement(s.a,{style:oe.containerRow},i.a.createElement(s.a,{style:oe.containerRow},i.a.createElement(E.a,{style:oe.image,source:ne(f[c].Pratos[e].image)})),i.a.createElement(s.a,{style:oe.containerColumn},i.a.createElement(u.a,{style:oe.restaurantesOffer},f[c].Pratos[e].Name),i.a.createElement(u.a,{style:oe.foodText},"Op\xe7\xf5es : ",f[c].Pratos[e].Opcoes,"\n","Pre\xe7o : ",f[c].Pratos[e].Preco," \u20ac")),i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:oe.delButton,onPress:function(){Me.ref("restaurantes/"+c+"/Pratos/"+e).remove(),re(t,l,g)}},i.a.createElement(v.a,{name:"delete",size:25}))))}))))}var ne=function(e){var t=He[e];return null!=t?t:He.default};function re(e,t,a){return te.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,te.a.awrap(Me.ref("Users/"+e).once("value").then((function(e){return t(e.val().restaurante)})));case 2:return n.next=4,te.a.awrap(Me.ref("restaurantes").once("value").then((function(e){return a(e.val())})));case 4:case"end":return n.stop()}}),null,null,null,Promise)}var oe=l.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7},image:{width:150,height:100},delButton:{flex:1,flexDirection:"row",justifyContent:"center",alignSelf:"auto"}}),ie=Object(m.a)();function ce(e){e.route;return i.a.createElement(ie.Navigator,{initialroute:"Pratos",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(ie.Screen,{name:"Pratos",component:ae}))}function le(e){e.route;var t=Qe.getState().cartReducer.user,a=Object(o.useState)(""),n=r()(a,2),c=n[0],l=n[1],d=Object(o.useState)({}),m=r()(d,2),f=m[0];return function(e,t,a){te.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,te.a.awrap(Me.ref("Users/"+e).once("value").then((function(e){return t(e.val().restaurante)})));case 2:return n.next=4,te.a.awrap(Me.ref("restaurantes").once("value").then((function(e){return a(e.val())})));case 4:case"end":return n.stop()}}),null,null,null,Promise)}(t,l,m[1]),""==c||0==Object.keys(f).length?i.a.createElement(s.a,null,i.a.createElement(u.a,null,"Sorry")):i.a.createElement(s.a,{style:{flex:1}},i.a.createElement(u.a,{style:se.restaurantesOffer},"Pedidos:"),i.a.createElement(y.a,null,Object.keys(f[c].pedidos).map((function(e){return i.a.createElement(s.a,{style:se.button,key:f[c].pedidos[e].Id},i.a.createElement(s.a,{style:se.containerRow},i.a.createElement(v.a,{name:"new-box",size:50,style:{alignSelf:"center",paddingHorizontal:20}}),i.a.createElement(s.a,{style:se.containerColumn},i.a.createElement(u.a,{style:se.restaurantesOffer},f[c].pedidos[e].Morada),i.a.createElement(u.a,{style:se.foodText},"Pratos : "),i.a.createElement(s.a,{style:se.containerRow},f[c].pedidos[e].Pratos.map((function(t){return i.a.createElement(s.a,{key:f[c].pedidos[e].Id},i.a.createElement(u.a,{style:{paddingLeft:10}},t))}))),i.a.createElement(s.a,{style:se.containerRow},i.a.createElement(u.a,null,"Status:","\n"),i.a.createElement(u.a,{style:{paddingLeft:10}},f[c].pedidos[e].Status)),f[c].pedidos[e].Estafeta&&i.a.createElement(s.a,{style:se.containerRow},i.a.createElement(u.a,null,"Estafeta:","\n"),i.a.createElement(u.a,{style:{paddingLeft:10}},f[c].pedidos[e].Estafeta)),i.a.createElement(s.a,{style:se.containerRow},!f[c].pedidos[e].Estafeta&&i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:se.button,onPress:function(){var t=f[c].pedidos[e];t.Status="waiting",t.Restaurante=c,Me.ref("restaurantes/"+c+"/pedidos/"+e).set(t),Me.ref("Pedidos").push(f[c].pedidos[e])}},i.a.createElement(v.a,{name:"check-bold",size:15,style:{borderRightWidth:5,borderRightColor:"rgba(0,0,0,0)"}})),i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:se.button,onPress:function(){Me.ref("restaurantes/"+c+"/pedidos/"+e).remove()}},i.a.createElement(v.a,{name:"delete",size:15}))))))}))))}var se=l.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7},image:{width:150,height:100}}),ue=Object(m.a)();function de(e){e.route;return i.a.createElement(ue.Navigator,{initialroute:"Orders",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(ue.Screen,{name:"Pedidos",component:le}))}a(117),a(118),a(119),a(93),a(94),a(95),a(120),a(121),a(122);var me=Object(g.a)();function fe(){return Object(p.b)()(B(!1)),i.a.createElement(C.a,{independent:!0},i.a.createElement(me.Navigator,{initialRouteName:"Restaurante",screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){e.focused;var a=e.color,n=e.size;return"Restaurante"===t.name?i.a.createElement(w.a,{name:"ios-restaurant",size:n,color:a}):"Pedidos"===t.name?i.a.createElement(v.a,{name:"food",size:n,color:a}):i.a.createElement(v.a,{name:"logout",size:n,color:a})}}},tabBarOptions:{activeTintColor:"tomato",inactiveTintColor:"gray"}},i.a.createElement(me.Screen,{name:"Restaurante",component:ce}),i.a.createElement(me.Screen,{name:"Pedidos",component:de}),i.a.createElement(me.Screen,{name:"Logout",component:ge})))}function ge(e){e.navigation;return Object(f.a)(),i.a.createElement(i.a.Fragment,null)}var pe=function(){return Object(R.c)(L)},ye=a(281);function Ee(e){e.route;var t=Qe.getState().cartReducer.user,a=Object(o.useState)({}),n=r()(a,2),c=n[0];return function(e,t){te.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.a.awrap(Me.ref("Pedidos").once("value").then((function(e){t(e.val())})));case 2:case"end":return e.stop()}}),null,null,null,Promise)}(0,n[1]),null==c||0==Object.keys(c).length?i.a.createElement(s.a,null,i.a.createElement(u.a,{style:be.restaurantesOffer},"N\xe3o h\xe1 pedidos de momento!")):i.a.createElement(s.a,{style:{flex:1}},i.a.createElement(u.a,{style:be.restaurantesOffer},"Pedidos:"),i.a.createElement(y.a,null,Object.keys(c).map((function(e){return i.a.createElement(s.a,{style:be.button,key:c[e].Id},i.a.createElement(s.a,{style:be.containerRow},i.a.createElement(v.a,{name:"new-box",size:50,style:{alignSelf:"center",paddingHorizontal:20}}),i.a.createElement(s.a,{style:be.containerColumn},i.a.createElement(u.a,{style:be.restaurantesOffer},c[e].Morada),i.a.createElement(u.a,{style:be.foodText},"Pratos : "),i.a.createElement(s.a,{style:be.containerRow},c[e].Pratos.map((function(t){return i.a.createElement(s.a,{key:c[e].Id},i.a.createElement(u.a,{style:{paddingLeft:10}},t))}))),i.a.createElement(s.a,{style:be.containerRow},i.a.createElement(u.a,null,"Status:","\n"),i.a.createElement(u.a,{style:{paddingLeft:10}},c[e].Status)),c[e].Restaurante&&i.a.createElement(s.a,{style:be.containerRow},i.a.createElement(u.a,null,"Restaurante:","\n"),i.a.createElement(u.a,{style:{paddingLeft:10}},c[e].Restaurante)),c[e].Estafeta&&i.a.createElement(s.a,{style:be.containerRow},i.a.createElement(u.a,null,"Estafeta:","\n"),i.a.createElement(u.a,{style:{paddingLeft:10}},c[e].Estafeta)),i.a.createElement(s.a,{style:be.containerRow},!c[e].Estafeta&&i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:be.button,onPress:function(){var a=c[e];a.Status="A entregar",a.Estafeta=t,Me.ref("/Pedidos/"+e).set(a),Me.ref("/restaurantes/"+c[e].Restaurante+"/pedidos/"+c[e].Id).set(a)}},i.a.createElement(v.a,{name:"check-bold",size:15,style:{borderRightWidth:5,borderRightColor:"rgba(0,0,0,0)"}})),c[e].Estafeta&&"Entregue"!=c[e].Status&&i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:be.button,onPress:function(){var t=c[e];t.Status="Entregue",Me.ref("/Pedidos/"+e).set(t),Me.ref("/restaurantes/"+c[e].Restaurante+"/pedidos/"+c[e].Id).set(t)}},i.a.createElement(u.a,null,"Finalizar Encomenda!"))))))}))))}var be=l.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7},image:{width:150,height:100}}),ve=Object(m.a)();function he(e){var t=e.route,a="";return t.params&&(a=t.params.estafeta),i.a.createElement(ve.Navigator,{initialroute:"Orders",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(ve.Screen,{name:"Pedidos",component:Ee,initialParams:a={estafeta:a}}))}var Oe=a(189);function Se(e,t){var a;if("undefined"===typeof Symbol||null==e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return xe(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return xe(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(a)}function xe(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Pe(e){var t=e.route;console.log(t);var a=t.params.estafeta,n=function(){for(var e,t=0,n=0,r=Se(a.feedback);!(e=r()).done;){var o=e.value;console.log(o),t+=o.rating,n+=1}return 1*t/n}();return console.log(n),i.a.createElement(s.a,null,i.a.createElement(u.a,{style:De.restaurantesOffer},"Feedback das entregas:"),i.a.createElement(y.a,null,a.feedback.map((function(e){return i.a.createElement(s.a,{style:De.button,key:e.id},i.a.createElement(s.a,{style:De.containerRow},i.a.createElement(E.a,{style:De.image,source:Le[e.restaurante].image}),i.a.createElement(s.a,{style:De.containerColumn},i.a.createElement(u.a,{style:De.restaurantesOffer},e.restaurante),i.a.createElement(u.a,{style:De.foodText},"Rating:","\n"," "),i.a.createElement(Oe.a,{type:"star",readonly:!0,startingValue:e.rating,tintColor:"rgb(242,242,242)",style:De.rating,imageSize:15}))))})),i.a.createElement(s.a,null,i.a.createElement(u.a,{style:De.restaurantesOffer},"Average Rating: "),i.a.createElement(s.a,{style:De.containerRow},i.a.createElement(Oe.a,{type:"star",readonly:!0,tintColor:"rgb(242,242,242)",startingValue:n}),i.a.createElement(u.a,{style:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black",alignSelf:"center"}},n.toFixed(2),"/5!")))))}var De=l.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:5,borderRadius:13},image:{width:150,height:100},rating:{borderRightWidth:500,borderRightColor:"rgba(0,0,0,0)"}}),Ce=Object(m.a)();function we(e){var t=e.route,a="";return t.params&&(a=t.params.estafeta),i.a.createElement(Ce.Navigator,{initialroute:"Feedback",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(Ce.Screen,{name:"Feedback",component:Pe,initialParams:a}))}var je=a(117),ke=a(118),Re=a(119),Te=a(93),ze=a(94),Ae=a(95),Be=a(120),Ie=a(121),Le={Vegifruit:{name:"Vegifruit",id:0,PricePoint:"\u20ac",Address:"Rua de S\xe3o Sebasti\xe3o, 122 3810 - 187 Aveiro",Tags:["Vegan","Saladas","Biologico"],Pratos:{"Salada de queijo da serra":{name:"Salada de queijo da serra",id:0,"Pre\xe7o":7,"Op\xe7oes":["Extra azeitonas"],image:Ae},"Quiche Vegetariana s/Gl\xfaten":{name:"Quiche Vegetariana s/Gl\xfaten",id:1,"Pre\xe7o":6.5,"Op\xe7\xf5es":[],image:Te},"Creme de espinafres":{name:"Creme de espinafres",id:2,"Pre\xe7o":6.5,"Op\xe7\xf5es":[],image:ze}},image:je},"Green City quiches & saladas, co.":{name:"Green City quiches & saladas, co.",id:1,PricePoint:"\u20ac",Address:"R. de Castro Matoso 28 A, 3810-079 Aveiro",Tags:["Vegan","Saladas","Quiches","Biologico"],Pratos:{"Quiche especial":{name:"Quiche especial",id:0,"Pre\xe7o":6,"Op\xe7oes":["Tamanho grande"],image:ke}},image:ke},"Saladas+":{name:"Saladas+",id:2,PricePoint:"\u20ac",Address:"R. de S\xe3o Sebasti\xe3o 31, 3810-187 Aveiro",Tags:["Vegan","Saladas",,"Biologico"],Pratos:{"Sandes Base":{name:"Sandes Base",id:0,"Pre\xe7o":3.1,"Op\xe7oes":["Extra ovo"],image:Be},"Prato do dia Peixe":{name:"Prato do dia Peixe",id:1,"Pre\xe7o":7.45,"Op\xe7oes":["Extra tempero"],image:a(122)},"Prato do dia Carne":{name:"Prato do dia Carne",id:2,"Pre\xe7o":7.45,"Op\xe7oes":["Extra acompanhamento"],image:Ie}},image:Re}},Ne=pe();function Ve(e){return i.a.createElement(p.a,{store:Ne},i.a.createElement(We,{restaurante:e}))}var Ue=Object(g.a)();function We(e){var t=e.restaurante,a=Object(p.b)(),n=t.estafeta;return a(B(!1)),i.a.createElement(C.a,{independent:!0},i.a.createElement(Ue.Navigator,{initialRouteName:"Pedidos",screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){e.focused;var a=e.color,n=e.size;return"Pedidos"===t.name?i.a.createElement(w.a,{name:"ios-restaurant",size:n,color:a}):"Feedback"===t.name?i.a.createElement(ye.a,{name:"feedback",size:n,color:a}):i.a.createElement(v.a,{name:"logout",size:n,color:a})}}},tabBarOptions:{activeTintColor:"tomato",inactiveTintColor:"gray"}},i.a.createElement(Ue.Screen,{name:"Pedidos",component:he,initialParams:n={estafeta:n}}),i.a.createElement(Ue.Screen,{name:"Feedback",component:we,initialParams:n={estafeta:n}}),i.a.createElement(Ue.Screen,{name:"Logout",component:Fe})))}function Fe(e){e.navigation;return Object(f.a)(),i.a.createElement(i.a.Fragment,null)}a(240);var qe=a(240);a(432);var He={xmasPromo:a(233),newYearPromo:a(234),imgVegifruit:a(117),imgGreenCity:a(118),imgSaladasmais:a(119),imgQuichVeg:a(93),imgCremeEspi:a(94),imgSaladaQSerra:a(95),imgSandesBase:a(120),imgPratoCarne:a(121),imgPratoPeixe:a(122),default:a(435)},Ge={cliente:{type:"cliente",password:"cliente"},restaurante:{type:"restaurante",password:"restaurante",restaurante:"Vegifruit"},estafeta:{type:"estafeta",password:"estafeta",feedback:[{id:1,restaurante:"Vegifruit",rating:5},{id:2,restaurante:"Saladas+",rating:4},{id:3,restaurante:"Green City quiches & saladas, co.",rating:4}],pedidos:[{id:1,restaurante:"Saladas+",prato:"Prato do dia Peixe",morada:"Universidade de Aveiro, DECA"},{id:2,restaurante:"Vegifruit",prato:"Salada de queijo da serra",morada:"Universidade de Aveiro, DETI"},{id:3,restaurante:"Green City quiches & saladas, co.",prato:"Quiche especial",morada:"Universidade de Aveiro, CP"}]}},Qe=pe();qe.initializeApp({apiKey:"AIzaSyDNVW5qZxXnfqYfnNUvpFUH9dAeQfRmHu4",authDomain:"appams-f22a3.firebaseapp.com",projectId:"appams-f22a3",storageBucket:"appams-f22a3.appspot.com",databaseURL:"https://appams-f22a3-default-rtdb.firebaseio.com/",messagingSenderId:"184182571952",appId:"1:184182571952:web:576eed43083fbf07fc8c75",measurementId:"G-CHN6Z9P409"});var Me=qe.database();function Ye(e){return i.a.createElement(p.a,{store:Qe},i.a.createElement(Je,null))}Object(m.a)();function Je(){var e=Object(o.useState)(!1),t=r()(e,2),a=t[0],n=t[1],c=Object(o.useState)(!1),l=r()(c,2),s=l[0],u=l[1],d=Object(o.useState)(!1),m=r()(d,2),f=m[0],g=m[1],p=Object(o.useState)(!1),y=r()(p,2),E=y[0],b=y[1],v=Qe.getState(),h=v.cartReducer.user;return v=v.cartReducer.isLogged,i.a.createElement(i.a.Fragment,null,v&&i.a.createElement(i.a.Fragment,null,a&&i.a.createElement(_,{setIsLogged:!0}),s&&i.a.createElement(fe,{restaurante:Ge[h],setIsLogged:!0}),f&&i.a.createElement(Ve,{estafeta:Ge[h],setIsLogged:!0})),!v&&!E&&i.a.createElement(Ke,{user:h,setUser:I,setIsCliente:n,setIsRestaurante:u,setIsEstafeta:g,setToRegister:b}),!v&&E&&i.a.createElement(Ze,{setToRegister:b}))}function Ze(e){var t=e.setToRegister,a=Object(o.useState)(""),n=r()(a,2),l=n[0],m=n[1],g=Object(o.useState)(""),p=r()(g,2),y=p[0],E=p[1],b=Object(o.useState)(""),v=r()(b,2),h=v[0],O=v[1],S=Object(o.useState)({}),x=r()(S,2),P=x[0],D=x[1];return Object(o.useEffect)((function(){qe.database().ref("Users").once("value").then((function(e){return D(e.val())}))}),[]),i.a.createElement(s.a,{style:Xe.container},i.a.createElement(u.a,{style:Xe.title},"Nutrilink"),i.a.createElement(s.a,{style:Xe.loginContainer},i.a.createElement(s.a,{style:Xe.inputView},i.a.createElement(c.a,{placeholder:"Username",style:Xe.input,onChangeText:function(e){return m(e)}})),i.a.createElement(s.a,{style:Xe.inputView},i.a.createElement(c.a,{placeholder:"Password",style:Xe.input,onChangeText:function(e){return E(e)},secureTextEntry:!0})),i.a.createElement(s.a,{style:Xe.inputView},i.a.createElement(c.a,{placeholder:"Confirm Password",style:Xe.input,onChangeText:function(e){return O(e)},secureTextEntry:!0})),i.a.createElement(s.a,{style:Xe.containerRow},i.a.createElement(d.a,{style:Xe.loginButtonContainer,onPress:function(){if(y==h){var e=P;e[l]={type:"cliente",password:y},Me.ref("Users").set(e),t(!1),Object(f.a)()}}},i.a.createElement(u.a,{style:Xe.loginButtonText},"Confirmar")))))}function Ke(e){e.navigation,e.setIsLogged;var t=e.setIsCliente,a=e.setIsRestaurante,n=e.setIsEstafeta,l=(e.user,e.setUser),m=e.setToRegister,f=Object(o.useState)(""),g=r()(f,2),y=g[0],E=g[1],b=Object(o.useState)({}),v=r()(b,2),h=v[0],O=v[1],S=Object(p.b)();return Object(o.useEffect)((function(){qe.database().ref("Users").once("value").then((function(e){return O(e.val())}))}),[]),i.a.createElement(s.a,{style:Xe.container},i.a.createElement(u.a,{style:Xe.title},"Nutrilink"),i.a.createElement(s.a,{style:Xe.loginContainer},i.a.createElement(s.a,{style:Xe.inputView},i.a.createElement(c.a,{placeholder:"Username",style:Xe.input,onChangeText:function(e){return S(l(e))}})),i.a.createElement(s.a,{style:Xe.inputView},i.a.createElement(c.a,{placeholder:"Password",style:Xe.input,onChangeText:function(e){return E(e)},secureTextEntry:!0})),i.a.createElement(s.a,{style:Xe.containerRow},i.a.createElement(d.a,{style:Xe.loginButtonContainer,onPress:function(){var e=Qe.getState().cartReducer.user;qe.database().ref("Users").once("value").then((function(e){return O(e.val())}));for(var r=0,o=Object.keys(h);r<o.length;r++){if(e===o[r]&&y===h[e].password)switch(h[e].type){case"cliente":S(B(!0)),t(!0);break;case"restaurante":S(B(!0)),a(!0),l(h[e].restaurante);break;case"estafeta":S(B(!0)),n(!0)}}}},i.a.createElement(u.a,{style:Xe.loginButtonText},"Login")),i.a.createElement(d.a,{style:Xe.loginButtonContainer,onPress:function(){m(!0),S(B(!1))}},i.a.createElement(u.a,{style:Xe.loginButtonText},"Registar")))))}var Xe=l.a.create({container:{backgroundColor:"darkcyan",alignItems:"center",flex:1},containerRow:{paddingTop:20,flexDirection:"row"},loginContainer:{backgroundColor:"darkcyan",alignItems:"center",justifyContent:"center",flex:1},title:{borderTopWidth:100,borderTopColor:"darkcyan",fontSize:40,fontWeight:"bold",color:"cornsilk"},inputView:{borderBottomWidth:10,borderBottomColor:"darkcyan"},input:{backgroundColor:"darkgray",padding:15,borderRadius:5},loginButtonContainer:{elevation:8,backgroundColor:"#009688",borderRadius:28,paddingVertical:15,paddingHorizontal:25},loginButtonText:{fontSize:18,color:"#fff",fontWeight:"bold",alignSelf:"center",textTransform:"uppercase"}})},289:function(e,t,a){a(290),e.exports=a(438)},290:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},435:function(e,t,a){e.exports=a.p+"static/media/favicon.fa4783d1.png"},93:function(e,t,a){e.exports=a.p+"static/media/quicheVegsGluten.cfd4c587.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/cremedeespinafres.d64f4c65.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/saladaqueijoserra.b0d06c06.jpg"}},[[289,1,2]]]);
//# sourceMappingURL=app.d6e7199a.chunk.js.map