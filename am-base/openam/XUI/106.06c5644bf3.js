(window.webpackJsonp=window.webpackJsonp||[]).push([[106,76],{283:function(e,t,s){var n=s(5);e.exports=(n.default||n).template({1:function(e,t,s,n,a){var r=e.lambda,o=e.escapeExpression;return'        <option value="'+o(r(t,t))+'" selected="selected">'+o(r(t,t))+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,s,n,a){var r,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<select multiple="multiple">\n'+(null!=(r=o(s,"each").call(null!=t?t:e.nullContext||{},null!=(r=null!=t?o(t,"attributes"):t)?o(r,"permissions"):r,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:9,column:4},end:{line:11,column:13}}}))?r:"")+"</select>\n"},useData:!0})},418:function(e,t,s){"use strict";var n=s(2),a=s.n(n),r=s(550),o=s.n(r);o.a.HeaderCell.prototype.render=function(){this.$el.empty();var e,t=this.column;return e=o.a.callByNeed(t.sortable(),t,this.collection)?a()("<a>").text(t.get("label")).append("<b class='sort-caret'></b>"):document.createTextNode(t.get("label")),this.$el.append(e),this.$el.attr("data-field",t.get("name")),this.$el.addClass(t.get("direction")),this.delegateEvents(),this},t.a=o.a},419:function(e,t,s){"use strict";s(46),s(65),s(66),s(29),s(83),s(110),s(84),s(45),s(90),s(179),s(19),s(111),s(62),s(51),s(222),s(557);var n=s(0),a=s.n(n),r=s(2),o=s.n(r),l=s(418);l.a.Extension.ThemeableServerSideFilter=l.a.Extension.ServerSideFilter.extend({events:a.a.extend(l.a.Extension.ServerSideFilter.prototype.events,{"keyup input[type=search]":"keyupSearch"}),keyupSearch:function(e){e.preventDefault(),this.showClearButtonMaybe(e),this.minimumSearchChars&&o()(e.target).val().length>=this.minimumSearchChars&&this.search(e)},className:"form-group has-feedback",template:function(e){var t=e.placeholder?'placeholder="'.concat(e.placeholder,'"'):"",s=e.value?'value="'.concat(e.value,'"'):"";return'<input class="form-control input-sm" type="search" '.concat(t,' name="').concat(e.name,'" ').concat(s,"/>")+"<a class='fa fa-times form-control-feedback' data-backgrid-action='clear' role='button' href='#'></a>"}});l.a.Extension.ThemeableServerSideFilter;var i=s(61),c=s.n(i),u=s(417),d=s.n(u),h=s(70),m=s(20);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f={};f.DatetimeAgoCell=l.a.Cell.extend({className:"date-time-ago-cell",formatter:{fromRaw:function(e){return d()(e).fromNow()}},render:function(){return f.DatetimeAgoCell.__super__.render.apply(this),this.$el.attr("title",d()(this.model.get(this.column.get("name"))).format("Do MMMM YYYY, h:mm:ssa")),this}}),f.ArrayCell=l.a.Cell.extend({className:"array-formatter-cell",buildHtml:function(e){for(var t="<ul>",s=0;s<e.length;s++)a.a.isString(e[s])?t+="<li>".concat(e[s],"</li>"):t+="<li>".concat(JSON.stringify(e[s]),"</li>");return t+="</ul>"},render:function(){this.$el.empty();var e=this.model.get(this.column.attributes.name);return this.$el.append(this.buildHtml(e)),this.delegateEvents(),this}}),f.ObjectCell=l.a.Cell.extend({className:"object-formatter-cell",render:function(){this.$el.empty();var e,t=this.model.get(this.column.attributes.name),s='<dl class="dl-horizontal">';for(e in t)a.a.isString(t[e])?s+="<dt>".concat(e,"</dt><dd>").concat(t[e],"</dd>"):s+="<dt>".concat(e,"</dt><dd>").concat(JSON.stringify(t[e]),"</dd>");return s+="</dl>",this.$el.append(s),this.delegateEvents(),this}}),f.UniversalIdToUsername=l.a.Cell.extend({formatter:{fromRaw:function(e){return e.substring(3,e.indexOf(",ou=user"))}},render:function(){return f.UniversalIdToUsername.__super__.render.apply(this),this.$el.attr("title",this.model.get(this.column.get("name"))),this}}),f.ClickableRow=l.a.Row.extend({events:{click:"onClick",keyup:"onKeyup"},onKeyup:function(e){13===e.keyCode&&this.callback&&this.callback(e)},onClick:function(e){this.callback&&this.callback(e)}}),f.TemplateCell=l.a.Cell.extend({className:"template-cell",render:function(){var e=this.template(this.model);return this.$el.html(e),this.rendered&&this.rendered(),this.delegateEvents(),this}}),f.ClassHeaderCell=l.a.HeaderCell.extend({className:"",render:function(){return f.ClassHeaderCell.__super__.render.apply(this),this.delegateEvents(),this}}),f.UriExtCell=l.a.UriCell.extend({events:{click:"gotoUrl"},render:function(){this.$el.empty();var e=this.model.get(this.column.get("name")),t=this.formatter.fromRaw(e,this.model),s=a.a.isFunction(this.column.get("href"))?this.column.get("href")(e,t,this.model):this.column.get("href");return this.$el.append(o()("<a>",{href:s||e,title:this.title||t}).text(t)),s&&(this.$el.data("href",s),this.$el.prop("title",this.title||t)),this.delegateEvents(),this},gotoUrl:function(e){e.preventDefault();var t=o()(e.currentTarget).data("href");m.a.navigate(t,{trigger:!0})}}),f.FilterHeaderCell=l.a.HeaderCell.extend({className:"filter-header-cell enable-pointer",render:function(){var e=new l.a.Extension.ThemeableServerSideFilter({name:this.column.get("name"),placeholder:o.a.t("common.form.filter"),collection:this.collection});return this.addClassName&&this.$el.addClass(this.addClassName),this.collection.state.filters=this.collection.state.filters?this.collection.state.filters:[],this.collection.state.filters.push(e),f.FilterHeaderCell.__super__.render.apply(this),this.$el.prepend(e.render().el),this}}),f.queryFilter=function(e){void 0===e&&(e={});var t=[],s=e._queryFilter||[],n=e&&e.filterName&&"eq"===e.filterName?function(e,t){return"".concat(e,"+eq+").concat(encodeURIComponent('"*'.concat(t,'*"')))}:function(e,t){return"".concat(e,"+co+").concat(encodeURIComponent('"'.concat(t,'"')))};return a.a.each(this.state.filters,function(e){""!==e.query()&&t.push(n(e.name,e.query()))}),0===(t=t.concat(s)).length||t.join("+AND+")},f.parseState=function(e){return this.state.totalRecords||(this.state.totalRecords=e.remainingPagedResults+e.resultCount),this.state.totalPages||(this.state.totalPages=Math.ceil(this.state.totalRecords/this.state.pageSize)),this.state},f.pagedResultsOffset=function(){return(this.state.currentPage-1)*this.state.pageSize},f.sortKeys=function(){return 1===this.state.order?"-".concat(this.state.sortKey):this.state.sortKey},f.sync=function(e,t,s){var n=[],r=["_pageSize","_pagedResultsOffset","_sortKeys"];return"*"===s.data._queryId&&!0===s.data._queryFilter?r.push("_queryId"):r.push("_queryFilter"),a.a.forIn(s.data,function(e,t){a.a.includes(r,t)&&n.push("".concat(t,"=").concat(e))}),s.data=n.join("&"),s.processData=!1,s.beforeSend||(s.beforeSend=function(e){e.setRequestHeader("Accept-API-Version","protocol=1.0,resource=1.0")}),s.error=function(e){h.a.addMessage({type:h.a.TYPE_DANGER,response:e})},c.a.sync(e,t,s)},f.parseRecords=function(e){return e.result},f.getQueryParams=function(e){return e=e||{},{_sortKeys:this.sortKeys,_queryFilter:function(){return f.queryFilter.call(this,e)},pageSize:"_pageSize",_pagedResultsOffset:this.pagedResultsOffset}},f.doubleSortFix=function(e){var t=e.cid,s=e.collection.filter(function(e){return e.cid!==t});a.a.each(s,function(e){e.set("direction",null)})},f.getState=function(e){var t={pageSize:20,sortKey:"name"};return e&&"object"===p(e)&&a.a.extend(t,e),t};t.a=f},551:function(e,t,s){"use strict";s(29),s(89);var n=s(0),a=s.n(n),r=s(180),o=s(3),l=s(4),i=s(116),c=new r.a("".concat(l.a.host).concat(l.a.context,"/json"));c.getUmaConfig=function(){return c.serviceCall({url:Object(i.a)("/serverinfo/uma"),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return o.a.globalData.auth.uma=o.a.globalData.auth.uma||{},o.a.globalData.auth.uma.enabled=e.enabled,o.a.globalData.auth.uma.resharingMode=e.resharingMode,e})},c.unshareAllResources=function(){var e=encodeURIComponent(o.a.loggedUser.get("username"));return c.serviceCall({url:Object(i.a)("/users/".concat(e,"/oauth2/resources/sets?_action=revokeAll")),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})},c.approveRequest=function(e,t){return c.serviceCall({url:Object(i.a)("/users/".concat(encodeURIComponent(o.a.loggedUser.get("username")),"/uma/pendingrequests/").concat(e,"?_action=approve")),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify({scopes:t})})},c.denyRequest=function(e){return c.serviceCall({url:Object(i.a)("/users/".concat(encodeURIComponent(o.a.loggedUser.get("username")),"/uma/pendingrequests/").concat(e,"?_action=deny")),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})},c.labels={all:function(){return c.serviceCall({url:Object(i.a)("/users/".concat(encodeURIComponent(o.a.loggedUser.get("username")),"/oauth2/resources/labels?_queryFilter=true")),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}})},create:function(e,t){return c.serviceCall({url:Object(i.a)("/users/".concat(encodeURIComponent(o.a.loggedUser.get("username")),"/oauth2/resources/labels?_action=create")),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify({name:e,type:t})})},get:function(e){return c.serviceCall({url:Object(i.a)("/users/".concat(encodeURIComponent(o.a.loggedUser.get("username")),"/oauth2/resources/labels?_queryFilter=true")),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(t){return a.a.find(t.result,{_id:e})})},remove:function(e){return c.serviceCall({url:Object(i.a)("/users/".concat(encodeURIComponent(o.a.loggedUser.get("username")),"/oauth2/resources/labels/").concat(encodeURIComponent(e))),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"DELETE"})}},t.a=c},555:function(e,t,s){var n={"./af":421,"./af.js":421,"./ar":422,"./ar-dz":423,"./ar-dz.js":423,"./ar-kw":424,"./ar-kw.js":424,"./ar-ly":425,"./ar-ly.js":425,"./ar-ma":426,"./ar-ma.js":426,"./ar-sa":427,"./ar-sa.js":427,"./ar-tn":428,"./ar-tn.js":428,"./ar.js":422,"./az":429,"./az.js":429,"./be":430,"./be.js":430,"./bg":431,"./bg.js":431,"./bm":432,"./bm.js":432,"./bn":433,"./bn.js":433,"./bo":434,"./bo.js":434,"./br":435,"./br.js":435,"./bs":436,"./bs.js":436,"./ca":437,"./ca.js":437,"./cs":438,"./cs.js":438,"./cv":439,"./cv.js":439,"./cy":440,"./cy.js":440,"./da":441,"./da.js":441,"./de":442,"./de-at":443,"./de-at.js":443,"./de-ch":444,"./de-ch.js":444,"./de.js":442,"./dv":445,"./dv.js":445,"./el":446,"./el.js":446,"./en-SG":447,"./en-SG.js":447,"./en-au":448,"./en-au.js":448,"./en-ca":449,"./en-ca.js":449,"./en-gb":450,"./en-gb.js":450,"./en-ie":451,"./en-ie.js":451,"./en-il":452,"./en-il.js":452,"./en-nz":453,"./en-nz.js":453,"./eo":454,"./eo.js":454,"./es":455,"./es-do":456,"./es-do.js":456,"./es-us":457,"./es-us.js":457,"./es.js":455,"./et":458,"./et.js":458,"./eu":459,"./eu.js":459,"./fa":460,"./fa.js":460,"./fi":461,"./fi.js":461,"./fo":462,"./fo.js":462,"./fr":463,"./fr-ca":464,"./fr-ca.js":464,"./fr-ch":465,"./fr-ch.js":465,"./fr.js":463,"./fy":466,"./fy.js":466,"./ga":467,"./ga.js":467,"./gd":468,"./gd.js":468,"./gl":469,"./gl.js":469,"./gom-latn":470,"./gom-latn.js":470,"./gu":471,"./gu.js":471,"./he":472,"./he.js":472,"./hi":473,"./hi.js":473,"./hr":474,"./hr.js":474,"./hu":475,"./hu.js":475,"./hy-am":476,"./hy-am.js":476,"./id":477,"./id.js":477,"./is":478,"./is.js":478,"./it":479,"./it-ch":480,"./it-ch.js":480,"./it.js":479,"./ja":481,"./ja.js":481,"./jv":482,"./jv.js":482,"./ka":483,"./ka.js":483,"./kk":484,"./kk.js":484,"./km":485,"./km.js":485,"./kn":486,"./kn.js":486,"./ko":487,"./ko.js":487,"./ku":488,"./ku.js":488,"./ky":489,"./ky.js":489,"./lb":490,"./lb.js":490,"./lo":491,"./lo.js":491,"./lt":492,"./lt.js":492,"./lv":493,"./lv.js":493,"./me":494,"./me.js":494,"./mi":495,"./mi.js":495,"./mk":496,"./mk.js":496,"./ml":497,"./ml.js":497,"./mn":498,"./mn.js":498,"./mr":499,"./mr.js":499,"./ms":500,"./ms-my":501,"./ms-my.js":501,"./ms.js":500,"./mt":502,"./mt.js":502,"./my":503,"./my.js":503,"./nb":504,"./nb.js":504,"./ne":505,"./ne.js":505,"./nl":506,"./nl-be":507,"./nl-be.js":507,"./nl.js":506,"./nn":508,"./nn.js":508,"./pa-in":509,"./pa-in.js":509,"./pl":510,"./pl.js":510,"./pt":511,"./pt-br":512,"./pt-br.js":512,"./pt.js":511,"./ro":513,"./ro.js":513,"./ru":514,"./ru.js":514,"./sd":515,"./sd.js":515,"./se":516,"./se.js":516,"./si":517,"./si.js":517,"./sk":518,"./sk.js":518,"./sl":519,"./sl.js":519,"./sq":520,"./sq.js":520,"./sr":521,"./sr-cyrl":522,"./sr-cyrl.js":522,"./sr.js":521,"./ss":523,"./ss.js":523,"./sv":524,"./sv.js":524,"./sw":525,"./sw.js":525,"./ta":526,"./ta.js":526,"./te":527,"./te.js":527,"./tet":528,"./tet.js":528,"./tg":529,"./tg.js":529,"./th":530,"./th.js":530,"./tl-ph":531,"./tl-ph.js":531,"./tlh":532,"./tlh.js":532,"./tr":533,"./tr.js":533,"./tzl":534,"./tzl.js":534,"./tzm":535,"./tzm-latn":536,"./tzm-latn.js":536,"./tzm.js":535,"./ug-cn":537,"./ug-cn.js":537,"./uk":538,"./uk.js":538,"./ur":539,"./ur.js":539,"./uz":540,"./uz-latn":541,"./uz-latn.js":541,"./uz.js":540,"./vi":542,"./vi.js":542,"./x-pseudo":543,"./x-pseudo.js":543,"./yo":544,"./yo.js":544,"./zh-cn":545,"./zh-cn.js":545,"./zh-hk":546,"./zh-hk.js":546,"./zh-tw":547,"./zh-tw.js":547};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=555},577:function(e,t,s){"use strict";s(89),s(558);var n=s(419),a=s(283),r=s.n(a);t.a=n.a.TemplateCell.extend({className:"permissions-cell",template:r.a,onChange:function(){},rendered:function(){this.$el.find("select").selectize({dropdownParent:"body",onChange:this.onChange.bind(this)})}})},655:function(e,t,s){"use strict";s.r(t);s(29),s(89);var n=s(2),a=s.n(n),r=s(61),o=s.n(r),l=s(418),i=s(86),c=s(3),u=s(20),d=s(4),h=s(116),m=s(419),p=s(551),f=s(577),j=i.a.extend({template:"user/uma/views/request/EditRequestTemplate",events:{"click button[data-permission=allow]":"allowRequest","click button[data-permission=deny]":"denyRequest"},allowRequest:function(){p.a.approveRequest(this.model.get("_id"),this.model.get("permissions")).then(function(){u.a.routeTo(u.a.configuration.routes.umaRequestList,{args:[],trigger:!0})})},denyRequest:function(){p.a.denyRequest(this.model.get("_id")).then(function(){u.a.routeTo(u.a.configuration.routes.umaRequestList,{args:[],trigger:!0})})},render:function(e,t){var s=this,n=e[0],r=o.a.Collection.extend({url:"".concat(d.a.context,"/json").concat(Object(h.a)("/users/".concat(c.a.loggedUser.get("username"),"/uma/pendingrequests/").concat(n)))}),i=[{name:"user",label:a.a.t("uma.requests.grid.header.0"),cell:"string",editable:!1},{name:"resource",label:a.a.t("uma.requests.grid.header.1"),cell:"string",editable:!1},{name:"when",label:a.a.t("uma.requests.grid.header.2"),cell:m.a.DatetimeAgoCell,editable:!1},{name:"permissions",label:a.a.t("uma.requests.grid.header.3"),headerCell:m.a.ClassHeaderCell.extend({className:"col-xs-7 col-md-6"}),cell:f.a.extend({onChange:function(e){this.model.set("permissions",e,{silent:!0});var t=null!==e;this.$el.parent().find("[data-permission=allow]").prop("disabled",!t)}}),editable:!1}];this.data.requests=new r;var u=new l.a.Grid({columns:i,className:"backgrid table",collection:this.data.requests,emptyText:a.a.t("console.common.noResults")});this.parentRender(function(){s.$el.find(".table-container").append(u.render().el),s.data.requests.fetch({reset:!0,processData:!1}).then(function(){s.model=s.data.requests.findWhere({_id:n}),t&&t()},function(){s.$el.find("button[data-permission]").prop("disabled",!0)})})}});t.default=new j}}]);
//# sourceMappingURL=106.06c5644bf3.js.map