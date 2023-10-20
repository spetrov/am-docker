(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1412:function(e,t,r){"use strict";r.d(t,"c",function(){return l}),r.d(t,"b",function(){return p}),r.d(t,"e",function(){return f}),r.d(t,"f",function(){return h}),r.d(t,"d",function(){return b}),r.d(t,"a",function(){return d}),r.d(t,"g",function(){return m});r(31),r(33),r(27),r(67),r(35),r(34);var n=r(2),o=r(122),a=r(23),c=r(1404),i=r(1405),s=r(38),u=new o.a("".concat(a.a.host).concat(a.a.context,"/json"));function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=Object(i.a)(r.pagination),o=Object(c.a)(r.fields);return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"?_queryFilter=true").concat(n).concat(o),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function p(e,t,r){return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(r)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function f(e,t){return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function h(e,t,r){var o=Object(n.map)(r,function(r){return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(r)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE",suppressSpinner:!0})});return Promise.all(o)}function b(e,t){return Promise.all([f(e,t),u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})]).then(function(e){return{schema:e[0],values:e[1]}})}function d(e,t,r,n){return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(r),suppressSpinner:!0,errorsHandlers:{incorrectRevisionError:{status:412}}})}function m(e,t,r,o){return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(o)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify(Object(n.omit)(r,"_rev"))})}},1719:function(e,t,r){"use strict";r.r(t);r(15),r(36),r(37),r(17),r(33),r(21),r(22),r(53),r(18),r(54),r(27),r(35),r(19),r(34);var n=r(10),o=r(2),a=r(0),c=r.n(a),i=r(1),s=r.n(i),u=r(1412),l=r(1409),p=r(473),f=r(474),h=r(1402),b=r(52),d=(r(31),r(25)),m=r(16),g=r(1415),y=r(1435),v=r(214),O=r(142),j=r(1407),w=r(1421),C=r(1420),S=r(1499);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=I(t).call(this,e),r=!o||"object"!==P(o)&&"function"!=typeof o?U(n):o,R(U(r),"handleGroupIdChange",function(e){r.setState({groupId:e},function(){r.props.onGroupIdChange(Object(C.a)(r.state.groupId)?r.state.groupId:null)})}),R(U(r),"handleServerUrlChange",function(e){r.setState({serverUrl:e},function(){r.props.onServerUrlChange(Object(S.a)(r.state.serverUrl)?r.state.serverUrl:null)})}),r.state={groupId:"",serverUrl:""},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,i["Component"]),r=t,(n=[{key:"render",value:function(){var e=Object(S.a)(this.state.serverUrl),t=Object(C.a)(this.state.groupId);return s.a.createElement(d.k,{horizontal:!0},s.a.createElement(w.a,{isValid:t,label:Object(m.b)("console.applications.agents.common.groups.new.groupId.title"),onChange:this.handleGroupIdChange,validationMessage:Object(m.b)("console.common.validation.invalidCharacters"),value:this.state.groupId}),s.a.createElement(w.a,{isValid:e,label:Object(m.b)("console.applications.agents.common.serverUrl.title"),onChange:this.handleServerUrlChange,placeholder:Object(m.b)("console.applications.agents.common.serverUrl.placeholder"),validationMessage:Object(m.b)("console.applications.agents.common.serverUrl.validationMessage"),value:this.state.serverUrl}),this.props.children)}}])&&E(r.prototype,n),o&&E(r,o),t}();A.propTypes={children:c.a.node.isRequired,onGroupIdChange:c.a.func.isRequired,onServerUrlChange:c.a.func.isRequired};var T=A,q=r(1406),k=r(41);function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return n=this,o=(e=F(t)).call.apply(e,[this].concat(c)),r=!o||"object"!==G(o)&&"function"!=typeof o?D(n):o,N(D(r),"handleCreate",function(){r.props.onCreate(r.jsonSchemaView.getData())}),N(D(r),"setRef",function(e){r.jsonForm=e}),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,i["Component"]),r=t,(n=[{key:"componentDidUpdate",value:function(){!this.jsonSchemaView&&this.props.template&&(this.jsonSchemaView=new y.a({hideInheritance:!0,schema:new v.a(this.props.schema),values:new O.a(this.props.template),showOnlyRequiredAndEmpty:!0}),this.jsonForm.appendChild(this.jsonSchemaView.render().el))}},{key:"render",value:function(){var e;return e=this.props.isFetching?s.a.createElement(j.a,null):s.a.createElement(T,{onGroupIdChange:this.props.onGroupIdChange,onServerUrlChange:this.props.onServerUrlChange},s.a.createElement("div",{ref:this.setRef})),s.a.createElement("div",null,s.a.createElement(q.a,{title:Object(m.b)("console.applications.agents.web.groups.new.title")}),s.a.createElement(d.w,null,s.a.createElement(d.w.Body,null,e),s.a.createElement(d.w.Footer,null,s.a.createElement(g.a,{backRoute:k.a.configuration.routes.realmsApplicationsAgentsWeb,disabled:!this.props.isCreateAllowed,onCreateClick:this.handleCreate}))))}}])&&V(r.prototype,n),o&&V(r,o),t}();x.propTypes={isCreateAllowed:c.a.bool.isRequired,isFetching:c.a.bool.isRequired,onCreate:c.a.func.isRequired,onGroupIdChange:c.a.func.isRequired,onServerUrlChange:c.a.func.isRequired,schema:c.a.objectOf(c.a.object).isRequired,template:c.a.objectOf(c.a.object).isRequired};var J=x,W=r(1400),Y=r(1401);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function H(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Z=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=L(t).call(this,e),r=!a||"object"!==z(a)&&"function"!=typeof a?K(n):a,X(K(r),"handleGroupIdChange",function(e){r.setState({groupId:e})}),X(K(r),"handleServerUrlChange",function(e){r.setState({serverUrl:e})}),X(K(r),"handleCreate",function(e){var t=r.props.router.params[0],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(r,!0).forEach(function(t){X(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,{serverUrl:r.state.serverUrl});Object(u.a)(t,l.h,n,r.state.groupId).then(function(){k.a.routeTo(k.a.configuration.routes.realmsApplicationsAgentsWebAgentGroupsEdit,{args:Object(o.map)([t,r.state.groupId],encodeURIComponent),trigger:!0})},function(e){b.a.addMessage({response:e,type:b.a.TYPE_DANGER})})}),r.state={isFetching:!0,groupId:""},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,i["Component"]),r=t,(n=[{key:"componentDidMount",value:function(){var e=this;Object(u.d)(this.props.router.params[0],l.h).then(function(t){var r=t.schema,n=t.values;e.setState({isFetching:!1}),e.props.setSchema(r),e.props.setTemplate(n)},function(t){e.setState({isFetching:!1}),b.a.addMessage({response:t,type:b.a.TYPE_DANGER})})}},{key:"render",value:function(){var e=!Object(o.isEmpty)(this.state.groupId)&&!Object(o.isEmpty)(this.state.serverUrl);return s.a.createElement(J,{isCreateAllowed:e,isFetching:this.state.isFetching,onCreate:this.handleCreate,onGroupIdChange:this.handleGroupIdChange,onServerUrlChange:this.handleServerUrlChange,schema:this.props.schema,serverUrl:this.state.serverUrl,template:this.props.template})}}])&&H(r.prototype,n),a&&H(r,a),t}();Z.propTypes={router:Y.a,schema:c.a.shape({type:c.a.string.isRequired}),setSchema:c.a.func.isRequired,setTemplate:c.a.func.isRequired,template:c.a.shape({type:c.a.string.isRequired})},Z=Object(h.a)(Z,function(e){return{schema:e.remote.config.realm.applications.agents.web.groups.schema,template:e.remote.config.realm.applications.agents.web.groups.template}},function(e){return{setSchema:Object(n.a)(p.b,e),setTemplate:Object(n.a)(f.b,e)}}),Z=Object(W.a)(Z);t.default=Z}}]);
//# sourceMappingURL=129.f370773960.js.map