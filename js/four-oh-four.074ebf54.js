(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["four-oh-four"],{"49b1":function(t){t.exports=JSON.parse('{"home":"Hi! I am Dhruv Bhanushali, a software engineer who writes well-documented code, builds accessible interfaces and ships delightful apps.","portfolio":"Hi! I am Dhruv Bhanushali, a software engineer among other things. If you would like to know more about my work, you should start here.","blog":"Hi! I am Dhruv Bhanushali, a software engineer who also loves to write. This is my blog and I regularly post stuff that you might enjoy.","contact":"Hi! I am Dhruv Bhanushali, a software engineer who is always up for a solving a challenging problem or implementing an interesting idea.","about":"\'Hi! I am Dhruv Bhanushali, a coffee-loving software engineer among other things. If you want to know more about me, you should start here.","fourOhFour":"You\'re lost, aren\'t you? Hi lost! I am Dhruv Bhanushali, a software engineer who built this site and is not ashamed of that joke at all."}')},a824:function(t,e,r){t.exports=r.p+"img/error.f941776e.svg"},da28:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{id:"four-oh-four"}},[r("section",{on:{click:t.toggleDrawing,mousemove:t.drawErrorWithMouse,touchstart:t.drawErrorWithTouch,touchmove:t.drawErrorWithTouch}},[r("canvas",{ref:"errorCanvas",staticClass:"error-place"}),r("div",{staticClass:"imagery"},[r("img",{ref:"errorImage",attrs:{width:t.errorImage.width,height:t.errorImage.height,src:t.errorImage.source,alt:"Windows 98 error message"}})]),r("footer",[r("p",{attrs:{title:"I made a funny!"}},[t._v(" You seem lost. Go "),r("RouterLink",{attrs:{tabindex:"0",to:{name:"home"},title:"[H] Go to the homepage."}},[t._v(" home")]),t._v("? ")],1)])])])},a=[],i=(r("4160"),r("d81d"),r("159b"),r("49b1")),n=r("a824"),s=r.n(n),h={name:"FourOhFour",metaInfo:{title:"404",meta:["description","og:description"].map((function(t){return{name:t,content:i.fourOhFour}}))},data:function(){return{isDrawing:!0,canvas:null,context:null,errorImage:{source:s.a,width:240,height:135}}},methods:{setupCanvas:function(){var t=window.devicePixelRatio||1,e=window.innerWidth,r=window.innerHeight;this.canvas.width=t*e,this.canvas.height=t*r,this.canvas.style.width="".concat(e,"px"),this.canvas.style.height="".concat(r,"px"),this.context=this.canvas.getContext("2d"),this.context.scale(t,t)},toggleDrawing:function(){this.isDrawing=!this.isDrawing},drawErrorWithMouse:function(t){this.drawError(t.clientX,t.clientY)},drawErrorWithTouch:function(t){var e=this;t.touches.forEach((function(t){e.drawError(t.pageX,t.pageY)}))},drawError:function(t,e){this.isDrawing&&this.context.drawImage(this.$refs.errorImage,t-this.errorImage.width/2,e-16,this.errorImage.width,this.errorImage.height)}},mounted:function(){this.canvas=this.$refs.errorCanvas,this.setupCanvas(),window.addEventListener("resize",this.setupCanvas)}},u=h,c=(r("f845"),r("2877")),l=Object(c["a"])(u,o,a,!1,null,"3be16d76",null);e["default"]=l.exports},da5d:function(t,e,r){},f845:function(t,e,r){"use strict";var o=r("da5d"),a=r.n(o);a.a}}]);
//# sourceMappingURL=four-oh-four.074ebf54.js.map