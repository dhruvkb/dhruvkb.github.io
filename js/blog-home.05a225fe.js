(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog-home"],{2061:function(t,e,s){},2793:function(t,e,s){},"27b9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"blog--home"}},[s("section",[s("h2",{staticClass:"page-title"},[t._v(" I ramble! ")]),s("Grid",{staticClass:"blog-home-grid"},[s("div",{staticClass:"left"},[s("Card",{staticClass:"content",attrs:{color:t.shuffledSolarizedColors[0]}},[s("p",[t._v(" Have you wondered what goes on in a developer's head? ")]),s("p",[t._v(" Regardless of whether you have or have not, you can find that out by reading my blog. Here I write on a wide spectrum of topics, from my latest bits of learning to how I built something cool using them. ")]),s("p",[t._v(" It's mostly random stuff that developers will likely relate to. How about a read? ")])])],1),s("div",{staticClass:"right"},[s("div",{staticClass:"content"},[t.isFetching&&!t.posts.length?[s("div",{staticClass:"centered"},[s("Spinner")],1)]:[t._l(t.posts,(function(e,a){return s("Preview",{key:e.id,attrs:{color:t.shuffledSolarizedColors[a],index:a,post:e}})})),s("More")]],2)])])],1)])},n=[],o=s("f3f3"),i=s("2f62"),r=s("5b32"),c=s("f7a7"),l=s("291b"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Card",{staticClass:"preview",scopedSlots:t._u([{key:"title",fn:function(){return[s("Metadata",{attrs:{"absolute-date":t.post.publicationDate.absolute,"relative-date":t.post.publicationDate.relative,tags:t.post.tags}})]},proxy:!0}])},[s("div",{staticClass:"stuff"},[s("RouterLink",{staticClass:"title-link",class:t.color+"-colored",attrs:{tabindex:"-1",to:{name:"post",params:{slug:t.post.slug}},title:"Read '"+t.post.title+"'."}},[s("h6",[t._v(" "+t._s(t.post.title)+" ")])]),s("p",[t._v(t._s(t.post.excerpt))]),s("RouterLink",{staticClass:"cta",class:t.color+"-colored",attrs:{tabindex:"0",to:{name:"post",params:{slug:t.post.slug}},title:"Read '"+t.post.title+"'."},nativeOn:{focus:function(e){return t.handleCtaFocus(e)},blur:function(e){return t.handleCtaBlur(e)}}},[s("Pointer",{attrs:{"is-focused":t.isCtaFocused},scopedSlots:t._u([{key:"default",fn:function(){return[t._v("Read more")]},proxy:!0},{key:"punctuation",fn:function(){return[t._v("?")]},proxy:!0}])})],1)],1)])},d=[],f=s("dd1d"),p=s("9cfa"),b=s("9f04"),h=s("dd74"),v={name:"Preview",mixins:[b["a"],h["a"]],components:{Card:r["a"],Pointer:f["a"],Metadata:p["a"]},props:{post:{type:Object,required:!0}}},m=v,g=(s("dd6b"),s("2877")),C=Object(g["a"])(m,u,d,!1,null,"48fe6e78",null),_=C.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.totalCount>t.posts.length?s("div",{staticClass:"more"},[t.isFetching?s("Spinner"):s("button",{staticClass:"load-more",on:{click:t.fetchPosts}},[s("Pointer",{scopedSlots:t._u([{key:"default",fn:function(){return[t._v("Load more posts")]},proxy:!0}],null,!1,2019330830)})],1)],1):t._e()},O=[],x={name:"More",components:{Pointer:f["a"],Spinner:l["a"]},computed:Object(o["a"])({},Object(i["e"])("blog",["totalCount","posts","isFetching"])),methods:Object(o["a"])({},Object(i["b"])("blog",["fetchPosts"]))},j=x,w=(s("f0ea"),Object(g["a"])(j,y,O,!1,null,"6586a176",null)),F=w.exports,k={name:"Home",components:{Card:r["a"],Grid:c["a"],Spinner:l["a"],Preview:_,More:F},computed:Object(o["a"])({},Object(i["e"])("blog",["posts","isFetching","isFirstRun"])),watch:{isFetching:function(t,e){e&&!t&&this.scrollToOldestPost()}},methods:Object(o["a"])(Object(o["a"])({scrollToOldestPost:function(){this.$nextTick((function(){document.body.scrollIntoView({behavior:"smooth",block:"end"})}))}},Object(i["d"])("blog",["setIsFirstRun"])),Object(i["b"])("blog",["fetchPosts"])),created:function(){this.isFirstRun&&(this.fetchPosts(),this.setIsFirstRun({isFirstRun:!1}))}},I=k,P=(s("aa5d"),Object(g["a"])(I,a,n,!1,null,"ea375a8a",null));e["default"]=P.exports},"291b":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"spinner"},[t._v(" Loading "),s("span",{staticClass:"cursor"})])}],o={name:"Spinner"},i=o,r=(s("d2d9"),s("2877")),c=Object(r["a"])(i,a,n,!1,null,"396eeb8a",null);e["a"]=c.exports},4188:function(t,e,s){"use strict";var a=s("2793"),n=s.n(a);n.a},"5b32":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.observerOptions,expression:"observerOptions"}],staticClass:"card",class:t.cardClasses},[s("div",{staticClass:"title"},[t._t("title",[s("h6",{staticClass:"top",class:t.cardHeadingClasses},[t._v(t._s(t.title))])])],2),s("div",{staticClass:"content"},[t._t("default")],2)])},n=[],o=(s("99af"),s("f3f3")),i=s("d0ff"),r=s("dd74"),c=s("d006"),l={name:"Card",mixins:[r["a"],c["a"]],props:{title:{type:String,default:""}},computed:{cardClasses:function(){return[].concat(Object(i["a"])(this.coloredClasses),[Object(o["a"])({},this.intersectableClasses)])},cardHeadingClasses:function(){return Object(i["a"])(this.coloredClasses)}}},u=l,d=(s("eba7"),s("2877")),f=Object(d["a"])(u,a,n,!1,null,"29a814eb",null);e["a"]=f.exports},"6ba8":function(t,e,s){t.exports=s.p+"img/tags.4a29f412.svg"},"74d9":function(t,e,s){},9621:function(t,e,s){},"9cfa":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"metadata"},[s("span",{staticClass:"point created-at secondary-colored",attrs:{title:t.absoluteDate}},[s("Icon",{attrs:{icon:"calendar",path:t.icons.calendar}}),t._v(" "+t._s(t.relativeDate)+" ")],1),t.tags.length?s("span",{staticClass:"point tags secondary-colored"},[s("Icon",{attrs:{icon:"tags",path:t.icons.tags}}),t._v(" "+t._s(t.tags.join(", "))+" ")],1):t._e()])},n=[],o=s("3796"),i=s("b8bd"),r=s.n(i),c=s("6ba8"),l=s.n(c),u={name:"Metadata",components:{Icon:o["a"]},data:function(){return{icons:{calendar:r.a,tags:l.a}}},props:{absoluteDate:{type:String,required:!0},relativeDate:{type:String,required:!0},tags:{type:Array,default:function(){return[]}}}},d=u,f=(s("4188"),s("2877")),p=Object(f["a"])(d,a,n,!1,null,"6ad355c6",null);e["a"]=p.exports},"9f04":function(t,e,s){"use strict";e["a"]={data:function(){return{isCtaFocused:!1}},methods:{setFocus:function(t){this.isCtaFocused=t},handleCtaFocus:function(){this.setFocus(!0)},handleCtaBlur:function(){this.setFocus(!1)}}}},aa5d:function(t,e,s){"use strict";var a=s("2061"),n=s.n(a);n.a},b8bd:function(t,e,s){t.exports=s.p+"img/calendar.0f6e3a00.svg"},b98b:function(t,e,s){},d006:function(t,e,s){"use strict";e["a"]={data:function(){return{observerOptions:{callback:this.intersectionChanged,once:!0,intersection:{rootMargin:"0px 0px -48px 0px",threshold:0}},isIntersected:!1}},computed:{intersectableClasses:function(){return{intersected:this.isIntersected}}},methods:{intersectionChanged:function(t){t&&(this.isIntersected=!0)}}}},d2d9:function(t,e,s){"use strict";var a=s("d655"),n=s.n(a);n.a},d655:function(t,e,s){},dd6b:function(t,e,s){"use strict";var a=s("74d9"),n=s.n(a);n.a},eba7:function(t,e,s){"use strict";var a=s("b98b"),n=s.n(a);n.a},f0ea:function(t,e,s){"use strict";var a=s("9621"),n=s.n(a);n.a}}]);
//# sourceMappingURL=blog-home.05a225fe.js.map