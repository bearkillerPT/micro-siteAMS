(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/quicheVegsGluten.cfd4c587.jpg"},106:function(e,t,a){e.exports=a.p+"static/media/cremedeespinafres.d64f4c65.jpg"},107:function(e,t,a){e.exports=a.p+"static/media/saladaqueijoserra.b0d06c06.jpg"},152:function(e,t,a){e.exports=a.p+"static/media/vegifruit.9cd2e61a.png"},153:function(e,t,a){e.exports=a.p+"static/media/greencity.978665f2.png"},154:function(e,t,a){e.exports=a.p+"static/media/saladasmais.0273522e.jpg"},155:function(e,t,a){e.exports=a.p+"static/media/sandesBase.69a34ba3.jpg"},156:function(e,t,a){e.exports=a.p+"static/media/pratoCarne.92d38d67.jpg"},157:function(e,t,a){e.exports=a.p+"static/media/pratoPeixe.20f9cfe0.jpg"},268:function(e,t,a){"use strict";a.d(t,"a",(function(){return Xe}));var r=a(8),n=a.n(r),o=a(0),i=a.n(o),s=a(46),c=a(3),l=a(2),u=a(9),d=a(54),m=a(433),f=a(434),g=a(6),p=a.n(g),y=a(80);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){p()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P={cart:[],restaurant:""};var h=Object(y.b)({cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addPrato":var a="";for(var r in re)for(var n in r.Pratos)n===t.payload&&(a=r.name);if(""!=e.restaurant&&e.restaurant!=a)return;return E(E({},e),{},{cart:e.cart.concat(t.payload)});case"delPrato":return E(E({},e),{},{cart:e.cart.filter((function(e){return e!==t.payload}))});default:return e}}}),v=a(68),O=a(30),S=a(25),x=a(31);function C(e,t){var a;if("undefined"===typeof Symbol||null==e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return D(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(a)}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a(105),a(106),a(107);function k(e){var t=Object(v.b)(),a=Object(v.c)((function(e){return e.cartReducer.cart})),r=Object(v.c)((function(e){return e.cartReducer.restaurant}));console.log(a),console.log(r);return i.a.createElement(l.a,null,i.a.createElement(O.a,null,a.map((function(e){return i.a.createElement(x.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:A.button,key:e.id,onPress:function(){return t(function(e){return{type:"delPrato",payload:e}}(e))}},i.a.createElement(l.a,{style:A.containerRow},i.a.createElement(S.a,{style:A.image,source:e.image}),i.a.createElement(l.a,{style:A.containerColumn},i.a.createElement(u.a,{style:A.restaurantesOffer},e.name),i.a.createElement(u.a,{style:A.foodText},"Op\xe7\xf5es : ",e.Op\u00e7oes,"\n","Pre\xe7o : ",e.Pre\u00e7o," \u20ac"))))}))),i.a.createElement(u.a,{style:A.restaurantesOffer},"Pre\xe7o total: ",function(){for(var e,t=0,r=C(a);!(e=r()).done;){t+=e.value.Pre\u00e7o}return t}(),"\u20ac"),i.a.createElement(d.a,{style:A.payButtonContainer},i.a.createElement(u.a,{style:A.payButtonText},"Pagar")))}var w=Object(m.a)();function j(e){return console.log("navigator"),console.log(e),i.a.createElement(w.Navigator,{initialroute:"Carrinho",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(w.Screen,{name:"Carrinho",component:k}))}var A=c.a.create({containerRow:{flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,padding:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7,backgroundColor:"#DDDDDD"},image:{width:150,height:100},payButtonContainer:{elevation:8,backgroundColor:"#009688",borderRadius:10,paddingVertical:10,paddingHorizontal:12},payButtonText:{fontSize:18,color:"#fff",fontWeight:"bold",alignSelf:"center",textTransform:"uppercase"}}),T=a(234),R=a(63),B=function(){return Object(y.c)(h)};function z(e){var t=e.route.params.restaurante,a=Object(v.b)();return i.a.createElement(l.a,null,i.a.createElement(u.a,{style:V.restaurantesOffer},"Pratos Dispon\xedveis:"),i.a.createElement(O.a,null,Object.keys(t.Pratos).map((function(e){return i.a.createElement(x.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:V.button,key:t.Pratos[e].id,onPress:function(){return a(function(e){return{type:"addPrato",payload:e}}(t.Pratos[e]))}},i.a.createElement(l.a,{style:V.containerRow},i.a.createElement(S.a,{style:V.image,source:t.Pratos[e].image}),i.a.createElement(l.a,{style:V.containerColumn},i.a.createElement(u.a,{style:V.restaurantesOffer},e),i.a.createElement(u.a,{style:V.foodText},"Op\xe7\xf5es : ",t.Pratos[e].Op\u00e7oes,"\n","Pre\xe7o : ",t.Pratos[e].Pre\u00e7o," \u20ac"))))}))))}var V=c.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7},image:{width:150,height:100}});function I(e){var t=e.navigation;e.route;return i.a.createElement(l.a,{style:{flex:1,padding:20}},i.a.createElement(O.a,{style:q.container},Object.keys(re).map((function(e){return i.a.createElement(x.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:q.button,key:re[e].id,onPress:function(){return t.push("Pratos",{restaurante:re[e]})}},i.a.createElement(l.a,{style:q.restaurante},i.a.createElement(S.a,{source:re[e].image,style:q.image}),i.a.createElement(l.a,{style:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}},i.a.createElement(u.a,{style:q.username},e),i.a.createElement(u.a,{style:q.bio},re[e].PricePoint,re[e].Tags.map((function(e){return" \u2e0e "+e}))))))}))))}var q=c.a.create({container:{paddingBottom:10},restaurante:{flexDirection:"row",paddingBottom:10},username:{fontSize:15,fontWeight:"bold",textAlign:"center"},bio:{fontSize:10,padding:5,textAlign:"left",justifyContent:"flex-start"},button:{padding:7},image:{width:150,height:100}}),N=Object(m.a)();function W(e){var t="";return console.log(e),e.params&&(t=e.params.restaurante),i.a.createElement(N.Navigator,{initialroute:"Restaurantes",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(N.Screen,{name:"Restaurantes",component:I}),i.a.createElement(N.Screen,{name:"Pratos",component:z,initialParams:{restaurante:t}}))}c.a.create({image:{height:300}});var Q=a(253);function G(e){var t=e.navigation;e.route;return i.a.createElement(O.a,null,i.a.createElement(l.a,{style:{flexDirection:"column",flex:1,padding:20}},i.a.createElement(u.a,{style:L.restaurantesOffer},"Destaques:"),i.a.createElement(O.a,{style:{flexDirection:"row",flex:1},horizontal:!0},Object.keys(ae).map((function(e){return i.a.createElement(l.a,{style:L.restaurantesPromo},i.a.createElement(x.a,{underlayColor:"#DDDDD",activeOpacity:.3,style:L.button,key:ae[e].id,onPress:function(){}},i.a.createElement(l.a,{key:ae[e].id,style:L.restaurantesPromo},i.a.createElement(l.a,{style:{flexDirection:"column"}},i.a.createElement(S.a,{source:ae[e].image,style:L.image}),i.a.createElement(u.a,{style:L.restaurantesTitle},e),i.a.createElement(u.a,{style:L.restaurantesDescr},ae[e].descr)))))}))),i.a.createElement(u.a,{style:L.restaurantesOffer},"Restaurantes favoritos:"),i.a.createElement(O.a,{style:{flexDirection:"row",flex:1},horizontal:!0},Object.keys(re).map((function(e){return i.a.createElement(l.a,{style:L.restaurantesPromo},i.a.createElement(x.a,{underlayColor:"#DDDDD",activeOpacity:.3,style:L.button,key:re[e].id,onPress:function(){return t.push("Pratos",{restaurante:re[e]})}},i.a.createElement(l.a,{key:re[e].id,style:L.restaurantesPromo},i.a.createElement(l.a,{style:{flexDirection:"column"}},i.a.createElement(S.a,{source:re[e].image,style:L.image}),i.a.createElement(u.a,{style:L.restaurantesTitle},e)))))}))),i.a.createElement(u.a,{style:L.restaurantesOffer,onPress:function(){return Q.a.openURL("https://micro-site-ams.herokuapp.com/")}},"Visite o nosso site!")))}var L=c.a.create({restaurantesPromo:{flexDirection:"column",padding:5,width:160,height:200},image:{width:150,height:100},restaurantesTitle:{fontSize:15,fontWeight:"bold",textAlign:"center"},restaurantesDescr:{fontSize:13,textAlign:"center"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},button:{padding:7,height:160}}),U=Object(m.a)();function F(e){e.route;return i.a.createElement(U.Navigator,{initialroute:"Home",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(U.Screen,{name:"Home",component:G}),i.a.createElement(U.Screen,{name:"Pratos",component:z}))}var H=a(313),M=a(314),J=a(152),$=a(153),Y=a(154),K=a(105),X=a(106),Z=a(107),_=a(155),ee=a(156),te=a(157),ae={"Promo\xe7\xe3o de Natal":{name:"Promo\xe7\xe3o de Natal",descr:"Poupe 30% ou mais de 22/12 at\xe9 27/12",id:0,image:H},"Promo\xe7\xe3o de Ano Novo":{name:"Promo\xe7\xe3o de Ano Novo",descr:"Poupe 30% ou mais de 30/12 at\xe9 02/01",id:1,image:M}},re={Vegifruit:{name:"Vegifruit",id:0,PricePoint:"\u20ac",Address:"Rua de S\xe3o Sebasti\xe3o, 122 3810 - 187 Aveiro",Tags:["Vegan","Saladas","Biologico"],Pratos:{"Salada de queijo da serra":{name:"Salada de queijo da serra",id:0,"Pre\xe7o":7,"Op\xe7oes":["Extra azeitonas"],image:Z},"Quiche Vegetariana s/Gl\xfaten":{name:"Quiche Vegetariana s/Gl\xfaten",id:1,"Pre\xe7o":6.5,"Op\xe7\xf5es":[],image:K},"Creme de espinafres":{name:"Creme de espinafres",id:2,"Pre\xe7o":6.5,"Op\xe7\xf5es":[],image:X}},image:J},"Green City quiches & saladas, co.":{name:"Green City quiches & saladas, co.",id:1,PricePoint:"\u20ac",Address:"R. de Castro Matoso 28 A, 3810-079 Aveiro",Tags:["Vegan","Saladas","Quiches","Biologico"],Pratos:{"Quiche especial":{name:"Quiche especial",id:0,"Pre\xe7o":6,"Op\xe7oes":["Tamanho grande"],image:$}},image:$},"Saladas+":{name:"Saladas+",id:2,PricePoint:"\u20ac",Address:"R. de S\xe3o Sebasti\xe3o 31, 3810-187 Aveiro",Tags:["Vegan","Saladas",,"Biologico"],Pratos:{"Sandes Base":{name:"Sandes Base",id:0,"Pre\xe7o":3.1,"Op\xe7oes":["Extra ovo"],image:_},"Prato do dia Peixe":{name:"Prato do dia Peixe",id:1,"Pre\xe7o":7.45,"Op\xe7oes":["Extra tempero"],image:te},"Prato do dia Carne":{name:"Prato do dia Carne",id:2,"Pre\xe7o":7.45,"Op\xe7oes":["Extra acompanhamento"],image:ee}},image:Y}},ne=B();function oe(){return i.a.createElement(v.a,{store:ne},i.a.createElement(se,null))}var ie=Object(f.a)();function se(){return i.a.createElement(T.a,{independent:!0},i.a.createElement(ie.Navigator,{initialRouteName:"Home",screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){e.focused;var a,r=e.color,n=e.size;return a="Home"===t.name?"ios-home":"Restaurantes"===t.name?"ios-restaurant":"md-cart",i.a.createElement(R.a,{name:a,size:n,color:r})}}},tabBarOptions:{activeTintColor:"tomato",inactiveTintColor:"gray"}},i.a.createElement(ie.Screen,{name:"Restaurantes",component:W}),i.a.createElement(ie.Screen,{name:"Home",component:F}),i.a.createElement(ie.Screen,{name:"Carrinho",component:j})))}function ce(e){var t=e.route;console.log(t);var a=t.params.restaurante.restaurante;return i.a.createElement(l.a,null,i.a.createElement(u.a,{style:le.restaurantesOffer},"Pratos Disponibilizados:"),i.a.createElement(O.a,null,Object.keys(Ce[a].Pratos).map((function(e){return i.a.createElement(x.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:le.button,key:Ce[a].Pratos[e].id,onPress:function(){}},i.a.createElement(l.a,{style:le.containerRow},i.a.createElement(S.a,{style:le.image,source:Ce[a].Pratos[e].image}),i.a.createElement(l.a,{style:le.containerColumn},i.a.createElement(u.a,{style:le.restaurantesOffer},e),i.a.createElement(u.a,{style:le.foodText},"Op\xe7\xf5es : ",Ce[a].Pratos[e].Op\u00e7oes,"\n","Pre\xe7o : ",Ce[a].Pratos[e].Pre\u00e7o," \u20ac"))))}))))}var le=c.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7},image:{width:150,height:100}}),ue=Object(m.a)();function de(e){var t=e.route,a="";return t.params&&(a=t.params.restaurante),i.a.createElement(ue.Navigator,{initialroute:"Pratos",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(ue.Screen,{name:"Pratos",component:ce,initialParams:a={restaurante:a}}))}var me=a(89);function fe(e){var t=e.route;console.log(t);var a=t.params.restaurante.restaurante.restaurante;return i.a.createElement(l.a,null,i.a.createElement(u.a,{style:ge.restaurantesOffer},"Pratos Pedidos:"),i.a.createElement(O.a,null,Object.keys(Ce[a].Pratos).map((function(e){return i.a.createElement(l.a,{style:ge.button,key:Ce[a].Pratos[e].id},i.a.createElement(l.a,{style:ge.containerRow},i.a.createElement(S.a,{style:ge.image,source:Ce[a].Pratos[e].image}),i.a.createElement(l.a,{style:ge.containerColumn},i.a.createElement(u.a,{style:ge.restaurantesOffer},e),i.a.createElement(u.a,{style:ge.foodText},"Op\xe7\xf5es : ",Ce[a].Pratos[e].Op\u00e7oes,"\n","Pre\xe7o : ",Ce[a].Pratos[e].Pre\u00e7o," \u20ac"),i.a.createElement(l.a,{style:ge.containerRow},i.a.createElement(x.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:ge.button,onPress:function(){}},i.a.createElement(me.a,{name:"check-bold",size:15,style:{borderRightWidth:5,borderRightColor:"rgba(0,0,0,0)"}})),i.a.createElement(x.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:ge.button,onPress:function(){}},i.a.createElement(me.a,{name:"delete",size:15}))))))}))))}var ge=c.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7},image:{width:150,height:100}}),pe=Object(m.a)();function ye(e){var t=e.route,a="";return t.params&&(a=t.params.restaurante),i.a.createElement(pe.Navigator,{initialroute:"Orders",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(pe.Screen,{name:"Pedidos",component:fe,initialParams:a={restaurante:a}}))}var be=a(152),Ee=a(153),Pe=a(154),he=a(105),ve=a(106),Oe=a(107),Se=a(155),xe=a(156),Ce={Vegifruit:{name:"Vegifruit",id:0,PricePoint:"\u20ac",Address:"Rua de S\xe3o Sebasti\xe3o, 122 3810 - 187 Aveiro",Tags:["Vegan","Saladas","Biologico"],Pratos:{"Salada de queijo da serra":{name:"Salada de queijo da serra",id:0,"Pre\xe7o":7,"Op\xe7oes":["Extra azeitonas"],image:Oe},"Quiche Vegetariana s/Gl\xfaten":{name:"Quiche Vegetariana s/Gl\xfaten",id:1,"Pre\xe7o":6.5,"Op\xe7\xf5es":[],image:he},"Creme de espinafres":{name:"Creme de espinafres",id:2,"Pre\xe7o":6.5,"Op\xe7\xf5es":[],image:ve}},image:be},"Green City quiches & saladas, co.":{name:"Green City quiches & saladas, co.",id:1,PricePoint:"\u20ac",Address:"R. de Castro Matoso 28 A, 3810-079 Aveiro",Tags:["Vegan","Saladas","Quiches","Biologico"],Pratos:{"Quiche especial":{name:"Quiche especial",id:0,"Pre\xe7o":6,"Op\xe7oes":["Tamanho grande"],image:Ee}},image:Ee},"Saladas+":{name:"Saladas+",id:2,PricePoint:"\u20ac",Address:"R. de S\xe3o Sebasti\xe3o 31, 3810-187 Aveiro",Tags:["Vegan","Saladas",,"Biologico"],Pratos:{"Sandes Base":{name:"Sandes Base",id:0,"Pre\xe7o":3.1,"Op\xe7oes":["Extra ovo"],image:Se},"Prato do dia Peixe":{name:"Prato do dia Peixe",id:1,"Pre\xe7o":7.45,"Op\xe7oes":["Extra tempero"],image:a(157)},"Prato do dia Carne":{name:"Prato do dia Carne",id:2,"Pre\xe7o":7.45,"Op\xe7oes":["Extra acompanhamento"],image:xe}},image:Pe}},De=Object(f.a)();function ke(e){var t=e.restaurante;return console.log(t),i.a.createElement(T.a,{independent:!0},i.a.createElement(De.Navigator,{initialRouteName:"Restaurante",screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){e.focused;var a,r=e.color,n=e.size;return a="Restaurantes"===t.name?"ios-restaurant":"md-cart",i.a.createElement(R.a,{name:a,size:n,color:r})}}},tabBarOptions:{activeTintColor:"tomato",inactiveTintColor:"gray"}},i.a.createElement(De.Screen,{name:"Restaurante",component:de,initialParams:t={restaurante:t}}),i.a.createElement(De.Screen,{name:"Pedidos",component:ye,initialParams:t={restaurante:t}})))}function we(e){var t=e.route;console.log(t);var a=t.params.estafeta;return i.a.createElement(l.a,null,i.a.createElement(u.a,{style:je.restaurantesOffer},"Pratos Pedidos:"),i.a.createElement(O.a,null,a.pedidos.map((function(e){return i.a.createElement(l.a,{style:je.button,key:e.id},i.a.createElement(l.a,{style:je.containerRow},i.a.createElement(S.a,{style:je.image,source:Je[e.restaurante].image}),i.a.createElement(l.a,{style:je.containerColumn},i.a.createElement(u.a,{style:je.restaurantesOffer},e.restaurante),i.a.createElement(u.a,{style:je.foodText},e.prato,"\n","Morada : ",e.morada),i.a.createElement(l.a,{style:je.containerRow},i.a.createElement(x.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:je.button,onPress:function(){}},i.a.createElement(me.a,{name:"check-bold",size:17,style:{}})),i.a.createElement(x.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:je.button,onPress:function(){}},i.a.createElement(me.a,{name:"delete",size:17}))))))}))))}var je=c.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:5,borderRadius:13},image:{width:150,height:100}}),Ae=Object(m.a)();function Te(e){var t=e.route,a="";return t.params&&(a=t.params.estafeta),i.a.createElement(Ae.Navigator,{initialroute:"Orders",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(Ae.Screen,{name:"Pedidos",component:we,initialParams:a={estafeta:a}}))}var Re=a(184);function Be(e,t){var a;if("undefined"===typeof Symbol||null==e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return ze(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ze(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(a)}function ze(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function Ve(e){var t=e.route;console.log(t);var a=t.params.estafeta,r=function(){for(var e,t=0,r=0,n=Be(a.feedback);!(e=n()).done;){var o=e.value;console.log(o),t+=o.rating,r+=1}return 1*t/r}();return console.log(r),i.a.createElement(l.a,null,i.a.createElement(u.a,{style:Ie.restaurantesOffer},"Feedback das entregas:"),i.a.createElement(O.a,null,a.feedback.map((function(e){return i.a.createElement(l.a,{style:Ie.button,key:e.id},i.a.createElement(l.a,{style:Ie.containerRow},i.a.createElement(S.a,{style:Ie.image,source:Je[e.restaurante].image}),i.a.createElement(l.a,{style:Ie.containerColumn},i.a.createElement(u.a,{style:Ie.restaurantesOffer},e.restaurante),i.a.createElement(u.a,{style:Ie.foodText},"Rating:","\n"," "),i.a.createElement(Re.a,{type:"star",readonly:!0,startingValue:e.rating,tintColor:"rgb(242,242,242)",style:Ie.rating,imageSize:15}))))})),i.a.createElement(l.a,null,i.a.createElement(u.a,{style:Ie.restaurantesOffer},"Average Rating: "),i.a.createElement(Re.a,{type:"star",readonly:!0,tintColor:"rgb(242,242,242)",startingValue:r}))))}var Ie=c.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:5,borderRadius:13},image:{width:150,height:100},rating:{borderRightWidth:500,borderRightColor:"rgba(0,0,0,0)"}}),qe=Object(m.a)();function Ne(e){var t=e.route,a="";return t.params&&(a=t.params.estafeta),i.a.createElement(qe.Navigator,{initialroute:"Feedback",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(qe.Screen,{name:"Feedback",component:Ve,initialParams:a}))}var We=a(152),Qe=a(153),Ge=a(154),Le=a(105),Ue=a(106),Fe=a(107),He=a(155),Me=a(156),Je={Vegifruit:{name:"Vegifruit",id:0,PricePoint:"\u20ac",Address:"Rua de S\xe3o Sebasti\xe3o, 122 3810 - 187 Aveiro",Tags:["Vegan","Saladas","Biologico"],Pratos:{"Salada de queijo da serra":{name:"Salada de queijo da serra",id:0,"Pre\xe7o":7,"Op\xe7oes":["Extra azeitonas"],image:Fe},"Quiche Vegetariana s/Gl\xfaten":{name:"Quiche Vegetariana s/Gl\xfaten",id:1,"Pre\xe7o":6.5,"Op\xe7\xf5es":[],image:Le},"Creme de espinafres":{name:"Creme de espinafres",id:2,"Pre\xe7o":6.5,"Op\xe7\xf5es":[],image:Ue}},image:We},"Green City quiches & saladas, co.":{name:"Green City quiches & saladas, co.",id:1,PricePoint:"\u20ac",Address:"R. de Castro Matoso 28 A, 3810-079 Aveiro",Tags:["Vegan","Saladas","Quiches","Biologico"],Pratos:{"Quiche especial":{name:"Quiche especial",id:0,"Pre\xe7o":6,"Op\xe7oes":["Tamanho grande"],image:Qe}},image:Qe},"Saladas+":{name:"Saladas+",id:2,PricePoint:"\u20ac",Address:"R. de S\xe3o Sebasti\xe3o 31, 3810-187 Aveiro",Tags:["Vegan","Saladas",,"Biologico"],Pratos:{"Sandes Base":{name:"Sandes Base",id:0,"Pre\xe7o":3.1,"Op\xe7oes":["Extra ovo"],image:He},"Prato do dia Peixe":{name:"Prato do dia Peixe",id:1,"Pre\xe7o":7.45,"Op\xe7oes":["Extra tempero"],image:a(157)},"Prato do dia Carne":{name:"Prato do dia Carne",id:2,"Pre\xe7o":7.45,"Op\xe7oes":["Extra acompanhamento"],image:Me}},image:Ge}},$e=Object(f.a)();function Ye(e){var t=e.estafeta;return console.log(t),i.a.createElement(T.a,{independent:!0},i.a.createElement($e.Navigator,{initialRouteName:"Pedidos",screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){e.focused;var a,r=e.color,n=e.size;return a="Restaurantes"===t.name?"ios-restaurant":"md-cart",i.a.createElement(R.a,{name:a,size:n,color:r})}}},tabBarOptions:{activeTintColor:"tomato",inactiveTintColor:"gray"}},i.a.createElement($e.Screen,{name:"Pedidos",component:Te,initialParams:t={estafeta:t}}),i.a.createElement($e.Screen,{name:"Feedback",component:Ne,initialParams:t={estafeta:t}})))}var Ke={cliente:{type:"cliente",password:"cliente"},restaurante:{type:"restaurante",password:"restaurante",restaurante:"Vegifruit"},estafeta:{type:"estafeta",password:"estafeta",feedback:[{id:1,restaurante:"Vegifruit",rating:5},{id:2,restaurante:"Saladas+",rating:4},{id:3,restaurante:"Green City quiches & saladas, co.",rating:4}],pedidos:[{id:1,restaurante:"Vegifruit",prato:"Salada de queijo da serra",morada:"Universidade de Aveiro, DETI"},{id:2,restaurante:"Saladas+",prato:"Prato do dia Peixe",morada:"Universidade de Aveiro, DECA"},{id:3,restaurante:"Green City quiches & saladas, co.",prato:"Quiche especial",morada:"Universidade de Aveiro, CP"}]}};Object(m.a)();function Xe(){var e=Object(o.useState)(""),t=n()(e,2),a=t[0],r=t[1],s=Object(o.useState)(!1),c=n()(s,2),l=c[0],u=c[1],d=Object(o.useState)(!1),m=n()(d,2),f=m[0],g=m[1],p=Object(o.useState)(!1),y=n()(p,2),b=y[0],E=y[1],P=Object(o.useState)(!1),h=n()(P,2),v=h[0],O=h[1];return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement(i.a.Fragment,null,f&&i.a.createElement(oe,null),b&&i.a.createElement(ke,{restaurante:Ke[a]}),v&&i.a.createElement(Ye,{estafeta:Ke[a]})),!l&&i.a.createElement(Ze,{user:a,setUser:r,setIsLogged:u,setIsCliente:g,setIsRestaurante:E,setIsEstafeta:O}))}function Ze(e){e.navigation;var t=e.setIsLogged,a=e.setIsCliente,r=e.setIsRestaurante,c=e.setIsEstafeta,m=e.user,f=e.setUser,g=Object(o.useState)(""),p=n()(g,2),y=(p[0],p[1]);return i.a.createElement(l.a,{style:_e.container},i.a.createElement(u.a,{style:_e.title},"Nutrilink"),i.a.createElement(l.a,{style:_e.loginContainer},i.a.createElement(l.a,{style:_e.inputView},i.a.createElement(s.a,{placeholder:"Username",style:_e.input,onChangeText:function(e){return f(e)}})),i.a.createElement(l.a,{style:_e.inputView},i.a.createElement(s.a,{placeholder:"Password",style:_e.input,onChangeText:function(e){return y(e)},secureTextEntry:!0})),i.a.createElement(l.a,{style:_e.containerRow},i.a.createElement(d.a,{style:_e.loginButtonContainer,onPress:function(){for(var e=0,n=Object.keys(Ke);e<n.length;e++){var o=n[e];if(m===o)switch(Ke[m].type){case"cliente":t(!0),a(!0);break;case"restaurante":t(!0),r(!0);break;case"estafeta":t(!0),c(!0)}}}},i.a.createElement(u.a,{style:_e.loginButtonText},"       Login       ")),i.a.createElement(d.a,{style:_e.loginButtonContainer},i.a.createElement(u.a,{style:_e.loginButtonText},"    Registar    ")))))}var _e=c.a.create({container:{backgroundColor:"darkcyan",alignItems:"center",flex:1},containerRow:{paddingTop:20,flexDirection:"row"},loginContainer:{backgroundColor:"darkcyan",alignItems:"center",justifyContent:"center",flex:1},title:{borderTopWidth:100,borderTopColor:"darkcyan",fontSize:40,fontWeight:"bold",color:"cornsilk"},inputView:{borderBottomWidth:10,borderBottomColor:"darkcyan"},input:{backgroundColor:"darkgray",padding:15,borderRadius:5},loginButtonContainer:{elevation:8,backgroundColor:"#009688",borderRadius:28,paddingVertical:10,paddingHorizontal:12},loginButtonText:{fontSize:18,color:"#fff",fontWeight:"bold",alignSelf:"center",textTransform:"uppercase"}})},275:function(e,t,a){a(276),e.exports=a(422)},276:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},313:function(e,t,a){e.exports=a.p+"static/media/xmaspromo.1e866ef4.jpg"},314:function(e,t,a){e.exports=a.p+"static/media/newYearPromo.40cdf873.jpg"}},[[275,1,2]]]);
//# sourceMappingURL=app.43a728f1.chunk.js.map