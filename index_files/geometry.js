google.maps.__gjsload__('geometry', function(_){var Ypa=function(a,b){return Math.abs(_.Ej(b-a,-180,180))},Zpa=function(a,b,c,d,e){if(!d){c=Ypa(a.lng(),c)/Ypa(a.lng(),b.lng());if(!e)return e=Math.sin(_.ej(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.ej(b.lat())),_.fj(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.Dl(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.ej(a.lat());a=_.ej(a.lng());d=_.ej(b.lat());b=_.ej(b.lng());c=_.ej(c);return _.Ej(_.fj(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},$pa=function(a,b){a=new _.mk(a,!1);b=new _.mk(b,!1);return a.equals(b)},aqa=function(a,b,c){a=_.qk(a);c=c||1E-9;const d=_.Ej(a.lng(),-180,180),e=b instanceof _.Tn,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(let t=0,u=g.getLength();t<u;++t){const w=g.getAt(t),x=w.getLength(),z=e?x:x-1;for(let B=0;B<z;++B){var h=w.getAt(B);const D=w.getAt((B+
1)%x);if($pa(h,a)||$pa(D,a))return!0;var k=_.Ej(h.lng(),-180,180),m=_.Ej(D.lng(),-180,180);const F=Math.max(k,m),I=Math.min(k,m);if(k=Math.abs(_.Ej(k-m,-180,180))<=1E-9&&(Math.abs(_.Ej(k-d,-180,180))<=c||Math.abs(_.Ej(m-d,-180,180))<=c)){k=a.lat();m=Math.min(h.lat(),D.lat())-c;var p=Math.max(h.lat(),D.lat())+c;k=k>=m&&k<=p}if(k)return!0;if(F-I>180?d+c>=F||d-c<=I:d+c>=I&&d-c<=F)if(h=Zpa(h,D,d,f,b),Math.abs(h-a.lat())<c)return!0}}return!1},bqa=function(a,b){const c=[];let d=[0,0],e;for(let f=0,g=_.zj(a);f<
g;++f)e=b?b(a[f]):a[f],oz.jF(e[0]-d[0],c),oz.jF(e[1]-d[1],c),d=e;return c.join("")},pz=class{};pz.isLocationOnEdge=aqa;
pz.containsLocation=function(a,b){a=_.qk(a);const c=_.Ej(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs");var f=b.get("map");f=!d&&f?f.getProjection():null;let g=!1;for(let k=0,m=e.getLength();k<m;++k){const p=e.getAt(k);for(let t=0,u=p.getLength();t<u;++t){const w=p.getAt(t),x=p.getAt((t+1)%u);var h=_.Ej(w.lng(),-180,180);const z=_.Ej(x.lng(),-180,180),B=Math.max(h,z);h=Math.min(h,z);(B-h>180?c>=B||c<h:c<B&&c>=h)&&Zpa(w,x,c,d,f)<a.lat()&&(g=!g)}}return g||aqa(a,b)};var oz={decodePath:function(a){const b=_.zj(a),c=Array(Math.floor(a.length/2));let d=0,e=0,f=0,g;for(g=0;d<b;++g){let h=1,k=0,m;do m=a.charCodeAt(d++)-63-1,h+=m<<k,k+=5;while(m>=31);e+=h&1?~(h>>1):h>>1;h=1;k=0;do m=a.charCodeAt(d++)-63-1,h+=m<<k,k+=5;while(m>=31);f+=h&1?~(h>>1):h>>1;c[g]=new _.mk(e*1E-5,f*1E-5,!0)}c.length=g;return c}};_.Ea("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath",oz.decodePath);
oz.encodePath=function(a){a instanceof _.um&&(a=a.getArray());a=(0,_.Vk)(a);return bqa(a,function(b){return[Math.round(b.lat()*1E5),Math.round(b.lng()*1E5)]})};_.Ea("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath",oz.encodePath);oz.jF=function(a,b){for(a=a<0?~(a<<1):a<<1;a>=32;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63))};var cqa={encoding:oz,spherical:_.iq,poly:pz};_.pa.google.maps.geometry=cqa;_.sj("geometry",cqa);});
