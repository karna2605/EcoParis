(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],r[i]&&f.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0466":function(t,e,n){},"054f":function(t,e,n){"use strict";var a=n("fcd1"),r=n.n(a);r.a},"0f8a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[t.introVisible?n("Intro",{attrs:{onDismiss:function(){return t.introVisible=!1}}}):t._e()],1),n("section",{staticClass:"menu"},[n("ZoomControl"),n("Layers",{model:{value:t.currentLayer,callback:function(e){t.currentLayer=e},expression:"currentLayer"}})],1),n("section",{staticClass:"container"},[n("Map",{attrs:{currentLayer:t.currentLayer}}),n("Sidebar",{attrs:{currentLayer:t.currentLayer}})],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro"},[n("h1",[t._v("EcoParis")]),n("p",[t._v("How nature impacts your life in Paris.")]),n("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onDismiss(e)}}},[t._v("Explore")])])},s=[],l={props:["onDismiss"]},c=l,u=(n("91fa"),n("2877")),p=Object(u["a"])(c,i,s,!1,null,null,null);p.options.__file="Intro.vue";var f=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"zoom-control"},[n("a",{staticClass:"minus",attrs:{href:"#"}},[t._v("-")]),n("a",{staticClass:"plus",attrs:{href:"#"}},[t._v("+")])])}],h={},y=h,m=(n("f27d"),Object(u["a"])(y,d,v,!1,null,null,null));m.options.__file="ZoomControl.vue";var g=m.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"layers"},[n("h3",[t._v("Layers")]),n("div",{staticClass:"buttons"},[n("a",{class:{active:"data/p_export.json"==t.value},attrs:{href:"#"},on:{click:function(e){t.$emit("input","data/p_export.json")}}},[n("span",[t._v("P")]),t._v("\n      Phosph.\n    ")]),n("a",{class:{active:"data/n_export.json"==t.value},attrs:{href:"#"},on:{click:function(e){t.$emit("input","data/n_export.json")}}},[n("span",[t._v("N")]),t._v("\n      Nitrog.\n    ")])])])},b=[],w={props:["value"]},j=w,C=(n("054f"),Object(u["a"])(j,_,b,!1,null,null,null));C.options.__file="Layers.vue";var P=C.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"map",staticClass:"map"})},O=[],k=n("2909"),M=(n("28a5"),"data/n_export.json"),E="data/p_export.json",S="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png",D='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';function I(t,e){var n=L.map(t,{zoomControl:!1});n.fitBounds(e);var a=L.tileLayer(S,{minZoom:9,maxZoom:14,attribution:D});return a.addTo(n),n}var $=function(t,e,n,a){var r=new L.LatLng(49.2485668,1.4403262),o=new L.LatLng(48.1108602,3.5496114),i=L.latLngBounds(r,o),s={},l=I(t,i);function c(t){return{opacity:0,fillOpacity:0}}L.geoJson(n,{style:c}).addTo(l);var u=d3.select(t).select("svg");function p(t,e){var n=l.latLngToLayerPoint(new L.LatLng(e,t));this.stream.point(n.x,n.y)}var f=d3.geo.transform({point:p}),d=d3.geo.path().projection(f),v=u.append("defs"),h=v.append("path").attr("id","clip_path");v.append("clipPath").attr("id","clip").append("use").attr("xlink:href","#clip_path");var y=u.selectAll("image").data([0]).enter().append("svg:image").attr("x",0).attr("y",0).attr("xlink:href","").attr("clip-path","url(#clip)");function m(){function t(t,e){var n=l.latLngToLayerPoint(o).x-l.latLngToLayerPoint(r).x,a=l.latLngToLayerPoint(o).y-l.latLngToLayerPoint(r).y,i=(t-r.lng)/(o.lng-r.lng)*(n-1),s=(r.lat+.00314-e)/(r.lat-o.lat)*(a-1);this.stream.point(i,s)}var e=d3.geo.transform({point:t}),n=d3.geo.path().projection(e);h.attr("d",n),T&&L.marker([C,P],{icon:$}).addTo(l)}function g(t){var e=null,n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(),200==n.status&&(e=n.responseText),e}function _(t){var e=t.split("\n");return e.pop(),e.map(function(t){return parseFloat(t)})}var b={};function w(t){return t>200?"e31a1c":t>150?"fc4e2a":t>100?"fd8d3c":t>50?"feb24c":"ffffcc"}b[E]=_(g("data/voronoi_means_p.txt")),b[M]=_(g("data/voronoi_means_n.txt"));var j,C=0,P=0,T=0,O=u.append("g").selectAll("path").data(a.features).enter().append("path").attr("d",d).attr("vector-effect","non-scaling-stroke").style("stroke","#666").style("fill-opacity",.7).on("mouseover",function(t,e){d3.select(this).style("fill-opacity",0),h.datum(t.geometry),m()}).on("mouseout",function(t,e){d3.select(this).style("fill-opacity",.7),h.datum([]),m()}).on("click",function(t,e){S.style("pointer-events","all"),l.fitBounds(i),T&&l.addLayer(j)}),S=u.append("g").selectAll("path").data(n.features).enter().append("path").attr("d",d).attr("vector-effect","non-scaling-stroke").style("stroke","#333").attr("fill","#4444").attr("fill-opacity","0").style("pointer-events","all").on("mouseover",function(t,e){d3.select(this).style("fill-opacity",1)}).on("mouseout",function(t,e){d3.select(this).style("fill-opacity",0)}).on("click",function(t,e){S.style("pointer-events","all"),d3.select(this).style("pointer-events","none");var n=d3.select(this).node().getBBox(),a=l.layerPointToLatLng(L.point(n.x,n.y)),r=l.layerPointToLatLng(L.point(n.x+n.width,n.y+n.height));l.fitBounds(L.latLngBounds(a,r)),T&&l.addLayer(j)});function D(){navigator.geolocation?navigator.geolocation.getCurrentPosition(B):x.innerHTML="Geolocation is not supported by this browser."}var $=L.icon({iconUrl:"assets/marker.png",iconSize:[24,24],iconAnchor:[12,24]});function B(t){C=t.coords.latitude,P=t.coords.longitude,C=48.864716,P=2.349014;for(var e=0;e<n.features.length;++e)d3.geoContains(n.features[e],[P,C])&&(T=1,j=L.marker([C,P],{icon:$}),l.addLayer(j))}D();var A=document.createElement("canvas");A.getContext("2d"),w(0);function U(t){if(console.log("SETTING LAYER",t),!s[t]){var e=g(t),n=JSON.parse(e);n.data=JSON.parse(n.data);var a=n.width,r=n.height;A.width=a,A.height=r;for(var o=A.getContext("2d"),i=n.data,c=o.createImageData(a,r),u=c.data,p=0;p<A.height*A.width;p++){var f=p%A.width,v=p/A.width;if(f>=0&&f<a&&v>=0&&v<r){var h=4*p,_=i[p];u[h+2]=255&parseInt(w(_),16),u[h+1]=parseInt(w(_),16)>>8&255,u[h]=parseInt(w(_),16)>>16&255,0==i[p]?u[h+3]=0:u[h+3]=220}}o.putImageData(c,0,0);_=A.toDataURL("png");y.attr("xlink:href",_),s[t]={url:_,tl_lat:n.tl_lat,tl_lng:n.tl_lng,br_lat:n.br_lat,br_lng:n.br_lng,width:a,height:r,layerUrl:t}}var x=s[t],j=d3.scale.linear().range(["#ffffcc","#e31a1c"]).domain([Math.min.apply(Math,Object(k["a"])(b[x.layerUrl])),Math.max.apply(Math,Object(k["a"])(b[x.layerUrl]))]);O.attr("fill",function(t,e){return j(b[x.layerUrl][e])}),a=x.width,r=x.height,A.width=a,A.height=r;var C=new L.LatLng(x.tl_lat,x.tl_lng),P=new L.LatLng(x.br_lat,x.br_lng);function T(){console.log("UPDATING");var t=l.latLngToLayerPoint(P).x-l.latLngToLayerPoint(C).x,e=l.latLngToLayerPoint(P).y-l.latLngToLayerPoint(C).y;y.attr("transform",function(t){var e=l.latLngToLayerPoint(C);return"translate("+e.x+","+e.y+")"}),y.attr("width",function(e){return t}),y.attr("height",function(t){return e}),S.attr("d",d),O.attr("d",d),m()}l.on("viewreset",T),T(),y.attr("xlink:href",x.url)}return U},B={props:["currentLayer"],data:function(){return{setLayer:function(){}}},mounted:function(){var t=this,e="data/depts.geojson",n="data/sd-voronoi.json";queue().defer(d3.json,e).defer(d3.json,n).await(function(e,n,a){t.setLayer=$(t.$refs.map,e,n,a),t.setLayer(t.currentLayer)})},watch:{currentLayer:function(t){this.setLayer(t)}}},A=B,U=(n("894b"),Object(u["a"])(A,T,O,!1,null,null,null));U.options.__file="Map.vue";var z,J,N=U.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar"},["data/p_export.json"==t.currentLayer?n("div",[n("h2",[t._v("Mesure de la rétention de phosphore.")]),n("p",[t._v("Le service de rétention du phosphore permet d'améliorer la qualité de l'eau (superficielle et souterraine). Il est directement utile aux organismes de gestion de l'eau (syndicats et département d'assainissement), et donc aux habitants dont les impôts financent la maintenance des services d'assainissement.")]),n("DemoChart")],1):t._e(),"data/n_export.json"==t.currentLayer?n("div",[n("h2",[t._v("Mesure de la rétention de l'azote.")]),n("p",[t._v("Le service de rétention de l'azote permet d'améliorer la qualité de l'eau (superficielle et souterraine). Il est directement utile aux organismes de gestion de l'eau (syndicats et département d'assainissement), et donc aux habitants dont les impôts financent la maintenance des services d'assainissement.")]),n("DemoChart")],1):t._e()])},Z=[],q={extends:VueChartJs.Bar,mounted:function(){this.renderChart()}},G=q,H=Object(u["a"])(G,z,J,!1,null,null,null);H.options.__file="DemoChart.vue";var R=H.exports,F={props:["currentLayer"],components:{DemoChart:R}},X=F,Y=(n("f203"),Object(u["a"])(X,V,Z,!1,null,null,null));Y.options.__file="Sidebar.vue";var K=Y.exports,Q={data:function(){return{currentLayer:"data/p_export.json",introVisible:!0,sidebarVisible:!1}},components:{Intro:f,ZoomControl:g,Layers:P,Map:N,Sidebar:K}},W=Q,tt=(n("5c0b"),Object(u["a"])(W,r,o,!1,null,null,null));tt.options.__file="App.vue";var et=tt.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(et)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){},"894b":function(t,e,n){"use strict";var a=n("a130"),r=n.n(a);r.a},"91fa":function(t,e,n){"use strict";var a=n("a90f"),r=n.n(a);r.a},a130:function(t,e,n){},a90f:function(t,e,n){},f203:function(t,e,n){"use strict";var a=n("0466"),r=n.n(a);r.a},f27d:function(t,e,n){"use strict";var a=n("0f8a"),r=n.n(a);r.a},fcd1:function(t,e,n){}});
//# sourceMappingURL=app.7aa56f23.js.map