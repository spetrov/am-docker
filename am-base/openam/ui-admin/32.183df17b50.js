(window.webpackJsonp=window.webpackJsonp||[]).push([[32,296],{1233:function(e,t,n){var r=n(158);e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:!0})},1400:function(e,t,n){"use strict";n(50),n(144);var r=n(2),o=n.n(r),a=n(1),i=n.n(a),s=n(41),c=n(88);t.a=function(e){var t=function(t){var n=s.a.currentRoute,r=s.a.extractParameters(n,c.a.getCurrentFragment()),a=s.a.applyDefaultParameters(n,r),u={params:o.a.map(a,function(e){return e?decodeURIComponent(e):""})};return i.a.createElement(e,o.a.extend({},t,{router:u}))};return t.displayName="withRouter(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),t.WrappedComponent=e,t}},1401:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=o.a.shape({params:o.a.array.isRequired});t.a=a},1402:function(e,t,n){"use strict";n(144),n(81);var r=n(1424),o=n(1),a=n.n(o),i=n(64);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var c=r.a.apply(void 0,n)(e),u=function(e){return a.a.createElement(c,s({},e,{store:i.a}))};return u.displayName="connectWithStore(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),u.WrappedComponent=e,u}},1403:function(e,t,n){"use strict";n(143),n(63),n(33),n(27),n(19),n(34),n(1413);var r=n(2),o=n.n(r),a=n(14),i=n.n(a),s=n(100),c=n.n(s),u=n(1414),l=n.n(u),f=n(1233),p=n.n(f),h=n(1416),d=n(214),m=n(142),y=n(1411);function b(e,t){var n=t.schema,r=t.values,o=t.hideInheritance,a=void 0!==o&&o;l.a.plugins.selectize.enable=!0,l.a.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]},l.a.defaults.themes.openam=h.a.getTheme(6,4);var s=n.toFlatWithInheritanceMeta(r),c=r.removeInheritance();s=s.raw,c=c.raw;var u=new l.a(e[0],{disable_collapse:!0,disable_edit_json:!0,disable_properties:!0,hide_inheritance:a,iconlib:"fontawesome4",schema:s,theme:"openam"});return function(e){var t=p()();i()(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,n){var r=i()(t);r.popoverclickaway({container:"#content",html:!0,placement:"auto top",content:n.innerHTML}).click(function(e){e.preventDefault()}),i()(n).parent().append(r)})}(e),function(e){i()(e).find("input:password").attr("placeholder",i.a.t("common.form.passwordPlaceholder"))}(e),u.setValue(c),u}n.n(y).a.define("enum_plugin",function(e){var t,n=this,r=arguments,a=e.schema,i=o.a.indexOf(a.enum,"");i>-1?(n.plugins.settings.dropdown_header={title:a.options.enum_titles[i]},n.require("dropdown_header"),n.setup=(t=n.setup,function(){t.apply(n,r),n.$dropdown.on("mousedown",".selectize-dropdown-header",function(){return n.setValue(""),n.close(),n.blur(),!1})})):function(){var e;n.deleteSelection=(e=n.deleteSelection,function(t){return!!function(e){return!e||8!==e.keyCode}(t)&&e.apply(n,r)})}()});var v=c.a.View.extend({className:"jsoneditor-block",initialize:function(e){if(!(e.schema instanceof d.a))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof m.a))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=o.a.defaults(e,{displayTitle:!0})},toggleInheritance:function(e,t,n){this.options.values=this.options.values.extend(this.getData()),this.options.values=this.options.values.addValueForPath([e,"inherited"],n),this.options.values=this.options.values.addValueForPath([e,"value"],t),this.render()},render:function(){this.$el.empty();var e=o.a.get(this.jsonEditor,"watchlist");return this.jsonEditor=b(this.$el,this.options),this.jsonEditor.watchlist=e,this.options.displayTitle||this.$el.find("[data-header]").parent().hide(),this},isValid:function(){return 0===this.jsonEditor.validate().length},getData:function(){var e=new m.a(this.jsonEditor.getValue());return this.options.schema.hasDefaultProperties()&&(e=e.pick(this.options.schema.raw.defaultProperties)),(e=(e=e.nullifyEmptyPasswords(this.options.schema.getPasswordKeys())).addInheritance(this.options.values.raw)).raw},setData:function(e){this.options.values=this.options.values.extend(e)},watch:function(e,t){this.jsonEditor.watch(e,t)},destroy:function(){var e=this,t=o.a.keys(this.jsonEditor.watchlist);o.a.forEach(t,function(t){e.jsonEditor.unwatch(t)}),this.jsonEditor.destroy(),this.jsonEditor=null}});t.a=v},1406:function(e,t,n){"use strict";var r=n(2),o=n(0),a=n.n(o),i=n(1),s=n.n(i),c=function(e){var t=e.children,n=e.icon,o=e.title,a=e.subtitle,i=a?"deep":"shallow",c=n?s.a.createElement("span",{className:"header-icon pull-left bg-primary"},s.a.createElement("i",{className:"fa fa-".concat(n)})):null,u=function(e){return e?Object(r.isString)(e)?s.a.createElement("h4",{className:"page-type"},e):e:null}(a);return s.a.createElement("header",{className:"page-header page-header-no-border clearfix"},c,s.a.createElement("div",{className:"button-group pull-right ".concat(i,"-page-header-button-group")},t),s.a.createElement("div",{className:"pull-left"},u,s.a.createElement("h1",{className:"wordwrap"},o)))};c.propTypes={children:a.a.node,icon:a.a.string,subtitle:a.a.node,title:a.a.string.isRequired},t.a=c},1407:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(16);t.a=function(){return o.a.createElement("p",{className:"loading text-muted"},o.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-2x fa-fw"}),o.a.createElement("span",null,Object(a.b)("console.common.loading")))}},1408:function(e,t,n){"use strict";n(33),n(27),n(34);var r=n(2),o=n.n(r),a=n(100),i=n.n(a),s=n(1403),c=n(214),u=n(142);var l=i.a.View.extend({initialize:function(e){if(!(e.schema instanceof c.a))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(e.values instanceof u.a))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=o.a.defaults(e,{showOnlyRequiredAndEmpty:!1,showOnlyRequired:!1})},render:function(){var e,t=this.options.schema,n=!0;if(this.options.showOnlyRequiredAndEmpty){var r=this.options.schema.getRequiredPropertyKeys(),a=this.options.values.getEmptyValueKeys(t),i=o.a.intersection(r,a);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(i),n=!o.a.isEmpty(i)}else if(this.options.showOnlyRequired){var c=this.options.schema.getRequiredPropertyKeys();t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(c),n=!o.a.isEmpty(c)}return this.subview=new s.a({displayForm:n,hideInheritance:this.options.hideInheritance,displayTitle:!1,el:this.$el,schema:t,values:this.options.values}).render(),(e=this.options.onRendered)&&setTimeout(e,0),this},isValid:function(){return!this.subview||this.subview.isValid()},getData:function(){var e;if(this.subview)return(e=this.subview).getData.apply(e,arguments)},setData:function(e){if(this.subview)return this.options.values=this.options.values.extend(e),this.subview.setData(e)},watch:function(e,t){this.subview&&this.subview.watch(e,t)},destroy:function(){this.subview&&(this.subview.destroy(),this.subview=null)}});t.a=l},1415:function(e,t,n){"use strict";n(15),n(36),n(37),n(31),n(185),n(33),n(27),n(161),n(62),n(35),n(34);var r=n(25),o=n(2),a=n(16),i=n(0),s=n.n(i),c=n(1),u=n.n(c),l=n(41),f=n(1400),p=n(1401);function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d=function(e){var t=e.backRoute,n=e.backRouteArgs,i=e.disabled,s=e.onCreateClick,c=e.router.params[0],f=Object(o.map)([c].concat(h(n)),encodeURIComponent),p="#".concat(l.a.getLink(t,f));return u.a.createElement(r.f,null,u.a.createElement("div",{className:"pull-right"},u.a.createElement("div",{className:"am-btn-action-group"},u.a.createElement(r.c,{href:p},Object(a.b)("common.form.cancel")),u.a.createElement(r.c,{bsStyle:"primary",disabled:i,onClick:s},Object(a.b)("common.form.create")))))};d.defaultProps={backRouteArgs:[],disabled:!1},d.propTypes={backRoute:s.a.shape({url:s.a.oneOfType([s.a.string,s.a.instanceOf(RegExp)]).isRequired,pattern:s.a.string.isRequired}).isRequired,backRouteArgs:s.a.arrayOf(s.a.string),disabled:s.a.bool,onCreateClick:s.a.func.isRequired,router:p.a},t.a=Object(f.a)(d)},1420:function(e,t,n){"use strict";var r=n(2);t.a=function(e){return!!Object(r.isEmpty)(e)||!("."===e||".."===e||Object(r.startsWith)(e," ")||Object(r.endsWith)(e," ")||Object(r.startsWith)(e,"#")||Object(r.startsWith)(e,'"')||Object(r.includes)(e,"\\")||Object(r.includes)(e,"/")||Object(r.includes)(e,"+")||Object(r.includes)(e,";")||Object(r.includes)(e,",")||Object(r.includes)(e,"%")||Object(r.includes)(e,"[")||Object(r.includes)(e,"]")||Object(r.includes)(e,"|")||Object(r.includes)(e,"?"))}},1421:function(e,t,n){"use strict";n(15),n(36),n(37),n(31),n(33),n(53),n(54),n(27),n(35),n(34);var r=n(25),o=n(2),a=n(0),i=n.n(a),s=n(1),c=n.n(s);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e,n,r,o,a,i,s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,l=new Array(c),h=0;h<c;h++)l[h]=arguments[h];return r=this,o=(e=f(t)).call.apply(e,[this].concat(l)),n=!o||"object"!==u(o)&&"function"!=typeof o?p(r):o,a=p(n),s=function(e){n.props.onChange(e.target.value)},(i="handleOnChange")in a?Object.defineProperty(a,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[i]=s,n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,s["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.isGrid,n=e.isValid,a=e.value,i=e.validationMessage,s=e.label,u=e.placeholder,l=!n&&i?c.a.createElement(r.o,null,c.a.createElement("small",{dangerouslySetInnerHTML:{__html:i}})):null,f=c.a.createElement(r.l,{onChange:this.handleOnChange,placeholder:u,type:"text",value:a});return t?c.a.createElement(r.m,{controlId:Object(o.uniqueId)("formGroupInput"),validationState:n?null:"error"},c.a.createElement(r.f,null,c.a.createElement(r.g,{componentClass:r.i,sm:4},s),c.a.createElement(r.g,{sm:6},f,l))):c.a.createElement(r.m,{controlId:Object(o.uniqueId)("formGroupInput"),validationState:n?null:"error"},c.a.createElement(r.f,null,c.a.createElement(r.i,null,s),f,l))}}])&&l(n.prototype,a),i&&l(n,i),t}();d.defaultProps={isGrid:!0,isValid:!0},d.propTypes={isGrid:i.a.bool,isValid:i.a.bool,label:i.a.string.isRequired,onChange:i.a.func.isRequired,placeholder:i.a.string,validationMessage:i.a.string,value:i.a.string.isRequired},t.a=d},1447:function(e,t,n){"use strict";var r=n(39),o=n(46),a=n(274),i=n(101),s=n(782),c=n(781),u=n(780),l=n(68),f=n(44),p=n(376),h=n(218),d=n(784);e.exports=function(e,t,n,m,y){var b=o[e],v=b&&b.prototype,g=b,w=m?"set":"add",O={},j=function(e){var t=v[e];i(v,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(y&&!l(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return y&&!l(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!l(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(a(e,"function"!=typeof b||!(y||v.forEach&&!f(function(){(new b).entries().next()}))))g=n.getConstructor(t,e,m,w),s.REQUIRED=!0;else if(a(e,!0)){var E=new g,S=E[w](y?{}:-0,1)!=E,C=f(function(){E.has(1)}),R=p(function(e){new b(e)}),x=!y&&f(function(){for(var e=new b,t=5;t--;)e[w](t,t);return!e.has(-0)});R||((g=t(function(t,n){u(t,g,e);var r=d(new b,t,g);return null!=n&&c(n,r[w],r,m),r})).prototype=v,v.constructor=g),(C||x)&&(j("delete"),j("has"),m&&j("get")),(x||S)&&j(w),y&&v.clear&&delete v.clear}return O[e]=g,r({global:!0,forced:g!=b},O),h(g,e),y||n.setStrong(g,e,m),g}},1448:function(e,t,n){"use strict";var r=n(83).f,o=n(272),a=n(783),i=n(219),s=n(780),c=n(781),u=n(377),l=n(378),f=n(74),p=n(782).fastKey,h=n(186),d=h.set,m=h.getterFor;e.exports={getConstructor:function(e,t,n,u){var l=e(function(e,r){s(e,l,t),d(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),f||(e.size=0),null!=r&&c(r,e[u],e,n)}),h=m(t),y=function(e,t,n){var r,o,a=h(e),i=b(e,t);return i?i.value=n:(a.last=i={index:o=p(t,!0),key:t,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=i),r&&(r.next=i),f?a.size++:e.size++,"F"!==o&&(a.index[o]=i)),e},b=function(e,t){var n,r=h(e),o=p(t);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==t)return n};return a(l.prototype,{clear:function(){for(var e=h(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=h(this),n=b(this,e);if(n){var r=n.next,o=n.previous;delete t.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),t.first==n&&(t.first=r),t.last==n&&(t.last=o),f?t.size--:this.size--}return!!n},forEach:function(e){for(var t,n=h(this),r=i(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!b(this,e)}}),a(l.prototype,n?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return y(this,0===e?0:e,t)}}:{add:function(e){return y(this,e=0===e?0:e,e)}}),f&&r(l.prototype,"size",{get:function(){return h(this).size}}),l},setStrong:function(e,t,n){var r=t+" Iterator",o=m(t),a=m(r);u(e,t,function(e,t){d(this,{type:r,target:e,state:o(e),kind:t,last:void 0})},function(){for(var e=a(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})},n?"entries":"values",!n,!0),l(t)}}},1454:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"c",function(){return y}),n.d(t,"d",function(){return b}),n.d(t,"f",function(){return v}),n.d(t,"g",function(){return g}),n.d(t,"h",function(){return w}),n.d(t,"e",function(){return O}),n.d(t,"a",function(){return j});n(15),n(36),n(37),n(63),n(33),n(50),n(144),n(1455),n(53),n(54),n(27),n(67),n(1456),n(62),n(35),n(34);var r=n(162),o=n(370),a=n(372),i=n(371);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,p(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(e){return new r.CRESTv2(Object(i.a)("/realm-config/federation/circlesoftrust",e),{middleware:[o.a]})},m=function(e,t,n){return Object(a.a)(d(e).create(t,{id:n}))},y=function(e,t){return Object(a.a)(d(e).get(t))},b=function(e){return d(e).queryFilter()},v=function(e){return d(e).action("schema")},g=function(e,t){return Promise.all(t.map(function(t){return d(e).delete(t)}))},w=function(e,t,n){return Object(a.a)(d(e).update(n,t))},O=function(e){return Promise.all([d(e).action("schema"),d(e).action("template")]).then(function(e){var t=h(e,2);return{schema:t[0],values:t[1]}})},j=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,p(t).call(this,e))).name="COTServiceError",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,u(Error)),t}()},1455:function(e,t,n){"use strict";var r=n(1447),o=n(1448);e.exports=r("Map",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},o,!0)},1456:function(e,t,n){var r=n(39),o=n(187),a=n(215),i=n(69),s=n(68),c=n(272),u=n(1457),l=n(44),f=o("Reflect","construct"),p=l(function(){function e(){}return!(f(function(){},[],e)instanceof e)}),h=!l(function(){f(function(){})}),d=p||h;r({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(e,t){a(e),i(t);var n=arguments.length<3?e:a(arguments[2]);if(h&&!p)return f(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(u.apply(e,r))}var o=n.prototype,l=c(s(o)?o:Object.prototype),d=Function.apply.call(e,l,t);return s(d)?d:l}})},1457:function(e,t,n){"use strict";var r=n(215),o=n(68),a=[].slice,i={};e.exports=Function.bind||function(e){var t=r(this),n=a.call(arguments,1),s=function(){var r=n.concat(a.call(arguments));return this instanceof s?function(e,t,n){if(!(t in i)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";i[t]=Function("C,a","return new C("+r.join(",")+")")}return i[t](e,n)}(t,r.length,r):t.apply(e,r)};return o(t.prototype)&&(s.prototype=t.prototype),s}},1751:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(33),n(144),n(53),n(54),n(27),n(67),n(777),n(35),n(34);var r=n(10),o=n(2),a=n(0),i=n.n(a),s=n(1),c=n.n(s),u=n(1454),l=n(476),f=n(477),p=n(1402),h=n(142),d=n(214),m=n(25),y=n(16),b=n(1415),v=n(1408),g=n(1421),w=n(1420),O=n(1407),j=n(1406),E=n(41);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=R(t).call(this,e),n=!o||"object"!==S(o)&&"function"!=typeof o?x(r):o,_(x(n),"handleNameChange",function(e){n.setState({name:e},function(){n.props.onNameChange(Object(w.a)(n.state.name)?n.state.name:null)})}),_(x(n),"handleCreate",function(){n.props.onCreate(n.jsonSchemaView.getData())}),_(x(n),"setRef",function(e){n.jsonForm=e}),n.state={name:""},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,s["Component"]),n=t,(r=[{key:"componentDidUpdate",value:function(){!this.jsonSchemaView&&this.jsonForm&&this.props.schema&&this.props.template&&(this.jsonSchemaView=new v.a({hideInheritance:!0,schema:new d.a(this.props.schema),values:new h.a(this.props.template),showOnlyRequiredAndEmpty:!0}),this.jsonForm.appendChild(this.jsonSchemaView.render().el))}},{key:"render",value:function(){var e,t=Object(w.a)(this.state.name);return e=this.props.isFetching?c.a.createElement(O.a,null):c.a.createElement(m.k,{horizontal:!0},c.a.createElement(g.a,{isValid:t,label:Object(y.b)("common.form.name"),onChange:this.handleNameChange,validationMessage:Object(y.b)("console.common.validation.invalidCharacters"),value:this.state.name}),c.a.createElement("div",{ref:this.setRef})),c.a.createElement("div",null,c.a.createElement(j.a,{title:Object(y.b)("console.applications.federation.circlesoftrust.new.title")}),c.a.createElement(m.w,null,c.a.createElement(m.w.Body,null,e),c.a.createElement(m.w.Footer,null,c.a.createElement(b.a,{backRoute:E.a.configuration.routes.realmsApplicationsFederationCirclesOfTrust,disabled:!this.props.isCreateAllowed,onCreateClick:this.handleCreate}))))}}])&&C(n.prototype,r),o&&C(n,o),t}();k.propTypes={isCreateAllowed:i.a.bool.isRequired,isFetching:i.a.bool.isRequired,onCreate:i.a.func.isRequired,onNameChange:i.a.func.isRequired,schema:i.a.objectOf(i.a.object).isRequired,template:i.a.objectOf(i.a.object).isRequired};var T=k,N=n(1400),q=n(1401);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=I(t).call(this,e),n=!a||"object"!==F(a)&&"function"!=typeof a?A(r):a,z(A(n),"handleCreate",function(e){var t=n.props.router.params[0],r=new h.a(e).removeNullPasswords(new d.a(n.props.schema));Object(u.b)(t,r.raw,n.state.name).then(function(){E.a.routeTo(E.a.configuration.routes.realmsApplicationsFederationCirclesOfTrustEdit,{args:Object(o.map)([t,n.state.name],encodeURIComponent),trigger:!0})})}),z(A(n),"handleNameChange",function(e){n.setState({name:e})}),n.state={isFetching:!0,name:""},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,s["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props.router.params[0];Object(u.e)(t).then(function(t){var n=t.schema,r=t.values;e.props.setSchema(n),e.props.setTemplate(r)}).finally(function(){e.setState({isFetching:!1})})}},{key:"render",value:function(){return c.a.createElement(T,{isCreateAllowed:!Object(o.isEmpty)(this.state.name),isFetching:this.state.isFetching,onCreate:this.handleCreate,onNameChange:this.handleNameChange,schema:this.props.schema,template:this.props.template})}}])&&V(n.prototype,r),a&&V(n,a),t}();J.propTypes={router:q.a,schema:i.a.shape({type:i.a.string.isRequired}),setSchema:i.a.func.isRequired,setTemplate:i.a.func.isRequired,template:i.a.shape({type:i.a.string.isRequired})},J=Object(p.a)(J,function(e){return{schema:e.remote.config.realm.applications.federation.circlesoftrust.schema,template:e.remote.config.realm.applications.federation.circlesoftrust.template}},function(e){return{setSchema:Object(r.a)(l.b,e),setTemplate:Object(r.a)(f.b,e)}}),J=Object(N.a)(J);t.default=J}}]);
//# sourceMappingURL=32.183df17b50.js.map