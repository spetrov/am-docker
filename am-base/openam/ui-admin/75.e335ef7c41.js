(window.webpackJsonp=window.webpackJsonp||[]).push([[75,203,296],{1233:function(e,t,n){var r=n(158);e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:!0})},1301:function(e,t,n){var r=n(158);e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return(null!=(o=e.invokePartial(i(r,"headers/_TitleWithSubAndIcon"),t,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"male",type:"console.applications.oauth2.trustedJwtIssuer.agents.edit.type",title:null!=t?i(t,"id"):t},data:a,helpers:n,partials:r,decorators:e.decorators}))?o:"")+'\n<div class="panel panel-default">\n    <div class="panel-body ">\n        <form data-json-form></form>\n    </div>\n    <div class="panel-footer clearfix">\n'+(null!=(o=e.invokePartial(i(r,"form/_JSONSchemaFooter"),t,{name:"form/_JSONSchemaFooter",data:a,indent:"        ",helpers:n,partials:r,decorators:e.decorators}))?o:"")+"    </div>\n</div>\n"},usePartial:!0,useData:!0})},1403:function(e,t,n){"use strict";n(143),n(63),n(33),n(27),n(19),n(34),n(1413);var r=n(2),a=n.n(r),o=n(14),i=n.n(o),s=n(100),c=n.n(s),u=n(1414),l=n.n(u),f=n(1233),d=n.n(f),p=n(1416),h=n(214),m=n(142),v=n(1411);function b(e,t){var n=t.schema,r=t.values,a=t.hideInheritance,o=void 0!==a&&a;l.a.plugins.selectize.enable=!0,l.a.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]},l.a.defaults.themes.openam=p.a.getTheme(6,4);var s=n.toFlatWithInheritanceMeta(r),c=r.removeInheritance();s=s.raw,c=c.raw;var u=new l.a(e[0],{disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,hide_inheritance:o,iconlib:"fontawesome4",schema:s,theme:"openam"});return function(e){var t=d()();i()(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,n){var r=i()(t);r.popoverclickaway({container:"#content",html:!0,placement:"auto top",content:n.innerHTML}).click(function(e){e.preventDefault()}),i()(n).parent().append(r)})}(e),function(e){i()(e).find("input:password").attr("placeholder",i.a.t("common.form.passwordPlaceholder"))}(e),u.setValue(c),u}n.n(v).a.define("enum_plugin",function(e){var t,n=this,r=arguments,o=e.schema,i=a.a.indexOf(o.enum,"");i>-1?(n.plugins.settings.dropdown_header={title:o.options.enum_titles[i]},n.require("dropdown_header"),n.setup=(t=n.setup,function(){t.apply(n,r),n.$dropdown.on("mousedown",".selectize-dropdown-header",function(){return n.setValue(""),n.close(),n.blur(),!1})})):function(){var e;n.deleteSelection=(e=n.deleteSelection,function(t){return!!function(e){return!e||8!==e.keyCode}(t)&&e.apply(n,r)})}()});var g=c.a.View.extend({className:"jsoneditor-block",initialize:function(e){if(!(e.schema instanceof h.a))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof m.a))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=a.a.defaults(e,{displayTitle:!0})},toggleInheritance:function(e,t,n){this.options.values=this.options.values.extend(this.getData()),this.options.values=this.options.values.addValueForPath([e,"inherited"],n),this.options.values=this.options.values.addValueForPath([e,"value"],t),this.render()},render:function(){this.$el.empty();var e=a.a.get(this.jsonEditor,"watchlist");return this.jsonEditor=b(this.$el,this.options),this.jsonEditor.watchlist=e,this.options.displayTitle||this.$el.find("[data-header]").parent().hide(),this},isValid:function(){return 0===this.jsonEditor.validate().length},getData:function(){var e=new m.a(this.jsonEditor.getValue());return this.options.schema.hasDefaultProperties()&&(e=e.pick(this.options.schema.raw.defaultProperties)),(e=(e=e.nullifyEmptyPasswords(this.options.schema.getPasswordKeys())).addInheritance(this.options.values.raw)).raw},setData:function(e){this.options.values=this.options.values.extend(e)},watch:function(e,t){this.jsonEditor.watch(e,t)},destroy:function(){var e=this,t=a.a.keys(this.jsonEditor.watchlist);a.a.forEach(t,function(t){e.jsonEditor.unwatch(t)}),this.jsonEditor.destroy(),this.jsonEditor=null}});t.a=g},1404:function(e,t,n){"use strict";n(159);t.a=function(e){return e?"&_fields=".concat(e.join(",")):""}},1405:function(e,t,n){"use strict";n(31);t.a=function(e){if(e){var t=e.sizePerPage,n=e.pagedResultsOffset,r=e.sortKey,a=e.sortDirection,o=n?"&_pagedResultsOffset=".concat(n):"",i="&_pageSize=".concat(t),s=r&&a?"&_sortKeys=".concat(encodeURIComponent(a)).concat(r):"";return"".concat(o).concat(i).concat(s)}return""}},1408:function(e,t,n){"use strict";n(33),n(27),n(34);var r=n(2),a=n.n(r),o=n(100),i=n.n(o),s=n(1403),c=n(214),u=n(142);var l=i.a.View.extend({initialize:function(e){if(!(e.schema instanceof c.a))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof u.a))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=a.a.defaults(e,{showOnlyRequiredAndEmpty:!1,showOnlyRequired:!1})},render:function(){var e,t=this.options.schema,n=!0;if(this.options.showOnlyRequiredAndEmpty){var r=this.options.schema.getRequiredPropertyKeys(),o=this.options.values.getEmptyValueKeys(t),i=a.a.intersection(r,o);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(i),n=!a.a.isEmpty(i)}else if(this.options.showOnlyRequired){var c=this.options.schema.getRequiredPropertyKeys();t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(c),n=!a.a.isEmpty(c)}return this.subview=new s.a({displayForm:n,hideInheritance:this.options.hideInheritance,displayTitle:!1,el:this.$el,schema:t,values:this.options.values}).render(),(e=this.options.onRendered)&&setTimeout(e,0),this},isValid:function(){return!this.subview||this.subview.isValid()},getData:function(){var e;if(this.subview)return(e=this.subview).getData.apply(e,arguments)},setData:function(e){if(this.subview)return this.options.values=this.options.values.extend(e),this.subview.setData(e)},watch:function(e,t){this.subview&&this.subview.watch(e,t)},destroy:function(){this.subview&&(this.subview.destroy(),this.subview=null)}});t.a=l},1409:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return s}),n.d(t,"f",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"g",function(){return l});var r="IdentityGatewayAgent",a="J2EEAgent",o="OAuth2Client",i="RemoteConsentAgent",s="SoapSTSAgent",c="SoftwarePublisher",u="WebAgent",l="TrustedJwtIssuer"},1410:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(29),i=n.n(o),s=(n(15),n(36),n(37),n(63),n(33),n(81),n(18),n(27),n(67),n(777),n(62),n(35),n(34),n(2)),c=n(0),u=n.n(c),l=n(16),f=n(778),d=n.n(f),p=(n(159),n(25)),h=function(e){var t=e.children,n=e.disabled,r=e.inProgress,o=e.names,i=e.objectName,s=e.onCancel,c=e.onConfirm,u=e.onExited,f=e.show,d=r?a.a.createElement(p.u.Header,{className:"text-center"},a.a.createElement("span",{className:"fa-stack fa-lg fa-2x text-danger"},a.a.createElement("i",{className:"fa fa-circle fa-stack-2x"}),a.a.createElement("i",{className:"fa fa-refresh fa-spin fa-stack-1x fa-inverse"})),a.a.createElement(p.u.Title,null,Object(l.b)("components.dialogs.delete.titleInProgress"))):a.a.createElement(a.a.Fragment,null,a.a.createElement(p.u.Header,{className:"text-center",closeButton:!n,onHide:s},a.a.createElement("span",{className:"fa-stack fa-lg fa-2x text-danger"},a.a.createElement("i",{className:"fa fa-circle fa-stack-2x"}),a.a.createElement("i",{className:"fa fa-trash fa-stack-1x fa-inverse"})),a.a.createElement(p.u.Title,null,Object(l.b)("components.dialogs.delete.title",{objectName:i}))),a.a.createElement(p.u.Body,null,a.a.createElement("p",{className:"text-center wordwrap",dangerouslySetInnerHTML:{__html:Object(l.b)("components.dialogs.delete.message_interval",{count:o.length,names:o.join(", "),objectName:i,postProcess:"interval"})}}),t),a.a.createElement(p.u.Footer,null,a.a.createElement(p.y,null,a.a.createElement(p.g,{md:6},a.a.createElement(p.c,{block:!0,className:"fr-btn-secondary",disabled:n,onClick:s},Object(l.b)("components.dialogs.delete.no",{objectName:i}))),a.a.createElement(p.g,{md:6},a.a.createElement(p.c,{block:!0,bsStyle:"danger",disabled:n,onClick:c},Object(l.b)("components.dialogs.delete.yes",{objectName:i}))))));return a.a.createElement(p.u,{animation:!0,backdrop:"static",dialogClassName:"dialog-danger",onExited:u,show:f},d)};h.propTypes={children:u.a.node,disabled:u.a.bool,inProgress:u.a.bool,names:u.a.arrayOf(u.a.string).isRequired,objectName:u.a.string.isRequired,onCancel:u.a.func,onConfirm:u.a.func,onExited:u.a.func,show:u.a.bool};var m=h;function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=d()("0.5s"),g=function(e){var t=e.children,n=e.names,o=e.onCancel,i=e.onConfirm,c=e.onExited,u=e.objectName,f=e.show,d=v(Object(r.useState)(!1),2),p=d[0],h=d[1],g=v(Object(r.useState)(!1),2),y=g[0],w=g[1],O=Object(r.useCallback)(function(){h(!0);var e=Object(s.delay)(function(){return w(!0)},b);i().finally(function(){clearTimeout(e),h(!1)})},[i,h,w]),j=Object(r.useCallback)(function(){w(!1),c()},[c,w]);return a.a.createElement(m,{disabled:p,inProgress:y,names:n,objectName:Object(l.b)("objects.".concat(u),{count:n.length}),onCancel:o,onConfirm:O,onExited:j,show:f},t)};g.defaultProps={onExited:s.noop},g.propTypes={children:u.a.node,names:u.a.arrayOf(u.a.string).isRequired,objectName:u.a.string.isRequired,onCancel:u.a.func,onConfirm:u.a.func.isRequired,onExited:u.a.func,show:u.a.bool};var y=g;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E=function(e){var t=e.onCancel,n=e.onConfirm,o=j(e,["onCancel","onConfirm"]),i=O(Object(r.useState)(!0),2),s=i[0],c=i[1],u=Object(r.useCallback)(function(){c(!1),t()},[t,c]),l=Object(r.useCallback)(function(){return Promise.resolve(n()).finally(function(){return c(!1)})},[n,c]);return a.a.createElement(y,w({onCancel:u,onConfirm:l,show:s},o))};E.defaultProps={onCancel:s.noop},E.propTypes={onCancel:u.a.func,onConfirm:u.a.func.isRequired};var P=E;n.d(t,"b",function(){return S}),n.d(t,"a",function(){return y});var S=function(e){var t=e.children,n=e.names,r=e.objectName,o=e.onCancel,s=e.onConfirm,c=document.getElementById("dialog");i.a.render(a.a.createElement(P,{names:n,objectName:r,onCancel:o,onConfirm:s,onExited:function(){return i.a.unmountComponentAtNode(c)}},t),c)}},1412:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"b",function(){return f}),n.d(t,"e",function(){return d}),n.d(t,"f",function(){return p}),n.d(t,"d",function(){return h}),n.d(t,"a",function(){return m}),n.d(t,"g",function(){return v});n(31),n(33),n(27),n(67),n(35),n(34);var r=n(2),a=n(122),o=n(23),i=n(1404),s=n(1405),c=n(38),u=new a.a("".concat(o.a.host).concat(o.a.context,"/json"));function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(s.a)(n.pagination),a=Object(i.a)(n.fields);return u.serviceCall({url:Object(c.a)("/realm-config/agents/groups/".concat(t,"?_queryFilter=true").concat(r).concat(a),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function f(e,t,n){return u.serviceCall({url:Object(c.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function d(e,t){return u.serviceCall({url:Object(c.a)("/realm-config/agents/groups/".concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function p(e,t,n){var a=Object(r.map)(n,function(n){return u.serviceCall({url:Object(c.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE",suppressSpinner:!0})});return Promise.all(a)}function h(e,t){return Promise.all([d(e,t),u.serviceCall({url:Object(c.a)("/realm-config/agents/groups/".concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})]).then(function(e){return{schema:e[0],values:e[1]}})}function m(e,t,n,r){return u.serviceCall({url:Object(c.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(r)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(n),suppressSpinner:!0,errorsHandlers:{incorrectRevisionError:{status:412}}})}function v(e,t,n,a){return u.serviceCall({url:Object(c.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(a)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify(Object(r.omit)(n,"_rev"))})}},1419:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"g",function(){return f}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return p}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return m}),n.d(t,"f",function(){return v});n(31),n(33),n(27),n(67),n(35),n(34);var r=n(2),a=n(122),o=n(23),i=n(1404),s=n(1405),c=n(38),u=new a.a("".concat(o.a.host).concat(o.a.context,"/json"));function l(e,t,n,r){return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(r)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(n),suppressSpinner:!0,errorsHandlers:{incorrectRevisionError:{status:412}}})}function f(e,t,n,a){return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(a)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-Match":"*"},data:JSON.stringify(Object(r.omit)(n,"_rev"))})}function d(e,t,n){return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function p(e,t){return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(s.a)(n.pagination),a=Object(i.a)(n.fields);return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"?_queryFilter=true").concat(r).concat(a),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function m(e,t){return Promise.all([p(e,t),u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})]).then(function(e){return{schema:e[0],values:e[1]}})}function v(e,t,n){var a=Object(r.map)(n,function(n){return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0,type:"DELETE"})});return Promise.all(a)}},1676:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(31),n(185),n(33),n(368),n(53),n(54),n(27),n(67),n(62),n(35),n(114),n(34),n(271);var r=n(2),a=n(16),o=n(14),i=n.n(o),s=n(1419),c=n(1412),u=n(1409),l=n(1410),f=n(123),d=n(1408),p=n(214),h=n(142),m=n(52),v=n(41),b=n(1301),g=n.n(b);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var C=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=E(this,P(t).call(this))).template=g.a,e.events={"click [data-delete]":"onDelete","click [data-inherit-value]":"toggleInheritance","click [data-save]":"onSave"},e}var n,o,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,f["a"]),n=t,(o=[{key:"getGroupValues",value:function(e,t){return e?Object(c.b)(t,u.g,e):i.a.Deferred().resolve({})}},{key:"render",value:function(e){var t=this,n=O(e,2),o=n[0],l=n[1];this.data={id:l,headerActions:[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}]},this.realm=o,Promise.all([Object(s.e)(o,u.g),Object(s.b)(o,u.g,l),Object(c.c)(o,u.g)]).then(function(e){var n=O(e,3),s=n[0],c=n[1];!function(e,t){var n=Object(r.get)(e,"properties.agentgroup");if(n){var o=Object(r.map)(t.result,"_id"),i=[""].concat(A(o)),s=[Object(a.b)("common.form.unassigned")].concat(A(o));n.additional={alert:"alert-info"},n.enum=i,n.options={enum_titles:s}}else console.error('[EditTrustedJwtIssuerAgent] Unable to add available Trusted JWT Issuer Agent Groups to "agentgroup" property.')}(s,n[2]),t.schema=new p.a(s),t.values=new h.a(c),t.nonInheritedValues=Object(r.cloneDeep)(t.values);var u=function(){var e=function(e,t){var n=t.replace(".",".properties."),a=Object(r.get)(e.raw.properties,n);return e.hasInheritance(a)},n=function(e,n){var r=t.view;r.options.hideInheritance=!e,r.setData(n),r.render()},a=t.view.subview.jsonEditor.element,s=i()("[name='root[agentgroup]']",a).val(),c=t.values.raw.agentgroup;if(s)s===c?n(s):t.getGroupValues(s,o).then(function(a){t.defaultValues=new h.a(a);var o=Object(r.mapValues)(t.values.raw,function(n,o){if(Object(r.startsWith)(o,"_"))return n;if(e(t.schema,o)){var i=Object(r.get)(n,"inherited")?Object(r.get)(a,o):n.value;return{inherited:n.inherited,value:i}}return n});t.values=new h.a(o).addValueForPath("agentgroup",s),n(s,t.values.raw)});else{var u=Object(r.mapValues)(t.nonInheritedValues.raw,function(n,r){return e(t.schema,r)?{inherited:!1,value:n.value}:n});t.values=new h.a(u).addValueForPath("agentgroup",s),n(s,t.values.raw)}},l=Object(r.get)(t.values.raw,"agentgroup");t.getGroupValues(l,o).then(function(e){t.defaultValues=new h.a(e),t.parentRender(function(){var e=Object(r.get)(t.values.raw,"agentgroup"),n=new d.a({hideInheritance:Object(r.isEmpty)(e),schema:new p.a(t.schema.raw),values:new h.a(Object(r.cloneDeep)(t.values.raw)),onRendered:function(){n.watch("root.agentgroup",u)}});t.view=n,t.view.setElement("[data-json-form]"),t.view.render()})})})}},{key:"updateValues",value:function(){this.values=this.values.extend(this.view.getData()),this.nonInheritedValues=Object(r.cloneDeep)(this.values)}},{key:"onSave",value:function(){if(this.view.isValid()){this.updateValues();var e=this.values.removeNullPasswords(this.schema);Object(s.g)(this.realm,u.g,e.raw,this.data.id).then(function(){m.a.addMessage({message:Object(a.b)("config.messages.CommonMessages.changesSaved")})},function(e){m.a.addMessage({response:e,type:m.a.TYPE_DANGER})})}else m.a.addMessage({message:Object(a.b)("common.form.validation.errorsNotSaved"),type:m.a.TYPE_DANGER})}},{key:"toggleInheritance",value:function(e){var t=e.currentTarget,n=t.getAttribute("data-schemapath").slice(5),r=!("true"===t.getAttribute("data-inherit-value")),a=r?this.defaultValues.raw[n]:this.nonInheritedValues.raw[n].value;r&&(this.nonInheritedValues.raw[n].value=this.view.getData()[n].value),this.view.subview.toggleInheritance(n,a,r),this.values=this.values.addValueForPath(n,{inherited:r,value:a})}},{key:"onDelete",value:function(){var e=this;Object(l.b)({names:[this.data.id],objectName:"agent",onConfirm:function(){var t,n=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s.f)(e.realm,u.g,[e.data.id]);case 3:v.a.routeTo(v.a.configuration.routes.realmsApplicationsOAuth2TrustedJwtIssuer,{args:[encodeURIComponent(e.realm)],trigger:!0}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),m.a.addMessage({response:t.t0,type:m.a.TYPE_DANGER});case 9:case"end":return t.stop()}},t,null,[[0,6]])}),function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function i(e){w(o,r,a,i,s,"next",e)}function s(e){w(o,r,a,i,s,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}()})}}])&&j(n.prototype,o),b&&j(n,b),t}();t.default=C}}]);
//# sourceMappingURL=75.e335ef7c41.js.map