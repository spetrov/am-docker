(window.webpackJsonp=window.webpackJsonp||[]).push([[121,151,260,261],{1248:function(e,n,a){var t=a(158);e.exports=(t.default||t).template({1:function(e,n,a,t,l){var o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <span class="text-success"><i class="fa fa-check-circle"></i> '+e.escapeExpression((o(a,"t")||n&&o(n,"t")||e.hooks.helperMissing).call(null!=n?n:e.nullContext||{},"common.form.active",{name:"t",hash:{},data:l,loc:{start:{line:9,column:66},end:{line:9,column:92}}}))+"</span>\n"},3:function(e,n,a,t,l){var o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <span class="text-warning"><i class="fa fa-ban"></i> '+e.escapeExpression((o(a,"t")||n&&o(n,"t")||e.hooks.helperMissing).call(null!=n?n:e.nullContext||{},"common.form.inactive",{name:"t",hash:{},data:l,loc:{start:{line:11,column:57},end:{line:11,column:85}}}))+"</span>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,a,t,l){var o,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"\x3c!--\n  Copyright 2016-2019 ForgeRock AS. All Rights Reserved\n \n  Use of this code requires a commercial software license with ForgeRock AS.\n  or with one of its affiliates. All use shall be exclusively subject\n  to such license between the licensee and ForgeRock AS.\n--\x3e\n"+(null!=(o=s(a,"if").call(null!=n?n:e.nullContext||{},null!=n?s(n,"active"):n,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l,loc:{start:{line:8,column:0},end:{line:12,column:7}}}))?o:"")},useData:!0})},1354:function(e,n,a){var t=a(158);e.exports=(t.default||t).template({1:function(e,n,a,t,l){var o,s=null!=n?n:e.nullContext||{},r=e.hooks.helperMissing,i=e.escapeExpression,c=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'        <div class="col-sm-6 col-md-3">\n            <div data-panel-card class="panel-default panel am-panel-card">\n                <a data-task-route="'+i("function"==typeof(o=null!=(o=c(a,"route")||(null!=n?c(n,"route"):n))?o:r)?o.call(s,{name:"route",hash:{},data:l,loc:{start:{line:18,column:36},end:{line:18,column:45}}}):o)+'">\n                    <div class="card-body">\n                        <div class="card-icon-circle card-icon-circle-sm bg-primary">\n                            <i class="fa '+i("function"==typeof(o=null!=(o=c(a,"icon")||(null!=n?c(n,"icon"):n))?o:r)?o.call(s,{name:"icon",hash:{},data:l,loc:{start:{line:21,column:41},end:{line:21,column:49}}}):o)+'"></i>\n                        </div>\n                        <h3 class="card-name card-name-sm am-text-lines-three text-primary hidden-md">'+i("function"==typeof(o=null!=(o=c(a,"name")||(null!=n?c(n,"name"):n))?o:r)?o.call(s,{name:"name",hash:{},data:l,loc:{start:{line:23,column:102},end:{line:23,column:110}}}):o)+'</h3>\n                        <h3 class="card-name card-name-sm am-text-lines-four text-primary visible-md-block">'+i("function"==typeof(o=null!=(o=c(a,"name")||(null!=n?c(n,"name"):n))?o:r)?o.call(s,{name:"name",hash:{},data:l,loc:{start:{line:24,column:108},end:{line:24,column:116}}}):o)+"</h3>\n                    </div>\n                </a>\n            </div>\n        </div>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,a,t,l){var o,s=null!=n?n:e.nullContext||{},r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<div class="panel-heading">\n    <h4 class="panel-title">\n        '+e.escapeExpression((r(a,"t")||n&&r(n,"t")||e.hooks.helperMissing).call(s,"console.dashboard.quickStart",{name:"t",hash:{},data:l,loc:{start:{line:10,column:8},end:{line:10,column:44}}}))+'\n    </h4>\n</div>\n<div class="panel-body">\n    <div class="grid-list">\n'+(null!=(o=r(a,"each").call(s,null!=n?r(n,"tasks"):n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:15,column:4},end:{line:29,column:13}}}))?o:"")+"    </div>\n</div>\n"},useData:!0})},1355:function(e,n,a){var t=a(158);e.exports=(t.default||t).template({1:function(e,n,a,t,l){var o,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'        <li class="text-muted">\n            <i class="fa fa-globe"></i>\n'+(null!=(o=s(a,"each").call(null!=n?n:e.nullContext||{},null!=(o=null!=n?s(n,"realm"):n)?s(o,"aliases"):o,{name:"each",hash:{},fn:e.program(2,l,0),inverse:e.noop,data:l,loc:{start:{line:22,column:12},end:{line:24,column:21}}}))?o:"")+"        </li>\n"},2:function(e,n,a,t,l){var o,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"                "+e.escapeExpression(e.lambda(n,n))+(null!=(o=s(a,"unless").call(null!=n?n:e.nullContext||{},l&&s(l,"last"),{name:"unless",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l,loc:{start:{line:23,column:24},end:{line:23,column:54}}}))?o:"")+"\n"},3:function(e,n,a,t,l){return", "},compiler:[8,">= 4.3.0"],main:function(e,n,a,t,l){var o,s=null!=n?n:e.nullContext||{},r=e.hooks.helperMissing,i=e.escapeExpression,c=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return(null!=(o=e.invokePartial(c(t,"headers/_Title"),n,{name:"headers/_Title",hash:{title:"console.dashboard.title"},data:l,helpers:a,partials:t,decorators:e.decorators}))?o:"")+'\n<div class="raised-page-header-button-group button-group pull-right">\n    <a href="'+i((c(a,"routeTo")||n&&c(n,"routeTo")||r).call(s,"realmEdit",null!=n?c(n,"realmPath"):n,{name:"routeTo",hash:{},data:l,loc:{start:{line:11,column:13},end:{line:11,column:46}}}))+'" class="btn btn-primary">'+i((c(a,"t")||n&&c(n,"t")||r).call(s,"console.dashboard.realmProperties",{name:"t",hash:{},data:l,loc:{start:{line:11,column:72},end:{line:11,column:113}}}))+'</a>\n</div>\n\n<div class="page-description">\n    <ul class="list-inline fr-list-inline-piped ellipsis">\n        <li>\n'+(null!=(o=e.invokePartial(c(t,"util/_Status"),n,{name:"util/_Status",hash:{active:null!=(o=null!=n?c(n,"realm"):n)?c(o,"active"):o},data:l,indent:"            ",helpers:a,partials:t,decorators:e.decorators}))?o:"")+"        </li>\n"+(null!=(o=c(a,"if").call(s,null!=(o=null!=n?c(n,"realm"):n)?c(o,"aliases"):o,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:19,column:8},end:{line:26,column:15}}}))?o:"")+'    </ul>\n</div>\n\n<div data-common-tasks-container id="commonTasks" class="panel panel-default"></div>\n'},usePartial:!0,useData:!0})},1730:function(e,n,a){"use strict";a.r(n);a(33),a(27),a(34);var t=a(16),l=a(384),o=a(123),s=a(14),r=a.n(s),i=a(1354),c=a.n(i),u=a(41),d=a(2),p=o.a.extend({template:c.a,data:{},element:"[data-common-tasks-container]",events:{"click [data-panel-card] a":"cardClick"},render:function(e,n){this.realmPath=e[0],this.parentRender(n)},cardClick:function(e){var n=r()(e.currentTarget).data();e.preventDefault(),u.a.routeTo(u.a.configuration.routes[n.taskRoute],{args:Object(d.map)([this.realmPath,location],encodeURIComponent),trigger:!0})}}),m=a(1355),h=a.n(m),f=a(52),v=a(1248),b=a.n(v);n.default=o.a.extend({template:h.a,partials:{"util/_Status":b.a},render:function(e,n){var a=this,o=Object(l.b)(e[0]);this.data.realmPath=e[0],o.then(function(l){var o=[{route:"realmsAuthenticationTrees",name:Object(t.b)("console.dashboard.tasks.authenticationTrees"),icon:"fa-tree"},{route:"realmsServices",name:Object(t.b)("console.dashboard.tasks.services"),icon:"fa-plug"},{route:"realmsApplicationsOAuth2Clients",name:Object(t.b)("console.dashboard.tasks.oauth2Clients"),icon:"fa-list-alt"},{route:"realmsApplicationsFederationEntityProviders",name:Object(t.b)("console.dashboard.tasks.saml"),icon:"fa-list-alt"},{route:"realmsApplicationsAgentsIdentityGateway",name:Object(t.b)("console.dashboard.tasks.identityGateway"),icon:"fa-list-alt"},{route:"realmsApplicationsAgentsJava",name:Object(t.b)("console.dashboard.tasks.agentsJava"),icon:"fa-list-alt"},{route:"realmsApplicationsAgentsWeb",name:Object(t.b)("console.dashboard.tasks.agentsWeb"),icon:"fa-list-alt"},{route:"realmsSts",name:Object(t.b)("console.dashboard.tasks.sts"),icon:"fa-credit-card"}];a.data.realm={status:l.values.active?Object(t.b)("common.form.active"):Object(t.b)("common.form.inactive"),active:l.values.active,aliases:l.values.aliases},a.parentRender(function(){var a=new p;a.data.tasks=o,a.render(e,n)},n)},function(e,n){f.a.addMessage({type:f.a.TYPE_DANGER,response:e||n})})}})}}]);
//# sourceMappingURL=121.b8de052adc.js.map