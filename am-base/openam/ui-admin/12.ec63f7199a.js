(window.webpackJsonp=window.webpackJsonp||[]).push([[12,157,159,286,288,289,290,291,292,293,296],{1233:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:!0})},1236:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(o=e.invokePartial(i(a,"form/_Select"),t,{name:"form/_Select",data:r,helpers:n,partials:a,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},1238:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({1:function(e,t,n,a,r){return'<div data-tab-footer class="panel-footer clearfix"></div>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="panel-body">\n    <div data-tab-panel role="tabpanel"></div>\n</div>\n\n'+(null!=(o=i(n,"if").call(null!=t?t:e.nullContext||{},null!=t?i(t,"tabFooter"):t,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:12,column:0},end:{line:14,column:7}}}))?o:"")},useData:!0})},1239:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o=e.lambda,i=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'            <li>\n                <a href="" data-tab-id="'+i(o(null!=t?s(t,"id"):t,t))+'" role="tab" data-toggle="tab" aria-expanded="false">'+i(o(null!=t?s(t,"title"):t,t))+"</a>\n            </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="tab-menu">\n    <ul class="nav nav-tabs" role="tablist">\n'+(null!=(o=i(n,"each").call(null!=t?t:e.nullContext||{},null!=t?i(t,"tabs"):t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:10,column:8},end:{line:14,column:17}}}))?o:"")+'    </ul>\n</div>\n\n<div data-tab-component-panel class="panel panel-default fr-panel-tab"></div>\n'},useData:!0})},1252:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(o=i(n,"if").call(null!=t?t:e.nullContext||{},null!=t?i(t,"selectOptions"):t,{name:"if",hash:{},fn:e.program(2,r,0),inverse:e.program(6,r,0),data:r,loc:{start:{line:9,column:0},end:{line:21,column:7}}}))?o:""},2:function(e,t,n,a,r){var o,i,s=null!=t?t:e.nullContext||{},l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<td class="form-group">\n    <select class="form-control" data-save-row data-row-'+e.escapeExpression("function"==typeof(i=null!=(i=l(n,"index")||r&&l(r,"index"))?i:e.hooks.helperMissing)?i.call(s,{name:"index",hash:{},data:r,loc:{start:{line:11,column:56},end:{line:11,column:66}}}):i)+">\n"+(null!=(o=l(n,"each").call(s,null!=t?l(t,"selectOptions"):t,{name:"each",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r,loc:{start:{line:12,column:8},end:{line:14,column:17}}}))?o:"")+"    </select>\n</td>\n"},3:function(e,t,n,a,r){var o,i=e.lambda,s=e.escapeExpression,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'        <option value="'+s(i(null!=t?l(t,"value"):t,t))+'" '+(null!=(o=l(n,"if").call(null!=t?t:e.nullContext||{},null!=t?l(t,"isSelected"):t,{name:"if",hash:{},fn:e.program(4,r,0),inverse:e.noop,data:r,loc:{start:{line:13,column:39},end:{line:13,column:77}}}))?o:"")+">"+s(i(null!=t?l(t,"value"):t,t))+"</option>\n"},4:function(e,t,n,a,r){return"selected"},6:function(e,t,n,a,r){var o,i=e.lambda,s=e.escapeExpression,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<td class="form-group">\n    <input class="form-control" data-save-row type="text" value="'+s(i(null!=t?u(t,"data"):t,t))+'" placeholder="'+s((u(n,"t")||t&&u(t,"t")||c).call(l,"common.form.addValue",{name:"t",hash:{},data:r,loc:{start:{line:19,column:93},end:{line:19,column:121}}}))+'" data-row-'+s("function"==typeof(o=null!=(o=u(n,"index")||r&&u(r,"index"))?o:c)?o.call(l,{name:"index",hash:{},data:r,loc:{start:{line:19,column:132},end:{line:19,column:142}}}):o)+' data-validator="'+s(i(null!=t?u(t,"required"):t,t))+'">\n</td>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,l=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return(null!=(o=c(n,"each").call(i,null!=t?c(t,"columns"):t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:8,column:0},end:{line:22,column:9}}}))?o:"")+'<td class="fr-col-btn-2">\n    <div class="btn-group">\n        <button class="btn btn-link" data-save-row title="'+l((c(n,"t")||t&&c(t,"t")||s).call(i,"common.form.update",{name:"t",hash:{},data:r,loc:{start:{line:25,column:58},end:{line:25,column:84}}}))+'"><i class="fa fa-check"></i></button>\n        <button class="btn btn-link" data-undo-edit-row title="'+l((c(n,"t")||t&&c(t,"t")||s).call(i,"common.form.cancel",{name:"t",hash:{},data:r,loc:{start:{line:26,column:63},end:{line:26,column:89}}}))+'"><i class="fa fa-undo"></i></button>\n    </div>\n</td>\n'},useData:!0})},1253:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({1:function(e,t,n,a,r){return"<th>"+e.escapeExpression(e.lambda(t,t))+"</th>"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="table-container am-inline-edit-table">\n    <table class="table">\n        <thead>\n            <tr>\n                '+(null!=(o=i(n,"each").call(null!=t?t:e.nullContext||{},null!=t?i(t,"headers"):t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:12,column:16},end:{line:12,column:59}}}))?o:"")+'\n                <th class="fr-col-btn-2"></th>\n            </tr>\n        </thead>\n        <tbody></tbody>\n    </table>\n</div>\n'},useData:!0})},1254:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(o=i(n,"if").call(null!=t?t:e.nullContext||{},null!=t?i(t,"selectOptions"):t,{name:"if",hash:{},fn:e.program(2,r,0),inverse:e.program(6,r,0),data:r,loc:{start:{line:9,column:0},end:{line:21,column:7}}}))?o:""},2:function(e,t,n,a,r){var o,i,s=null!=t?t:e.nullContext||{},l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <td class="form-group">\n        <select class="form-control" data-row-'+e.escapeExpression("function"==typeof(i=null!=(i=l(n,"index")||r&&l(r,"index"))?i:e.hooks.helperMissing)?i.call(s,{name:"index",hash:{},data:r,loc:{start:{line:11,column:46},end:{line:11,column:56}}}):i)+">\n"+(null!=(o=l(n,"each").call(s,null!=t?l(t,"selectOptions"):t,{name:"each",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r,loc:{start:{line:12,column:12},end:{line:14,column:21}}}))?o:"")+"        </select>\n    </td>\n"},3:function(e,t,n,a,r){var o,i=e.lambda,s=e.escapeExpression,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'            <option value="'+s(i(null!=t?l(t,"value"):t,t))+'" '+(null!=(o=l(n,"if").call(null!=t?t:e.nullContext||{},null!=t?l(t,"isSelected"):t,{name:"if",hash:{},fn:e.program(4,r,0),inverse:e.noop,data:r,loc:{start:{line:13,column:43},end:{line:13,column:81}}}))?o:"")+">"+s(i(null!=t?l(t,"value"):t,t))+"</option>\n"},4:function(e,t,n,a,r){return"selected"},6:function(e,t,n,a,r){var o,i=e.lambda,s=e.escapeExpression,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <td class="form-group">\n        <input class="form-control" type="text" value="'+s(i(null!=t?u(t,"data"):t,t))+'" data-add-row placeholder="'+s((u(n,"t")||t&&u(t,"t")||c).call(l,"common.form.addValue",{name:"t",hash:{},data:r,loc:{start:{line:19,column:96},end:{line:19,column:124}}}))+'" data-row-'+s("function"==typeof(o=null!=(o=u(n,"index")||r&&u(r,"index"))?o:c)?o.call(l,{name:"index",hash:{},data:r,loc:{start:{line:19,column:135},end:{line:19,column:145}}}):o)+' data-validator="'+s(i(null!=t?u(t,"required"):t,t))+'">\n    </td>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,i=null!=t?t:e.nullContext||{},s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return(null!=(o=s(n,"each").call(i,null!=t?s(t,"columns"):t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:8,column:0},end:{line:22,column:9}}}))?o:"")+'<td class="fr-col-btn-2">\n    <div class="btn-group">\n        <button class="btn btn-link" data-add-row title="'+e.escapeExpression((s(n,"t")||t&&s(t,"t")||e.hooks.helperMissing).call(i,"common.form.add",{name:"t",hash:{},data:r,loc:{start:{line:25,column:57},end:{line:25,column:80}}}))+'"><i class="fa fa-plus"></i></button>\n    </div>\n</td>\n'},useData:!0})},1255:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<td>"+e.escapeExpression(e.lambda(null!=t?o(t,"data"):t,t))+"</td>"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,l=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return(null!=(o=c(n,"each").call(i,null!=t?c(t,"columns"):t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:8,column:0},end:{line:8,column:48}}}))?o:"")+'\n<td class="fr-col-btn-2">\n    <div class="btn-group">\n        <button class="btn btn-link" data-edit-row title="'+l((c(n,"t")||t&&c(t,"t")||s).call(i,"common.form.edit",{name:"t",hash:{},data:r,loc:{start:{line:11,column:58},end:{line:11,column:82}}}))+'"><i class="fa fa-pencil"></i></button>\n        <button class="btn btn-link" data-delete-row title="'+l((c(n,"t")||t&&c(t,"t")||s).call(i,"common.form.delete",{name:"t",hash:{},data:r,loc:{start:{line:12,column:60},end:{line:12,column:86}}}))+'"><i class="fa fa-close"></i></button>\n    </div>\n</td>\n'},useData:!0})},1263:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return(null!=(o=e.invokePartial(i(a,"headers/_Title"),t,{name:"headers/_Title",hash:{title:null!=t?i(t,"title"):t},data:r,helpers:n,partials:a,decorators:e.decorators}))?o:"")+"\n<form data-json-form></form>\n"},usePartial:!0,useData:!0})},1372:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){return'<div class="panel panel-default">\n    <div data-panel-body class="panel-body" role="panel"></div>\n    <div data-panel-footer class="panel-footer clearfix"></div>\n</div>\n'},useData:!0})},1403:function(e,t,n){"use strict";n(143),n(63),n(33),n(27),n(19),n(34),n(1413);var a=n(2),r=n.n(a),o=n(14),i=n.n(o),s=n(100),l=n.n(s),c=n(1414),u=n.n(c),d=n(1233),p=n.n(d),h=n(1416),f=n(214),m=n(142),v=n(1411);function w(e,t){var n=t.schema,a=t.values,r=t.hideInheritance,o=void 0!==r&&r;u.a.plugins.selectize.enable=!0,u.a.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]},u.a.defaults.themes.openam=h.a.getTheme(6,4);var s=n.toFlatWithInheritanceMeta(a),l=a.removeInheritance();s=s.raw,l=l.raw;var c=new u.a(e[0],{disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,hide_inheritance:o,iconlib:"fontawesome4",schema:s,theme:"openam"});return function(e){var t=p()();i()(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,n){var a=i()(t);a.popoverclickaway({container:"#content",html:!0,placement:"auto top",content:n.innerHTML}).click(function(e){e.preventDefault()}),i()(n).parent().append(a)})}(e),function(e){i()(e).find("input:password").attr("placeholder",i.a.t("common.form.passwordPlaceholder"))}(e),c.setValue(l),c}n.n(v).a.define("enum_plugin",function(e){var t,n=this,a=arguments,o=e.schema,i=r.a.indexOf(o.enum,"");i>-1?(n.plugins.settings.dropdown_header={title:o.options.enum_titles[i]},n.require("dropdown_header"),n.setup=(t=n.setup,function(){t.apply(n,a),n.$dropdown.on("mousedown",".selectize-dropdown-header",function(){return n.setValue(""),n.close(),n.blur(),!1})})):function(){var e;n.deleteSelection=(e=n.deleteSelection,function(t){return!!function(e){return!e||8!==e.keyCode}(t)&&e.apply(n,a)})}()});var b=l.a.View.extend({className:"jsoneditor-block",initialize:function(e){if(!(e.schema instanceof f.a))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof m.a))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=r.a.defaults(e,{displayTitle:!0})},toggleInheritance:function(e,t,n){this.options.values=this.options.values.extend(this.getData()),this.options.values=this.options.values.addValueForPath([e,"inherited"],n),this.options.values=this.options.values.addValueForPath([e,"value"],t),this.render()},render:function(){this.$el.empty();var e=r.a.get(this.jsonEditor,"watchlist");return this.jsonEditor=w(this.$el,this.options),this.jsonEditor.watchlist=e,this.options.displayTitle||this.$el.find("[data-header]").parent().hide(),this},isValid:function(){return 0===this.jsonEditor.validate().length},getData:function(){var e=new m.a(this.jsonEditor.getValue());return this.options.schema.hasDefaultProperties()&&(e=e.pick(this.options.schema.raw.defaultProperties)),(e=(e=e.nullifyEmptyPasswords(this.options.schema.getPasswordKeys())).addInheritance(this.options.values.raw)).raw},setData:function(e){this.options.values=this.options.values.extend(e)},watch:function(e,t){this.jsonEditor.watch(e,t)},destroy:function(){var e=this,t=r.a.keys(this.jsonEditor.watchlist);r.a.forEach(t,function(t){e.jsonEditor.unwatch(t)}),this.jsonEditor.destroy(),this.jsonEditor=null}});t.a=b},1408:function(e,t,n){"use strict";n(33),n(27),n(34);var a=n(2),r=n.n(a),o=n(100),i=n.n(o),s=n(1403),l=n(214),c=n(142);var u=i.a.View.extend({initialize:function(e){if(!(e.schema instanceof l.a))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof c.a))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=r.a.defaults(e,{showOnlyRequiredAndEmpty:!1,showOnlyRequired:!1})},render:function(){var e,t=this.options.schema,n=!0;if(this.options.showOnlyRequiredAndEmpty){var a=this.options.schema.getRequiredPropertyKeys(),o=this.options.values.getEmptyValueKeys(t),i=r.a.intersection(a,o);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(i),n=!r.a.isEmpty(i)}else if(this.options.showOnlyRequired){var l=this.options.schema.getRequiredPropertyKeys();t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(l),n=!r.a.isEmpty(l)}return this.subview=new s.a({displayForm:n,hideInheritance:this.options.hideInheritance,displayTitle:!1,el:this.$el,schema:t,values:this.options.values}).render(),(e=this.options.onRendered)&&setTimeout(e,0),this},isValid:function(){return!this.subview||this.subview.isValid()},getData:function(){var e;if(this.subview)return(e=this.subview).getData.apply(e,arguments)},setData:function(e){if(this.subview)return this.options.values=this.options.values.extend(e),this.subview.setData(e)},watch:function(e,t){this.subview&&this.subview.watch(e,t)},destroy:function(){this.subview&&(this.subview.destroy(),this.subview=null)}});t.a=u},1433:function(e,t,n){(function(e){var t,n,a,r,o,i,s,l;t=e,a=[],r=!1,o=function(e){clearTimeout(n),n=setTimeout(i,100)},i=function(){for(var e=0,t=a.length;e<t;e++)a[e].apply()},s={register:function(e){a.push(e),!1===r&&(t(window).bind("resize",o),r=!0)},unregister:function(e){for(var t=0,n=a.length;t<n;t++)if(a[t]==e){delete a[t];break}}},(l=function(e,n){this.element=t(e),this.dropdown=t('<li class="dropdown hide pull-right tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#">'+n.text+' <b class="caret"></b></a><ul class="dropdown-menu"></ul></li>').prependTo(this.element),this.element.parent().is(".tabs-below")&&this.dropdown.addClass("dropup"),s.register(t.proxy(this.layout,this)),this.layout()}).prototype={constructor:l,layout:function(){var e=[];this.dropdown.removeClass("hide"),this.element.append(this.dropdown.find("li")).find(">li").not(".tabdrop").each(function(){this.offsetTop>0&&e.push(this)}),e.length>0?(e=t(e),this.dropdown.find("ul").empty().append(e),1==this.dropdown.find(".active").length?this.dropdown.addClass("active"):this.dropdown.removeClass("active")):this.dropdown.addClass("hide")}},t.fn.tabdrop=function(e){return this.each(function(){var n=t(this),a=n.data("tabdrop"),r="object"==typeof e&&e;a||n.data("tabdrop",a=new l(this,t.extend({},t.fn.tabdrop.defaults,r))),"string"==typeof e&&a[e]()})},t.fn.tabdrop.defaults={text:'<i class="icon-align-justify"></i>'},t.fn.tabdrop.Constructor=l}).call(this,n(14))},1440:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(100),i=n.n(o),s=n(57),l=n.n(s);t.a=i.a.View.extend({initialize:function(e){if(!r.a.isString(e.partial))throw new TypeError('[PartialBasedView] "partial" argument is not a String.');this.options=e},render:function(){var e=l.a.partials[this.options.partial](this.options.data);return this.$el.html(e),this}})},1441:function(e,t,n){"use strict";n(143),n(1433);var a=n(2),r=n.n(a),o=n(14),i=n.n(o),s=n(100),l=n.n(s),c=n(1238),u=n.n(c),d=n(1239),p=n.n(d);function h(e,t){if(!t[e])throw new TypeError("[TabComponent] Expected all items within 'tabs' to have a '".concat(e,"' attribute."));if(!r.a.isString(t[e]))throw new TypeError("[TabComponent] Expected all items within 'tabs' to have String '".concat(e,"'s."));return!0}var f=l.a.View.extend({template:p.a,bodyTemplate:u.a,events:{"show.bs.tab ul.nav.nav-tabs a":"handleTabClick"},initialize:function(e){if(!(e.tabs instanceof Array))throw new TypeError('[TabComponent] "tabs" argument is not an Array.');if(r.a.isEmpty(e.tabs))throw new TypeError('[TabComponent] "tabs" argument is an empty Array.');r.a.chain(e.tabs).each(r.a.partial(h,"id")).each(r.a.partial(h,"title")).value(),this.options=e},getBody:function(){return this.tabBody},getBodyElement:function(){return this.$el.find("[data-tab-panel]")},getFooter:function(){return this.options.tabFooter},getFooterElement:function(){return this.$el.find("[data-tab-footer]")},getTabId:function(){return this.currentTabId},setTabId:function(e){this.currentTabId=e,this.$el.find('[data-tab-id="'.concat(e,'"]')).tab("show")},handleTabClick:function(e){this.currentTabId=i()(e.currentTarget).data("tab-id"),this.options.tabFooter=this.options.createFooter(this.currentTabId),this.tabBody=this.options.createBody(this.currentTabId);var t=this.bodyTemplate(this.options);this.$el.find("[data-tab-component-panel]").html(t),this.tabBody&&(this.tabBody.setElement(this.getBodyElement()),this.tabBody.render()),this.options.tabFooter&&(this.options.tabFooter.setElement(this.getFooterElement()),this.options.tabFooter.render())},render:function(){var e=this.template(this.options);return this.$el.html(e),this.$el.find(".tab-menu .nav-tabs").tabdrop(),this.setTabId(this.options.tabs[0].id),this}});t.a=f},1442:function(e,t,n){"use strict";n(31),n(143),n(1411);var a=n(2),r=n.n(a),o=n(100),i=n.n(o),s=n(1236),l=n.n(s);var c=i.a.View.extend({initialize:function(e){!function(e){if(!e||!r.a.isObject(e))throw new Error('[TabSearch] No "options" object found.');if(!e.onChange)throw new Error('[TabSearch] No "options.onChange" function found.');if(!e.properties)throw new Error('[TabSearch] No "options.properties" object found.')}(e),this.options=e},render:function(){var e=l()({cssClass:"am-selectize-search",placeholder:"common.form.search",data:"search"});this.$el.html(e);var t,n,a=(t=this.$el.find("[data-search]"),n=this.options.onChange,t.selectize({searchField:["text","value"],onChange:function(e){var t=this.options[e].optgroup;n(t,e),this.clear(!0)},render:{item:function(e){return"<div>".concat(e.text,"</div>")},option:function(e){return"<div><div>".concat(e.text,'</div><span class="text-muted small"><em>').concat(e.value,"</em></span></div></div>")},optgroup_header:function(e){return'<div class="optgroup-header"><span class="text-primary">'.concat(e.label,"</span></div>")}}}),t[0].selectize);return function(e,t){r.a.each(e,function(e,n){t.addOptionGroup(n,{label:e.title||" "}),r.a.each(e.properties,function(e,a){t.addOption({text:e.title,value:a,optgroup:n})})}),t.refreshOptions(!1)}(this.options.properties,a),this}});t.a=c},1444:function(e,t,n){"use strict";n(15),n(36),n(37),n(31),n(33),n(50),n(27),n(67),n(62),n(35),n(34);var a=n(2),r=n.n(a),o=n(122),i=n(23),s=n(38),l=n(214),c=n(142);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=new o.a("".concat(i.a.host).concat(i.a.context,"/json")),p=function(e){return"serverDefaults"===e},h=function(e){return p(e)?"server-default":e},f=function(e,t){return d.serviceCall({url:Object(s.a)("/global-config/servers/".concat(e,"/properties/").concat(t,"?_action=schema"),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new l.a(e)})},m=function(e,t){return d.serviceCall({url:Object(s.a)("/global-config/servers/".concat(e,"/properties/").concat(t),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){var n;return"advanced"===t&&(e=r.a.sortBy((n=e,r.a.map(n,function(e,t){return{key:t,value:e}})),function(e){return e.key})),new c.a(e)})},v=function(e,t){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"server-default",o=t;return"advanced"===e&&(n=t.advanced,o=r.a.reduce(n,function(e,t){return e[t.key]=t.value,e},{})),d.serviceCall({url:Object(s.a)("/global-config/servers/".concat(a,"/properties/").concat(e),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:JSON.stringify(o)})};d.servers={clone:function(e,t){return d.serviceCall({url:Object(s.a)("/global-config/servers/".concat(e,"?_action=clone"),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify({clonedUrl:t})})},get:function(e,t){return Promise.all([f(e,t),m(e,t)]).then(function(e){return{schema:e[0],values:e[1]}})},getWithDefaults:function(e,t){var n=h(e),a=[d.servers.get(n,t)];return p(e)||"directoryConfiguration"===t||a.push(m("server-default",t)),Promise.all(a).then(function(e){var t=u(e,2),n=t[0],a=t[1],r=void 0===a?{}:a;return{schema:n.schema,values:n.values,defaultValues:r}})},getUrl:function(e){return d.serviceCall({url:Object(s.a)("/global-config/servers/".concat(e),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return e.url},function(){})},getAll:function(){return d.serviceCall({url:Object(s.a)("/global-config/servers?_queryFilter=true",{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return r.a.reject(e.result,{_id:"server-default"})})},remove:function(e){return d.serviceCall({url:Object(s.a)("/global-config/servers/".concat(e),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"DELETE"})},create:function(e){return d.serviceCall({url:Object(s.a)("/global-config/servers?_action=create",{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify(e)})},update:function(e,t,n){return v(e,t,h(n))},ADVANCED_SECTION:"advanced",DEFAULT_SERVER:"server-default"},t.a=d},1446:function(e,t,n){"use strict";n(143);t.a=function(e){var t=e.find("input");!0===t.prop("disabled")?t.closest(".form-group").find("button").focus().blur():t.focus()}},1523:function(e,t,n){"use strict";n(143),n(33),n(50),n(27),n(34);var a=n(2),r=n.n(a),o=n(14),i=n.n(o),s=n(100),l=n.n(s),c=(n(31),n(115),n(124),n(779),n(1252)),u=n.n(c),d=n(1254),p=n.n(d),h=n(1255),f=n.n(h),m=n(402),v=function(e,t){var n=[];return r.a.each(t.properties,function(a,o){var i,s;n[a.propertyOrder]={data:e[o],required:!!r.a.includes(t.required,o)&&"required"},a.enum&&(n[a.propertyOrder].selectOptions=(i=a.enum,s=e[o],r.a.map(i,function(e){return{value:e,isSelected:e===s}})))}),n},w=function(e,t){var n={};return r.a.each(e.properties,function(e,a){var r="input";e.enum&&(r="select");var o=t.find("".concat(r,"[data-row-").concat(e.propertyOrder,"]")).val();n[a]=o?o.trim():o}),n},b=l.a.View.extend({events:{"click button[data-add-row]":"addRow","keyup [data-add-row]":"addRow","click button[data-save-row]":"saveRow","blur [data-save-row]":"stopEvent","keyup [data-save-row]":"saveRow","dblclick td":"editRow","keyup [data-edit-row]":"editRow","mouseup [data-edit-row]":"editRow","click [data-delete-row]":"deleteRow","click [data-undo-edit-row]":"exitEditMode"},tagName:"tr",initialize:function(e,t){this.rowData=e,this.rowSchema=t},renderTemplate:function(e){var t,n,a=e((t=this.rowData,n=this.rowSchema,{columns:v(t,n)}));this.$el.html(a),m.a.bindValidators(this.$el)},renderInReadOnlyMode:function(){return this.$el.removeClass("am-inline-edit-table-row"),this.renderTemplate(f.a),this},renderInEditMode:function(){return this.$el.addClass("am-inline-edit-table-row"),this.renderTemplate(u.a),this},renderInNewMode:function(){return this.$el.addClass("am-inline-edit-table-row"),this.renderTemplate(p.a),this},editRow:function(e){"keyup"===e.type&&13!==e.keyCode||this.trigger("edit",this)},deleteRow:function(){this.trigger("delete",this)},exitEditMode:function(){this.trigger("exitEditMode",this)},focus:function(){this.$el.find("input:first").focus()},addRow:function(e){if("keyup"!==e.type||13===e.keyCode){m.a.validateAllFields(this.$el);var t=w(this.rowSchema,this.$el);this.isDataValid(t,this.rowSchema)&&(this.rowData=t,this.trigger("add",this))}},saveRow:function(e){if("keyup"!==e.type||13===e.keyCode){m.a.validateAllFields(this.$el);var t=w(this.rowSchema,this.$el);this.isDataValid(t,this.rowSchema)&&(this.rowData=t,this.trigger("exitEditMode",this))}},isDataValid:function(e,t){return r.a.every(e,function(e,n){return void 0!==e&&e.length>0||!r.a.includes(t.required,n)})},getData:function(){return this.rowData}}),y=n(1253),g=n.n(y),O={required:["key"],properties:{key:{title:i.a.t("common.form.propertyName"),propertyOrder:0},value:{title:i.a.t("common.form.propertyValue"),propertyOrder:1}}};t.a=l.a.View.extend({template:g.a,initialize:function(e){var t=e.values,n=void 0===t?[]:t,a=e.rowSchema,r=void 0===a?O:a;this.values=n,this.rowSchema=r,this.rows=[]},getHeaders:function(){var e=[];return r.a.each(this.rowSchema.properties,function(t){e[t.propertyOrder]=t.title}),e},getRenderData:function(){return{headers:this.getHeaders()}},render:function(){var e=this;this.$el.empty();var t=this.template(this.getRenderData());return this.$el.html(t),this.tBody=this.$el.find("tbody"),r.a.each(this.values,function(t){var n=e.initRow(t);e.tBody.append(n.renderInReadOnlyMode().$el),e.rows.push(n)}),this.appendEmptyNewRowToTheBottom(),this},initRow:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new b(t,this.rowSchema);return n.on("edit",function(t){t!==e.currentlyEditedRow&&t!==e.newRow&&(e.currentlyEditedRow&&e.currentlyEditedRow.renderInReadOnlyMode(),t.renderInEditMode().focus(),e.currentlyEditedRow=t,e.newRow.$el.hide())}),n.on("exitEditMode",function(){e.currentlyEditedRow&&(e.currentlyEditedRow.renderInReadOnlyMode(),e.currentlyEditedRow=void 0),e.newRow.$el.show()}),n.on("delete",function(t){e.rows=r.a.without(e.rows,t),t.remove()}),n.on("add",function(t){e.rows.push(t),t.renderInReadOnlyMode(),e.appendEmptyNewRowToTheBottom()}),n},appendEmptyNewRowToTheBottom:function(){var e=this.initRow();this.tBody.append(e.renderInNewMode().$el),this.newRow=e},getData:function(){return r.a.map(this.rows,function(e){return e.getData()})},isValid:function(){return!0},setData:function(e){this.values=e,this.rows=[],this.render()}})},1728:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(143),n(33),n(50),n(368),n(27),n(62),n(35),n(34);var a=n(16),r=n(2),o=n.n(r),i=n(123),s=n(1408),l=n(1263),c=n.n(l),u=n(1523),d=n(214),p=n(142),h=n(52),f=n(100),m=n.n(f),v=n(1372),w=n.n(v),b=m.a.View.extend({template:w.a,initialize:function(e){var t=e.createBody,n=e.createFooter;this.createBody=t,this.createFooter=n},getBody:function(){return this.panelBody},render:function(){var e=this.template();return this.$el.html(e),this.panelBody=this.createBody(),this.$el.find("[data-panel-body]").append(this.panelBody.render().$el),this.$el.find("[data-panel-footer]").append(this.createFooter().render().$el),this}}),y=n(1440),g=n(1444),O=n(1446),E=n(1441),x=n(1442);function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(e){return e===g.a.servers.ADVANCED_SECTION}t.default=i.a.extend({template:c.a,events:{"click [data-save]":"onSave","click [data-inherit-value]":"toggleInheritance"},getJSONSchemaView:function(){return this.subview.getBody()},render:function(e){var t=this,n=P(e,2),r=n[0],i=n[1];this.sectionId=i,this.serverId=r,this.data.title=Object(a.b)("console.navigation.".concat(this.sectionId,".title")),g.a.servers.getWithDefaults(this.serverId,this.sectionId).then(function(e){var n=e.defaultValues,a=e.schema,r=e.values;t.schema=a,t.values=r,t.defaultValues=n,t.parentRender(function(){if(S(t.sectionId))t.subview=new b({createBody:function(){return new u.a({values:o.a.cloneDeep(t.values.raw)})},createFooter:function(){return new y.a({partial:"form/_JSONSchemaFooter"})}});else{var e=function(e){return o()(e.raw.properties).map(function(e,t){return{id:t,order:e.propertyOrder,title:e.title}}).sortBy("order").value()}(a);t.subview=new E.a({tabs:e,createBody:function(e){return"array"===a.raw.properties[e].type?new u.a({values:o.a.cloneDeep(t.values.raw)[e],rowSchema:a.raw.properties[e].items}):new s.a({schema:new d.a(a.raw.properties[e]),values:new p.a(o.a.cloneDeep(t.values.raw)[e])})},createFooter:function(){return new y.a({partial:"form/_JSONSchemaFooter"})}});var n={properties:t.schema.raw.properties,onChange:function(e,n){t.subview.setTabId(e),Object(O.a)(t.$el.find('[data-schemapath="root.'.concat(n,'"]')))}};t.$el.find("[data-tab-search]").append(new x.a(n).render().$el)}t.subview.setElement("[data-json-form]"),t.subview.render()})})},getSection:function(){return this.sectionId===g.a.servers.ADVANCED_SECTION?this.sectionId:this.subview.getTabId()},updateValues:function(){var e,t,n;this.values=this.values.extend((e={},t=this.getSection(),n=this.getJSONSchemaView().getData(),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))},onSave:function(){if(this.getJSONSchemaView().isValid()){this.updateValues();var e=S(this.sectionId)?this.values:this.values.removeNullPasswords(this.schema);g.a.servers.update(this.sectionId,e.raw,this.serverId).then(function(){h.a.addMessage({message:Object(a.b)("config.messages.CommonMessages.changesSaved")})},function(e){h.a.addMessage({response:e,type:h.a.TYPE_DANGER})})}else h.a.addMessage({message:Object(a.b)("common.form.validation.errorsNotSaved"),type:h.a.TYPE_DANGER})},toggleInheritance:function(e){var t,n=e.currentTarget,a=n.getAttribute("data-schemapath").slice(5),r="true"===n.getAttribute("data-inherit-value");t=r?this.values.raw[this.subview.getTabId()][a].value:this.defaultValues.raw[this.subview.getTabId()][a],this.getJSONSchemaView().subview.toggleInheritance(a,t,!r)}})}}]);
//# sourceMappingURL=12.ec63f7199a.js.map