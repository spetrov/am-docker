(window.webpackJsonp=window.webpackJsonp||[]).push([[135,194],{1292:function(e,t,n){var r=n(158);e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return(null!=(o=e.invokePartial(i(r,"headers/_TitleWithSubAndIcon"),t,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"male",type:"console.applications.agents.web.agents.edit.type",title:null!=t?i(t,"id"):t},data:a,helpers:n,partials:r,decorators:e.decorators}))?o:"")+"\n<form data-json-form></form>\n"},usePartial:!0,useData:!0})},1678:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(31),n(143),n(185),n(33),n(50),n(368),n(53),n(54),n(27),n(67),n(62),n(35),n(114),n(34),n(271);var r=n(2),a=n(16),o=n(14),i=n.n(o),u=n(1419),c=n(1412),s=n(1545),l=n(1410),f=n(1409),p=n(123),h=n(1408),g=n(214),b=n(142),d=n(52),v=n(1440),m=n(41),w=n(1446),y=n(1441),O=n(1442),j=n(1292),S=n.n(j);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var N=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=I(this,_(t).call(this))).template=S.a,e.events={"click [data-delete]":"onDelete","click [data-inherit-value]":"toggleInheritance","click [data-save]":"onSave"},e}var n,o,j;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,p["a"]),n=t,(o=[{key:"getJSONSchemaView",value:function(){return this.subview.getBody()}},{key:"getGroupValues",value:function(e,t){return e?Object(c.b)(t,f.h,e):i.a.Deferred().resolve({})}},{key:"render",value:function(e){var t=this,n=P(e,2),o=n[0],l=n[1];this.data={id:l,headerActions:[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}]},this.realm=o,Promise.all([Object(u.e)(o,f.h),Object(u.b)(o,f.h,l),Object(c.c)(o,f.h)]).then(function(e){var n=P(e,3),u=n[0],c=n[1];!function(e,t){var n=Object(r.get)(e,"properties.globalWebAgentConfig.properties.agentgroup");if(n){var o=Object(r.map)(t.result,"_id"),i=[""].concat(C(o)),u=[Object(a.b)("common.form.unassigned")].concat(C(o));n.additional={alert:"alert-info"},n.enum=i,n.options={enum_titles:u}}else console.error('[EditWebAgent] Unable to add available Web Agent Groups to "globalWebAgentConfig.properties.agentgroup" property.')}(u,n[2]),c=Object(s.b)(c,"globalWebAgentConfig.cdssoRootUrl"),t.schema=new g.a(u),t.values=new b.a(c),t.nonInheritedValues=Object(r.cloneDeep)(t.values);var l=function(){var e=function(e,t){var n=t.replace(".",".properties."),a=Object(r.get)(e.raw.properties,n);return e.hasInheritance(a)},n=function(e,n){var r=t.getJSONSchemaView();r.options.hideInheritance=!e,r.setData(n),r.render()},a=t.getJSONSchemaView(),u=i()("[name='root[agentgroup]']",a.subview.jsonEditor.element).val(),c=t.values.raw.globalWebAgentConfig.agentgroup;u?u===c?n(u):t.getGroupValues(u,o).then(function(a){t.defaultValues=new b.a(a),t.values=t.values.mapProperties(function(n,o){if(e(t.schema,o)){var i=Object(r.get)(n,"inherited")?Object(r.get)(a,o):n.value;return{inherited:n.inherited,value:i}}return n}),t.values.raw.globalWebAgentConfig.agentgroup=u,n(u,t.values.raw[t.getSection()])}):(t.values=t.nonInheritedValues.mapProperties(function(n,r){return e(t.schema,r)?{inherited:!1,value:n.value}:n}),t.values.raw.globalWebAgentConfig.agentgroup=u,n(u,t.values.raw[t.getSection()]))},f=Object(r.get)(t.values.raw,"globalWebAgentConfig.agentgroup");t.getGroupValues(f,o).then(function(e){t.defaultValues=new b.a(e),t.parentRender(function(){var e,n=(e=t.schema,Object(r.chain)(e.raw.properties).map(function(e,t){return{id:t,order:e.propertyOrder,title:e.title}}).sortBy("order").value());t.subview=new y.a({tabs:n,createBody:function(e){var n=Object(r.get)(t.values.raw,"globalWebAgentConfig.agentgroup"),a=new h.a({hideInheritance:Object(r.isEmpty)(n),schema:new g.a(t.schema.raw.properties[e]),values:new b.a(Object(r.cloneDeep)(t.values.raw)[e]),onRendered:function(){a.watch("root.agentgroup",l)}});return a},createFooter:function(){return new v.a({partial:"form/_JSONSchemaFooter"})}});var a={properties:t.schema.raw.properties,onChange:function(e,n){t.subview.setTabId(e),Object(w.a)(t.$el.find('[data-schemapath="root.'.concat(n,'"]')))}};t.$el.find("[data-tab-search]").append(new O.a(a).render().$el),t.subview.setElement("[data-json-form]"),t.subview.render()})})})}},{key:"getSection",value:function(){return this.subview.getTabId()}},{key:"updateValues",value:function(){var e,t,n;this.values=this.values.extend((e={},t=this.getSection(),n=this.getJSONSchemaView().getData(),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)),this.nonInheritedValues=Object(r.cloneDeep)(this.values)}},{key:"onSave",value:function(){if(this.getJSONSchemaView().isValid()){this.updateValues();var e=this.values.removeNullPasswords(this.schema),t=Object(s.a)(e.raw,"globalWebAgentConfig.cdssoRootUrl");Object(u.g)(this.realm,f.h,t,this.data.id).then(function(){d.a.addMessage({message:Object(a.b)("config.messages.CommonMessages.changesSaved")})},function(e){d.a.addMessage({response:e,type:d.a.TYPE_DANGER})})}else d.a.addMessage({message:Object(a.b)("common.form.validation.errorsNotSaved"),type:d.a.TYPE_DANGER})}},{key:"toggleInheritance",value:function(e){var t=e.currentTarget,n=t.getAttribute("data-schemapath").slice(5),r=!("true"===t.getAttribute("data-inherit-value")),a=r?this.defaultValues.raw[this.getSection()][n]:this.nonInheritedValues.raw[this.getSection()][n].value;r&&(this.nonInheritedValues.raw[this.getSection()][n].value=this.getJSONSchemaView().getData()[n].value),this.getJSONSchemaView().subview.toggleInheritance(n,a,r),this.values=this.values.addValueForPath("".concat(this.getSection(),".").concat(n),{inherited:r,value:a})}},{key:"onDelete",value:function(){var e=this;Object(l.b)({names:[this.data.id],objectName:"agent",onConfirm:function(){var t,n=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(u.f)(e.realm,f.h,[e.data.id]);case 3:m.a.routeTo(m.a.configuration.routes.realmsApplicationsAgentsWeb,{args:[encodeURIComponent(e.realm)],trigger:!0}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),d.a.addMessage({response:t.t0,type:d.a.TYPE_DANGER});case 9:case"end":return t.stop()}},t,null,[[0,6]])}),function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function i(e){V(o,r,a,i,u,"next",e)}function u(e){V(o,r,a,i,u,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}()})}}])&&k(n.prototype,o),j&&k(n,j),t}();t.default=N}}]);
//# sourceMappingURL=135.be63019934.js.map