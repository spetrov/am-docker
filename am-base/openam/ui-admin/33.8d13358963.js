(window.webpackJsonp=window.webpackJsonp||[]).push([[33,159,276,288,289,296],{1233:function(t,e,n){var a=n(158);t.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,a,o){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:!0})},1236:function(t,e,n){var a=n(158);t.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,a,o){var i,r=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return null!=(i=t.invokePartial(r(a,"form/_Select"),e,{name:"form/_Select",data:o,helpers:n,partials:a,decorators:t.decorators}))?i:""},usePartial:!0,useData:!0})},1238:function(t,e,n){var a=n(158);t.exports=(a.default||a).template({1:function(t,e,n,a,o){return'<div data-tab-footer class="panel-footer clearfix"></div>\n'},compiler:[8,">= 4.3.0"],main:function(t,e,n,a,o){var i,r=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<div class="panel-body">\n    <div data-tab-panel role="tabpanel"></div>\n</div>\n\n'+(null!=(i=r(n,"if").call(null!=e?e:t.nullContext||{},null!=e?r(e,"tabFooter"):e,{name:"if",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o,loc:{start:{line:12,column:0},end:{line:14,column:7}}}))?i:"")},useData:!0})},1239:function(t,e,n){var a=n(158);t.exports=(a.default||a).template({1:function(t,e,n,a,o){var i=t.lambda,r=t.escapeExpression,s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'            <li>\n                <a href="" data-tab-id="'+r(i(null!=e?s(e,"id"):e,e))+'" role="tab" data-toggle="tab" aria-expanded="false">'+r(i(null!=e?s(e,"title"):e,e))+"</a>\n            </li>\n"},compiler:[8,">= 4.3.0"],main:function(t,e,n,a,o){var i,r=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<div class="tab-menu">\n    <ul class="nav nav-tabs" role="tablist">\n'+(null!=(i=r(n,"each").call(null!=e?e:t.nullContext||{},null!=e?r(e,"tabs"):e,{name:"each",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o,loc:{start:{line:10,column:8},end:{line:14,column:17}}}))?i:"")+'    </ul>\n</div>\n\n<div data-tab-component-panel class="panel panel-default fr-panel-tab"></div>\n'},useData:!0})},1369:function(t,e,n){var a=n(158);t.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,a,o){var i,r=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return(null!=(i=t.invokePartial(r(a,"headers/_TitleWithSubAndIcon"),e,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"credit-card",type:"console.sts.rest.edit.type",title:null!=e?r(e,"title"):e},data:o,helpers:n,partials:a,decorators:t.decorators}))?i:"")+"\n<form data-json-form></form>"},usePartial:!0,useData:!0})},1403:function(t,e,n){"use strict";n(143),n(63),n(33),n(27),n(19),n(34),n(1413);var a=n(2),o=n.n(a),i=n(14),r=n.n(i),s=n(100),c=n.n(s),l=n(1414),u=n.n(l),d=n(1233),p=n.n(d),f=n(1416),h=n(214),m=n(142),b=n(1411);function v(t,e){var n=e.schema,a=e.values,o=e.hideInheritance,i=void 0!==o&&o;u.a.plugins.selectize.enable=!0,u.a.plugins.selectize.plugins=function(t){return[{name:"enum_plugin",options:{schema:t}}]},u.a.defaults.themes.openam=f.a.getTheme(6,4);var s=n.toFlatWithInheritanceMeta(a),c=a.removeInheritance();s=s.raw,c=c.raw;var l=new u.a(t[0],{disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,hide_inheritance:i,iconlib:"fontawesome4",schema:s,theme:"openam"});return function(t){var e=p()();r()(t).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(t,n){var a=r()(e);a.popoverclickaway({container:"#content",html:!0,placement:"auto top",content:n.innerHTML}).click(function(t){t.preventDefault()}),r()(n).parent().append(a)})}(t),function(t){r()(t).find("input:password").attr("placeholder",r.a.t("common.form.passwordPlaceholder"))}(t),l.setValue(c),l}n.n(b).a.define("enum_plugin",function(t){var e,n=this,a=arguments,i=t.schema,r=o.a.indexOf(i.enum,"");r>-1?(n.plugins.settings.dropdown_header={title:i.options.enum_titles[r]},n.require("dropdown_header"),n.setup=(e=n.setup,function(){e.apply(n,a),n.$dropdown.on("mousedown",".selectize-dropdown-header",function(){return n.setValue(""),n.close(),n.blur(),!1})})):function(){var t;n.deleteSelection=(t=n.deleteSelection,function(e){return!!function(t){return!t||8!==t.keyCode}(e)&&t.apply(n,a)})}()});var w=c.a.View.extend({className:"jsoneditor-block",initialize:function(t){if(!(t.schema instanceof h.a))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof m.a))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=o.a.defaults(t,{displayTitle:!0})},toggleInheritance:function(t,e,n){this.options.values=this.options.values.extend(this.getData()),this.options.values=this.options.values.addValueForPath([t,"inherited"],n),this.options.values=this.options.values.addValueForPath([t,"value"],e),this.render()},render:function(){this.$el.empty();var t=o.a.get(this.jsonEditor,"watchlist");return this.jsonEditor=v(this.$el,this.options),this.jsonEditor.watchlist=t,this.options.displayTitle||this.$el.find("[data-header]").parent().hide(),this},isValid:function(){return 0===this.jsonEditor.validate().length},getData:function(){var t=new m.a(this.jsonEditor.getValue());return this.options.schema.hasDefaultProperties()&&(t=t.pick(this.options.schema.raw.defaultProperties)),(t=(t=t.nullifyEmptyPasswords(this.options.schema.getPasswordKeys())).addInheritance(this.options.values.raw)).raw},setData:function(t){this.options.values=this.options.values.extend(t)},watch:function(t,e){this.jsonEditor.watch(t,e)},destroy:function(){var t=this,e=o.a.keys(this.jsonEditor.watchlist);o.a.forEach(e,function(e){t.jsonEditor.unwatch(e)}),this.jsonEditor.destroy(),this.jsonEditor=null}});e.a=w},1408:function(t,e,n){"use strict";n(33),n(27),n(34);var a=n(2),o=n.n(a),i=n(100),r=n.n(i),s=n(1403),c=n(214),l=n(142);var u=r.a.View.extend({initialize:function(t){if(!(t.schema instanceof c.a))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof l.a))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=o.a.defaults(t,{showOnlyRequiredAndEmpty:!1,showOnlyRequired:!1})},render:function(){var t,e=this.options.schema,n=!0;if(this.options.showOnlyRequiredAndEmpty){var a=this.options.schema.getRequiredPropertyKeys(),i=this.options.values.getEmptyValueKeys(e),r=o.a.intersection(a,i);e=e.removeUnrequiredNonDefaultProperties().addDefaultProperties(r),n=!o.a.isEmpty(r)}else if(this.options.showOnlyRequired){var c=this.options.schema.getRequiredPropertyKeys();e=e.removeUnrequiredNonDefaultProperties().addDefaultProperties(c),n=!o.a.isEmpty(c)}return this.subview=new s.a({displayForm:n,hideInheritance:this.options.hideInheritance,displayTitle:!1,el:this.$el,schema:e,values:this.options.values}).render(),(t=this.options.onRendered)&&setTimeout(t,0),this},isValid:function(){return!this.subview||this.subview.isValid()},getData:function(){var t;if(this.subview)return(t=this.subview).getData.apply(t,arguments)},setData:function(t){if(this.subview)return this.options.values=this.options.values.extend(t),this.subview.setData(t)},watch:function(t,e){this.subview&&this.subview.watch(t,e)},destroy:function(){this.subview&&(this.subview.destroy(),this.subview=null)}});e.a=u},1423:function(t,e,n){"use strict";n(143),n(114);var a=n(2),o=n(1431),i=n.n(o);function r(t){t.data.dialog.$modalContent.find("[autofocus]").focus(),function(t){Object(a.each)(t.options.buttons,function(e){!0===e.disabled&&t.getButton(e.id).disable()})}(t.data.dialog)}var s={};s.TYPE_DEFAULT=i.a.TYPE_DEFAULT,s.TYPE_INFO=i.a.TYPE_INFO,s.TYPE_PRIMARY=i.a.TYPE_PRIMARY,s.TYPE_SUCCESS=i.a.TYPE_SUCCESS,s.TYPE_WARNING=i.a.TYPE_WARNING,s.TYPE_DANGER=i.a.TYPE_DANGER,s.SIZE_NORMAL=i.a.SIZE_NORMAL,s.SIZE_SMALL=i.a.SIZE_SMALL,s.SIZE_WIDE=i.a.SIZE_WIDE,s.SIZE_LARGE=i.a.SIZE_LARGE,Object(a.each)(["show","confirm","warning","danger","success"],function(t){s[t]=function(e){var n=new i.a[t](e),a=e.type||s.TYPE_PRIMARY;return a=a.replace("type","text"),n.getModalHeader().addClass(a),n.getModal().on("shown.bs.modal",{dialog:n},r),n}}),e.a=s},1427:function(t,e,n){"use strict";n.d(e,"a",function(){return i});n(31);var a=n(16),o=n(1423);function i(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object(a.b)("common.form.delete");o.a.confirm({type:o.a.TYPE_DANGER,title:"".concat(Object(a.b)("common.form.confirm")," ").concat(n),message:t.message?t.message:Object(a.b)("console.common.confirmDeleteText",{type:t.type}),btnOKLabel:n,btnOKClass:"btn-danger",callback:function(t){t&&e&&e()}})}},1429:function(t,e,n){"use strict";n(31);function a(t,e){console.warn("".concat(t," is marked as deprecated. \nPlease use ").concat(e))}n(143);var o=n(1427),i={showConfirmationBeforeDeleting:function(t,e){return a("FormHelper.showConfirmationBeforeDeleting","org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction"),Object(o.a)(t,e)},setActiveTab:function(t,e){return a("FormHelper.setActiveTab","org/forgerock/openam/ui/admin/utils/form/setActiveTab"),void((n=t)&&n.activeTabId&&n.$el.find('.nav-tabs a[href="'.concat(n.activeTabId,'"]')).tab("show"));var n}};e.a=i},1433:function(t,e,n){(function(t){var e,n,a,o,i,r,s,c;e=t,a=[],o=!1,i=function(t){clearTimeout(n),n=setTimeout(r,100)},r=function(){for(var t=0,e=a.length;t<e;t++)a[t].apply()},s={register:function(t){a.push(t),!1===o&&(e(window).bind("resize",i),o=!0)},unregister:function(t){for(var e=0,n=a.length;e<n;e++)if(a[e]==t){delete a[e];break}}},(c=function(t,n){this.element=e(t),this.dropdown=e('<li class="dropdown hide pull-right tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#">'+n.text+' <b class="caret"></b></a><ul class="dropdown-menu"></ul></li>').prependTo(this.element),this.element.parent().is(".tabs-below")&&this.dropdown.addClass("dropup"),s.register(e.proxy(this.layout,this)),this.layout()}).prototype={constructor:c,layout:function(){var t=[];this.dropdown.removeClass("hide"),this.element.append(this.dropdown.find("li")).find(">li").not(".tabdrop").each(function(){this.offsetTop>0&&t.push(this)}),t.length>0?(t=e(t),this.dropdown.find("ul").empty().append(t),1==this.dropdown.find(".active").length?this.dropdown.addClass("active"):this.dropdown.removeClass("active")):this.dropdown.addClass("hide")}},e.fn.tabdrop=function(t){return this.each(function(){var n=e(this),a=n.data("tabdrop"),o="object"==typeof t&&t;a||n.data("tabdrop",a=new c(this,e.extend({},e.fn.tabdrop.defaults,o))),"string"==typeof t&&a[t]()})},e.fn.tabdrop.defaults={text:'<i class="icon-align-justify"></i>'},e.fn.tabdrop.Constructor=c}).call(this,n(14))},1440:function(t,e,n){"use strict";var a=n(2),o=n.n(a),i=n(100),r=n.n(i),s=n(57),c=n.n(s);e.a=r.a.View.extend({initialize:function(t){if(!o.a.isString(t.partial))throw new TypeError('[PartialBasedView] "partial" argument is not a String.');this.options=t},render:function(){var t=c.a.partials[this.options.partial](this.options.data);return this.$el.html(t),this}})},1441:function(t,e,n){"use strict";n(143),n(1433);var a=n(2),o=n.n(a),i=n(14),r=n.n(i),s=n(100),c=n.n(s),l=n(1238),u=n.n(l),d=n(1239),p=n.n(d);function f(t,e){if(!e[t])throw new TypeError("[TabComponent] Expected all items within 'tabs' to have a '".concat(t,"' attribute."));if(!o.a.isString(e[t]))throw new TypeError("[TabComponent] Expected all items within 'tabs' to have String '".concat(t,"'s."));return!0}var h=c.a.View.extend({template:p.a,bodyTemplate:u.a,events:{"show.bs.tab ul.nav.nav-tabs a":"handleTabClick"},initialize:function(t){if(!(t.tabs instanceof Array))throw new TypeError('[TabComponent] "tabs" argument is not an Array.');if(o.a.isEmpty(t.tabs))throw new TypeError('[TabComponent] "tabs" argument is an empty Array.');o.a.chain(t.tabs).each(o.a.partial(f,"id")).each(o.a.partial(f,"title")).value(),this.options=t},getBody:function(){return this.tabBody},getBodyElement:function(){return this.$el.find("[data-tab-panel]")},getFooter:function(){return this.options.tabFooter},getFooterElement:function(){return this.$el.find("[data-tab-footer]")},getTabId:function(){return this.currentTabId},setTabId:function(t){this.currentTabId=t,this.$el.find('[data-tab-id="'.concat(t,'"]')).tab("show")},handleTabClick:function(t){this.currentTabId=r()(t.currentTarget).data("tab-id"),this.options.tabFooter=this.options.createFooter(this.currentTabId),this.tabBody=this.options.createBody(this.currentTabId);var e=this.bodyTemplate(this.options);this.$el.find("[data-tab-component-panel]").html(e),this.tabBody&&(this.tabBody.setElement(this.getBodyElement()),this.tabBody.render()),this.options.tabFooter&&(this.options.tabFooter.setElement(this.getFooterElement()),this.options.tabFooter.render())},render:function(){var t=this.template(this.options);return this.$el.html(t),this.$el.find(".tab-menu .nav-tabs").tabdrop(),this.setTabId(this.options.tabs[0].id),this}});e.a=h},1442:function(t,e,n){"use strict";n(31),n(143),n(1411);var a=n(2),o=n.n(a),i=n(100),r=n.n(i),s=n(1236),c=n.n(s);var l=r.a.View.extend({initialize:function(t){!function(t){if(!t||!o.a.isObject(t))throw new Error('[TabSearch] No "options" object found.');if(!t.onChange)throw new Error('[TabSearch] No "options.onChange" function found.');if(!t.properties)throw new Error('[TabSearch] No "options.properties" object found.')}(t),this.options=t},render:function(){var t=c()({cssClass:"am-selectize-search",placeholder:"common.form.search",data:"search"});this.$el.html(t);var e,n,a=(e=this.$el.find("[data-search]"),n=this.options.onChange,e.selectize({searchField:["text","value"],onChange:function(t){var e=this.options[t].optgroup;n(e,t),this.clear(!0)},render:{item:function(t){return"<div>".concat(t.text,"</div>")},option:function(t){return"<div><div>".concat(t.text,'</div><span class="text-muted small"><em>').concat(t.value,"</em></span></div></div>")},optgroup_header:function(t){return'<div class="optgroup-header"><span class="text-primary">'.concat(t.label,"</span></div>")}}}),e[0].selectize);return function(t,e){o.a.each(t,function(t,n){e.addOptionGroup(n,{label:t.title||" "}),o.a.each(t.properties,function(t,a){e.addOption({text:t.title,value:a,optgroup:n})})}),e.refreshOptions(!1)}(this.options.properties,a),this}});e.a=l},1446:function(t,e,n){"use strict";n(143);e.a=function(t){var e=t.find("input");!0===e.prop("disabled")?e.closest(".form-group").find("button").focus().blur():e.focus()}},1449:function(t,e,n){"use strict";n.d(e,"e",function(){return u}),n.d(e,"d",function(){return d}),n.d(e,"a",function(){return p}),n.d(e,"b",function(){return f}),n.d(e,"g",function(){return h}),n.d(e,"c",function(){return m}),n.d(e,"f",function(){return b});n(31),n(33),n(27),n(67),n(35),n(34);var a=n(2),o=n(122),i=n(23),r=n(38),s=new o.a("".concat(i.a.host).concat(i.a.context,"/json")),c="/realm-config/services/sts/";function l(t,e){return s.serviceCall({url:Object(r.a)("".concat(c).concat(e,"?_action=template"),{realm:t}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function u(t,e){return s.serviceCall({url:Object(r.a)("".concat(c).concat(e,"?_action=schema"),{realm:t}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function d(t,e){return Promise.all([u(t,e),l(t,e)]).then(function(t){return{schema:t[0],values:t[1]}})}function p(t,e,n,a){return s.serviceCall({url:Object(r.a)("".concat(c).concat(e,"/").concat(encodeURIComponent(n)),{realm:t}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},type:"PUT",data:JSON.stringify(a)})}function f(t,e,n){return s.serviceCall({url:Object(r.a)("".concat(c).concat(e,"/").concat(encodeURIComponent(n)),{realm:t}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"GET"})}function h(t,e,n,a){return s.serviceCall({url:Object(r.a)("".concat(c).concat(e,"/").concat(encodeURIComponent(n)),{realm:t}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-Match":"*"},type:"PUT",data:JSON.stringify(a)})}function m(t,e){return s.serviceCall({url:Object(r.a)("".concat(c).concat(e,"?_queryFilter=true"),{realm:t}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"GET"})}function b(t,e,n){var o=Object(a.map)(n,function(n){return s.serviceCall({url:Object(r.a)("".concat(c).concat(e,"/").concat(encodeURIComponent(n._id)),{realm:t}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(o)}},1450:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o});var a="rest-sts",o="soap-sts"},1688:function(t,e,n){"use strict";n.r(e);n(15),n(36),n(37),n(143),n(33),n(50),n(53),n(54),n(27),n(67),n(62),n(35),n(34);var a=n(2),o=n(16),i=n(1449),r=n(1450),s=n(123),c=n(1408),l=n(1429),u=n(214),d=n(142),p=n(52),f=n(1440),h=n(41),m=n(1446),b=n(1441),v=n(1442),w=n(1369),y=n.n(w);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],a=!0,o=!1,i=void 0;try{for(var r,s=t[Symbol.iterator]();!(a=(r=s.next()).done)&&(n.push(r.value),!e||n.length!==e);a=!0);}catch(t){o=!0,i=t}finally{try{a||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function T(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function O(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=O(this,P(e).call(this))).template=y.a,t.events={"click [data-delete]":"onDelete","click [data-save]":"onSave"},t}var n,w,g;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,s["a"]),n=e,(w=[{key:"createTabs",value:function(t){return Object(a.chain)(t.raw.properties).map(function(t,e){return{id:e,order:t.propertyOrder,title:t.title}}).sortBy("order").value()}},{key:"getJSONSchemaView",value:function(){return this.subview.getBody()}},{key:"render",value:function(t){var e=this,n=E(t,2),a=n[0],o=n[1];this.data={title:o,headerActions:[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}]},this.realm=a,Promise.all([Object(i.e)(a,r.a),Object(i.b)(a,r.a,o)]).then(function(t){var n=E(t,2),a=n[0],o=n[1];e.schema=new u.a(a),e.values=new d.a(o),e.parentRender(function(){var t=e.createTabs(e.schema);e.subview=new b.a({tabs:t,createBody:function(t){return new c.a({schema:new u.a(e.schema.raw.properties[t]),values:new d.a(o[t])})},createFooter:function(){return new f.a({partial:"form/_JSONSchemaFooter"})}});var n={properties:e.schema.raw.properties,onChange:function(t,n){e.subview.setTabId(t),Object(m.a)(e.$el.find('[data-schemapath="root.'.concat(n,'"]')))}};e.$el.find("[data-tab-search]").append(new v.a(n).render().$el),e.subview.setElement("[data-json-form]"),e.subview.render()})})}},{key:"onSave",value:function(){if(this.getJSONSchemaView().isValid()){this.updateValues();var t=this.values.removeNullPasswords(this.schema),e=t.raw._id;Object(i.g)(this.realm,r.a,e,t.raw).then(function(){p.a.addMessage({message:Object(o.b)("config.messages.CommonMessages.changesSaved")})},function(t){p.a.addMessage({response:t,type:p.a.TYPE_DANGER})})}else p.a.addMessage({message:Object(o.b)("common.form.validation.errorsNotSaved"),type:p.a.TYPE_DANGER})}},{key:"updateValues",value:function(){var t,e,n;this.values=this.values.extend((t={},e=this.getSection(),n=this.getJSONSchemaView().getData(),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t))}},{key:"getSection",value:function(){return this.subview.getTabId()}},{key:"onDelete",value:function(t){var e=this;t.preventDefault(),l.a.showConfirmationBeforeDeleting({message:Object(o.b)("console.common.confirmDeleteItem")},function(){Object(i.f)(e.realm,r.a,[e.values.raw]).then(function(){p.a.addMessage({message:Object(o.b)("config.messages.CommonMessages.changesSaved")}),h.a.routeTo(h.a.configuration.routes.realmsSts,{args:[encodeURIComponent(e.realm)],trigger:!0})},function(t,e){p.a.addMessage({response:e,type:p.a.TYPE_DANGER})})})}}])&&T(n.prototype,w),g&&T(n,g),e}();e.default=j}}]);
//# sourceMappingURL=33.8d13358963.js.map