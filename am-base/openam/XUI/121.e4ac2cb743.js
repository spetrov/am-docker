(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{648:function(a,t,e){"use strict";e.r(t);var n=e(279),r=e(86),s=e(3),i=e(4),o=e(17),c=e(128),l=e(165),u=e(380),d=e(20);function g(a){s.a.setProperty("loggedUser",null),function(a){o.a.sendEvent(i.a.EVENT_CHANGE_VIEW,{args:a,route:d.a.configuration.routes.login})}(a)}var m=r.a.extend({template:"openam/SwitchRealmsTemplate",baseTemplate:"common/LoginBaseTemplate",data:{},events:{"click [data-switch-realms]":"onSwitchRealmsHandler"},partials:{"alerts/_Alert":"alerts/_Alert"},render:function(){var a=this;this.data.fragmentParamString=Object(c.a)(),this.data.args=[this.data.fragmentParamString],Object(l.a)()?Object(n.a)().then(function(){return a.parentRender()},function(){return g(a.data.args)}):g(this.data.args)},onSwitchRealmsHandler:function(a){var t=this;a.preventDefault();var e=function(){o.a.sendEvent(i.a.EVENT_CHANGE_VIEW,{args:t.data.args,route:d.a.configuration.routes.login})};Object(u.a)().then(e,e)}});t.default=new m}}]);
//# sourceMappingURL=121.e4ac2cb743.js.map