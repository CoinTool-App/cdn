(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18b17b6e"],{"4d86":function(t,e,n){},"62f6":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));n("b680"),n("a9e3"),n("99af");var a=function(t,e){var n=(100*(t/e-1)).toFixed(2);return Number(n)},r=function(t){if("undefined"!==typeof t){var e=t>0?"+":"";return"".concat(e).concat(Number(t.toFixed(2)),"%")}}},ae5e:function(t,e,n){"use strict";n("4d86")},c074:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"container"},[e("el-tag",{staticClass:"info",attrs:{effect:"dark",type:"danger"}},[t._v(" CoinTool.App ")]),e("grid-layout",{attrs:{layout:t.list,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!1,"is-mirrored":!1,"vertical-compact":!0,margin:[1,1],"use-css-transforms":!0},on:{"update:layout":function(e){t.list=e}}},t._l(t.list,(function(n){return e("grid-item",{key:n.i,attrs:{x:n.x,y:n.y,w:n.w,h:n.h,i:n.i}},[e("div",{staticClass:"gridItem",style:{background:t.getBgColor(n.percent_change_24h),color:t.getTextColor(n.percent_change_24h)}},[e("span",{staticClass:"symbol",style:{fontSize:"".concat(8*t.getCoinH(n.symbol),"px")}},[t._v(t._s(n.symbol))]),e("span",{staticClass:"price",style:{fontSize:"".concat(4+4*t.getCoinH(n.symbol),"px")}},[t._v("$"+t._s(t._f("autoFixed")(n.price_usd)))]),e("span",{staticClass:"percent",style:{fontSize:"".concat(8+2*t.getCoinH(n.symbol),"px")}},[t._v(t._s(t.getRateText(n.percent_change_24h)))])])])})),1)],1)},r=[],o=n("c7eb"),c=n("1da1"),s=(n("d81d"),n("99af"),n("a15b"),n("b64b"),n("ac1f"),n("5319"),n("a9e3"),n("14d9"),n("ed08")),i=n("7be8"),u=n.n(i),l=n("62f6"),d=null,g={name:"Market",components:{GridLayout:u.a.GridLayout,GridItem:u.a.GridItem},data:function(){return{loading:!0,list:[]}},mounted:function(){this.init(),this.onConnectWebSocket()},destroyed:function(){console.log("destroyed"),d.close()},deactivated:function(){console.log("deactivated"),d.close()},methods:{getRateText:function(t){return Object(l["b"])(t)},getSocketParams:function(){var t=["BTC","ETH","DOT","XRP","ADA","LINK","LTC","BCH","BNB","XLM","BSV","AAVE","EOS","XMR","XTZ","TRX","XEM","NEO","VET","UNI","THETA","SNX","FIL","ATOM","OKB","MKR","DAI","IOTA","SUSHI","HT","DASH","DOGE","AVAX","YFI","KSM","ETC","ZEC","ZIL","GRT","WAVES","UMA","DCR","REN","COMP","EGLD","OMG","BAT","NEAR","NANO","ICX","TUSD","ONT","LRC","NEXO","ZRX","QTUM","DGB","ENJ","ZEN","CRV","IOST","ALGO","MANA","KNC","REP","XVG","BAND","VGX","SEELE","SC","BTG","LSK","BNT","SNT","BAL","OXT","BCD","MATIC","ANT","GNO","HOT","MONA","CHZ","RLC","KCS","CVC","TOMO","UTK","FTM","FUN","DNT","ARDR","SXP","KAVA","YFII","NEST","GT","WICC","KMD","RVN","BTS","BTM","FET","IRIS","BTT","MLN","STEEM","SOL","IOTX","LOOM","TRAC","SYS","BRC","ETN","STORJ","ARK","VLX","WAN","TRB","ELA"],e=3e3,n=t.map((function(t){return'"'.concat(t.toLowerCase(),"usdt@miniTicker@").concat(e,'ms"')}));return n.join(",")},onConnectWebSocket:function(){var t=this;d&&d.close(),d=new WebSocket("wss://stream.yshyqxx.com/stream"),d.onopen=function(){d.send('{"method": "SUBSCRIBE","params":['.concat(t.getSocketParams(),'],"id": 1}'))},d.onmessage=function(e){try{for(var n=JSON.parse(e.data),a=n.stream&&n.stream.split("@")[0].replace("usdt","").toUpperCase(),r=0;r<t.list.length;r++)if(t.list[r].symbol===a){var o=Number(n.data.c),c=Number(n.data.o);t.list[r].price_usd=o,t.list[r].percent_change_24h=Object(l["a"])(o,c);break}}catch(s){console.log(s,"socket error")}},d.onclose=function(){console.log("socket close")}},getData:function(){var t=this;return Object(c["a"])(Object(o["a"])().mark((function e(){var n;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$ajax({url:"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",isProxy:!0,method:"get",timeout:6e4,headers:{"X-CMC_PRO_API_KEY":t.$ethUtils.getCoinmarketcapApiKey()},data:{}});case 3:return n=e.sent,e.abrupt("return",n);case 7:if(e.prev=7,e.t0=e["catch"](0),-1===e.t0.message.indexOf("429")){e.next=15;break}return e.next=12,Object(s["G"])(1e3);case 12:return e.next=14,t.getData();case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getBgColor:function(t){var e="";return t>=15?e="rgba(0, 153, 51, 1)":t>=10?e="rgba(0, 153, 51, 0.75)":t>=5?e="rgba(0, 153, 51, 0.5)":t>=.2?e="rgba(0, 153, 51, 0.25)":t<.2&&t>-.2?e="rgba(244, 244, 244, 1)":t>=-.2?e="rgba(243, 57, 57, 0.25)":t>=-5?e="rgba(243, 57, 57, 0.5)":t>=-10?e="rgba(243, 57, 57, 0.75)":t<-10&&(e="rgba(243, 57, 57, 0.9)"),e},getTextColor:function(t){var e="";return t>=15||t>=10?e="#fff":t>=5||t>=1||t<1&&t>-1||t>=-1||t>=-5?e="#000":(t>=-10||t<-10)&&(e="#fff"),e},getCoinW:function(t){var e={BTC:8,ETH:4,USDT:4};return e[t]?e[t]:2},getCoinH:function(t){var e={BTC:8,ETH:6};return e[t]?e[t]:2},init:function(){var t=this;return Object(c["a"])(Object(o["a"])().mark((function e(){var n,a,r,c,s,i;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:n=e.sent,t.loading=!1,a=0,r=0,c=[],s=n.data,i=s.map((function(e,n){c.push(e.symbol);var o=Object.assign(e,{x:a,y:r,w:t.getCoinW(e.symbol),h:t.getCoinH(e.symbol),i:n,price_usd:e.quote.USD.price,percent_change_24h:e.quote.USD.percent_change_24h});return a+=t.getCoinW(e.symbol),a>=12&&(a=0,r++),o})),t.list=i;case 10:case"end":return e.stop()}}),e)})))()}}},f=g,p=(n("ae5e"),n("2877")),b=Object(p["a"])(f,a,r,!1,null,"4bd96f7b",null);e["default"]=b.exports}}]);