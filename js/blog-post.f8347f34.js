(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog-post"],{2793:function(t,e,a){},"291b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"spinner"},[t._v(" Loading "),a("span",{staticClass:"cursor"})])}],s={name:"Spinner"},i=s,r=(a("d2d9"),a("2877")),c=Object(r["a"])(i,n,o,!1,null,"396eeb8a",null);e["a"]=c.exports},4188:function(t,e,a){"use strict";var n=a("2793"),o=a.n(n);o.a},"49b1":function(t){t.exports=JSON.parse('{"home":"Hi! I am Dhruv Bhanushali, a software engineer who writes well-documented code, builds accessible interfaces and ships delightful apps.","portfolio":"Hi! I am Dhruv Bhanushali, a software engineer among other things. If you would like to know more about my work, you should start here.","blog":"Hi! I am Dhruv Bhanushali, a software engineer who also loves to write. This is my blog and I regularly post stuff that you might enjoy.","contact":"Hi! I am Dhruv Bhanushali, a software engineer who is always up for a solving a challenging problem or implementing an interesting idea.","about":"\'Hi! I am Dhruv Bhanushali, a coffee-loving software engineer among other things. If you want to know more about me, you should start here.","fourOhFour":"You\'re lost, aren\'t you? Hi lost! I am Dhruv Bhanushali, a software engineer who built this site and is not ashamed of that joke at all."}')},"65f2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"blog--post"}},[a("transition",{attrs:{name:"fade",mode:"out-in",appear:""},on:{"before-enter":t.performPreProcessing,"after-enter":t.performPostProcessing}},[t.post?a("section",{key:"loaded"},[a("div",{staticClass:"body"},[a("div",{staticClass:"heading"},[a("h1",{staticClass:"blue-colored"},[t._v(t._s(t.post.title))]),a("Metadata",{attrs:{"absolute-date":t.post.publicationDate.absolute,"relative-date":t.post.publicationDate.relative,tags:t.post.tags}})],1),a("div",{ref:"content",staticClass:"content",domProps:{innerHTML:t._s(t.post.body)}}),a("p",{staticClass:"footer secondary-colored"},[t._v(" Permalink to "),a("a",{attrs:{href:t.post.portfolioUrl}},[t._v("this post")]),t._v(". ")])])]):a("section",{key:"loading",staticClass:"centered"},[a("Spinner")],1)])],1)},o=[],s=(a("4160"),a("d81d"),a("ac1f"),a("5319"),a("159b"),a("f3f3")),i=a("8c7a"),r=a.n(i),c=(a("cb55"),a("922d"),a("416b"),a("bb5b"),a("6cf3"),a("826c"),a("3d21"),a("6fba"),a("6605"),a("867a"),a("457d"),a("5253"),a("555c"),a("13c4"),a("2f62")),l=a("291b"),u=a("9cfa"),d=a("49b1"),h={name:"Post",metaInfo:function(){var t=this.post;return{title:t?t.title:"Blog post",meta:["description","og:description"].map((function(t){return{name:t,content:d.blog}}))}},components:{Spinner:l["a"],Metadata:u["a"]},props:{slug:{type:String,required:!0}},computed:Object(s["a"])({post:function(){return this.contentWithSlug(this.slug)}},Object(c["c"])("blog",["contentWithSlug"])),watch:{"$route.params.slug":function(t,e){t!==e&&this.loadContent()}},methods:Object(s["a"])({splitHeadings:function(){if(this.$refs.content){var t=this.$refs.content.querySelectorAll("h2, h3, h4, h5, h6");t.forEach((function(t){var e=t.innerText,a=e.replace(/^([\d.]+)/,'<span class="index">§$1</span>');t.innerHTML=a}))}},highlightCode:function(){r.a.highlightAll()},performPreProcessing:function(){this.splitHeadings()},performPostProcessing:function(){this.highlightCode()},loadContent:function(){this.contentWithSlug(this.slug)||this.fetchContent({slug:this.slug})}},Object(c["b"])("blog",["fetchContent"])),mounted:function(){this.loadContent()}},f=h,p=(a("8d50"),a("2877")),g=Object(p["a"])(f,n,o,!1,null,"e8eca506",null);e["default"]=g.exports},"6ba8":function(t,e,a){t.exports=a.p+"img/tags.4a29f412.svg"},"70d4":function(t,e,a){},"8d50":function(t,e,a){"use strict";var n=a("70d4"),o=a.n(n);o.a},"9cfa":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"metadata"},[a("span",{staticClass:"point created-at secondary-colored",attrs:{title:t.absoluteDate}},[a("Icon",{attrs:{icon:"calendar",path:t.icons.calendar}}),t._v(" "+t._s(t.relativeDate)+" ")],1),t.tags.length?a("span",{staticClass:"point tags secondary-colored"},[a("Icon",{attrs:{icon:"tags",path:t.icons.tags}}),t._v(" "+t._s(t.tags.join(", "))+" ")],1):t._e()])},o=[],s=a("3796"),i=a("b8bd"),r=a.n(i),c=a("6ba8"),l=a.n(c),u={name:"Metadata",components:{Icon:s["a"]},data:function(){return{icons:{calendar:r.a,tags:l.a}}},props:{absoluteDate:{type:String,required:!0},relativeDate:{type:String,required:!0},tags:{type:Array,default:function(){return[]}}}},d=u,h=(a("4188"),a("2877")),f=Object(h["a"])(d,n,o,!1,null,"6ad355c6",null);e["a"]=f.exports},b8bd:function(t,e,a){t.exports=a.p+"img/calendar.0f6e3a00.svg"},d2d9:function(t,e,a){"use strict";var n=a("d655"),o=a.n(n);o.a},d655:function(t,e,a){}}]);
//# sourceMappingURL=blog-post.f8347f34.js.map