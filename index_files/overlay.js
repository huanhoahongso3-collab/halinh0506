google.maps.__gjsload__('overlay', function(_){var Kwa=function(){},MB=function(a){a.eB=a.eB||new Kwa;return a.eB},Lwa=function(a){this.Eg=new _.Um(()=>{const b=a.eB;if(a.getPanes()){if(a.getProjection()){if(!b.Hg&&a.onAdd)a.onAdd();b.Hg=!0;a.draw()}}else{if(b.Hg)if(a.onRemove)a.onRemove();else a.remove();b.Hg=!1}},0)},Nwa=function(a,b){const c=MB(a);let d=c.Fg;d||(d=c.Fg=new Lwa(a));_.Hb(c.Eg||[],_.Ck);var e=c.Ig=c.Ig||new _.Wpa;const f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");e.bindTo("projection",
b);e.bindTo("projectionTopLeft",f);e=c.Kg=c.Kg||new Mwa(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=()=>_.Vm(d.Eg);c.Eg=[_.Ak(a,"panes_changed",e),_.Ak(f,"zoom_changed",e),_.Ak(f,"offset_changed",e),_.Ak(b,"projection_changed",e),_.Ak(f,"projectioncenterq_changed",e)];_.Vm(d.Eg);b instanceof _.il?(_.xl(b,"Ox"),_.L(b,148440)):b instanceof _.Ol&&(_.xl(b,"Oxs"),_.L(b,181451))},Owa=function(a){const b=
MB(a);var c=b.Ig;c&&c.unbindAll();(c=b.Kg)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Eg&&b.Eg.forEach(d=>{_.Ck(d)});b.Eg=null;b.Fg&&(_.Wm(b.Fg.Eg),b.Fg=null)},Twa=function(a){if(a){var b=a.getMap();if(Pwa(a)!==b&&b&&b instanceof _.il){const c=b.__gm;c.overlayLayer?a.__gmop=new Qwa(b,a,c.overlayLayer):c.Fg.then(({ah:d})=>{const e=new Rwa(b,d);d.Fi(e);c.overlayLayer=e;Swa(a);Twa(a)})}}},Swa=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.Eg.unbindAll(),b.Eg.set("panes",
null),b.Eg.set("projection",null),b.Hg.Nl(b),b.Fg&&(b.Fg=!1,b.Eg.onRemove?b.Eg.onRemove():b.Eg.remove()))}},Pwa=function(a){return(a=a.__gmop)?a.map:null},Uwa=function(a,b){a.Eg.get("projection")!=b&&(a.Eg.bindTo("panes",a.map.__gm),a.Eg.set("projection",b))};var Mwa=class extends _.Pk{constructor(a){super();this.projection=a}changed(a){a!=="outProjection"&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.Gj(this.get("zoom"))),a===!this.get("outProjection")&&this.set("outProjection",a?this.projection:null))}};var NB={};_.Ga(Lwa,_.Pk);NB.Rl=function(a){if(a){var b=a.getMap();(MB(a).Jg||null)!==b&&(b&&Nwa(a,b),MB(a).Jg=b)}};NB.Nl=function(a){Owa(a);delete MB(a).Jg};NB.IN=Kwa;var OB={},Qwa=class{constructor(a,b,c){this.map=a;this.Eg=b;this.Hg=c;this.Fg=!1;_.xl(this.map,"Ox");_.L(this.map,148440);c.Rl(this)}draw(){this.Fg||(this.Fg=!0,this.Eg.onAdd&&this.Eg.onAdd());this.Eg.draw&&this.Eg.draw()}},Rwa=class{constructor(a,b){this.Ig=a;this.Hg=b;this.Eg=null;this.Fg=[]}dispose(){}Wh(a,b,c,d,e,f,g,h){const k=this.Eg=this.Eg||new _.uy(this.Ig,this.Hg,()=>{});k.Wh(a,b,c,d,e,f,g,h);for(const m of this.Fg)Uwa(m,k),m.draw()}Rl(a){this.Fg.push(a);this.Eg&&Uwa(a,this.Eg);this.Hg.refresh()}Nl(a){_.Rb(this.Fg,
a)}};OB.Rl=Twa;OB.Nl=Swa;_.sj("overlay",{TC:function(a){if(a){(0,NB.Nl)(a);(0,OB.Nl)(a);var b=a.getMap();b&&(b instanceof _.il?(0,OB.Rl)(a):(0,NB.Rl)(a))}},preventMapHitsFrom:a=>{_.ju(a,{Il:({event:b})=>{_.qs(b.Eg)},ik:b=>_.Vt(b),Hq:b=>_.Wt(b),kl:b=>_.Wt(b),Ck:b=>_.Xt(b)}).zs(!0)},preventMapHitsAndGesturesFrom:a=>{a.addEventListener("click",_.yk);a.addEventListener("contextmenu",_.yk);a.addEventListener("dblclick",_.yk);a.addEventListener("mousedown",_.yk);a.addEventListener("mousemove",_.yk);a.addEventListener("MSPointerDown",
_.yk);a.addEventListener("pointerdown",_.yk);a.addEventListener("touchstart",_.yk);a.addEventListener("wheel",_.yk)}});});
