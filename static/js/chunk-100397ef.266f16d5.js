(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-100397ef"],{"014f":function(e,t,n){"use strict";(function(e){var a=n("bee2"),r=n("d4ec"),s=n("2909"),c=n("c7eb"),i=n("b85c"),o=n("1da1"),u=n("5530"),p=(n("a9e3"),n("d3b7"),n("159b"),n("b680"),n("4de4"),n("d81d"),n("99af"),n("b0c0"),n("4ec9"),n("3ca3"),n("ddb0"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("5319"),n("14d9"),n("c039"),n("2f62")),l=(n("ebe1"),n("d208")),d=n("3e44"),m=n("64b9"),f=n("fa13"),b=n("0774"),y=n.n(b),h=n("df00"),v=(n("ce84"),n("0abea"),n("016a"),n("59da")),w=n("408b"),k=n.n(w),x=n("901e"),g=n.n(x),j=(n("ccaf9"),n("0535"),n("6ccc"),n("a969")),O=(n("5ba3"),"demo");t["a"]={name:O,inject:[],components:{},data:function(){return{}},computed:Object(u["a"])({},Object(p["b"])(["isConnect","account","chainId","isPc","language","ckbNetwork","ckbAccount"])),created:function(){this.$i18n.getLocaleMessage("en")[O]||(this.$i18n.mergeLocaleMessage("en",l["a"].en),this.$i18n.mergeLocaleMessage("zh",l["a"].zh))},mounted:function(){var t=this;return Object(o["a"])(Object(c["a"])().mark((function n(){var u,p,l,b,w,x,O,A,M,z,U,P,S,N,B,C,_,E,F,q,V,R,H,T,W,I,K,D,J,L,$,Y,Q,G,Z,X,ee,te,ne,ae,re,se,ce,ie,oe,ue,pe,le,de,me,fe,be,ye,he;return Object(c["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return me=function(){return me=Object(o["a"])(Object(c["a"])().mark((function t(n){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,pe([e.from(oe),le(ie).toBuffer(),le(n).toBuffer()],le(ie));case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)}))),me.apply(this,arguments)},de=function(e){return me.apply(this,arguments)},n.next=4,j["CosmWasmClient"].connect("https://rpc.sei-apis.com/");case 4:return u=n.sent,p={get_whitelist_details:{address:"sei1e9uzd4mkg4ffkkkvwa6hdx2l5vewtvhl29rf6r"}},n.prev=6,n.next=9,u.queryContractSmart("sei1ytadujp2hp503qv76p2pyvm0l2t9uj40rxr0eynmm5m3xaguu89swzamj2",p);case 9:l=n.sent,console.log(l),Number(l.amount),Math.pow(10,6),n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](6),console.log(n.t0,{amount:"0",status:"NotWhitelisted"});case 17:return n.abrupt("return");case 26:return n.t2=n.sent,n.t1.log.call(n.t1,n.t2),n.abrupt("return");case 33:b=n.sent,console.log("connect success",b),n.next=40;break;case 37:n.prev=37,n.t3=n["catch"](30),console.log("connect failed");case 40:return n.prev=40,n.next=43,window.unisat.getAccounts();case 43:x=n.sent,w=x[0],console.log(x),n.next=51;break;case 48:n.prev=48,n.t4=n["catch"](40),console.log(n.t4);case 51:return O=[{address:"tb1qtg2nw5pmud0fkzsjsndyfrxf6nuk7vpsqhyv63",value:k.a.toSatoshi(Number(1e-6))},{address:"tb1q66jturfwej9uyzsnwhsrsg58epne5nnuusfccd",value:k.a.toSatoshi(Number(1e-6))},{address:"tb1qecj4nwecl54t82ywcxz8k4ugywnjjqsn7alttt",value:k.a.toSatoshi(Number(1e-6))}],A=0,M=0,O.forEach((function(e){A=new g.a(A).plus(e.value).toNumber(),M++})),n.next=57,t.$ajax({url:"https://mempool.space/testnet/api/address/".concat(w,"/utxo"),method:"get"});case 57:z=n.sent,U=new v["Psbt"]({network:v["networks"].testnet}),U.setVersion(1),U.setLocktime(0),P=0,S=0,N=Object(i["a"])(z),n.prev=64,N.s();case 66:if((B=N.n()).done){n.next=80;break}if(_=B.value,null!==_&&void 0!==_&&null!==(C=_.status)&&void 0!==C&&C.confirmed){n.next=70;break}return n.abrupt("continue",78);case 70:return P=new g.a(P).plus(_.value).toNumber(),n.next=73,t.$ajax({url:"https://mempool.space/testnet/api/tx/".concat(_.txid,"/hex"),method:"get"});case 73:if(E=n.sent,U.addInput({hash:_.txid,index:_.vout,nonWitnessUtxo:e.from(E,"hex")}),S++,!(P>A)){n.next=78;break}return n.abrupt("continue",78);case 78:n.next=66;break;case 80:n.next=85;break;case 82:n.prev=82,n.t5=n["catch"](64),N.e(n.t5);case 85:return n.prev=85,N.f(),n.finish(85);case 88:if(O.forEach((function(e){U.addOutput({address:e.address,value:e.value})})),!(P<A)){n.next=92;break}return console.log("输入总额不足以支付输出总额"),n.abrupt("return");case 92:return F=1,U.setMaximumFeeRate(F),q=146*S+33*(M+1)+10,console.log(q),V=new g.a(q).times(F).toFixed(0),console.log(V),U.addOutput({address:w,value:new g.a(P).minus(A).minus(V).toNumber()}),n.prev=99,n.next=102,window.unisat.signPsbt(U.toHex());case 102:return R=n.sent,console.log(R),n.next=106,window.unisat.pushPsbt(R);case 106:H=n.sent,console.log(H),n.next=113;break;case 110:n.prev=110,n.t6=n["catch"](99),console.log(n.t6);case 113:return n.abrupt("return");case 119:return T=n.sent,console.log(T),n.abrupt("return");case 126:return I=n.sent,console.log(I),console.log(I.account.execute),I.enable(),K="0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",D=new h["c"](W,K,I.account),n.next=134,D.balanceOf(I.selectedAddress);case 134:return J=n.sent,n.next=137,D.decimals();case 137:return L=n.sent,console.log(J,L),$=new h["b"]([{name:"Uint256",size:2,type:"struct",members:[{name:"low",type:"felt",offset:0},{name:"high",type:"felt",offset:1}]},{data:[{name:"from_",type:"felt"},{name:"to",type:"felt"},{name:"value",type:"Uint256"}],keys:[],name:"Transfer",type:"event"},{data:[{name:"owner",type:"felt"},{name:"spender",type:"felt"},{name:"value",type:"Uint256"}],keys:[],name:"Approval",type:"event"},{data:[{name:"previousOwner",type:"felt"},{name:"newOwner",type:"felt"}],keys:[],name:"OwnershipTransferred",type:"event"},{name:"constructor",type:"constructor",inputs:[{name:"name",type:"felt"},{name:"symbol",type:"felt"},{name:"decimals",type:"felt"},{name:"initial_supply",type:"Uint256"},{name:"recipient",type:"felt"},{name:"owner",type:"felt"}],outputs:[]},{name:"name",type:"function",inputs:[],outputs:[{name:"name",type:"felt"}],stateMutability:"view"},{name:"symbol",type:"function",inputs:[],outputs:[{name:"symbol",type:"felt"}],stateMutability:"view"},{name:"totalSupply",type:"function",inputs:[],outputs:[{name:"totalSupply",type:"Uint256"}],stateMutability:"view"},{name:"decimals",type:"function",inputs:[],outputs:[{name:"decimals",type:"felt"}],stateMutability:"view"},{name:"balanceOf",type:"function",inputs:[{name:"account",type:"felt"}],outputs:[{name:"balance",type:"Uint256"}],stateMutability:"view"},{name:"allowance",type:"function",inputs:[{name:"owner",type:"felt"},{name:"spender",type:"felt"}],outputs:[{name:"remaining",type:"Uint256"}],stateMutability:"view"},{name:"owner",type:"function",inputs:[],outputs:[{name:"owner",type:"felt"}],stateMutability:"view"},{name:"transfer",type:"function",inputs:[{name:"recipient",type:"felt"},{name:"amount",type:"Uint256"}],outputs:[{name:"success",type:"felt"}]},{name:"transferFrom",type:"function",inputs:[{name:"sender",type:"felt"},{name:"recipient",type:"felt"},{name:"amount",type:"Uint256"}],outputs:[{name:"success",type:"felt"}]},{name:"approve",type:"function",inputs:[{name:"spender",type:"felt"},{name:"amount",type:"Uint256"}],outputs:[{name:"success",type:"felt"}]},{name:"increaseAllowance",type:"function",inputs:[{name:"spender",type:"felt"},{name:"added_value",type:"Uint256"}],outputs:[{name:"success",type:"felt"}]},{name:"decreaseAllowance",type:"function",inputs:[{name:"spender",type:"felt"},{name:"subtracted_value",type:"Uint256"}],outputs:[{name:"success",type:"felt"}]},{name:"mint",type:"function",inputs:[{name:"to",type:"felt"},{name:"amount",type:"Uint256"}],outputs:[]},{name:"burnFrom",type:"function",inputs:[{name:"sender",type:"felt"},{name:"amount",type:"Uint256"}],outputs:[]},{name:"transferOwnership",type:"function",inputs:[{name:"newOwner",type:"felt"}],outputs:[]},{name:"renounceOwnership",type:"function",inputs:[],outputs:[]}]),Y=h["f"].uint256(21e3),Q=$.compile("constructor",{name:"niceToken",symbol:"NIT",decimals:18,initial_supply:Y,recipient:I.selectedAddress,owner:I.selectedAddress}),G={contractAddress:"0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",entrypoint:"transfer",calldata:h["b"].compile({recipient:"0x00E5fe44958d29A91449cad2fA4a4082509616db690909A6a322DeAd9c81139c",amount:h["f"].uint256(1e-7*Math.pow(10,18))})},Z={classHash:"0x02797c4997ea0ca14401188bf6cbd4d89f0e632bd088088ab6cabf63c2056fc8",constructorCalldata:Q},X=[].concat(Z).map((function(e){var t=e.classHash,n=e.salt,a=e.unique,r=void 0===a||a,c=e.constructorCalldata,i=void 0===c?[]:c,o=h["b"].compile(i),u=null!==n&&void 0!==n?n:h["m"].randomAddress();return{call:{contractAddress:"0x041a78e741e5af2fec34b695679bc6891742439f7afb8484ecd7766661ad02bf",entrypoint:"deployContract",calldata:[t,u,h["j"].toCairoBool(r),o.length].concat(Object(s["a"])(o))},address:h["i"].calculateContractAddressFromHash(r?h["g"].starkCurve.pedersen(I.selectedAddress,u):u,t,o,r?"0x041a78e741e5af2fec34b695679bc6891742439f7afb8484ecd7766661ad02bf":0)}})),ee=X.map((function(e){return e.call})),te=X.map((function(e){return e.address})),console.log(ee),n.next=150,I.account.execute([G,ee[0]]);case 150:return n.sent,console.log(te),n.next=154,disconnect({clearLastWallet:!0});case 154:(function(e){e[e["Uninitialized"]=0]="Uninitialized",e[e["MetadataV1"]=4]="MetadataV1",e[e["EditionV1"]=1]="EditionV1",e[e["MasterEditionV1"]=2]="MasterEditionV1",e[e["MasterEditionV2"]=6]="MasterEditionV2",e[e["EditionMarker"]=7]="EditionMarker"})(ne||(ne={})),ae=Object(a["a"])((function e(t){Object(r["a"])(this,e),this.name=t.name,this.symbol=t.symbol,this.uri=t.uri,this.sellerFeeBasisPoints=t.sellerFeeBasisPoints,this.creators=t.creators})),re=Object(a["a"])((function e(t){Object(r["a"])(this,e),this.key=ne.MetadataV1,this.updateAuthority=t.updateAuthority,this.mint=t.mint,this.data=t.data,this.primarySaleHappened=t.primarySaleHappened,this.isMutable=t.isMutable,this.editionNonce=t.editionNonce})),se=Object(a["a"])((function e(t){Object(r["a"])(this,e),this.address=t.address,this.verified=t.verified,this.share=t.share})),ce=new Map([[ae,{kind:"struct",fields:[["name","string"],["symbol","string"],["uri","string"],["sellerFeeBasisPoints","u16"],["creators",{kind:"option",type:[se]}]]}],[se,{kind:"struct",fields:[["address","pubkeyAsString"],["verified","u8"],["share","u8"]]}],[re,{kind:"struct",fields:[["key","u8"],["updateAuthority","pubkeyAsString"],["mint","pubkeyAsString"],["data",ae],["primarySaleHappened","u8"],["isMutable","u8"]]}]]),ie="metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",oe="metadata",ue=new Map,f["BinaryReader"].prototype.readPubkey=function(){var e=this,t=e.readFixedArray(32);return new m["PublicKey"](t)},f["BinaryWriter"].prototype.writePubkey=function(e){var t=this;t.writeFixedArray(e.toBuffer())},f["BinaryReader"].prototype.readPubkeyAsString=function(){var e=this,t=e.readFixedArray(32);return y.a.encode(t)},f["BinaryWriter"].prototype.writePubkeyAsString=function(e){var t=this;t.writeFixedArray(y.a.decode(e))},pe=function(){var e=Object(o["a"])(Object(c["a"])().mark((function e(t,n){var a;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["PublicKey"].findProgramAddress(t,n);case 2:return a=e.sent,e.abrupt("return",[a[0].toBase58(),a[1]]);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(e){if("string"!==typeof e)return e;var t=ue.get(e);return t||(t=new m["PublicKey"](e),ue.set(e,t)),t},fe=new RegExp("\0","g"),be=function(e){try{var t=Object(f["deserializeUnchecked"])(ce,re,e);return t.data.name=t.data.name.replace(fe,""),t.data.uri=t.data.uri.replace(fe,""),t.data.symbol=t.data.symbol.replace(fe,""),t}catch(n){console.log(n)}},ye=function(){var e=Object(o["a"])(Object(c["a"])().mark((function e(t){var n,a,r,s,i,o;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("working"),n=new m["Connection"]("https://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ","confirmed"),e.next=4,n.getParsedTokenAccountsByOwner(t,{programId:d["TOKEN_PROGRAM_ID"]});case 4:return a=e.sent,e.next=7,Promise.all(a.value.filter((function(e){return 1===e.account.data.parsed.info.tokenAmount.uiAmount})).map((function(e){return de(e.account.data.parsed.info.mint)})));case 7:return r=e.sent,s=r.map((function(e){return new m["PublicKey"](e)})),e.next=11,n.getMultipleAccountsInfo(s);case 11:return i=e.sent,o=i.filter((function(e){return null!==e})).map((function(e){return be(e.data)})),e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=Object(o["a"])(Object(c["a"])().mark((function e(t){var n,a;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ye(t);case 2:n=e.sent,a={},n.map(function(){var e=Object(o["a"])(Object(c["a"])().mark((function e(t){var n;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a[t.updateAuthority]||(a[t.updateAuthority]=[]),n={name:t.data.name,symbol:t.data.symbol,mint:t.mint},a[t.updateAuthority].push(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he(new m["PublicKey"]("HQQPeFqTCrsr9taqDgx5tzxzbUednJUapZnruvGRJk5b"));case 173:case"end":return n.stop()}}),n,null,[[6,14],[30,37],[40,48],[64,82,85,88],[99,110]])})))()}}}).call(this,n("1c35").Buffer)},26:function(e,t){},27:function(e,t){},28:function(e,t){},29:function(e,t){},30:function(e,t){},31:function(e,t){},"46a4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e._v(" 1 ")])},r=[],s=n("014f"),c=s["a"],i=(n("518a"),n("2877")),o=Object(i["a"])(c,a,r,!1,null,"7d15c746",null);t["default"]=o.exports},"518a":function(e,t,n){"use strict";n("6a69")},"6a69":function(e,t,n){},d208:function(e,t,n){"use strict";t["a"]={zh:{rpcServer:{}},en:{rpcServer:{}}}},ebe1:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var a=n("c7eb"),r=n("1da1"),s=n("ab3e"),c=n("e6ce"),i=(n("a835"),{btc:"bitcoin",merlin:"bitcoin",bevm:"bitcoin",satoshivm:"bitcoin",bitlayer:"bitcoin",b2:"bitcoin",eth:"ethereum",blast:"ethereum",taiko:"ethereum",mode:"ethereum","zksync-era":"ethereum","zksync-lite":"ethereum",trx:"tron",sol:"solana",sei:"sei-network",sui:"sui",arb:"ethereum",doge:"dogecoin",bsc:"binancecoin",opbnb:"binancecoin",xterio:"binancecoin",bnb:"binancecoin",combo:"binancecoin",ht:"huobi-token",kcc:"kucoin-shares",heco:"huobi-token",matic:"matic-network",ftm:"fantom",xdai:"xdai",okt:"oec-token",xlayer:"okb",avax:"avalanche-2",celo:"celo",movr:"moonriver",cro:"crypto-com-chain",iotx:"iotex",bch:"bitcoin-cash",sbch:"bitcoin-cash",glmr:"moonbeam",xdc:"xdce-crowd-sale",sdn:"shiden",fuse:"fuse-network-token",aac:"acute-angle-cloud",klay:"klay-token",one:"harmony",op:"ethereum",evmos:"evmos",brise:"bitrise-token",dogechain:"dogecoin",syscoin:"syscoin",canto:"canto",ethw:"ethereum-pow-iou",ethf:"ethereumfair",aptos:"aptos",onus:"onus",core:"coredaoorg",cfx:"conflux-token",fil:"filecoin",arbnova:"ethereum","polygon-zkevm":"ethereum",pls:"pulsechain",base:"ethereum",linea:"ethereum",shibarium:"bone-shibaswap",scroll:"ethereum",telos:"telos",humanode:"humanode",ace:"fusionist",wemix:"wemix-token",zkfair:"usd-coin",mantle:"mantle",btt:"bittorrent",manta:"ethereum",starknet:"ethereum",eos:"eos",nuls:"nuls",metis:"metis-token",fon:"fonsmartchain",zeta:"zetachain",zeta_test:"zetachain",dym:"dymension",meld:"meld-2",meld_test:"meld-2",theta:"theta-fuel",bgb:"bitget-token",ckb:"nervos-network",zora:"ethereum",go:"gochain",flr:"flare-networks",acala:"acala",zklink:"ethereum",ronin:"ronin"});function o(){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(Object(a["a"])().mark((function e(){var t,n,r,i=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"eth",e.prev=1,n=c["a"][t].symbol,e.next=5,Object(s["a"])({url:"https://min-api.cryptocompare.com/data/pricemulti?fsyms=".concat(n,"&tsyms=USD,CNY"),method:"get",data:{}});case 5:return r=e.sent,e.abrupt("return",{usd:r[n]["USD"],cny:r[n]["CNY"]});case 9:return e.prev=9,e.t0=e["catch"](1),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),u.apply(this,arguments)}function p(){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(Object(a["a"])().mark((function e(){var t,n,r,c=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"eth",e.prev=1,n=i[t],e.next=5,Object(s["a"])({url:"https://api.coingecko.com/api/v3/simple/price?ids=".concat(n,"&vs_currencies=cny,usd"),method:"get",isProxy2:!0,data:{}});case 5:return r=e.sent,e.abrupt("return",{usd:r[n]["usd"],cny:r[n]["cny"]});case 9:return e.prev=9,e.t0=e["catch"](1),e.next=13,o(t);case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e,null,[[1,9]])}))),l.apply(this,arguments)}function d(){return m.apply(this,arguments)}function m(){return m=Object(r["a"])(Object(a["a"])().mark((function e(){var t,n=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"eth",e.abrupt("return",p(t));case 2:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}}}]);