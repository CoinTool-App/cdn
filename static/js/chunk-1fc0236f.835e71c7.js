(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fc0236f"],{"76a3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"header"},[t("svg-icon",{staticClass:"icon",attrs:{"icon-class":"coin-wallet2"}}),t("span",[e._v("CoinTool - Usage fee")])],1),t("div",{staticClass:"content"},e._l(e.list,(function(a,n){return t("div",{key:n,staticClass:"box"},[t("h3",[t("svg-icon",{staticClass:"title-icon",style:"color: ".concat(e.$coinInfo[a.chainName].color),attrs:{"icon-class":e.$coinInfo[a.chainName].icon}}),t("span",[e._v(e._s(a.chainName.toUpperCase()))])],1),t("ul",[t("li",[t("span",{staticClass:"label"},[e._v(e._s(e.$t("route.createToken")))]),t("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(a.createToken))+" "+e._s("number"===typeof a.createToken?e.$coinInfo[a.chainName].symbol:"")+" ")])]),t("li",[t("span",{staticClass:"label"},[e._v(e._s(e.$t("route.createPresale")))]),t("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(a.createPresale))+" "+e._s("number"===typeof a.createPresale?e.$coinInfo[a.chainName].symbol:"")+" ")])]),t("li",[t("span",{staticClass:"label"},[e._v(e._s(e.$t("route.createLocker")))]),t("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(a.createLocker))+" "+e._s("number"===typeof a.createLocker?e.$coinInfo[a.chainName].symbol:"")+" ")])]),t("li",[t("span",{staticClass:"label"},[e._v(e._s(e.$t("route.nftCreate")))]),t("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(a.nftCreate))+" "+e._s("number"===typeof a.nftCreate?e.$coinInfo[a.chainName].symbol:"")+" ")])]),t("li",[t("span",{staticClass:"label"},[e._v(e._s(e.$t("route.createTokenView")))]),t("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(e.$coinInfo[a.chainName].approveDonateCost))+" "+e._s(a.createTokenView?e.$coinInfo[a.chainName].symbol:"")+" ")])]),t("li",[t("span",{staticClass:"label"},[e._v(e._s(e.$t("route.multiSender")))]),t("span",{staticClass:"value"},[e._v(" "+e._s(e._f("price")(a.multiSender))+" "+e._s("number"===typeof a.multiSender?e.$coinInfo[a.chainName].symbol:"")+" ")])]),t("li",[t("div",{staticClass:"vipBox"},[t("div",{staticClass:"goods"},[e._v("1 Day")]),t("div",{staticClass:"price"},[e._v(e._s(a.multiSenderVip[0])+" "+e._s(e.$coinInfo[a.chainName].symbol))])]),t("div",{staticClass:"vipBox"},[t("div",{staticClass:"goods"},[e._v("7 Day")]),t("div",{staticClass:"price"},[e._v(e._s(a.multiSenderVip[1])+" "+e._s(e.$coinInfo[a.chainName].symbol))])]),t("div",{staticClass:"vipBox"},[t("div",{staticClass:"goods"},[e._v("Permanent")]),t("div",{staticClass:"price"},[e._v(e._s(a.multiSenderVip[2])+" "+e._s(e.$coinInfo[a.chainName].symbol))])])])])])})),0)])},s=[],c=a("c7eb"),i=a("1da1"),r=a("5530"),o=(a("b64b"),a("d81d"),a("4de4"),a("d3b7"),a("a835")),l=a("c039"),u=a.n(l),p=a("2f62"),d={zh:{demo:{}},en:{demo:{}}},m="price",f={name:m,inject:["onCheckConnect"],components:{},filters:{price:function(e){return e||"nonsupport"}},data:function(){return{data:{eth:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},bsc:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},heco:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},ftm:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},polygon:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},avax:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},xdai:{multiSender:1,multiSenderVip:[1,2,3],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},celo:{multiSender:1,multiSenderVip:[1,2,3],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:1},trx:{multiSender:1,multiSenderVip:[0,0,0],createToken:1,createPresale:1,createLocker:1,nftCreate:1,createTokenView:null}}}},computed:Object(r["a"])(Object(r["a"])({},Object(p["b"])(["isConnect","account","isPc","language"])),{},{list:function(){var e=this,t=Object.keys(this.data);return t.map((function(t){return Object(r["a"])({chainName:t},e.data[t])}))}}),created:function(){this.$i18n.getLocaleMessage("en")[m]||(this.$i18n.mergeLocaleMessage("en",d.en),this.$i18n.mergeLocaleMessage("zh",d.zh))},mounted:function(){for(var e=Object.keys(this.data).filter((function(e){return"trx"!==e})),t=0;t<e.length;t++){var a=this.$coinInfo[e[t]].chainId;this.getVipPrice(a,e[t])}},methods:{getVipPrice:function(e,t){var a=this;return Object(i["a"])(Object(c["a"])().mark((function n(){var s,i,r;return Object(c["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=o["a"].rpcNode(e),n.next=3,a.$ajax({url:s,method:"post",data:{jsonrpc:"2.0",id:1,method:"eth_call",params:[{to:o["a"].resolveOneToMoreVIPAddress(e),data:"0xcc6c8e00"},"latest"]}});case 3:i=n.sent,r=u.a.abi.decodeParams(["uint256","uint256","uint256"],i.result),a.data[t].multiSenderVip=[parseInt(r[0])/Math.pow(10,18),parseInt(r[1])/Math.pow(10,18),parseInt(r[2])/Math.pow(10,18)];case 6:case"end":return n.stop()}}),n)})))()}}},v=f,_=(a("a32a"),a("2877")),h=Object(_["a"])(v,n,s,!1,null,"3ad0fe9a",null);t["default"]=h.exports},"91e83":function(e,t,a){},a32a:function(e,t,a){"use strict";a("91e83")}}]);