(function(e){function t(t){for(var i,s,o=t[0],l=t[1],c=t[2],p=0,d=[];p<o.length;p++)s=o[p],n[s]&&d.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var i={},n={app:0},a=[];function s(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=i,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var i=r("85ec"),n=r.n(i);n.a},1:function(e,t){},"150f":function(e,t,r){"use strict";var i=r("d8f5"),n=r.n(i);n.a},"169a":function(e,t,r){},"273a":function(e,t,r){},4731:function(e,t,r){"use strict";var i=r("273a"),n=r.n(i);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"inline"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.isMetric,expression:"isMetric"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isMetric)?e._i(e.isMetric,null)>-1:e.isMetric},on:{change:function(t){var r=e.isMetric,i=t.target,n=!!i.checked;if(Array.isArray(r)){var a=null,s=e._i(r,a);i.checked?s<0&&(e.isMetric=r.concat([a])):s>-1&&(e.isMetric=r.slice(0,s).concat(r.slice(s+1)))}else e.isMetric=n}}}),e._v(" "+e._s(e.isMetric?"Units(Switch to Standard)":"Units(Switch to Metric)")+"\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.markersOn,expression:"markersOn"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.markersOn)?e._i(e.markersOn,null)>-1:e.markersOn},on:{change:function(t){var r=e.markersOn,i=t.target,n=!!i.checked;if(Array.isArray(r)){var a=null,s=e._i(r,a);i.checked?s<0&&(e.markersOn=r.concat([a])):s>-1&&(e.markersOn=r.slice(0,s).concat(r.slice(s+1)))}else e.markersOn=n}}}),e._v(" Markers\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.polylinesOn,expression:"polylinesOn"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.polylinesOn)?e._i(e.polylinesOn,null)>-1:e.polylinesOn},on:{change:function(t){var r=e.polylinesOn,i=t.target,n=!!i.checked;if(Array.isArray(r)){var a=null,s=e._i(r,a);i.checked?s<0&&(e.polylinesOn=r.concat([a])):s>-1&&(e.polylinesOn=r.slice(0,s).concat(r.slice(s+1)))}else e.polylinesOn=n}}}),e._v(" Lines\n  ")]),r("Leaflet",{attrs:{markersOn:e.markersOn,polylinesOn:e.polylinesOn}}),r("Summary",{attrs:{isMetric:e.isMetric}}),r("h2",[e._v("All Rides")]),r("rides",{attrs:{isMetric:e.isMetric}})],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"leaflet-comp"}},[r("l-map",{attrs:{bounds:e.bounds,zoom:e.zoom,center:e.center,maxBounds:e.maxBounds,inertia:!1},on:{"update:zoom":e.zoomUpdated}},[r("l-control-layers",{attrs:{position:"topright"}}),e._l(e.tileProviders,function(e){return r("l-tile-layer",{key:e.name,attrs:{name:e.name,visible:e.visible,url:e.url,attribution:e.attribution,"layer-type":"base"}})}),e._l(e.popups,function(t,i){return e.polylinesOn?r("l-polyline",{key:"line"+i,attrs:{"lat-lngs":e.popups[i][2],fill:!1}},[r("l-popup",{key:"pop"+i,attrs:{"lat-lng":e.popups[i][0],content:e.popups[i][1]}})],1):e._e()}),e._l(e.popups,function(t,i){return e.markersOn?r("l-marker",{key:"marker"+i,attrs:{"lat-lng":t[0]}},[r("l-popup",{key:"pop2"+i,attrs:{"lat-lng":e.popups[i][0],content:e.popups[i][1]}})],1):e._e()})],2)],1)},o=[],l=(r("96cf"),r("3b8d")),c=(r("7f7f"),r("2699")),u=r("a40a"),p=r("4e2b"),d=r("635f"),m=r("f60f"),f=r("9ee8"),v=(r("6cc5"),r("e11e")),h=r.n(v),y=r("bf2a"),_=r.n(y);delete h.a.Icon.Default.prototype._getIconUrl,h.a.Icon.Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")});var b={components:{LMap:c["a"],LTileLayer:u["a"],LMarker:p["a"],LPolyline:d["a"],LPopup:m["a"],LControlLayers:f["a"]},props:{markersOn:{type:Boolean,required:!1,default:!0},polylinesOn:{type:Boolean,required:!1,default:!0}},data:function(){return{zoom:2,center:[0,0],bounds:null,maxBounds:null,tileProviders:[{name:"OpenStreetMaps",visible:!1,url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'},{name:"OpenCycleMap",visible:!0,url:"https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=3d3c357594e04c67a183d3c95a1792c0",attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}]}},computed:{rides:function(){var e=this.$store.state.activities.map(function(e){if(e.start_latlng)return e.start_latlng});return e.filter(function(e){return e})},polylines:function(){var e=this.$store.state.activities.map(function(e){if(e.map.summary_polyline){var t=_.a.polyline.parse(e.map.summary_polyline),r=t._layers[t._leaflet_id-1].feature.geometry.coordinates;if(r)return r=r.map(function(e){return e.reverse()}),r}});return e.filter(function(e){return e})},popups:function(){var e=this,t=this.$store.state.activities.map(function(t){var r;if(t.map.summary_polyline){var i=_.a.polyline.parse(t.map.summary_polyline);r=i._layers[i._leaflet_id-1].feature.geometry.coordinates,r&&(r=r.map(function(e){return e.reverse()}))}return[t.start_latlng,"<p>"+t.name+"<br>"+(e.isMetric?(t.distance/1e3).toFixed(2)+" km ":(t.distance/.0254/12/5280).toFixed(2)+" mi ")+t.type+"<br>"+(t.moving_time/3600).toFixed(2)+" hrs Moving   "+(t.elapsed_time/3600).toFixed(2)+' hrs Total</p><br><a href="https://www.strava.com/activities/'+t.id+'" target="_blank">View on Strava</a>',r||null]});return t.filter(function(e){return e[0]})}},watch:{rides:function(e){var t=this,r=e.reduce(function(e,t){if("[]"==JSON.stringify(e))return e=[t,t],e;var r=e[0][0],i=e[1][0],n=e[0][1],a=e[1][1];return isNaN(t[0])||isNaN(t[1])?e:(t[0]<e[0][0]&&(r=t[0]),t[0]>e[1][0]&&(i=t[0]),t[1]<e[0][1]&&(n=t[1]),t[1]>e[1][1]&&(a=t[1]),e=[[r,n],[i,a]],e)},[]),i=[[r[0][0]-1,r[0][1]-1],[r[1][0]+1,r[1][1]+1]];setTimeout(function(){t.bounds=i},500)}},methods:{getAllActivities:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,r,i,n,a,s,o,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=new Date(this.$store.state.start),r=new Date(2019,7,29),i=new Date(2019,8,3),n=1,a=[],s="";case 6:return e.next=8,fetch("https://www.strava.com/api/v3/athletes/7594/activities?access_token=641c02aede2bd589ccf83096c9ea706c2fd3a1ec&per_page=50&page="+n);case 8:return o=e.sent,e.next=11,o.json();case 11:if(s=e.sent,l=s.reduce(function(e,r){var i=new Date(r.start_date);return t>i||e},!1),s=s.filter(function(e){var n=new Date(e.start_date);return n>=t&&!(n>=r&&n<=i)}),a=a.concat(s),!l){e.next=18;break}return this.$store.commit("setActivities",a),e.abrupt("return");case 18:n++;case 19:if(""!=s){e.next=6;break}case 20:return this.$store.commit("setActivities",a),e.abrupt("return");case 22:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),zoomUpdated:function(e){this.zoom=e}},mounted:function(){this.getAllActivities()}},g=b,O=(r("df6a"),r("2877")),k=Object(O["a"])(g,s,o,!1,null,null,null),w=k.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"text-align":"center"}},[r("h2",[e._v("Summary Stats")]),r("div",{staticClass:"container"},[r("div",[r("strong",[e._v("Average Riding Speed: ")]),r("br"),r("h3",[e._v(e._s(((e.isMetric?e.summaryStats.distance/1e3:e.summaryStats.distance/.0254/12/5280)/e.summaryStats.moving_time*3600).toFixed(2))+e._s(e.isMetric?" kph":" mph"))])]),r("div",[r("strong",[e._v("Average Speed w/ Stops: ")]),r("br"),r("h3",[e._v(e._s(((e.isMetric?e.summaryStats.distance/1e3:e.summaryStats.distance/.0254/12/5280)/e.summaryStats.elapsed_time*3600).toFixed(2))+" "+e._s(e.isMetric?" kph":" mph"))])]),r("div",[r("strong",[e._v("Days Riding")]),r("br"),r("h3",[e._v(e._s(e.summaryStats.day.length-1))])]),r("div",[r("strong",[e._v("Total Days")]),r("br"),r("h3",[e._v(e._s(e.days))])]),r("div",[r("strong",[e._v("Total Riding Time")]),r("br"),r("h3",[e._v(e._s((e.summaryStats.moving_time/3600).toFixed(2))+" hrs")])]),r("div",[r("strong",[e._v("Total Elapsed Time on Bike")]),r("br"),r("h3",[e._v(e._s((e.summaryStats.elapsed_time/3600).toFixed(2))+" hrs")])]),r("div",[r("strong",[e._v("Total Distance")]),r("br"),r("h3",[e._v(e._s((e.isMetric?e.summaryStats.distance/1e3:e.summaryStats.distance/.0254/12/5280).toFixed(0))+" "+e._s(e.isMetric?" km":" mi"))])])])])},S=[],x=(r("6762"),r("2fdb"),{props:{isMetric:{type:Boolean,required:!1,default:!1}},computed:{summaryStats:function(){var e={elapsed_time:0,moving_time:0,distance:0,total_elevation_gain:0,day:["2019-03-15","2019-03-16"]},t=this.$store.state.activities.reduce(function(e,t){return e.elapsed_time+=t.elapsed_time,e.moving_time+=t.moving_time,e.distance+=t.distance,e.total_elevation_gain+=t.total_elevation_gain,e.day.includes(t.start_date_local.slice(0,10))||t.name.includes("Rest Day")||e.day.push(t.start_date_local.slice(0,10)),e},e);return t},days:function(){var e=new Date(2019,2,15),t=new Date;return Math.round(Math.abs((t.getTime()-e.getTime())/864e5))}}}),D=x,A=(r("4731"),Object(O["a"])(D,M,S,!1,null,"7691824a",null)),j=A.exports,P=r("2f62");i["a"].use(P["a"]);var T=new P["a"].Store({state:{start:"3/12/2019",end:"11/21/2019",isMetric:!1,athlete:"",activities:[]},mutations:{setStart:function(e,t){e.start=t},setEnd:function(e,t){e.end=t},setAthlete:function(e,t){e.athlete=t},setActivities:function(e,t){e.activities=t},setMetric:function(e,t){e.isMetric=t},addActivities:function(e,t){e.activities=e.activities.append(t)}}}),F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.tableData2.length>1?r("tabulator",{staticClass:"ride-table",attrs:{columns:e.columns,tableData:e.tableData2,tabulatorSettings:e.tabulatorSettings}}):e._e()},$=[],L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"table"})},E=[],z=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),N=r("39ab"),R=r.n(N);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(r,!0).forEach(function(t){Object(z["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var U={props:{columns:{type:Array,required:!0},tableData:{type:Array,required:!0},tabulatorSettings:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{tabulator:null,error:[],widths:20}},watch:{tableData:function(e,t){this.tabulator.replaceData(e)},columns:function(e,t){this.tabulator.setColumns(e)}},mounted:function(){this.tabulator=new R.a(this.$refs.table,C({reactiveData:!0,data:this.tableData,columns:this.columns},this.tabulatorSettings))}},W=U,q=(r("68c2"),Object(O["a"])(W,L,E,!1,null,"166a0d51",null)),V=q.exports,I={layout:"fitDataFill"},J={components:{Tabulator:V},props:{isMetric:{type:Boolean,required:!1,default:!1}},data:function(){return{tabulatorSettings:I}},computed:{tableData2:function(){var e=this;return this.$store.state.activities.map(function(t){return{date:t.start_date_local.slice(0,10),time:t.start_date_local.slice(11,16),name:t.name,distance:e.isMetric?(t.distance/1e3).toFixed(2):(t.distance/.0254/12/5280).toFixed(2),moving_time:(t.moving_time/3600).toFixed(2),elapsed_time:(t.elapsed_time/3600).toFixed(2),total_elevation_gain:e.isMetric?t.total_elevation_gain:(t.total_elevation_gain/.0254/12).toFixed(),average_speed:e.isMetric?(3.6*t.average_speed).toFixed(1):(2.23694*t.average_speed).toFixed(1)}})},columns:function(){return[{title:"Date",field:"date",align:"left",minWidth:100},{title:"Start Time",field:"time",align:"center",headerVertical:"flip",minWidth:80},{title:"Name",field:"name",align:"left",minWidth:100,width:300,variableHeight:!0},{title:this.isMetric?"Distance (km)":"Distance (mi)",field:"distance",align:"center",headerVertical:"flip",minWidth:80},{title:"Moving Time (hrs)",field:"moving_time",align:"center",headerVertical:"flip",minWidth:80},{title:"Elapsed Time (hrs)",field:"elapsed_time",align:"center",headerVertical:"flip",minWidth:80},{title:this.isMetric?"Climbed (m)":"Climbed (ft)",field:"total_elevation_gain",align:"center",headerVertical:"flip",minWidth:80},{title:this.isMetric?"Avg Spd (kph)":"Avg Spd (mph)",field:"average_speed",align:"center",headerVertical:"flip",minWidth:80}]}}},H=J,G=(r("150f"),Object(O["a"])(H,F,$,!1,null,null,null)),K=G.exports,Q={name:"app",store:T,components:{Leaflet:w,Summary:j,Rides:K},data:function(){return{markersOn:!0,polylinesOn:!0,isMetric:!0}}},X=Q,Y=(r("034f"),Object(O["a"])(X,n,a,!1,null,null,null)),Z=Y.exports,ee=r("f309");r("bf40");i["a"].use(ee["a"]),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(Z)}}).$mount("#app")},"68c2":function(e,t,r){"use strict";var i=r("c0fb"),n=r.n(i);n.a},"85ec":function(e,t,r){},c0fb:function(e,t,r){},d8f5:function(e,t,r){},df6a:function(e,t,r){"use strict";var i=r("169a"),n=r.n(i);n.a}});
//# sourceMappingURL=app.1e170cce.js.map