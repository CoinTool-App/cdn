(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7610e44a"],{26:function(e,t){},33:function(e,t){},"379f":function(e,t,s){},4351:function(e,t,s){"use strict";(function(e){s.d(t,"a",(function(){return g})),s.d(t,"b",(function(){return _})),s.d(t,"c",(function(){return w}));var a=s("c7eb"),n=s("1da1"),r=(s("d9e2"),s("fb6a"),s("d129")),c=s("3e8b"),i=s("b0752"),o=s("a50f"),u=s.n(o),p=s("a173"),l=s("29c9"),d=s("59da"),b=s("262f"),h=s.n(b),m=function(t){var s=Object(c["base58check"])(r["sha256"]);return s.encode(e.from(t))},f=function(t,s,a){var n=e.alloc(a?34:33);return n.writeUInt8(t,0),s.copy(n,1),a&&(n[33]=1),n},v=function(e,t,s){return m("number"===typeof e?f(e,t,s):f(e.version,e.privateKey,e.compressed))},x=function(e,t){return v(t.wif,e,!0)},k={p2tr:"m/86'/0'/0'/0/0",p2pkh:"m/44'/0'/0'/0/0",p2sh_p2wpkh:"m/49'/0'/0'/0/0",p2wpkh:"m/84'/0'/0'/0/0"},g=function(){var e=Object(n["a"])(Object(a["a"])().mark((function e(){var t,s,n,r,c,i,o,u,p,b;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return d["initEccLib"](h.a),t=Object(l["generateMnemonic"])(128),s=_(t,"p2pkh","mainnet"),n=_(t,"p2sh_p2wpkh","mainnet"),r=_(t,"p2wpkh","mainnet"),c=_(t,"p2tr","mainnet"),i=_(t,"p2pkh","testnet"),o=_(t,"p2sh_p2wpkh","testnet"),u=_(t,"p2wpkh","testnet"),p=_(t,"p2tr","testnet"),b={mainnet_p2pkh_address:s.address,mainnet_p2pkh_key:s.pkv,mainnet_p2sh_p2wpkh_address:n.address,mainnet_p2sh_p2wpkh_key:n.pkv,mainnet_p2wpkh_address:r.address,mainnet_p2wpkh_key:r.pkv,mainnet_p2tr_address:c.address,mainnet_p2tr_key:c.pkv,testnet_p2pkh_address:i.address,testnet_p2pkh_key:i.pkv,testnet_p2sh_p2wpkh_address:o.address,testnet_p2sh_p2wpkh_key:o.pkv,testnet_p2wpkh_address:u.address,testnet_p2wpkh_key:u.pkv,testnet_p2tr_address:p.address,testnet_p2tr_key:p.pkv,mnemonic:t},e.abrupt("return",b);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"p2pkh",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mainnet";d["initEccLib"](h.a);var a=e,n=Object(l["mnemonicToSeedSync"])(a),r="testnet"===s?d["networks"].testnet:d["networks"].bitcoin,c=Object(i["fromSeed"])(n,r),o={address:"",pkv:"",mnemonic:a},u=k[t],p=c.derivePath(u),b=p.privateKey;if(!p.privateKey)throw new Error("Child private key not generated");switch("p2sh"===t&&(t="p2sh_p2wpkh"),t){case"p2pkh":o.address=d["payments"].p2pkh({pubkey:p.publicKey,network:r}).address,o.pkv=x(b,r);break;case"p2sh_p2wpkh":o.address=d["payments"].p2sh({redeem:d["payments"].p2wpkh({pubkey:p.publicKey,network:r})}).address,o.pkv=x(b,r);break;case"p2wpkh":o.address=d["payments"].p2wpkh({pubkey:p.publicKey,network:r}).address,o.pkv=x(b,r);break;case"p2tr":o.address=d["payments"].p2tr({internalPubkey:p.publicKey.slice(1),network:r}).address,o.pkv=x(b,r);break;default:throw new Error("Invalid address type")}return o}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"p2pkh",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mainnet";d["initEccLib"](h.a);var n=Object(p["ECPairFactory"])(h.a),r="testnet"===a?d["networks"].testnet:d["networks"].bitcoin,c=function(t,s){return u.a.encode(s?128:239,e.from(t,"hex"),!0)};64===t.length&&(t=c(t,"mainnet"===a));var i=n.fromWIF(t,r),o=i.publicKey,l={address:"",pkv:""};switch(l.pkv=t,s){case"p2pkh":l.address=d["payments"].p2pkh({pubkey:o,network:r}).address;break;case"p2sh_p2wpkh":l.address=d["payments"].p2sh({redeem:d["payments"].p2wpkh({pubkey:o,network:r})}).address;break;case"p2wpkh":l.address=d["payments"].p2wpkh({pubkey:o,network:r}).address;break;case"p2tr":l.address=d["payments"].p2tr({internalPubkey:o.slice(1),network:r}).address;break;default:throw new Error("Invalid address type")}return l}}).call(this,s("1c35").Buffer)},5827:function(e,t,s){"use strict";s.r(t);s("b680"),s("14d9");var a=function(){var e,t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"container"},[t.isPc?s("img",{staticClass:"bg-img-left",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn@main/pic/inset/btc-gas-speed.png"}}):t._e(),t.isPc?s("img",{staticClass:"bg-img-right",attrs:{src:"https://cdn.jsdelivr.net/gh/CoinTool-App/cdn@main/pic/inset/btc-gas-speed.png"}}):t._e(),s("div",{staticClass:"header"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"speed"}}),s("span",{staticClass:"headerTitle"},[t._v(t._s(t.$t("route.btc-speed")))]),s("span",{staticClass:"headerDesc"},[t._v(t._s(t.$t("routeDesc.btc-speed")))])],1),s("TxSuccessDialog",{ref:"TxSuccessDialog",attrs:{type:t.actionTabs,tx:t.successTx,"chain-name":t.chainName}}),s("div",{staticClass:"otherLink"},[s("el-link",{staticClass:"linka",attrs:{type:"success",href:"".concat(t.$origin,"/speed/evm"),target:"_blank"}},[s("svg-icon",{staticStyle:{"margin-right":"4px"},attrs:{"icon-class":"coin-eth"}}),t._v(" "+t._s("EVM "+t.$t("route.transactionSpeed"))+" ")],1)],1),s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.initLoading,expression:"initLoading"}],staticClass:"card"},[t.isPc?s("Gas"):t._e(),s("div",{staticClass:"tabs"},[s("ul",[s("li",{class:{on:"speed"===t.actionTabs},on:{click:function(e){t.actionTabs="speed"}}},[s("span",[t._v(t._s(t.$t("".concat(t.viewName,".tx_speed"))))])]),s("li",{class:{on:"cancel"===t.actionTabs},on:{click:function(e){t.actionTabs="cancel"}}},[s("span",[t._v(t._s(t.$t("".concat(t.viewName,".tx_cancel"))))])])])]),s("div",{staticClass:"formBox"},[s("span",{staticClass:"label"},[t._v(t._s(t.$t("".concat(t.viewName,".enter_transaction_hash")))+" "),""!==t.form.hash?s("i",{staticClass:"el-icon-refresh-left lable-icon",on:{click:t.onRefreshTxInfo}}):t._e()]),s("el-input",{directives:[{name:"loading",rawName:"v-loading",value:t.getTxInfoLoading,expression:"getTxInfoLoading"}],attrs:{placeholder:"bc....",clearable:""},model:{value:t.form.hash,callback:function(e){t.$set(t.form,"hash",e)},expression:"form.hash"}}),0===t.tx_find&&t.isLoadingTxData?s("div",{staticClass:"tips"},[s("i",{staticClass:"el-icon-loading icon green"}),s("span",{staticClass:"text green"},[t._v(t._s("Loading Tx hash data..."))])]):t._e(),1===t.tx_find?s("div",{staticClass:"tips"},[s("i",{staticClass:"el-icon-success icon green"}),s("span",{staticClass:"text green"},[t._v(t._s(t.$t("".concat(t.viewName,".transaction_found"))))])]):t._e(),2===t.tx_find?s("div",{staticClass:"tips"},[s("i",{staticClass:"el-icon-error icon red"}),s("span",{staticClass:"text red"},[t._v(t._s(t.$t("".concat(t.viewName,".transaction_not_found"))))])]):t._e(),t.transactionStatus?s("div",{staticClass:"tips"},[s("i",{staticClass:"el-icon-error icon red"}),s("span",{staticClass:"text red"},[t._v(t._s(t.$t("".concat(t.viewName,".transaction_online"))))])]):t._e()],1),s("ul",{staticClass:"gasBox1"},[t._l(t.gasListKeys,(function(e){return s("li",{key:e,class:{gasList:!0,gasListTrue:t.gasType===e},on:{click:function(s){return t.onChangeGasType(e)}}},[s("i",{staticClass:"el-icon-circle-check selectIcon"}),s("span",{staticClass:"name"},[t._v(" "+t._s(t.$t("common.".concat(e)))+" "),t.form.tx_size>0?s("span",{staticClass:"usd_price"},[t._v("$"+t._s((1e-8*t.gasList[e]*t.form.tx_size*t.btc_usd).toFixed(2)))]):t._e()]),s("span",{staticClass:"value"},[s("span",{staticClass:"number"},[t._v(t._s(t.gasList[e]))]),s("span",{staticClass:"unit"},[t._v("sat/VB")])])])})),s("li",{class:{gasList:!0,gasListTrue:"custom"===t.gasType},on:{click:function(e){return t.onChangeGasType("custom")}}},[s("i",{staticClass:"el-icon-circle-check selectIcon"}),s("span",{staticClass:"name"},[t._v(t._s(t.$t("common.custom"))+" "),t.gasList["custom"]>0&&t.form.tx_size>0?s("span",{staticClass:"usd_price"},[t._v("$"+t._s((1e-8*t.gasList["custom"]*t.form.tx_size*t.btc_usd).toFixed(2)))]):t._e()]),s("span",{staticClass:"inputBox"},[s("el-input",{staticClass:"inputText",attrs:{type:"text",oninput:"value=value.replace(/[^\\d\\.]/g,'')",size:"mini"},model:{value:t.gasList.custom,callback:function(e){t.$set(t.gasList,"custom",e)},expression:"gasList.custom"}}),s("span",{staticClass:"unit"},[t._v("sat/VB")])],1)])],2),s("div",{staticClass:"eleFormBox"},[s("el-form",{attrs:{model:t.form,"label-position":"top"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6,xs:{span:8}}},[s("el-form-item",{attrs:{prop:"wallet_model"}},[s("div",{staticClass:"labelBox",attrs:{slot:"label"},slot:"label"},[s("span",{staticClass:"label"},[t._v(t._s(t.$t("".concat(t.viewName,".wallet_mode")))+" ")])]),s("el-radio-group",{attrs:{size:"small"},model:{value:t.form.wallet_model,callback:function(e){t.$set(t.form,"wallet_model",e)},expression:"form.wallet_model"}},[s("el-radio-button",{attrs:{label:"wallet"}},[t._v(t._s(t.$t("common.wallet")))]),t._e()],1)],1)],1),t._e(),s("el-col",{attrs:{span:6,xs:{span:12}}},[s("el-form-item",{attrs:{prop:"min_fee_rate"}},[s("div",{staticClass:"labelBox",attrs:{slot:"label"},slot:"label"},[s("span",{staticClass:"label"},[t._v(t._s("Network")+" ")])]),s("el-tag",{staticStyle:{"text-transform":"capitalize"},attrs:{type:"success",size:"small"}},[t._v(t._s(t.btcNetwork))])],1)],1),s("el-col",{attrs:{span:6,xs:{span:12}}},[s("el-form-item",{attrs:{prop:"min_fee_rate"}},[s("div",{staticClass:"labelBox",attrs:{slot:"label"},slot:"label"},[s("span",{staticClass:"label"},[t._v(t._s("BTC Price")+" ")])]),s("el-tag",{attrs:{type:"success",size:"small"}},[t._v("$"+t._s(t.btc_usd))])],1)],1),"pkv"===t.form.wallet_model?s("el-col",{attrs:{span:24,xs:{span:24}}},[s("el-form-item",{attrs:{prop:"wallet_model"}},[s("div",{staticClass:"labelBox",attrs:{slot:"label"},slot:"label"},[s("span",{staticClass:"label"},[t._v(t._s(t.$t("common.key"))+" "),s("el-tooltip",{staticClass:"tipsIcon",staticStyle:{"margin-left":"4px"},attrs:{effect:"dark",placement:"top"}},[s("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(t.$t("common.pkv_tips"))},slot:"content"}),s("el-tag",{attrs:{type:"success",size:"small"}},[s("svg-icon",{staticClass:"iconSvg",staticStyle:{"margin-right":"4px"},attrs:{"icon-class":"certified"}}),s("span",[t._v(t._s(t.$t("common.pkv_tips_title")))])],1)],1)],1)]),s("el-input",{attrs:{clearable:"",type:"password"},model:{value:t.form.pkv,callback:function(e){t.$set(t.form,"pkv",e)},expression:"form.pkv"}})],1)],1):t._e()],1),t._e()],1)],1),s("div",{staticClass:"moreConfig"},["cfpf"===t.speedMode?s("el-alert",{attrs:{title:t.$t("".concat(t.viewName,".rbf_not_supported")),type:"success",closable:!1}}):t._e(),t.tx_status_res&&null!==(e=t.tx_status_res)&&void 0!==e&&e.status.confirmed?s("el-alert",{attrs:{title:t.$t("".concat(t.viewName,".transaction_already_success")),type:"error",closable:!1}}):t._e()],1),s("div",{staticClass:"btnBox"},["rbf"===t.speedMode&&"cancel"===t.actionTabs?s("el-button",{attrs:{type:"success",size:"large",loading:t.cancelLoading},on:{click:t.onRBFCancelTransaction}},[s("svg-icon",{staticStyle:{"margin-right":"10px"},attrs:{"icon-class":"cancel-transaction"}}),s("span",[t._v(t._s(t.speedMode.toUpperCase())+" "+t._s(t.$t("".concat(t.viewName,".tx_cancel"))))])],1):t._e(),"rbf"===t.speedMode&&"speed"===t.actionTabs?s("el-button",{attrs:{type:"success",size:"large",loading:t.speedLoading},on:{click:t.onRBFSpeedTransaction}},[s("svg-icon",{staticStyle:{"margin-right":"10px"},attrs:{"icon-class":"speed"}}),s("span",[t._v(t._s(t.speedMode.toUpperCase())+" "+t._s(t.$t("".concat(t.viewName,".tx_speed"))))])],1):t._e(),"cfpf"===t.speedMode&&"speed"===t.actionTabs?s("el-button",{attrs:{type:"success",size:"large",loading:t.speedLoading},on:{click:t.onCPFPSpeedTransaction}},[s("svg-icon",{staticStyle:{"margin-right":"10px"},attrs:{"icon-class":"speed"}}),s("span",[t._v(t._s(t.speedMode.toUpperCase())+" "+t._s(t.$t("".concat(t.viewName,".tx_speed"))))])],1):t._e(),"cfpf"===t.speedMode&&"cancel"===t.actionTabs?s("el-button",{attrs:{disabled:!0,type:"success",size:"large"}},[t._v(" "+t._s(t.$t("".concat(t.viewName,".cfpf_cannot_cancel")))+" ")]):t._e(),s("p",{staticClass:"bottom_tips"},[s("span",{staticClass:"bottom_tips_text"},[t._v(t._s(t.$t("".concat(t.viewName,".zero_fee"))))]),s("el-tooltip",{staticClass:"tipsIcon",attrs:{effect:"dark",placement:"top"}},[s("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(t.$t("common.coffee"))},slot:"content"}),s("svg-icon",{staticClass:"coffee",staticStyle:{"margin-left":"10px"},attrs:{"icon-class":"coffee1"},on:{click:function(e){return t.$router.push({path:"/tools/donate?chainName=btc"})}}})],1)],1)],1),t.logList.length>0?s("ul",{staticClass:"terminal"},t._l(t.logList,(function(e,a){return s("li",{key:a,domProps:{innerHTML:t._s(e)}})})),0):t._e()],1)],1)},n=[],r=s("dc98"),c=r["a"],i=(s("6d64"),s("2877")),o=Object(i["a"])(c,a,n,!1,null,"257a0eb4",null);t["default"]=o.exports},"6d64":function(e,t,s){"use strict";s("379f")},dc98:function(e,t,s){"use strict";(function(e){var a=s("b85c"),n=s("c7eb"),r=s("1da1"),c=s("5530"),i=(s("99af"),s("a434"),s("d3b7"),s("159b"),s("25f0"),s("b680"),s("d9e2"),s("fb6a"),s("f30b")),o=s("d2c8"),u=s("2f62"),p=s("4b79"),l=(s("5ba3"),s("901e")),d=s.n(l),b=(s("ed08"),s("bc5a"),s("9ac7")),h=s("59da"),m=s("262f"),f=s.n(m),v=s("ebe1"),x=s("4351"),k=s("a173"),g=Object(k["ECPairFactory"])(f.a),_=["https://mempool.space","https://btcscan.org","https://blockstream.info"],w="transactionSpeed",y="btc-speed";t["a"]={name:y,inject:[],components:{Gas:b["a"],TxSuccessDialog:i["a"]},data:function(){return{viewName:w,chainName:"btc",initLoading:!1,getTxInfoLoading:!1,gasType:"normal",gasListKeys:["fast","normal","slow"],gasList:{custom:""},actionTabs:"speed",cancelLoading:!1,speedLoading:!1,web3:null,txhex:null,tx_find:0,btc_usd:0,form:{increase:"",hash:"",tx_size:0,min_fee_rate:0,gas_max:"9999",pkv:"",wallet_model:"wallet",speed_number:1},speedMode:"rbf",transactionStatus:!1,txInfo:{},logList:[],successTx:"",vsize:0,isLoadingTxData:!1,currentFee:0,t1:null,tx_status_res:null}},computed:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["isConnect","account","chainId","isPc","language","btcNetwork","btcAccount","btcClient"])),{},{addNetworkUrlPath:function(){return"testnet"===this.btcNetwork?"testnet/":""},gasPrice:function(){return this.gasList?this.gasList[this.gasType]:20}}),watch:{"form.hash":function(e){""!==e&&this.onRefreshTxInfo()}},created:function(){this.$i18n.getLocaleMessage("en")[w]||(this.$i18n.mergeLocaleMessage("en",p["a"].en),this.$i18n.mergeLocaleMessage("zh",p["a"].zh))},deactivated:function(){clearInterval(this.t1)},activated:function(){var e=this;this.init(),this.t1=setInterval(Object(r["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.init();case 2:case"end":return t.stop()}}),t)}))),3e4)},beforeDestroy:function(){clearInterval(this.t1)},mounted:function(){var e=this;return Object(r["a"])(Object(n["a"])().mark((function t(){var s;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Object(h["initEccLib"])(f.a),e.initLoading=!0,t.next=4,e.init();case 4:e.initLoading=!1,e.t1=setInterval(Object(r["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.init();case 2:case"end":return t.stop()}}),t)}))),3e4),s=e.$route.query.txid,s&&(e.form.hash=s);case 8:case"end":return t.stop()}}),t)})))()},methods:{onChangeGasType:function(e){var t=this;return Object(r["a"])(Object(n["a"])().mark((function s(){return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:t.gasType=e;case 1:case"end":return s.stop()}}),s)})))()},init:function(){var e=this;return Object(r["a"])(Object(n["a"])().mark((function t(){var s,a,r,i,u,p;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("init"),t.next=3,Object(v["b"])(e.chainName);case 3:return s=t.sent,!1!==s&&(e.btc_usd=s["usd"]),t.next=7,Object(o["c"])("btc");case 7:a=t.sent,a&&(r=a.data,i=r.fast,u=r.normal,p=r.slow,e.gasList=Object(c["a"])(Object(c["a"])({},e.gasList),{},{fast:i.price,normal:u.price,slow:p.price}));case 9:case"end":return t.stop()}}),t)})))()},getTxHex:function(e){var t=this;return Object(r["a"])(Object(n["a"])().mark((function s(){var a,r,c;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:a=!0,r=0;case 2:if(!a){s.next=17;break}return r=Math.floor(Math.random()*_.length),s.prev=4,s.next=7,t.$ajax({url:"".concat(_[r],"/").concat(t.addNetworkUrlPath,"api/tx/").concat(e,"/hex"),method:"get"});case 7:c=s.sent,a=!1,s.next=15;break;case 11:s.prev=11,s.t0=s["catch"](4),_.splice(r,1),0===_.length&&(a=!1);case 15:s.next=2;break;case 17:return s.abrupt("return",c);case 18:case"end":return s.stop()}}),s,null,[[4,11]])})))()},getTxStatus:function(e){var t=this;return Object(r["a"])(Object(n["a"])().mark((function s(){var a,r,c;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:a=!0,r=0;case 2:if(!a){s.next=17;break}return r=Math.floor(Math.random()*_.length),s.prev=4,s.next=7,t.$ajax({url:"".concat(_[r],"/").concat(t.addNetworkUrlPath,"api/tx/").concat(e),method:"get"});case 7:c=s.sent,a=!1,s.next=15;break;case 11:s.prev=11,s.t0=s["catch"](4),_.splice(r,1),0===_.length&&(a=!1);case 15:s.next=2;break;case 17:return s.abrupt("return",c);case 18:case"end":return s.stop()}}),s,null,[[4,11]])})))()},getUtxos:function(e){var t=this;return Object(r["a"])(Object(n["a"])().mark((function s(){var a,r,c;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:a=!0,r=[],c=0;case 3:if(!a){s.next=18;break}return c=Math.floor(Math.random()*_.length),s.prev=5,s.next=8,t.$ajax({url:"".concat(_[c],"/").concat(t.addNetworkUrlPath,"api/address/").concat(e,"/utxo"),method:"get"});case 8:r=s.sent,a=!1,s.next=16;break;case 12:s.prev=12,s.t0=s["catch"](5),_.splice(c,1),0===_.length&&(a=!1);case 16:s.next=3;break;case 18:return s.abrupt("return",r);case 19:case"end":return s.stop()}}),s,null,[[5,12]])})))()},onRefreshTxInfo:function(){var e=this;return Object(r["a"])(Object(n["a"])().mark((function t(){var s,r,c,i,o,u,p;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form.tx_size=0,e.tx_status_res=null,e.getTxInfoLoading=!0,t.prev=3,t.next=6,e.getTxStatus(e.form.hash);case 6:if(s=t.sent,e.tx_status_res=s,e.form.tx_size=s.size,e.currentFee=s.fee,console.log(s),!s.status.confirmed){t.next=13;break}return t.abrupt("return");case 13:return t.next=15,e.getTxHex(e.form.hash);case 15:e.txhex=t.sent,r=h["Transaction"].fromHex(e.txhex),c=[],i=0,o=Object(a["a"])(r.ins),t.prev=20,o.s();case 22:if((u=o.n()).done){t.next=32;break}if(p=u.value,c[i]=p.sequence,i++,!(p.sequence>=4294967294)){t.next=30;break}return e.speedMode="cfpf",e.form.speed_number=1,t.abrupt("return");case 30:t.next=22;break;case 32:t.next=37;break;case 34:t.prev=34,t.t0=t["catch"](20),o.e(t.t0);case 37:return t.prev=37,o.f(),t.finish(37);case 40:t.next=45;break;case 42:t.prev=42,t.t1=t["catch"](3),e.$message.error(t.t1,"error");case 45:return t.prev=45,e.getTxInfoLoading=!1,t.finish(45);case 48:case"end":return t.stop()}}),t,null,[[3,42,45,48],[20,34,37,40]])})))()},onRBFCancelTransaction:function(){var t=this;return Object(r["a"])(Object(n["a"])().mark((function s(){var r,c,i,o,u,p,l,b,m,f,v,k,_,y,T,O,C,j,P,L,I,$,S,N,z,A,U,M,H,K,F,W,q,B,E,R,D,V,G;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(console.log(t.gasPrice),""!==t.gasPrice){s.next=4;break}return t.$message.error(t.$t("".concat(w,".gas_price_cannot_be_empty"))),s.abrupt("return");case 4:if(t.tx_status_res&&""!==t.form.hash){s.next=7;break}return t.$message.error(t.$t("".concat(w,".missing_tx_info_get_again"))),s.abrupt("return");case 7:if(!t.tx_status_res||null===(r=t.tx_status_res)||void 0===r||!r.status.confirmed){s.next=10;break}return t.$message.error(t.$t("".concat(w,".transaction_online"))),s.abrupt("return");case 10:c=h["Transaction"].fromHex(t.txhex),i=[],o=0,u=Object(a["a"])(c.ins),s.prev=14,u.s();case 16:if((p=u.n()).done){s.next=25;break}if(l=p.value,i[o]=l.sequence,o++,!(l.sequence>=4294967294)){s.next=23;break}return t.speedMode="cfpf",s.abrupt("return");case 23:s.next=16;break;case 25:s.next=30;break;case 27:s.prev=27,s.t0=s["catch"](14),u.e(s.t0);case 30:return s.prev=30,u.f(),s.finish(30);case 33:b="testnet"===t.btcNetwork?h["networks"].testnet:h["networks"].bitcoin,m=new h["Psbt"]({network:b}),f=new h["Psbt"]({network:b}),m.setVersion(c.version),m.setLocktime(c.locktime),f.setVersion(c.version),f.setLocktime(c.locktime),o=0,v=Object(a["a"])(c.ins),s.prev=42,v.s();case 44:if((k=v.n()).done){s.next=84;break}return _=k.value,y=e.from(_.hash).reverse().toString("hex"),T=_.index,s.next=50,t.getTxHex(y);case 50:O=s.sent,C=h["Transaction"].fromHex(O);try{for(j in C.outs)C.setWitness(parseInt(j),[])}catch(n){}return s.prev=53,P=h["address"].fromOutputScript(C.outs[T].script,b),L=t.getAddressType(P),s.t1=y,s.t2=T,s.t3=L,s.t4=C.outs[T].value,s.t5=C.outs[T].script,s.next=63,t.btcClient.getPublicKey();case 63:s.t6=s.sent,s.t7=e.from(O,"hex"),I={txid:s.t1,vout:s.t2,addressType:s.t3,satoshis:s.t4,scriptPk:s.t5,pubkey:s.t6,rawtx:s.t7},m.addInput(t.utxoToInput(I,!1).data),$=Object(x["b"])("lava cactus stairs badge pyramid illegal valve bright ritual original interest kitten",L.toLowerCase(),"testnet"===t.btcNetwork?"testnet":"mainnet"),S=g.fromWIF($.pkv,b),I.pubkey=S.publicKey,I.scriptPk=h["address"].toOutputScript($.address,b),f.addInput(t.utxoToInput(I,!0).data),m.setInputSequence(o,i[o]+1),f.setInputSequence(o,i[o]+1),s.next=81;break;case 76:s.prev=76,s.t8=s["catch"](53),console.log(s.t8),m.addInput({hash:y,index:T,sequence:i[o]+1,witnessUtxo:C.outs[T],nonWitnessUtxo:e.from(O,"hex")}),f.addInput({hash:y,index:T,sequence:i[o]+1,witnessUtxo:C.outs[T],nonWitnessUtxo:e.from(O,"hex")});case 81:o++;case 82:s.next=44;break;case 84:s.next=89;break;case 86:s.prev=86,s.t9=s["catch"](42),v.e(s.t9);case 89:return s.prev=89,v.f(),s.finish(89);case 92:N=!1,z=Object(a["a"])(c.outs);try{for(z.s();!(A=z.n()).done;){U=A.value;try{h["address"].fromOutputScript(U.script,b)===t.btcAccount&&(f.addOutput({script:U.script,value:U.value}),N=!0)}catch(n){}}}catch(J){z.e(J)}finally{z.f()}if(N){s.next=98;break}return console.log("无法加速"),s.abrupt("return",!1);case 98:M=Object(x["b"])("lava cactus stairs badge pyramid illegal valve bright ritual original interest kitten",t.getAddressType(t.btcAccount).toLowerCase(),"testnet"===t.btcNetwork?"testnet":"mainnet"),H=g.fromWIF(M.pkv,b),"P2TR"===t.getAddressType(t.btcAccount)?(K=t.tweakSigner(H,{network:b}),f.data.inputs.forEach((function(e,t){f.signTaprootInput(t,K)}))):f.signAllInputs(H),f.finalizeAllInputs(),F=f.extractTransaction(!0).virtualSize(),console.log(F,"realSize1"),W=Object(a["a"])(c.outs);try{for(W.s();!(q=W.n()).done;){B=q.value;try{h["address"].fromOutputScript(B.script,b)===t.btcAccount&&(E=new d.a(t.gasPrice).times(F),R=new d.a(E).minus(t.currentFee),D=new d.a(B.value).minus(R).toFixed(0),m.addOutput({script:B.script,value:new d.a(D).toNumber()}),N=!0)}catch(n){}}}catch(J){W.e(J)}finally{W.f()}return s.prev=106,t.cancelLoading=!0,s.next=110,t.btcClient.signPsbt(m.toHex());case 110:return V=s.sent,s.next=113,t.btcClient.pushPsbt(V);case 113:G=s.sent,G&&(t.successTx=G,t.$refs.TxSuccessDialog.show()),s.next=120;break;case 117:s.prev=117,s.t10=s["catch"](106),t.$message.error(s.t10.message);case 120:return s.prev=120,t.cancelLoading=!1,s.finish(120);case 123:case"end":return s.stop()}}),s,null,[[14,27,30,33],[42,86,89,92],[53,76],[106,117,120,123]])})))()},onRBFSpeedTransaction:function(){var t=this;return Object(r["a"])(Object(n["a"])().mark((function s(){var r,c,i,o,u,p,l,b,m,f,v,k,_,y,T,O,C,j,P,L,I,$,S,N,z,A,U,M,H,K,F,W,q,B,E,R,D,V;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(console.log(t.gasPrice),""!==t.gasPrice){s.next=4;break}return t.$message.error(t.$t("".concat(w,".gas_price_cannot_be_empty"))),s.abrupt("return");case 4:if(t.tx_status_res&&""!==t.form.hash){s.next=7;break}return t.$message.error(t.$t("".concat(w,".missing_tx_info_get_again"))),s.abrupt("return");case 7:if(!t.tx_status_res||null===(r=t.tx_status_res)||void 0===r||!r.status.confirmed){s.next=10;break}return t.$message.error(t.$t("".concat(w,".transaction_online"))),s.abrupt("return");case 10:c=h["Transaction"].fromHex(t.txhex),i=[],o=0,u=Object(a["a"])(c.ins),s.prev=14,u.s();case 16:if((p=u.n()).done){s.next=25;break}if(l=p.value,i[o]=l.sequence,o++,!(l.sequence>=4294967294)){s.next=23;break}return t.speedMode="cfpf",s.abrupt("return");case 23:s.next=16;break;case 25:s.next=30;break;case 27:s.prev=27,s.t0=s["catch"](14),u.e(s.t0);case 30:return s.prev=30,u.f(),s.finish(30);case 33:b="testnet"===t.btcNetwork?h["networks"].testnet:h["networks"].bitcoin,m=new h["Psbt"]({network:b}),f=new h["Psbt"]({network:b}),m.setVersion(c.version),m.setLocktime(c.locktime),f.setVersion(c.version),f.setLocktime(c.locktime),o=0,v=Object(a["a"])(c.ins),s.prev=42,v.s();case 44:if((k=v.n()).done){s.next=83;break}return _=k.value,y=e.from(_.hash).reverse().toString("hex"),T=_.index,s.next=50,t.getTxHex(y);case 50:O=s.sent,C=h["Transaction"].fromHex(O);try{for(j in C.outs)C.setWitness(parseInt(j),[])}catch(n){}return s.prev=53,P=h["address"].fromOutputScript(C.outs[T].script,b),L=t.getAddressType(P),s.t1=y,s.t2=T,s.t3=L,s.t4=C.outs[T].value,s.t5=C.outs[T].script,s.next=63,t.btcClient.getPublicKey();case 63:s.t6=s.sent,s.t7=e.from(O,"hex"),I={txid:s.t1,vout:s.t2,addressType:s.t3,satoshis:s.t4,scriptPk:s.t5,pubkey:s.t6,rawtx:s.t7},m.addInput(t.utxoToInput(I,!1).data),$=Object(x["b"])("lava cactus stairs badge pyramid illegal valve bright ritual original interest kitten",L.toLowerCase(),"testnet"===t.btcNetwork?"testnet":"mainnet"),S=g.fromWIF($.pkv,b),I.pubkey=S.publicKey,I.scriptPk=h["address"].toOutputScript($.address,b),f.addInput(t.utxoToInput(I,!0).data),m.setInputSequence(o,i[o]+1),f.setInputSequence(o,i[o]+1),s.next=80;break;case 76:s.prev=76,s.t8=s["catch"](53),m.addInput({hash:y,index:T,sequence:i[o]+1,witnessUtxo:C.outs[T],nonWitnessUtxo:e.from(O,"hex")}),f.addInput({hash:y,index:T,sequence:i[o]+1,witnessUtxo:C.outs[T],nonWitnessUtxo:e.from(O,"hex")});case 80:o++;case 81:s.next=44;break;case 83:s.next=88;break;case 85:s.prev=85,s.t9=s["catch"](42),v.e(s.t9);case 88:return s.prev=88,v.f(),s.finish(88);case 91:N=Object(a["a"])(c.outs);try{for(N.s();!(z=N.n()).done;)A=z.value,f.addOutput({script:A.script,value:A.value})}catch(G){N.e(G)}finally{N.f()}U=Object(x["b"])("lava cactus stairs badge pyramid illegal valve bright ritual original interest kitten",t.getAddressType(t.btcAccount).toLowerCase(),"testnet"===t.btcNetwork?"testnet":"mainnet"),M=g.fromWIF(U.pkv,b),"P2TR"===t.getAddressType(t.btcAccount)?(H=t.tweakSigner(M,{network:b}),f.data.inputs.forEach((function(e,t){f.signTaprootInput(t,H)}))):f.signAllInputs(M),f.finalizeAllInputs(),K=f.extractTransaction(!0).virtualSize(),F=Object(a["a"])(c.outs);try{for(F.s();!(W=F.n()).done;){q=W.value;try{h["address"].fromOutputScript(q.script,b)===t.btcAccount?(B=new d.a(t.gasPrice).times(K),E=new d.a(B).minus(t.currentFee),R=new d.a(q.value).minus(E).toFixed(0),m.addOutput({script:q.script,value:new d.a(R).toNumber()})):m.addOutput({script:q.script,value:q.value})}catch(n){m.addOutput({script:q.script,value:q.value})}}}catch(G){F.e(G)}finally{F.f()}return s.prev=100,t.speedLoading=!0,s.next=104,t.btcClient.signPsbt(m.toHex());case 104:return D=s.sent,s.next=107,t.btcClient.pushPsbt(D);case 107:V=s.sent,V&&(t.successTx=V,t.$refs.TxSuccessDialog.show()),s.next=114;break;case 111:s.prev=111,s.t10=s["catch"](100),t.$message.error(s.t10.message);case 114:return s.prev=114,t.speedLoading=!1,s.finish(114);case 117:case"end":return s.stop()}}),s,null,[[14,27,30,33],[42,85,88,91],[53,76],[100,111,114,117]])})))()},onCPFPSpeedTransaction:function(){var t=this;return Object(r["a"])(Object(n["a"])().mark((function s(){var r,c,i,o,u,p,l,b,m,f,v,k,_,y,T,O,C,j,P,L,I,$,S,N,z;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(""!==t.gasPrice){s.next=3;break}return t.$message.error(t.$t("".concat(w,".gas_price_cannot_be_empty"))),s.abrupt("return");case 3:if(t.tx_status_res&&""!==t.form.hash){s.next=6;break}return t.$message.error(t.$t("".concat(w,".missing_tx_info_get_again"))),s.abrupt("return");case 6:if(!t.tx_status_res||null===(r=t.tx_status_res)||void 0===r||!r.status.confirmed){s.next=9;break}return t.$message.error(t.$t("".concat(w,".transaction_online"))),s.abrupt("return");case 9:c="testnet"===t.btcNetwork?h["networks"].testnet:h["networks"].bitcoin,i=new h["Psbt"]({network:c}),o=new h["Psbt"]({network:c}),i.setVersion(2),i.setLocktime(0),o.setVersion(2),o.setLocktime(0),u=t.form.hash,p=0,l=0,b=Object(a["a"])(t.tx_status_res.vout),s.prev=20,b.s();case 22:if((m=b.n()).done){s.next=31;break}if(f=m.value,console.log(p),f.scriptpubkey_address!==t.btcAccount){s.next=28;break}return l=f.value,s.abrupt("break",31);case 28:p++;case 29:s.next=22;break;case 31:s.next=36;break;case 33:s.prev=33,s.t0=s["catch"](20),b.e(s.t0);case 36:return s.prev=36,b.f(),s.finish(36);case 39:v=h["Transaction"].fromHex(t.txhex);try{for(k in v.outs)v.setWitness(parseInt(k),[])}catch(n){}return s.prev=41,_=h["address"].fromOutputScript(v.outs[p].script,c),y=t.getAddressType(_),s.t1=u,s.t2=p,s.t3=y,s.t4=v.outs[p].value,s.t5=v.outs[p].script,s.next=51,t.btcClient.getPublicKey();case 51:s.t6=s.sent,s.t7=e.from(t.txhex,"hex"),T={txid:s.t1,vout:s.t2,addressType:s.t3,satoshis:s.t4,scriptPk:s.t5,pubkey:s.t6,rawtx:s.t7},i.addInput(t.utxoToInput(T,!1).data),O=Object(x["b"])("lava cactus stairs badge pyramid illegal valve bright ritual original interest kitten",y.toLowerCase(),"testnet"===t.btcNetwork?"testnet":"mainnet"),C=g.fromWIF(O.pkv,c),T.pubkey=C.publicKey,T.scriptPk=h["address"].toOutputScript(O.address,c),o.addInput(t.utxoToInput(T,!0).data),i.setInputSequence(0,4294945450),o.setInputSequence(0,4294945450),s.next=69;break;case 64:s.prev=64,s.t8=s["catch"](41),console.log(s.t8),i.addInput({hash:u,index:p,sequence:4294945450,witnessUtxo:v.outs[p],nonWitnessUtxo:e.from(t.txhex,"hex")}),o.addInput({hash:u,index:p,sequence:4294945450,witnessUtxo:v.outs[p],nonWitnessUtxo:e.from(t.txhex,"hex")});case 69:return j=h["script"].compile([h["opcodes"].OP_RETURN,""]),o.addOutput({address:t.btcAccount,value:new d.a(l).minus(0).toNumber()}),o.addOutput({script:j,value:0}),P=Object(x["b"])("lava cactus stairs badge pyramid illegal valve bright ritual original interest kitten",t.getAddressType(t.btcAccount).toLowerCase(),"testnet"===t.btcNetwork?"testnet":"mainnet"),L=g.fromWIF(P.pkv,c),"P2TR"===t.getAddressType(t.btcAccount)?(I=t.tweakSigner(L,{network:c}),o.data.inputs.forEach((function(e,t){o.signTaprootInput(t,I)}))):o.signAllInputs(L),o.finalizeAllInputs(),$=o.extractTransaction(!0).virtualSize(),S=new d.a(t.gasPrice).times($),i.addOutput({address:t.btcAccount,value:new d.a(l).minus(S).toNumber()}),i.addOutput({script:j,value:0}),s.prev=80,t.speedLoading=!0,s.next=84,t.btcClient.signPsbt(i.toHex());case 84:return N=s.sent,console.log(N),s.next=88,t.btcClient.pushPsbt(N);case 88:z=s.sent,z&&(t.successTx=z,t.$refs.TxSuccessDialog.show()),s.next=95;break;case 92:s.prev=92,s.t9=s["catch"](80),t.$message.error(s.t9.message);case 95:return s.prev=95,t.speedLoading=!1,s.finish(95);case 98:case"end":return s.stop()}}),s,null,[[20,33,36,39],[41,64],[80,92,95,98]])})))()},getAddressType:function(e){var t="unknown";try{var s=h["address"].fromBech32(e);s&&(1===s.version?t="P2TR":0===s.version&&(20===s.data.length?t="P2WPKH":32===s.data.length&&(t="P2WSH")))}catch(n){}try{var a=h["address"].fromBase58Check(e);a&&(5===a.version||196===a.version?t="P2SH":0!==a.version&&111!==a.version||(t="P2PKH"))}catch(r){}return t},tweakSigner:function(t,s){var a=t.privateKey;if(!a)throw new Error("Private key is required for tweaking signer!");3===t.publicKey[0]&&(a=f.a.privateNegate(a));var n=function(t,s){return h["crypto"].taggedHash("TapTweak",e.concat(s?[t,s]:[t]))},r=function(e){return 32===e.length?e:e.slice(1,33)},c=f.a.privateAdd(a,n(r(t.publicKey),s.tweakHash));if(!c)throw new Error("Invalid tweaked private key!");return g.fromPrivateKey(e.from(c),{network:s.network})},utxoToInput:function(t,s){var a=function(e){return 32===e.length?e:e.slice(1,33)};if("P2TR"===t.addressType||"M44_P2TR"===t.addressType){var n={hash:t.txid,index:t.vout,witnessUtxo:{value:t.satoshis,script:e.from(t.scriptPk,"hex")},tapInternalKey:a(e.from(t.pubkey,"hex"))};return{data:n,utxo:t}}if("P2WPKH"===t.addressType||"M44_P2WPKH"===t.addressType){var r={hash:t.txid,index:t.vout,witnessUtxo:{value:t.satoshis,script:e.from(t.scriptPk,"hex")}};return{data:r,utxo:t}}if("P2PKH"===t.addressType){if(!t.rawtx||s){var c={hash:t.txid,index:t.vout,witnessUtxo:{value:t.satoshis,script:e.from(t.scriptPk,"hex")}};return{data:c,utxo:t}}var i={hash:t.txid,index:t.vout,nonWitnessUtxo:e.from(t.rawtx,"hex")};return{data:i,utxo:t}}if("P2SH"===t.addressType){var o=h["payments"].p2wpkh({pubkey:e.from(t.pubkey,"hex")}),u={hash:t.txid,index:t.vout,witnessUtxo:{value:t.satoshis,script:e.from(t.scriptPk,"hex")},redeemScript:o.output};return{data:u,utxo:t}}}}}}).call(this,s("1c35").Buffer)},ebe1:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return d}));var a=s("c7eb"),n=s("1da1"),r=(s("d81d"),s("a15b"),s("ab3e")),c=s("e6ce"),i=(s("a835"),{btc:"bitcoin",btc_fractal:"fb",merlin:"bitcoin",bevm:"bitcoin",satoshivm:"bitcoin",bitlayer:"bitcoin",b2:"bitcoin",eth:"ethereum",blast:"ethereum",taiko:"ethereum",mode:"ethereum","zksync-era":"ethereum","zksync-lite":"ethereum",trx:"tron",sol:"solana",sei:"sei-network",sui:"sui",arb:"ethereum",doge:"dogecoin",bsc:"binancecoin",opbnb:"binancecoin",xterio:"binancecoin",bnb:"binancecoin",combo:"binancecoin",ht:"huobi-token",kcc:"kucoin-shares",heco:"huobi-token",matic:"matic-network",ftm:"fantom",xdai:"xdai",okt:"oec-token",xlayer:"okb",avax:"avalanche-2",celo:"celo",movr:"moonriver",cro:"crypto-com-chain",iotx:"iotex",bch:"bitcoin-cash",sbch:"bitcoin-cash",glmr:"moonbeam",xdc:"xdce-crowd-sale",sdn:"shiden",fuse:"fuse-network-token",aac:"acute-angle-cloud",klay:"klay-token",one:"harmony",op:"ethereum",evmos:"evmos",brise:"bitrise-token",dogechain:"dogecoin",syscoin:"syscoin",canto:"canto",ethw:"ethereum-pow-iou",ethf:"ethereumfair",aptos:"aptos",onus:"onus",core:"coredaoorg",cfx:"conflux-token",fil:"filecoin",arbnova:"ethereum","polygon-zkevm":"ethereum",pls:"pulsechain",base:"ethereum",linea:"ethereum",shibarium:"bone-shibaswap",scroll:"ethereum",telos:"telos",humanode:"humanode",ace:"fusionist",wemix:"wemix-token",zkfair:"usd-coin",mantle:"mantle",btt:"bittorrent",manta:"ethereum",starknet:"ethereum",eos:"eos",nuls:"nuls",metis:"metis-token",fon:"fonsmartchain",zeta:"zetachain",zeta_test:"zetachain",dym:"dymension",meld:"meld-2",meld_test:"meld-2",theta:"theta-fuel",bgb:"bitget-token",ckb:"nervos-network",zora:"ethereum",go:"gochain",flr:"flare-networks",acala:"acala",zklink:"ethereum",ronin:"ronin",zircuit:"ethereum"});function o(){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(Object(a["a"])().mark((function e(){var t,s,n,i,o,u,p,l,d,b,h,m=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:"eth",e.prev=1,s=-1!==t.indexOf(","),n=s?"":c["a"][t].symbol,s&&(i=t.split(","),o=i.map((function(e){return c["a"][e].symbol})),n=o.join(",")),e.next=7,Object(r["a"])({url:"https://min-api.cryptocompare.com/data/pricemulti?fsyms=".concat(n,"&tsyms=USD,CNY"),method:"get",data:{}});case 7:if(u=e.sent,!s){e.next=14;break}for(l in p=u,p){for(h in d=p[l],b={},d)b[h.toLowerCase()]=d[h];p[l]=b}return e.abrupt("return",p);case 14:return e.abrupt("return",{usd:u[n]["USD"],cny:u[n]["CNY"]});case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e["catch"](1),console.log(e.t0,"eee"),e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[1,17]])}))),u.apply(this,arguments)}function p(){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(Object(a["a"])().mark((function e(){var t,s=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"eth",e.next=3,o(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(){return b.apply(this,arguments)}function b(){return b=Object(n["a"])(Object(a["a"])().mark((function e(){var t,s=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"eth",e.abrupt("return",p(t));case 2:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}}}]);