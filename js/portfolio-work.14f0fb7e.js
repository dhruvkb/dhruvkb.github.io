(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["portfolio-work"],{"49b1":function(e){e.exports=JSON.parse('{"home":"Hi! I am Dhruv Bhanushali, a software engineer who writes well-documented code, builds accessible interfaces and ships delightful apps.","portfolio":"Hi! I am Dhruv Bhanushali, a software engineer among other things. If you would like to know more about my work, you should start here.","blog":"Hi! I am Dhruv Bhanushali, a software engineer who also loves to write. This is my blog and I regularly post stuff that you might enjoy.","contact":"Hi! I am Dhruv Bhanushali, a software engineer who is always up for a solving a challenging problem or implementing an interesting idea.","about":"\'Hi! I am Dhruv Bhanushali, a coffee-loving software engineer among other things. If you want to know more about me, you should start here.","fourOhFour":"You\'re lost, aren\'t you? Hi lost! I am Dhruv Bhanushali, a software engineer who built this site and is not ashamed of that joke at all."}')},"6e54":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",[e.node?t("Vim",{key:e.slug,attrs:{node:e.node}}):e._e()],1)},a=[],i=(t("d81d"),t("b0c0"),t("f3f3")),r=t("2f62"),s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vim"},[t("Concatenate",{attrs:{argv:[e.absolutePathTo(e.node)]}})],1)},u=[],l=t("b976"),h={name:"Vim",components:{Concatenate:l["a"]},props:{node:{type:Object,required:!0}},computed:Object(i["a"])({},Object(r["c"])("portfolio",["absolutePathTo"]))},c=h,d=t("2877"),m=Object(d["a"])(c,s,u,!1,null,null,null),f=m.exports,p=t("49b1"),g={name:"Work",metaInfo:function(){var e=this.node;return{title:e?e.name:"Work",meta:["description","og:description"].map((function(e){return{name:e,content:p.portfolio}}))}},components:{Vim:f},props:{slug:{type:String,required:!0}},data:function(){return{node:null}},computed:Object(i["a"])({},Object(r["c"])("portfolio",["nodeNamed"])),watch:{"$route.params.slug":function(e,o){e!==o&&(this.node=null,this.loadContent())}},methods:{loadContent:function(){var e=this.nodeNamed(this.slug);e?this.node=e:this.$router.push({name:"portfolio"}).catch((function(e){e.name}))}},mounted:function(){this.loadContent()}},w=g,b=Object(d["a"])(w,n,a,!1,null,null,null);o["default"]=b.exports}}]);
//# sourceMappingURL=portfolio-work.14f0fb7e.js.map