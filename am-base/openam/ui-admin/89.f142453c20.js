(window.webpackJsonp=window.webpackJsonp||[]).push([[89,141,273,295,296],{1233:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:!0})},1235:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({1:function(e,t,n,a,o){return"checked"},3:function(e,t,n,a,o){return"block-header-inactive"},5:function(e,t,n,a,o){return'        <span class="text-muted">schema.raw.description</span>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="form-inline">\n    <label class="am-toggle-switch pull-right">\n        <input data-json-editor-toggle type="checkbox" '+(null!=(r=s(n,"if").call(i,null!=t?s(t,"enablePropertyValue"):t,{name:"if",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:10,column:55},end:{line:10,column:96}}}))?r:"")+' />\n        <span />\n    </label>\n\n    <h3 class="block-header '+(null!=(r=s(n,"unless").call(i,null!=t?s(t,"enablePropertyValue"):t,{name:"unless",hash:{},fn:e.program(3,o,0),inverse:e.noop,data:o,loc:{start:{line:14,column:28},end:{line:14,column:91}}}))?r:"")+'">\n        '+e.escapeExpression(e.lambda(null!=(r=null!=(r=null!=t?s(t,"schema"):t)?s(r,"raw"):r)?s(r,"title"):r,t))+"\n    </h3>\n\n"+(null!=(r=s(n,"if").call(i,null!=(r=null!=(r=null!=t?s(t,"schema"):t)?s(r,"raw"):r)?s(r,"description"):r,{name:"if",hash:{},fn:e.program(5,o,0),inverse:e.noop,data:o,loc:{start:{line:18,column:4},end:{line:20,column:11}}}))?r:"")+"</div>\n\n<div data-toggleable-json-editor/>"},useData:!0})},1240:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"alert-"+e.escapeExpression("function"==typeof(r=null!=(r=i(n,"type")||(null!=t?i(t,"type"):t))?r:e.hooks.helperMissing)?r.call(null!=t?t:e.nullContext||{},{name:"type",hash:{},data:o,loc:{start:{line:8,column:36},end:{line:8,column:44}}}):r)},3:function(e,t,n,a,o){var r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">'+e.escapeExpression((r(n,"t")||t&&r(t,"t")||e.hooks.helperMissing).call(null!=t?t:e.nullContext||{},"console.common.form.close",{name:"t",hash:{},data:o,loc:{start:{line:10,column:139},end:{line:10,column:172}}}))+"</span></button>"},5:function(e,t,n,a,o){return'            <i class="fa fa-check-circle-o"></i>\n'},7:function(e,t,n,a,o){return'            <i class="fa fa-exclamation-circle"></i>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\x3c!--\n  Copyright 2015-2019 ForgeRock AS. All Rights Reserved\n \n  Use of this code requires a commercial software license with ForgeRock AS.\n  or with one of its affiliates. All use shall be exclusively subject\n  to such license between the licensee and ForgeRock AS.\n--\x3e\n<div class="alert '+(null!=(r=l(n,"if").call(i,null!=t?l(t,"type"):t,{name:"if",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:8,column:18},end:{line:8,column:51}}}))?r:"")+'" role="alert">\n    <div class="media">\n        '+(null!=(r=l(n,"if").call(i,null!=t?l(t,"dismissable"):t,{name:"if",hash:{},fn:e.program(3,o,0),inverse:e.noop,data:o,loc:{start:{line:10,column:8},end:{line:10,column:195}}}))?r:"")+'\n        <div class="media-left" href="#">\n'+(null!=(r=(l(n,"equals")||t&&l(t,"equals")||s).call(i,null!=t?l(t,"type"):t,"success",{name:"equals",hash:{},fn:e.program(5,o,0),inverse:e.program(7,o,0),data:o,loc:{start:{line:12,column:12},end:{line:16,column:23}}}))?r:"")+'        </div>\n        <div class="media-body">\n            '+e.escapeExpression((l(n,"t")||t&&l(t,"t")||s).call(i,null!=t?l(t,"text"):t,{name:"t",hash:{},data:o,loc:{start:{line:19,column:12},end:{line:19,column:22}}}))+"\n        </div>\n    </div>\n</div>\n"},useData:!0})},1366:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,l=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                    <label class="control-label" for="serviceSelection">'+l((c(n,"t")||t&&c(t,"t")||s).call(i,"console.services.edit.chooseServiceType",{name:"t",hash:{},data:o,loc:{start:{line:16,column:72},end:{line:16,column:119}}}))+'</label>\n                    <select data-service-selection class="selectize form-control">\n                        <option disabled selected value="">'+l((c(n,"t")||t&&c(t,"t")||s).call(i,"console.services.edit.serviceTypes",{name:"t",hash:{},data:o,loc:{start:{line:18,column:59},end:{line:18,column:101}}}))+"</option>\n"+(null!=(r=c(n,"each").call(i,null!=t?c(t,"creatableTypes"):t,{name:"each",hash:{},fn:e.program(2,o,0),inverse:e.noop,data:o,loc:{start:{line:19,column:24},end:{line:21,column:33}}}))?r:"")+"                    </select>\n\n"},2:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,l=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                        <option value="'+l("function"==typeof(r=null!=(r=c(n,"_id")||(null!=t?c(t,"_id"):t))?r:s)?r.call(i,{name:"_id",hash:{},data:o,loc:{start:{line:20,column:39},end:{line:20,column:46}}}):r)+'">'+l("function"==typeof(r=null!=(r=c(n,"name")||(null!=t?c(t,"name"):t))?r:s)?r.call(i,{name:"name",hash:{},data:o,loc:{start:{line:20,column:48},end:{line:20,column:56}}}):r)+"</option>\n"},4:function(e,t,n,a,o){var r,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(r=i(n,"if").call(null!=t?t:e.nullContext||{},null!=(r=null!=t?i(t,"creatableTypes"):t)?i(r,"0"):r,{name:"if",hash:{},fn:e.program(5,o,0),inverse:e.noop,data:o,loc:{start:{line:25,column:24},end:{line:30,column:31}}}))?r:""},5:function(e,t,n,a,o){var r,i=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                        <label class=" control-label" for="serviceSelection">'+i((s(n,"t")||t&&s(t,"t")||e.hooks.helperMissing).call(null!=t?t:e.nullContext||{},"common.form.type",{name:"t",hash:{},data:o,loc:{start:{line:26,column:77},end:{line:26,column:101}}}))+'</label>\n                        <div class="">\n                            <input type="text" id="serviceSelection" class="form-control" value="'+i(e.lambda(null!=(r=null!=(r=null!=t?s(t,"creatableTypes"):t)?s(r,"0"):r)?s(r,"name"):r,t))+'" readonly="true" >\n                        </div>\n'},7:function(e,t,n,a,o){return'                <div class="clearfix">\n                    <form data-json-form></form>\n                </div>\n'},9:function(e,t,n,a,o){var r,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(r=e.invokePartial(i(a,"alerts/_Alert"),t,{name:"alerts/_Alert",hash:{type:"info",text:"console.services.edit.unavaliableAlert"},data:o,indent:"                ",helpers:n,partials:a,decorators:e.decorators}))?r:""},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,l=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return(null!=(r=e.invokePartial(c(a,"headers/_Title"),t,{name:"headers/_Title",hash:{title:"console.services.edit.titleNew"},data:o,helpers:n,partials:a,decorators:e.decorators}))?r:"")+'\n<div class="panel multiple-panels panel-content">\n    <div class="panel panel-default">\n        <div class="panel-body">\n            <div class="clearfix">\n                <div class="form-group">\n'+(null!=(r=c(n,"if").call(i,null!=(r=null!=t?c(t,"creatableTypes"):t)?c(r,"1"):r,{name:"if",hash:{},fn:e.program(1,o,0),inverse:e.program(4,o,0),data:o,loc:{start:{line:15,column:20},end:{line:31,column:27}}}))?r:"")+"                </div>\n\n            </div>\n\n"+(null!=(r=c(n,"if").call(i,null!=(r=null!=t?c(t,"creatableTypes"):t)?c(r,"0"):r,{name:"if",hash:{},fn:e.program(7,o,0),inverse:e.program(9,o,0),data:o,loc:{start:{line:36,column:12},end:{line:42,column:19}}}))?r:"")+'\n        </div>\n    </div>\n\n    <div class="panel-footer clearfix">\n        <div class="pull-right">\n            <a class="btn btn-default" href="'+l((c(n,"routeTo")||t&&c(t,"routeTo")||s).call(i,"realmsServices",null!=t?c(t,"realmPath"):t,{name:"routeTo",hash:{},data:o,loc:{start:{line:49,column:45},end:{line:49,column:83}}}))+'">'+l((c(n,"t")||t&&c(t,"t")||s).call(i,"common.form.cancel",{name:"t",hash:{},data:o,loc:{start:{line:49,column:85},end:{line:49,column:111}}}))+'</a>\n            <button data-create class="btn btn-primary" type="button" disabled>'+l((c(n,"t")||t&&c(t,"t")||s).call(i,"common.form.create",{name:"t",hash:{},data:o,loc:{start:{line:50,column:79},end:{line:50,column:105}}}))+"</button>\n        </div>\n    </div>\n</div>\n"},usePartial:!0,useData:!0})},1403:function(e,t,n){"use strict";n(143),n(63),n(33),n(27),n(19),n(34),n(1413);var a=n(2),o=n.n(a),r=n(14),i=n.n(r),s=n(100),l=n.n(s),c=n(1414),u=n.n(c),p=n(1233),h=n.n(p),d=n(1416),m=n(214),f=n(142),v=n(1411);function y(e,t){var n=t.schema,a=t.values,o=t.hideInheritance,r=void 0!==o&&o;u.a.plugins.selectize.enable=!0,u.a.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]},u.a.defaults.themes.openam=d.a.getTheme(6,4);var s=n.toFlatWithInheritanceMeta(a),l=a.removeInheritance();s=s.raw,l=l.raw;var c=new u.a(e[0],{disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,hide_inheritance:r,iconlib:"fontawesome4",schema:s,theme:"openam"});return function(e){var t=h()();i()(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,n){var a=i()(t);a.popoverclickaway({container:"#content",html:!0,placement:"auto top",content:n.innerHTML}).click(function(e){e.preventDefault()}),i()(n).parent().append(a)})}(e),function(e){i()(e).find("input:password").attr("placeholder",i.a.t("common.form.passwordPlaceholder"))}(e),c.setValue(l),c}n.n(v).a.define("enum_plugin",function(e){var t,n=this,a=arguments,r=e.schema,i=o.a.indexOf(r.enum,"");i>-1?(n.plugins.settings.dropdown_header={title:r.options.enum_titles[i]},n.require("dropdown_header"),n.setup=(t=n.setup,function(){t.apply(n,a),n.$dropdown.on("mousedown",".selectize-dropdown-header",function(){return n.setValue(""),n.close(),n.blur(),!1})})):function(){var e;n.deleteSelection=(e=n.deleteSelection,function(t){return!!function(e){return!e||8!==e.keyCode}(t)&&e.apply(n,a)})}()});var b=l.a.View.extend({className:"jsoneditor-block",initialize:function(e){if(!(e.schema instanceof m.a))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof f.a))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=o.a.defaults(e,{displayTitle:!0})},toggleInheritance:function(e,t,n){this.options.values=this.options.values.extend(this.getData()),this.options.values=this.options.values.addValueForPath([e,"inherited"],n),this.options.values=this.options.values.addValueForPath([e,"value"],t),this.render()},render:function(){this.$el.empty();var e=o.a.get(this.jsonEditor,"watchlist");return this.jsonEditor=y(this.$el,this.options),this.jsonEditor.watchlist=e,this.options.displayTitle||this.$el.find("[data-header]").parent().hide(),this},isValid:function(){return 0===this.jsonEditor.validate().length},getData:function(){var e=new f.a(this.jsonEditor.getValue());return this.options.schema.hasDefaultProperties()&&(e=e.pick(this.options.schema.raw.defaultProperties)),(e=(e=e.nullifyEmptyPasswords(this.options.schema.getPasswordKeys())).addInheritance(this.options.values.raw)).raw},setData:function(e){this.options.values=this.options.values.extend(e)},watch:function(e,t){this.jsonEditor.watch(e,t)},destroy:function(){var e=this,t=o.a.keys(this.jsonEditor.watchlist);o.a.forEach(t,function(t){e.jsonEditor.unwatch(t)}),this.jsonEditor.destroy(),this.jsonEditor=null}});t.a=b},1408:function(e,t,n){"use strict";n(33),n(27),n(34);var a=n(2),o=n.n(a),r=n(100),i=n.n(r),s=n(1403),l=n(214),c=n(142);var u=i.a.View.extend({initialize:function(e){if(!(e.schema instanceof l.a))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof c.a))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=o.a.defaults(e,{showOnlyRequiredAndEmpty:!1,showOnlyRequired:!1})},render:function(){var e,t=this.options.schema,n=!0;if(this.options.showOnlyRequiredAndEmpty){var a=this.options.schema.getRequiredPropertyKeys(),r=this.options.values.getEmptyValueKeys(t),i=o.a.intersection(a,r);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(i),n=!o.a.isEmpty(i)}else if(this.options.showOnlyRequired){var l=this.options.schema.getRequiredPropertyKeys();t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(l),n=!o.a.isEmpty(l)}return this.subview=new s.a({displayForm:n,hideInheritance:this.options.hideInheritance,displayTitle:!1,el:this.$el,schema:t,values:this.options.values}).render(),(e=this.options.onRendered)&&setTimeout(e,0),this},isValid:function(){return!this.subview||this.subview.isValid()},getData:function(){var e;if(this.subview)return(e=this.subview).getData.apply(e,arguments)},setData:function(e){if(this.subview)return this.options.values=this.options.values.extend(e),this.subview.setData(e)},watch:function(e,t){this.subview&&this.subview.watch(e,t)},destroy:function(){this.subview&&(this.subview.destroy(),this.subview=null)}});t.a=u},1435:function(e,t,n){"use strict";n(33),n(50),n(27),n(34);var a=n(2),o=n.n(a),r=n(100),i=n.n(r),s=n(1403),l=(n(143),n(214)),c=n(142),u=n(1235),p=n.n(u),h=i.a.View.extend({className:"jsoneditor-block",initialize:function(e){if(!(e.schema instanceof l.a))throw new TypeError('[TogglableJSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof c.a))throw new TypeError('[TogglableJSONEditorView] "values" argument is not an instance of JSONValues.');this.options=e,this.options.enablePropertyKey=this.options.schema.getEnableKey(),this.options.enablePropertyValue=this.options.values.raw[this.options.enablePropertyKey],this.options.schema=e.schema.omit(this.options.enablePropertyKey),this.options.values=e.values.omit(this.options.enablePropertyKey)},onEnabledChange:function(e){var t=e.currentTarget.checked;this.options.enablePropertyValue=t,this.$el.find(".block-header").toggleClass("block-header-inactive"),this.options.schema.isEmpty()||(t?this.$el.find("[data-toggleable-json-editor]").slideDown(250):this.$el.find("[data-toggleable-json-editor]").slideUp(250))},render:function(){var e=p()(this.options);return this.$el.html(e),this.$el.find("[data-json-editor-toggle]").change(o.a.bind(this.onEnabledChange,this)),this.jsonEditor=new s.a({el:this.$el.find("[data-toggleable-json-editor]"),displayTitle:!1,schema:this.options.schema,values:this.options.values}),this.options.enablePropertyValue||this.$el.find("[data-toggleable-json-editor]").hide(),this.jsonEditor.render(),this},getData:function(){var e=o.a.clone(this.jsonEditor.getData());return e[this.options.enablePropertyKey]=this.options.enablePropertyValue,e}}),d=function(e){return new(e.schema.hasEnableProperty()?h:s.a)(e)},m=function(e){return Object(a.isEmpty)(e.schema.raw.defaultProperties)},f=function(e){var t=e.schema.getRequiredPropertyKeys();return Object(a.extend)(e,{schema:e.schema.addDefaultProperties(t)})},v=function(e){var t=e.schema.getRequiredPropertyKeys(),n=e.values.getEmptyValueKeys(e.schema),o=Object(a.intersection)(t,n);return Object(a.extend)(e,{schema:e.schema.addDefaultProperties(o)})},y=function(e){return Object(a.isEmpty)(e.schema.raw.defaultProperties)&&e.schema.hasEnableProperty()?Object(a.extend)(e,{schema:e.schema.getEnableProperty().addDefaultProperties([e.schema.getEnableKey()])}):e};var b=i.a.View.extend({initialize:function(e){if(!(e.schema instanceof l.a))throw new TypeError('[GroupedJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!e.schema.isCollection())throw new Error("[GroupedJSONSchemaView] Only JSONSchema collections are supported by this view.");if(!(e.values instanceof c.a))throw new TypeError('[GroupedJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=o.a.defaults(e,{showOnlyRequired:!1,showOnlyRequiredAndEmpty:!1})},render:function(){var e,t=this,n=this.options.schema.getPropertiesAsSchemas(),a=this.options.values.raw,r=this.options.schema.getKeys(!0),i=o.a.map(r,function(e){return{key:e,hideInheritance:t.options.hideInheritance,schema:n[e],values:new c.a(a[e])}});return this.options.showOnlyRequiredAndEmpty?i=o()(i).map(v).map(y).omitBy(m).value():this.options.showOnlyRequired&&(i=o()(i).map(f).map(y).omitBy(m).value()),this.displayForm=!o.a.isEmpty(i),this.subviews=o()(i).map(d).invokeMap("render").each(function(e){e.$el.appendTo(t.$el)}),(e=this.options.onRendered)&&setTimeout(e,0),this},getData:function(){var e=o.a.map(this.subviews,function(e){var t,n,a,o;return e.options.key?(n={},a=e.options.key,o=e.getData(),a in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o,t=n):t=e.getData(),t});return o.a.reduce(e,o.a.merge,{})}});t.a=b},1459:function(e,t,n){"use strict";n(31),n(33),n(50),n(373),n(144),n(27),n(67),n(35),n(34),n(374);var a=n(2),o=n.n(a),r=n(122),i=n(23),s=n(38),l=n(214),c=n(142),u=new r.a("".concat(i.a.host).concat(i.a.context,"/json")),p=function(e,t){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new l.a(e)})},h=function(e,t,n){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"/").concat(n,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new l.a(e)})};u.instance={getAll:function(e){return u.serviceCall({url:Object(s.a)("/realm-config/services?_queryFilter=true",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},get:function(e,t){return Promise.all([p(e,t),u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})]).then(function(e){return{name:e[1]._type.name,schema:e[0],values:new c.a(e[1])}})},getInitialState:function(e,t){return Promise.all([p(e,t),u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new c.a(e)})]).then(function(e){return{schema:e[0],values:e[1]}})},remove:function(e,t){var n=o.a.map([].concat(t),function(t){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"DELETE",suppressSpinner:!0})});return Promise.all(n)},update:function(e,t,n){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:n}).then(function(e){return new c.a(e)})},create:function(e,t,n){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"?_action=create"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:new c.a(n).toJSON()})}},u.type={getCreatables:function(e){return u.serviceCall({url:Object(s.a)("/realm-config/services?_action=getCreatableTypes&forUI=true",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})},subSchema:{type:{getAll:function(e,t){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"?_action=getAllTypes"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})},getCreatables:function(e,t){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"?_action=getCreatableTypes"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}},instance:{getAll:function(e,t){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"?_action=nextdescendents"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})},get:function(e,t,n,a){return Promise.all([h(e,t,n),u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"/").concat(n,"/").concat(a),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return new c.a(e)})]).then(function(e){return{schema:e[0],values:e[1]}})},getInitialState:function(e,t,n){return Promise.all([h(e,t,n),function(t,n){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"/").concat(n,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new c.a(e)})}(t,n)]).then(function(e){return{schema:e[0],values:e[1]}})},remove:function(e,t,n,a){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"/").concat(n,"/").concat(a),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"DELETE",suppressSpinner:!0})},update:function(e,t,n,a,o){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"/").concat(n,"/").concat(a),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:o})},create:function(e,t,n,a){return u.serviceCall({url:Object(s.a)("/realm-config/services/".concat(t,"/").concat(n,"?_action=create"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify(a)})}}}};t.a=u},1665:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(143),n(33),n(50),n(53),n(54),n(27),n(35),n(34);var a=n(2),o=n.n(a),r=n(14),i=n.n(r),s=n(123),l=n(1408),c=n(1435),u=n(52),p=n(41),h=n(1459),d=n(142),m=n(1366),f=n.n(m),v=n(1240),y=n.n(v);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){e.find("[data-create]").prop("disabled",!t)}var j=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=w(this,P(t).call(this))).template=f.a,e.partials={"alerts/_Alert":y.a},e.events={"click [data-create]":"onCreateClick","change [data-service-selection]":"onSelectService"},e}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,s["a"]),n=t,(a=[{key:"render",value:function(e,t){var n=this;this.data.realmPath=e[0],h.a.type.getCreatables(this.data.realmPath).then(function(e){n.data.creatableTypes=o.a.sortBy(e.result,"name"),n.parentRender(function(){n.data.creatableTypes.length>1?n.$el.find("[data-service-selection]").selectize({onInitialize:function(){this.$control_input.attr("id","serviceSelection")}}):n.data.creatableTypes[0]&&n.data.creatableTypes[0]._id&&n.selectService(n.data.creatableTypes[0]._id);t&&t()})})}},{key:"onSelectService",value:function(e){this.selectService(e.target.value)}},{key:"selectService",value:function(e){var t=this;S(this.$el,!1),e!==this.data.type&&this.jsonSchemaView&&(this.jsonSchemaView.remove(),delete this.schema),o.a.isEmpty(e)||(this.data.type=e,h.a.instance.getInitialState(this.data.realmPath,this.data.type).then(function(e){t.schema=e.schema;var n={schema:t.schema,values:e.values,showOnlyRequiredAndEmpty:!0,onRendered:function(){return S(t.$el,!0)}};t.schema.isCollection()?t.jsonSchemaView=new c.a(n):t.jsonSchemaView=new l.a(n),i()(t.jsonSchemaView.render().el).appendTo(t.$el.find("[data-json-form]"))},function(){S(t.$el,!1)}))}},{key:"onCreateClick",value:function(){var e=this,t=new d.a(this.jsonSchemaView.getData()).removeNullPasswords(this.schema);h.a.instance.create(this.data.realmPath,this.data.type,t.raw).then(function(){p.a.routeTo(p.a.configuration.routes.realmsServiceEdit,{args:o.a.map([e.data.realmPath,e.data.type],encodeURIComponent),trigger:!0})},function(e){u.a.addMessage({response:e,type:u.a.TYPE_DANGER})})}}])&&g(n.prototype,a),r&&g(n,r),t}();t.default=j}}]);
//# sourceMappingURL=89.f142453c20.js.map