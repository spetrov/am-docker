(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1459:function(e,r,t){"use strict";t(31),t(33),t(50),t(373),t(144),t(27),t(67),t(35),t(34),t(374);var c=t(2),n=t.n(c),a=t(122),o=t(23),i=t(38),s=t(214),l=t(142),u=new a.a("".concat(o.a.host).concat(o.a.context,"/json")),p=function(e,r){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new s.a(e)})},m=function(e,r,t){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"/").concat(t,"?_action=schema"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new s.a(e)})};u.instance={getAll:function(e){return u.serviceCall({url:Object(i.a)("/realm-config/services?_queryFilter=true",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},get:function(e,r){return Promise.all([p(e,r),u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})]).then(function(e){return{name:e[1]._type.name,schema:e[0],values:new l.a(e[1])}})},getInitialState:function(e,r){return Promise.all([p(e,r),u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new l.a(e)})]).then(function(e){return{schema:e[0],values:e[1]}})},remove:function(e,r){var t=n.a.map([].concat(r),function(r){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"DELETE",suppressSpinner:!0})});return Promise.all(t)},update:function(e,r,t){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:t}).then(function(e){return new l.a(e)})},create:function(e,r,t){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"?_action=create"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:new l.a(t).toJSON()})}},u.type={getCreatables:function(e){return u.serviceCall({url:Object(i.a)("/realm-config/services?_action=getCreatableTypes&forUI=true",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})},subSchema:{type:{getAll:function(e,r){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"?_action=getAllTypes"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})},getCreatables:function(e,r){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"?_action=getCreatableTypes"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}},instance:{getAll:function(e,r){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"?_action=nextdescendents"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})},get:function(e,r,t,c){return Promise.all([m(e,r,t),u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"/").concat(t,"/").concat(c),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return new l.a(e)})]).then(function(e){return{schema:e[0],values:e[1]}})},getInitialState:function(e,r,t){return Promise.all([m(e,r,t),function(r,t){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"/").concat(t,"?_action=template"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new l.a(e)})}(r,t)]).then(function(e){return{schema:e[0],values:e[1]}})},remove:function(e,r,t,c){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"/").concat(t,"/").concat(c),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"DELETE",suppressSpinner:!0})},update:function(e,r,t,c,n){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"/").concat(t,"/").concat(c),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:n})},create:function(e,r,t,c){return u.serviceCall({url:Object(i.a)("/realm-config/services/".concat(r,"/").concat(t,"?_action=create"),{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify(c)})}}}};r.a=u},1666:function(e,r,t){"use strict";t.r(r);t(15),t(36),t(37),t(33),t(50),t(27),t(62),t(35),t(34);var c=t(2),n=t.n(c),a=t(14),o=t.n(a),i=t(123),s=t(1525),l=t(1256),u=t.n(l),p=t(41),m=t(1459);function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],c=!0,n=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(c=(o=i.next()).done)&&(t.push(o.value),!r||t.length!==r);c=!0);}catch(e){n=!0,a=e}finally{try{c||null==i.return||i.return()}finally{if(n)throw a}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=i.a.extend({render:function(e){var r=this,t=f(e,3),c=t[0],a=t[1],i=t[2],l=new s.a({data:{realmPath:c,serviceInstance:a,subSchemaType:i,title:o.a.t("console.services.subSchema.new.title",{subSchema:i})},listRoute:p.a.configuration.routes.realmsServiceEdit,listRouteArgs:n.a.map([c,a],encodeURIComponent),editRoute:p.a.configuration.routes.realmsServiceSubSchemaEdit,editRouteArgs:function(e){return n.a.map([c,a,i,e],encodeURIComponent)},template:u.a,getInitialState:function(){return m.a.type.subSchema.instance.getInitialState(c,a,i)},createInstance:function(e){return m.a.type.subSchema.instance.create(c,a,i,e)}});this.parentRender(function(){r.$el.append(l.render().$el)})}})}}]);
//# sourceMappingURL=132.caaeecf328.js.map