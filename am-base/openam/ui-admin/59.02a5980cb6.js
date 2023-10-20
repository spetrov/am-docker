(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1400:function(e,t,n){"use strict";n(50),n(144);var r=n(2),a=n.n(r),o=n(1),c=n.n(o),i=n(41),l=n(88);t.a=function(e){var t=function(t){var n=i.a.currentRoute,r=i.a.extractParameters(n,l.a.getCurrentFragment()),o=i.a.applyDefaultParameters(n,r),s={params:a.a.map(o,function(e){return e?decodeURIComponent(e):""})};return c.a.createElement(e,a.a.extend({},t,{router:s}))};return t.displayName="withRouter(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),t.WrappedComponent=e,t}},1401:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=a.a.shape({params:a.a.array.isRequired});t.a=o},1402:function(e,t,n){"use strict";n(144),n(81);var r=n(1424),a=n(1),o=n.n(a),c=n(64);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var l=r.a.apply(void 0,n)(e),s=function(e){return o.a.createElement(l,i({},e,{store:c.a}))};return s.displayName="connectWithStore(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),s.WrappedComponent=e,s}},1406:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),c=n(1),i=n.n(c),l=function(e){var t=e.children,n=e.icon,a=e.title,o=e.subtitle,c=o?"deep":"shallow",l=n?i.a.createElement("span",{className:"header-icon pull-left bg-primary"},i.a.createElement("i",{className:"fa fa-".concat(n)})):null,s=function(e){return e?Object(r.isString)(e)?i.a.createElement("h4",{className:"page-type"},e):e:null}(o);return i.a.createElement("header",{className:"page-header page-header-no-border clearfix"},l,i.a.createElement("div",{className:"button-group pull-right ".concat(c,"-page-header-button-group")},t),i.a.createElement("div",{className:"pull-left"},s,i.a.createElement("h1",{className:"wordwrap"},a)))};l.propTypes={children:o.a.node,icon:o.a.string,subtitle:o.a.node,title:o.a.string.isRequired},t.a=l},1407:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(16);t.a=function(){return a.a.createElement("p",{className:"loading text-muted"},a.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-2x fa-fw"}),a.a.createElement("span",null,Object(o.b)("console.common.loading")))}},1410:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(29),c=n.n(o),i=(n(15),n(36),n(37),n(63),n(33),n(81),n(18),n(27),n(67),n(777),n(62),n(35),n(34),n(2)),l=n(0),s=n.n(l),u=n(16),f=n(778),p=n.n(f),m=(n(159),n(25)),d=function(e){var t=e.children,n=e.disabled,r=e.inProgress,o=e.names,c=e.objectName,i=e.onCancel,l=e.onConfirm,s=e.onExited,f=e.show,p=r?a.a.createElement(m.u.Header,{className:"text-center"},a.a.createElement("span",{className:"fa-stack fa-lg fa-2x text-danger"},a.a.createElement("i",{className:"fa fa-circle fa-stack-2x"}),a.a.createElement("i",{className:"fa fa-refresh fa-spin fa-stack-1x fa-inverse"})),a.a.createElement(m.u.Title,null,Object(u.b)("components.dialogs.delete.titleInProgress"))):a.a.createElement(a.a.Fragment,null,a.a.createElement(m.u.Header,{className:"text-center",closeButton:!n,onHide:i},a.a.createElement("span",{className:"fa-stack fa-lg fa-2x text-danger"},a.a.createElement("i",{className:"fa fa-circle fa-stack-2x"}),a.a.createElement("i",{className:"fa fa-trash fa-stack-1x fa-inverse"})),a.a.createElement(m.u.Title,null,Object(u.b)("components.dialogs.delete.title",{objectName:c}))),a.a.createElement(m.u.Body,null,a.a.createElement("p",{className:"text-center wordwrap",dangerouslySetInnerHTML:{__html:Object(u.b)("components.dialogs.delete.message_interval",{count:o.length,names:o.join(", "),objectName:c,postProcess:"interval"})}}),t),a.a.createElement(m.u.Footer,null,a.a.createElement(m.y,null,a.a.createElement(m.g,{md:6},a.a.createElement(m.c,{block:!0,className:"fr-btn-secondary",disabled:n,onClick:i},Object(u.b)("components.dialogs.delete.no",{objectName:c}))),a.a.createElement(m.g,{md:6},a.a.createElement(m.c,{block:!0,bsStyle:"danger",disabled:n,onClick:l},Object(u.b)("components.dialogs.delete.yes",{objectName:c}))))));return a.a.createElement(m.u,{animation:!0,backdrop:"static",dialogClassName:"dialog-danger",onExited:s,show:f},p)};d.propTypes={children:s.a.node,disabled:s.a.bool,inProgress:s.a.bool,names:s.a.arrayOf(s.a.string).isRequired,objectName:s.a.string.isRequired,onCancel:s.a.func,onConfirm:s.a.func,onExited:s.a.func,show:s.a.bool};var b=d;function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=p()("0.5s"),O=function(e){var t=e.children,n=e.names,o=e.onCancel,c=e.onConfirm,l=e.onExited,s=e.objectName,f=e.show,p=h(Object(r.useState)(!1),2),m=p[0],d=p[1],O=h(Object(r.useState)(!1),2),v=O[0],g=O[1],j=Object(r.useCallback)(function(){d(!0);var e=Object(i.delay)(function(){return g(!0)},y);c().finally(function(){clearTimeout(e),d(!1)})},[c,d,g]),E=Object(r.useCallback)(function(){g(!1),l()},[l,g]);return a.a.createElement(b,{disabled:m,inProgress:v,names:n,objectName:Object(u.b)("objects.".concat(s),{count:n.length}),onCancel:o,onConfirm:j,onExited:E,show:f},t)};O.defaultProps={onExited:i.noop},O.propTypes={children:s.a.node,names:s.a.arrayOf(s.a.string).isRequired,objectName:s.a.string.isRequired,onCancel:s.a.func,onConfirm:s.a.func.isRequired,onExited:s.a.func,show:s.a.bool};var v=O;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=function(e){var t=e.onCancel,n=e.onConfirm,o=E(e,["onCancel","onConfirm"]),c=j(Object(r.useState)(!0),2),i=c[0],l=c[1],s=Object(r.useCallback)(function(){l(!1),t()},[t,l]),u=Object(r.useCallback)(function(){return Promise.resolve(n()).finally(function(){return l(!1)})},[n,l]);return a.a.createElement(v,g({onCancel:s,onConfirm:u,show:i},o))};w.defaultProps={onCancel:i.noop},w.propTypes={onCancel:s.a.func,onConfirm:s.a.func.isRequired};var C=w;n.d(t,"b",function(){return k}),n.d(t,"a",function(){return v});var k=function(e){var t=e.children,n=e.names,r=e.objectName,o=e.onCancel,i=e.onConfirm,l=document.getElementById("dialog");c.a.render(a.a.createElement(C,{names:n,objectName:r,onCancel:o,onConfirm:i,onExited:function(){return c.a.unmountComponentAtNode(l)}},t),l)}},1417:function(e,t,n){"use strict";n(15),n(63),n(81),n(18);var r=n(25),a=n(2),o=n(0),c=n.n(o),i=n(1),l=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=function(e){var t=e.children,n=e.href,o=e.title,c=e.onClick;if(t){var i=Object(a.map)(t,function(e){var t=e.title,n=u(e,["title"]);return l.a.createElement(r.t,s({key:t},n),t)});return l.a.createElement(r.d,null,l.a.createElement(r.j,{bsStyle:"primary",disabled:Object(a.isEmpty)(i),id:Object(a.camelCase)(o),title:o},i))}return l.a.createElement(r.d,null,l.a.createElement(r.c,{bsStyle:"primary",href:n,onClick:c},l.a.createElement("i",{className:"fa fa-plus"})," ",o))};f.propTypes={children:c.a.arrayOf(c.a.shape({onClick:c.a.func,href:c.a.string,title:c.a.string.isRequired})),href:c.a.string,onClick:c.a.func,title:c.a.string.isRequired},t.a=f},1418:function(e,t,n){"use strict";n(15),n(36),n(37),n(17),n(33),n(1422),n(81),n(21),n(22),n(53),n(18),n(54),n(27),n(35),n(19),n(34);var r=n(2),a=n(160),o=n(0),c=n.n(o),i=n(1),l=n.n(i),s=n(25),u=n(16),f=n(1417),p=function(e){var t=e.additionalButtons,n=e.addButton,r=e.isDeleteDisabled,a=e.onDelete,o=e.numberSelected,c=o?"(".concat(o,")"):"";return l.a.createElement(s.e,{className:"page-toolbar"},l.a.createElement(f.a,{href:n.href,onClick:n.handleOnClick,title:n.title},n.menuItems),l.a.createElement(s.c,{disabled:r,onClick:a},l.a.createElement("i",{className:"fa fa-close"})," ",Object(u.b)("common.form.delete")," ",c),t)};p.propTypes={addButton:c.a.shape({handleOnClick:c.a.func,href:c.a.string,menuItems:c.a.arrayOf(c.a.shape({href:c.a.string.isRequired,title:c.a.string.isRequired})),title:c.a.string.isRequired}).isRequired,additionalButtons:c.a.node,isDeleteDisabled:c.a.bool.isRequired,numberSelected:c.a.number.isRequired,onDelete:c.a.func.isRequired};var m=p,d=n(1428),b=function(e){var t=e.addButton,n=e.description,r=e.title;return l.a.createElement(d.a,null,l.a.createElement("p",{className:"text-primary"},l.a.createElement("i",{className:"fa fa-list-alt fa-4x"})),l.a.createElement("h2",null,r),l.a.createElement("p",{className:"panel-description text-muted"},n),l.a.createElement(f.a,{href:t.href,onClick:t.handleOnClick,title:t.title},t.menuItems))};b.propTypes={addButton:c.a.shape({handleOnClick:c.a.func,href:c.a.string,menuItems:c.a.arrayOf(c.a.shape({href:c.a.string.isRequired,title:c.a.string.isRequired})),title:c.a.string.isRequired}).isRequired,description:c.a.string.isRequired,title:c.a.string.isRequired};var h=b,y=n(1407),O=n(369);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=w(t).call(this),e=!r||"object"!==v(r)&&"function"!=typeof r?C(n):r,P(C(e),"handleDelete",function(){e.props.onDelete(e.state.selectedItems)}),P(C(e),"handleSelectedChange",function(t){e.setState({selectedItems:t})}),e.state={selectedItems:[]},e}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,i["Component"]),n=t,(a=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){!Object(r.isEqual)(Object(r.map)(this.props.items,this.props.keyField).sort(),Object(r.map)(e.items,this.props.keyField).sort())&&this.setState({selectedItems:[]})}},{key:"render",value:function(){var e,t=Object(r.omit)(this.props,"children");if(this.props.isFetching)e=l.a.createElement(y.a,null);else if(Object(r.isEmpty)(this.props.items))e=l.a.createElement(h,t);else{var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){P(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{data:this.props.items,onSelectedChange:this.handleSelectedChange,selectedItems:this.state.selectedItems}),a=l.a.createElement(m,g({},t,{isDeleteDisabled:!this.state.selectedItems.length,numberSelected:this.state.selectedItems.length,onDelete:this.handleDelete}));e=l.a.createElement("div",null,a,l.a.createElement(O.a,n,this.props.children))}return e}}])&&E(n.prototype,a),o&&E(n,o),t}();S.defaultProps={keyField:"_id"},S.propTypes={children:c.a.oneOfType([c.a.arrayOf(c.a.shape({type:c.a.oneOf([a.TableHeaderColumn]).isRequired})),c.a.shape({type:c.a.oneOf([a.TableHeaderColumn]).isRequired})]).isRequired,isFetching:c.a.bool.isRequired,items:c.a.arrayOf(c.a.object).isRequired,keyField:c.a.string,onDelete:c.a.func.isRequired};t.a=S},1422:function(e,t,n){"use strict";var r=n(39),a=n(215),o=n(89),c=n(44),i=n(216),l=[].sort,s=[1,2,3],u=c(function(){s.sort(void 0)}),f=c(function(){s.sort(null)}),p=i("sort");r({target:"Array",proto:!0,forced:u||!f||p},{sort:function(e){return void 0===e?l.call(o(this)):l.call(o(this),a(e))}})},1425:function(e,t,n){"use strict";var r=n(1),a=n.n(r);t.a=function(e){return function(t,n,r,o){return a.a.cloneElement(e,{cell:t,row:n,formatExtraData:r,rowIdx:o})}}},1426:function(e,t,n){"use strict";var r=n(4),a=n.n(r),o=n(0),c=n.n(o),i=n(1),l=n.n(i),s=function(e){var t,n=e.icon,r=e.isEditable,o=e.cell,c=e.children,i=e.row,s=e.formatExtraData,u=e.rowIdx;return l.a.createElement("span",{className:a()({"am-table-icon-cell":!0,"am-table-icon-cell-editable":r})},l.a.createElement("span",{className:"fa-stack fa-lg am-table-icon-cell-stack"},l.a.createElement("i",{className:"fa fa-circle fa-stack-2x text-primary"}),l.a.createElement("i",{className:"fa fa-".concat(n," fa-stack-1x fa-inverse")}))," ",l.a.createElement("span",null,(t=c)?l.a.cloneElement(t,{cell:o,row:i,formatExtraData:s,rowIdx:u}):o))};s.defaultProps={isEditable:!1},s.propTypes={cell:c.a.oneOfType([c.a.array,c.a.object,c.a.string]),children:c.a.node,formatExtraData:c.a.objectOf(c.a.any),icon:c.a.string.isRequired,isEditable:c.a.bool,row:c.a.objectOf(c.a.any),rowIdx:c.a.number},t.a=s},1428:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),c=n.n(o),i=function(e){var t=e.children;return c.a.createElement("div",{className:"call-to-action-block"},t)};i.propTypes={children:a.a.node},t.a=i},1485:function(e,t,n){"use strict";n.d(t,"a",function(){return b}),n.d(t,"e",function(){return h}),n.d(t,"b",function(){return y}),n.d(t,"c",function(){return O}),n.d(t,"d",function(){return v});n(15),n(36),n(37),n(31),n(17),n(33),n(21),n(22),n(18),n(27),n(67),n(62),n(35),n(19),n(34);var r=n(2),a=n(122),o=n(23),c=n(38);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=new a.a("".concat(o.a.host).concat(o.a.context,"/json")),p="/realm-config/webhooks",m={"Accept-API-Version":"protocol=2.0,resource=1.0"};function d(e){var t;return s({},(t=e,Object(r.omitBy)(t,function(e,t){return Object(r.startsWith)(t,"_")})))}function b(e,t){return f.serviceCall({url:Object(c.a)("".concat(p,"/").concat(t),{realm:e}),type:"PUT",headers:s({},m,{"If-None-Match":"*"}),data:"{}",errorsHandlers:{incorrectRevisionError:{status:412}}})}function h(e,t,n){return f.serviceCall({url:Object(c.a)("".concat(p,"/").concat(n),{realm:e}),type:"PUT",headers:m,data:JSON.stringify(d(t))})}function y(e){return f.serviceCall({url:Object(c.a)("".concat(p,"?_queryFilter=true"),{realm:e}),headers:m,suppressSpinner:!0,type:"GET"})}function O(e,t){var n=function(e){return f.serviceCall({url:Object(c.a)("".concat(p,"/?_action=schema"),{realm:e}),headers:m,type:"POST"})}(e),r=function(e,t){return f.serviceCall({url:Object(c.a)("".concat(p,"/").concat(t,"?forUI=true"),{realm:e}),headers:m})}(e,t);return Promise.all([n,r]).then(function(e){var t=i(e,2);return{schema:t[0],data:t[1]}})}function v(e,t){var n=Object(r.map)(t,function(t){return f.serviceCall({url:Object(c.a)("".concat(p,"/").concat(t),{realm:e}),headers:m,suppressSpinner:!0,type:"DELETE"})});return Promise.all(n)}},1734:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(33),n(50),n(53),n(54),n(27),n(67),n(35),n(34),n(271);var r=n(10),a=n(2),o=n(0),c=n.n(o),i=n(1),l=n.n(i),s=n(1485),u=n(397),f=n(1410),p=n(1402),m=(n(81),n(25)),d=n(16),b=n(160),h=n(1425),y=n(1426),O=n(1418),v=n(1406);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j=function(e){return l.a.createElement("div",null,l.a.createElement(v.a,{title:Object(d.b)("console.authentication.webhooks.list.title")}),l.a.createElement(m.w,null,l.a.createElement(m.w.Body,null,l.a.createElement(O.a,g({},Object(a.omit)(e,"children"),{addButton:{href:e.newHref,title:Object(d.b)("console.authentication.webhooks.list.callToAction.button")},description:Object(d.b)("console.authentication.webhooks.list.callToAction.description"),title:Object(d.b)("console.authentication.webhooks.list.callToAction.title")}),l.a.createElement(b.TableHeaderColumn,{columnTitle:a.identity,dataField:"_id",dataFormat:Object(h.a)(l.a.createElement(y.a,{icon:"anchor"})),dataSort:!0},Object(d.b)("console.authentication.webhooks.list.grid.0"))))))};j.propTypes={newHref:c.a.string.isRequired};var E=j,w=n(52),C=n(41),k=n(1400),P=n(1401);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=R(t).call(this),e=!r||"object"!==S(r)&&"function"!=typeof r?T(n):r,q(T(e),"handleDelete",function(t){var n=t.map(function(e){return e._id});Object(f.b)({names:n,objectName:"webhook",onConfirm:function(){var t,r=(t=regeneratorRuntime.mark(function t(){var r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.props.router.params[0],t.next=3,Object(s.d)(r,n);case 3:o=t.sent,Object(a.forEach)(o,function(t){var n=t._id;return e.props.removeInstance(n)});case 5:case"end":return t.stop()}},t)}),function(){var e=this,n=arguments;return new Promise(function(r,a){var o=t.apply(e,n);function c(e){N(o,r,a,c,i,"next",e)}function i(e){N(o,r,a,c,i,"throw",e)}c(void 0)})});return function(){return r.apply(this,arguments)}}()})}),q(T(e),"handleEdit",function(t){var n=t._id,r=e.props.router.params[0];C.a.routeTo(C.a.configuration.routes.realmsAuthenticationWebhooksEdit,{args:Object(a.map)([r,n],encodeURIComponent),trigger:!0})}),e.state={isFetching:!0},e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,i["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props.router.params[0];Object(s.b)(t).then(function(t){e.setState({isFetching:!1}),e.props.setInstance(t.result)},function(t){e.setState({isFetching:!1}),w.a.addMessage({response:t,type:w.a.TYPE_DANGER})})}},{key:"render",value:function(){var e=this.props.router.params[0],t=C.a.getLink(C.a.configuration.routes.realmsAuthenticationWebhooksNew,[encodeURIComponent(e)]);return l.a.createElement(E,{isFetching:this.state.isFetching,items:this.props.webhooks,newHref:"#".concat(t),onDelete:this.handleDelete,onRowClick:this.handleEdit})}}])&&x(n.prototype,r),o&&x(n,o),t}();D.propTypes={removeInstance:c.a.func.isRequired,router:P.a,setInstance:c.a.func.isRequired,webhooks:c.a.arrayOf(c.a.object)},D=Object(p.a)(D,function(e){return{webhooks:Object(a.values)(e.remote.config.realm.authentication.webhooks.instances)}},function(e){return{removeInstance:Object(r.a)(u.c,e),setInstance:Object(r.a)(u.d,e)}}),D=Object(k.a)(D);t.default=D}}]);
//# sourceMappingURL=59.02a5980cb6.js.map