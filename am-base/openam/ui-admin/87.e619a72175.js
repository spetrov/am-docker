(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1404:function(e,t,n){"use strict";n(159);t.a=function(e){return e?"&_fields=".concat(e.join(",")):""}},1409:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return s}),n.d(t,"h",function(){return l}),n.d(t,"g",function(){return u});var r="IdentityGatewayAgent",o="J2EEAgent",a="OAuth2Client",i="RemoteConsentAgent",c="SoapSTSAgent",s="SoftwarePublisher",l="WebAgent",u="TrustedJwtIssuer"},1412:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"b",function(){return p}),n.d(t,"e",function(){return f}),n.d(t,"f",function(){return d}),n.d(t,"d",function(){return b}),n.d(t,"a",function(){return m}),n.d(t,"g",function(){return h});n(31),n(33),n(27),n(67),n(35),n(34);var r=n(2),o=n(122),a=n(23),i=n(1404),c=n(1405),s=n(38),l=new o.a("".concat(a.a.host).concat(a.a.context,"/json"));function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(c.a)(n.pagination),o=Object(i.a)(n.fields);return l.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"?_queryFilter=true").concat(r).concat(o),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function p(e,t,n){return l.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function f(e,t){return l.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function d(e,t,n){var o=Object(r.map)(n,function(n){return l.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE",suppressSpinner:!0})});return Promise.all(o)}function b(e,t){return Promise.all([f(e,t),l.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})]).then(function(e){return{schema:e[0],values:e[1]}})}function m(e,t,n,r){return l.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(r)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(n),suppressSpinner:!0,errorsHandlers:{incorrectRevisionError:{status:412}}})}function h(e,t,n,o){return l.serviceCall({url:Object(s.a)("/realm-config/agents/groups/".concat(t,"/").concat(encodeURIComponent(o)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify(Object(r.omit)(n,"_rev"))})}},1418:function(e,t,n){"use strict";n(15),n(36),n(37),n(17),n(33),n(1422),n(81),n(21),n(22),n(53),n(18),n(54),n(27),n(35),n(19),n(34);var r=n(2),o=n(160),a=n(0),i=n.n(a),c=n(1),s=n.n(c),l=n(25),u=n(16),p=n(1417),f=function(e){var t=e.additionalButtons,n=e.addButton,r=e.isDeleteDisabled,o=e.onDelete,a=e.numberSelected,i=a?"(".concat(a,")"):"";return s.a.createElement(l.e,{className:"page-toolbar"},s.a.createElement(p.a,{href:n.href,onClick:n.handleOnClick,title:n.title},n.menuItems),s.a.createElement(l.c,{disabled:r,onClick:o},s.a.createElement("i",{className:"fa fa-close"})," ",Object(u.b)("common.form.delete")," ",i),t)};f.propTypes={addButton:i.a.shape({handleOnClick:i.a.func,href:i.a.string,menuItems:i.a.arrayOf(i.a.shape({href:i.a.string.isRequired,title:i.a.string.isRequired})),title:i.a.string.isRequired}).isRequired,additionalButtons:i.a.node,isDeleteDisabled:i.a.bool.isRequired,numberSelected:i.a.number.isRequired,onDelete:i.a.func.isRequired};var d=f,b=n(1428),m=function(e){var t=e.addButton,n=e.description,r=e.title;return s.a.createElement(b.a,null,s.a.createElement("p",{className:"text-primary"},s.a.createElement("i",{className:"fa fa-list-alt fa-4x"})),s.a.createElement("h2",null,r),s.a.createElement("p",{className:"panel-description text-muted"},n),s.a.createElement(p.a,{href:t.href,onClick:t.handleOnClick,title:t.title},t.menuItems))};m.propTypes={addButton:i.a.shape({handleOnClick:i.a.func,href:i.a.string,menuItems:i.a.arrayOf(i.a.shape({href:i.a.string.isRequired,title:i.a.string.isRequired})),title:i.a.string.isRequired}).isRequired,description:i.a.string.isRequired,title:i.a.string.isRequired};var h=m,g=n(1407),O=n(369);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=P(t).call(this),e=!r||"object"!==y(r)&&"function"!=typeof r?w(n):r,A(w(e),"handleDelete",function(){e.props.onDelete(e.state.selectedItems)}),A(w(e),"handleSelectedChange",function(t){e.setState({selectedItems:t})}),e.state={selectedItems:[]},e}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,c["Component"]),n=t,(o=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){!Object(r.isEqual)(Object(r.map)(this.props.items,this.props.keyField).sort(),Object(r.map)(e.items,this.props.keyField).sort())&&this.setState({selectedItems:[]})}},{key:"render",value:function(){var e,t=Object(r.omit)(this.props,"children");if(this.props.isFetching)e=s.a.createElement(g.a,null);else if(Object(r.isEmpty)(this.props.items))e=s.a.createElement(h,t);else{var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){A(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{data:this.props.items,onSelectedChange:this.handleSelectedChange,selectedItems:this.state.selectedItems}),o=s.a.createElement(d,v({},t,{isDeleteDisabled:!this.state.selectedItems.length,numberSelected:this.state.selectedItems.length,onDelete:this.handleDelete}));e=s.a.createElement("div",null,o,s.a.createElement(O.a,n,this.props.children))}return e}}])&&E(n.prototype,o),a&&E(n,a),t}();S.defaultProps={keyField:"_id"},S.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.shape({type:i.a.oneOf([o.TableHeaderColumn]).isRequired})),i.a.shape({type:i.a.oneOf([o.TableHeaderColumn]).isRequired})]).isRequired,isFetching:i.a.bool.isRequired,items:i.a.arrayOf(i.a.object).isRequired,keyField:i.a.string,onDelete:i.a.func.isRequired};t.a=S},1419:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"g",function(){return p}),n.d(t,"b",function(){return f}),n.d(t,"e",function(){return d}),n.d(t,"c",function(){return b}),n.d(t,"d",function(){return m}),n.d(t,"f",function(){return h});n(31),n(33),n(27),n(67),n(35),n(34);var r=n(2),o=n(122),a=n(23),i=n(1404),c=n(1405),s=n(38),l=new o.a("".concat(a.a.host).concat(a.a.context,"/json"));function u(e,t,n,r){return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(r)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(n),suppressSpinner:!0,errorsHandlers:{incorrectRevisionError:{status:412}}})}function p(e,t,n,o){return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(o)),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-Match":"*"},data:JSON.stringify(Object(r.omit)(n,"_rev"))})}function f(e,t,n){return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function d(e,t){return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(c.a)(n.pagination),o=Object(i.a)(n.fields);return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"?_queryFilter=true").concat(r).concat(o),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0})}function m(e,t){return Promise.all([d(e,t),l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})]).then(function(e){return{schema:e[0],values:e[1]}})}function h(e,t,n){var o=Object(r.map)(n,function(n){return l.serviceCall({url:Object(s.a)("/realm-config/agents/".concat(t,"/").concat(encodeURIComponent(n)),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:!0,type:"DELETE"})});return Promise.all(o)}},1422:function(e,t,n){"use strict";var r=n(39),o=n(215),a=n(89),i=n(44),c=n(216),s=[].sort,l=[1,2,3],u=i(function(){l.sort(void 0)}),p=i(function(){l.sort(null)}),f=c("sort");r({target:"Array",proto:!0,forced:u||!p||f},{sort:function(e){return void 0===e?s.call(a(this)):s.call(a(this),o(e))}})},1434:function(e,t,n){"use strict";var r=n(2);t.a=function(e,t){return function(n,o,a,i){return e(Object(r.get)(n,t),o,a,i)}}},1443:function(e,t,n){"use strict";var r=n(16),o=n(1),a=n.n(o);t.a=function(e){if(e)return"active"===e.toLowerCase()?a.a.createElement("span",{className:"text-success"},a.a.createElement("i",{className:"fa fa-check-circle"})," ",Object(r.b)("common.form.active")):a.a.createElement("span",{className:"text-warning"},a.a.createElement("i",{className:"fa fa-ban"})," ",Object(r.b)("common.form.inactive"))}},1700:function(e,t,n){"use strict";n.r(t);var r=n(25),o=n(16),a=n(1),i=n.n(a),c=(n(15),n(36),n(37),n(17),n(33),n(50),n(21),n(22),n(53),n(18),n(54),n(27),n(67),n(35),n(19),n(34),n(271),n(10)),s=n(2),l=n(0),u=n.n(l),p=n(1419),f=n(1409),d=n(478),b=n(1410),m=n(1402),h=(n(81),n(160)),g=n(1434),O=n(1425),y=n(1426),v=n(1418),j=n(1443);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var P=function(e){return i.a.createElement(r.w,{className:"fr-panel-tab"},i.a.createElement(r.w.Body,null,i.a.createElement(v.a,E({},Object(s.omit)(e,"children"),{addButton:{title:Object(o.b)("console.applications.oauth2.clients.clients.list.callToAction.button"),href:e.newHref},description:Object(o.b)("console.applications.oauth2.clients.clients.list.callToAction.description"),title:Object(o.b)("console.applications.oauth2.clients.clients.list.callToAction.title")}),i.a.createElement(h.TableHeaderColumn,{columnTitle:s.identity,dataField:"_id",dataFormat:Object(O.a)(i.a.createElement(y.a,{icon:"list-alt"})),dataSort:!0},Object(o.b)("console.applications.oauth2.clients.clients.list.grid.0")),i.a.createElement(h.TableHeaderColumn,{dataField:"coreOAuth2ClientConfig",dataFormat:Object(g.a)(s.identity,"agentgroup"),dataSort:!0},Object(o.b)("console.applications.oauth2.clients.clients.list.grid.1")),i.a.createElement(h.TableHeaderColumn,{dataField:"coreOAuth2ClientConfig",dataFormat:Object(g.a)(j.a,"status"),dataSort:!0},Object(o.b)("console.applications.oauth2.clients.clients.list.grid.2")))))};P.propTypes={newHref:u.a.string.isRequired};var w=P,C=n(52),A=n(41),S=n(1432),R=n(1400),T=n(1401);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach(function(t){U(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function k(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=q(t).call(this),e=!r||"object"!==D(r)&&"function"!=typeof r?N(n):r,U(N(e),"handleEdit",function(t){var n=t._id,r=e.props.router.params[0];A.a.routeTo(A.a.configuration.routes.realmsApplicationsOAuth2ClientsEdit,{args:Object(s.map)([r,n],encodeURIComponent),trigger:!0})}),U(N(e),"handleTableDataChange",function(t){var n=e.props.router.params[0],r={fields:["coreOAuth2ClientConfig/status","coreOAuth2ClientConfig/agentgroup"],pagination:t};Object(p.c)(n,f.c,r).then(function(t){e.setState({isFetching:!1}),e.props.pagination.onDataChange(t),e.props.setInstances(t.result)},function(t){e.setState({isFetching:!1}),C.a.addMessage({response:t,type:C.a.TYPE_DANGER})})}),U(N(e),"handleDelete",function(t){var n=t.map(function(e){return e._id});Object(b.b)({names:n,objectName:"oauth20Client",onConfirm:function(){var t,r=(t=regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.props.router.params[0],t.next=4,Object(p.f)(r,f.c,n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),C.a.addMessage({response:t.t0,type:C.a.TYPE_DANGER});case 9:return t.prev=9,e.props.pagination.onDataDelete(n.length),t.finish(9);case 12:case"end":return t.stop()}},t,null,[[0,6,9,12]])}),function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(e){k(a,r,o,i,c,"next",e)}function c(e){k(a,r,o,i,c,"throw",e)}i(void 0)})});return function(){return r.apply(this,arguments)}}()})}),e.state={isFetching:!0},e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){this.handleTableDataChange(this.props.pagination)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){Object(s.isEqual)(this.props.pagination,e.pagination)||this.handleTableDataChange(e.pagination)}},{key:"render",value:function(){var e=this.props.router.params[0],t=A.a.getLink(A.a.configuration.routes.realmsApplicationsOAuth2ClientsNew,[encodeURIComponent(e)]);return i.a.createElement(w,{isFetching:this.state.isFetching,items:this.props.clients,newHref:"#".concat(t),onDelete:this.handleDelete,onRowClick:this.handleEdit,options:_({},this.props.pagination)})}}])&&F(n.prototype,r),o&&F(n,o),t}();H.propTypes={clients:u.a.arrayOf(u.a.object),pagination:S.b,router:T.a,setInstances:u.a.func.isRequired},H=Object(m.a)(H,function(e){return{clients:Object(s.values)(e.remote.config.realm.applications.oauth2.clients.clients.instances)}},function(e){return{setInstances:Object(c.a)(d.b,e)}}),H=Object(R.a)(H);var V=H=Object(S.a)(H),B=n(1412),M=n(481);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var J=function(e){return i.a.createElement(r.w,{className:"fr-panel-tab"},i.a.createElement(r.w.Body,null,i.a.createElement(v.a,G({},Object(s.omit)(e,"children"),{addButton:{title:Object(o.b)("console.applications.oauth2.clients.groups.list.callToAction.button"),href:e.newHref},description:Object(o.b)("console.applications.oauth2.clients.groups.list.callToAction.description"),title:Object(o.b)("console.applications.oauth2.clients.groups.list.callToAction.title")}),i.a.createElement(h.TableHeaderColumn,{columnTitle:s.identity,dataField:"_id",dataFormat:Object(O.a)(i.a.createElement(y.a,{icon:"list-alt"})),dataSort:!0},Object(o.b)("console.applications.oauth2.clients.groups.list.grid.0")),i.a.createElement(h.TableHeaderColumn,{dataField:"coreOAuth2ClientConfig",dataFormat:Object(g.a)(j.a,"status"),dataSort:!0},Object(o.b)("console.applications.oauth2.clients.groups.list.grid.1")))))};J.propTypes={newHref:u.a.string.isRequired};var L=J;function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach(function(t){ee(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function z(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var te=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=X(t).call(this),e=!r||"object"!==W(r)&&"function"!=typeof r?Z(n):r,ee(Z(e),"handleTableDataChange",function(t){var n=e.props.router.params[0],r={fields:["coreOAuth2ClientConfig/status"],pagination:t};Object(B.c)(n,f.c,r).then(function(t){e.setState({isFetching:!1}),e.props.pagination.onDataChange(t),e.props.setInstances(t.result)},function(t){e.setState({isFetching:!1}),C.a.addMessage({response:t,type:C.a.TYPE_DANGER})})}),ee(Z(e),"handleEdit",function(t){var n=t._id,r=e.props.router.params[0];A.a.routeTo(A.a.configuration.routes.realmsApplicationsOAuth2GroupsEdit,{args:Object(s.map)([r,n],encodeURIComponent),trigger:!0})}),ee(Z(e),"handleDelete",function(t){var n=t.map(function(e){return e._id});Object(b.b)({names:n,objectName:"oauth20Group",onConfirm:function(){var t,r=(t=regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.props.router.params[0],t.next=4,Object(B.f)(r,f.c,n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),C.a.addMessage({response:t.t0,type:C.a.TYPE_DANGER});case 9:return t.prev=9,e.props.pagination.onDataDelete(n.length),t.finish(9);case 12:case"end":return t.stop()}},t,null,[[0,6,9,12]])}),function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(e){z(a,r,o,i,c,"next",e)}function c(e){z(a,r,o,i,c,"throw",e)}i(void 0)})});return function(){return r.apply(this,arguments)}}()})}),e.state={isFetching:!0},e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){this.handleTableDataChange(this.props.pagination)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){Object(s.isEqual)(this.props.pagination,e.pagination)||this.handleTableDataChange(e.pagination)}},{key:"render",value:function(){var e=this.props.router.params[0],t=A.a.getLink(A.a.configuration.routes.realmsApplicationsOAuth2GroupsNew,[encodeURIComponent(e)]);return i.a.createElement(L,{isFetching:this.state.isFetching,items:this.props.groups,newHref:"#".concat(t),onDelete:this.handleDelete,onRowClick:this.handleEdit,options:K({},this.props.pagination)})}}])&&Q(n.prototype,r),o&&Q(n,o),t}();te.propTypes={groups:u.a.arrayOf(u.a.object),pagination:S.b,router:T.a,setInstances:u.a.func.isRequired},te=Object(m.a)(te,function(e){return{groups:Object(s.values)(e.remote.config.realm.applications.oauth2.clients.groups.instances)}},function(e){return{setInstances:Object(c.a)(M.b,e)}}),te=Object(R.a)(te);var ne=te=Object(S.a)(te),re=n(1406);t.default=function(){return i.a.createElement("div",null,i.a.createElement(re.a,{title:Object(o.b)("console.applications.oauth2.clients.title")}),i.a.createElement(r.B,{defaultActiveKey:1,id:"oAuth2",mountOnEnter:!0,unmountOnExit:!0},i.a.createElement(r.z,{eventKey:1,title:Object(o.b)("console.applications.oauth2.clients.tabs.0")},i.a.createElement(V,null)),i.a.createElement(r.z,{eventKey:2,title:Object(o.b)("console.applications.oauth2.clients.tabs.1")},i.a.createElement(ne,null))))}}}]);
//# sourceMappingURL=87.e619a72175.js.map