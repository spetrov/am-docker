(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1406:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),c=n(1),i=n.n(c),l=function(e){var t=e.children,n=e.icon,r=e.title,o=e.subtitle,c=o?"deep":"shallow",l=n?i.a.createElement("span",{className:"header-icon pull-left bg-primary"},i.a.createElement("i",{className:"fa fa-".concat(n)})):null,u=function(e){return e?Object(a.isString)(e)?i.a.createElement("h4",{className:"page-type"},e):e:null}(o);return i.a.createElement("header",{className:"page-header page-header-no-border clearfix"},l,i.a.createElement("div",{className:"button-group pull-right ".concat(c,"-page-header-button-group")},t),i.a.createElement("div",{className:"pull-left"},u,i.a.createElement("h1",{className:"wordwrap"},r)))};l.propTypes={children:o.a.node,icon:o.a.string,subtitle:o.a.node,title:o.a.string.isRequired},t.a=l},1468:function(e,t,n){"use strict";n(15),n(36);var a=n(0),r=n.n(a),o=n(1),c=n.n(o),i=function(e){var t=e.children,n=e.header,a=e.description,r=a?c.a.createElement("p",{className:"block-description"},a):void 0;return c.a.createElement("div",{className:"block clearfix"},c.a.createElement("h3",{className:"block-header"},n),r,t)};i.propTypes={children:r.a.oneOfType([r.a.arrayOf(r.a.node),r.a.node]).isRequired,description:r.a.string,header:r.a.string.isRequired},t.a=i},1469:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),c=n.n(o),i=function(e){var t=e.children;return c.a.createElement("p",{className:"page-description"},t)};i.propTypes={children:r.a.node},t.a=i},1470:function(e,t,n){"use strict";n(31),n(33),n(144),n(27),n(67),n(35),n(34);var a=n(2),r=n.n(a),o=n(122),c=n(23),i=n(38),l=n(214),u=n(142),s=new o.a("".concat(c.a.host).concat(c.a.context,"/json"));function f(e){return"core"===e?"":"/modules/".concat(e)}s.authentication={getAll:function(){return s.serviceCall({url:Object(i.a)("/global-config/authentication/modules?_action=getAllTypes",{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return r.a.sortBy(e.result,"name")})},schema:function(){var e=function(e){return s.serviceCall({url:Object(i.a)("/global-config/authentication?_action=".concat(e),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})};return Promise.all([e("schema"),e("template")]).then(function(e){return{schema:e[0],values:e[1]}})},get:function(e){var t=f(e);return Promise.all([s.serviceCall({url:Object(i.a)("/global-config/authentication".concat(t,"?_action=schema"),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new l.a(e)}),s.serviceCall({url:Object(i.a)("/global-config/authentication".concat(t),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return new u.a(e)})]).then(function(e){return{schema:e[0],values:e[1],name:e[1].raw._type.name}})},update:function(e,t){return s.serviceCall({url:Object(i.a)("/global-config/authentication".concat(f(e)),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:t})}},t.a=s},1641:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});n(15),n(36),n(37),n(33),n(50),n(144),n(53),n(54),n(27),n(35),n(34);var a=n(25),r=n(16),o=n(1),c=n.n(o),i=n(1468),l=n(1406),u=n(1469),s=n(1470);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,h(t).call(this,e))).state={items:[]},n}var n,f,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o["Component"]),n=t,(f=[{key:"componentDidMount",value:function(){var e=this;s.a.authentication.getAll().then(function(t){e.setState({items:t})})}},{key:"render",value:function(){var e=this.state.items.map(function(e){return c.a.createElement(a.r,{href:"#configure/authentication/".concat(e._id),key:e._id},e.name)});return c.a.createElement(a.n,null,c.a.createElement(l.a,{title:Object(r.b)("config.AppConfiguration.Navigation.links.configure.authentication")}),c.a.createElement(u.a,null,Object(r.b)("console.configuration.authentication.description")),c.a.createElement(a.w,null,c.a.createElement(a.w.Body,null,c.a.createElement(i.a,{description:Object(r.b)("console.configuration.authentication.description"),header:Object(r.b)("console.configuration.authentication.core.title")},c.a.createElement(a.q,null,c.a.createElement(a.r,{href:"#configure/authentication/core"},Object(r.b)("console.configuration.authentication.core.coreAttributes")))),c.a.createElement(i.a,{description:Object(r.b)("console.configuration.authentication.modules.title"),header:Object(r.b)("console.configuration.authentication.modules.title")},c.a.createElement(a.q,null,e)))))}}])&&p(n.prototype,f),b&&p(n,b),t}()}}]);
//# sourceMappingURL=109.1064ccc2e2.js.map