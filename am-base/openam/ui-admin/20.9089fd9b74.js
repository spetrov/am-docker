(window.webpackJsonp=window.webpackJsonp||[]).push([[20,156,171],{1234:function(e,t,n){var r=n(158);e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,i=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="subnav-container">\n    <div class="container">\n        <strong><i class="fa fa-angle-left text-muted"></i> <a href="'+i("function"==typeof(o=null!=(o=s(n,"hash")||(null!=t?s(t,"hash"):t))?o:c)?o.call(l,{name:"hash",hash:{},data:a,loc:{start:{line:10,column:69},end:{line:10,column:77}}}):o)+'">'+i("function"==typeof(o=null!=(o=s(n,"title")||(null!=t?s(t,"title"):t))?o:c)?o.call(l,{name:"title",hash:{},data:a,loc:{start:{line:10,column:79},end:{line:10,column:88}}}):o)+"</a></strong>\n    </div>\n</div>\n"},useData:!0})},1269:function(e,t,n){var r=n(158);e.exports=(r.default||r).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var o,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,i=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<nav id="backlink"></nav>\n<div class="container">\n'+(null!=(o=e.invokePartial(s(r,"headers/_Title"),t,{name:"headers/_Title",hash:{title:null!=t?s(t,"title"):t},data:a,indent:"    ",helpers:n,partials:r,decorators:e.decorators}))?o:"")+'\n    <div class="panel multiple-panels panel-content">\n        <div class="panel panel-default">\n            <div class="panel-body">\n                <div class="form-horizontal">\n                    <div class="form-group">\n                        <label class="col-sm-4 control-label" for="serverUrl">'+i((s(n,"t")||t&&s(t,"t")||c).call(l,"console.servers.new.serverUrl",{name:"t",hash:{},data:a,loc:{start:{line:17,column:78},end:{line:17,column:115}}}))+'</label>\n                        <div class="col-sm-6">\n                            <input data-server-url type="text" id="serverUrl" class="form-control" required name="serverUrl"\n                                 placeholder="'+i((s(n,"t")||t&&s(t,"t")||c).call(l,"common.form.validation.required",{name:"t",hash:{},data:a,loc:{start:{line:20,column:46},end:{line:20,column:85}}}))+'">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="panel-footer clearfix">\n            <div class="pull-right">\n                <a class="btn btn-default" href="'+i((s(n,"routeTo")||t&&s(t,"routeTo")||c).call(l,"listServers",{name:"routeTo",hash:{},data:a,loc:{start:{line:29,column:49},end:{line:29,column:74}}}))+'">'+i((s(n,"t")||t&&s(t,"t")||c).call(l,"common.form.cancel",{name:"t",hash:{},data:a,loc:{start:{line:29,column:76},end:{line:29,column:102}}}))+'</a>\n                <button data-create class="btn btn-primary" type="button" disabled>'+i((s(n,"t")||t&&s(t,"t")||c).call(l,null!=t?s(t,"buttonTitle"):t,{name:"t",hash:{},data:a,loc:{start:{line:30,column:83},end:{line:30,column:100}}}))+"</button>\n            </div>\n        </div>\n    </div>\n</div>\n"},usePartial:!0,useData:!0})},1430:function(e,t,n){"use strict";n(159),n(82);var r=n(2),a=n.n(r),o=n(14),l=n.n(o),c=n(100),i=n.n(c),s=n(1234),u=n.n(s),d=n(88);function f(e,t){return a.a.take(e,t+1).join("/")}t.a=i.a.View.extend({el:"#backlink",render:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=d.a.getCurrentFragment().split("/"),n=t[e],r=a.a.startCase("".concat(n)),o={title:l.a.t("console.navigation.".concat(n,".title"),{defaultValue:r}),hash:"#".concat(f(t,e))};this.$el.html(u()(o))}})},1444:function(e,t,n){"use strict";n(15),n(36),n(37),n(31),n(33),n(50),n(27),n(67),n(62),n(35),n(34);var r=n(2),a=n.n(r),o=n(122),l=n(23),c=n(38),i=n(214),s=n(142);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=new o.a("".concat(l.a.host).concat(l.a.context,"/json")),f=function(e){return"serverDefaults"===e},v=function(e){return f(e)?"server-default":e},p=function(e,t){return d.serviceCall({url:Object(c.a)("/global-config/servers/".concat(e,"/properties/").concat(t,"?_action=schema"),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new i.a(e)})},h=function(e,t){return d.serviceCall({url:Object(c.a)("/global-config/servers/".concat(e,"/properties/").concat(t),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){var n;return"advanced"===t&&(e=a.a.sortBy((n=e,a.a.map(n,function(e,t){return{key:t,value:e}})),function(e){return e.key})),new s.a(e)})},m=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"server-default",o=t;return"advanced"===e&&(n=t.advanced,o=a.a.reduce(n,function(e,t){return e[t.key]=t.value,e},{})),d.serviceCall({url:Object(c.a)("/global-config/servers/".concat(r,"/properties/").concat(e),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:JSON.stringify(o)})};d.servers={clone:function(e,t){return d.serviceCall({url:Object(c.a)("/global-config/servers/".concat(e,"?_action=clone"),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify({clonedUrl:t})})},get:function(e,t){return Promise.all([p(e,t),h(e,t)]).then(function(e){return{schema:e[0],values:e[1]}})},getWithDefaults:function(e,t){var n=v(e),r=[d.servers.get(n,t)];return f(e)||"directoryConfiguration"===t||r.push(h("server-default",t)),Promise.all(r).then(function(e){var t=u(e,2),n=t[0],r=t[1],a=void 0===r?{}:r;return{schema:n.schema,values:n.values,defaultValues:a}})},getUrl:function(e){return d.serviceCall({url:Object(c.a)("/global-config/servers/".concat(e),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return e.url},function(){})},getAll:function(){return d.serviceCall({url:Object(c.a)("/global-config/servers?_queryFilter=true",{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return a.a.reject(e.result,{_id:"server-default"})})},remove:function(e){return d.serviceCall({url:Object(c.a)("/global-config/servers/".concat(e),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"DELETE"})},create:function(e){return d.serviceCall({url:Object(c.a)("/global-config/servers?_action=create",{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify(e)})},update:function(e,t,n){return m(e,t,v(n))},ADVANCED_SECTION:"advanced",DEFAULT_SERVER:"server-default"},t.a=d},1653:function(e,t,n){"use strict";n.r(t);n(15),n(36),n(37),n(143),n(63),n(33),n(27),n(62),n(35),n(82),n(779),n(34);var r=n(14),a=n.n(r),o=n(123),l=n(1430),c=n(52),i=n(1269),s=n.n(i),u=n(41),d=n(1444),f=n(88);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(e){return e.val().trim()},h=function(e){c.a.addMessage({response:e,type:c.a.TYPE_DANGER})},m=function(e){u.a.routeTo(u.a.configuration.routes.editServerGeneral,{args:[e],trigger:!0})},g=o.a.extend({template:s.a,events:{"click [data-create]":"createServer","keyup [data-server-url]":"toggleCreateButton"},render:function(e){var t=v(e,1)[0];this.data.id=t;var n=f.a.getCurrentFragment().split("/");return this.isCloneView=-1!==n.indexOf("clone"),this.isCloneView?(this.data.title="console.servers.clone.title",this.data.buttonTitle="common.form.clone"):(this.data.title="console.servers.new.title",this.data.buttonTitle="common.form.create"),this.parentRender(function(){(new l.a).render()}),this},createServer:function(){var e=p(this.$el.find("[data-server-url]"));this.isCloneView?d.a.servers.clone(this.data.id,e).then(function(e){m(e.clonedId)},h):d.a.servers.create({url:e}).then(function(e){m(e._id)},h)},toggleCreateButton:function(e){var t=""!==p(a()(e.currentTarget));this.$el.find("[data-create]").prop("disabled",!t)}});t.default=new g}}]);
//# sourceMappingURL=20.9089fd9b74.js.map