webpackJsonp([0],{"+gy6":function(t,e,a){var r=a("jZVO");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("59c48a6d",r,!1,{sourceMap:!1})},"+ptz":function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("background-slider"),e("div",[e("h1",{staticClass:"title"},[e("avatar"),this._v("\n      — Hello,\n    ")],1),this._m(0),e("a",{staticClass:"button contact",attrs:{href:"mailto:hey@yurisidorov.com"}},[this._v("Contact me")])])],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[a("div",{staticClass:"left"},[t._v("\n        My name is Yuri Sidorov.\n        I "),a("a",{attrs:{href:"https://3pulse.com/yurisidorov/map",target:"_blank"}},[t._v("travel")]),t._v(",\n        make "),a("a",{attrs:{href:"https://www.instagram.com/yurisidorov/",target:"_blank"}},[t._v("photos")]),t._v(",\n        write "),a("a",{attrs:{href:"https://soundcloud.com/yurisidorov/albums",target:"_blank"}},[t._v("music")]),t._v("\n        and "),a("a",{attrs:{href:"/pdf/YuriSidorovCV.pdf",target:"_blank"}},[t._v("code")]),t._v("\n        with Ruby on Rails.\n      ")]),a("div",{staticClass:"right"},[t._v("\n        I believe that traveling, arts and technology unite people, meaning more friends, knowledge and memorable experiences.\n      ")])])}]};e.a=n},"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("ghO9"),n=a("+ptz"),i=!1;var s=function(t){i||a("EArU")},o=a("VU/8")(r.a,n.a,!1,s,null,null);o.options.__file="pages/index.vue",e.default=o.exports},"3SyF":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".background-slider{background-color:#000;position:fixed;top:0;right:0;bottom:0;left:0;z-index:-100}.background-slider .slide{position:absolute;top:0;right:0;bottom:0;left:0;background:no-repeat 50% fixed;background-size:cover}.background-slider .slide .caption{position:absolute;bottom:5px;right:15px;font-size:.5em;opacity:.5;font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.fade-enter-active,.fade-leave-active{-webkit-transition:all 5s ease;transition:all 5s ease;overflow:hidden;visibility:visible;opacity:1;position:absolute}.fade-enter,.fade-leave-to{opacity:0;visibility:hidden}",""])},"4tNM":function(t,e,a){var r=a("3SyF");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("7afc6cbe",r,!1,{sourceMap:!1})},"60ik":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Lemon Tuesday,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#fff;letter-spacing:1px}.text{padding-top:50px;max-width:75%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;text-align:left;margin:0 auto}.text .left,.text .right{-ms-flex-preferred-size:100%;flex-basis:100%}.text .left{margin-right:30px}.text .right{margin-left:30px}.contact{margin:50px 0}",""])},"8CKk":function(t,e,a){"use strict";e.a={name:"BackgroundSlider",data:function(){return{backgrounds:[{url:"/images/backgrounds/belgrade-serbia-2018.jpg",city:"Belgrade",country:"Serbia",year:2018},{url:"/images/backgrounds/belgrade-serbia-2018-2.jpg",city:"Belgrade",country:"Serbia",year:2018},{url:"/images/backgrounds/budapest-hungary-2018.jpg",city:"Budapest",country:"Hungary",year:2018},{url:"/images/backgrounds/budapest-hungary-2018-2.jpg",city:"Lviv",country:"Hungary",year:2018},{url:"/images/backgrounds/berlin-germany-2018.jpg",city:"Berlin",country:"Germany",year:2018}, {url:"/images/backgrounds/lviv-ukraine-2013.jpg",city:"Lviv",country:"Ukraine",year:2013},{url:"/images/backgrounds/köpenick-germany-2018.jpg",city:"Köpenick",country:"Germany",year:2018},{url:"/images/backgrounds/pacitan-east_java-indonesia-2015.jpg",city:"Pacitan",country:"Indonesia",year:2015},{url:"/images/backgrounds/java-indonesia-2015.jpg",city:"Java",country:"Indonesia",year:2015},{url:"/images/backgrounds/valensole-france-2017.jpg",city:"Valensole",country:"France",year:2017},{url:"/images/backgrounds/sihanoukville-cambodia-2015.jpg",city:"Sihanoukville",country:"Cambodia",year:2015},{url:"/images/backgrounds/sofia-bulgaria-2018.jpg",city:"Sofia",country:"Bulgaria",year:2015},{url:"/images/backgrounds/nhatrang-vietnam-2014.jpg",city:"Nha Trang",country:"Vietnam",year:2017},{url:"/images/backgrounds/monaco-2017.jpg",city:"",country:"Monaco",year:2017},{url:"/images/backgrounds/hungary-2018.jpg",city:"",country:"Hungary",year:2017},{url:"/images/backgrounds/hungary-2018-2.jpg",city:"",country:"Hungary",year:2017},{url:"/images/backgrounds/serbia-2018.jpg",city:"",country:"Serbia",year:2017}],currentNumber:0,timer:null}},mounted:function(){this.startRotation()},methods:{startRotation:function(){this.currentNumber+=Math.round(65*Math.random(this.backgrounds.length)),this.timer=setInterval(this.next,1e4)},stopRotation:function(){clearTimeout(this.timer),this.timer=null},next:function(){this.currentNumber+=Math.round(250*Math.random(this.backgrounds.length))},prev:function(){this.currentNumber-=Math.round(65*Math.random(this.backgrounds.length))}},computed:{currentBackground:function(){return this.backgrounds[Math.abs(this.currentNumber)%this.backgrounds.length]}}}},EArU:function(t,e,a){var r=a("60ik");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("3023f69e",r,!1,{sourceMap:!1})},Jppr:function(t,e,a){"use strict";var r=a("UXEP"),n=!1;var i=function(t){n||a("+gy6")},s=a("VU/8")(null,r.a,!1,i,null,null);s.options.__file="components/Avatar.vue",e.a=s.exports},KMgv:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-slider",attrs:{id:"background-slider"}},[a("transition-group",{attrs:{name:"fade",mode:"out-in",tag:"div"}},t._l([t.currentNumber],function(e){return a("div",{key:e,staticClass:"slide",style:{backgroundImage:"url("+t.currentBackground.url+")"}},[a("div",{staticClass:"caption"},[""!=t.currentBackground.city?a("span",[t._v("\n          "+t._s(t.currentBackground.city)+",\n        ")]):t._e(),t._v("\n        "+t._s(t.currentBackground.country)+"\n        © "+t._s(t.currentBackground.year)+"\n      ")])])}))],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};e.a=n},UXEP:function(t,e,a){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var n={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avatar"},[e("img",{attrs:{src:"/images/avatars/azores.jpg"}})])}]};e.a=n},ghO9:function(t,e,a){"use strict";var r=a("Jppr"),n=a("mFn3");e.a={components:{Avatar:r.a,BackgroundSlider:n.a}}},jZVO:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".avatar{display:inline-block;overflow:hidden;height:160px;width:160px;border-radius:100%;border:5px solid #fff;vertical-align:middle;margin-right:5px}.avatar img{width:100%;height:100%}",""])},mFn3:function(t,e,a){"use strict";var r=a("8CKk"),n=a("KMgv"),i=!1;var s=function(t){i||a("4tNM")},o=a("VU/8")(r.a,n.a,!1,s,null,null);o.options.__file="components/BackgroundSlider.vue",e.a=o.exports}});