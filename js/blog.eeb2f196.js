(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog"],{"18b7":function(t,e,n){},"49b1":function(t){t.exports=JSON.parse('{"home":"Hi! I am Dhruv Bhanushali, a software engineer who writes well-documented code, builds accessible interfaces and ships delightful apps.","portfolio":"Hi! I am Dhruv Bhanushali, a software engineer among other things. If you would like to know more about my work, you should start here.","blog":"Hi! I am Dhruv Bhanushali, a software engineer who also loves to write. This is my blog and I regularly post stuff that you might enjoy.","contact":"Hi! I am Dhruv Bhanushali, a software engineer who is always up for a solving a challenging problem or implementing an interesting idea.","about":"\'Hi! I am Dhruv Bhanushali, a coffee-loving software engineer among other things. If you want to know more about me, you should start here.","fourOhFour":"You\'re lost, aren\'t you? Hi lost! I am Dhruv Bhanushali, a software engineer who built this site and is not ashamed of that joke at all."}')},a13b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"blog"}},[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("RouterView")],1)],1)},r=[],i=(n("d81d"),n("d3b7"),n("f3f3"));n("a4d3"),n("c975"),n("b64b");function s(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}function a(t,e){if(null==t)return{};var n,o,r=s(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=n("d0ff"),c=n("2b0e"),l=n("bc3a"),f=n.n(l),h="https://api.dhruvkb.now.sh/api/blog_posts",b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(h,"/").concat(t)},g=500,p={isFirstRun:!0,totalCount:null,posts:[],contents:{},isFetching:!1},d={contentWithSlug:function(t){return function(e){var n=null;return Object.prototype.hasOwnProperty.call(t.contents,e)&&(n=t.contents[e]),n}}},m={setTotalCount:function(t,e){t.totalCount=e.totalCount},setIsFetching:function(t,e){t.isFetching=e.isFetching},setIsFirstRun:function(t,e){t.isFirstRun=e.isFirstRun},pushPosts:function(t,e){var n;(n=t.posts).push.apply(n,Object(u["a"])(e.posts))},pushContent:function(t,e){c["a"].set(t.contents,e.slug,e.content)}},w={fetchPosts:function(t){var e=t.commit,n=t.state,o=b();e("setIsFetching",{isFetching:!0}),f.a.get(o,{params:{offset:n.posts.length}}).then((function(t){return new Promise((function(e){return setTimeout((function(){return e(t)}),g)}))})).then((function(t){var n=t.data,o=n.totalCount,r=n.posts;e("pushPosts",{posts:r}),e("setTotalCount",{totalCount:o})})).catch((function(t){console.log("FAIL"),console.error(t)})).finally((function(){e("setIsFetching",{isFetching:!1})}))},fetchContent:function(t,e){var n=t.commit,o=(t.state,e.slug),r=b(o);n("setIsFetching",{isFetching:!0}),f.a.get(r).then((function(t){return new Promise((function(e){return setTimeout((function(){return e(t)}),g)}))})).then((function(t){var e=t.data,o=e.attributes,r=e.body,s=o.slug,u=a(o,["slug"]);n("pushContent",{slug:s,content:Object(i["a"])(Object(i["a"])({},u),{},{body:r})})})).catch((function(t){console.log("FAIL"),console.error(t)})).finally((function(){n("setIsFetching",{isFetching:!1})}))}},y={namespaced:!0,state:p,getters:d,mutations:m,actions:w},O=n("49b1"),v={name:"Blog",metaInfo:{title:"Blog",meta:["description","og:description"].map((function(t){return{name:t,content:O.blog}}))},created:function(){this.$store.registerModule("blog",y)},beforeDestroy:function(){this.$store.unregisterModule("blog")}},j=v,F=(n("c7f9"),n("2877")),I=Object(F["a"])(j,o,r,!1,null,"526457b4",null);e["default"]=I.exports},c7f9:function(t,e,n){"use strict";n("18b7")},dbb4:function(t,e,n){var o=n("23e7"),r=n("83ab"),i=n("56ef"),s=n("fc6a"),a=n("06cf"),u=n("8418");o({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,o=s(t),r=a.f,c=i(o),l={},f=0;while(c.length>f)n=r(o,e=c[f++]),void 0!==n&&u(l,e,n);return l}})},e439:function(t,e,n){var o=n("23e7"),r=n("d039"),i=n("fc6a"),s=n("06cf").f,a=n("83ab"),u=r((function(){s(1)})),c=!a||u;o({target:"Object",stat:!0,forced:c,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(i(t),e)}})},f3f3:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}}}]);
//# sourceMappingURL=blog.eeb2f196.js.map