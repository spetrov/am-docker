(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1404:function(e,t,n){"use strict";n(159);t.a=function(e){return e?"&_fields=".concat(e.join(",")):""}},1409:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return s}),n.d(t,"h",function(){return u}),n.d(t,"g",function(){return l});var r="IdentityGatewayAgent",o="J2EEAgent",a="OAuth2Client",i="RemoteConsentAgent",c="SoapSTSAgent",s="SoftwarePublisher",u="WebAgent",l="TrustedJwtIssuer"},1412:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"b",function(){return p}),n.d(t,"e",function(){return f}),n.d(t,"f",function(){return d}),n.d(t,"d",function(){return b}),n.d(t,"a",function(){return m}),n.d(t,"g",function(){return h});n(31),n(33),n(27),n(67),n(35),n(34);var r=n(2),o=n(122),a=n(23),i=n(1404),c=n(1405),s=n(38),u=new o.a("".concat(a.a.host).concat(a.a.context,"/json"));function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(c.a)(n.pagination),o=Object(i.a)(n.fields);return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"?_queryFilter=true").concat(r).concat(o),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function p(e,t,n){return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function f(e,t){return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function d(e,t,n){var o=Object(r.map)(n,function(n){return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE",suppressSpinner:!0})});return Promise.all(o)}function b(e,t){return Promise.all([f(e,t),u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})]).then(function(e){return{schema:e[0],values:e[1]}})}function m(e,t,n,r){return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(r)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(n),suppressSpinner:!0,errorsHandlers:{incorrectRevisionError:{status:412}}})}function h(e,t,n,o){return u.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(o)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify(Object(r.omit)(n,"_rev"))})}},1418:function(e,t,n){"use strict";n(15),n(36),n(37),n(17),n(33),n(1422),n(81),n(21),n(22),n(53),n(18),n(54),n(27),n(35),n(19),n(34);var r=n(2),o=n(160),a=n(0),i=n.n(a),c=n(1),s=n.n(c),u=n(25),l=n(16),p=n(1417),f=function(e){var t=e.additionalButtons,n=e.addButton,r=e.isDeleteDisabled,o=e.onDelete,a=e.numberSelected,i=a?"(".concat(a,")"):"";return s.a.createElement(u.e,{className:"page-toolbar"},s.a.createElement(p.a,{href:n.href,onClick:n.handleOnClick,title:n.title},n.menuItems),s.a.createElement(u.c,{disabled:r,onClick:o},s.a.createElement("i",{className:"fa fa-close"})," ",Object(l.b)("common.form.delete")," ",i),t)};f.propTypes={addButton:i.a.shape({handleOnClick:i.a.func,href:i.a.string,menuItems:i.a.arrayOf(i.a.shape({href:i.a.string.isRequired,title:i.a.string.isRequired})),title:i.a.string.isRequired}).isRequired,additionalButtons:i.a.node,isDeleteDisabled:i.a.bool.isRequired,numberSelected:i.a.number.isRequired,onDelete:i.a.func.isRequired};var d=f,b=n(1428),m=function(e){var t=e.addButton,n=e.description,r=e.title;return s.a.createElement(b.a,null,s.a.createElement("p",{className:"text-primary"},s.a.createElement("i",{className:"fa fa-list-alt fa-4x"})),s.a.createElement("h2",null,r),s.a.createElement("p",{className:"panel-description text-muted"},n),s.a.createElement(p.a,{href:t.href,onClick:t.handleOnClick,title:t.title},t.menuItems))};m.propTypes={addButton:i.a.shape({handleOnClick:i.a.func,href:i.a.string,menuItems:i.a.arrayOf(i.a.shape({href:i.a.string.isRequired,title:i.a.string.isRequired})),title:i.a.string.isRequired}).isRequired,description:i.a.string.isRequired,title:i.a.string.isRequired};var h=m,g=n(1407),y=n(369);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=P(t).call(this),e=!r||"object"!==O(r)&&"function"!=typeof r?E(n):r,A(E(e),"handleDelete",function(){e.props.onDelete(e.state.selectedItems)}),A(E(e),"handleSelectedChange",function(t){e.setState({selectedItems:t})}),e.state={selectedItems:[]},e}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,c["Component"]),n=t,(o=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){!Object(r.isEqual)(Object(r.map)(this.props.items,this.props.keyField).sort(),Object(r.map)(e.items,this.props.keyField).sort())&&this.setState({selectedItems:[]})}},{key:"render",value:function(){var e,t=Object(r.omit)(this.props,"children");if(this.props.isFetching)e=s.a.createElement(g.a,null);else if(Object(r.isEmpty)(this.props.items))e=s.a.createElement(h,t);else{var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){A(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{data:this.props.items,onSelectedChange:this.handleSelectedChange,selectedItems:this.state.selectedItems}),o=s.a.createElement(d,v({},t,{isDeleteDisabled:!this.state.selectedItems.length,numberSelected:this.state.selectedItems.length,onDelete:this.handleDelete}));e=s.a.createElement("div",null,o,s.a.createElement(y.a,n,this.props.children))}return e}}])&&w(n.prototype,o),a&&w(n,a),t}();C.defaultProps={keyField:"_id"},C.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.shape({type:i.a.oneOf([o.TableHeaderColumn]).isRequired})),i.a.shape({type:i.a.oneOf([o.TableHeaderColumn]).isRequired})]).isRequired,isFetching:i.a.bool.isRequired,items:i.a.arrayOf(i.a.object).isRequired,keyField:i.a.string,onDelete:i.a.func.isRequired};t.a=C},1419:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"g",function(){return p}),n.d(t,"b",function(){return f}),n.d(t,"e",function(){return d}),n.d(t,"c",function(){return b}),n.d(t,"d",function(){return m}),n.d(t,"f",function(){return h});n(31),n(33),n(27),n(67),n(35),n(34);var r=n(2),o=n(122),a=n(23),i=n(1404),c=n(1405),s=n(38),u=new o.a("".concat(a.a.host).concat(a.a.context,"/json"));function l(e,t,n,r){return u.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(r)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(n),suppressSpinner:!0,errorsHandlers:{incorrectRevisionError:{status:412}}})}function p(e,t,n,o){return u.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(o)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-Match":"*"},data:JSON.stringify(Object(r.omit)(n,"_rev"))})}function f(e,t,n){return u.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function d(e,t){return u.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(c.a)(n.pagination),o=Object(i.a)(n.fields);return u.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"?_queryFilter=true").concat(r).concat(o),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function m(e,t){return Promise.all([d(e,t),u.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})]).then(function(e){return{schema:e[0],values:e[1]}})}function h(e,t,n){var o=Object(r.map)(n,function(n){return u.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0,type:"DELETE"})});return Promise.all(o)}},1422:function(e,t,n){"use strict";var r=n(39),o=n(215),a=n(89),i=n(44),c=n(216),s=[].sort,u=[1,2,3],l=i(function(){u.sort(void 0)}),p=i(function(){u.sort(null)}),f=c("sort");r({target:"Array",proto:!0,forced:l||!p||f},{sort:function(e){return void 0===e?s.call(a(this)):s.call(a(this),o(e))}})},1703:function(e,t,n){"use strict";n.r(t);var r=n(25),o=n(16),a=n(1),i=n.n(a),c=(n(15),n(36),n(37),n(17),n(33),n(50),n(21),n(22),n(53),n(18),n(54),n(27),n(67),n(35),n(19),n(34),n(271),n(10)),s=n(2),u=n(0),l=n.n(u),p=n(1419),f=n(496),d=n(1409),b=n(1410),m=n(1402),h=(n(81),n(160)),g=n(1425),y=n(1426),O=n(1418);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j=function(e){return i.a.createElement(r.w,{className:"fr-panel-tab"},i.a.createElement(r.w.Body,null,i.a.createElement(O.a,v({},Object(s.omit)(e,"children"),{addButton:{title:Object(o.b)("console.applications.oauth2.trustedJwtIssuer.agents.list.callToAction.button"),href:e.newHref},description:Object(o.b)("console.applications.oauth2.trustedJwtIssuer.agents.list.callToAction.description"),title:Object(o.b)("console.applications.oauth2.trustedJwtIssuer.agents.list.callToAction.title")}),i.a.createElement(h.TableHeaderColumn,{columnTitle:s.identity,dataField:"_id",dataFormat:Object(g.a)(i.a.createElement(y.a,{icon:"male"})),dataSort:!0},Object(o.b)("console.applications.oauth2.trustedJwtIssuer.agents.list.grid.0")),i.a.createElement(h.TableHeaderColumn,{dataField:"agentgroup",dataSort:!0},Object(o.b)("console.applications.oauth2.trustedJwtIssuer.agents.list.grid.1")))))};j.propTypes={newHref:l.a.string.isRequired};var w=j,P=n(52),E=n(41),I=n(1432),A=n(1400),C=n(1401);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){J(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function D(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=k(t).call(this),e=!r||"object"!==S(r)&&"function"!=typeof r?q(n):r,J(q(e),"handleTableDataChange",function(t){var n=e.props.router.params[0],r={fields:["agentgroup"],pagination:t};Object(p.c)(n,d.g,r).then(function(t){e.setState({isFetching:!1}),e.props.pagination.onDataChange(t),e.props.setInstances(t.result)},function(t){e.setState({isFetching:!1}),P.a.addMessage({response:t,type:P.a.TYPE_DANGER})})}),J(q(e),"handleDelete",function(t){var n=t.map(function(e){return e._id});Object(b.b)({names:n,objectName:"agent",onConfirm:function(){var t,r=(t=regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.props.router.params[0],t.next=4,Object(p.f)(r,d.g,n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),P.a.addMessage({response:t.t0,type:P.a.TYPE_DANGER});case 9:return t.prev=9,e.props.pagination.onDataDelete(n.length),t.finish(9);case 12:case"end":return t.stop()}},t,null,[[0,6,9,12]])}),function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(e){D(a,r,o,i,c,"next",e)}function c(e){D(a,r,o,i,c,"throw",e)}i(void 0)})});return function(){return r.apply(this,arguments)}}()})}),J(q(e),"handleEdit",function(t){var n=t._id,r=e.props.router.params[0];E.a.routeTo(E.a.configuration.routes.realmsApplicationsOAuth2TrustedJwtIssuerAgentsEdit,{args:Object(s.map)([r,n],encodeURIComponent),trigger:!0})}),e.state={isFetching:!0},e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){this.handleTableDataChange(this.props.pagination)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){Object(s.isEqual)(this.props.pagination,e.pagination)||this.handleTableDataChange(e.pagination)}},{key:"render",value:function(){var e=this.props.router.params[0],t=E.a.getLink(E.a.configuration.routes.realmsApplicationsOAuth2TrustedJwtIssuerAgentsNew,[encodeURIComponent(e)]);return i.a.createElement(w,{isFetching:this.state.isFetching,items:this.props.agents,newHref:"#".concat(t),onDelete:this.handleDelete,onRowClick:this.handleEdit,options:R({},this.props.pagination)})}}])&&_(n.prototype,r),o&&_(n,o),t}();N.propTypes={agents:l.a.arrayOf(l.a.object),pagination:I.b,router:C.a,setInstances:l.a.func.isRequired},N=Object(m.a)(N,function(e){return{agents:Object(s.values)(e.remote.config.realm.applications.oauth2.trustedJwtIssuer.agents.instances)}},function(e){return{setInstances:Object(c.a)(f.b,e)}}),N=Object(A.a)(N);var U=N=Object(I.a)(N),x=n(1412),V=n(499);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var B=function(e){return i.a.createElement(r.w,{className:"fr-panel-tab"},i.a.createElement(r.w.Body,null,i.a.createElement(O.a,H({},Object(s.omit)(e,"children"),{addButton:{title:Object(o.b)("console.applications.agents.common.groups.list.callToAction.button"),href:e.newHref},description:Object(o.b)("console.applications.oauth2.trustedJwtIssuer.groups.list.callToAction.description"),title:Object(o.b)("console.applications.oauth2.trustedJwtIssuer.groups.list.callToAction.title")}),i.a.createElement(h.TableHeaderColumn,{columnTitle:s.identity,dataField:"_id",dataFormat:Object(g.a)(i.a.createElement(y.a,{icon:"folder"})),dataSort:!0},Object(o.b)("console.applications.oauth2.trustedJwtIssuer.groups.list.grid.0")))))};B.propTypes={newHref:l.a.string.isRequired};var M=B;function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Y(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=z(t).call(this),e=!r||"object"!==G(r)&&"function"!=typeof r?Q(n):r,Z(Q(e),"handleTableDataChange",function(t){var n=e.props.router.params[0],r={fields:[""],pagination:t};Object(x.c)(n,d.g,r).then(function(t){e.setState({isFetching:!1}),e.props.pagination.onDataChange(t),e.props.setInstances(t.result)},function(t){e.setState({isFetching:!1}),P.a.addMessage({response:t,type:P.a.TYPE_DANGER})})}),Z(Q(e),"handleDelete",function(t){var n=t.map(function(e){return e._id});Object(b.b)({names:n,objectName:"agentGroup",onConfirm:function(){var t,r=(t=regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.props.router.params[0],t.next=4,Object(x.f)(r,d.g,n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),P.a.addMessage({response:t.t0,type:P.a.TYPE_DANGER});case 9:return t.prev=9,e.props.pagination.onDataDelete(n.length),t.finish(9);case 12:case"end":return t.stop()}},t,null,[[0,6,9,12]])}),function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(e){Y(a,r,o,i,c,"next",e)}function c(e){Y(a,r,o,i,c,"throw",e)}i(void 0)})});return function(){return r.apply(this,arguments)}}()})}),Z(Q(e),"handleEdit",function(t){var n=t._id,r=e.props.router.params[0];E.a.routeTo(E.a.configuration.routes.realmsApplicationsOAuth2TrustedJwtIssuerAgentGroupsEdit,{args:Object(s.map)([r,n],encodeURIComponent),trigger:!0})}),e.state={isFetching:!0},e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){this.handleTableDataChange(this.props.pagination)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){Object(s.isEqual)(this.props.pagination,e.pagination)||this.handleTableDataChange(e.pagination)}},{key:"render",value:function(){var e=this.props.router.params[0],t=E.a.getLink(E.a.configuration.routes.realmsApplicationsOAuth2TrustedJwtIssuerAgentGroupsNew,[encodeURIComponent(e)]);return i.a.createElement(M,{isFetching:this.state.isFetching,items:this.props.groups,newHref:"#".concat(t),onDelete:this.handleDelete,onRowClick:this.handleEdit,options:W({},this.props.pagination)})}}])&&K(n.prototype,r),o&&K(n,o),t}();$.propTypes={groups:l.a.arrayOf(l.a.object),pagination:I.b,router:C.a,setInstances:l.a.func.isRequired},$=Object(m.a)($,function(e){return{groups:Object(s.values)(e.remote.config.realm.applications.oauth2.trustedJwtIssuer.groups.instances)}},function(e){return{setInstances:Object(c.a)(V.b,e)}}),$=Object(A.a)($);var ee=$=Object(I.a)($),te=n(1406);t.default=function(){return i.a.createElement("div",null,i.a.createElement(te.a,{title:Object(o.b)("console.applications.oauth2.trustedJwtIssuer.title")}),i.a.createElement(r.B,{defaultActiveKey:1,id:"trustedJwtIssuerAgents",mountOnEnter:!0,unmountOnExit:!0},i.a.createElement(r.z,{eventKey:1,title:Object(o.b)("console.applications.agents.common.tabs.0")},i.a.createElement(U,null)),i.a.createElement(r.z,{eventKey:2,title:Object(o.b)("console.applications.agents.common.tabs.1")},i.a.createElement(ee,null))))}}}]);
//# sourceMappingURL=97.3b4bb553a7.js.map