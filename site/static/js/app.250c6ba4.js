(function(e){function t(t){for(var a,s,o=t[0],l=t[1],c=t[2],p=0,d=[];p<o.length;p++)s=o[p],r[s]&&d.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,o=1;o<i.length;o++){var l=i[o];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=i[0]))}return e}var a={},r={app:0},n=[];function s(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=a,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var a=i("a5f8"),r=i.n(a);r.a},1:function(e,t){},"150f":function(e,t,i){"use strict";var a=i("7d92"),r=i.n(a);r.a},4731:function(e,t,i){"use strict";var a=i("c2f8"),r=i.n(a);r.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var a=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isMetric,expression:"isMetric"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isMetric)?e._i(e.isMetric,null)>-1:e.isMetric},on:{change:function(t){var i=e.isMetric,a=t.target,r=!!a.checked;if(Array.isArray(i)){var n=null,s=e._i(i,n);a.checked?s<0&&(e.isMetric=i.concat([n])):s>-1&&(e.isMetric=i.slice(0,s).concat(i.slice(s+1)))}else e.isMetric=r}}}),e._v(" "+e._s(e.isMetric?"Units(Switch to Standard)":"Units(Switch to Metric)")+"\n    "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.markersOn,expression:"markersOn"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.markersOn)?e._i(e.markersOn,null)>-1:e.markersOn},on:{change:function(t){var i=e.markersOn,a=t.target,r=!!a.checked;if(Array.isArray(i)){var n=null,s=e._i(i,n);a.checked?s<0&&(e.markersOn=i.concat([n])):s>-1&&(e.markersOn=i.slice(0,s).concat(i.slice(s+1)))}else e.markersOn=r}}}),e._v(" Markers\n    "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.polylinesOn,expression:"polylinesOn"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.polylinesOn)?e._i(e.polylinesOn,null)>-1:e.polylinesOn},on:{change:function(t){var i=e.polylinesOn,a=t.target,r=!!a.checked;if(Array.isArray(i)){var n=null,s=e._i(i,n);a.checked?s<0&&(e.polylinesOn=i.concat([n])):s>-1&&(e.polylinesOn=i.slice(0,s).concat(i.slice(s+1)))}else e.polylinesOn=r}}}),e._v(" Lines\n  ")]),i("Leaflet",{attrs:{markersOn:e.markersOn,polylinesOn:e.polylinesOn}}),i("Summary",{attrs:{isMetric:e.isMetric}}),i("h2",[e._v("All Rides")]),i("rides",{attrs:{isMetric:e.isMetric}})],1)},n=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"leaflet-comp"}},[i("l-map",{attrs:{bounds:e.bounds,zoom:e.zoom,center:e.center,maxBounds:e.maxBounds,inertia:!1},on:{"update:zoom":e.zoomUpdated}},[i("l-control-layers",{attrs:{position:"topright"}}),e._l(e.tileProviders,function(e){return i("l-tile-layer",{key:e.name,attrs:{name:e.name,visible:e.visible,url:e.url,attribution:e.attribution,"layer-type":"base"}})}),e._l(e.popups,function(t,a){return e.polylinesOn?i("l-polyline",{key:"line"+a,attrs:{"lat-lngs":e.popups[a][2],fill:!1}},[i("l-popup",{key:"pop"+a,attrs:{"lat-lng":e.popups[a][0],content:e.popups[a][1]}})],1):e._e()}),e._l(e.popups,function(t,a){return e.markersOn?i("l-marker",{key:"marker"+a,attrs:{"lat-lng":t[0]}},[i("l-popup",{key:"pop2"+a,attrs:{"lat-lng":e.popups[a][0],content:e.popups[a][1]}})],1):e._e()})],2)],1)},o=[],l=(i("96cf"),i("3040")),c=(i("7f7f"),i("458e")),u=(i("6cc5"),i("e11e")),p=i.n(u),d=i("bf2a"),m=i.n(d);delete p.a.Icon.Default.prototype._getIconUrl,p.a.Icon.Default.mergeOptions({iconRetinaUrl:i("584d"),iconUrl:i("6397"),shadowUrl:i("e2b9")});var f={components:{LMap:c["LMap"],LTileLayer:c["LTileLayer"],LMarker:c["LMarker"],LPolyline:c["LPolyline"],LPopup:c["LPopup"],LControlLayers:c["LControlLayers"]},props:{markersOn:{type:Boolean,required:!1,default:!0},polylinesOn:{type:Boolean,required:!1,default:!0}},data:function(){return{zoom:2,center:[0,0],bounds:null,maxBounds:null,tileProviders:[{name:"OpenStreetMaps",visible:!1,url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'},{name:"OpenCycleMap",visible:!0,url:"https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=3d3c357594e04c67a183d3c95a1792c0",attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}]}},computed:{rides:function(){var e=this.$store.state.activities.map(function(e){if(e.start_latlng)return e.start_latlng});return e.filter(function(e){return e})},polylines:function(){var e=this.$store.state.activities.map(function(e){if(e.map.summary_polyline){var t=m.a.polyline.parse(e.map.summary_polyline),i=t._layers[t._leaflet_id-1].feature.geometry.coordinates;if(i)return i=i.map(function(e){return e.reverse()}),i}});return e.filter(function(e){return e})},popups:function(){var e=this,t=this.$store.state.activities.map(function(t){var i;if(t.map.summary_polyline){var a=m.a.polyline.parse(t.map.summary_polyline);i=a._layers[a._leaflet_id-1].feature.geometry.coordinates,i&&(i=i.map(function(e){return e.reverse()}))}return[t.start_latlng,"<p>"+t.name+"<br>"+(e.isMetric?(t.distance/1e3).toFixed(2)+" km ":(t.distance/.0254/12/5280).toFixed(2)+" mi ")+t.type+"<br>"+(t.moving_time/3600).toFixed(2)+" hrs Moving   "+(t.elapsed_time/3600).toFixed(2)+' hrs Total</p><br><a href="https://www.strava.com/activities/'+t.id+'" target="_blank">View on Strava</a>',i||null]});return t.filter(function(e){return e[0]})}},watch:{rides:function(e){var t=this,i=e.reduce(function(e,t){if("[]"==JSON.stringify(e))return e=[t,t],e;var i=e[0][0],a=e[1][0],r=e[0][1],n=e[1][1];return isNaN(t[0])||isNaN(t[1])?e:(t[0]<e[0][0]&&(i=t[0]),t[0]>e[1][0]&&(a=t[0]),t[1]<e[0][1]&&(r=t[1]),t[1]>e[1][1]&&(n=t[1]),e=[[i,r],[a,n]],e)},[]),a=[[i[0][0]-1,i[0][1]-1],[i[1][0]+1,i[1][1]+1]];setTimeout(function(){t.bounds=a},500)}},methods:{getAllActivities:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,i,a,r,n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=new Date(this.$store.state.start),i=1,a=[],r="";case 4:return e.next=6,fetch("https://www.strava.com/api/v3/athletes/7594/activities?access_token=641c02aede2bd589ccf83096c9ea706c2fd3a1ec&per_page=50&page="+i);case 6:return n=e.sent,e.next=9,n.json();case 9:if(r=e.sent,s=r.reduce(function(e,i){var a=new Date(i.start_date);return t>a||e},!1),r=r.filter(function(e){var i=new Date(e.start_date);return i>=t}),a=a.concat(r),!s){e.next=16;break}return this.$store.commit("setActivities",a),e.abrupt("return");case 16:i++;case 17:if(""!=r){e.next=4;break}case 18:return this.$store.commit("setActivities",a),e.abrupt("return");case 20:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),zoomUpdated:function(e){this.zoom=e}},mounted:function(){this.getAllActivities()}},v=f,h=(i("df6a"),i("2877")),_=Object(h["a"])(v,s,o,!1,null,null,null);_.options.__file="Leaflet.vue";var y=_.exports,g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"text-align":"center"}},[i("h2",[e._v("Summary Stats")]),i("div",{staticClass:"container"},[i("div",[i("strong",[e._v("Average Riding Speed: ")]),i("br"),i("h3",[e._v(e._s(((e.isMetric?e.summaryStats.distance/1e3:e.summaryStats.distance/.0254/12/5280)/e.summaryStats.moving_time*3600).toFixed(2))+e._s(e.isMetric?" kph":" mph"))])]),i("div",[i("strong",[e._v("Average Speed w/ Stops: ")]),i("br"),i("h3",[e._v(e._s(((e.isMetric?e.summaryStats.distance/1e3:e.summaryStats.distance/.0254/12/5280)/e.summaryStats.elapsed_time*3600).toFixed(2))+" "+e._s(e.isMetric?" kph":" mph"))])]),i("div",[i("strong",[e._v("Days Riding")]),i("br"),i("h3",[e._v(e._s(e.summaryStats.day.length-1))])]),i("div",[i("strong",[e._v("Total Days")]),i("br"),i("h3",[e._v(e._s(e.days))])]),i("div",[i("strong",[e._v("Total Riding Time")]),i("br"),i("h3",[e._v(e._s((e.summaryStats.moving_time/3600).toFixed(2))+" hrs")])]),i("div",[i("strong",[e._v("Total Elapsed Time on Bike")]),i("br"),i("h3",[e._v(e._s((e.summaryStats.elapsed_time/3600).toFixed(2))+" hrs")])]),i("div",[i("strong",[e._v("Total Distance")]),i("br"),i("h3",[e._v(e._s((e.isMetric?e.summaryStats.distance/1e3:e.summaryStats.distance/.0254/12/5280).toFixed(0))+" "+e._s(e.isMetric?" km":" mi"))])])])])},b=[],k=(i("6762"),i("2fdb"),{props:{isMetric:{type:Boolean,required:!1,default:!1}},computed:{summaryStats:function(){var e={elapsed_time:0,moving_time:0,distance:0,total_elevation_gain:0,day:["2019-03-15","2019-03-16"]},t=this.$store.state.activities.reduce(function(e,t){return e.elapsed_time+=t.elapsed_time,e.moving_time+=t.moving_time,e.distance+=t.distance,e.total_elevation_gain+=t.total_elevation_gain,e.day.includes(t.start_date_local.slice(0,10))||t.name.includes("Rest Day")||e.day.push(t.start_date_local.slice(0,10)),e},e);return t},days:function(){var e=new Date(2019,2,15),t=new Date;return Math.round(Math.abs((t.getTime()-e.getTime())/864e5))}}}),M=k,O=(i("4731"),Object(h["a"])(M,g,b,!1,null,"7691824a",null));O.options.__file="Summary.vue";var w=O.exports,x=i("2f62");a["a"].use(x["a"]);var S=new x["a"].Store({state:{start:"3/12/2019",end:"11/21/2019",isMetric:!1,athlete:"",activities:[]},mutations:{setStart:function(e,t){e.start=t},setEnd:function(e,t){e.end=t},setAthlete:function(e,t){e.athlete=t},setActivities:function(e,t){e.activities=t},setMetric:function(e,t){e.isMetric=t},addActivities:function(e,t){e.activities=e.activities.append(t)}}}),A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.tableData2.length>1?i("tabulator",{staticClass:"ride-table",attrs:{columns:e.columns,tableData:e.tableData2,tabulatorSettings:e.tabulatorSettings}}):e._e()},D=[],T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"table"})},L=[],j=i("c93e"),F=i("39ab"),P=i.n(F),$={props:{columns:{type:Array,required:!0},tableData:{type:Array,required:!0},tabulatorSettings:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{tabulator:null,error:[],widths:20}},watch:{tableData:function(e,t){this.tabulator.replaceData(e)},columns:function(e,t){this.tabulator.setColumns(e)}},mounted:function(){this.tabulator=new P.a(this.$refs.table,Object(j["a"])({reactiveData:!0,data:this.tableData,columns:this.columns},this.tabulatorSettings))}},R=$,z=(i("68c2"),Object(h["a"])(R,T,L,!1,null,"166a0d51",null));z.options.__file="Tabulator.vue";var C=z.exports,N={layout:"fitDataFill"},B={components:{Tabulator:C},props:{isMetric:{type:Boolean,required:!1,default:!1}},data:function(){return{tabulatorSettings:N}},computed:{tableData2:function(){var e=this;return this.$store.state.activities.map(function(t){return{date:t.start_date_local.slice(0,10),time:t.start_date_local.slice(11,16),name:t.name,distance:e.isMetric?(t.distance/1e3).toFixed(2):(t.distance/.0254/12/5280).toFixed(2),moving_time:(t.moving_time/3600).toFixed(2),elapsed_time:(t.elapsed_time/3600).toFixed(2),total_elevation_gain:e.isMetric?t.total_elevation_gain:(t.total_elevation_gain/.0254/12).toFixed(),average_speed:e.isMetric?(3.6*t.average_speed).toFixed(1):(2.23694*t.average_speed).toFixed(1)}})},columns:function(){return[{title:"Date",field:"date",align:"left",minWidth:100},{title:"Start Time",field:"time",align:"center",headerVertical:"flip",minWidth:80},{title:"Name",field:"name",align:"left",minWidth:100,width:300,variableHeight:!0},{title:this.isMetric?"Distance (km)":"Distance (mi)",field:"distance",align:"center",headerVertical:"flip",minWidth:80},{title:"Moving Time (hrs)",field:"moving_time",align:"center",headerVertical:"flip",minWidth:80},{title:"Elapsed Time (hrs)",field:"elapsed_time",align:"center",headerVertical:"flip",minWidth:80},{title:this.isMetric?"Climbed (m)":"Climbed (ft)",field:"total_elevation_gain",align:"center",headerVertical:"flip",minWidth:80},{title:this.isMetric?"Avg Spd (kph)":"Avg Spd (mph)",field:"average_speed",align:"center",headerVertical:"flip",minWidth:80}]}}},E=B,U=(i("150f"),Object(h["a"])(E,A,D,!1,null,null,null));U.options.__file="Rides.vue";var W=U.exports,q={name:"app",store:S,components:{Leaflet:y,Summary:w,Rides:W},data:function(){return{markersOn:!0,polylinesOn:!0,isMetric:!0}}},V=q,I=(i("034f"),Object(h["a"])(V,r,n,!1,null,null,null));I.options.__file="App.vue";var J=I.exports,H=i("bb71");i("bf40");a["a"].use(H["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(J)}}).$mount("#app")},"68c2":function(e,t,i){"use strict";var a=i("d520"),r=i.n(a);r.a},"7d92":function(e,t,i){},a5f8:function(e,t,i){},adf7:function(e,t,i){},c2f8:function(e,t,i){},d520:function(e,t,i){},df6a:function(e,t,i){"use strict";var a=i("adf7"),r=i.n(a);r.a}});
//# sourceMappingURL=app.250c6ba4.js.map