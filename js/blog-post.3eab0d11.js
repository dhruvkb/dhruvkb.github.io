(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog-post"],{2793:function(t,e,n){},"291b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"spinner"},[t._v(" Loading "),n("span",{staticClass:"cursor"})])}],s={name:"Spinner"},i=s,r=(n("d2d9"),n("2877")),c=Object(r["a"])(i,a,o,!1,null,"396eeb8a",null);e["a"]=c.exports},4188:function(t,e,n){"use strict";n("2793")},"49b1":function(t){t.exports=JSON.parse('{"home":"Hi! I am Dhruv Bhanushali, a software engineer who writes well-documented code, builds accessible interfaces and ships delightful apps.","portfolio":"Hi! I am Dhruv Bhanushali, a software engineer among other things. If you would like to know more about my work, you should start here.","blog":"Hi! I am Dhruv Bhanushali, a software engineer who also loves to write. This is my blog and I regularly post stuff that you might enjoy.","contact":"Hi! I am Dhruv Bhanushali, a software engineer who is always up for a solving a challenging problem or implementing an interesting idea.","about":"\'Hi! I am Dhruv Bhanushali, a coffee-loving software engineer among other things. If you want to know more about me, you should start here.","fourOhFour":"You\'re lost, aren\'t you? Hi lost! I am Dhruv Bhanushali, a software engineer who built this site and is not ashamed of that joke at all."}')},"65f2":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"blog--post"}},[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""},on:{"before-enter":t.performPreProcessing,"after-enter":t.performPostProcessing}},[t.post?n("section",{key:"loaded"},[n("div",{staticClass:"body"},[n("div",{staticClass:"heading"},[n("h1",{staticClass:"blue-colored"},[t._v(t._s(t.post.title))]),n("Metadata",{attrs:{"absolute-date":t.post.publicationDate.absolute,"relative-date":t.post.publicationDate.relative,tags:t.post.tags}})],1),n("div",{ref:"content",staticClass:"content",domProps:{innerHTML:t._s(t.post.body)}}),n("p",{staticClass:"footer secondary-colored"},[t._v(" Permalink to "),n("a",{attrs:{href:t.post.portfolioUrl}},[t._v("this post")]),t._v(". ")])])]):n("section",{key:"loading",staticClass:"centered"},[n("Spinner")],1)])],1)},o=[],s=(n("4160"),n("d81d"),n("ac1f"),n("5319"),n("159b"),n("f3f3")),i=n("8c7a"),r=n.n(i),c=(n("cb55"),n("922d"),n("416b"),n("bb5b"),n("6cf3"),n("826c"),n("3d21"),n("6fba"),n("6605"),n("867a"),n("457d"),n("5253"),n("555c"),n("13c4"),n("2f62")),l=n("291b"),u=n("9cfa"),d=n("49b1"),h={name:"Post",metaInfo:function(){var t=this.post;return{title:t?t.title:"Blog post",meta:["description","og:description"].map((function(t){return{name:t,content:d.blog}}))}},components:{Spinner:l["a"],Metadata:u["a"]},props:{slug:{type:String,required:!0}},computed:Object(s["a"])({post:function(){return this.contentWithSlug(this.slug)}},Object(c["c"])("blog",["contentWithSlug"])),watch:{"$route.params.slug":function(t,e){t!==e&&this.loadContent()}},methods:Object(s["a"])({splitHeadings:function(){if(this.$refs.content){var t=this.$refs.content.querySelectorAll("h2, h3, h4, h5, h6");t.forEach((function(t){var e=t.innerText,n=e.replace(/^([\d.]+)/,'<span class="index">§$1</span>');t.innerHTML=n}))}},highlightCode:function(){r.a.highlightAll()},performPreProcessing:function(){this.splitHeadings()},performPostProcessing:function(){this.highlightCode()},loadContent:function(){this.contentWithSlug(this.slug)||this.fetchContent({slug:this.slug})}},Object(c["b"])("blog",["fetchContent"])),mounted:function(){this.loadContent()}},f=h,p=(n("8d50"),n("2877")),g=Object(p["a"])(f,a,o,!1,null,"e8eca506",null);e["default"]=g.exports},"6ba8":function(t,e,n){t.exports=n.p+"img/tags.4a29f412.svg"},"70d4":function(t,e,n){},"8d50":function(t,e,n){"use strict";n("70d4")},"9cfa":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"metadata"},[n("span",{staticClass:"point created-at secondary-colored",attrs:{title:t.absoluteDate}},[n("Icon",{attrs:{icon:"calendar",path:t.icons.calendar}}),t._v(" "+t._s(t.relativeDate)+" ")],1),t.tags.length?n("span",{staticClass:"point tags secondary-colored"},[n("Icon",{attrs:{icon:"tags",path:t.icons.tags}}),t._v(" "+t._s(t.tags.join(", "))+" ")],1):t._e()])},o=[],s=n("3796"),i=n("b8bd"),r=n.n(i),c=n("6ba8"),l=n.n(c),u={name:"Metadata",components:{Icon:s["a"]},data:function(){return{icons:{calendar:r.a,tags:l.a}}},props:{absoluteDate:{type:String,required:!0},relativeDate:{type:String,required:!0},tags:{type:Array,default:function(){return[]}}}},d=u,h=(n("4188"),n("2877")),f=Object(h["a"])(d,a,o,!1,null,"6ad355c6",null);e["a"]=f.exports},b8bd:function(t,e,n){t.exports=n.p+"img/calendar.0f6e3a00.svg"},d2d9:function(t,e,n){"use strict";n("d655")},d655:function(t,e,n){}}]);
//# sourceMappingURL=blog-post.3eab0d11.js.map