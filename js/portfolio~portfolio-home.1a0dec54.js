(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["portfolio~portfolio-home"],{"02f9":function(e,t,n){"use strict";var a=n("a3e0"),r=n.n(a);r.a},"100a":function(e,t,n){e.exports=n.p+"img/code.1a9b420f.svg"},"4fad":function(e,t,n){var a=n("23e7"),r=n("6f53").entries;a({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"62de":function(e,t,n){"use strict";var a=n("bb2c"),r=n.n(a);r.a},"6bb3":function(e,t,n){},"6f53":function(e,t,n){var a=n("83ab"),r=n("df75"),o=n("fc6a"),i=n("d1e7").f,s=function(e){return function(t){var n,s=o(t),c=r(s),l=c.length,d=0,u=[];while(l>d)n=c[d++],a&&!i.call(s,n)||u.push(e?[n,s[n]]:s[n]);return u}};e.exports={entries:s(!0),values:s(!1)}},"7bae":function(e,t,n){e.exports=n.p+"img/check.77e87ed6.svg"},"7e3c":function(e,t,n){"use strict";var a=n("f38f"),r=n.n(a);r.a},"83cb":function(e,t,n){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return a}))},"9f28":function(e,t,n){"use strict";var a=n("6bb3"),r=n.n(a);r.a},"9fc4":function(e,t,n){"use strict";var a=n("ffc2"),r=n.n(a);r.a},a15b:function(e,t,n){"use strict";var a=n("23e7"),r=n("44ad"),o=n("fc6a"),i=n("a640"),s=[].join,c=r!=Object,l=i("join",",");a({target:"Array",proto:!0,forced:c||!l},{join:function(e){return s.call(o(this),void 0===e?",":e)}})},a3e0:function(e,t,n){},ac3a:function(e,t,n){"use strict";n.d(t,"a",(function(){return Xe})),n.d(t,"b",(function(){return Ye}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bad"},[e.args.cmdname?[e._v(" Command "),n("strong",[e._v(e._s(e.args.cmdname))]),e._v(" does not exist in this CLI. ")]:[e._v(" Command "),n("strong",[e._v("bad")]),e._v(" is not for public use. ")],e._v(" Try "),n("Executable",{attrs:{command:e.altCommand,argv:e.altArgv}}),e._v(". ")],2)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"green-colored"},[n("a",{attrs:{href:"#",title:e.command.description},on:{click:function(t){return t.preventDefault(),e.handleClick(t)}}},[n("strong",[e._v(e._s(e.generatedCommand))])])])},i=[],s=(n("99af"),n("a15b"),n("b0c0"),n("f3f3")),c=n("2f62"),l={name:"Executable",props:{command:{type:Object,required:!0},argv:{type:Array,default:function(){return[]}}},computed:{generatedCommand:function(){var e="".concat(this.command.name);return 0!==this.argv.length&&(e="".concat(e," ").concat(this.argv.join(" "))),e}},methods:Object(s["a"])({execute:function(){this.runCommand({command:this.generatedCommand})},handleClick:function(){this.execute()}},Object(c["b"])("portfolio",["runCommand"]))},d=l,u=n("2877"),m=Object(u["a"])(d,o,i,!1,null,null,null),p=m.exports,f=n("72ca"),_={name:"BadCommand",mixins:[f["a"]],components:{Executable:p},argSpec:{args:[{name:"cmdname",type:String}],kwargs:[]},props:{argv:{type:Array}},data:function(){return{altCommand:Ye.help,altArgv:[]}}},h=_,v=Object(u["a"])(h,a,r,!1,null,null,null),g=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"clear"})},y=[],C={name:"Clear",methods:Object(s["a"])({},Object(c["d"])("portfolio",["clearOutput"])),created:function(){this.clearOutput()}},O=C,k=Object(u["a"])(O,b,y,!1,null,null,null),j=k.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isFound?n("span",{staticClass:"cd"}):n("div",{staticClass:"cd"},[n("strong",[e._v(e._s(e.args.dirname))]),e._v(" is not a valid directory. ")])},L=[],w=(n("ac1f"),n("5319"),{name:"ChangeDirectory",mixins:[f["a"]],argSpec:{args:[{name:"dirname",type:String,default:"~"}],kwargs:[]},props:{argv:{type:Array}},computed:Object(s["a"])({dir:function(){return this.nodeLocatedAt(this.args.dirname.replace(/\/$/,""))},isFound:function(){return this.node&&this.node.isFolder()}},Object(c["c"])("portfolio",["nodeLocatedAt","absolutePathTo"])),methods:Object(s["a"])({},Object(c["d"])("portfolio",["setCurrentNode"])),created:function(){this.node=this.dir,this.isFound&&this.setCurrentNode({currentNode:this.node})}}),S=w,E=Object(u["a"])(S,x,L,!1,null,null,null),A=E.exports,T=n("b976"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"e"},[n("Concatenate",{attrs:{argv:["E"]}})],1)},$=[],F={name:"E",components:{Concatenate:T["a"]}},N=F,P=Object(u["a"])(N,I,$,!1,null,null,null),R=P.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exit"},[e._v(" Exiting in "+e._s(e.time)+" seconds. ")])},H=[],B={name:"Exit",data:function(){return{time:5,updateLooper:null}},methods:{startLooping:function(){var e=this;this.stopLooping(),this.updateLooper=setInterval((function(){e.time>0?e.time--:e.$navigateTo({name:"home"})}),1e3)},stopLooping:function(){clearInterval(this.updateLooper)}},created:function(){this.startLooping()},beforeDestroy:function(){this.stopLooping()}},W=B,U=Object(u["a"])(W,D,H,!1,null,null,null),M=U.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"f"},[e.paid?[n("span",{staticClass:"green-colored"},[n("Icon",{attrs:{path:e.icons.check,icon:"check","is-inline":""}}),e._v(" Paid respects! ")],1)]:[n("span",{staticClass:"yellow-colored"},[n("Spinner"),e._v(" Paying respects… ")],1)]],2)},q=[],G=n("3796"),J=n("d31b"),X=n("7bae"),Y=n.n(X),z={name:"F",components:{Icon:G["a"],Spinner:J["a"]},data:function(){return{paid:!1,interval:5,icons:{check:Y.a}}},mounted:function(){var e=this;setTimeout((function(){e.paid=!0}),1e3*this.interval)}},K=z,Q=(n("9f28"),Object(u["a"])(K,V,q,!1,null,"a1312efc",null)),Z=Q.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"help"},[e.args.cmdname?["keyboard"===e.args.cmdname?[e._m(0),e._v(" Use the mouse if you're not CLI-savvy. ")]:[e.command?[e._v(" "+e._s(e.command.name)+" "),n("p",[e._v(" SYNOPSIS:"),n("br"),e._v(" "),n("span",{domProps:{innerHTML:e._s(e.commandSyntax(e.command))}})]),n("p",[e._v(" DESCRIPTION:"),n("br"),e._v(" "+e._s(e.command.description)+" ")])]:[n("BadCommand",{attrs:{argv:[e.args.cmdname]}})]]]:[e._v(" These commands are supported. Hover over them for more info. "),n("ul",{staticClass:"command-list"},e._l(e.filteredMapping,(function(t,a,r){return n("li",{key:r},[n("span",{attrs:{title:t.description},domProps:{innerHTML:e._s(e.commandSyntax(t))}})])})),0)]],2)},te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v(" Cycle through terminal history using "),n("span",{staticClass:"cyan-colored"},[e._v("↑")]),e._v(" & "),n("span",{staticClass:"cyan-colored"},[e._v("↓")]),e._v(". ")]),n("li",[e._v(" Autocomplete command using "),n("span",{staticClass:"cyan-colored",attrs:{title:"Tab"}},[e._v("Tab")]),e._v(". ")]),n("li",[e._v(" Abort command using "),n("span",{staticClass:"cyan-colored",attrs:{title:"Tab"}},[e._v("Ctrl")]),e._v(" + "),n("span",{staticClass:"cyan-colored",attrs:{title:"Tab"}},[e._v("C")]),e._v(". ")])])}],ne=(n("4de4"),n("4160"),n("4fad"),n("c1f9"),n("159b"),n("d0af")),ae={name:"Help",mixins:[f["a"]],components:{BadCommand:g},argSpec:{args:[{name:"cmdname",type:String}],kwargs:[]},props:{argv:{type:Array,default:function(){return[]}}},computed:{filteredMapping:function(){return Object.fromEntries(Object.entries(Ye).filter((function(e){var t=Object(ne["a"])(e,2),n=t[1];return!n.isHidden})))},command:function(){return this.args.cmdname in Ye&&Ye[this.args.cmdname]}},methods:{commandSyntax:function(e){var t,n=e.name;return t='<span class="green-colored"><strong>'.concat(n,"</strong></span>"),"args"in e&&["kwargs","args"].forEach((function(n){e.args[n].forEach((function(e){var n="".concat(e.name);"aliases"in e&&e.aliases.forEach((function(e){n="".concat(n,"/").concat(e)})),!0!==e.required&&(n="[".concat(n,"]")),t="".concat(t,' <span class="blue-colored">').concat(n,"</span>")}))})),t}}},re=ae,oe=(n("9fc4"),Object(u["a"])(re,ee,te,!1,null,"df060b5e",null)),ie=oe.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"intro",attrs:{title:"This terminal has easter-eggs!"}},[n("pre",{staticClass:"ascii-art big"},[e._v("  __   __                                __       __\n /\\ \\ /\\ \\                              /\\ \\     /\\ \\\n \\_\\ \\\\ \\ \\___    _ __   __  __   __  __\\ \\ \\/'\\ \\ \\ \\____\n /'_` \\\\ \\  _ `\\ /\\`'__\\/\\ \\/\\ \\ /\\ \\/\\ \\\\ \\ , /_ \\ \\ '__`\\\n/\\ \\L\\ \\\\ \\ \\ \\ \\\\ \\ \\/ \\ \\ \\_\\ \\\\ \\ \\_/ |\\ \\ \\\\`\\ \\ \\ \\L\\ \\\n\\ \\___,_\\\\ \\_\\ \\_\\\\ \\_\\  \\ \\____/ \\ \\___/  \\ \\_\\ \\_\\\\ \\_,__/\n \\/__,_ / \\/_/\\/_/ \\/_/   \\/___/   \\/__/    \\/_/\\/_/ \\/___/")]),n("pre",{staticClass:"ascii-art small"},[e._v("     __ __                     __    __\n ___/ // /   ____ __ __ _  __ / /__ / /\n/ _  // _ \\ / __// // /| |/ //  '_// _ \\\n\\_,_//_//_//_/   \\_,_/ |___//_/\\_\\/_.__/")]),n("div",{staticClass:"links"},[e._l(e.resumeLinks,(function(t,a){return n("a",{directives:[{name:"shortkey",rawName:"v-shortkey",value:[t.shortkey],expression:"[link.shortkey]"}],key:a,staticClass:"link yellow-colored",attrs:{href:t.url,target:"_blank",title:e.resumeLinkTitleText(t.shortkey,t.name)},on:{shortkey:function(n){return e.$navigateOutTo(t.url)}}},[n("Icon",{attrs:{icon:"download",path:e.icons.download,"is-inline":""}}),n("span",[e._v(" "+e._s(t.name)+" ")])],1)})),n("a",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["s"],expression:"['s']"}],staticClass:"link yellow-colored",attrs:{href:e.resumeRepoUrl,target:"_blank",title:"[S] See the LaTeX source code."},on:{shortkey:function(t){return e.$navigateOutTo(e.resumeRepoUrl)}}},[n("Icon",{attrs:{icon:"code",path:e.icons.code,"is-inline":""}}),n("span",[e._v(" source LaTeX ")])],1)],2)])},ce=[],le=n("f28e"),de=n.n(le),ue=n("100a"),me=n.n(ue),pe={name:"Introduction",components:{Icon:G["a"]},data:function(){var e="https://dhruvkb.github.io/resume";return{resumeRepoUrl:"https://github.com/dhruvkb/resume/",resumeLinks:[{name:"résumé",url:"".concat(e,"/resume.pdf"),shortkey:"r"},{name:"cover letter",url:"".concat(e,"/cover.pdf"),shortkey:"c"}],icons:{download:de.a,code:me.a}}},methods:{resumeLinkTitleText:function(e,t){return"[".concat(e.toLocaleUpperCase(),"] See my ").concat(t," as a PDF file.")}}},fe=pe,_e=(n("62de"),Object(u["a"])(fe,se,ce,!1,null,"708e845f",null)),he=_e.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ls"},[e.isFound?n("ul",[e.args.all?[n("li",[n("Link",{attrs:{node:e.node,as:"."}})],1),n("li",[n("Link",{attrs:{node:e.node.parent,as:".."}})],1)]:e._e(),e._l(e.node.children,(function(e,t){return n("li",{key:t},[n("Link",{attrs:{node:e}})],1)}))],2):[n("strong",[e._v(e._s(e.args.dirname))]),e._v(" is not a valid directory. ")]],2)},ge=[],be=n("602f"),ye={name:"List",mixins:[f["a"]],components:{Link:be["a"]},argSpec:{args:[{name:"dirname",type:String,default:"."}],kwargs:[{name:"--all",type:Boolean,aliases:["-a"]}]},props:{argv:{type:Array,default:function(){return[]}}},computed:Object(s["a"])(Object(s["a"])({dir:function(){return this.nodeLocatedAt(this.args.dirname.replace(/\/$/,""))},isFound:function(){return this.node&&this.node.isFolder()}},Object(c["e"])("portfolio",["currentNode"])),Object(c["c"])("portfolio",["nodeLocatedAt"])),created:function(){this.node=this.dir}},Ce=ye,Oe=(n("02f9"),Object(u["a"])(Ce,ve,ge,!1,null,"566493bd",null)),ke=Oe.exports,je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree"},[e.isFound?[e.args.flatten?e._e():[e._l(e.lineRules,(function(t,a){return n("span",{key:a,class:t?"extra-space":"space"},[e._v(e._s(t?"":"│"))])})),e._v(e._s(e.isLastChild?"└":"├")+"── ")],e.args.flatten&&e.node.isFolder()?e._e():[e.args.flatten?[e._v("─ ")]:e._e(),n("Link",{attrs:{node:e.node}})],e._l(e.node.children,(function(t){return n("tree",{key:t.name,attrs:{argv:e.argv,"passed-node":t,"line-rules":e.lineRules.concat([e.isLastChild])}})}))]:[n("strong",[e._v(e._s(e.args.dirname))]),e._v(" is not a valid directory. ")]],2)},xe=[],Le=(n("c975"),{name:"Tree",mixins:[f["a"]],components:{Link:be["a"]},argSpec:{args:[{name:"dirname",type:String,default:"."}],kwargs:[{name:"--flatten",type:Boolean,aliases:["-f"]}]},props:{argv:{type:Array},passedNode:{type:Object},lineRules:{type:Array,default:function(){return[]}}},computed:Object(s["a"])(Object(s["a"])({level:function(){return this.lineRules.length},dir:function(){return this.passedNode?this.passedNode:this.nodeLocatedAt(this.args.dirname.replace(/\/$/,""))},isFound:function(){return this.node},isLastChild:function(){if(0===this.level)return!0;var e=this.node.parent.children;return e.indexOf(this.node)===e.length-1}},Object(c["e"])("portfolio",["currentNode"])),Object(c["c"])("portfolio",["nodeLocatedAt"])),created:function(){this.node=this.dir}}),we=Le,Se=(n("7e3c"),Object(u["a"])(we,je,xe,!1,null,"075276bb",null)),Ee=Se.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isFound?n("span",{staticClass:"vim"}):n("div",{staticClass:"vim"},[n("strong",[e._v(e._s(e.args.filename))]),e._v(" is not a valid file. ")])},Te=[],Ie={name:"Vim",mixins:[f["a"]],argSpec:{args:[{name:"filename",type:String,required:!0}],kwargs:[]},props:{argv:{type:Array}},computed:Object(s["a"])({file:function(){return this.nodeLocatedAt(this.args.filename)},isFound:function(){return this.node&&this.node.isFile()},path:function(){var e=this.node.parent.name,t=this.node.name,a="".concat(e,"/").concat(t,".content.html");return n("5db0")("./".concat(a))}},Object(c["c"])("portfolio",["nodeLocatedAt"])),methods:Object(s["a"])({},Object(c["d"])("portfolio",["clearSelectOutput"])),created:function(){this.node=this.file},mounted:function(){this.isFound&&(this.clearSelectOutput({deletedComponents:["Vim"]}),this.$router.push({name:"work",params:{slug:this.node.name}}).catch((function(e){e.name})))}},$e=Ie,Fe=Object(u["a"])($e,Ae,Te,!1,null,null,null),Ne=Fe.exports,Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"whoami"},[n("span",{staticClass:"yellow-colored"},[e.args.groot?[e._v("Groot")]:[e._v("guest")]],2)])},Re=[],De={name:"WhoAmI",mixins:[f["a"]],argSpec:{args:[],kwargs:[{name:"--groot",type:Boolean,aliases:["-g"]}]},props:{argv:{type:Array}}},He=De,Be=Object(u["a"])(He,Pe,Re,!1,null,null,null),We=Be.exports,Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pwd"},[n("span",{staticClass:"violet-colored"},[e._v(e._s(e.pwd))])])},Me=[],Ve={name:"WorkingDirectory",computed:Object(s["a"])(Object(s["a"])({pwd:function(){return this.absolutePathTo(this.node)}},Object(c["e"])("portfolio",["currentNode"])),Object(c["c"])("portfolio",["absolutePathTo"])),created:function(){this.node=this.currentNode}},qe=Ve,Ge=Object(u["a"])(qe,Ue,Me,!1,null,null,null),Je=Ge.exports,Xe={BadCommand:g,Clear:j,ChangeDirectory:A,Concatenate:T["a"],E:R,Exit:M,F:Z,Help:ie,Introduction:he,List:ke,Tree:Ee,Vim:Ne,WhoAmI:We,WorkingDirectory:Je},Ye={bad:{name:"bad",component:"BadCommand",description:"See that a given command does not exist.",isHidden:!0},clear:{name:"clear",component:"Clear",description:"Clear the screen, preserving history."},cd:{name:"cd",args:A.argSpec,component:"ChangeDirectory",description:"Switch to directory 'dirname'."},cat:{name:"cat",args:T["a"].argSpec,component:"Concatenate",description:"Read the contents of file 'filename'.",isLongTerm:!0},e:{name:"e",component:"E",description:"E!",isHidden:!0},exit:{name:"exit",component:"Exit",description:"Exit the terminal."},f:{name:"f",component:"F",description:"Pay respects.",isHidden:!0},help:{name:"help",args:ie.argSpec,component:"Help",description:"Get some help with using the CLI."},intro:{name:"intro",component:"Introduction",description:"Enjoy the introductory ASCII art."},ls:{name:"ls",args:ke.argSpec,component:"List",description:"List immediate contents of directory 'dirname'."},tree:{name:"tree",args:Ee.argSpec,component:"Tree",description:"Recursively list contents of directory 'dirname'."},vim:{name:"vim",args:Ne.argSpec,component:"Vim",description:"Open the file in a view of its own."},whoami:{name:"whoami",args:We.argSpec,component:"WhoAmI",description:"Get your own username."},pwd:{name:"pwd",component:"WorkingDirectory",description:"Remember the currently open directory."}}},bb2c:function(e,t,n){},c1f9:function(e,t,n){var a=n("23e7"),r=n("2266"),o=n("8418");a({target:"Object",stat:!0},{fromEntries:function(e){var t={};return r(e,(function(e,n){o(t,e,n)}),void 0,!0),t}})},ceef:function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return a}))},d0af:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("ceef");n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function r(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done);a=!0)if(n.push(i.value),t&&n.length===t)break}catch(c){r=!0,o=c}finally{try{a||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}}var o=n("dde1"),i=n("83cb");function s(e,t){return Object(a["a"])(e)||r(e,t)||Object(o["a"])(e,t)||Object(i["a"])()}},f28e:function(e,t,n){e.exports=n.p+"img/download.f3d6467b.svg"},f38f:function(e,t,n){},ffc2:function(e,t,n){}}]);
//# sourceMappingURL=portfolio~portfolio-home.1a0dec54.js.map