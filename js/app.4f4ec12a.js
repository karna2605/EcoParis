(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)i=s[d],r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0466":function(t,e,a){},"054f":function(t,e,a){"use strict";var n=a("fcd1"),r=a.n(n);r.a},"2a3c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[e.introVisible?n("Intro",{attrs:{onDismiss:function(){return e.introVisible=!1}}}):e._e()],1),n("section",{staticClass:"menu"},[n("LocationControl",{attrs:{onLocation:function(e){return t.currentLocation=e}}}),n("Layers",{attrs:{layers:e.layers},model:{value:e.currentLayer,callback:function(t){e.currentLayer=t},expression:"currentLayer"}}),n("ZoomControl")],1),n("section",{staticClass:"container"},[n("Map",{attrs:{layers:e.layers,currentLayer:e.currentLayer,currentLocation:e.currentLocation,onHist:function(e,a){t.currentHistogramX=e,t.currentHistogramY=a},appRefs:this.$refs}}),n("svg",{ref:"circle_svg",staticClass:"EV-circle-svg"}),n("svg",{ref:"svg",staticClass:"EV-svg"}),n("Sidebar",{attrs:{layers:e.layers,currentLayer:e.currentLayer,currentHistogramX:e.currentHistogramX,currentHistogramY:e.currentHistogramY}})],1)],1)},o=[],i=a("7dc5"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"intro"},[t._m(0),a("p",[t._v("Découvrez l'influence de la nature sur votre vie à Paris.")]),a("section",{staticClass:"buttons"},[a("a",{staticClass:"button accent",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onDismiss(e)}}},[t._v("Commencer")]),a("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onDismiss(e)}}},[t._v("Visite guidée")])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("\n    EcoParis\n    "),a("img",{attrs:{src:"assets/parrot.svg"}})])}],c={props:["onDismiss"]},u=c,d=(a("91fa"),a("2877")),f=Object(d["a"])(u,s,l,!1,null,null,null);f.options.__file="Intro.vue";var p=f.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"zoom-control"},[a("a",{staticClass:"minus",attrs:{href:"#"}},[t._v("-")]),a("a",{staticClass:"plus",attrs:{href:"#"}},[t._v("+")])])}],y={},g=y,m=(a("bf1e"),Object(d["a"])(g,h,v,!1,null,null,null));m.options.__file="ZoomControl.vue";var _=m.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"location-control"},[a("a",{staticClass:"locate",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.locate(e)}}},[a("i",{staticClass:"fas fa-map-marker-alt"})]),a("div",{class:{search:!0,active:t.searchExpanded}},[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleSearch(e)}}},[t.searchExpanded?a("i",{staticClass:"fas fa-search-minus"}):a("i",{staticClass:"fas fa-search-location"})]),a("input",{ref:"searchInput",staticClass:"autocomplete",attrs:{type:"text"},on:{keyup:function(e){if(!("button"in e)&&27!==e.keyCode)return null;t.searchExpanded=!1}}})])])},x=[],C={props:["onLocation"],data:function(){return{searchExpanded:!1}},mounted:function(){var t=this,e=new google.maps.places.Autocomplete(this.$refs.searchInput);e.setFields(["geometry"]),e.setOptions({strictBounds:!0}),e.setBounds({north:i.viewport.topLatitude,south:i.viewport.bottomLatitude,west:i.viewport.leftLongitude,east:i.viewport.rightLongitude}),e.addListener("place_changed",function(){var a=e.getPlace();a.geometry?(t.searchExpanded=!1,t.onLocation([a.geometry.location.lat(),a.geometry.location.lng()])):t.onLocation(null,null)})},methods:{locate:function(){var t=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){t.onLocation([e.coords.latitude,e.coords.longitude])})},toggleSearch:function(){this.searchExpanded^=!0,this.$refs.searchInput.focus()},keypressSearch:function(t){alert(JSON.stringify(t))}}},w=C,E=(a("bed8"),Object(d["a"])(w,b,x,!1,null,null,null));E.options.__file="LocationControl.vue";var P=E.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"layers"},[a("h3",[t._v("Couches")]),a("div",{staticClass:"buttons"},t._l(t.layers,function(e){return e.hidden?t._e():a("a",{class:{active:t.value==e},on:{click:function(a){a.preventDefault(),t.select(e)}}},[a("span",{staticClass:"icon",domProps:{innerHTML:t._s(e.icon)}}),a("span",[t._v(t._s(e.name))]),e.loaded?t._e():a("div",{staticClass:"loader-tile-grid"},[a("div",{staticClass:"loader-tile loader-tile1"}),a("div",{staticClass:"loader-tile loader-tile2"}),a("div",{staticClass:"loader-tile loader-tile3"}),a("div",{staticClass:"loader-tile loader-tile4"}),a("div",{staticClass:"loader-tile loader-tile5"}),a("div",{staticClass:"loader-tile loader-tile6"}),a("div",{staticClass:"loader-tile loader-tile7"}),a("div",{staticClass:"loader-tile loader-tile8"}),a("div",{staticClass:"loader-tile loader-tile9"})])])}))])},k=[],T={props:["layers","value"],methods:{select:function(t){t.loading||this.$emit("input",t)}}},O=T,S=(a("054f"),Object(d["a"])(O,j,k,!1,null,null,null));S.options.__file="Layers.vue";var V=S.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{ref:"map",staticClass:"map"})},H=[],$=(a("ac6a"),a("3835")),z=a("2909"),I=(a("a481"),"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"),M='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';function A(t,e){var a=L.map(t,{zoomControl:!1});a.fitBounds(e);var n=L.tileLayer(I,{minZoom:9,maxZoom:14,attribution:M});return n.addTo(a),a}function B(t){return fetch(t).then(function(t){return t.json()}).then(function(t){return t.data=JSON.parse(t.data),t})}var N=function(t,e,a,n,r,o,s,l){var c=null,u=null;console.log(t);var d=new L.LatLng(i.viewport.topLatitude,i.viewport.leftLongitude),f=new L.LatLng(i.viewport.bottomLatitude,i.viewport.rightLongitude),p=L.latLngBounds(d,f);function h(t){return r.features.some(function(e){return d3.geoContains(e,t)})}function v(t,e){t&&e&&h([e,t])?(m.panTo(new L.LatLng(t,e)),m.setZoom(11)):(t=null,e=null,m.fitBounds(p)),c=t,u=e,y()}function y(){if(c&&u){var t=m.latLngToLayerPoint([c,u]),e=t.x-q.iconAnchor[0],a=t.y-q.iconAnchor[1];J.attr("visibility","visible"),J.attr("transform","translate(".concat(e,", ").concat(a,")"))}else J.attr("visibility","hidden")}function g(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){v(t.coords.latitude,t.coords.longitude)})}g();var m=A(t,p);function _(t){return{opacity:0,fillOpacity:0}}L.geoJson(r,{style:_}).addTo(m);var b=d3.select(t).select(".leaflet-zoom-animated");function x(t,e){var a=m.latLngToLayerPoint(new L.LatLng(e,t));this.stream.point(a.x,a.y)}var C=d3.geo.transform({point:x}),w=d3.geo.path().projection(C),E=b.append("defs"),P=E.append("path").attr("id","clip_path");E.append("clipPath").attr("id","clip").append("use").attr("xlink:href","#clip_path");var j=b.selectAll("image").data([0]).enter().append("svg:image").attr("x",0).attr("y",0).attr("xlink:href","").attr("clip-path","");function k(){function t(t,e){var a=m.latLngToLayerPoint([Q[V].tl_lat,Q[V].tl_lng]),n=m.latLngToLayerPoint([Q[V].br_lat,Q[V].br_lng]),r=n.x-a.x,o=n.y-a.y,i=m.latLngToLayerPoint(L.latLng(e,t)),s=(i.x-a.x)/(n.x-a.x)*(r-1),l=(i.y-a.y)/(n.y-a.y)*(o-1);this.stream.point(s,l)}var e=d3.geo.transform({point:t}),a=d3.geo.path().projection(e);P.attr("d",a)}var T=0,O=.4,S=1,V="",D=d3.select(e).attr("style","display:none;"),H=d3.select(a).attr("style","display:none;"),$=D.selectAll("image").data([0]).enter().append("svg:image").attr("x",0).attr("y",0).attr("xlink:href",""),I=D.append("g");function M(t,e){var a=i.EV_path;if(Q[i.EV_path]){var n=parseInt(D.style("width").replace("px","")),r=parseInt(D.style("height").replace("px",""));D.attr("style","top:"+(e-r-30)+"; left:"+(t-n/2)+"; display:'';"),H.attr("style","top:"+(e-r/2)+"; left:"+(t-n/2)+"; display:'';");var o=L.latLng(Q[a].tl_lat,Q[a].tl_lng),s=L.latLng(Q[a].br_lat,Q[a].br_lng),l=m.latLngToContainerPoint(o),c=(m.latLngToContainerPoint(s),m.latLngToLayerPoint(s).x-m.latLngToLayerPoint(o).x),u=m.latLngToLayerPoint(s).y-m.latLngToLayerPoint(o).y;$.attr("width",c),$.attr("height",u),$.attr("transform",function(a){return"translate("+(+l.x-t+n/2)+","+(+l.y-e+r/2)+")"})}}I.selectAll("path").data([r.features[0]]).enter().append("path").attr("vector-effect","non-scaling-stroke").style("stroke","#000").style("fill-opacity",0).style("stroke-opacity",1);var N=b.append("g").selectAll("path").data(o.features).enter().append("path").attr("d",w).attr("vector-effect","non-scaling-stroke").style("stroke","#666").style("fill-opacity",T).style("stroke-opacity",T).on("mouseover",function(t,e){d3.select(this).style("fill-opacity",T),P.datum(t.geometry),k(),Z(e,V,!0),M(t),G(e,V,!0)}).on("mouseout",function(t,e){-1!=X&&(d3.select(this).style("fill-opacity",Y(X)(t,e)),d3.select(this).style("stroke-opacity",Y(X)(t,e))),P.datum([]),k(),D.attr("style","display:none;"),H.attr("style","display:none;")}).on("click",function(t,e){U.style("pointer-events","all"),m.fitBounds(p),X=-1,U.style("fill-opacity",S),N.style("fill-opacity",T),N.style("stroke-opacity",T),P.datum([]),k(),D.attr("style","display:none;"),H.attr("style","display:none;")}).on("mousemove",function(){d3.event&&d3.event.clientX&&d3.event.clientY&&M(d3.event.layerX,d3.event.layerY)}),X=-1;function Y(t){function e(e,a){return K[t]<=a&&(t==r.features.length-1||K[t+1]>a)?1:0}return e}var U=b.append("g").selectAll("path").data(r.features).enter().append("path").attr("d",w).attr("vector-effect","non-scaling-stroke").style("stroke","#333").attr("fill","#fff").attr("fill-opacity",S).style("pointer-events","all").on("mouseover",function(t,e){-1!=X?e!=X?d3.select(this).style("fill-opacity",S):d3.select(this).style("fill-opacity",T):d3.select(this).style("fill-opacity",O),Z(e,V,!1),M(t),G(e,V,!1)}).on("mouseout",function(t,e){-1!=X?e==X?d3.select(this).style("fill-opacity",T):d3.select(this).style("fill-opacity",O):d3.select(this).style("fill-opacity",S),D.attr("style","display:none;"),H.attr("style","display:none;")}).on("click",function(t,e){U.style("pointer-events","all"),d3.select(this).style("pointer-events","none"),U.style("fill-opacity",O),d3.select(this).style("fill-opacity",T),X=e,N.style("fill-opacity",Y(e)),N.style("stroke-opacity",Y(e));var a=d3.select(this).node().getBBox(),n=m.layerPointToLatLng(L.point(a.x,a.y)),r=m.layerPointToLatLng(L.point(a.x+a.width,a.y+a.height));m.fitBounds(L.latLngBounds(n,r)),D.attr("style","display:none;"),H.attr("style","display:none;")}).on("mousemove",function(){d3.event&&d3.event.clientX&&d3.event.clientY&&M(d3.event.layerX,d3.event.layerY)}),q={iconUrl:"assets/marker.png",iconSize:[24,24],iconAnchor:[12,24]},J=b.append("g").selectAll("image").data([0]).enter().append("svg:image").attr("xlink:href",q.iconUrl).attr("width",q.iconSize[0]).attr("height",q.iconSize[1]).attr("visibility","hidden").style("pointer-events","none"),F=document.createElement("canvas"),R=(F.getContext("2d"),{hide:!0});function Z(t,e,a){var n=Q[e];if(n){if(1==a)var r=n.voronoi_hist[t];else r=n.interComm_hist[t];r[0]=0,s(Object(z["a"])(Array(256).keys()),r)}}function G(t,e,a){if(e==i.Urban_cooling){var n=Q[i.Ecole_path];if(!n)return;if(1==a)n.voronoi_hist[t];else n.interComm_hist[t]}}function W(){if(R.hide)return console.log("hidden!"),U.attr("visibility","hidden"),N.attr("visibility","hidden"),j.attr("visibility","hidden"),void $.attr("visibility","hidden");U.attr("visibility","visible"),N.attr("visibility","visible"),j.attr("visibility","visible"),$.attr("visibility","visible");var t=R.tl,e=R.br;console.log("UPDATING");var a=m.latLngToLayerPoint(e).x-m.latLngToLayerPoint(t).x,n=m.latLngToLayerPoint(e).y-m.latLngToLayerPoint(t).y;j.attr("transform",function(e){var a=m.latLngToLayerPoint(t);return"translate("+a.x+","+a.y+")"}),j.attr("width",a),j.attr("height",n),U.attr("d",w),N.attr("d",w),k(),y(),D.attr("style","display:none;"),H.attr("style","display:none;")}m.on("viewreset",W);var K=[],Q={};function tt(t,e,a){if(Q[t])a();else{e[0],e[1];fetch(t).then(function(t){return t.json()}).then(function(n){n.data=JSON.parse(n.data),n.percentiles=JSON.parse(n.percentiles);var s=n.data;F.width=n.width,F.height=n.height;var l=F.getContext("2d");l.createImageData(F.width,F.height);for(var c=F.height*F.width,u=1,d=0,f=c/u,p=F.height/u,h=[],v=[],y={},g=0;g<o.features.length;++g){v[g]=0,h[g]=0,y[g]=[];for(var m=0;m<256;++m)y[g][m]=0}var _=[],L=[],b={};for(g=0;g<r.features.length;++g){L[g]=0,_[g]=0,b[g]=[];for(m=0;m<256;++m)b[g][m]=0}K=[];for(g=0;g<r.features.length;++g)K[g]=1e4;var x=function(e){for(var s=e.data.result,c=e.data.index,f=e.data.interComm_counts,g=e.data.interComm_means,m=e.data.voronoi_counts,x=e.data.voronoi_means,C=e.data.firstVoronoiByInterComm,w=e.data.voronoi_hist,E=e.data.interComm_hist,P=0;P<o.features.length;++P){v[P]+=m[P],h[P]+=x[P];for(var k=0;k<256;++k)y[P][k]+=w[P][k]}for(P=0;P<r.features.length;++P){L[P]+=f[P],_[P]+=g[P];for(k=0;k<256;++k)b[P][k]+=E[P][k];K[P]>C[P]&&(K[P]=C[P])}if(l.putImageData(s,0,p*c),d++,d==u){if(t==i.Ecole_path){for(P=0;P<o.features.length;++P)h[P]/=255;for(P=0;P<r.features.length;++P)_[P]/=255}else{for(P=0;P<o.features.length;++P)0!=v[P]&&(h[P]/=v[P]);for(P=0;P<r.features.length;++P)0!=L[P]&&(_[P]/=L[P])}var T=[70,140],O=F.toDataURL("png");j.attr("xlink:href",O),Q[t]={url:O,tl_lat:n.tl_lat,tl_lng:n.tl_lng,br_lat:n.br_lat,br_lng:n.br_lng,width:F.width,height:F.height,voronoi_means:h,interComm_means:_,voronoi_hist:y,interComm_hist:b,hist_buckets:T,percentiles:n.percentiles,layerUrl:t},a()}},C=at(n.percentiles,e),w=C[0],E=C[1];B("data/voronoi_cont.json").then(function(t){B("data/intercomm_cont.json").then(function(e){for(var a=0;a<u;a++){var i=new Worker("assets/pictureProcessor.js");i.onmessage=x;var c=l.getImageData(0,p*a,F.width,p);i.postMessage({canvasData:c,pixels:s,index:a,length:f,width:F.width,height:F.height,voronoiContainmentData:t.data,interCommContainmentData:e.data,numVoronois:o.features.length,numInterComms:r.features.length,tl_lat:n.tl_lat,tl_lng:n.tl_lng,br_lat:n.br_lat,br_lng:n.br_lng,colorDomain:w,colorRange:E})}})})})}}function et(t){$.attr("xlink:href",Q[i.EV_path].url)}function at(t,e){var a=t.slice();a.unshift(0),a.push(255);for(var n=a.length,r=e.length,o=[],i=0;i<r;++i)o[i]=i/(r-1);var s=d3.scale.linear().domain(o).range(e),l=[];for(i=0;i<n;++i){var c=i/(n-1);l.push(s(c))}return[a,l]}function nt(t,e){if(!t)return R.hide=!0,void W();tt(t,e,function(){t==i.EV_path?j.attr("clip-path",""):j.attr("clip-path","url(#clip)");var a=Q[t],n=at(a.percentiles,e),r=n[0],o=n[1],s=d3.scale.linear().range(o).domain(r);N.attr("fill",function(e,n){return t==i.EV_path?"#00000022":s(a.voronoi_means[n])}),U.attr("fill",function(e,n){return t==i.EV_path?"#00000022":s(a.interComm_means[n])}),F.width=a.width,F.height=a.height,R.hide=!1,R.tl=new L.LatLng(a.tl_lat,a.tl_lng),R.br=new L.LatLng(a.br_lat,a.br_lng),R.current_geoLat=c,R.current_geoLong=u,W(),V=t,j.attr("xlink:href",a.url)})}return[tt,nt,v,et]},X={props:["layers","currentLayer","currentLocation","onHist","appRefs","onSchools"],data:function(){return{loadLayer:function(){},setLayer:function(){},setLocation:function(){}}},mounted:function(){var t=this,e="data/intercommunalites.geojson",a="data/voronois.json";queue().defer(d3.json,e).defer(d3.json,a).await(function(e,a,n){var r=N(t.$refs.map,t.appRefs.svg,t.appRefs.circle_svg,e,a,n,function(e,a){return t.onHist(e,a)},t.onSchools),o=Object($["a"])(r,5);t.loadLayer=o[0],t.setLayer=o[1],t.setLocation=o[2],t.setEVLayer=o[3],t.setTextUrban=o[4],i.layers.forEach(function(e){return t.loadLayer(e.path,e.colors,function(){t.layers[e.path].loaded=!0,e.path==i.EV_path&&t.setEVLayer(e.path)})}),t.setLayer(t.currentLayer.path,t.currentLayer.colors)})},watch:{currentLayer:function(t){this.setLayer(t.path,t.colors)},currentLocation:function(t){var e=Object($["a"])(t,2),a=e[0],n=e[1];this.setLocation(a,n)}}},Y=X,U=(a("894b"),Object(d["a"])(Y,D,H,!1,null,null,null));U.options.__file="Map.vue";var q=U.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"sidebar"},[t.currentLayer&&t.layers[t.currentLayer.path].loaded?a("div",[a("h2",[t._v(t._s(t.layers[t.currentLayer.path].title))]),a("div",{domProps:{innerHTML:t._s(t.layers[t.currentLayer.path].content)}}),a("Histogram",{attrs:{x:t.currentHistogramX,y:t.currentHistogramY}})],1):a("div",{staticClass:"split"},[t._m(0),t._m(1)])])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("h2",[t._v("Bienvenue sur EcoParis.")]),a("p",[t._v("EcoParis est une visualisation interactive des données cartographiques des services écosystémiques en territoires urbains et péri-urbains en région Ile-de-France issues du projet "),a("a",{attrs:{href:"https://idefese.wordpress.com/"}},[t._v("IDEFESE")]),t._v(".")]),a("p",[t._v("Pour commencer, vous pouvez sélectionner une couche à afficher parmi des mesures de rétention "),a("a",{attrs:{href:"#"}},[t._v("de phosphore")]),t._v(" et "),a("a",{attrs:{href:"#"}},[t._v("d'azote")]),t._v(", des mesures de "),a("a",{attrs:{href:"#"}},[t._v("réduction de la température")]),t._v(" due à la végétation ou encore de "),a("a",{attrs:{href:"#"}},[t._v("valeur économique")]),t._v(" des régions.")]),a("p",[t._v("Vous pouvez aussi choisir d'afficher l'évolution estimée de ces mesures à l'horizon 2025 dans un scénario de changement climatique.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"about"},[a("p",[t._v("EcoParis a été conçu par des élèves du cours de "),a("a",{attrs:{href:"https://edu.epfl.ch/coursebook/en/data-visualization-COM-480"}},[t._v("Data Visualization")]),t._v(" de l'EPFL, avec l'aide de Perrine Hamel du projet "),a("a",{attrs:{href:"https://naturalcapitalproject.stanford.edu/"}},[t._v("Natural Capital Project")]),t._v(" de Stanford.")]),a("section",{staticClass:"slideshow"},[a("a",{attrs:{href:"https://www.epfl.ch/"}},[a("img",{attrs:{src:"https://mediacom.epfl.ch/files/content/sites/mediacom/files/EPFL-Logo.jpg",alt:"Logo EPFL"}})]),a("a",{attrs:{href:"https://naturalcapitalproject.stanford.edu/"}},[a("img",{attrs:{src:"https://idefese.files.wordpress.com/2018/11/image5.jpg?w=172&h=171",alt:"Logo NatCap"}})])])])}],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"graph",staticClass:"graph-box"})},Z=[],G=function(t){Plotly.react(t.$refs.graph,[{x:t.x,y:t.y,type:"histogram",histfunc:"sum",xbins:{end:256,size:1,start:0}}],{margin:{l:35,r:35,t:5,b:20}},{displayModeBar:!1})},W={props:["x","y"],mounted:function(){G(this)},watch:{x:function(){G(this)}}},K=W,Q=(a("cd26"),Object(d["a"])(K,R,Z,!1,null,null,null));Q.options.__file="Histogram.vue";var tt=Q.exports,et={props:["layers","currentLayer","currentHistogramX","currentHistogramY"],components:{Histogram:tt}},at=et,nt=(a("f203"),Object(d["a"])(at,J,F,!1,null,null,null));nt.options.__file="Sidebar.vue";for(var rt=nt.exports,ot=null,it=0;it<i.layers.length;++it)i.layers[it].path==i.EV_path&&(ot=i.layers[it]);var st={data:function(){return{layers:i.layers.reduce(function(t,e){return t[e.path]=e,t[e.path].loaded=!1,t},{}),currentLayer:ot,currentLocation:null,currentHistogramX:null,currentHistogramY:null,introVisible:!0,sidebarVisible:!1}},components:{Intro:p,ZoomControl:_,LocationControl:P,Layers:V,Map:q,Sidebar:rt}},lt=st,ct=(a("5c0b"),Object(d["a"])(lt,r,o,!1,null,null,null));ct.options.__file="App.vue";var ut=ct.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(ut)}}).$mount("#app")},"58be":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(t,e,a){},"7dc5":function(t){t.exports={layers:[{path:"data/rasters/espaces_verts.json",name:"Esp. verts",icon:"E",colors:["#00ff00","#0000ff","#008800"],title:"Mesure de la rétention d'azote.",content:"<p>Should not appear anyway, find something to fill here.</p>"},{path:"data/rasters/pollination_cc.json",name:"Phosph.",icon:"P",colors:["#ffffcc","#e31a1c"],title:"Mesure de la rétention de phosphore.",content:"<p>Le service de rétention du phosphore permet d'améliorer la qualité de l'eau (superficielle et souterraine). Il est directement utile aux organismes de gestion de l'eau (syndicats et département d'assainissement), et donc aux habitants dont les impôts financent la maintenance des services d'assainissement.</p>"},{path:"data/rasters/T_reduction.json",name:"Nitrog.",icon:"N",colors:["#ff3300","#ffffff","#00ccff"],title:"Mesure de la rétention d'azote.",content:"<p>Le service de rétention de l'azote permet d'améliorer la qualité de l'eau (superficielle et souterraine). Il est directement utile aux organismes de gestion de l'eau (syndicats et département d'assainissement), et donc aux habitants dont les impôts financent la maintenance des services d'assainissement.</p>"},{path:"data/rasters/ecoles_elementaires.json",name:"Ecoles elementaires",icon:"E",colors:["#ffffff","#339933"],title:"Nombre d'écoles élémentaires et maternelles",content:"<p>Should not appear anyway, find something to fill here.</p>",hidden:!0}],viewport:{topLatitude:49.23719070644322,bottomLatitude:48.12054154281846,leftLongitude:1.44727950476602,rightLongitude:3.555686958558566},EV_path:"data/rasters/espaces_verts.json",Ecole_path:"data/rasters/ecoles_elementaires.json",Urban_cooling:"data/rasters/T_air_ref.json"}},"894b":function(t,e,a){"use strict";var n=a("a130"),r=a.n(n);r.a},"91fa":function(t,e,a){"use strict";var n=a("a90f"),r=a.n(n);r.a},a130:function(t,e,a){},a90f:function(t,e,a){},bed8:function(t,e,a){"use strict";var n=a("2a3c"),r=a.n(n);r.a},bf1e:function(t,e,a){"use strict";var n=a("d162"),r=a.n(n);r.a},cd26:function(t,e,a){"use strict";var n=a("58be"),r=a.n(n);r.a},d162:function(t,e,a){},f203:function(t,e,a){"use strict";var n=a("0466"),r=a.n(n);r.a},fcd1:function(t,e,a){}});
//# sourceMappingURL=app.4f4ec12a.js.map