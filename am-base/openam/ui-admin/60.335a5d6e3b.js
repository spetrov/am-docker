(window.webpackJsonp=window.webpackJsonp||[]).push([[60,296],{1233:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:!0})},1400:function(e,t,n){"use strict";n(50),n(144);var a=n(2),r=n.n(a),o=n(1),i=n.n(o),c=n(41),s=n(88);t.a=function(e){var t=function(t){var n=c.a.currentRoute,a=c.a.extractParameters(n,s.a.getCurrentFragment()),o=c.a.applyDefaultParameters(n,a),l={params:r.a.map(o,function(e){return e?decodeURIComponent(e):""})};return i.a.createElement(e,r.a.extend({},t,{router:l}))};return t.displayName="withRouter(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),t.WrappedComponent=e,t}},1401:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=r.a.shape({params:r.a.array.isRequired});t.a=o},1402:function(e,t,n){"use strict";n(144),n(81);var a=n(1424),r=n(1),o=n.n(r),i=n(64);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=a.a.apply(void 0,n)(e),l=function(e){return o.a.createElement(s,c({},e,{store:i.a}))};return l.displayName="connectWithStore(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),l.WrappedComponent=e,l}},1403:function(e,t,n){"use strict";n(143),n(63),n(33),n(27),n(19),n(34),n(1413);var a=n(2),r=n.n(a),o=n(14),i=n.n(o),c=n(100),s=n.n(c),l=n(1414),u=n.n(l),p=n(1233),d=n.n(p),f=n(1416),h=n(214),m=n(142),b=n(1411);function y(e,t){var n=t.schema,a=t.values,r=t.hideInheritance,o=void 0!==r&&r;u.a.plugins.selectize.enable=!0,u.a.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]},u.a.defaults.themes.openam=f.a.getTheme(6,4);var c=n.toFlatWithInheritanceMeta(a),s=a.removeInheritance();c=c.raw,s=s.raw;var l=new u.a(e[0],{disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,hide_inheritance:o,iconlib:"fontawesome4",schema:c,theme:"openam"});return function(e){var t=d()();i()(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,n){var a=i()(t);a.popoverclickaway({container:"#content",html:!0,placement:"auto top",content:n.innerHTML}).click(function(e){e.preventDefault()}),i()(n).parent().append(a)})}(e),function(e){i()(e).find("input:password").attr("placeholder",i.a.t("common.form.passwordPlaceholder"))}(e),l.setValue(s),l}n.n(b).a.define("enum_plugin",function(e){var t,n=this,a=arguments,o=e.schema,i=r.a.indexOf(o.enum,"");i>-1?(n.plugins.settings.dropdown_header={title:o.options.enum_titles[i]},n.require("dropdown_header"),n.setup=(t=n.setup,function(){t.apply(n,a),n.$dropdown.on("mousedown",".selectize-dropdown-header",function(){return n.setValue(""),n.close(),n.blur(),!1})})):function(){var e;n.deleteSelection=(e=n.deleteSelection,function(t){return!!function(e){return!e||8!==e.keyCode}(t)&&e.apply(n,a)})}()});var v=s.a.View.extend({className:"jsoneditor-block",initialize:function(e){if(!(e.schema instanceof h.a))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof m.a))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=r.a.defaults(e,{displayTitle:!0})},toggleInheritance:function(e,t,n){this.options.values=this.options.values.extend(this.getData()),this.options.values=this.options.values.addValueForPath([e,"inherited"],n),this.options.values=this.options.values.addValueForPath([e,"value"],t),this.render()},render:function(){this.$el.empty();var e=r.a.get(this.jsonEditor,"watchlist");return this.jsonEditor=y(this.$el,this.options),this.jsonEditor.watchlist=e,this.options.displayTitle||this.$el.find("[data-header]").parent().hide(),this},isValid:function(){return 0===this.jsonEditor.validate().length},getData:function(){var e=new m.a(this.jsonEditor.getValue());return this.options.schema.hasDefaultProperties()&&(e=e.pick(this.options.schema.raw.defaultProperties)),(e=(e=e.nullifyEmptyPasswords(this.options.schema.getPasswordKeys())).addInheritance(this.options.values.raw)).raw},setData:function(e){this.options.values=this.options.values.extend(e)},watch:function(e,t){this.jsonEditor.watch(e,t)},destroy:function(){var e=this,t=r.a.keys(this.jsonEditor.watchlist);r.a.forEach(t,function(t){e.jsonEditor.unwatch(t)}),this.jsonEditor.destroy(),this.jsonEditor=null}});t.a=v},1406:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),i=n(1),c=n.n(i),s=function(e){var t=e.children,n=e.icon,r=e.title,o=e.subtitle,i=o?"deep":"shallow",s=n?c.a.createElement("span",{className:"header-icon pull-left bg-primary"},c.a.createElement("i",{className:"fa fa-".concat(n)})):null,l=function(e){return e?Object(a.isString)(e)?c.a.createElement("h4",{className:"page-type"},e):e:null}(o);return c.a.createElement("header",{className:"page-header page-header-no-border clearfix"},s,c.a.createElement("div",{className:"button-group pull-right ".concat(i,"-page-header-button-group")},t),c.a.createElement("div",{className:"pull-left"},l,c.a.createElement("h1",{className:"wordwrap"},r)))};s.propTypes={children:o.a.node,icon:o.a.string,subtitle:o.a.node,title:o.a.string.isRequired},t.a=s},1407:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(16);t.a=function(){return r.a.createElement("p",{className:"loading text-muted"},r.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-2x fa-fw"}),r.a.createElement("span",null,Object(o.b)("console.common.loading")))}},1408:function(e,t,n){"use strict";n(33),n(27),n(34);var a=n(2),r=n.n(a),o=n(100),i=n.n(o),c=n(1403),s=n(214),l=n(142);var u=i.a.View.extend({initialize:function(e){if(!(e.schema instanceof s.a))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof l.a))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=r.a.defaults(e,{showOnlyRequiredAndEmpty:!1,showOnlyRequired:!1})},render:function(){var e,t=this.options.schema,n=!0;if(this.options.showOnlyRequiredAndEmpty){var a=this.options.schema.getRequiredPropertyKeys(),o=this.options.values.getEmptyValueKeys(t),i=r.a.intersection(a,o);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(i),n=!r.a.isEmpty(i)}else if(this.options.showOnlyRequired){var s=this.options.schema.getRequiredPropertyKeys();t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(s),n=!r.a.isEmpty(s)}return this.subview=new c.a({displayForm:n,hideInheritance:this.options.hideInheritance,displayTitle:!1,el:this.$el,schema:t,values:this.options.values}).render(),(e=this.options.onRendered)&&setTimeout(e,0),this},isValid:function(){return!this.subview||this.subview.isValid()},getData:function(){var e;if(this.subview)return(e=this.subview).getData.apply(e,arguments)},setData:function(e){if(this.subview)return this.options.values=this.options.values.extend(e),this.subview.setData(e)},watch:function(e,t){this.subview&&this.subview.watch(e,t)},destroy:function(){this.subview&&(this.subview.destroy(),this.subview=null)}});t.a=u},1415:function(e,t,n){"use strict";n(15),n(36),n(37),n(31),n(185),n(33),n(27),n(161),n(62),n(35),n(34);var a=n(25),r=n(2),o=n(16),i=n(0),c=n.n(i),s=n(1),l=n.n(s),u=n(41),p=n(1400),d=n(1401);function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=function(e){var t=e.backRoute,n=e.backRouteArgs,i=e.disabled,c=e.onCreateClick,s=e.router.params[0],p=Object(r.map)([s].concat(f(n)),encodeURIComponent),d="#".concat(u.a.getLink(t,p));return l.a.createElement(a.f,null,l.a.createElement("div",{className:"pull-right"},l.a.createElement("div",{className:"am-btn-action-group"},l.a.createElement(a.c,{href:d},Object(o.b)("common.form.cancel")),l.a.createElement(a.c,{bsStyle:"primary",disabled:i,onClick:c},Object(o.b)("common.form.create")))))};h.defaultProps={backRouteArgs:[],disabled:!1},h.propTypes={backRoute:c.a.shape({url:c.a.oneOfType([c.a.string,c.a.instanceOf(RegExp)]).isRequired,pattern:c.a.string.isRequired}).isRequired,backRouteArgs:c.a.arrayOf(c.a.string),disabled:c.a.bool,onCreateClick:c.a.func.isRequired,router:d.a},t.a=Object(p.a)(h)},1420:function(e,t,n){"use strict";var a=n(2);t.a=function(e){return!!Object(a.isEmpty)(e)||!("."===e||".."===e||Object(a.startsWith)(e," ")||Object(a.endsWith)(e," ")||Object(a.startsWith)(e,"#")||Object(a.startsWith)(e,'"')||Object(a.includes)(e,"\\")||Object(a.includes)(e,"/")||Object(a.includes)(e,"+")||Object(a.includes)(e,";")||Object(a.includes)(e,",")||Object(a.includes)(e,"%")||Object(a.includes)(e,"[")||Object(a.includes)(e,"]")||Object(a.includes)(e,"|")||Object(a.includes)(e,"?"))}},1421:function(e,t,n){"use strict";n(15),n(36),n(37),n(31),n(33),n(53),n(54),n(27),n(35),n(34);var a=n(25),r=n(2),o=n(0),i=n.n(o),c=n(1),s=n.n(c);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,n,a,r,o,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,u=new Array(s),f=0;f<s;f++)u[f]=arguments[f];return a=this,r=(e=p(t)).call.apply(e,[this].concat(u)),n=!r||"object"!==l(r)&&"function"!=typeof r?d(a):r,o=d(n),c=function(e){n.props.onChange(e.target.value)},(i="handleOnChange")in o?Object.defineProperty(o,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[i]=c,n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,c["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.isGrid,n=e.isValid,o=e.value,i=e.validationMessage,c=e.label,l=e.placeholder,u=!n&&i?s.a.createElement(a.o,null,s.a.createElement("small",{dangerouslySetInnerHTML:{__html:i}})):null,p=s.a.createElement(a.l,{onChange:this.handleOnChange,placeholder:l,type:"text",value:o});return t?s.a.createElement(a.m,{controlId:Object(r.uniqueId)("formGroupInput"),validationState:n?null:"error"},s.a.createElement(a.f,null,s.a.createElement(a.g,{componentClass:a.i,sm:4},c),s.a.createElement(a.g,{sm:6},p,u))):s.a.createElement(a.m,{controlId:Object(r.uniqueId)("formGroupInput"),validationState:n?null:"error"},s.a.createElement(a.f,null,s.a.createElement(a.i,null,c),p,u))}}])&&u(n.prototype,o),i&&u(n,i),t}();h.defaultProps={isGrid:!0,isValid:!0},h.propTypes={isGrid:i.a.bool,isValid:i.a.bool,label:i.a.string.isRequired,onChange:i.a.func.isRequired,placeholder:i.a.string,validationMessage:i.a.string,value:i.a.string.isRequired},t.a=h},1466:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return p}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return f}),n.d(t,"i",function(){return h}),n.d(t,"b",function(){return m}),n.d(t,"j",function(){return b}),n.d(t,"g",function(){return y}),n.d(t,"h",function(){return v});n(31),n(33),n(144),n(27),n(67),n(35),n(34);var a=n(2),r=n(122),o=n(23),i=n(38),c=new r.a("".concat(o.a.host).concat(o.a.context,"/json")),s="/realm-config/services/id-repositories";function l(e,t,n,a){return c.serviceCall({url:Object(i.a)("".concat(s,"/").concat(t,"/").concat(encodeURIComponent(a)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(n)})}function u(e,t){return c.serviceCall({url:Object(i.a)("".concat(s,"/").concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function p(e,t){return Promise.all([u(e,t),c.serviceCall({url:Object(i.a)("".concat(s,"/").concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})]).then(function(e){return{schema:e[0],values:e[1]}})}function d(e){return c.serviceCall({url:Object(i.a)("".concat(s,"?_action=getCreatableTypes"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function f(e){return c.serviceCall({url:Object(i.a)("".concat(s,"?_action=nextdescendents"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function h(e,t){var n=Object(a.map)(t,function(t){return c.serviceCall({url:Object(i.a)("".concat(s,"/").concat(t._type._id,"/").concat(encodeURIComponent(t._id)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(n)}function m(e,t,n){return Promise.all([u(e,t),c.serviceCall({url:Object(i.a)("".concat(s,"/").concat(encodeURIComponent(t),"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})]).then(function(e){return e[1]})}function b(e,t){return c.serviceCall({url:Object(i.a)("".concat(s,"/").concat(encodeURIComponent(t._type._id),"/").concat(encodeURIComponent(t._id)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify(Object(a.omit)(t,"_rev"))})}function y(e,t){return function(e){return c.serviceCall({url:Object(i.a)("".concat(s,"?_action=getAllTypes"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}(e).then(function(e){var n=Object(a.find)(e.result,function(e){return e._id===t});return n?n.name:null})}function v(e,t){var n="".concat(s,"/").concat(encodeURIComponent(t._type._id),"/").concat(encodeURIComponent(t._id));return c.serviceCall({url:Object(i.a)("".concat(n,"?_action=loadSchema"),{realm:e}),type:"POST",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}},1723:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(33),n(53),n(54),n(27),n(35),n(34);var a=n(10),r=n(2),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(1466),u=n(509),p=n(510),d=n(1402),f=n(1420),h=n(52),m=(n(31),n(25)),b=n(16),y=(n(81),n(97)),v=n(262),g=n(223),O=n(391),w=n(224);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var E=function(e){var t=e.inputValue;if(Object(r.isEmpty)(t))return Object(b.b)("common.form.searchPrompt")},C=function(){return null},S=function(e){return s.a.createElement(y.a,j({className:"react-select-single",components:{DropdownIndicator:v.a,Option:g.a,SingleValue:O.a},isLoading:!0,loadingMessage:C,noOptionsMessage:E,styles:w.a},e))};S.propTypes={inputId:i.a.string.isRequired,onChange:i.a.func.isRequired};var P=S,_=n(1415),R=n(1408),T=n(1421),I=n(214),V=n(142),A=n(1407),N=n(1406),k=n(41);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return a=this,r=(e=F(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==q(r)&&"function"!=typeof r?x(a):r,J(x(n),"handleCreate",function(){n.jsonSchemaView.isValid()?n.props.onCreate(n.jsonSchemaView.getData()):h.a.addMessage({message:Object(b.b)("common.form.validation.errorsNotSaved"),type:h.a.TYPE_DANGER})}),J(x(n),"handleChange",function(e,t){var a=e._id,r=t.action;"select-option"!==r&&"remove-value"!==r||n.props.onTypeChange(a)}),J(x(n),"setRef",function(e){n.jsonForm=e}),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,c["Component"]),n=t,o=[{key:"fetchTypes",value:function(){return Object(l.d)().then(function(e){return e.result})}}],(a=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.template!==e.template&&this.jsonSchemaView&&(this.jsonSchemaView.destroy(),this.jsonSchemaView=null)}},{key:"componentDidUpdate",value:function(){this.jsonForm&&!this.jsonSchemaView&&this.props.template&&(this.jsonSchemaView=new R.a({hideInheritance:!0,schema:new I.a(this.props.schema),values:new V.a(this.props.template),showOnlyRequiredAndEmpty:!0}),this.jsonForm.appendChild(this.jsonSchemaView.render().el))}},{key:"render",value:function(){var e;return e=this.props.isFetching?s.a.createElement(A.a,null):s.a.createElement("div",{ref:this.setRef}),s.a.createElement(c.Fragment,null,s.a.createElement(N.a,{title:Object(b.b)("console.datastores.new.title")}),s.a.createElement(m.w,null,s.a.createElement(m.w.Body,null,s.a.createElement(m.k,{horizontal:!0},s.a.createElement(T.a,{isValid:this.props.isValidId,label:Object(b.b)("console.datastores.new.id"),onChange:this.props.onIdChange,validationMessage:Object(b.b)("console.common.validation.invalidCharacters"),value:this.props.id}),s.a.createElement(m.m,{controlId:"dataStoreType"},s.a.createElement(m.g,{componentClass:m.i,sm:4},Object(b.b)("console.common.type")),s.a.createElement(m.g,{sm:6},s.a.createElement(P,{cacheOptions:!0,defaultOptions:!0,getOptionLabel:Object(r.property)("name"),getOptionValue:Object(r.property)("_id"),inputId:"dataStoreType",isClearable:!1,loadOptions:t.fetchTypes,onChange:this.handleChange}))),e)),s.a.createElement(m.w.Footer,null,s.a.createElement(_.a,{backRoute:k.a.configuration.routes.realmsDataStores,disabled:!this.props.isCreateAllowed,onCreateClick:this.handleCreate}))))}}])&&D(n.prototype,a),o&&D(n,o),t}();M.propTypes={id:i.a.string.isRequired,isCreateAllowed:i.a.bool.isRequired,isFetching:i.a.bool.isRequired,isValidId:i.a.bool.isRequired,onCreate:i.a.func.isRequired,onIdChange:i.a.func.isRequired,onTypeChange:i.a.func.isRequired,schema:i.a.objectOf(i.a.any),template:i.a.objectOf(i.a.object)};var W=M,G=n(1400),z=n(1401);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,o=K(t).call(this,e),n=!o||"object"!==L(o)&&"function"!=typeof o?Y(a):o,B(Y(n),"handleCreate",function(e){var t=n.props.router.params[0];Object(l.a)(t,n.state.type,e,n.state.id).then(function(){k.a.routeTo(k.a.configuration.routes.realmsDataStoresEdit,{args:Object(r.map)([t,n.state.type,n.state.id],encodeURIComponent),trigger:!0})},function(e){h.a.addMessage({response:e,type:h.a.TYPE_DANGER})})}),B(Y(n),"handleIdChange",function(e){n.setState({id:e})}),B(Y(n),"handleTypeChange",function(e){n.setState({type:e,isFetching:!0}),Object(l.e)(n.props.router.params[0],e).then(function(e){var t=e.schema,a=e.values;n.setState({isFetching:!1}),n.props.setSchema(t),n.props.setTemplate(a)},function(e){n.setState({isFetching:!1}),h.a.addMessage({response:e,type:h.a.TYPE_DANGER})})}),n.state={id:"",type:"",isFetching:!1},n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,c["Component"]),n=t,(a=[{key:"render",value:function(){var e=Object(f.a)(this.state.id),t=e&&!Object(r.isEmpty)(this.state.id)&&!Object(r.isEmpty)(this.state.type);return s.a.createElement(W,{id:this.state.id,isCreateAllowed:t,isFetching:this.state.isFetching,isValidId:e,onCreate:this.handleCreate,onIdChange:this.handleIdChange,onTypeChange:this.handleTypeChange,schema:this.props.schema,template:this.props.template})}}])&&$(n.prototype,a),o&&$(n,o),t}();Q.propTypes={router:z.a,schema:i.a.objectOf(i.a.any),setSchema:i.a.func.isRequired,setTemplate:i.a.func.isRequired,template:i.a.objectOf(i.a.any)},Q=Object(d.a)(Q,function(e){return{schema:e.remote.config.realm.datastores.schema,template:e.remote.config.realm.datastores.template}},function(e){return{setSchema:Object(a.a)(u.b,e),setTemplate:Object(a.a)(p.b,e)}}),Q=Object(G.a)(Q);t.default=Q}}]);
//# sourceMappingURL=60.335a5d6e3b.js.map