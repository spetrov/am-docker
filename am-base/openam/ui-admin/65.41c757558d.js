(window.webpackJsonp=window.webpackJsonp||[]).push([[65,196,296],{1233:function(e,t,n){var r=n(158);e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:!0})},1294:function(e,t,n){var r=n(158);e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var i,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return(null!=(i=e.invokePartial(a(r,"headers/_TitleWithSubAndIcon"),t,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"circle-o-notch",type:"console.applications.federation.circlesoftrust.edit.type",title:null!=t?a(t,"id"):t},data:o,helpers:n,partials:r,decorators:e.decorators}))?i:"")+'\n<div class="panel panel-default">\n    <div class="panel-body ">\n        <form data-json-form></form>\n    </div>\n    <div class="panel-footer clearfix">\n'+(null!=(i=e.invokePartial(a(r,"form/_JSONSchemaFooter"),t,{name:"form/_JSONSchemaFooter",data:o,indent:"        ",helpers:n,partials:r,decorators:e.decorators}))?i:"")+"    </div>\n</div>\n"},usePartial:!0,useData:!0})},1403:function(e,t,n){"use strict";n(143),n(63),n(33),n(27),n(19),n(34),n(1413);var r=n(2),o=n.n(r),i=n(14),a=n.n(i),s=n(100),c=n.n(s),u=n(1414),l=n.n(u),f=n(1233),d=n.n(f),p=n(1416),h=n(214),m=n(142),v=n(1411);function y(e,t){var n=t.schema,r=t.values,o=t.hideInheritance,i=void 0!==o&&o;l.a.plugins.selectize.enable=!0,l.a.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]},l.a.defaults.themes.openam=p.a.getTheme(6,4);var s=n.toFlatWithInheritanceMeta(r),c=r.removeInheritance();s=s.raw,c=c.raw;var u=new l.a(e[0],{disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,hide_inheritance:i,iconlib:"fontawesome4",schema:s,theme:"openam"});return function(e){var t=d()();a()(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,n){var r=a()(t);r.popoverclickaway({container:"#content",html:!0,placement:"auto top",content:n.innerHTML}).click(function(e){e.preventDefault()}),a()(n).parent().append(r)})}(e),function(e){a()(e).find("input:password").attr("placeholder",a.a.t("common.form.passwordPlaceholder"))}(e),u.setValue(c),u}n.n(v).a.define("enum_plugin",function(e){var t,n=this,r=arguments,i=e.schema,a=o.a.indexOf(i.enum,"");a>-1?(n.plugins.settings.dropdown_header={title:i.options.enum_titles[a]},n.require("dropdown_header"),n.setup=(t=n.setup,function(){t.apply(n,r),n.$dropdown.on("mousedown",".selectize-dropdown-header",function(){return n.setValue(""),n.close(),n.blur(),!1})})):function(){var e;n.deleteSelection=(e=n.deleteSelection,function(t){return!!function(e){return!e||8!==e.keyCode}(t)&&e.apply(n,r)})}()});var b=c.a.View.extend({className:"jsoneditor-block",initialize:function(e){if(!(e.schema instanceof h.a))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof m.a))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=o.a.defaults(e,{displayTitle:!0})},toggleInheritance:function(e,t,n){this.options.values=this.options.values.extend(this.getData()),this.options.values=this.options.values.addValueForPath([e,"inherited"],n),this.options.values=this.options.values.addValueForPath([e,"value"],t),this.render()},render:function(){this.$el.empty();var e=o.a.get(this.jsonEditor,"watchlist");return this.jsonEditor=y(this.$el,this.options),this.jsonEditor.watchlist=e,this.options.displayTitle||this.$el.find("[data-header]").parent().hide(),this},isValid:function(){return 0===this.jsonEditor.validate().length},getData:function(){var e=new m.a(this.jsonEditor.getValue());return this.options.schema.hasDefaultProperties()&&(e=e.pick(this.options.schema.raw.defaultProperties)),(e=(e=e.nullifyEmptyPasswords(this.options.schema.getPasswordKeys())).addInheritance(this.options.values.raw)).raw},setData:function(e){this.options.values=this.options.values.extend(e)},watch:function(e,t){this.jsonEditor.watch(e,t)},destroy:function(){var e=this,t=o.a.keys(this.jsonEditor.watchlist);o.a.forEach(t,function(t){e.jsonEditor.unwatch(t)}),this.jsonEditor.destroy(),this.jsonEditor=null}});t.a=b},1408:function(e,t,n){"use strict";n(33),n(27),n(34);var r=n(2),o=n.n(r),i=n(100),a=n.n(i),s=n(1403),c=n(214),u=n(142);var l=a.a.View.extend({initialize:function(e){if(!(e.schema instanceof c.a))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof u.a))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=o.a.defaults(e,{showOnlyRequiredAndEmpty:!1,showOnlyRequired:!1})},render:function(){var e,t=this.options.schema,n=!0;if(this.options.showOnlyRequiredAndEmpty){var r=this.options.schema.getRequiredPropertyKeys(),i=this.options.values.getEmptyValueKeys(t),a=o.a.intersection(r,i);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(a),n=!o.a.isEmpty(a)}else if(this.options.showOnlyRequired){var c=this.options.schema.getRequiredPropertyKeys();t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(c),n=!o.a.isEmpty(c)}return this.subview=new s.a({displayForm:n,hideInheritance:this.options.hideInheritance,displayTitle:!1,el:this.$el,schema:t,values:this.options.values}).render(),(e=this.options.onRendered)&&setTimeout(e,0),this},isValid:function(){return!this.subview||this.subview.isValid()},getData:function(){var e;if(this.subview)return(e=this.subview).getData.apply(e,arguments)},setData:function(e){if(this.subview)return this.options.values=this.options.values.extend(e),this.subview.setData(e)},watch:function(e,t){this.subview&&this.subview.watch(e,t)},destroy:function(){this.subview&&(this.subview.destroy(),this.subview=null)}});t.a=l},1410:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(29),a=n.n(i),s=(n(15),n(36),n(37),n(63),n(33),n(81),n(18),n(27),n(67),n(777),n(62),n(35),n(34),n(2)),c=n(0),u=n.n(c),l=n(16),f=n(778),d=n.n(f),p=(n(159),n(25)),h=function(e){var t=e.children,n=e.disabled,r=e.inProgress,i=e.names,a=e.objectName,s=e.onCancel,c=e.onConfirm,u=e.onExited,f=e.show,d=r?o.a.createElement(p.u.Header,{className:"text-center"},o.a.createElement("span",{className:"fa-stack fa-lg fa-2x text-danger"},o.a.createElement("i",{className:"fa fa-circle fa-stack-2x"}),o.a.createElement("i",{className:"fa fa-refresh fa-spin fa-stack-1x fa-inverse"})),o.a.createElement(p.u.Title,null,Object(l.b)("components.dialogs.delete.titleInProgress"))):o.a.createElement(o.a.Fragment,null,o.a.createElement(p.u.Header,{className:"text-center",closeButton:!n,onHide:s},o.a.createElement("span",{className:"fa-stack fa-lg fa-2x text-danger"},o.a.createElement("i",{className:"fa fa-circle fa-stack-2x"}),o.a.createElement("i",{className:"fa fa-trash fa-stack-1x fa-inverse"})),o.a.createElement(p.u.Title,null,Object(l.b)("components.dialogs.delete.title",{objectName:a}))),o.a.createElement(p.u.Body,null,o.a.createElement("p",{className:"text-center wordwrap",dangerouslySetInnerHTML:{__html:Object(l.b)("components.dialogs.delete.message_interval",{count:i.length,names:i.join(", "),objectName:a,postProcess:"interval"})}}),t),o.a.createElement(p.u.Footer,null,o.a.createElement(p.y,null,o.a.createElement(p.g,{md:6},o.a.createElement(p.c,{block:!0,className:"fr-btn-secondary",disabled:n,onClick:s},Object(l.b)("components.dialogs.delete.no",{objectName:a}))),o.a.createElement(p.g,{md:6},o.a.createElement(p.c,{block:!0,bsStyle:"danger",disabled:n,onClick:c},Object(l.b)("components.dialogs.delete.yes",{objectName:a}))))));return o.a.createElement(p.u,{animation:!0,backdrop:"static",dialogClassName:"dialog-danger",onExited:u,show:f},d)};h.propTypes={children:u.a.node,disabled:u.a.bool,inProgress:u.a.bool,names:u.a.arrayOf(u.a.string).isRequired,objectName:u.a.string.isRequired,onCancel:u.a.func,onConfirm:u.a.func,onExited:u.a.func,show:u.a.bool};var m=h;function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=d()("0.5s"),b=function(e){var t=e.children,n=e.names,i=e.onCancel,a=e.onConfirm,c=e.onExited,u=e.objectName,f=e.show,d=v(Object(r.useState)(!1),2),p=d[0],h=d[1],b=v(Object(r.useState)(!1),2),w=b[0],g=b[1],j=Object(r.useCallback)(function(){h(!0);var e=Object(s.delay)(function(){return g(!0)},y);a().finally(function(){clearTimeout(e),h(!1)})},[a,h,g]),O=Object(r.useCallback)(function(){g(!1),c()},[c,g]);return o.a.createElement(m,{disabled:p,inProgress:w,names:n,objectName:Object(l.b)("objects.".concat(u),{count:n.length}),onCancel:i,onConfirm:j,onExited:O,show:f},t)};b.defaultProps={onExited:s.noop},b.propTypes={children:u.a.node,names:u.a.arrayOf(u.a.string).isRequired,objectName:u.a.string.isRequired,onCancel:u.a.func,onConfirm:u.a.func.isRequired,onExited:u.a.func,show:u.a.bool};var w=b;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var E=function(e){var t=e.onCancel,n=e.onConfirm,i=O(e,["onCancel","onConfirm"]),a=j(Object(r.useState)(!0),2),s=a[0],c=a[1],u=Object(r.useCallback)(function(){c(!1),t()},[t,c]),l=Object(r.useCallback)(function(){return Promise.resolve(n()).finally(function(){return c(!1)})},[n,c]);return o.a.createElement(w,g({onCancel:u,onConfirm:l,show:s},i))};E.defaultProps={onCancel:s.noop},E.propTypes={onCancel:u.a.func,onConfirm:u.a.func.isRequired};var x=E;n.d(t,"b",function(){return S}),n.d(t,"a",function(){return w});var S=function(e){var t=e.children,n=e.names,r=e.objectName,i=e.onCancel,s=e.onConfirm,c=document.getElementById("dialog");a.a.render(o.a.createElement(x,{names:n,objectName:r,onCancel:i,onConfirm:s,onExited:function(){return a.a.unmountComponentAtNode(c)}},t),c)}},1447:function(e,t,n){"use strict";var r=n(39),o=n(46),i=n(274),a=n(101),s=n(782),c=n(781),u=n(780),l=n(68),f=n(44),d=n(376),p=n(218),h=n(784);e.exports=function(e,t,n,m,v){var y=o[e],b=y&&y.prototype,w=y,g=m?"set":"add",j={},O=function(e){var t=b[e];a(b,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(v&&!l(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!l(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(v&&!l(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(i(e,"function"!=typeof y||!(v||b.forEach&&!f(function(){(new y).entries().next()}))))w=n.getConstructor(t,e,m,g),s.REQUIRED=!0;else if(i(e,!0)){var E=new w,x=E[g](v?{}:-0,1)!=E,S=f(function(){E.has(1)}),k=d(function(e){new y(e)}),P=!v&&f(function(){for(var e=new y,t=5;t--;)e[g](t,t);return!e.has(-0)});k||((w=t(function(t,n){u(t,w,e);var r=h(new y,t,w);return null!=n&&c(n,r[g],r,m),r})).prototype=b,b.constructor=w),(S||P)&&(O("delete"),O("has"),m&&O("get")),(P||x)&&O(g),v&&b.clear&&delete b.clear}return j[e]=w,r({global:!0,forced:w!=y},j),p(w,e),v||n.setStrong(w,e,m),w}},1448:function(e,t,n){"use strict";var r=n(83).f,o=n(272),i=n(783),a=n(219),s=n(780),c=n(781),u=n(377),l=n(378),f=n(74),d=n(782).fastKey,p=n(186),h=p.set,m=p.getterFor;e.exports={getConstructor:function(e,t,n,u){var l=e(function(e,r){s(e,l,t),h(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),f||(e.size=0),null!=r&&c(r,e[u],e,n)}),p=m(t),v=function(e,t,n){var r,o,i=p(e),a=y(e,t);return a?a.value=n:(i.last=a={index:o=d(t,!0),key:t,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=a),r&&(r.next=a),f?i.size++:e.size++,"F"!==o&&(i.index[o]=a)),e},y=function(e,t){var n,r=p(e),o=d(t);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==t)return n};return i(l.prototype,{clear:function(){for(var e=p(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=p(this),n=y(this,e);if(n){var r=n.next,o=n.previous;delete t.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),t.first==n&&(t.first=r),t.last==n&&(t.last=o),f?t.size--:this.size--}return!!n},forEach:function(e){for(var t,n=p(this),r=a(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!y(this,e)}}),i(l.prototype,n?{get:function(e){var t=y(this,e);return t&&t.value},set:function(e,t){return v(this,0===e?0:e,t)}}:{add:function(e){return v(this,e=0===e?0:e,e)}}),f&&r(l.prototype,"size",{get:function(){return p(this).size}}),l},setStrong:function(e,t,n){var r=t+" Iterator",o=m(t),i=m(r);u(e,t,function(e,t){h(this,{type:r,target:e,state:o(e),kind:t,last:void 0})},function(){for(var e=i(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})},n?"entries":"values",!n,!0),l(t)}}},1454:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return y}),n.d(t,"f",function(){return b}),n.d(t,"g",function(){return w}),n.d(t,"h",function(){return g}),n.d(t,"e",function(){return j}),n.d(t,"a",function(){return O});n(15),n(36),n(37),n(63),n(33),n(50),n(144),n(1455),n(53),n(54),n(27),n(67),n(1456),n(62),n(35),n(34);var r=n(162),o=n(370),i=n(372),a=n(371);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,d(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(e){return new r.CRESTv2(Object(a.a)("/realm-config/federation/circlesoftrust",e),{middleware:[o.a]})},m=function(e,t,n){return Object(i.a)(h(e).create(t,{id:n}))},v=function(e,t){return Object(i.a)(h(e).get(t))},y=function(e){return h(e).queryFilter()},b=function(e){return h(e).action("schema")},w=function(e,t){return Promise.all(t.map(function(t){return h(e).delete(t)}))},g=function(e,t,n){return Object(i.a)(h(e).update(n,t))},j=function(e){return Promise.all([h(e).action("schema"),h(e).action("template")]).then(function(e){var t=p(e,2);return{schema:t[0],values:t[1]}})},O=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,d(t).call(this,e))).name="COTServiceError",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,u(Error)),t}()},1455:function(e,t,n){"use strict";var r=n(1447),o=n(1448);e.exports=r("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},o,!0)},1456:function(e,t,n){var r=n(39),o=n(187),i=n(215),a=n(69),s=n(68),c=n(272),u=n(1457),l=n(44),f=o("Reflect","construct"),d=l(function(){function e(){}return!(f(function(){},[],e)instanceof e)}),p=!l(function(){f(function(){})}),h=d||p;r({target:"Reflect",stat:!0,forced:h,sham:h},{construct:function(e,t){i(e),a(t);var n=arguments.length<3?e:i(arguments[2]);if(p&&!d)return f(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(u.apply(e,r))}var o=n.prototype,l=c(s(o)?o:Object.prototype),h=Function.apply.call(e,l,t);return s(h)?h:l}})},1457:function(e,t,n){"use strict";var r=n(215),o=n(68),i=[].slice,a={};e.exports=Function.bind||function(e){var t=r(this),n=i.call(arguments,1),s=function(){var r=n.concat(i.call(arguments));return this instanceof s?function(e,t,n){if(!(t in a)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";a[t]=Function("C,a","return new C("+r.join(",")+")")}return a[t](e,n)}(t,r.length,r):t.apply(e,r)};return o(t.prototype)&&(s.prototype=t.prototype),s}},1722:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(31),n(185),n(33),n(53),n(54),n(27),n(67),n(62),n(35),n(34),n(271);var r=n(2),o=n(16),i=n(1454),a=n(162),s=n(370),c=n(371),u=function(e,t){return function(e,t){return new a.CRESTv2(Object(c.a)("/realm-config/federation/entityproviders/".concat(t),e),{middleware:[s.a]})}(e,t).queryFilter()},l=n(1410),f=n(123),d=n(1408),p=n(214),h=n(142),m=n(52),v=n(41),y=n(1294),b=n.n(y);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var P=function(e,t){return Object(r.map)(e,function(e){return"".concat(e._id,"|").concat(t)})},C=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=E(this,x(t).call(this))).template=b.a,e.events={"click [data-delete]":"onDelete","click [data-save]":"onSave"},e}var n,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,f["a"]),n=t,(a=[{key:"render",value:function(e){var t=this,n=j(e,2),o=n[0],a=n[1];this.data={id:a,headerActions:[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}]},this.realm=o,Promise.all([Object(i.f)(o),Object(i.c)(o,a),u(o,"saml2"),u(o,"ws")]).then(function(e){var t=j(e,4),n=t[0],o=t[1],i=t[2],a=t[3],s=function(e,t,n){var o=Object(r.cloneDeep)(e),i=Object(r.get)(o,"properties.trustedProviders.items");if(i){var a=[].concat(k(P(t,"saml2")),k(P(n,"wsfed")));i.enum=a,i.options={enum_titles:a}}return o}(n,i.result,a.result);return{schema:new p.a(s),values:new h.a(o)}}).then(function(e){var n=e.schema,r=e.values;t.schema=n,t.values=r,t.parentRender(function(){var e=new d.a({hideInheritance:!0,schema:n,values:r});t.view=e,t.view.setElement("[data-json-form]"),t.view.render()})})}},{key:"onSave",value:function(){this.view.isValid()?(this.values=this.view.getData(),Object(i.h)(this.realm,this.values,this.data.id).then(function(){m.a.addMessage({message:Object(o.b)("config.messages.CommonMessages.changesSaved")})})):m.a.addMessage({message:Object(o.b)("common.form.validation.errorsNotSaved"),type:m.a.TYPE_DANGER})}},{key:"onDelete",value:function(){var e=this;Object(l.b)({names:[this.data.id],objectName:"circleOfTrust",onConfirm:function(){var t,n=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.g)(e.realm,[e.data.id]);case 2:v.a.routeTo(v.a.configuration.routes.realmsApplicationsFederationCirclesOfTrust,{args:[encodeURIComponent(e.realm)],trigger:!0});case 3:case"end":return t.stop()}},t)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(e){g(i,r,o,a,s,"next",e)}function s(e){g(i,r,o,a,s,"throw",e)}a(void 0)})});return function(){return n.apply(this,arguments)}}()})}}])&&O(n.prototype,a),s&&O(n,s),t}();t.default=C}}]);
//# sourceMappingURL=65.41c757558d.js.map