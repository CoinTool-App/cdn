(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4bba25c"],{22:function(e,t){},23:function(e,t){},24:function(e,t){},"258b":function(e,t,n){"use strict";n("bf5e")},"38a2b":function(e,t,n){"use strict";n.r(t);var s,a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("OneToMoreHeader",{attrs:{"support-networks":e.supportNetworks,title:e.oneToMoreHeaderTitle,"chain-name":"flow"}}),t("div",{staticClass:"containerBg"},[t("div",{staticClass:"oneToMoreBox"},[t("div",{staticClass:"stepBox"},[t("el-steps",{attrs:{active:e.stepActive,"align-center":"","process-status":"finish","finish-status":"finish"}},[t("el-step",{attrs:{title:e.$t("flowOneToMore.prepare")}}),t("el-step",{attrs:{title:e.$t("flowOneToMore.confirm")}}),t("el-step",{attrs:{title:e.$t("flowOneToMore.send")}})],1)],1),t("Step1",{directives:[{name:"show",rawName:"v-show",value:0===e.stepActive,expression:"stepActive === 0"}],on:{onStep1Confirm:e.onStep1Confirm}}),t("Step2",{directives:[{name:"show",rawName:"v-show",value:1===e.stepActive,expression:"stepActive === 1"}],attrs:{"queue-list":e.queueList,"step-active":e.stepActive,"token-info":e.tokenInfo},on:{onStep2Prev:e.onStep2Prev,onStep2Next:e.onStep2Next,onStep2Confirm:e.onStep2Confirm}}),t("Step3",{directives:[{name:"show",rawName:"v-show",value:2===e.stepActive,expression:"stepActive === 2"}],attrs:{send_tx:e.send_tx,"token-info":e.tokenInfo,"step-active":e.stepActive,"current-fee":e.currentFee,"array-limit":e.arrayLimit,"queue-list":e.queueList},on:{onStep3Prev:e.onStep3Prev}})],1)])],1)},r=[],o=n("c7eb"),i=n("1da1"),c=n("5530"),l={zh:{flowOneToMore:{token:"代币",token_address_err:"代币地址错误",address_amount:"收款地址和数量",auto_amount:"自动添加数量",upload_file:"上传文件",iinsert_manually:"手动输入",download_examples:"下载例子",show_examples:"查看例子",delete_err:"删除无效地址",next:"下一步",address:"地址",slow:"慢",standard:"快",instant:"极速",select_token_tips:"请选择Token",inputAlert_1:"输入代币地址自动添加",inputAlert_2:"支持文件类型： CSV / Excel / Txt",inputAlert_3:"每一行应包括地址和数量，逗号分隔",inputAlert_4:"以下地址或金额不能发送",inputAlert_5:"可自动在每个地址后面添加数量",inputAlert_6:"请至少输入一条地址信息",inputAlert_7:"第 {line} 行: {str} 无效的钱包地址",inputAlert_8:"第 {line} 行: {str} 无效的数量",inputAlert_9:"第 {line} 行: {str} 请输入正确的格式，地址和数量以逗号分隔。例: address,number",inputAlert_10:"授信成功，请点击下一步！",inputAlert_11:"第 {line} 行: {str} 重复的地址",inputAlert_12:"发现重复地址",receiver_error:"第 {line} 行: {str} 由于没有接收方在账上, 无法发送",repeat_1:"保留第一个",repeat_2:"合并重复地址",repeat_3:"保留重复地址",step3_alert_1:"总共需要发送 {a} 次,还需要发送 {b} 次",step3_alert_2:"交易已全部发出，请等待交易被确认。",step3_alert_3:"祝贺，您的代币全部发送成功！",step3_alert_4:"您手动取消了交易，如需继续，请点击发送",step3_alert_5:"继续第 {d} 次交易",decimals:"位数",wallet_select_mainnet:"您的TRON钱包已选择 Mainnet网络",wallet_select_shasta:"您的TRON钱包已选择 Shasta网络",wallet_select:"请把您钱包的网络切换为 Mainnet 或者 Shasta网络",summary:"摘要",total_address_num:"地址总数",total_send_token_num:"代币发送总数",total_send_tx_num:"交易总数",token_balance:"代币余额",y_fee:"预估费用",you_balance:"你当前 {symbol} 的余额",d_allowance_b:"当前授信额度",y_allowance_b:"需授信额度",approve_amount:"授权额度",send_amount:"发送数量({amount} {symbol})",send_amount_b:"代币余额({amount} {symbol})",prepare:"准备",confirm:"确认",close:"关闭",send:"发送",wait_confirm:"等待确认交易...",addressList:"接收地址名单",remove:"移除",remaining:"剩余",insufficient_balance:"{symbol} 余额不足，至少需要{amount} {symbol}"}},en:{flowOneToMore:{token:"Token",token_address_err:"Token address error",address_amount:"Addresses with Amounts",auto_amount:"Auto add amounts",upload_file:"Upload file",iinsert_manually:"Insert manually",download_examples:"Download examples",show_examples:"Show examples",delete_err:"Delete them",next:"Next",address:"Address",slow:"Slow",standard:"Fast",instant:"Instant",select_token_tips:"Please select a token~",inputAlert_1:"Input token address to add automatically",inputAlert_2:"Accepted: CSV / Excel / Txt",inputAlert_3:"The address and amount are separated by commas",inputAlert_4:"The below addresses cannot be processed",inputAlert_5:"Amount can be automatically added after each address",inputAlert_6:"Please enter at least one address information",inputAlert_7:"Line {line} : {str} is a invalid wallet address",inputAlert_8:"Line {line} : {str} is a invalid wrong amount",inputAlert_9:"Line {line} : {str} is a invalid wallet address and wrong amount. E.g:address,number",inputAlert_10:"Request approve succeeded ! Please click next",inputAlert_11:"Line {line}: {str} is duplicate address",inputAlert_12:"Duplicated wallet addresses",receiver_error:"Line {line} : {str} Due to a lack of Receiver in account",repeat_1:"Keep the first one",repeat_2:"Merge balances",repeat_3:"Keep duplicate addresses",step3_alert_1:"A total of {a} needs to be sent,You need to send {b} more times",step3_alert_2:"All transactions have been sent out. Please wait for the transaction to be confirmed.",step3_alert_3:"Congratulations, all your tokens have been sent successfully!",step3_alert_4:"You have manually cancelled the transaction, to continue, please click send",step3_alert_5:"Continue with the {d} first transaction",decimals:"Decimals",summary:"Summary",wallet_select_mainnet:"Your TRON wallet has selected the Mainnet network",wallet_select_shasta:"Your TRON wallet has selected the Shasta network",wallet_select:"Please switch your wallet network to Mainnet or Shasta network",total_address_num:"Total number of addresses",total_send_token_num:"Total number of tokens to be sent",total_send_tx_num:"Total number of transactions needed",token_balance:"Your token balance",y_fee:"Approximate cost of operation",you_balance:"Your current {symbol} balance",d_allowance_b:"Your current allowance",y_allowance_b:"Request approve amount",prepare:"Prepare",approve_amount:"Amount to approve",send_amount:"Exact amount to be sent ({amount} {symbol})",send_amount_b:"Your token balance({amount} {symbol})",confirm:"Confirm",close:"Close",send:"Send",wait_confirm:"Pending confirmation of transaction",addressList:"List of recipients",remove:"Remove",remaining:"Remaining",insufficient_balance:"Insufficient {symbol} balance, Please have at least {amount} {symbol}"}}},u=n("2f62"),p=n("850d"),d=(n("b0c0"),n("38cf"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"step1"},[t("div",{staticClass:"inputBox"},[t("div",{staticClass:"inputContext inputContextAddress"},[t("div",{staticClass:"label"},[t("span",[e._v(e._s("Token"))]),e.isPc&&e.tokenInfo?t("el-tag",[e._v("Contract: "+e._s(e.tokenInfo.address))]):e._e()],1),t("el-select",{staticClass:"selectBox",staticStyle:{width:"100%"},attrs:{clearable:"",size:"large",filterable:"","filter-method":e.handleFilterAddress},on:{change:e.onSelectChange},model:{value:e.contractName,callback:function(t){e.contractName=t},expression:"contractName"}},e._l(e.addressOptions,(function(n,s){return t("el-option",{key:s,attrs:{label:n.name,value:n.contractName}},[t("span",{staticClass:"nameBox",staticStyle:{float:"left"}},[t("img",{attrs:{src:n.logoURI}}),e._v(" "+e._s(n.symbol)+" - "+e._s(n.name)+" ")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.isPc,expression:"isPc"}],staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(n.address))])])})),1)],1)]),t("div",{staticClass:"label"},[t("span",[e._v(e._s(e.$t("flowOneToMore.address_amount")))]),t("span",{staticClass:"btnText",on:{click:e.onBulkAmount}},[e._v(e._s(e.$t("flowOneToMore.auto_amount")))]),e.isInput?t("span",{staticClass:"btnText",on:{click:e.onToggleInputType}},[e._v(e._s(e.$t("flowOneToMore.upload_file")))]):t("span",{staticClass:"btnText",on:{click:e.onToggleInputType}},[e._v(e._s(e.$t("flowOneToMore.iinsert_manually")))])]),t("el-row",[t("el-col",{attrs:{xs:{span:24}}},[e.isInput?t("Editor",{ref:"editor",on:{changed:e.onChangeEditor},model:{value:e.editorValue,callback:function(t){e.editorValue=t},expression:"editorValue"}}):t("upload-excel-component",{attrs:{"on-success":e.onUploadFileSuccess,"before-upload":e.beforeUpload}})],1)],1),t("div",{staticClass:"label label-remark"},[e.isInput?t("span",[e._v(e._s(e.$t("flowOneToMore.inputAlert_3")))]):t("span",[e._v(e._s(e.$t("flowOneToMore.inputAlert_2")))]),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.isInput,expression:"!isInput"}],staticClass:"btnText"},[t("a",{attrs:{target:"_blank",href:"/example.xlsx"}},[e._v(e._s(e.$t("flowOneToMore.download_examples")))])]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.isInput,expression:"isInput"}],staticClass:"btnText",on:{click:e.onExample}},[e._v(e._s(e.$t("flowOneToMore.show_examples")))])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.errInfoList.length>0,expression:"errInfoList.length > 0"}],staticClass:"errInfoBox"},[t("div",{staticClass:"label label-remark"},[t("span",{directives:[{name:"show",rawName:"v-show",value:!e.repeat,expression:"!repeat"}]},[e._v(e._s(e.$t("flowOneToMore.inputAlert_4")))]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}]},[e._v(e._s(e.$t("flowOneToMore.inputAlert_12")))]),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.repeat,expression:"!repeat"}],staticClass:"btnText",on:{click:e.onDeleteErr}},[e._v(e._s(e.$t("flowOneToMore.delete_err")))]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(1)}}},[e._v(e._s(e.$t("flowOneToMore.repeat_1")))]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(2)}}},[e._v(e._s(e.$t("flowOneToMore.repeat_2")))]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.repeat,expression:"repeat"}],staticClass:"btnText",on:{click:function(t){return e.onRepeat(3)}}},[e._v(e._s(e.$t("flowOneToMore.repeat_3")))])]),t("ul",e._l(e.errInfoList,(function(n){return t("li",{key:n},[e._v(e._s(n))])})),0)]),t("el-button",{attrs:{size:"large",type:"primary",loading:e.checkLoading},on:{click:e.onNext}},[e._v(e._s(e.$t("flowOneToMore.next")))])],1)}),f=[],_=n("3835"),m=n("668b"),h=(n("7db0"),n("d3b7"),n("14d9"),n("159b"),n("a15b"),n("ddb0"),n("498a"),n("2ca0"),n("4de4"),n("99af"),n("ac1f"),n("5319"),n("d81d"),n("25f0"),n("b680"),n("a9e3"),n("4128")),b=n.n(h),v="0xf233dcee88fe0abe",w=window.onflowFcl,x="0xFungibleToken",k=function(){var e=Object(i["a"])(Object(o["a"])().mark((function e(t,n){var s,a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s="\n    import FungibleToken from 0xFungibleToken\n    import ".concat(t.contractName," from ").concat(t.address,"\n    \n    pub fun main(address: Address): Bool {\n        let account = getAccount(address)\n    \n        let vaultRef = account\n            .getCapability(").concat(t.path.receiver,")\n            .borrow<&").concat(t.contractName,".Vault{FungibleToken.Receiver}>()\n        \n        if let vault = vaultRef {\n          return true\n        }\n        return false \n    }\n  ").replace(x,"0xf233dcee88fe0abe"),e.next=3,w.query({cadence:s,args:function(e,t){return[e(n,t.Address)]}});case 3:return a=e.sent,e.abrupt("return",null!==a&&void 0!==a&&a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(i["a"])(Object(o["a"])().mark((function e(t,n){var s,a,r,i;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=n.map((function(e){return e.address})),a=n.map((function(e){return Number(e.amount).toFixed(8).toString()})),r="\n    import FungibleToken from 0xFungibleToken\n    import ".concat(t.contractName," from ").concat(t.address,"\n\n    transaction(recipients: [Address], amounts: [UFix64]) {\n\n        let vaultRef: &").concat(t.contractName,".Vault\n\n        prepare(signer: AuthAccount) {\n            // Get a reference to the signer's stored vault\n            self.vaultRef = signer.borrow<&").concat(t.contractName,".Vault>(from: ").concat(t.path.vault,')\n                ?? panic("Could not borrow reference to the owner\'s Vault!")\n        }\n\n        pre {\n            recipients.length == amounts.length: "invalid params"\n        }\n\n        execute {\n            var counter = 0\n\n            while (counter < recipients.length) {\n                // Get the recipient\'s public account object\n                let recipientAccount = getAccount(recipients[counter])\n\n                // Get a reference to the recipient\'s Receiver\n                let receiverRef = recipientAccount.getCapability(').concat(t.path.receiver,")!\n                    .borrow<&{FungibleToken.Receiver}>()\n                    ?? panic(\"Could not borrow receiver reference to the recipient's Vault\")\n\n                // Deposit the withdrawn tokens in the recipient's receiver\n                receiverRef.deposit(from: <-self.vaultRef.withdraw(amount: amounts[counter]))\n\n                counter = counter + 1\n            }\n        }\n    }\n  ").replace(x,v),e.next=5,w.mutate({cadence:r,args:function(e,t){return[e(s,t.Array(t.Address)),e(a,t.Array(t.UFix64))]},proposer:w.currentUser,payer:w.currentUser,limit:9999});case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(i["a"])(Object(o["a"])().mark((function e(t,n){var s,a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s="\n    import FungibleToken from 0xFungibleToken\n    import ".concat(t.contractName," from ").concat(t.address,"\n    \n    pub fun main(address: Address): UFix64 {\n        let account = getAccount(address)\n    \n        let vaultRef = account\n            .getCapability(").concat(t.path.balance,")\n            .borrow<&").concat(t.contractName,".Vault{FungibleToken.Balance}>()\n         \n        if let vault = vaultRef {\n          return vault.balance\n        }\n        return 0.0\n    }\n  ").replace(x,v),e.next=3,w.query({cadence:s,args:function(e,t){return[e(n,t.Address)]}});case 3:return a=e.sent,e.abrupt("return",new b.a(null!==a&&void 0!==a?a:0));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y={queryReceiver:k,batchTransfer:O,queryBalance:g},T=y,L=n("1b9d"),C=n("37969"),A=n("fa7e"),j=n("986e"),M={name:"Step1",inject:["cosmosWalletStateTest"],components:{UploadExcelComponent:C["a"],Editor:A["a"]},data:function(){return{checkLoading:!1,contractName:"",balance:{},tokenInfo:{},repeat:!1,repeat_status:!1,loading_address:!1,stepActive:1,addressOptions:[],addressOptionsCopy:[],isInput:!0,editorValue:"",queueList:[],errInfoList:[]}},computed:Object(c["a"])({},Object(u["b"])(["isPc","flowAccount","flowNetwork"])),watch:{editorValue:function(e){this.onEditCheck(e)},contractName:function(e){e||(this.addressOptions=this.addressOptionsCopy)}},created:function(){j["h"].$on(j["g"],(function(e){}))},mounted:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=L["a"].Mainnet,(new L["c"]).resolve(L["b"].GitHub,n).then((function(t){var n=t.getList();e.addressOptions=n,e.addressOptionsCopy=n,e.contractName="FlowToken",e.onSelectChange(e.contractName)}));case 2:case"end":return t.stop()}}),t)})))()},methods:{onSelectChange:function(e){var t=this.addressOptions.find((function(t){return t.contractName===e}));console.log(t,"tokenInfo"),this.tokenInfo=t,this.onEditCheck(this.editorValue)},onExample:function(){this.editorValue="0xbec28daeac26146c,1\n0xeebdcc9f7ba2d15a,1.6"},onBulkAmount:function(){var e=this;this.$prompt(this.$t("flowOneToMore.auto_amount"),this.$t("flowOneToMore.inputAlert_5"),{confirmButtonText:this.$t("flowOneToMore.confirm"),cancelButtonText:this.$t("flowOneToMore.close")}).then((function(t){var n=t.value,s=e.editorValue.split("\n"),a="";for(var r in s){var o=s[r].split(",");o[1]&&(s[r]=o[0]),parseInt(r)+1===s.length?a+=s[r]+","+n:a+=s[r]+","+n+"\n"}e.editorValue=a})).catch((function(){}))},onNext:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.flowAccount){t.next=3;break}return e.$message.error(e.$t("common.connect_wallet_tips")),t.abrupt("return");case 3:if(""!==e.editorValue){t.next=6;break}return e.$message.error(e.$t("flowOneToMore.inputAlert_6")),t.abrupt("return");case 6:if(e.tokenInfo&&""!==e.tokenInfo.address){t.next=9;break}return e.$message.error(e.$t("flowOneToMore.select_token_tips")),t.abrupt("return");case 9:return t.next=11,e.onEditCheck(e.editorValue);case 11:if(n=t.sent,!n){t.next=14;break}return t.abrupt("return");case 14:e.$emit("onStep1Confirm",{queueList:e.queueList,tokenInfo:e.tokenInfo});case 15:case"end":return t.stop()}}),t)})))()},onDeleteErr:function(){var e=this,t="",n=[];for(var s in this.queueList)n.push(this.queueList[s]);this.queueList=n,this.queueList.forEach((function(n,s){var a=s===e.queueList.length-1?"":"\n";t+=e.queueList[s].join()+a})),this.editorValue=t},onRepeat:function(e){var t=this,n="",s=[],a=[];for(var r in this.queueList)s[this.queueList[r][0]]&&1===e?delete this.queueList[r]:s[this.queueList[r][0]]&&2===e?(a[this.queueList[r][0]]+=parseFloat(this.queueList[r][1]),delete this.queueList[r]):(s[this.queueList[r][0]]=!0,2===e&&(a[this.queueList[r][0]]=parseFloat(this.queueList[r][1]),delete this.queueList[r]));if(2===e)for(var o in a)this.queueList.push([o,a[o]]);3===e&&(this.repeat_status=!0,this.repeat=!1,this.errInfoList=[]);var i=[];for(var c in this.queueList)i.push(this.queueList[c]);this.queueList=i,this.queueList.forEach((function(e,s){var a=s===t.queueList.length-1?"":"\n";n+=t.queueList[s].join()+a})),this.editorValue=n},onEditCheck:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function n(){var s,a,r,i,c,l,u,p,d,f,h,b,v,w,x,k;return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""!==t.flowAccount){n.next=2;break}return n.abrupt("return",!1);case 2:if(""!==e){n.next=7;break}return t.queueList=[],t.errInfoList=[],t.repeat_status=!1,n.abrupt("return");case 7:t.checkLoading=!0,s=e.split("\n"),a=[],r=[],i=[],c=!1,l=!1,u=!1,p=!1,n.prev=16,f=Object(m["a"])(s.entries());case 18:return n.next=20,f.next();case 20:if(!(u=!(h=n.sent).done)){n.next=57;break}if(b=Object(_["a"])(h.value,2),v=b[0],b[1],w=parseInt(v)+1,x=s[v].trim().split(","),2!==x.length){n.next=49;break}if(x[0].startsWith("0x")&&18===x[0].length){n.next=29;break}return c=!0,r.push(t.$t("flowOneToMore.inputAlert_7",{line:w,str:x[0]})),n.abrupt("continue",54);case 29:if(!(parseFloat(x[1])<0)&&parseFloat(x[1])){n.next=33;break}return c=!0,r.push(t.$t("flowOneToMore.inputAlert_8",{line:w,str:x[1]})),n.abrupt("continue",54);case 33:return k=!1,n.prev=34,n.next=37,T.queryReceiver(t.tokenInfo,x[0]);case 37:k=n.sent,n.next=43;break;case 40:n.prev=40,n.t0=n["catch"](34),k=!1;case 43:if(k){n.next=47;break}return c=!0,r.push(t.$t("flowOneToMore.receiver_error",{line:w,str:x[0]})),n.abrupt("continue",54);case 47:n.next=52;break;case 49:return c=!0,r.push(t.$t("flowOneToMore.inputAlert_9",{line:w,str:x[0]})),n.abrupt("continue",54);case 52:i[x[0]]&&!t.repeat_status?(l=!0,c=!0,r.push(t.$t("flowOneToMore.inputAlert_11",{line:w,str:x[0]}))):i[x[0]]=!0,a.push(x);case 54:u=!1,n.next=18;break;case 57:n.next=63;break;case 59:n.prev=59,n.t1=n["catch"](16),p=!0,d=n.t1;case 63:if(n.prev=63,n.prev=64,!u||null==f.return){n.next=68;break}return n.next=68,f.return();case 68:if(n.prev=68,!p){n.next=71;break}throw d;case 71:return n.finish(68);case 72:return n.finish(63);case 73:return t.repeat=l,t.queueList=a,t.errInfoList=r,t.checkLoading=!1,n.abrupt("return",c);case 78:case"end":return n.stop()}}),n,null,[[16,59,63,73],[34,40],[64,,68,72]])})))()},handleFilterAddress:function(e){var t=e.trim().toLowerCase();console.log(t,e),t?(this.addressOptions=this.addressOptionsCopy.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t)||-1!==e.address.toLowerCase().indexOf(t)||-1!==e.symbol.toLowerCase().indexOf(t)})),this.contractName=t):this.addressOptions=this.addressOptionsCopy},onToggleInputType:function(){this.isInput=!this.isInput},beforeUpload:function(e){var t=e.size/1024/1024<10;return!!t||(this.$message({message:"Please do not upload files larger than 10m in size.",type:"warning"}),!1)},onChangeEditor:function(e){this.editorValue=e},onUploadFileSuccess:function(e){var t=e.results,n=(e.header,"");t.forEach((function(e,s){var a=s===t.length-1?"":"\n";n+="".concat(e.Address,",").concat(e.Amount).concat(a)})),this.editorValue=n,this.onToggleInputType()}}},N=M,$=(n("a222"),n("2877")),I=Object($["a"])(N,d,f,!1,null,"1fc6e9c9",null),S=I.exports,q=function(){var e=this,t=e._self._c;return e.tokenInfo.address?t("div",{staticClass:"step2"},[t("div",{staticClass:"label"},[t("span",[e._v(e._s(e.$t("flowOneToMore.addressList")))])]),t("el-table",{staticStyle:{width:"100%","border-radius":"10px"},attrs:{data:e.tableData,height:e.tableData.length>7?250:null}},[t("el-table-column",{attrs:{prop:"address",label:"Address",width:e.isPc?"410px":"auto"},scopedSlots:e._u([{key:"default",fn:function(n){var s=n.row;return[t("span",[t("a",{attrs:{href:"https://flowscan.org/account/".concat(s.address),target:"_blank"}},[e._v(" "+e._s(e._f("autoAddress")(s.address))+" ")])])]}}],null,!1,522816090)}),t("el-table-column",{attrs:{prop:"amount",label:"Amount"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(" "+e._s(n.amount)+" "+e._s(e.tokenInfo.symbol)+" ")]}}],null,!1,2479941859)}),t("el-table-column",{attrs:{width:"80px"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleDelete(n.$index,n.row)}}},[e._v(" "+e._s(e.$t("flowOneToMore.remove"))+" ")])]}}],null,!1,2220572560)})],1),t("div",{staticClass:"label"},[t("span",[e._v(e._s(e.$t("flowOneToMore.summary")))])]),t("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.step2_loading,expression:"step2_loading"}],staticClass:"abstract"},[t("li",[t("span",{staticClass:"number"},[e._v(e._s(e.address_count))]),t("span",{staticClass:"remark"},[e._v(e._s(e.$t("flowOneToMore.total_address_num")))])]),t("li",[t("span",{staticClass:"number"},[e._v(e._s(e.send_amount)+" "+e._s(e.tokenInfo.symbol))]),t("span",{staticClass:"remark"},[e._v(e._s(e.$t("flowOneToMore.total_send_token_num")))])]),t("li",[t("span",{staticClass:"number"},[e._v(e._s(e.send_tx))]),t("span",{staticClass:"remark"},[e._v(e._s(e.$t("flowOneToMore.total_send_tx_num")))])]),t("li",[t("span",{staticClass:"number"},[e._v(e._s(e.ethBalance)+" "+e._s(e.tokenInfo.symbol))]),t("span",{staticClass:"remark"},[e._v(e._s(e.$t("flowOneToMore.you_balance",{symbol:e.tokenInfo.symbol})))])]),t("li",[t("span",{staticClass:"number"},[e._v(e._s(e.fees)+" "+e._s(e.tokenInfo.symbol))]),t("span",{staticClass:"remark"},[e._v(e._s(e.$t("flowOneToMore.y_fee")))])]),t("li",[t("span",{staticClass:"number"},[e._v(e._s(e.remaining)+" "+e._s(e.tokenInfo.symbol))]),t("span",{staticClass:"remark"},[e._v(e._s(e.$t("flowOneToMore.remaining")))])])]),t("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.approve_status,expression:"approve_status"}],staticClass:"tips",attrs:{title:e.$t("flowOneToMore.inputAlert_10"),type:"success",closable:!1,effect:"dark"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.errInfoList.length>0,expression:"errInfoList.length > 0"}],staticClass:"errInfoBox"},[t("ul",e._l(e.errInfoList,(function(n){return t("li",{key:n},[e._v(e._s(n))])})),0)]),t("div",{staticClass:"btnBox"},[t("el-button",{attrs:{size:"large",type:"primary",icon:"el-icon-arrow-left"},on:{click:e.onPrev}}),t("el-button",{attrs:{loading:e.step2_loading,size:"large",type:"primary",disabled:e.isDisabledSend},on:{click:e.onNext}},[e._v(e._s(e.$t("flowOneToMore.next")))])],1)],1):e._e()},F=[],R={receive_fees_address:"0xbec28daeac26146c",fees:1},P=R,B=n("901e"),V=n.n(B),E={name:"Step2",components:{},props:{queueList:{type:Array,required:!0},tokenInfo:{type:Object,required:!0},stepActive:{type:Number,required:!0}},data:function(){return{web3:{},send_tx:0,approve_status:!1,send_amount:0,address_count:0,step2_loading:!1,allowance_select:2,tokenBalance:0,ethBalance:0,isDisabledSend:!1,errInfoList:[],arrayLimit:50,tableData:[],sliderMarks:{}}},computed:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["flowAccount","flowNetwork","isPc"])),{},{remaining:function(){return Number(Number(this.ethBalance-this.send_amount-P.fees).toFixed(5))},fees:function(){return P.fees+.001}}),watch:{step2_loading:function(e){j["h"].$emit(j["g"],e)},stepActive:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function n(){return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(1!==e){n.next=4;break}return t.propQueueListl=t.queueList,n.next=4,t.init();case 4:case"end":return n.stop()}}),n)})))()}},created:function(){},mounted:function(){},methods:{handleDelete:function(e,t){var n=this;return Object(i["a"])(Object(o["a"])().mark((function e(){var s;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=n.propQueueListl.filter((function(e){return e[0]!==t.address})),n.propQueueListl=s,n.init();case 3:case"end":return e.stop()}}),e)})))()},init:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var n,s,a,r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.errInfoList=[],e.tableData=[],e.isDisabledSend=!1,e.step2_loading=!0,t.next=6,e.onUpdateBalance();case 6:for(n in e.propQueueListl)e.tableData.push({address:e.propQueueListl[n][0],amount:e.propQueueListl[n][1]});for(a in e.address_count=e.propQueueListl.length,e.send_tx=Math.ceil(e.propQueueListl.length/e.arrayLimit),s=0,e.propQueueListl)s=new V.a(s).plus(e.propQueueListl[a][1]).toFixed();e.send_amount=s,e.step2_loading=!1,r=parseFloat(e.send_amount)+parseFloat(e.fees),e.ethBalance<r&&(e.isDisabledSend=!0,e.errInfoList.push(e.$t("flowOneToMore.insufficient_balance",{symbol:e.tokenInfo.symbol,amount:r})));case 15:case"end":return t.stop()}}),t)})))()},onNext:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$emit("onStep2Confirm",{queueList:e.propQueueListl,send_tx:e.send_tx,arrayLimit:e.arrayLimit});case 1:case"end":return t.stop()}}),t)})))()},onPrev:function(){this.$emit("onStep2Prev")},onUpdateBalance:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.queryBalance(e.tokenInfo,e.flowAccount).then((function(t){e.tokenBalance=t.toString(),e.ethBalance=t.toString()}));case 2:case"end":return t.stop()}}),t)})))()}}},D=E,U=(n("b039"),Object($["a"])(D,q,F,!1,null,"33284401",null)),z=U.exports,Q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"step3"},[t("div",{staticClass:"label"},[t("span",[e._v(" "+e._s(e.$t("flowOneToMore.step3_alert_1",{a:e.send_status.a,b:e.send_status.b})))]),t("span",{directives:[{name:"show",rawName:"v-show",value:0===e.send_status.b&&!e.all_send,expression:"send_status.b === 0 && !all_send"}]},[e._v(e._s(e.$t("flowOneToMore.step3_alert_2")))])]),t("DealList",{attrs:{list:e.dealList}}),t("el-alert",{directives:[{name:"show",rawName:"v-show",value:0===e.send_status.b&&e.all_send,expression:"send_status.b === 0 && all_send"}],staticClass:"tips",attrs:{title:e.$t("flowOneToMore.step3_alert_3"),type:"success",closable:!1,effect:"dark"}}),t("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.waitMetamask,expression:"waitMetamask"}],staticClass:"tips",attrs:{type:"success",closable:!1,center:"",effect:"dark"}},[t("i",{staticClass:"el-icon-loading icon"}),e._v(e._s(e.$t("flowOneToMore.wait_confirm")))]),t("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.send_close,expression:"send_close"}],staticClass:"tips",attrs:{title:e.$t("flowOneToMore.step3_alert_4"),type:"success",closable:!1,effect:"dark"}}),t("div",{staticClass:"btnBox"},[t("el-button",{attrs:{size:"large",type:"primary",icon:"el-icon-arrow-left"},on:{click:e.onPrev}}),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.send_close,expression:"send_close"}],attrs:{size:"large",type:"primary"},on:{click:e.onSend}},[e._v(e._s(e.$t("flowOneToMore.step3_alert_5",{d:e.d_slice})))])],1)],1)},Y=[],H=n("53ca"),G=(n("caad"),n("2532"),function(){var e=this,t=e._self._c;return t("ul",{directives:[{name:"show",rawName:"v-show",value:e.list.length>0,expression:"list.length > 0"}],staticClass:"dealList"},e._l(e.list,(function(n,s){return t("li",{key:n.address},[t("div",{staticClass:"left"},[t("span",{staticClass:"index"},[e._v(e._s(s+1))]),t("a",{staticClass:"address",attrs:{target:"_blank",href:"https://flowscan.org/transaction/".concat(n.address)}},[e._v(e._s(n.address))])]),t("div",{staticClass:"right"},[t("span",{staticClass:"status"},[0===n.status?t("i",{staticClass:"el-icon-loading"}):1===n.status?t("i",{staticClass:"el-icon-success"}):2===n.status?t("i",{staticClass:"el-icon-error",staticStyle:{color:"#F05252"}}):e._e()])])])})),0)}),W=[],J={props:{list:{type:Array,required:!0}},data:function(){return{blockTxurl:""}},created:function(){},mounted:function(){},methods:{}},K=J,X=(n("258b"),Object($["a"])(K,G,W,!1,null,"2614509d",null)),Z=X.exports,ee={name:"Step3",components:{DealList:Z},props:{send_tx:{type:Number,required:!0},arrayLimit:{type:Number,required:!0},tokenInfo:{type:Object,required:!0},queueList:{type:Array,required:!0},stepActive:{type:Number,required:!0}},data:function(){return{dealList:[],send_close:!1,addresses_to_send:[],balances_to_send:[],send_status:{a:1,b:1},all_send:!1,d_slice:1,d_slice_s:0,web3:{},waitMetamask:!1}},computed:Object(c["a"])({},Object(u["b"])(["flowAccount","flowNetwork"])),watch:{stepActive:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function n(){return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(2!==e){n.next=3;break}return n.next=3,t.init();case 3:case"end":return n.stop()}}),n)})))()}},created:function(){},mounted:function(){},methods:{init:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=window.onflowFcl,e.dealList=[],e.send_status={a:1,b:1},e.send_close=!1,e.all_send=!1,t.next=7,e._multisend();case 7:case"end":return t.stop()}}),t)})))()},onPrev:function(){this.send_close=!1,this.$emit("onStep3Prev")},onSend:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.send_close=!1,t.next=3,e._multisend();case 3:case"end":return t.stop()}}),t)})))()},_multisend:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var n,a,r,i;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.queueList.map((function(e,t){return{address:e[0],amount:e[1]}})),a=!1,t.prev=2,t.next=5,T.queryReceiver(e.tokenInfo,P.receive_fees_address);case 5:a=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),a=!1;case 11:return a?(n.push({address:P.receive_fees_address,amount:P.fees}),console.log("成功添加手续费")):console.log("无法添加手续费"),t.prev=12,e.waitMetamask=!0,t.next=16,T.batchTransfer(e.tokenInfo,n);case 16:return r=t.sent,t.next=19,s.tx(r).onceSealed();case 19:e.dealList.push({address:r,status:1}),e.all_send=!0,e.send_status.b=0,t.next=30;break;case 24:t.prev=24,t.t1=t["catch"](12),i=t.t1.message,"string"===typeof t.t1&&t.t1.includes("Execution failed")?i="Execution Failed":"object"===Object(H["a"])(t.t1)&&t.t1.message.includes("Declined")&&(i="Transaction Rejected"),e.send_close=!0,e.$message.error(i);case 30:return t.prev=30,e.waitMetamask=!1,t.finish(30);case 33:case"end":return t.stop()}}),t,null,[[2,8],[12,24,30,33]])})))()}}},te=ee,ne=(n("a4c7"),Object($["a"])(te,Q,Y,!1,null,"e7ef4a14",null)),se=ne.exports,ae="flowOneToMore",re={name:ae,components:{OneToMoreHeader:p["a"],Step1:S,Step2:z,Step3:se},data:function(){return{stepActive:0,send_tx:0,arrayLimit:0,tokenInfo:{},c_address:"",address:"",currentFee:0,queueList:[]}},computed:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["isPc","cosmosAccount","flowNetwork"])),{},{oneToMoreHeaderTitle:function(){return this.$t("common.welcomeOneToMore",{appName:"CoinTool",chainName:"FLOW"})},supportNetworks:function(){return[{icon:"",name:"mainnet",symbol:"mainnet".toLowerCase(),value:"mainnet"}]}}),watch:{},created:function(){this.$i18n.getLocaleMessage("en")[ae]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh))},mounted:function(){return Object(i["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{onStep1Confirm:function(e){var t=e.queueList,n=e.tokenInfo;this.queueList=t,this.tokenInfo=n,this.stepActive=1},onStep2Confirm:function(e){var t=e.queueList,n=e.send_tx,s=e.arrayLimit,a=e.currentFee;this.queueList=t,this.send_tx=n,this.arrayLimit=s,this.currentFee=a,this.stepActive=2},onStep2Prev:function(){this.stepActive=0},onStep2Next:function(){this.stepActive=2},onStep3Prev:function(){this.stepActive=1},onChangeEditor:function(e){this.editorValue=e}}},oe=re,ie=(n("7ec7"),Object($["a"])(oe,a,r,!1,null,"c26f6e50",null));t["default"]=ie.exports},"6ff4":function(e,t,n){},"7ec7":function(e,t,n){"use strict";n("feea")},a222:function(e,t,n){"use strict";n("6ff4")},a4c7:function(e,t,n){"use strict";n("e66c")},abfd:function(e,t,n){},b039:function(e,t,n){"use strict";n("abfd")},bf5e:function(e,t,n){},e66c:function(e,t,n){},feea:function(e,t,n){}}]);