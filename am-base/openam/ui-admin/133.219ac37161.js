(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1467:function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return p}),r.d(t,"c",function(){return f}),r.d(t,"d",function(){return l}),r.d(t,"e",function(){return d}),r.d(t,"f",function(){return h}),r.d(t,"g",function(){return y}),r.d(t,"h",function(){return m}),r.d(t,"i",function(){return b});r(15),r(36),r(37),r(33),r(50),r(27),r(67),r(62),r(35),r(34);var n=r(162),a=r(370),o=r(372),c=r(371);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(e,t){var r="/realm-config/secrets/stores",o=t?"".concat(r,"/").concat(t):r;return new n.CRESTv2(Object(c.a)(o,e),{middleware:[a.a]})},s=function(e,t,r,n){return Object(o.a)(u(e,t).create(r,{id:n}))},p=function(e,t,r){return u(e,t).get(r)},f=function(e,t){return u(e,t).queryFilter()},l=function(e){return u(e).action("getCreatableTypes")},d=function(e,t){return u(e,t).action("getCreatableTypes")},h=function(e,t){return Promise.all([u(e,t).action("schema"),u(e,t).action("template")]).then(function(e){var t=i(e,2);return{schema:t[0],values:t[1]}})},y=function(e,t){return u(e,t).action("schema")},m=function(e,t){return Object(o.a)(Promise.all(t.map(function(t){return u(e,t._type._id).delete(t._id)})))},b=function(e,t,r,n){return Object(o.a)(u(e,t).update(r,n))}},1690:function(e,t,r){"use strict";r.r(t);r(15),r(36),r(37),r(33),r(53),r(54),r(27),r(67),r(35),r(34),r(271);var n=r(10),a=r(2),o=r(0),c=r.n(o),i=r(1),u=r.n(i),s=r(1467),p=r(399),f=r(522),l=r(445),d=r(521),h=r(1402),y=r(1420),m=r(1526),b=r(41),v=r(1527),O=r(1400),g=r(1401);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,r,n,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function S(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function c(e){w(o,n,a,c,i,"next",e)}function i(e){w(o,n,a,c,i,"throw",e)}c(void 0)})}}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=C(t).call(this,e),r=!o||"object"!==j(o)&&"function"!=typeof o?R(n):o,P(R(r),"handleCreate",function(){var e=S(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.props.router.params[0],e.next=3,Object(s.a)(n,r.props.selectedType,t,r.state.id);case 3:b.a.routeTo(b.a.configuration.routes.realmsSecretStoresEdit,{args:Object(a.map)([n,r.props.selectedType,r.state.id],encodeURIComponent),trigger:!0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),P(R(r),"handleIdChange",function(e){r.setState({id:e})}),P(R(r),"handleTypeChange",function(){var e=S(regeneratorRuntime.mark(function e(t){var n,a,o,c,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.props.setSelected(t),n=r.props.router.params[0],e.next=4,Object(s.f)(n,t);case 4:a=e.sent,o=a.schema,c=a.values,i=Object(v.a)(o,t),r.props.addOrUpdateSchema(i,t),r.props.addOrUpdateTemplate(c,t);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),r.state={id:"",isFetching:!0},r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,i["Component"]),r=t,(n=[{key:"componentDidMount",value:function(){var e=S(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.resetSelected(),t=this.props.router.params[0],e.prev=2,e.next=5,Object(s.d)(t);case 5:r=e.sent,n=r.result,this.props.setTypes(n);case 8:return e.prev=8,this.setState({isFetching:!1}),e.finish(8);case 11:case"end":return e.stop()}},e,this,[[2,,8,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=Object(y.a)(this.state.id),t=e&&!Object(a.isEmpty)(this.state.id)&&!Object(a.isEmpty)(this.props.selectedType);return u.a.createElement(m.a,{id:this.state.id,isCreateAllowed:t,isFetching:this.state.isFetching,isValidId:e,listRoute:b.a.configuration.routes.realmsSecretStores,onCreate:this.handleCreate,onIdChange:this.handleIdChange,onTypeChange:this.handleTypeChange,schema:this.props.schema,selectedType:this.props.selectedType,template:this.props.template,types:this.props.types})}}])&&T(r.prototype,n),o&&T(r,o),t}();x.propTypes={addOrUpdateSchema:c.a.func.isRequired,addOrUpdateTemplate:c.a.func.isRequired,resetSelected:c.a.func.isRequired,router:g.a,schema:c.a.objectOf(c.a.any),selectedType:c.a.string,setSelected:c.a.func.isRequired,setTypes:c.a.func.isRequired,template:c.a.objectOf(c.a.any),types:c.a.arrayOf(c.a.object).isRequired},x=Object(h.a)(x,function(e){var t=e.local.config.realm.secretStores.types.selected;return{schema:Object(a.get)(e.remote.config.realm.secretStores.types.schema,[t]),selectedType:t,template:Object(a.get)(e.remote.config.realm.secretStores.types.template,[t]),types:e.remote.config.realm.secretStores.types.list}},function(e){return{addOrUpdateSchema:Object(n.a)(p.a,e),addOrUpdateTemplate:Object(n.a)(f.a,e),resetSelected:Object(n.a)(l.b,e),setSelected:Object(n.a)(l.c,e),setTypes:Object(n.a)(d.b,e)}}),x=Object(O.a)(x),t.default=x}}]);
//# sourceMappingURL=133.219ac37161.js.map