(window.webpackJsonp=window.webpackJsonp||[]).push([[88,265,296],{1233:function(e,t,n){var o=n(158);e.exports=(o.default||o).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,o,a){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:!0})},1358:function(e,t,n){var o=n(158);e.exports=(o.default||o).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,o,a){var i,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return(null!=(i=e.invokePartial(r(o,"headers/_TitleWithSubAndIcon"),t,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"plug",type:null!=t?r(t,"type"):t,title:null!=t?r(t,"id"):t},data:a,helpers:n,partials:o,decorators:e.decorators}))?i:"")+'\n<div class="panel panel-default">\n    <div class="panel-body ">\n        <form data-json-form></form>\n    </div>\n    <div class="panel-footer clearfix">\n'+(null!=(i=e.invokePartial(r(o,"form/_JSONSchemaFooter"),t,{name:"form/_JSONSchemaFooter",data:a,indent:"        ",helpers:n,partials:o,decorators:e.decorators}))?i:"")+"    </div>\n</div>\n"},usePartial:!0,useData:!0})},1403:function(e,t,n){"use strict";n(143),n(63),n(33),n(27),n(19),n(34),n(1413);var o=n(2),a=n.n(o),i=n(14),r=n.n(i),s=n(100),c=n.n(s),u=n(1414),l=n.n(u),d=n(1233),f=n.n(d),p=n(1416),h=n(214),m=n(142),v=n(1411);function b(e,t){var n=t.schema,o=t.values,a=t.hideInheritance,i=void 0!==a&&a;l.a.plugins.selectize.enable=!0,l.a.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]},l.a.defaults.themes.openam=p.a.getTheme(6,4);var s=n.toFlatWithInheritanceMeta(o),c=o.removeInheritance();s=s.raw,c=c.raw;var u=new l.a(e[0],{disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,hide_inheritance:i,iconlib:"fontawesome4",schema:s,theme:"openam"});return function(e){var t=f()();r()(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,n){var o=r()(t);o.popoverclickaway({container:"#content",html:!0,placement:"auto top",content:n.innerHTML}).click(function(e){e.preventDefault()}),r()(n).parent().append(o)})}(e),function(e){r()(e).find("input:password").attr("placeholder",r.a.t("common.form.passwordPlaceholder"))}(e),u.setValue(c),u}n.n(v).a.define("enum_plugin",function(e){var t,n=this,o=arguments,i=e.schema,r=a.a.indexOf(i.enum,"");r>-1?(n.plugins.settings.dropdown_header={title:i.options.enum_titles[r]},n.require("dropdown_header"),n.setup=(t=n.setup,function(){t.apply(n,o),n.$dropdown.on("mousedown",".selectize-dropdown-header",function(){return n.setValue(""),n.close(),n.blur(),!1})})):function(){var e;n.deleteSelection=(e=n.deleteSelection,function(t){return!!function(e){return!e||8!==e.keyCode}(t)&&e.apply(n,o)})}()});var y=c.a.View.extend({className:"jsoneditor-block",initialize:function(e){if(!(e.schema instanceof h.a))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof m.a))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=a.a.defaults(e,{displayTitle:!0})},toggleInheritance:function(e,t,n){this.options.values=this.options.values.extend(this.getData()),this.options.values=this.options.values.addValueForPath([e,"inherited"],n),this.options.values=this.options.values.addValueForPath([e,"value"],t),this.render()},render:function(){this.$el.empty();var e=a.a.get(this.jsonEditor,"watchlist");return this.jsonEditor=b(this.$el,this.options),this.jsonEditor.watchlist=e,this.options.displayTitle||this.$el.find("[data-header]").parent().hide(),this},isValid:function(){return 0===this.jsonEditor.validate().length},getData:function(){var e=new m.a(this.jsonEditor.getValue());return this.options.schema.hasDefaultProperties()&&(e=e.pick(this.options.schema.raw.defaultProperties)),(e=(e=e.nullifyEmptyPasswords(this.options.schema.getPasswordKeys())).addInheritance(this.options.values.raw)).raw},setData:function(e){this.options.values=this.options.values.extend(e)},watch:function(e,t){this.jsonEditor.watch(e,t)},destroy:function(){var e=this,t=a.a.keys(this.jsonEditor.watchlist);a.a.forEach(t,function(t){e.jsonEditor.unwatch(t)}),this.jsonEditor.destroy(),this.jsonEditor=null}});t.a=y},1408:function(e,t,n){"use strict";n(33),n(27),n(34);var o=n(2),a=n.n(o),i=n(100),r=n.n(i),s=n(1403),c=n(214),u=n(142);var l=r.a.View.extend({initialize:function(e){if(!(e.schema instanceof c.a))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof u.a))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=a.a.defaults(e,{showOnlyRequiredAndEmpty:!1,showOnlyRequired:!1})},render:function(){var e,t=this.options.schema,n=!0;if(this.options.showOnlyRequiredAndEmpty){var o=this.options.schema.getRequiredPropertyKeys(),i=this.options.values.getEmptyValueKeys(t),r=a.a.intersection(o,i);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(r),n=!a.a.isEmpty(r)}else if(this.options.showOnlyRequired){var c=this.options.schema.getRequiredPropertyKeys();t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(c),n=!a.a.isEmpty(c)}return this.subview=new s.a({displayForm:n,hideInheritance:this.options.hideInheritance,displayTitle:!1,el:this.$el,schema:t,values:this.options.values}).render(),(e=this.options.onRendered)&&setTimeout(e,0),this},isValid:function(){return!this.subview||this.subview.isValid()},getData:function(){var e;if(this.subview)return(e=this.subview).getData.apply(e,arguments)},setData:function(e){if(this.subview)return this.options.values=this.options.values.extend(e),this.subview.setData(e)},watch:function(e,t){this.subview&&this.subview.watch(e,t)},destroy:function(){this.subview&&(this.subview.destroy(),this.subview=null)}});t.a=l},1423:function(e,t,n){"use strict";n(143),n(114);var o=n(2),a=n(1431),i=n.n(a);function r(e){e.data.dialog.$modalContent.find("[autofocus]").focus(),function(e){Object(o.each)(e.options.buttons,function(t){!0===t.disabled&&e.getButton(t.id).disable()})}(e.data.dialog)}var s={};s.TYPE_DEFAULT=i.a.TYPE_DEFAULT,s.TYPE_INFO=i.a.TYPE_INFO,s.TYPE_PRIMARY=i.a.TYPE_PRIMARY,s.TYPE_SUCCESS=i.a.TYPE_SUCCESS,s.TYPE_WARNING=i.a.TYPE_WARNING,s.TYPE_DANGER=i.a.TYPE_DANGER,s.SIZE_NORMAL=i.a.SIZE_NORMAL,s.SIZE_SMALL=i.a.SIZE_SMALL,s.SIZE_WIDE=i.a.SIZE_WIDE,s.SIZE_LARGE=i.a.SIZE_LARGE,Object(o.each)(["show","confirm","warning","danger","success"],function(e){s[e]=function(t){var n=new i.a[e](t),o=t.type||s.TYPE_PRIMARY;return o=o.replace("type","text"),n.getModalHeader().addClass(o),n.getModal().on("shown.bs.modal",{dialog:n},r),n}}),t.a=s},1427:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(31);var o=n(16),a=n(1423);function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object(o.b)("common.form.delete");a.a.confirm({type:a.a.TYPE_DANGER,title:"".concat(Object(o.b)("common.form.confirm")," ").concat(n),message:e.message?e.message:Object(o.b)("console.common.confirmDeleteText",{type:e.type}),btnOKLabel:n,btnOKClass:"btn-danger",callback:function(e){e&&t&&t()}})}},1429:function(e,t,n){"use strict";n(31);function o(e,t){console.warn("".concat(e," is marked as deprecated. \nPlease use ").concat(t))}n(143);var a=n(1427),i={showConfirmationBeforeDeleting:function(e,t){return o("FormHelper.showConfirmationBeforeDeleting","org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction"),Object(a.a)(e,t)},setActiveTab:function(e,t){return o("FormHelper.setActiveTab","org/forgerock/openam/ui/admin/utils/form/setActiveTab"),void((n=e)&&n.activeTabId&&n.$el.find('.nav-tabs a[href="'.concat(n.activeTabId,'"]')).tab("show"));var n}};t.a=i},1490:function(e,t,n){"use strict";n.d(t,"f",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"i",function(){return u}),n.d(t,"h",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return f}),n.d(t,"e",function(){return p}),n.d(t,"g",function(){return h}),n.d(t,"a",function(){return m});n(31),n(373),n(374);var o=n(122),a=n(23),i=n(38),r=new o.a("".concat(a.a.host).concat(a.a.context,"/json"));function s(e,t,n){return r.serviceCall({url:Object(i.a)("/users/".concat(n,"/services/").concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}function c(e,t,n){return r.serviceCall({url:Object(i.a)("/users/".concat(n,"/services/").concat(t),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})}function u(e,t,n,o){return r.serviceCall({url:Object(i.a)("/users/".concat(n,"/services/").concat(t),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},data:o.toJSON()})}function l(e,t,n){return r.serviceCall({url:Object(i.a)("/users/".concat(t,"/services?_action=unassignServices"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify({serviceNames:n})})}function d(e,t){return r.serviceCall({url:Object(i.a)("/users/".concat(t,"/services?_action=getAllTypes"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}function f(e,t){return r.serviceCall({url:Object(i.a)("/users/".concat(t,"/services?_action=nextdescendents"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",errorsHandlers:{internalServerError:{status:500}}})}function p(e,t){return r.serviceCall({url:Object(i.a)("/users/".concat(t,"/services?_action=getCreatableTypes"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",errorsHandlers:{internalServerError:{status:500}}})}function h(e,t,n){return r.serviceCall({url:Object(i.a)("/users/".concat(encodeURIComponent(n),"/services/").concat(encodeURIComponent(t),"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.1,resource=1.0"},type:"POST"})}function m(e,t,n,o){return r.serviceCall({url:Object(i.a)("/users/".concat(encodeURIComponent(t),"/services/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.1,resource=1.0"},type:"POST",data:JSON.stringify(o)})}},1687:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(33),n(53),n(54),n(27),n(67),n(62),n(35),n(34);var o=n(2),a=n(16),i=n(1490),r=n(123),s=n(1408),c=n(1429),u=n(214),l=n(142),d=n(52),f=n(41),p=n(1358),h=n.n(p);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,a=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=y(this,w(t).call(this))).template=h.a,e.events={"click [data-delete]":"onDelete","click [data-save]":"onSave"},e}var n,p,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r["a"]),n=t,(p=[{key:"render",value:function(e){var t=this,n=v(e,3),r=n[0],c=n[1],d=n[2];this.data={id:c,headerActions:[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}]},this.realm=r,this.type=d,Promise.all([Object(i.f)(r,d,c),Object(i.b)(r,d,c),Object(i.d)(r,c)]).then(function(e){var n=v(e,3),i=n[0],r=n[1],c=n[2];t.schema=new u.a(i),t.values=new l.a(r),t.data.type=Object(a.b)("console.identities.users.edit.services.edit.subtitle",{type:Object(o.result)(Object(o.find)(c,{_id:t.type}),"name")}),t.parentRender(function(){t.view=new s.a({schema:t.schema,values:t.values}),t.view.setElement("[data-json-form]"),t.view.render()})})}},{key:"onSave",value:function(){this.view.isValid()?(this.values=this.values.extend(this.view.getData()),Object(i.i)(this.realm,this.type,this.data.id,this.values).then(function(){d.a.addMessage({message:Object(a.b)("config.messages.CommonMessages.changesSaved")})},function(e){d.a.addMessage({response:e,type:d.a.TYPE_DANGER})})):d.a.addMessage({message:Object(a.b)("common.form.validation.errorsNotSaved"),type:d.a.TYPE_DANGER})}},{key:"onDelete",value:function(){var e=this;c.a.showConfirmationBeforeDeleting({message:Object(a.b)("console.common.confirmDeleteItem")},function(){Object(i.h)(e.realm,e.data.id,[e.type]).then(function(){d.a.addMessage({message:Object(a.b)("config.messages.CommonMessages.changesSaved")}),f.a.routeTo(f.a.configuration.routes.realmsIdentitiesUsersEdit,{args:Object(o.map)([e.realm,e.data.id],encodeURIComponent),trigger:!0})},function(e,t){d.a.addMessage({response:t,type:d.a.TYPE_DANGER})})})}}])&&b(n.prototype,p),m&&b(n,m),t}();t.default=O}}]);
//# sourceMappingURL=88.4c115d81b8.js.map