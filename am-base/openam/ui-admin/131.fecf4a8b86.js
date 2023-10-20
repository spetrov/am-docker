(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1419:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"g",function(){return p}),n.d(t,"b",function(){return f}),n.d(t,"e",function(){return h}),n.d(t,"c",function(){return g}),n.d(t,"d",function(){return b}),n.d(t,"f",function(){return d});n(31),n(33),n(27),n(67),n(35),n(34);var r=n(2),o=n(122),a=n(23),c=n(1404),i=n(1405),s=n(38),l=new o.a("".concat(a.a.host).concat(a.a.context,"/json"));function u(e,t,n,r){return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(r)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(n),suppressSpinner:!0,errorsHandlers:{incorrectRevisionError:{status:412}}})}function p(e,t,n,o){return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(o)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-Match":"*"},data:JSON.stringify(Object(r.omit)(n,"_rev"))})}function f(e,t,n){return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function h(e,t){return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(i.a)(n.pagination),o=Object(c.a)(n.fields);return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"?_queryFilter=true").concat(r).concat(o),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function b(e,t){return Promise.all([h(e,t),l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})]).then(function(e){return{schema:e[0],values:e[1]}})}function d(e,t,n){var o=Object(r.map)(n,function(n){return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0,type:"DELETE"})});return Promise.all(o)}},1718:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(17),n(33),n(21),n(22),n(53),n(18),n(54),n(27),n(35),n(19),n(34);var r=n(10),o=n(2),a=n(0),c=n.n(a),i=n(1),s=n.n(i),l=n(1419),u=n(470),p=n(471),f=n(1409),h=n(1402),g=n(214),b=n(142),d=n(52),m=(n(31),n(25)),y=n(16),v=n(1415),O=n(1435),j=n(1407),C=n(1421),w=n(1420),U=n(1499),S=n(136),A=n.n(S);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=I(t).call(this,e),n=!o||"object"!==P(o)&&"function"!=typeof o?R(r):o,T(R(n),"handleAgentIdChange",function(e){n.setState({agentId:e},function(){n.props.onAgentIdChange(Object(w.a)(n.state.agentId)?n.state.agentId:null)})}),T(R(n),"handleAgentUrlChange",function(e){n.setState({agentUrl:e},function(){n.props.onAgentUrlChange(n.isAgentUrlValid(n.state.agentUrl)?n.state.agentUrl:null)})}),T(R(n),"handleServerUrlChange",function(e){n.setState({serverUrl:e},function(){n.props.onServerUrlChange(Object(U.a)(n.state.serverUrl)?n.state.serverUrl:null)})}),T(R(n),"isAgentUrlValid",function(e){if(!e)return!0;try{var t=A.a.parse(e);return!!(t.protocol&&t.hostname&&t.port&&"/"===t.path)}catch(e){return!1}}),n.state={agentId:"",agentUrl:"",serverUrl:""},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,i["Component"]),n=t,(r=[{key:"render",value:function(){var e=Object(w.a)(this.state.agentId),t=this.isAgentUrlValid(this.state.agentUrl),n=Object(U.a)(this.state.serverUrl);return s.a.createElement(m.k,{horizontal:!0},s.a.createElement(C.a,{isValid:e,label:Object(y.b)("console.applications.agents.common.agents.new.agentId.title"),onChange:this.handleAgentIdChange,validationMessage:Object(y.b)("console.common.validation.invalidCharacters"),value:this.state.agentId}),s.a.createElement(C.a,{isValid:t,label:Object(y.b)("console.applications.agents.common.agentUrl.title"),onChange:this.handleAgentUrlChange,placeholder:Object(y.b)("console.applications.agents.common.agentUrl.placeholder"),validationMessage:Object(y.b)("console.applications.agents.common.agentUrl.validationMessage"),value:this.state.agentUrl}),s.a.createElement(C.a,{isValid:n,label:Object(y.b)("console.applications.agents.common.serverUrl.title"),onChange:this.handleServerUrlChange,placeholder:Object(y.b)("console.applications.agents.common.serverUrl.placeholder"),validationMessage:Object(y.b)("console.applications.agents.common.serverUrl.validationMessage"),value:this.state.serverUrl}),this.props.children)}}])&&E(n.prototype,r),o&&E(n,o),t}();q.propTypes={children:c.a.node.isRequired,onAgentIdChange:c.a.func.isRequired,onAgentUrlChange:c.a.func.isRequired,onServerUrlChange:c.a.func.isRequired};var V=q,k=n(1406),F=n(41);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return r=this,o=(e=N(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==D(o)&&"function"!=typeof o?x(r):o,G(x(n),"handleCreate",function(){n.props.onCreate(n.jsonSchemaView.getData())}),G(x(n),"setRef",function(e){n.jsonForm=e}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,i["Component"]),n=t,(r=[{key:"componentDidUpdate",value:function(){!this.jsonSchemaView&&this.props.template&&(this.jsonSchemaView=new O.a({hideInheritance:!0,schema:new g.a(this.props.schema),values:new b.a(this.props.template),showOnlyRequiredAndEmpty:!0}),this.jsonForm.appendChild(this.jsonSchemaView.render().el))}},{key:"render",value:function(){var e;return e=this.props.isFetching?s.a.createElement(j.a,null):s.a.createElement(V,{onAgentIdChange:this.props.onAgentIdChange,onAgentUrlChange:this.props.onAgentUrlChange,onServerUrlChange:this.props.onServerUrlChange},s.a.createElement("div",{ref:this.setRef})),s.a.createElement("div",null,s.a.createElement(k.a,{title:Object(y.b)("console.applications.agents.web.agents.new.title")}),s.a.createElement(m.w,null,s.a.createElement(m.w.Body,null,e),s.a.createElement(m.w.Footer,null,s.a.createElement(v.a,{backRoute:F.a.configuration.routes.realmsApplicationsAgentsWeb,disabled:!this.props.isCreateAllowed,onCreateClick:this.handleCreate}))))}}])&&M(n.prototype,r),o&&M(n,o),t}();W.propTypes={isCreateAllowed:c.a.bool.isRequired,isFetching:c.a.bool.isRequired,onAgentIdChange:c.a.func.isRequired,onAgentUrlChange:c.a.func.isRequired,onCreate:c.a.func.isRequired,onServerUrlChange:c.a.func.isRequired,schema:c.a.objectOf(c.a.object).isRequired,template:c.a.objectOf(c.a.object).isRequired};var Y=W,z=n(1400),B=n(1401);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=Q(t).call(this,e),n=!a||"object"!==H(a)&&"function"!=typeof a?X(r):a,$(X(n),"handleAgentIdChange",function(e){n.setState({agentId:e})}),$(X(n),"handleAgentUrlChange",function(e){n.setState({agentUrl:e})}),$(X(n),"handleServerUrlChange",function(e){n.setState({serverUrl:e})}),$(X(n),"handleCreate",function(e){var t=n.props.router.params[0],r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach(function(t){$(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},new b.a(e).removeNullPasswords(new g.a(n.props.schema)).raw,{agentUrl:n.state.agentUrl,serverUrl:n.state.serverUrl});Object(l.a)(t,f.h,r,n.state.agentId).then(function(){F.a.routeTo(F.a.configuration.routes.realmsApplicationsAgentsWebAgentsEdit,{args:Object(o.map)([t,n.state.agentId],encodeURIComponent),trigger:!0})},function(e){d.a.addMessage({response:e,type:d.a.TYPE_DANGER})})}),n.state={agentId:"",isFetching:!0},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,i["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;Object(l.d)(this.props.router.params[0],f.h).then(function(t){var n=t.schema,r=t.values;e.setState({isFetching:!1}),e.props.setSchema(n),e.props.setTemplate(r)},function(t){e.setState({isFetching:!1}),d.a.addMessage({response:t,type:d.a.TYPE_DANGER})})}},{key:"render",value:function(){var e=!Object(o.isEmpty)(this.state.agentId)&&!Object(o.isEmpty)(this.state.agentUrl)&&!Object(o.isEmpty)(this.state.serverUrl);return s.a.createElement(Y,{isCreateAllowed:e,isFetching:this.state.isFetching,onAgentIdChange:this.handleAgentIdChange,onAgentUrlChange:this.handleAgentUrlChange,onCreate:this.handleCreate,onServerUrlChange:this.handleServerUrlChange,schema:this.props.schema,serverUrl:this.state.serverUrl,template:this.props.template})}}])&&K(n.prototype,r),a&&K(n,a),t}();ee.propTypes={router:B.a,schema:c.a.shape({type:c.a.string.isRequired}),setSchema:c.a.func.isRequired,setTemplate:c.a.func.isRequired,template:c.a.shape({type:c.a.string.isRequired})},ee=Object(h.a)(ee,function(e){return{schema:e.remote.config.realm.applications.agents.web.agents.schema,template:e.remote.config.realm.applications.agents.web.agents.template}},function(e){return{setSchema:Object(r.a)(u.b,e),setTemplate:Object(r.a)(p.b,e)}}),ee=Object(z.a)(ee);t.default=ee}}]);
//# sourceMappingURL=131.fecf4a8b86.js.map