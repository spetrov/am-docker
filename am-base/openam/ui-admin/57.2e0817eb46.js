(window.webpackJsonp=window.webpackJsonp||[]).push([[57,295,296],{1233:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:!0})},1235:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({1:function(e,t,n,a,r){return"checked"},3:function(e,t,n,a,r){return"block-header-inactive"},5:function(e,t,n,a,r){return'        <span class="text-muted">schema.raw.description</span>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,i=null!=t?t:e.nullContext||{},s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="form-inline">\n    <label class="am-toggle-switch pull-right">\n        <input data-json-editor-toggle type="checkbox" '+(null!=(o=s(n,"if").call(i,null!=t?s(t,"enablePropertyValue"):t,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:10,column:55},end:{line:10,column:96}}}))?o:"")+' />\n        <span />\n    </label>\n\n    <h3 class="block-header '+(null!=(o=s(n,"unless").call(i,null!=t?s(t,"enablePropertyValue"):t,{name:"unless",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r,loc:{start:{line:14,column:28},end:{line:14,column:91}}}))?o:"")+'">\n        '+e.escapeExpression(e.lambda(null!=(o=null!=(o=null!=t?s(t,"schema"):t)?s(o,"raw"):o)?s(o,"title"):o,t))+"\n    </h3>\n\n"+(null!=(o=s(n,"if").call(i,null!=(o=null!=(o=null!=t?s(t,"schema"):t)?s(o,"raw"):o)?s(o,"description"):o,{name:"if",hash:{},fn:e.program(5,r,0),inverse:e.noop,data:r,loc:{start:{line:18,column:4},end:{line:20,column:11}}}))?o:"")+"</div>\n\n<div data-toggleable-json-editor/>"},useData:!0})},1400:function(e,t,n){"use strict";n(50),n(144);var a=n(2),r=n.n(a),o=n(1),i=n.n(o),s=n(41),c=n(88);t.a=function(e){var t=function(t){var n=s.a.currentRoute,a=s.a.extractParameters(n,c.a.getCurrentFragment()),o=s.a.applyDefaultParameters(n,a),l={params:r.a.map(o,function(e){return e?decodeURIComponent(e):""})};return i.a.createElement(e,r.a.extend({},t,{router:l}))};return t.displayName="withRouter(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),t.WrappedComponent=e,t}},1401:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=r.a.shape({params:r.a.array.isRequired});t.a=o},1402:function(e,t,n){"use strict";n(144),n(81);var a=n(1424),r=n(1),o=n.n(r),i=n(64);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var c=a.a.apply(void 0,n)(e),l=function(e){return o.a.createElement(c,s({},e,{store:i.a}))};return l.displayName="connectWithStore(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),l.WrappedComponent=e,l}},1403:function(e,t,n){"use strict";n(143),n(63),n(33),n(27),n(19),n(34),n(1413);var a=n(2),r=n.n(a),o=n(14),i=n.n(o),s=n(100),c=n.n(s),l=n(1414),u=n.n(l),p=n(1233),d=n.n(p),h=n(1416),f=n(214),m=n(142),b=n(1411);function y(e,t){var n=t.schema,a=t.values,r=t.hideInheritance,o=void 0!==r&&r;u.a.plugins.selectize.enable=!0,u.a.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]},u.a.defaults.themes.openam=h.a.getTheme(6,4);var s=n.toFlatWithInheritanceMeta(a),c=a.removeInheritance();s=s.raw,c=c.raw;var l=new u.a(e[0],{disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,hide_inheritance:o,iconlib:"fontawesome4",schema:s,theme:"openam"});return function(e){var t=d()();i()(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,n){var a=i()(t);a.popoverclickaway({container:"#content",html:!0,placement:"auto top",content:n.innerHTML}).click(function(e){e.preventDefault()}),i()(n).parent().append(a)})}(e),function(e){i()(e).find("input:password").attr("placeholder",i.a.t("common.form.passwordPlaceholder"))}(e),l.setValue(c),l}n.n(b).a.define("enum_plugin",function(e){var t,n=this,a=arguments,o=e.schema,i=r.a.indexOf(o.enum,"");i>-1?(n.plugins.settings.dropdown_header={title:o.options.enum_titles[i]},n.require("dropdown_header"),n.setup=(t=n.setup,function(){t.apply(n,a),n.$dropdown.on("mousedown",".selectize-dropdown-header",function(){return n.setValue(""),n.close(),n.blur(),!1})})):function(){var e;n.deleteSelection=(e=n.deleteSelection,function(t){return!!function(e){return!e||8!==e.keyCode}(t)&&e.apply(n,a)})}()});var g=c.a.View.extend({className:"jsoneditor-block",initialize:function(e){if(!(e.schema instanceof f.a))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof m.a))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=r.a.defaults(e,{displayTitle:!0})},toggleInheritance:function(e,t,n){this.options.values=this.options.values.extend(this.getData()),this.options.values=this.options.values.addValueForPath([e,"inherited"],n),this.options.values=this.options.values.addValueForPath([e,"value"],t),this.render()},render:function(){this.$el.empty();var e=r.a.get(this.jsonEditor,"watchlist");return this.jsonEditor=y(this.$el,this.options),this.jsonEditor.watchlist=e,this.options.displayTitle||this.$el.find("[data-header]").parent().hide(),this},isValid:function(){return 0===this.jsonEditor.validate().length},getData:function(){var e=new m.a(this.jsonEditor.getValue());return this.options.schema.hasDefaultProperties()&&(e=e.pick(this.options.schema.raw.defaultProperties)),(e=(e=e.nullifyEmptyPasswords(this.options.schema.getPasswordKeys())).addInheritance(this.options.values.raw)).raw},setData:function(e){this.options.values=this.options.values.extend(e)},watch:function(e,t){this.jsonEditor.watch(e,t)},destroy:function(){var e=this,t=r.a.keys(this.jsonEditor.watchlist);r.a.forEach(t,function(t){e.jsonEditor.unwatch(t)}),this.jsonEditor.destroy(),this.jsonEditor=null}});t.a=g},1406:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),i=n(1),s=n.n(i),c=function(e){var t=e.children,n=e.icon,r=e.title,o=e.subtitle,i=o?"deep":"shallow",c=n?s.a.createElement("span",{className:"header-icon pull-left bg-primary"},s.a.createElement("i",{className:"fa fa-".concat(n)})):null,l=function(e){return e?Object(a.isString)(e)?s.a.createElement("h4",{className:"page-type"},e):e:null}(o);return s.a.createElement("header",{className:"page-header page-header-no-border clearfix"},c,s.a.createElement("div",{className:"button-group pull-right ".concat(i,"-page-header-button-group")},t),s.a.createElement("div",{className:"pull-left"},l,s.a.createElement("h1",{className:"wordwrap"},r)))};c.propTypes={children:o.a.node,icon:o.a.string,subtitle:o.a.node,title:o.a.string.isRequired},t.a=c},1407:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(16);t.a=function(){return r.a.createElement("p",{className:"loading text-muted"},r.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-2x fa-fw"}),r.a.createElement("span",null,Object(o.b)("console.common.loading")))}},1415:function(e,t,n){"use strict";n(15),n(36),n(37),n(31),n(185),n(33),n(27),n(161),n(62),n(35),n(34);var a=n(25),r=n(2),o=n(16),i=n(0),s=n.n(i),c=n(1),l=n.n(c),u=n(41),p=n(1400),d=n(1401);function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(e){var t=e.backRoute,n=e.backRouteArgs,i=e.disabled,s=e.onCreateClick,c=e.router.params[0],p=Object(r.map)([c].concat(h(n)),encodeURIComponent),d="#".concat(u.a.getLink(t,p));return l.a.createElement(a.f,null,l.a.createElement("div",{className:"pull-right"},l.a.createElement("div",{className:"am-btn-action-group"},l.a.createElement(a.c,{href:d},Object(o.b)("common.form.cancel")),l.a.createElement(a.c,{bsStyle:"primary",disabled:i,onClick:s},Object(o.b)("common.form.create")))))};f.defaultProps={backRouteArgs:[],disabled:!1},f.propTypes={backRoute:s.a.shape({url:s.a.oneOfType([s.a.string,s.a.instanceOf(RegExp)]).isRequired,pattern:s.a.string.isRequired}).isRequired,backRouteArgs:s.a.arrayOf(s.a.string),disabled:s.a.bool,onCreateClick:s.a.func.isRequired,router:d.a},t.a=Object(p.a)(f)},1420:function(e,t,n){"use strict";var a=n(2);t.a=function(e){return!!Object(a.isEmpty)(e)||!("."===e||".."===e||Object(a.startsWith)(e," ")||Object(a.endsWith)(e," ")||Object(a.startsWith)(e,"#")||Object(a.startsWith)(e,'"')||Object(a.includes)(e,"\\")||Object(a.includes)(e,"/")||Object(a.includes)(e,"+")||Object(a.includes)(e,";")||Object(a.includes)(e,",")||Object(a.includes)(e,"%")||Object(a.includes)(e,"[")||Object(a.includes)(e,"]")||Object(a.includes)(e,"|")||Object(a.includes)(e,"?"))}},1421:function(e,t,n){"use strict";n(15),n(36),n(37),n(31),n(33),n(53),n(54),n(27),n(35),n(34);var a=n(25),r=n(2),o=n(0),i=n.n(o),s=n(1),c=n.n(s);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){var e,n,a,r,o,i,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return a=this,r=(e=p(t)).call.apply(e,[this].concat(u)),n=!r||"object"!==l(r)&&"function"!=typeof r?d(a):r,o=d(n),s=function(e){n.props.onChange(e.target.value)},(i="handleOnChange")in o?Object.defineProperty(o,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[i]=s,n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,s["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.isGrid,n=e.isValid,o=e.value,i=e.validationMessage,s=e.label,l=e.placeholder,u=!n&&i?c.a.createElement(a.o,null,c.a.createElement("small",{dangerouslySetInnerHTML:{__html:i}})):null,p=c.a.createElement(a.l,{onChange:this.handleOnChange,placeholder:l,type:"text",value:o});return t?c.a.createElement(a.m,{controlId:Object(r.uniqueId)("formGroupInput"),validationState:n?null:"error"},c.a.createElement(a.f,null,c.a.createElement(a.g,{componentClass:a.i,sm:4},s),c.a.createElement(a.g,{sm:6},p,u))):c.a.createElement(a.m,{controlId:Object(r.uniqueId)("formGroupInput"),validationState:n?null:"error"},c.a.createElement(a.f,null,c.a.createElement(a.i,null,s),p,u))}}])&&u(n.prototype,o),i&&u(n,i),t}();f.defaultProps={isGrid:!0,isValid:!0},f.propTypes={isGrid:i.a.bool,isValid:i.a.bool,label:i.a.string.isRequired,onChange:i.a.func.isRequired,placeholder:i.a.string,validationMessage:i.a.string,value:i.a.string.isRequired},t.a=f},1435:function(e,t,n){"use strict";n(33),n(50),n(27),n(34);var a=n(2),r=n.n(a),o=n(100),i=n.n(o),s=n(1403),c=(n(143),n(214)),l=n(142),u=n(1235),p=n.n(u),d=i.a.View.extend({className:"jsoneditor-block",initialize:function(e){if(!(e.schema instanceof c.a))throw new TypeError('[TogglableJSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof l.a))throw new TypeError('[TogglableJSONEditorView] "values" argument is not an instance of JSONValues.');this.options=e,this.options.enablePropertyKey=this.options.schema.getEnableKey(),this.options.enablePropertyValue=this.options.values.raw[this.options.enablePropertyKey],this.options.schema=e.schema.omit(this.options.enablePropertyKey),this.options.values=e.values.omit(this.options.enablePropertyKey)},onEnabledChange:function(e){var t=e.currentTarget.checked;this.options.enablePropertyValue=t,this.$el.find(".block-header").toggleClass("block-header-inactive"),this.options.schema.isEmpty()||(t?this.$el.find("[data-toggleable-json-editor]").slideDown(250):this.$el.find("[data-toggleable-json-editor]").slideUp(250))},render:function(){var e=p()(this.options);return this.$el.html(e),this.$el.find("[data-json-editor-toggle]").change(r.a.bind(this.onEnabledChange,this)),this.jsonEditor=new s.a({el:this.$el.find("[data-toggleable-json-editor]"),displayTitle:!1,schema:this.options.schema,values:this.options.values}),this.options.enablePropertyValue||this.$el.find("[data-toggleable-json-editor]").hide(),this.jsonEditor.render(),this},getData:function(){var e=r.a.clone(this.jsonEditor.getData());return e[this.options.enablePropertyKey]=this.options.enablePropertyValue,e}}),h=function(e){return new(e.schema.hasEnableProperty()?d:s.a)(e)},f=function(e){return Object(a.isEmpty)(e.schema.raw.defaultProperties)},m=function(e){var t=e.schema.getRequiredPropertyKeys();return Object(a.extend)(e,{schema:e.schema.addDefaultProperties(t)})},b=function(e){var t=e.schema.getRequiredPropertyKeys(),n=e.values.getEmptyValueKeys(e.schema),r=Object(a.intersection)(t,n);return Object(a.extend)(e,{schema:e.schema.addDefaultProperties(r)})},y=function(e){return Object(a.isEmpty)(e.schema.raw.defaultProperties)&&e.schema.hasEnableProperty()?Object(a.extend)(e,{schema:e.schema.getEnableProperty().addDefaultProperties([e.schema.getEnableKey()])}):e};var g=i.a.View.extend({initialize:function(e){if(!(e.schema instanceof c.a))throw new TypeError('[GroupedJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!e.schema.isCollection())throw new Error("[GroupedJSONSchemaView] Only JSONSchema collections are supported by this view.");if(!(e.values instanceof l.a))throw new TypeError('[GroupedJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=r.a.defaults(e,{showOnlyRequired:!1,showOnlyRequiredAndEmpty:!1})},render:function(){var e,t=this,n=this.options.schema.getPropertiesAsSchemas(),a=this.options.values.raw,o=this.options.schema.getKeys(!0),i=r.a.map(o,function(e){return{key:e,hideInheritance:t.options.hideInheritance,schema:n[e],values:new l.a(a[e])}});return this.options.showOnlyRequiredAndEmpty?i=r()(i).map(b).map(y).omitBy(f).value():this.options.showOnlyRequired&&(i=r()(i).map(m).map(y).omitBy(f).value()),this.displayForm=!r.a.isEmpty(i),this.subviews=r()(i).map(h).invokeMap("render").each(function(e){e.$el.appendTo(t.$el)}),(e=this.options.onRendered)&&setTimeout(e,0),this},getData:function(){var e=r.a.map(this.subviews,function(e){var t,n,a,r;return e.options.key?(n={},a=e.options.key,r=e.getData(),a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,t=n):t=e.getData(),t});return r.a.reduce(e,r.a.merge,{})}});t.a=g},1449:function(e,t,n){"use strict";n.d(t,"e",function(){return u}),n.d(t,"d",function(){return p}),n.d(t,"a",function(){return d}),n.d(t,"b",function(){return h}),n.d(t,"g",function(){return f}),n.d(t,"c",function(){return m}),n.d(t,"f",function(){return b});n(31),n(33),n(27),n(67),n(35),n(34);var a=n(2),r=n(122),o=n(23),i=n(38),s=new r.a("".concat(o.a.host).concat(o.a.context,"/json")),c="/realm-config/services/sts/";function l(e,t){return s.serviceCall({url:Object(i.a)("".concat(c).concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function u(e,t){return s.serviceCall({url:Object(i.a)("".concat(c).concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function p(e,t){return Promise.all([u(e,t),l(e,t)]).then(function(e){return{schema:e[0],values:e[1]}})}function d(e,t,n,a){return s.serviceCall({url:Object(i.a)("".concat(c).concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},type:"PUT",data:JSON.stringify(a)})}function h(e,t,n){return s.serviceCall({url:Object(i.a)("".concat(c).concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"GET"})}function f(e,t,n,a){return s.serviceCall({url:Object(i.a)("".concat(c).concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-Match":"*"},type:"PUT",data:JSON.stringify(a)})}function m(e,t){return s.serviceCall({url:Object(i.a)("".concat(c).concat(t,"?_queryFilter=true"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"GET"})}function b(e,t,n){var r=Object(a.map)(n,function(n){return s.serviceCall({url:Object(i.a)("".concat(c).concat(t,"/").concat(encodeURIComponent(n._id)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(r)}},1450:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a="rest-sts",r="soap-sts"},1758:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(33),n(53),n(54),n(27),n(35),n(34);var a=n(10),r=n(2),o=n(0),i=n.n(o),s=n(1),c=n.n(s),l=n(1449),u=n(527),p=n(528),d=n(1450),h=n(1402),f=n(142),m=n(214),b=n(52),y=(n(31),n(25)),g=n(16),v=n(1415),w=n(1421),O=n(1435),j=n(1407),E=n(1406),P=n(41);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return a=this,r=(e=R(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==S(r)&&"function"!=typeof r?k(a):r,T(k(n),"handleCreate",function(){n.props.onCreate(n.jsonSchemaView.getData())}),T(k(n),"setRef",function(e){n.jsonForm=e}),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,s["Component"]),n=t,(a=[{key:"componentDidUpdate",value:function(){!this.jsonSchemaView&&this.props.template&&(this.jsonSchemaView=new O.a({schema:new m.a(this.props.schema),values:new f.a(this.props.template),showOnlyRequired:!0}),this.jsonForm.appendChild(this.jsonSchemaView.render().el))}},{key:"render",value:function(){var e;return e=this.props.isFetching?c.a.createElement(j.a,null):c.a.createElement(y.k,{horizontal:!0},c.a.createElement(w.a,{isValid:this.props.isValidId,label:Object(g.b)("console.sts.deploymentUrlElement"),onChange:this.props.onIdChange,validationMessage:Object(g.b)("console.common.validation.invalidCharacters"),value:this.props.id}),c.a.createElement("div",{ref:this.setRef})),c.a.createElement("div",null,c.a.createElement(E.a,{title:Object(g.b)("console.sts.soap.new.title")}),c.a.createElement(y.w,null,c.a.createElement(y.w.Body,null,e),c.a.createElement(y.w.Footer,null,c.a.createElement(v.a,{backRoute:P.a.configuration.routes.realmsSts,disabled:!this.props.isCreateAllowed,onCreateClick:this.handleCreate}))))}}])&&C(n.prototype,a),r&&C(n,r),t}();_.propTypes={id:i.a.string.isRequired,isCreateAllowed:i.a.bool.isRequired,isFetching:i.a.bool.isRequired,isValidId:i.a.bool.isRequired,onCreate:i.a.func.isRequired,onIdChange:i.a.func.isRequired,schema:i.a.objectOf(i.a.object).isRequired,template:i.a.objectOf(i.a.object).isRequired};var I=_,N=n(1400),A=n(1401),q=n(1420);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=J(t).call(this),e=!a||"object"!==x(a)&&"function"!=typeof a?F(n):a,G(F(e),"handleIdChange",function(t){e.setState({id:t})}),G(F(e),"handleCreate",function(t){var n=e.props.router.params[0],a=new f.a(t).removeNullPasswords(new m.a(e.props.schema));Object(l.a)(n,d.b,e.state.id,a.raw).then(function(){P.a.routeTo(P.a.configuration.routes.realmsStsSoapEdit,{args:Object(r.map)([n,e.state.id],encodeURIComponent),trigger:!0})},function(e){b.a.addMessage({response:e,type:b.a.TYPE_DANGER})})}),e.state={isFetching:!0,id:""},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,s["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=this,t=this.props.router.params[0];Object(l.d)(t,d.b).then(function(t){var n=t.schema,a=t.values;e.setState({isFetching:!1}),e.props.setSchema(n),e.props.setTemplate(a)},function(t){e.setState({isFetching:!1}),b.a.addMessage({response:t,type:b.a.TYPE_DANGER})})}},{key:"render",value:function(){var e=Object(q.a)(this.state.id),t=e&&!Object(r.isEmpty)(this.state.id);return c.a.createElement(I,{id:this.state.id,isCreateAllowed:t,isFetching:this.state.isFetching,isValidId:e,onCreate:this.handleCreate,onIdChange:this.handleIdChange,schema:this.props.schema,template:this.props.template})}}])&&D(n.prototype,a),o&&D(n,o),t}();K.propTypes={router:A.a,schema:i.a.shape({type:i.a.string.isRequired}),setSchema:i.a.func.isRequired,setTemplate:i.a.func.isRequired,template:i.a.shape({type:i.a.string.isRequired})},K=Object(h.a)(K,function(e){return{schema:e.remote.config.realm.sts.soap.schema,template:e.remote.config.realm.sts.soap.template}},function(e){return{setSchema:Object(a.a)(u.b,e),setTemplate:Object(a.a)(p.b,e)}}),K=Object(N.a)(K);t.default=K}}]);
//# sourceMappingURL=57.2e0817eb46.js.map