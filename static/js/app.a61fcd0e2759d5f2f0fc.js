webpackJsonp([1],{"1Q7B":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("1Q7B")},null,null).exports,i=n("/ocq"),o=n("Xxa5"),c=n.n(o),u=n("exGp"),p=n.n(u),l=n("Au9i"),f=n.n(l),d=n("mtWM"),h=n.n(d),m=n("c/Tr"),v=n.n(m),y=n("Av7u"),x=n.n(y),g=x.a.enc.Utf8.parse("ABCDEF1234123412");var b={encrypt:function(t,e){e=x.a.enc.Utf8.parse(v()((new TextEncoder).encode(e)).map(function(t){return t.toString(16).padStart(2,"0")}).join(""));var n=x.a.enc.Utf8.parse(t),r=x.a.AES.encrypt(n,e,{iv:g,mode:x.a.mode.CBC,padding:x.a.pad.Pkcs7});return console.log(x.a.enc.Base64.stringify(r.ciphertext)),x.a.enc.Base64.stringify(r.ciphertext)},decrypt:function(t,e){e=x.a.enc.Utf8.parse(v()((new TextEncoder).encode(e)).map(function(t){return t.toString(16).padStart(2,"0")}).join(""));var n=x.a.enc.Base64.parse(t),r=x.a.enc.Base64.stringify(n);return x.a.AES.decrypt(r,e,{iv:g,mode:x.a.mode.CBC,padding:x.a.pad.Pkcs7}).toString(x.a.enc.Utf8).toString()}};function k(){return sessionStorage.getItem("theUserTypedKey")}function w(){return sessionStorage.getItem("ciphertext")}var S={getKey:k,setKey:function(t){sessionStorage.setItem("theUserTypedKey",t)},getData:w,setData:function(t){sessionStorage.setItem("ciphertext",t)},getPlainttext:function(){return JSON.parse(sessionStorage.getItem("plainttext"))},setPlainttext:function(t){sessionStorage.setItem("plainttext",t)},checkKey:function(){var t=k(),e=w();try{b.decrypt(e,t);return!0}catch(t){return!1}}},_={name:"list",data:function(){return{fileList:[]}},methods:{newFile:function(){var t=p()(c.a.mark(function t(){var e,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="",t.prev=1,t.next=4,l.MessageBox.prompt("输入新文件名");case 4:if(e=(e=t.sent).value,!new RegExp('[\\\\/:*?"<>|.]').test(e)){t.next=8;break}return t.abrupt("return",Object(l.Toast)("文件名不允许特殊字符"));case 8:t.next=12;break;case 10:t.prev=10,t.t0=t.catch(1);case 12:if(e){t.next=14;break}return t.abrupt("return");case 14:return t.prev=14,t.next=17,h.a.post(this.$route.params.user+"/"+e);case 17:if(!(n=(n=t.sent).data)){t.next=21;break}return t.abrupt("return",Object(l.Toast)(n));case 21:this.$router.push("/"+this.$route.params.user+"/file/"+e),t.next=28;break;case 24:t.prev=24,t.t1=t.catch(14),console.error(t.t1),Object(l.Toast)("网络异常");case 28:case"end":return t.stop()}},t,this,[[1,10],[14,24]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=p()(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:S.checkKey()||this.$router.push("/"+this.$route.params.user),e=S.getPlainttext(),this.fileList=e.map(function(t){return t.title});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{attrs:{fixed:"",title:"list"}}),t._v(" "),n("div",{staticStyle:{height:"28px"}}),t._v(" "),t._l(t.fileList,function(e){return n("router-link",{key:e,attrs:{slot:"right",to:"/"+t.$route.params.user+"/file/"+e,icon:"more"},slot:"right"},[n("mt-cell",{attrs:{title:e}})],1)}),t._v(" "),n("mt-button",{staticStyle:{position:"fixed",bottom:"16px",right:"16px"},attrs:{type:"primary",size:"small"},on:{click:t.newFile}},[t._v("new")])],2)},staticRenderFns:[]};var P=n("VU/8")(_,$,!1,function(t){n("PSeZ")},"data-v-4bf8fd4e",null).exports,T=n("mvHQ"),K=n.n(T);Array.prototype.delete=function(t){var e=[];return this.forEach(function(n){t(n)||e.push(n)}),e};var O={name:"showfile",data:function(){return{showSaveButton:!1,filecontent:"",filecontentOld:"",contentStyle:"width: 100%;border: none;height: "+(screen.availHeight-80)+'px;font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;'}},methods:{saveFile:function(){var t=p()(c.a.mark(function t(){var e,n,r,a=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(e=S.getPlainttext()).find(function(t){return t.title==a.$route.params.filename}).content=this.filecontent,console.log(e),n=b.encrypt(K()(e),S.getKey()),t.next=7,h.a.put(""+this.$route.params.user,{data:n});case 7:if(!(r=(r=t.sent).data)){t.next=11;break}return t.abrupt("return",Object(l.Toast)(r));case 11:S.setPlainttext(K()(e)),Object(l.Toast)("更新成功"),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.error(t.t0),Object(l.Toast)("更新失败");case 19:case"end":return t.stop()}},t,this,[[0,15]])}));return function(){return t.apply(this,arguments)}}(),deleteFile:function(){var t=p()(c.a.mark(function t(){var e,n,r,a=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.MessageBox.confirm("确认删除？","提示");case 3:return t.prev=3,e=S.getPlainttext().delete(function(t){return t.title==a.$route.params.filename}),n=b.encrypt(K()(e),S.getKey()),t.next=8,h.a.put(""+this.$route.params.user,{data:n});case 8:if(!(r=(r=t.sent).data)){t.next=12;break}return t.abrupt("return",Object(l.Toast)(r));case 12:Object(l.Toast)("删除成功"),S.setPlainttext(K()(e)),this.$router.go(-1),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(3),Object(l.Toast)("删除失败");case 20:t.next=24;break;case 22:t.prev=22,t.t1=t.catch(0);case 24:case"end":return t.stop()}},t,this,[[0,22],[3,17]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=p()(c.a.mark(function t(){var e,n,r=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:S.checkKey()||this.$router.push("/"+this.$route.params.user),e="",t.prev=2,n=S.getPlainttext(),e=n.find(function(t){return t.title==r.$route.params.filename}).content,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(2),console.error(t.t0),t.abrupt("return",Object(l.Toast)("数据异常"));case 11:this.filecontent=e,this.filecontentOld=e;case 13:case"end":return t.stop()}},t,this,[[2,7]])}));return function(){return t.apply(this,arguments)}}(),watch:{filecontent:function(){this.showSaveButton=this.filecontent!=this.filecontentOld}}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{attrs:{fixed:"",title:t.$route.params.filename}},[t.showSaveButton?n("mt-button",{attrs:{slot:"right",icon:""},on:{click:t.saveFile},slot:"right"},[t._v("save")]):t._e()],1),t._v(" "),n("div",{staticStyle:{height:"40px"}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.filecontent,expression:"filecontent"}],style:t.contentStyle,domProps:{value:t.filecontent},on:{input:function(e){e.target.composing||(t.filecontent=e.target.value)}}}),t._v(" "),n("mt-button",{staticStyle:{"margin-top":"120px"},attrs:{type:"danger",size:"large"},on:{click:t.deleteFile}},[t._v("delete")])],1)},staticRenderFns:[]};var j=n("VU/8")(O,B,!1,function(t){n("T4HP")},"data-v-52dfd6db",null).exports,E={data:function(){return{password:"",typeKeyCount:1,msg:""}},methods:{checkKey:function(){var t=p()(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(S.setKey(this.password),!S.checkKey()){t.next=6;break}return e=b.decrypt(S.getData,S.getKey()),S.setPlainttext(e),this.$router.push(this.$route.params.user+"/list"),t.abrupt("return");case 6:this.typeKeyCount<=1?this.msg="Incorrect key, Please retype.":this.msg="Incorrect key, Please retype. the "+this.typeKeyCount+" attempt",this.typeKeyCount++,Object(l.Toast)({message:this.msg,position:"center",duration:1200});case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=p()(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("./static/data/"+this.$route.params.user+"/data");case 2:e=t.sent,console.log(e.data),S.setData(e.data);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-field",{attrs:{placeholder:"type the key",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.checkKey}},[t._v("enter")])],1)},staticRenderFns:[]},U=n("VU/8")(E,F,!1,null,null,null).exports;r.default.use(i.a);var A=new i.a({routes:[{path:"/:user",name:"typekey",component:U},{path:"/:user/list",name:"list",component:P},{path:"/:user/file/:filename",name:"showfile",component:j}]});n("d8/S");r.default.config.productionTip=!1,r.default.use(f.a),new r.default({el:"#app",router:A,components:{App:s},template:"<App/>"})},PSeZ:function(t,e){},T4HP:function(t,e){},"d8/S":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a61fcd0e2759d5f2f0fc.js.map