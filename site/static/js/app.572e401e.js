(function(t){function e(e){for(var r,o,s=e[0],u=e[1],l=e[2],p=0,f=[];p<s.length;p++)o=s[p],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("c21b"),a=n.n(r);a.a},1:function(t,e){},2687:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Leaflet"),n("h2",[t._v("All Rides")]),n("Vuetable")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"leaflet-comp"}},[n("l-map",{attrs:{bounds:t.bounds,zoom:t.zoom,center:t.center,maxBounds:t.maxBounds,inertia:!1},on:{"update:zoom":t.zoomUpdated}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.popups,function(e,r){return n("l-marker",{key:"marker"+r,attrs:{"lat-lng":e[0]}},[n("l-popup",{key:"pop"+r,attrs:{"lat-lng":t.popups[r][0],content:t.popups[r][1]}})],1)}),t._l(t.polylines,function(t,e){return n("l-polyline",{key:"line"+e,attrs:{"lat-lngs":t,fill:!1}})})],2)],1)},s=[],u=(n("96cf"),n("3040")),l=(n("7f7f"),n("458e")),c=(n("6cc5"),n("e11e")),p=n.n(c),f=n("bf2a"),m=n.n(f);delete p.a.Icon.Default.prototype._getIconUrl,p.a.Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")});var d={components:{LMap:l["LMap"],LTileLayer:l["LTileLayer"],LMarker:l["LMarker"],LPolyline:l["LPolyline"],LPopup:l["LPopup"]},data:function(){return{zoom:2,center:[0,0],bounds:null,maxBounds:null,url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},computed:{rides:function(){return this.$store.state.activities.map(function(t){return t.start_latlng})},polylines:function(){return this.$store.state.activities.map(function(t){var e=m.a.polyline.parse(t.map.summary_polyline),n=e._layers[e._leaflet_id-1].feature.geometry.coordinates;if(n)return n=n.map(function(t){return t.reverse()}),n})},popups:function(){return this.$store.state.activities.map(function(t){return[t.start_latlng,"<p>"+t.name+"<br>"+(t.distance/1e3).toFixed(2)+" km "+t.type+"<br>"+(t.moving_time/3600).toFixed(2)+" hrs Moving   "+(t.elapsed_time/3600).toFixed(2)+" hrs Total</p>"]})}},watch:{rides:function(t){var e=this,n=t.reduce(function(t,e){if("[]"==JSON.stringify(t))return t=[e,e],t;var n=t[0][0],r=t[1][0],a=t[0][1],i=t[1][1];return isNaN(e[0])||isNaN(e[1])?t:(e[0]<t[0][0]&&(n=e[0]),e[0]>t[1][0]&&(r=e[0]),e[1]<t[0][1]&&(a=e[1]),e[1]>t[1][1]&&(i=e[1]),t=[[n,a],[r,i]],t)},[]),r=[[n[0][0]-1,n[0][1]-1],[n[1][0]+1,n[1][1]+1]];setTimeout(function(){e.bounds=r},500)}},methods:{getAllActivities:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a,i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=new Date(this.$store.state.start),n=1,r=[],a="";case 4:return t.next=6,fetch("https://www.strava.com/api/v3/athletes/7594/activities?access_token=641c02aede2bd589ccf83096c9ea706c2fd3a1ec&per_page=50&page="+n);case 6:return i=t.sent,t.next=9,i.json();case 9:if(a=t.sent,o=a.reduce(function(t,n){var r=new Date(n.start_date);return e>r||t},!1),a=a.filter(function(t){var n=new Date(t.start_date);return n>=e}),r=r.concat(a),!o){t.next=16;break}return this.$store.commit("setActivities",r),t.abrupt("return");case 16:n++;case 17:if(""!=a){t.next=4;break}case 18:return this.$store.commit("setActivities",r),t.abrupt("return");case 20:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),zoomUpdated:function(t){this.zoom=t}},mounted:function(){this.getAllActivities()}},v=d,b=(n("df6a"),n("2877")),h=Object(b["a"])(v,o,s,!1,null,null,null);h.options.__file="Leaflet.vue";var _=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-virtual-table",{attrs:{config:t.tableConfig,data:t.tableData2,height:500,itemHeight:40,minWidth:800,enableExport:!0,language:"en"}})},y=[],x=n("b360"),w={components:{VueVirtualTable:x["a"]},data:function(){return{tableConfig:[{prop:"date",name:"Date",sortable:!0,summary:"COUNT"},{prop:"name",name:"Name",searchable:!0},{prop:"distance",name:"Distance (km)",summary:"SUM",sortable:!0},{prop:"moving_time",name:"Moving Time (hrs)",summary:"SUM",sortable:!0},{prop:"elapsed_time",name:"Elapsed Time (hrs)",summary:"SUM",sortable:!0},{prop:"total_elevation_gain",name:"Climbed (m)",summary:"SUM",sortable:!0},{prop:"type",name:"Type",searchable:!0,sortable:!0}]}},computed:{tableData2:function(){return this.$store.state.activities.map(function(t){return{date:t.start_date_local.slice(0,10),name:t.name,distance:(t.distance/1e3).toFixed(2),moving_time:(t.moving_time/3600).toFixed(2),elapsed_time:(t.elapsed_time/3600).toFixed(2),total_elevation_gain:t.total_elevation_gain,type:t.type}})}}},O=w,k=Object(b["a"])(O,g,y,!1,null,null,null);k.options.__file="Vuetable.vue";var L=k.exports,M=n("2f62");r["a"].use(M["a"]);var j=new M["a"].Store({state:{start:"3/12/2019",end:"11/21/2019",athlete:"",activities:[]},mutations:{setStart:function(t,e){t.start=e},setEnd:function(t,e){t.end=e},setAthlete:function(t,e){t.athlete=e},setActivities:function(t,e){t.activities=e},addActivities:function(t,e){t.activities=t.activities.append(e)}}}),S={name:"app",store:j,components:{Leaflet:_,Vuetable:L}},T=S,A=(n("034f"),Object(b["a"])(T,a,i,!1,null,null,null));A.options.__file="App.vue";var U=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(U)}}).$mount("#app")},c21b:function(t,e,n){},df6a:function(t,e,n){"use strict";var r=n("2687"),a=n.n(r);a.a}});
//# sourceMappingURL=app.572e401e.js.map