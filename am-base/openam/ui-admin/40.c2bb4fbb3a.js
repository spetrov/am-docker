(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1400:function(e,t,n){"use strict";n(50),n(144);var r=n(2),a=n.n(r),o=n(1),i=n.n(o),c=n(41),s=n(88);t.a=function(e){var t=function(t){var n=c.a.currentRoute,r=c.a.extractParameters(n,s.a.getCurrentFragment()),o=c.a.applyDefaultParameters(n,r),l={params:a.a.map(o,function(e){return e?decodeURIComponent(e):""})};return i.a.createElement(e,a.a.extend({},t,{router:l}))};return t.displayName="withRouter(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),t.WrappedComponent=e,t}},1401:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=a.a.shape({params:a.a.array.isRequired});t.a=o},1402:function(e,t,n){"use strict";n(144),n(81);var r=n(1424),a=n(1),o=n.n(a),i=n(64);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var s=r.a.apply(void 0,n)(e),l=function(e){return o.a.createElement(s,c({},e,{store:i.a}))};return l.displayName="connectWithStore(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),l.WrappedComponent=e,l}},1406:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),i=n(1),c=n.n(i),s=function(e){var t=e.children,n=e.icon,a=e.title,o=e.subtitle,i=o?"deep":"shallow",s=n?c.a.createElement("span",{className:"header-icon pull-left bg-primary"},c.a.createElement("i",{className:"fa fa-".concat(n)})):null,l=function(e){return e?Object(r.isString)(e)?c.a.createElement("h4",{className:"page-type"},e):e:null}(o);return c.a.createElement("header",{className:"page-header page-header-no-border clearfix"},s,c.a.createElement("div",{className:"button-group pull-right ".concat(i,"-page-header-button-group")},t),c.a.createElement("div",{className:"pull-left"},l,c.a.createElement("h1",{className:"wordwrap"},a)))};s.propTypes={children:o.a.node,icon:o.a.string,subtitle:o.a.node,title:o.a.string.isRequired},t.a=s},1407:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(16);t.a=function(){return a.a.createElement("p",{className:"loading text-muted"},a.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-2x fa-fw"}),a.a.createElement("span",null,Object(o.b)("console.common.loading")))}},1417:function(e,t,n){"use strict";n(15),n(63),n(81),n(18);var r=n(25),a=n(2),o=n(0),i=n.n(o),c=n(1),s=n.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=function(e){var t=e.children,n=e.href,o=e.title,i=e.onClick;if(t){var c=Object(a.map)(t,function(e){var t=e.title,n=u(e,["title"]);return s.a.createElement(r.t,l({key:t},n),t)});return s.a.createElement(r.d,null,s.a.createElement(r.j,{bsStyle:"primary",disabled:Object(a.isEmpty)(c),id:Object(a.camelCase)(o),title:o},c))}return s.a.createElement(r.d,null,s.a.createElement(r.c,{bsStyle:"primary",href:n,onClick:i},s.a.createElement("i",{className:"fa fa-plus"})," ",o))};f.propTypes={children:i.a.arrayOf(i.a.shape({onClick:i.a.func,href:i.a.string,title:i.a.string.isRequired})),href:i.a.string,onClick:i.a.func,title:i.a.string.isRequired},t.a=f},1418:function(e,t,n){"use strict";n(15),n(36),n(37),n(17),n(33),n(1422),n(81),n(21),n(22),n(53),n(18),n(54),n(27),n(35),n(19),n(34);var r=n(2),a=n(160),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(25),u=n(16),f=n(1417),p=function(e){var t=e.additionalButtons,n=e.addButton,r=e.isDeleteDisabled,a=e.onDelete,o=e.numberSelected,i=o?"(".concat(o,")"):"";return s.a.createElement(l.e,{className:"page-toolbar"},s.a.createElement(f.a,{href:n.href,onClick:n.handleOnClick,title:n.title},n.menuItems),s.a.createElement(l.c,{disabled:r,onClick:a},s.a.createElement("i",{className:"fa fa-close"})," ",Object(u.b)("common.form.delete")," ",i),t)};p.propTypes={addButton:i.a.shape({handleOnClick:i.a.func,href:i.a.string,menuItems:i.a.arrayOf(i.a.shape({href:i.a.string.isRequired,title:i.a.string.isRequired})),title:i.a.string.isRequired}).isRequired,additionalButtons:i.a.node,isDeleteDisabled:i.a.bool.isRequired,numberSelected:i.a.number.isRequired,onDelete:i.a.func.isRequired};var d=p,m=n(1428),b=function(e){var t=e.addButton,n=e.description,r=e.title;return s.a.createElement(m.a,null,s.a.createElement("p",{className:"text-primary"},s.a.createElement("i",{className:"fa fa-list-alt fa-4x"})),s.a.createElement("h2",null,r),s.a.createElement("p",{className:"panel-description text-muted"},n),s.a.createElement(f.a,{href:t.href,onClick:t.handleOnClick,title:t.title},t.menuItems))};b.propTypes={addButton:i.a.shape({handleOnClick:i.a.func,href:i.a.string,menuItems:i.a.arrayOf(i.a.shape({href:i.a.string.isRequired,title:i.a.string.isRequired})),title:i.a.string.isRequired}).isRequired,description:i.a.string.isRequired,title:i.a.string.isRequired};var h=b,y=n(1407),O=n(369);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=w(t).call(this),e=!r||"object"!==g(r)&&"function"!=typeof r?S(n):r,P(S(e),"handleDelete",function(){e.props.onDelete(e.state.selectedItems)}),P(S(e),"handleSelectedChange",function(t){e.setState({selectedItems:t})}),e.state={selectedItems:[]},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,c["Component"]),n=t,(a=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){!Object(r.isEqual)(Object(r.map)(this.props.items,this.props.keyField).sort(),Object(r.map)(e.items,this.props.keyField).sort())&&this.setState({selectedItems:[]})}},{key:"render",value:function(){var e,t=Object(r.omit)(this.props,"children");if(this.props.isFetching)e=s.a.createElement(y.a,null);else if(Object(r.isEmpty)(this.props.items))e=s.a.createElement(h,t);else{var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach(function(t){P(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{data:this.props.items,onSelectedChange:this.handleSelectedChange,selectedItems:this.state.selectedItems}),a=s.a.createElement(d,v({},t,{isDeleteDisabled:!this.state.selectedItems.length,numberSelected:this.state.selectedItems.length,onDelete:this.handleDelete}));e=s.a.createElement("div",null,a,s.a.createElement(O.a,n,this.props.children))}return e}}])&&j(n.prototype,a),o&&j(n,o),t}();_.defaultProps={keyField:"_id"},_.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.shape({type:i.a.oneOf([a.TableHeaderColumn]).isRequired})),i.a.shape({type:i.a.oneOf([a.TableHeaderColumn]).isRequired})]).isRequired,isFetching:i.a.bool.isRequired,items:i.a.arrayOf(i.a.object).isRequired,keyField:i.a.string,onDelete:i.a.func.isRequired};t.a=_},1422:function(e,t,n){"use strict";var r=n(39),a=n(215),o=n(89),i=n(44),c=n(216),s=[].sort,l=[1,2,3],u=i(function(){l.sort(void 0)}),f=i(function(){l.sort(null)}),p=c("sort");r({target:"Array",proto:!0,forced:u||!f||p},{sort:function(e){return void 0===e?s.call(o(this)):s.call(o(this),a(e))}})},1423:function(e,t,n){"use strict";n(143),n(114);var r=n(2),a=n(1431),o=n.n(a);function i(e){e.data.dialog.$modalContent.find("[autofocus]").focus(),function(e){Object(r.each)(e.options.buttons,function(t){!0===t.disabled&&e.getButton(t.id).disable()})}(e.data.dialog)}var c={};c.TYPE_DEFAULT=o.a.TYPE_DEFAULT,c.TYPE_INFO=o.a.TYPE_INFO,c.TYPE_PRIMARY=o.a.TYPE_PRIMARY,c.TYPE_SUCCESS=o.a.TYPE_SUCCESS,c.TYPE_WARNING=o.a.TYPE_WARNING,c.TYPE_DANGER=o.a.TYPE_DANGER,c.SIZE_NORMAL=o.a.SIZE_NORMAL,c.SIZE_SMALL=o.a.SIZE_SMALL,c.SIZE_WIDE=o.a.SIZE_WIDE,c.SIZE_LARGE=o.a.SIZE_LARGE,Object(r.each)(["show","confirm","warning","danger","success"],function(e){c[e]=function(t){var n=new o.a[e](t),r=t.type||c.TYPE_PRIMARY;return r=r.replace("type","text"),n.getModalHeader().addClass(r),n.getModal().on("shown.bs.modal",{dialog:n},i),n}}),t.a=c},1425:function(e,t,n){"use strict";var r=n(1),a=n.n(r);t.a=function(e){return function(t,n,r,o){return a.a.cloneElement(e,{cell:t,row:n,formatExtraData:r,rowIdx:o})}}},1426:function(e,t,n){"use strict";var r=n(4),a=n.n(r),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=function(e){var t,n=e.icon,r=e.isEditable,o=e.cell,i=e.children,c=e.row,l=e.formatExtraData,u=e.rowIdx;return s.a.createElement("span",{className:a()({"am-table-icon-cell":!0,"am-table-icon-cell-editable":r})},s.a.createElement("span",{className:"fa-stack fa-lg am-table-icon-cell-stack"},s.a.createElement("i",{className:"fa fa-circle fa-stack-2x text-primary"}),s.a.createElement("i",{className:"fa fa-".concat(n," fa-stack-1x fa-inverse")}))," ",s.a.createElement("span",null,(t=i)?s.a.cloneElement(t,{cell:o,row:c,formatExtraData:l,rowIdx:u}):o))};l.defaultProps={isEditable:!1},l.propTypes={cell:i.a.oneOfType([i.a.array,i.a.object,i.a.string]),children:i.a.node,formatExtraData:i.a.objectOf(i.a.any),icon:i.a.string.isRequired,isEditable:i.a.bool,row:i.a.objectOf(i.a.any),rowIdx:i.a.number},t.a=l},1427:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(31);var r=n(16),a=n(1423);function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object(r.b)("common.form.delete");a.a.confirm({type:a.a.TYPE_DANGER,title:"".concat(Object(r.b)("common.form.confirm")," ").concat(n),message:e.message?e.message:Object(r.b)("console.common.confirmDeleteText",{type:e.type}),btnOKLabel:n,btnOKClass:"btn-danger",callback:function(e){e&&t&&t()}})}},1428:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=function(e){var t=e.children;return i.a.createElement("div",{className:"call-to-action-block"},t)};c.propTypes={children:a.a.node},t.a=c},1434:function(e,t,n){"use strict";var r=n(2);t.a=function(e,t){return function(n,a,o,i){return e(Object(r.get)(n,t),a,o,i)}}},1467:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return f}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return d}),n.d(t,"f",function(){return m}),n.d(t,"g",function(){return b}),n.d(t,"h",function(){return h}),n.d(t,"i",function(){return y});n(15),n(36),n(37),n(33),n(50),n(27),n(67),n(62),n(35),n(34);var r=n(162),a=n(370),o=n(372),i=n(371);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(e,t){var n="/realm-config/secrets/stores",o=t?"".concat(n,"/").concat(t):n;return new r.CRESTv2(Object(i.a)(o,e),{middleware:[a.a]})},l=function(e,t,n,r){return Object(o.a)(s(e,t).create(n,{id:r}))},u=function(e,t,n){return s(e,t).get(n)},f=function(e,t){return s(e,t).queryFilter()},p=function(e){return s(e).action("getCreatableTypes")},d=function(e,t){return s(e,t).action("getCreatableTypes")},m=function(e,t){return Promise.all([s(e,t).action("schema"),s(e,t).action("template")]).then(function(e){var t=c(e,2);return{schema:t[0],values:t[1]}})},b=function(e,t){return s(e,t).action("schema")},h=function(e,t){return Object(o.a)(Promise.all(t.map(function(t){return s(e,t._type._id).delete(t._id)})))},y=function(e,t,n,r){return Object(o.a)(s(e,t).update(n,r))}},1759:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(31),n(33),n(53),n(54),n(27),n(67),n(35),n(34),n(271);var r=n(10),a=n(2),o=n(16),i=n(0),c=n.n(i),s=n(1),l=n.n(s),u=n(1467),f=n(388),p=n(1402),d=(n(81),n(25)),m=n(160),b=n(1434),h=n(1425),y=n(1426),O=n(1418),g=n(1406);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=function(e){return l.a.createElement(s.Fragment,null,l.a.createElement(g.a,{title:Object(o.b)("console.secretStores.list.title")}),l.a.createElement(d.w,null,l.a.createElement(d.w.Body,null,l.a.createElement(O.a,v({},Object(a.omit)(e,"children"),{addButton:{title:Object(o.b)("console.secretStores.list.callToAction.button"),href:e.newHref},description:Object(o.b)("console.secretStores.list.callToAction.description"),onDelete:e.onDelete,onRowClick:e.onRowClick,title:Object(o.b)("console.secretStores.list.callToAction.title")}),l.a.createElement(m.TableHeaderColumn,{columnTitle:a.identity,dataField:"_id",dataFormat:Object(h.a)(l.a.createElement(y.a,{icon:"eye"})),dataSort:!0},Object(o.b)("console.secretStores.list.grid.0")),l.a.createElement(m.TableHeaderColumn,{dataField:"_type",dataFormat:Object(b.a)(a.identity,"name")},Object(o.b)("console.secretStores.list.grid.1"))))))};E.propTypes={newHref:c.a.string.isRequired,onDelete:c.a.func.isRequired,onRowClick:c.a.func.isRequired};var j=E,w=n(52),S=n(41),R=n(1427),P=n(1400),_=n(1401);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function T(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){I(o,r,a,i,c,"next",e)}function c(e){I(o,r,a,i,c,"throw",e)}i(void 0)})}}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){function t(e){var n,r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=D(t).call(this,e),n=!i||"object"!==C(i)&&"function"!=typeof i?N(r):i,x(N(n),"handleDelete",function(e){var t=n.props.router.params[0],r=n.props.stores.length===e.length?Object(o.b)("console.secretStores.confirmDeleteAll",{count:e.length}):Object(o.b)("console.secretStores.confirmDeleteSelected",{count:e.length});Object(R.a)({message:r},T(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.h)(t,e);case 2:Object(a.forEach)(e,function(e){n.props.removeInstance(e._compositeId)}),w.a.addMessage({message:Object(o.b)("config.messages.CommonMessages.changesSaved")});case 4:case"end":return r.stop()}},r)})))}),x(N(n),"handleEdit",function(e){var t=n.props.router.params[0],r=e._id,o=e._type._id;S.a.routeTo(S.a.configuration.routes.realmsSecretStoresEdit,{args:Object(a.map)([t,o,r],encodeURIComponent),trigger:!0})}),n.state={isFetching:!0},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,s["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=T(regeneratorRuntime.mark(function e(){var t,n,r,o,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.router.params[0],e.prev=1,e.next=4,Object(u.d)(t);case 4:return n=e.sent,r=n.result,o=Object(a.map)(r,function(e){return e._id}),e.next=9,Promise.all(Object(a.map)(o,function(e){return Object(u.c)(t,e)}));case 9:i=e.sent,c=Object(a.reduce)(i,function(e,t){var n=t.result;return e.concat(n)},[]),this.props.setInstances(c);case 12:return e.prev=12,this.setState({isFetching:!1}),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[1,,12,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.router.params[0],t=S.a.getLink(S.a.configuration.routes.realmsSecretStoresNew,[encodeURIComponent(e)]);return l.a.createElement(j,{isFetching:this.state.isFetching,items:this.props.stores,keyField:"_compositeId",newHref:"#".concat(t),onDelete:this.handleDelete,onRowClick:this.handleEdit})}}])&&k(n.prototype,r),i&&k(n,i),t}();A.propTypes={removeInstance:c.a.func.isRequired,router:_.a,setInstances:c.a.func.isRequired,stores:c.a.arrayOf(c.a.object).isRequired},A=Object(p.a)(A,function(e){return{stores:Object(f.e)(e.remote.config.realm.secretStores.instances.list)}},function(e){return{removeInstance:Object(r.a)(f.c,e),setInstances:Object(r.a)(f.d,e)}}),A=Object(P.a)(A);t.default=A}}]);
//# sourceMappingURL=40.c2bb4fbb3a.js.map