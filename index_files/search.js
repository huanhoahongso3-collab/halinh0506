google.maps.__gjsload__('search', function(_){var lta=function(){},fB=function(a){this.setValues(a);_.rj("search_impl")},nta=function(a){let b=_.Rl,c=-1;a.tiles.forEach(e=>{e.zoom>c&&(b=e.fi,c=e.zoom)});if(c===-1)return[];const d=[];a.Wu().forEach(e=>{e.a&&e.a.length>=2&&d.push(new mta(e,b,c))});return d},ota=function(a){const b=[];a.data.forEach(c=>{b.push(...nta(c))});return b};_.Ga(lta,_.Pk);var pta={["1"]:{}},mta=class{constructor(a,b,c){this.sn=b;this.zoom=c;this.bounds=this.anchor=null;this.Eg=pta;this.source=a;this.featureId=this.source.id||"0";this.infoWindowOffset=(this.source.io||[]).length===2?new google.maps.Point(this.source.io[0],this.source.io[1]):null}getAnchor(){if(!this.anchor){const a=1<<this.zoom;this.anchor=_.sm(new _.Dm((this.sn.x*256+this.source.a[0])/a,(this.sn.y*256+this.source.a[1])/a)).toJSON()}return this.anchor}getCompleteBounds(){return this.getBounds().reduce((a,
b)=>{a.extendByBounds(b);return a},_.wm(0,0,0,0))}getBounds(){if(this.bounds===null){this.bounds=[];const a=this.source.bb||[];if(a.length%4===0)for(let b=0;b<a.length;b+=4){const c=this.bounds[this.bounds.length-1],d=_.wm(a[b],a[b+1],a[b+2],a[b+3]);c&&c.equals(d)||this.bounds.push(d)}}return[...this.bounds]}getExtendedContent(a){if(this.Eg===pta)try{this.Eg=this.source.c?JSON.parse(this.source.c):{}}catch(b){this.Eg={}}return this.Eg[a]??{}}getFeatureName(){return this.getExtendedContent("1")?.title??
null}isTransitStation(){return this.getExtendedContent("1")?.is_transit_station??!1}};var qta=new WeakSet;_.Ga(fB,lta);fB.prototype.changed=function(){const a=this;var b=this.get("map");let c=null;b&&(c=b.__gm,b=c.get("blockingLayerCount")||0,c.set("blockingLayerCount",b+1),c.set("disableLabelingHysteresis",this.get("disableLabelingHysteresis")),c.set("tilePrefetchEnabled",this.get("tilePrefetchEnabled")));_.rj("search_impl").then(d=>{d.uH(a);c&&(d=c.get("blockingLayerCount")||0,c.set("blockingLayerCount",d-1))})};
fB.enableFeatureMapEventsRasterOnly=function(a){if(_.hn[15]){var b=a.__gm.Xg;if(!qta.has(a)){qta.add(a);var c=[],d=(f,g)=>{f=nta(f);f.length&&_.Mk(a,g,f)},e=()=>{for(;c.length>0;)c.pop().remove();b.forEach(f=>{if(f=f.data)c.push(_.Ak(f,"insert",g=>d(g,"addfeatures"))),c.push(_.Ak(f,"remove",g=>d(g,"removefeatures")))})};b.addListener("insert_at",e);b.addListener("remove_at",e);b.addListener("set_at",e);e()}(()=>{const f=[];b.forEach(g=>{f.push(...ota(g))});f.length&&_.Mk(a,"addfeatures",f)})()}};
_.Ea("module$contents$mapsapi$onionLayers$search$googleLayer_GoogleLayer.enableFeatureMapEventsRasterOnly",fB.enableFeatureMapEventsRasterOnly);_.tl(fB.prototype,{map:_.mp});_.pa.google.maps.search={GoogleLayer:fB};_.sj("search",{});});
