(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-076b9962"],{"0526":function(e,t,a){"use strict";a.r(t);a("a9e3");var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[t("div",{staticClass:"serachBox"},[t("div",{staticClass:"inputDiv"},[t("el-input",{staticClass:"inputBox",attrs:{size:"small",placeholder:"sats",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),t("el-button",{attrs:{size:"small",icon:"el-icon-search",type:"success"},on:{click:e.onSearch}})],1)]),t("div",{ref:"liveBox",staticClass:"liveBox"},[e.tableHeight?t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"row-class-name":e.tableRowClassName,"max-height":e.tableHeight}},[t("el-table-column",{attrs:{label:"#",type:"index",width:e.isPc?60:40},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.$index;return[e._v(" "+e._s(+a+1+ +e.offset)+" ")]}}],null,!1,172179149)}),t("el-table-column",{attrs:{label:"Tick",width:e.isPc?160:100,prop:"tick"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("span",[t("el-tag",{attrs:{type:"success"}},[e._v(e._s(n.tick))])],1)]}}],null,!1,2924174138)}),e.isPc?t("el-table-column",{attrs:{label:"Limit",width:e.isPc?160:120},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("span",[e._v(" "+e._s(e._f("toThousandFilter")(Number(n.limit)))+" ")])]}}],null,!1,1695420751)}):e._e(),t("el-table-column",{attrs:{label:e.$t("".concat(e.viewName,".transactions")),width:e.isPc?160:120,sortable:"","sort-by":"transactions"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("span",[t("svg-icon",{attrs:{"icon-class":"coin-transform"}}),e._v(" "+e._s(e._f("toThousandFilter")(Number(n.transactions)))+" ")],1)]}}],null,!1,3516270475)}),t("el-table-column",{attrs:{label:e.$t("".concat(e.viewName,".holders")),width:e.isPc?160:100,sortable:"","sort-by":"holders"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("span",[t("i",{staticClass:"el-icon-user"}),e._v(" "+e._s(n.holders)+" ")])]}}],null,!1,3142006306)}),t("el-table-column",{attrs:{width:e.isPc?null:220,label:e.$t("".concat(e.viewName,".mint_progress"))},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("span",{staticClass:"progress_box"},[e._v(" Progress ("+e._s(e.formatProgress(Number(100*n.mint_progress)))+"%) ")]),t("el-progress",{attrs:{"stroke-width":7,"show-text":!1,percentage:Number(100*n.mint_progress),color:"#42b983"}}),t("div",{staticClass:"mintInfo"},[t("span",{staticClass:"minted"},[e._v(e._s(e._f("toThousandFilter")(Number(n.minted))))]),t("span",{staticClass:"max"},[e._v(e._s(e._f("toThousandFilter")(Number(n.max))))])])]}}],null,!1,3550244073)})],1):e._e()],1),t("div",{staticClass:"paginationBox"},[t("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.count,small:!e.isPc,"page-size":e.limit},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])])},s=[],i=a("c7eb"),r=a("1da1"),c=a("5530"),l=(a("b680"),a("caad"),a("2f62")),o={zh:{brc20_tick_list:{holders:"持有人",max_mint:"最大Mint数",mint_progress:"Mint 进度",inscription_number:"铭文数量",transactions:"交易次数",deploy_time:"铭文创建时间"}},en:{brc20_tick_list:{holders:"Holders",max_mint:"MAX Mint",mint_progress:"Mint Progress",inscription_number:"Inscription Number",transactions:"Transactions",deploy_time:"Deploy Time"}}},u=a("bff2f"),d="brc20_tick_list",p={name:d,inject:[],components:{},data:function(){return{viewName:d,chainName:"BRC20",list:[{tick:"ordi",inscription_id:"b61b0172d95e266c18aea0c624db987e971a5d6d4ebc2aaed85da4642d635735i0",inscription_number:348020,max:"21000000.000000000000000000",limit:"1000.000000000000000000",decimals:18,minted:"21000000.000000000000000000",mint_progress:"1.000000",transactions:206482,holders:12679,deployer:"bc1pxaneaf3w4d27hl2y93fuft2xk6m4u3wc4rafevc6slgd7f5tq2dqyfgy06",deploy_time:1678248991},{tick:"ordi2",inscription_id:"b61b0172d95e266c18aea0c624db987e971a5d6d4ebc2aaed85da4642d635735i0",inscription_number:348020,max:"21000000.000000000000000000",limit:"1000.000000000000000000",decimals:18,minted:"21000000.000000000000000000",mint_progress:"1.000000",transactions:20648222,holders:1262279,deployer:"bc1pxaneaf3w4d27hl2y93fuft2xk6m4u3wc4rafevc6slgd7f5tq2dqyfgy06",deploy_time:1678248991}],page:1,limit:100,count:0,offset:0,searchInput:"",tableHeight:null}},computed:Object(c["a"])({},Object(l["b"])(["isConnect","account","chainId","isPc","language"])),created:function(){this.$i18n.getLocaleMessage("en")[d]||(this.$i18n.mergeLocaleMessage("en",o.en),this.$i18n.mergeLocaleMessage("zh",o.zh))},mounted:function(){var e=this;return Object(r["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.calculateTableHeight(),t.next=3,e.getList();case 3:case"end":return t.stop()}}),t)})))()},methods:{getList:function(){var e=this;return Object(r["a"])(Object(i["a"])().mark((function t(){var a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tableLoading=!0,e.list=[],t.next=4,Object(u["d"])({limit:e.limit,offset:e.limit*(e.page-1)});case 4:a=t.sent,a&&(e.count=a.count,e.offset=a.offset,e.list=a.list),e.tableLoading=!1,console.log(a,"reslist");case 8:case"end":return t.stop()}}),t)})))()},onSearch:function(){var e=this;return Object(r["a"])(Object(i["a"])().mark((function t(){var a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.searchInput){t.next=5;break}return t.next=3,e.getList();case 3:t.next=11;break;case 5:return e.tableLoading=!0,t.next=8,Object(u["c"])({tick:e.searchInput});case 8:a=t.sent,a&&(e.list=[a]),e.tableLoading=!1;case 11:case"end":return t.stop()}}),t)})))()},formatProgress:function(e){return e<.01?"<0.01":Number(Number(e).toFixed(2))},handleSizeChange:function(e){this.limit=e},handleCurrentChange:function(e){var t=this;return Object(r["a"])(Object(i["a"])().mark((function a(){return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.page=e,a.next=3,t.getList();case 3:case"end":return a.stop()}}),a)})))()},calculateTableHeight:function(){var e=this.$refs.liveBox;if(e){var t=e.clientHeight;this.tableHeight=t}},tableRowClassName:function(e){var t=e.row;return["ordi","sats","rats"].includes(t.tick)?"success-row":""}}},b=p,f=(a("55e1"),a("2877")),m=Object(f["a"])(b,n,s,!1,null,"2433e8b6",null);t["default"]=m.exports},"55e1":function(e,t,a){"use strict";a("679f")},"679f":function(e,t,a){}}]);