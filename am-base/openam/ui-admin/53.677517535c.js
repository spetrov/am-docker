(window.webpackJsonp=window.webpackJsonp||[]).push([[53,296],{1233:function(e,t,n){var a=n(158);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:!0})},1400:function(e,t,n){"use strict";n(50),n(144);var a=n(2),r=n.n(a),o=n(1),i=n.n(o),s=n(41),c=n(88);t.a=function(e){var t=function(t){var n=s.a.currentRoute,a=s.a.extractParameters(n,c.a.getCurrentFragment()),o=s.a.applyDefaultParameters(n,a),u={params:r.a.map(o,function(e){return e?decodeURIComponent(e):""})};return i.a.createElement(e,r.a.extend({},t,{router:u}))};return t.displayName="withRouter(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),t.WrappedComponent=e,t}},1401:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=r.a.shape({params:r.a.array.isRequired});t.a=o},1402:function(e,t,n){"use strict";n(144),n(81);var a=n(1424),r=n(1),o=n.n(r),i=n(64);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var c=a.a.apply(void 0,n)(e),u=function(e){return o.a.createElement(c,s({},e,{store:i.a}))};return u.displayName="connectWithStore(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),u.WrappedComponent=e,u}},1403:function(e,t,n){"use strict";n(143),n(63),n(33),n(27),n(19),n(34),n(1413);var a=n(2),r=n.n(a),o=n(14),i=n.n(o),s=n(100),c=n.n(s),u=n(1414),l=n.n(u),p=n(1233),f=n.n(p),d=n(1416),h=n(214),m=n(142),b=n(1411);function g(e,t){var n=t.schema,a=t.values,r=t.hideInheritance,o=void 0!==r&&r;l.a.plugins.selectize.enable=!0,l.a.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]},l.a.defaults.themes.openam=d.a.getTheme(6,4);var s=n.toFlatWithInheritanceMeta(a),c=a.removeInheritance();s=s.raw,c=c.raw;var u=new l.a(e[0],{disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,hide_inheritance:o,iconlib:"fontawesome4",schema:s,theme:"openam"});return function(e){var t=f()();i()(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,n){var a=i()(t);a.popoverclickaway({container:"#content",html:!0,placement:"auto top",content:n.innerHTML}).click(function(e){e.preventDefault()}),i()(n).parent().append(a)})}(e),function(e){i()(e).find("input:password").attr("placeholder",i.a.t("common.form.passwordPlaceholder"))}(e),u.setValue(c),u}n.n(b).a.define("enum_plugin",function(e){var t,n=this,a=arguments,o=e.schema,i=r.a.indexOf(o.enum,"");i>-1?(n.plugins.settings.dropdown_header={title:o.options.enum_titles[i]},n.require("dropdown_header"),n.setup=(t=n.setup,function(){t.apply(n,a),n.$dropdown.on("mousedown",".selectize-dropdown-header",function(){return n.setValue(""),n.close(),n.blur(),!1})})):function(){var e;n.deleteSelection=(e=n.deleteSelection,function(t){return!!function(e){return!e||8!==e.keyCode}(t)&&e.apply(n,a)})}()});var y=c.a.View.extend({className:"jsoneditor-block",initialize:function(e){if(!(e.schema instanceof h.a))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof m.a))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=r.a.defaults(e,{displayTitle:!0})},toggleInheritance:function(e,t,n){this.options.values=this.options.values.extend(this.getData()),this.options.values=this.options.values.addValueForPath([e,"inherited"],n),this.options.values=this.options.values.addValueForPath([e,"value"],t),this.render()},render:function(){this.$el.empty();var e=r.a.get(this.jsonEditor,"watchlist");return this.jsonEditor=g(this.$el,this.options),this.jsonEditor.watchlist=e,this.options.displayTitle||this.$el.find("[data-header]").parent().hide(),this},isValid:function(){return 0===this.jsonEditor.validate().length},getData:function(){var e=new m.a(this.jsonEditor.getValue());return this.options.schema.hasDefaultProperties()&&(e=e.pick(this.options.schema.raw.defaultProperties)),(e=(e=e.nullifyEmptyPasswords(this.options.schema.getPasswordKeys())).addInheritance(this.options.values.raw)).raw},setData:function(e){this.options.values=this.options.values.extend(e)},watch:function(e,t){this.jsonEditor.watch(e,t)},destroy:function(){var e=this,t=r.a.keys(this.jsonEditor.watchlist);r.a.forEach(t,function(t){e.jsonEditor.unwatch(t)}),this.jsonEditor.destroy(),this.jsonEditor=null}});t.a=y},1404:function(e,t,n){"use strict";n(159);t.a=function(e){return e?"&_fields=".concat(e.join(",")):""}},1405:function(e,t,n){"use strict";n(31);t.a=function(e){if(e){var t=e.sizePerPage,n=e.pagedResultsOffset,a=e.sortKey,r=e.sortDirection,o=n?"&_pagedResultsOffset=".concat(n):"",i="&_pageSize=".concat(t),s=a&&r?"&_sortKeys=".concat(encodeURIComponent(r)).concat(a):"";return"".concat(o).concat(i).concat(s)}return""}},1406:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),i=n(1),s=n.n(i),c=function(e){var t=e.children,n=e.icon,r=e.title,o=e.subtitle,i=o?"deep":"shallow",c=n?s.a.createElement("span",{className:"header-icon pull-left bg-primary"},s.a.createElement("i",{className:"fa fa-".concat(n)})):null,u=function(e){return e?Object(a.isString)(e)?s.a.createElement("h4",{className:"page-type"},e):e:null}(o);return s.a.createElement("header",{className:"page-header page-header-no-border clearfix"},c,s.a.createElement("div",{className:"button-group pull-right ".concat(i,"-page-header-button-group")},t),s.a.createElement("div",{className:"pull-left"},u,s.a.createElement("h1",{className:"wordwrap"},r)))};c.propTypes={children:o.a.node,icon:o.a.string,subtitle:o.a.node,title:o.a.string.isRequired},t.a=c},1407:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(16);t.a=function(){return r.a.createElement("p",{className:"loading text-muted"},r.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-2x fa-fw"}),r.a.createElement("span",null,Object(o.b)("console.common.loading")))}},1408:function(e,t,n){"use strict";n(33),n(27),n(34);var a=n(2),r=n.n(a),o=n(100),i=n.n(o),s=n(1403),c=n(214),u=n(142);var l=i.a.View.extend({initialize:function(e){if(!(e.schema instanceof c.a))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof u.a))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=r.a.defaults(e,{showOnlyRequiredAndEmpty:!1,showOnlyRequired:!1})},render:function(){var e,t=this.options.schema,n=!0;if(this.options.showOnlyRequiredAndEmpty){var a=this.options.schema.getRequiredPropertyKeys(),o=this.options.values.getEmptyValueKeys(t),i=r.a.intersection(a,o);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(i),n=!r.a.isEmpty(i)}else if(this.options.showOnlyRequired){var c=this.options.schema.getRequiredPropertyKeys();t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(c),n=!r.a.isEmpty(c)}return this.subview=new s.a({displayForm:n,hideInheritance:this.options.hideInheritance,displayTitle:!1,el:this.$el,schema:t,values:this.options.values}).render(),(e=this.options.onRendered)&&setTimeout(e,0),this},isValid:function(){return!this.subview||this.subview.isValid()},getData:function(){var e;if(this.subview)return(e=this.subview).getData.apply(e,arguments)},setData:function(e){if(this.subview)return this.options.values=this.options.values.extend(e),this.subview.setData(e)},watch:function(e,t){this.subview&&this.subview.watch(e,t)},destroy:function(){this.subview&&(this.subview.destroy(),this.subview=null)}});t.a=l},1409:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return s}),n.d(t,"f",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"g",function(){return l});var a="IdentityGatewayAgent",r="J2EEAgent",o="OAuth2Client",i="RemoteConsentAgent",s="SoapSTSAgent",c="SoftwarePublisher",u="WebAgent",l="TrustedJwtIssuer"},1415:function(e,t,n){"use strict";n(15),n(36),n(37),n(31),n(185),n(33),n(27),n(161),n(62),n(35),n(34);var a=n(25),r=n(2),o=n(16),i=n(0),s=n.n(i),c=n(1),u=n.n(c),l=n(41),p=n(1400),f=n(1401);function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=function(e){var t=e.backRoute,n=e.backRouteArgs,i=e.disabled,s=e.onCreateClick,c=e.router.params[0],p=Object(r.map)([c].concat(d(n)),encodeURIComponent),f="#".concat(l.a.getLink(t,p));return u.a.createElement(a.f,null,u.a.createElement("div",{className:"pull-right"},u.a.createElement("div",{className:"am-btn-action-group"},u.a.createElement(a.c,{href:f},Object(o.b)("common.form.cancel")),u.a.createElement(a.c,{bsStyle:"primary",disabled:i,onClick:s},Object(o.b)("common.form.create")))))};h.defaultProps={backRouteArgs:[],disabled:!1},h.propTypes={backRoute:s.a.shape({url:s.a.oneOfType([s.a.string,s.a.instanceOf(RegExp)]).isRequired,pattern:s.a.string.isRequired}).isRequired,backRouteArgs:s.a.arrayOf(s.a.string),disabled:s.a.bool,onCreateClick:s.a.func.isRequired,router:f.a},t.a=Object(p.a)(h)},1419:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"g",function(){return p}),n.d(t,"b",function(){return f}),n.d(t,"e",function(){return d}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return m}),n.d(t,"f",function(){return b});n(31),n(33),n(27),n(67),n(35),n(34);var a=n(2),r=n(122),o=n(23),i=n(1404),s=n(1405),c=n(38),u=new r.a("".concat(o.a.host).concat(o.a.context,"/json"));function l(e,t,n,a){return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(a)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(n),suppressSpinner:!0,errorsHandlers:{incorrectRevisionError:{status:412}}})}function p(e,t,n,r){return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(r)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-Match":"*"},data:JSON.stringify(Object(a.omit)(n,"_rev"))})}function f(e,t,n){return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function d(e,t){return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=Object(s.a)(n.pagination),r=Object(i.a)(n.fields);return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"?_queryFilter=true").concat(a).concat(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function m(e,t){return Promise.all([d(e,t),u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})]).then(function(e){return{schema:e[0],values:e[1]}})}function b(e,t,n){var r=Object(a.map)(n,function(n){return u.serviceCall({url:Object(c.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0,type:"DELETE"})});return Promise.all(r)}},1420:function(e,t,n){"use strict";var a=n(2);t.a=function(e){return!!Object(a.isEmpty)(e)||!("."===e||".."===e||Object(a.startsWith)(e," ")||Object(a.endsWith)(e," ")||Object(a.startsWith)(e,"#")||Object(a.startsWith)(e,'"')||Object(a.includes)(e,"\\")||Object(a.includes)(e,"/")||Object(a.includes)(e,"+")||Object(a.includes)(e,";")||Object(a.includes)(e,",")||Object(a.includes)(e,"%")||Object(a.includes)(e,"[")||Object(a.includes)(e,"]")||Object(a.includes)(e,"|")||Object(a.includes)(e,"?"))}},1421:function(e,t,n){"use strict";n(15),n(36),n(37),n(31),n(33),n(53),n(54),n(27),n(35),n(34);var a=n(25),r=n(2),o=n(0),i=n.n(o),s=n(1),c=n.n(s);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,n,a,r,o,i,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,l=new Array(c),d=0;d<c;d++)l[d]=arguments[d];return a=this,r=(e=p(t)).call.apply(e,[this].concat(l)),n=!r||"object"!==u(r)&&"function"!=typeof r?f(a):r,o=f(n),s=function(e){n.props.onChange(e.target.value)},(i="handleOnChange")in o?Object.defineProperty(o,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[i]=s,n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,s["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.isGrid,n=e.isValid,o=e.value,i=e.validationMessage,s=e.label,u=e.placeholder,l=!n&&i?c.a.createElement(a.o,null,c.a.createElement("small",{dangerouslySetInnerHTML:{__html:i}})):null,p=c.a.createElement(a.l,{onChange:this.handleOnChange,placeholder:u,type:"text",value:o});return t?c.a.createElement(a.m,{controlId:Object(r.uniqueId)("formGroupInput"),validationState:n?null:"error"},c.a.createElement(a.f,null,c.a.createElement(a.g,{componentClass:a.i,sm:4},s),c.a.createElement(a.g,{sm:6},p,l))):c.a.createElement(a.m,{controlId:Object(r.uniqueId)("formGroupInput"),validationState:n?null:"error"},c.a.createElement(a.f,null,c.a.createElement(a.i,null,s),p,l))}}])&&l(n.prototype,o),i&&l(n,i),t}();h.defaultProps={isGrid:!0,isValid:!0},h.propTypes={isGrid:i.a.bool,isValid:i.a.bool,label:i.a.string.isRequired,onChange:i.a.func.isRequired,placeholder:i.a.string,validationMessage:i.a.string,value:i.a.string.isRequired},t.a=h},1745:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(33),n(53),n(54),n(27),n(35),n(34);var a=n(10),r=n(2),o=n(0),i=n.n(o),s=n(1),c=n.n(s),u=n(1419),l=n(1409),p=n(497),f=n(498),d=n(1402),h=n(52),m=n(25),b=n(16),g=n(1415),y=n(1408),v=n(1421),w=n(1420),O=n(214),j=n(142),E=n(1407),S=n(1406),C=n(41);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=P(t).call(this,e),n=!r||"object"!==I(r)&&"function"!=typeof r?A(a):r,T(A(n),"handleCreate",function(){n.props.onCreate(n.jsonSchemaView.getData())}),T(A(n),"handleAgentIdChange",function(e){n.setState({agentId:e},function(){n.props.onAgentIdChange(Object(w.a)(n.state.agentId)?n.state.agentId:null)})}),T(A(n),"setRef",function(e){n.jsonForm=e}),n.state={agentId:""},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,s["Component"]),n=t,(a=[{key:"componentDidUpdate",value:function(){!this.jsonSchemaView&&this.props.template&&(this.jsonSchemaView=new y.a({hideInheritance:!0,schema:new O.a(this.props.schema),values:new j.a(this.props.template),showOnlyRequiredAndEmpty:!0}),this.jsonForm.appendChild(this.jsonSchemaView.render().el))}},{key:"render",value:function(){var e,t=Object(w.a)(this.state.agentId);return e=this.props.isFetching?c.a.createElement(E.a,null):c.a.createElement(m.k,{horizontal:!0},c.a.createElement(v.a,{isValid:t,label:Object(b.b)("console.applications.agents.common.agents.new.agentId.title"),onChange:this.handleAgentIdChange,validationMessage:Object(b.b)("console.common.validation.invalidCharacters"),value:this.state.agentId}),c.a.createElement("div",{ref:this.setRef})),c.a.createElement("div",null,c.a.createElement(S.a,{title:Object(b.b)("console.applications.oauth2.trustedJwtIssuer.agents.new.title")}),c.a.createElement(m.w,null,c.a.createElement(m.w.Body,null,e),c.a.createElement(m.w.Footer,null,c.a.createElement(g.a,{backRoute:C.a.configuration.routes.realmsApplicationsOAuth2TrustedJwtIssuer,disabled:!this.props.isCreateAllowed,onCreateClick:this.handleCreate}))))}}])&&R(n.prototype,a),r&&R(n,r),t}();k.propTypes={isCreateAllowed:i.a.bool.isRequired,isFetching:i.a.bool.isRequired,onAgentIdChange:i.a.func.isRequired,onCreate:i.a.func.isRequired,schema:i.a.objectOf(i.a.object).isRequired,template:i.a.objectOf(i.a.object).isRequired};var q=k,V=n(1400),N=n(1401);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,o=J(t).call(this,e),n=!o||"object"!==D(o)&&"function"!=typeof o?F(a):o,M(F(n),"handleAgentIdChange",function(e){n.setState({agentId:e})}),M(F(n),"handleCreate",function(e){var t=n.props.router.params[0];Object(u.a)(t,l.g,e,n.state.agentId).then(function(){C.a.routeTo(C.a.configuration.routes.realmsApplicationsOAuth2TrustedJwtIssuerAgentsEdit,{args:Object(r.map)([t,n.state.agentId],encodeURIComponent),trigger:!0})},function(e){h.a.addMessage({response:e,type:h.a.TYPE_DANGER})})}),n.state={agentId:"",isFetching:!0},n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,s["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=this,t=this.props.router.params[0];Object(u.d)(t,l.g).then(function(t){var n=t.schema,a=t.values;e.setState({isFetching:!1}),e.props.setSchema(n),e.props.setTemplate(a)},function(t){e.setState({isFetching:!1}),h.a.addMessage({response:t,type:h.a.TYPE_DANGER})})}},{key:"render",value:function(){var e=!Object(r.isEmpty)(this.state.agentId);return c.a.createElement(q,{isCreateAllowed:e,isFetching:this.state.isFetching,onAgentIdChange:this.handleAgentIdChange,onCreate:this.handleCreate,schema:this.props.schema,serverUrl:this.state.serverUrl,template:this.props.template})}}])&&x(n.prototype,a),o&&x(n,o),t}();W.propTypes={router:N.a,schema:i.a.shape({type:i.a.string.isRequired}),setSchema:i.a.func.isRequired,setTemplate:i.a.func.isRequired,template:i.a.shape({type:i.a.string.isRequired})},W=Object(d.a)(W,function(e){return{schema:e.remote.config.realm.applications.oauth2.trustedJwtIssuer.agents.schema,template:e.remote.config.realm.applications.oauth2.trustedJwtIssuer.agents.template}},function(e){return{setSchema:Object(a.a)(p.b,e),setTemplate:Object(a.a)(f.b,e)}}),W=Object(V.a)(W);t.default=W}}]);
//# sourceMappingURL=53.677517535c.js.map