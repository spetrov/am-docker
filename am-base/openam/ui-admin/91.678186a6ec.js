(window.webpackJsonp=window.webpackJsonp||[]).push([[91,152,154,251,252],{1243:function(e,t,a){var n=a(158);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,a,n,o){var l=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,r=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="pull-right btn-group">\n    <button name="edit" type="button" class="btn btn-link" title="'+r((s(a,"t")||t&&s(t,"t")||i).call(l,"common.form.edit",{name:"t",hash:{},data:o,loc:{start:{line:9,column:66},end:{line:9,column:90}}}))+'" data-edit-item>\n        <i class="fa fa-pencil"></i>\n    </button>\n    <button name="delete" type="button" class="btn btn-link" title="'+r((s(a,"t")||t&&s(t,"t")||i).call(l,"common.form.delete",{name:"t",hash:{},data:o,loc:{start:{line:12,column:68},end:{line:12,column:94}}}))+'" data-delete-item>\n        <i class="fa fa-close"></i>\n    </button>\n</div>\n'},useData:!0})},1261:function(e,t,a){var n=a(158);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,a,n,o){var l,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="cell-model-icon">\n    <span><i class="fa"></i></span>\n</div>\n<div class="cell-model-name">\n    '+e.escapeExpression("function"==typeof(l=null!=(l=i(a,"displayName")||(null!=t?i(t,"displayName"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"displayName",hash:{},data:o,loc:{start:{line:12,column:4},end:{line:12,column:19}}}):l)+"\n</div>\n"},useData:!0})},1345:function(e,t,a){var n=a(158);e.exports=(n.default||n).template({1:function(e,t,a,n,o){var l,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(l=i(a,"if").call(null!=t?t:e.nullContext||{},null!=t?i(t,"hasPolicySets"):t,{name:"if",hash:{},fn:e.program(2,o,0),inverse:e.program(4,o,0),data:o,loc:{start:{line:11,column:4},end:{line:33,column:11}}}))?l:""},2:function(e,t,a,n,o){return'    <div class="btn-toolbar page-toolbar" role="toolbar" aria-label="toolbar" data-grid-toolbar></div>\n    <div class="panel panel-default">\n        <div class="panel-body">\n            <div class="table-container"></div>\n        </div>\n    </div>\n'},4:function(e,t,a,n,o){var l=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,r=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <div class="panel panel-default">\n        <div class="panel-body">\n            <div class="call-to-action-block">\n                <h3>'+r((s(a,"t")||t&&s(t,"t")||i).call(l,"console.authorization.policySets.list.noPolicySets",{name:"t",hash:{},data:o,loc:{start:{line:22,column:20},end:{line:22,column:78}}}))+'</h3>\n                <button type="button" data-add-entity class="btn btn-primary">\n                    <i class="fa fa-plus"></i> '+r((s(a,"t")||t&&s(t,"t")||i).call(l,"console.authorization.policySets.list.addPolicySets",{name:"t",hash:{},data:o,loc:{start:{line:24,column:47},end:{line:24,column:106}}}))+'\n                </button>\n                <button type="button" data-import-policies class="btn btn-primary">\n                    <i class="fa fa-download"></i> '+r((s(a,"t")||t&&s(t,"t")||i).call(l,"console.authorization.policySets.list.importPolicySets",{name:"t",hash:{},data:o,loc:{start:{line:27,column:51},end:{line:27,column:113}}}))+'\n                </button>\n                <input type="file" name="upload" class="hidden"/>\n            </div>\n        </div>\n    </div>\n'},6:function(e,t,a,n,o){var l=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,r=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="panel panel-default">\n    <div class="panel-body">\n        <div class="call-to-action-block">\n            <h3>'+r((s(a,"t")||t&&s(t,"t")||i).call(l,"console.authorization.policySets.list.noResourceTypesMessage",{name:"t",hash:{},data:o,loc:{start:{line:38,column:16},end:{line:38,column:84}}}))+'</h3>\n            <button type="button" data-add-resource class="btn btn-primary">\n                <i class="fa fa-plus"></i> '+r((s(a,"t")||t&&s(t,"t")||i).call(l,"console.authorization.resourceTypes.list.addNewResourceType",{name:"t",hash:{},data:o,loc:{start:{line:40,column:43},end:{line:40,column:110}}}))+"\n            </button>\n        </div>\n    </div>\n</div>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,a,n,o){var l,i=null!=t?t:e.nullContext||{},r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return(null!=(l=e.invokePartial(r(n,"headers/_Title"),t,{name:"headers/_Title",hash:{title:"console.authorization.common.policySets"},data:o,helpers:a,partials:n,decorators:e.decorators}))?l:"")+'<p class="page-description">'+e.escapeExpression((r(a,"t")||t&&r(t,"t")||e.hooks.helperMissing).call(i,"console.authorization.policySets.list.description",{name:"t",hash:{},data:o,loc:{start:{line:9,column:28},end:{line:9,column:85}}}))+"</p>\n"+(null!=(l=r(a,"if").call(i,null!=t?r(t,"hasResourceTypes"):t,{name:"if",hash:{},fn:e.program(1,o,0),inverse:e.program(6,o,0),data:o,loc:{start:{line:10,column:0},end:{line:45,column:7}}}))?l:"")},usePartial:!0,useData:!0})},1346:function(e,t,a){var n=a(158);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,a,n,o){var l=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,r=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<button type="button" class="btn btn-primary pull-left" data-add-entity>\n    <i class="fa fa-plus"></i> '+r((s(a,"t")||t&&s(t,"t")||i).call(l,"console.authorization.policySets.list.addNew",{name:"t",hash:{},data:o,loc:{start:{line:9,column:31},end:{line:9,column:83}}}))+'\n</button>\n\n<a role="button" class="btn btn-default pull-right" data-export-policies>\n    <i class="fa fa-upload"></i> '+r((s(a,"t")||t&&s(t,"t")||i).call(l,"console.authorization.policySets.list.exportPolicySets",{name:"t",hash:{},data:o,loc:{start:{line:13,column:33},end:{line:13,column:95}}}))+'\n</a>\n\n<button type="button" class="btn btn-default pull-right" data-import-policies>\n    <i class="fa fa-download"></i> '+r((s(a,"t")||t&&s(t,"t")||i).call(l,"console.authorization.policySets.list.importPolicySets",{name:"t",hash:{},data:o,loc:{start:{line:17,column:35},end:{line:17,column:97}}}))+'\n</button>\n<input type="file" name="upload" class="hidden"/>\n'},useData:!0})},1463:function(e,t,a){"use strict";a(31);var n=a(122),o=a(1461),l=a(23),i=a(38),r=a(1453),s=new n.a("".concat(l.a.host).concat(l.a.context,"/json")),c=function(){var e=o.a.getCurrentRealm();return"/"===e?"":r.a.encodeRealm(e)};s.getApplicationType=function(e){return s.serviceCall({url:Object(i.a)("/applicationtypes/".concat(e),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},s.getDecisionCombiners=function(){return s.serviceCall({url:Object(i.a)("/decisioncombiners/?_queryId=&_fields=title",{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},s.getEnvironmentConditions=function(){return s.serviceCall({url:Object(i.a)("/conditiontypes?_queryId=&_fields=title,logical,config",{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},s.getSubjectConditions=function(){return s.serviceCall({url:Object(i.a)("/subjecttypes?_queryId=&_fields=title,logical,config",{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},s.getAllUserAttributes=function(){return s.serviceCall({url:Object(i.a)("/subjectattributes?_queryFilter=true",{realm:c()}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},s.queryIdentities=function(e,t){var a=encodeURIComponent('_id co "'.concat(t,'" or uid co "').concat(t,'" or cn co "').concat(t,'" or mail co "').concat(t,'"'));return s.serviceCall({url:Object(i.a)("/".concat(e,"?_queryFilter=").concat(a),{realm:c()}),headers:{"Accept-API-Version":"protocol=1.0,resource=4.1"}})},s.getUniversalId=function(e,t){return s.serviceCall({url:Object(i.a)("/".concat(t,"/").concat(e,"?_fields=universalid"),{realm:c()}),headers:{"Cache-Control":"no-cache","Accept-API-Version":"protocol=1.0,resource=2.0"}})},s.getDataByType=function(e){return s.serviceCall({url:Object(i.a)("/".concat(e,"?_queryFilter=true"),{realm:c()}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},s.getScriptById=function(e){return s.serviceCall({url:Object(i.a)("/scripts/".concat(e),{realm:c()}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},s.getAllRealms=function(){return s.serviceCall({url:Object(i.a)("/realms?_queryFilter=true",{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},s.importPolicies=function(e){return s.serviceCall({serviceUrl:"".concat(l.a.host).concat(l.a.context),url:Object(i.a)("/xacml".concat(c(),"/policies"),{realm:!1}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:e})},s.listResourceTypes=function(){return s.serviceCall({url:Object(i.a)("/resourcetypes?_queryFilter=name+eq+".concat(encodeURIComponent('"^(?!Delegation Service$).*"')),{realm:c()}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},t.a=s},1487:function(e,t,a){"use strict";a(143),a(50);var n=a(16),o=a(2),l=a.n(o),i=a(123),r=a(1465),s=a(1429),c=a(52),u=a(41);t.a=i.a.extend({toolbarTemplateID:"[data-grid-toolbar]",initialize:function(){i.a.prototype.initialize.call(this)},onDeleteClick:function(e,t,a,n){e.preventDefault(),s.a.showConfirmationBeforeDeleting(t,l.a.bind(this.deleteRecord,this,a,n))},deleteRecord:function(e,t){var a=this;a.data.items.get(e).destroy({success:function(){c.a.addMessage({message:Object(n.b)("config.messages.CommonMessages.changesSaved")}),t&&t()},wait:!0}).always(function(){a.data.items.fetch({reset:!0})})},editRecord:function(e,t,a){u.a.routeTo(a,{args:l.a.map([this.realmPath,t],encodeURIComponent),trigger:!0})},bindDefaultHandlers:function(){this.data.items.on("backgrid:sort",r.a.doubleSortFix)},renderToolbar:function(){var e=this.toolbarTemplate(this.data);this.$el.find(this.toolbarTemplateID).html(e)}})},1488:function(e,t,a){"use strict";a(63),a(144),a(779);var n=a(2),o=a.n(n),l=a(100),i=a.n(l),r=a(1445),s=a(1438);t.a=i.a.Model.extend({idAttribute:"name",urlRoot:s.a.substitute("__api__/applications"),defaults:function(){return{name:null,displayName:null,description:"",resourceTypeUuids:[],realm:""}},parse:function(e){return o.a.isEmpty(e.displayName)?this.displayName=e.name:this.displayName=e.displayName,e},validate:function(e){return""===e.name.trim()?"errorNoId":0===e.name.indexOf("#")?"errorCantStartWithHash":o.a.isEmpty(e.resourceTypeUuids)?"applicationErrorNoResourceTypes":void 0},sync:function(e,t,a){return(a=a||{}).beforeSend=function(e){e.setRequestHeader("Accept-API-Version","protocol=1.0,resource=2.0")},a.error=r.a.errorHandler,null===t.id&&(e="create",a.url="".concat(this.urlRoot(),"/?_action=create")),i.a.Model.prototype.sync.call(this,e,t,a)}})},1668:function(e,t,a){"use strict";a.r(t);a(31),a(143),a(63),a(368),a(1486),a(1496);var n=a(2),o=a.n(n),l=a(14),i=a.n(l),r=a(100),s=a.n(r),c=a(1487),u=a(1460),d=a(1465),p=a(23),m=a(43),h=a(1261),f=a.n(h),y=a(1463),b=a(1488),v=a(1345),g=a.n(v),P=a(1346),S=a.n(P),C=a(1453),T=a(41),x=a(1243),I=a.n(x),A=a(1438);t.default=c.a.extend({template:g.a,toolbarTemplate:S.a,events:{"click [data-add-entity]":"addNewPolicySet","click [data-import-policies]":"startImportPolicies","click [data-export-policies]":"exportPolicies","click [data-add-resource]":"addResource","change [name=upload]":"readImportFile"},render:function(e,t){this.realmPath=e[0],y.a.listResourceTypes().then(o.a.bind(function(e){var a=this;if(e.resultCount<1)this.data.hasResourceTypes=!1,this.parentRender(this.renderToolbar);else{var n=s.a.PageableCollection.extend({url:A.a.substitute("__api__/applications"),model:b.a,state:d.a.getState(),queryParams:d.a.getQueryParams({filterName:"eq",_queryFilter:["name+eq+".concat(encodeURIComponent('"^(?!sunAMDelegationService$).*"'))]}),parseState:d.a.parseState,parseRecords:d.a.parseRecords,sync:function(e,t,a){return a.beforeSend=function(e){e.setRequestHeader("Accept-API-Version","protocol=1.0,resource=2.0")},d.a.sync(e,t,a)}});this.data.selectedItems=[],this.data.hasResourceTypes=!0,this.data.items=new n,this.data.items.fetch({reset:!0}).then(function(e){e.resultCount>0?(a.data.hasPolicySets=!0,a.renderTable(t)):(a.data.hasPolicySets=!1,a.parentRender(a.renderToolbar))},function(){T.a.routeTo(T.a.configuration.routes.realms,{args:[],trigger:!0})})}},this))},renderTable:function(e){var t=this,a=this,n=d.a.ClickableRow.extend({callback:function(e){i()(e.target).parents().hasClass("fr-col-btn-2")||a.editRecord(e,this.model.id,T.a.configuration.routes.realmsPolicySetEdit)}}),o=[{name:"displayName",label:i.a.t("console.authorization.policySets.list.grid.0"),cell:d.a.TemplateCell.extend({iconClass:"fa-folder",template:f.a,rendered:function(){this.$el.find("i.fa").addClass(this.iconClass)}}),headerCell:d.a.FilterHeaderCell,sortType:"toggle",editable:!1},{name:"",cell:d.a.TemplateCell.extend({className:"fr-col-btn-2",template:I.a,events:{"click [data-edit-item]":"editItem","click [data-delete-item]":"deleteItem"},editItem:function(e){a.editRecord(e,this.model.id,T.a.configuration.routes.realmsPolicySetEdit)},deleteItem:function(e){a.onDeleteClick(e,{type:i.a.t("console.authorization.common.policySet")},this.model.id)}}),sortable:!1,editable:!1}],l=new u.a.Grid({columns:o,row:n,collection:this.data.items,className:"backgrid table table-hover",emptyText:i.a.t("console.common.noResults")}),r=new u.a.Extension.ThemeablePaginator({collection:this.data.items,windowSize:3});this.bindDefaultHandlers(),this.parentRender(function(){t.renderToolbar(),t.$el.find(".table-container").append(l.render().el),t.$el.find(".panel-body").append(r.render().el),e&&e()})},startImportPolicies:function(){this.$el.find("[name=upload]").trigger("click")},importPolicies:function(e){y.a.importPolicies(e.target.result).then(function(){m.a.sendEvent(p.a.EVENT_DISPLAY_MESSAGE_REQUEST,"policiesUploaded")},function(e){var t=e?e.responseText:"",a=i()(i.a.parseXML(t)).find("message"),n=a.length?a[0].textContent:"",o=n?n.indexOf(" application not found in realm"):-1;o>-1?m.a.sendEvent(p.a.EVENT_DISPLAY_MESSAGE_REQUEST,{key:"policiesImportFailed",applicationName:n.slice(0,o)}):m.a.sendEvent(p.a.EVENT_DISPLAY_MESSAGE_REQUEST,"policiesUploadFailed")})},readImportFile:function(){var e=this.$el.find("[name=upload]")[0].files[0],t=new FileReader;t.onload=this.importPolicies,e&&t.readAsText(e,"UTF-8")},exportPolicies:function(){var e="/"===this.realmPath?"":C.a.encodeRealm(this.realmPath);this.$el.find("[data-export-policies]").attr("href","".concat(p.a.host).concat(p.a.context,"/xacml").concat(e,"/policies"))},addResource:function(){T.a.routeTo(T.a.configuration.routes.realmsResourceTypeNew,{args:[encodeURIComponent(this.realmPath)],trigger:!0})},addNewPolicySet:function(){T.a.routeTo(T.a.configuration.routes.realmsPolicySetNew,{args:[encodeURIComponent(this.realmPath)],trigger:!0})}})}}]);
//# sourceMappingURL=91.678186a6ec.js.map