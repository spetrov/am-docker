(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{550:function(e,t,i){var n,r,s;
/*!
  backgrid 0.3.8
  http://github.com/cloudflare/backgrid

  Copyright (c) 2017 Cloudflare, Inc. and contributors <jwong@cloudflare.com>
  Licensed under the MIT license.
*/
/*!
  backgrid 0.3.8
  http://github.com/cloudflare/backgrid

  Copyright (c) 2017 Cloudflare, Inc. and contributors <jwong@cloudflare.com>
  Licensed under the MIT license.
*/
s=this,n=[i(221),i(61)],void 0===(r=function(e,t){return s.Backgrid=function(e,t){"use strict";var i="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";if(!String.prototype.trim||i.trim()){i="["+i+"]";var n=new RegExp("^"+i+i+"*"),r=new RegExp(i+i+"*$");String.prototype.trim=function(){if(null==this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(n,"").replace(r,"")}}function s(e,t,i){var n=t-(e+"").length;n=n<0?0:n;for(var r="",s=0;s<n;s++)r+=i;return r+e}var o=t.$,l={Extension:{},resolveNameToClass:function(t,i){if(e.isString(t)){var n=e.map(t.split("-"),function(e){return e.slice(0,1).toUpperCase()+e.slice(1)}).join("")+i,r=l[n]||l.Extension[n];if(e.isUndefined(r))throw new ReferenceError("Class '"+n+"' not found");return r}return t},callByNeed:function(){var t=arguments[0];if(!e.isFunction(t))return t;var i=arguments[1],n=[].slice.call(arguments,2);return t.apply(i,n+""?n:[])}};e.extend(l,t.Events);var a=l.Command=function(t){e.extend(this,{altKey:!!t.altKey,char:t.char,charCode:t.charCode,ctrlKey:!!t.ctrlKey,key:t.key,keyCode:t.keyCode,locale:t.locale,location:t.location,metaKey:!!t.metaKey,repeat:!!t.repeat,shiftKey:!!t.shiftKey,which:t.which})};e.extend(a.prototype,{moveUp:function(){return 38==this.keyCode},moveDown:function(){return 40===this.keyCode},moveLeft:function(){return this.shiftKey&&9===this.keyCode},moveRight:function(){return!this.shiftKey&&9===this.keyCode},save:function(){return 13===this.keyCode},cancel:function(){return 27===this.keyCode},passThru:function(){return!(this.moveUp()||this.moveDown()||this.moveLeft()||this.moveRight()||this.save()||this.cancel())}});var h=l.CellFormatter=function(){};e.extend(h.prototype,{fromRaw:function(e,t){return e},toRaw:function(e,t){return e}});var c=l.NumberFormatter=function(t){if(e.extend(this,this.defaults,t||{}),this.decimals<0||this.decimals>20)throw new RangeError("decimals must be between 0 and 20")};c.prototype=new h,e.extend(c.prototype,{defaults:{decimals:2,decimalSeparator:".",orderSeparator:","},HUMANIZED_NUM_RE:/(\d)(?=(?:\d{3})+$)/g,fromRaw:function(t,i){if(e.isNull(t)||e.isUndefined(t))return"";var n=(t=parseFloat(t).toFixed(~~this.decimals)).split("."),r=n[0],s=n[1]?(this.decimalSeparator||".")+n[1]:"";return r.replace(this.HUMANIZED_NUM_RE,"$1"+this.orderSeparator)+s},toRaw:function(t,i){if(""===(t=t.trim()))return null;for(var n="",r=t.split(this.orderSeparator),s=0;s<r.length;s++)n+=r[s];var o=n.split(this.decimalSeparator);n="";for(var s=0;s<o.length;s++)n=n+o[s]+".";"."===n[n.length-1]&&(n=n.slice(0,n.length-1));var l=1*(1*n).toFixed(~~this.decimals);return e.isNumber(l)&&!e.isNaN(l)?l:void 0}});var d=l.PercentFormatter=function(){l.NumberFormatter.apply(this,arguments)};d.prototype=new l.NumberFormatter,e.extend(d.prototype,{defaults:e.extend({},c.prototype.defaults,{multiplier:1,symbol:"%"}),fromRaw:function(e,t){var i=[].slice.call(arguments,1);return i.unshift(e*this.multiplier),(c.prototype.fromRaw.apply(this,i)||"0")+this.symbol},toRaw:function(t,i){var n=t.split(this.symbol);if(n&&n[0]&&""===n[1]||null==n[1]){var r=c.prototype.toRaw.call(this,n[0]);return e.isUndefined(r)?r:r/this.multiplier}}});var u=l.DatetimeFormatter=function(t){if(e.extend(this,this.defaults,t||{}),!this.includeDate&&!this.includeTime)throw new Error("Either includeDate or includeTime must be true")};u.prototype=new h,e.extend(u.prototype,{defaults:{includeDate:!0,includeTime:!0,includeMilli:!1},DATE_RE:/^([+\-]?\d{4})-(\d{2})-(\d{2})$/,TIME_RE:/^(\d{2}):(\d{2}):(\d{2})(\.(\d{3}))?$/,ISO_SPLITTER_RE:/T|Z| +/,_convert:function(t,i){if(""===(t+"").trim())return null;var n,r=null;if(e.isNumber(t)){var o=new Date(t);n=s(o.getUTCFullYear(),4,0)+"-"+s(o.getUTCMonth()+1,2,0)+"-"+s(o.getUTCDate(),2,0),r=s(o.getUTCHours(),2,0)+":"+s(o.getUTCMinutes(),2,0)+":"+s(o.getUTCSeconds(),2,0)}else{var l=(t=t.trim()).split(this.ISO_SPLITTER_RE)||[];n=this.DATE_RE.test(l[0])?l[0]:"",r=n&&l[1]?l[1]:this.TIME_RE.test(l[0])?l[0]:""}var a=this.DATE_RE.exec(n)||[],h=this.TIME_RE.exec(r)||[];if(i){if(this.includeDate&&e.isUndefined(a[0]))return;if(this.includeTime&&e.isUndefined(h[0]))return;if(!this.includeDate&&n)return;if(!this.includeTime&&r)return}var o=new Date(Date.UTC(1*a[1]||0,1*a[2]-1||0,1*a[3]||0,1*h[1]||null,1*h[2]||null,1*h[3]||null,1*h[5]||null)),c="";return this.includeDate&&(c=s(o.getUTCFullYear(),4,0)+"-"+s(o.getUTCMonth()+1,2,0)+"-"+s(o.getUTCDate(),2,0)),this.includeTime&&(c=c+(this.includeDate?"T":"")+s(o.getUTCHours(),2,0)+":"+s(o.getUTCMinutes(),2,0)+":"+s(o.getUTCSeconds(),2,0),this.includeMilli&&(c=c+"."+s(o.getUTCMilliseconds(),3,0))),this.includeDate&&this.includeTime&&(c+="Z"),c},fromRaw:function(t,i){return e.isNull(t)||e.isUndefined(t)?"":this._convert(t)},toRaw:function(e,t){return this._convert(e,!0)}});var m=l.StringFormatter=function(){};m.prototype=new h,e.extend(m.prototype,{fromRaw:function(t,i){return e.isUndefined(t)||e.isNull(t)?"":t+""}});var p=l.EmailFormatter=function(){};p.prototype=new h,e.extend(p.prototype,{toRaw:function(t,i){var n=t.trim().split("@");if(2===n.length&&e.all(n))return t}});var f=l.SelectFormatter=function(){};f.prototype=new h,e.extend(f.prototype,{fromRaw:function(t,i){return e.isArray(t)?t:null!=t?[t]:[]}});var g=l.CellEditor=t.View.extend({initialize:function(e){this.formatter=e.formatter,this.column=e.column,this.column instanceof $||(this.column=new $(this.column)),this.listenTo(this.model,"backgrid:editing",this.postRender)},postRender:function(e,t){return null!=t&&t.get("name")!=this.column.get("name")||this.$el.focus(),this}}),v=l.InputCellEditor=g.extend({tagName:"input",attributes:{type:"text"},events:{blur:"saveOrCancel",keydown:"saveOrCancel"},initialize:function(e){v.__super__.initialize.apply(this,arguments),e.placeholder&&this.$el.attr("placeholder",e.placeholder)},render:function(){var e=this.model;return this.$el.val(this.formatter.fromRaw(e.get(this.column.get("name")),e)),this},saveOrCancel:function(t){var i=this.formatter,n=this.model,r=this.column,s=new a(t),o="blur"===t.type;if(s.moveUp()||s.moveDown()||s.moveLeft()||s.moveRight()||s.save()||o){t.preventDefault(),t.stopPropagation();var l=this.$el.val(),h=i.toRaw(l,n);e.isUndefined(h)?n.trigger("backgrid:error",n,r,l):(n.set(r.get("name"),h),n.trigger("backgrid:edited",n,r,s))}else s.cancel()&&(t.stopPropagation(),n.trigger("backgrid:edited",n,r,s))},postRender:function(e,t){if(null==t||t.get("name")==this.column.get("name"))if("right"===this.$el.css("text-align")){var i=this.$el.val();this.$el.focus().val(null).val(i)}else this.$el.focus();return this}}),y=l.Cell=t.View.extend({tagName:"td",formatter:h,editor:v,events:{click:"enterEditMode"},initialize:function(t){this.column=t.column,this.column instanceof $||(this.column=new $(this.column));var i=this.column,n=this.model,r=this.$el,s=l.resolveNameToClass(i.get("formatter")||this.formatter,"Formatter");e.isFunction(s.fromRaw)||e.isFunction(s.toRaw)||(s=new s),this.formatter=s,this.editor=l.resolveNameToClass(this.editor,"CellEditor"),this.listenTo(n,"change:"+i.get("name"),function(){r.hasClass("editor")||this.render()}),this.listenTo(n,"backgrid:error",this.renderError),this.listenTo(i,"change:editable change:sortable change:renderable",function(e){var t=e.changedAttributes();for(var i in t)t.hasOwnProperty(i)&&r.toggleClass(i,t[i])}),this.updateStateClassesMaybe()},updateStateClassesMaybe:function(){var e=this.model,t=this.column,i=this.$el;i.toggleClass("editable",l.callByNeed(t.editable(),t,e)),i.toggleClass("sortable",l.callByNeed(t.sortable(),t,e)),i.toggleClass("renderable",l.callByNeed(t.renderable(),t,e))},render:function(){var e=this.$el;e.empty();var t=this.model,i=this.column.get("name");return e.text(this.formatter.fromRaw(t.get(i),t)),e.addClass(i),this.updateStateClassesMaybe(),this.delegateEvents(),this},enterEditMode:function(){var e=this.model,t=this.column,i=l.callByNeed(t.editable(),t,e);i&&(this.currentEditor=new this.editor({column:this.column,model:this.model,formatter:this.formatter}),e.trigger("backgrid:edit",e,t,this,this.currentEditor),this.undelegateEvents(),this.$el.empty(),this.$el.append(this.currentEditor.$el),this.currentEditor.render(),this.$el.addClass("editor"),e.trigger("backgrid:editing",e,t,this,this.currentEditor))},renderError:function(e,t){null!=t&&t.get("name")!=this.column.get("name")||this.$el.addClass("error")},exitEditMode:function(){this.$el.removeClass("error"),this.currentEditor.remove(),this.stopListening(this.currentEditor),delete this.currentEditor,this.$el.removeClass("editor"),this.render()},remove:function(){return this.currentEditor&&(this.currentEditor.remove.apply(this.currentEditor,arguments),delete this.currentEditor),y.__super__.remove.apply(this,arguments)}}),w=l.StringCell=y.extend({className:"string-cell",formatter:m}),b=l.UriCell=y.extend({className:"uri-cell",title:null,target:"_blank",initialize:function(e){b.__super__.initialize.apply(this,arguments),this.title=e.title||this.title,this.target=e.target||this.target},render:function(){this.$el.empty();var e=this.model.get(this.column.get("name")),t=this.formatter.fromRaw(e,this.model);return this.$el.append(o("<a>",{tabIndex:-1,href:e,title:this.title||t,target:this.target}).text(t)),this.delegateEvents(),this}}),C=(l.EmailCell=w.extend({className:"email-cell",formatter:p,render:function(){this.$el.empty();var e=this.model,t=this.formatter.fromRaw(e.get(this.column.get("name")),e);return this.$el.append(o("<a>",{tabIndex:-1,href:"mailto:"+t,title:t}).text(t)),this.delegateEvents(),this}}),l.NumberCell=y.extend({className:"number-cell",decimals:c.prototype.defaults.decimals,decimalSeparator:c.prototype.defaults.decimalSeparator,orderSeparator:c.prototype.defaults.orderSeparator,formatter:c,initialize:function(e){C.__super__.initialize.apply(this,arguments);var t=this.formatter;t.decimals=this.decimals,t.decimalSeparator=this.decimalSeparator,t.orderSeparator=this.orderSeparator}})),x=(l.IntegerCell=C.extend({className:"integer-cell",decimals:0}),l.PercentCell=C.extend({className:"percent-cell",multiplier:d.prototype.defaults.multiplier,symbol:d.prototype.defaults.symbol,formatter:d,initialize:function(){x.__super__.initialize.apply(this,arguments);var e=this.formatter;e.multiplier=this.multiplier,e.symbol=this.symbol}})),E=l.DatetimeCell=y.extend({className:"datetime-cell",includeDate:u.prototype.defaults.includeDate,includeTime:u.prototype.defaults.includeTime,includeMilli:u.prototype.defaults.includeMilli,formatter:u,initialize:function(t){E.__super__.initialize.apply(this,arguments);var i=this.formatter;i.includeDate=this.includeDate,i.includeTime=this.includeTime,i.includeMilli=this.includeMilli;var n=this.includeDate?"YYYY-MM-DD":"";n+=this.includeDate&&this.includeTime?"T":"",n+=this.includeTime?"HH:mm:ss":"",n+=this.includeTime&&this.includeMilli?".SSS":"",this.editor=this.editor.extend({attributes:e.extend({},this.editor.prototype.attributes,this.editor.attributes,{placeholder:n})})}}),T=(l.DateCell=E.extend({className:"date-cell",includeTime:!1}),l.TimeCell=E.extend({className:"time-cell",includeDate:!1}),l.BooleanCellEditor=g.extend({tagName:"input",attributes:{tabIndex:-1,type:"checkbox"},events:{mousedown:function(){this.mouseDown=!0},blur:"enterOrExitEditMode",mouseup:function(){this.mouseDown=!1},change:"saveOrCancel",keydown:"saveOrCancel"},render:function(){var e=this.model,t=this.formatter.fromRaw(e.get(this.column.get("name")),e);return this.$el.prop("checked",t),this},enterOrExitEditMode:function(e){if(!this.mouseDown){var t=this.model;t.trigger("backgrid:edited",t,this.column,new a(e))}},saveOrCancel:function(e){var t=this.model,i=this.column,n=this.formatter,r=new a(e);if(r.passThru()&&"change"!=e.type)return!0;r.cancel()&&(e.stopPropagation(),t.trigger("backgrid:edited",t,i,r));var s=this.$el;if(r.save()||r.moveLeft()||r.moveRight()||r.moveUp()||r.moveDown()){e.preventDefault(),e.stopPropagation();var o=n.toRaw(s.prop("checked"),t);t.set(i.get("name"),o),t.trigger("backgrid:edited",t,i,r)}else if("change"==e.type){var o=n.toRaw(s.prop("checked"),t);t.set(i.get("name"),o),s.focus()}}})),R=(l.BooleanCell=y.extend({className:"boolean-cell",editor:T,events:{click:"enterEditMode"},render:function(){this.$el.empty();var e=this.model,t=this.column,i=l.callByNeed(t.editable(),t,e);return this.$el.append(o("<input>",{tabIndex:-1,type:"checkbox",checked:this.formatter.fromRaw(e.get(t.get("name")),e),disabled:!i})),this.delegateEvents(),this}}),l.SelectCellEditor=g.extend({tagName:"select",events:{change:"save",blur:"close",keydown:"close"},template:e.template('<option value="<%- value %>" <%= selected ? \'selected="selected"\' : "" %>><%- text %></option>',null,{variable:null,evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g}),setOptionValues:function(t){this.optionValues=t,this.optionValues=e.result(this,"optionValues")},setMultiple:function(e){this.multiple=e,this.$el.prop("multiple",e)},_renderOptions:function(t,i){for(var n="",r=0;r<t.length;r++)n+=this.template({text:t[r][0],value:t[r][1],selected:e.indexOf(i,t[r][1])>-1});return n},render:function(){this.$el.empty();var t=e.result(this,"optionValues"),i=this.model,n=this.formatter.fromRaw(i.get(this.column.get("name")),i);if(!e.isArray(t))throw new TypeError("optionValues must be an array");for(var r=null,s=null,r=null,l=null,a=null,h=0;h<t.length;h++){var r=t[h];if(e.isArray(r))s=r[0],r=r[1],this.$el.append(this.template({text:s,value:r,selected:e.indexOf(n,r)>-1}));else{if(!e.isObject(r))throw new TypeError("optionValues elements must be a name-value pair or an object hash of { name: 'optgroup label', value: [option name-value pairs] }");l=r.name,(a=o("<optgroup></optgroup>",{label:l})).append(this._renderOptions.call(this,r.values,n)),this.$el.append(a)}}return this.delegateEvents(),this},save:function(e){var t=this.model,i=this.column;t.set(i.get("name"),this.formatter.toRaw(this.$el.val(),t))},close:function(e){var t=this.model,i=this.column,n=new a(e);n.cancel()?(e.stopPropagation(),t.trigger("backgrid:edited",t,i,new a(e))):(n.save()||n.moveLeft()||n.moveRight()||n.moveUp()||n.moveDown()||"blur"==e.type)&&(e.preventDefault(),e.stopPropagation(),this.save(e),t.trigger("backgrid:edited",t,i,new a(e)))}})),k=l.SelectCell=y.extend({className:"select-cell",editor:R,multiple:!1,formatter:f,optionValues:void 0,delimiter:", ",initialize:function(e){k.__super__.initialize.apply(this,arguments),this.listenTo(this.model,"backgrid:edit",function(e,t,i,n){t.get("name")==this.column.get("name")&&(n.setOptionValues(this.optionValues),n.setMultiple(this.multiple))})},render:function(){this.$el.empty();var t=e.result(this,"optionValues"),i=this.model,n=this.formatter.fromRaw(i.get(this.column.get("name")),i),r=[];try{if(!e.isArray(t)||e.isEmpty(t))throw new TypeError;for(var s=0;s<n.length;s++)for(var o=n[s],l=0;l<t.length;l++){var a=t[l];if(e.isArray(a)){var h=a[0],a=a[1];a==o&&r.push(h)}else{if(!e.isObject(a))throw new TypeError;for(var c=a.values,d=0;d<c.length;d++){var u=c[d];u[1]==o&&r.push(u[0])}}}this.$el.append(r.join(this.delimiter))}catch(e){if(e instanceof TypeError)throw new TypeError("'optionValues' must be of type {Array.<Array>|Array.<{name: string, values: Array.<Array>}>}");throw e}return this.delegateEvents(),this}}),$=l.Column=t.Model.extend({defaults:{name:void 0,label:void 0,sortable:!0,editable:!0,renderable:!0,formatter:void 0,sortType:"cycle",sortValue:void 0,direction:null,cell:void 0,headerCell:void 0},initialize:function(){this.has("label")||this.set({label:this.get("name")},{silent:!0});var e=l.resolveNameToClass(this.get("headerCell"),"HeaderCell"),t=l.resolveNameToClass(this.get("cell"),"Cell");this.set({cell:t,headerCell:e},{silent:!0})},sortValue:function(){var t=this.get("sortValue");return e.isString(t)?this[t]:e.isFunction(t)?t:function(e,t){return e.get(t)}}});e.each(["sortable","renderable","editable"],function(t){$.prototype[t]=function(){var i=this.get(t);return e.isString(i)?this[i]:e.isFunction(i)?i:!!i}});var N=l.Columns=t.Collection.extend({model:$}),_=l.Row=t.View.extend({tagName:"tr",initialize:function(e){var i=this.columns=e.columns;i instanceof t.Collection||(i=this.columns=new N(i));for(var n=this.cells=[],r=0;r<i.length;r++)n.push(this.makeCell(i.at(r),e));this.listenTo(i,"add",function(t,i){var r=i.indexOf(t),s=this.makeCell(t,e);n.splice(r,0,s);var o=this.$el;0===r?o.prepend(s.render().$el):r===i.length-1?o.append(s.render().$el):o.children().eq(r).before(s.render().$el)}),this.listenTo(i,"remove",function(e,t,i){n[i.index].remove(),n.splice(i.index,1)})},makeCell:function(e){return new(e.get("cell"))({column:e,model:this.model})},render:function(){this.$el.empty();for(var e=document.createDocumentFragment(),t=0;t<this.cells.length;t++)e.appendChild(this.cells[t].render().el);return this.el.appendChild(e),this.delegateEvents(),this},remove:function(){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];i.remove.apply(i,arguments)}return t.View.prototype.remove.apply(this,arguments)}}),S=l.EmptyRow=t.View.extend({tagName:"tr",emptyText:null,initialize:function(e){this.emptyText=e.emptyText,this.columns=e.columns},render:function(){this.$el.empty();var t=document.createElement("td");t.setAttribute("colspan",this.columns.length);var i=document.createElement("span");return i.innerHTML=e.result(this,"emptyText"),t.appendChild(i),this.el.className="empty",this.el.appendChild(t),this}}),D=l.HeaderCell=t.View.extend({tagName:"th",events:{"click button":"onClick"},initialize:function(e){this.column=e.column,this.column instanceof $||(this.column=new $(this.column));var t=this.column,i=this.collection,n=this.$el;this.listenTo(t,"change:editable change:sortable change:renderable",function(e){var t=e.changedAttributes();for(var i in t)t.hasOwnProperty(i)&&n.toggleClass(i,t[i])}),this.listenTo(t,"change:direction",this.setCellDirection),this.listenTo(t,"change:name change:label",this.render),l.callByNeed(t.editable(),t,i)&&n.addClass("editable"),l.callByNeed(t.sortable(),t,i)&&n.addClass("sortable"),l.callByNeed(t.renderable(),t,i)&&n.addClass("renderable"),this.listenTo(i.fullCollection||i,"backgrid:sorted",this.removeCellDirection)},removeCellDirection:function(){this.$el.removeClass("ascending").removeClass("descending"),this.column.set("direction",null)},setCellDirection:function(e,t){this.$el.removeClass("ascending").removeClass("descending"),e.cid==this.column.cid&&this.$el.addClass(t)},onClick:function(e){e.preventDefault();var t,i=this.column,n=this.collection,r="backgrid:sort",s=l.callByNeed(i.sortable(),i,this.collection);if(s){var o=i.get("sortType");"toggle"===o?(t=i,"ascending"===i.get("direction")?n.trigger(r,t,"descending"):n.trigger(r,t,"ascending")):function(e,t){"ascending"===i.get("direction")?n.trigger(r,t,"descending"):"descending"===i.get("direction")?n.trigger(r,t,null):n.trigger(r,t,"ascending")}(0,i)}},render:function(){this.$el.empty();var e,t=this.column,i=l.callByNeed(t.sortable(),t,this.collection);return e=i?o("<button>").text(t.get("label")).append("<span class='sort-caret' aria-hidden='true'></span>"):document.createTextNode(t.get("label")),this.$el.append(e),this.$el.addClass(t.get("name")),this.$el.addClass(t.get("direction")),this.delegateEvents(),this}}),M=(l.HeaderRow=l.Row.extend({initialize:function(){l.Row.prototype.initialize.apply(this,arguments)},makeCell:function(e,t){var i=e.get("headerCell")||t.headerCell||D;return i=new i({column:e,collection:this.collection})}}),l.Header=t.View.extend({tagName:"thead",initialize:function(e){this.columns=e.columns,this.columns instanceof t.Collection||(this.columns=new N(this.columns)),this.row=new l.HeaderRow({columns:this.columns,collection:this.collection})},render:function(){return this.$el.append(this.row.render().$el),this.delegateEvents(),this},remove:function(){return this.row.remove.apply(this.row,arguments),t.View.prototype.remove.apply(this,arguments)}})),U=l.Body=t.View.extend({tagName:"tbody",initialize:function(e){this.columns=e.columns,this.columns instanceof t.Collection||(this.columns=new N(this.columns)),this.row=e.row||this.row||_,this.rows=this.collection.map(function(e){var t=new this.row({columns:this.columns,model:e});return t},this),this.emptyText=e.emptyText,this._unshiftEmptyRowMayBe();var i=this.collection;this.listenTo(i,"add",this.insertRow),this.listenTo(i,"remove",this.removeRow),this.listenTo(i,"sort",this.refresh),this.listenTo(i,"reset",this.refresh),this.listenTo(i,"backgrid:sort",this.sort),this.listenTo(i,"backgrid:edited",this.moveToNextCell),this.listenTo(this.columns,"add remove",this.updateEmptyRow)},_unshiftEmptyRowMayBe:function(){if(0===this.rows.length&&null!=this.emptyText)return this.emptyRow=new S({emptyText:this.emptyText,columns:this.columns}),this.rows.unshift(this.emptyRow),!0},insertRow:function(e,i,n){if(this.rows[0]instanceof S&&this.rows.pop().remove(),i instanceof t.Collection||n){var r=new this.row({columns:this.columns,model:e}),s=i.indexOf(e);this.rows.splice(s,0,r);var o=this.$el,l=o.children(),a=r.render().$el;return s>=l.length?o.append(a):l.eq(s).before(a),this}this.collection.add(e,n=i)},removeRow:function(t,i,n){return n?((e.isUndefined(n.render)||n.render)&&this.rows[n.index].remove(),this.rows.splice(n.index,1),this._unshiftEmptyRowMayBe()&&this.render(),this):(this.collection.remove(t,n=i),void(this._unshiftEmptyRowMayBe()&&this.render()))},updateEmptyRow:function(){null!=this.emptyRow&&this.emptyRow.render()},refresh:function(){for(var e=0;e<this.rows.length;e++)this.rows[e].remove();return this.rows=this.collection.map(function(e){var t=new this.row({columns:this.columns,model:e});return t},this),this._unshiftEmptyRowMayBe(),this.render(),this.collection.trigger("backgrid:refresh",this),this},render:function(){this.$el.empty();for(var e=document.createDocumentFragment(),t=0;t<this.rows.length;t++){var i=this.rows[t];e.appendChild(i.render().el)}return this.el.appendChild(e),this.delegateEvents(),this},remove:function(){for(var e=0;e<this.rows.length;e++){var i=this.rows[e];i.remove.apply(i,arguments)}return t.View.prototype.remove.apply(this,arguments)},sort:function(i,n){if(!e.contains(["ascending","descending",null],n))throw new RangeError('direction must be one of "ascending", "descending" or `null`');e.isString(i)&&(i=this.columns.findWhere({name:i}));var r,s=this.collection;r="ascending"===n?-1:"descending"===n?1:null;var o=this.makeComparator(i.get("name"),r,r?i.sortValue():function(e){return 1*e.cid.replace("c","")});return t.PageableCollection&&s instanceof t.PageableCollection?(s.setSorting(r&&i.get("name"),r,{sortValue:i.sortValue()}),s.fullCollection?(null==s.fullCollection.comparator&&(s.fullCollection.comparator=o),s.fullCollection.sort(),s.trigger("backgrid:sorted",i,n,s),i.set("direction",n)):s.fetch({reset:!0,success:function(){s.trigger("backgrid:sorted",i,n,s),i.set("direction",n)}})):(s.comparator=o,s.sort(),s.trigger("backgrid:sorted",i,n,s),i.set("direction",n)),this},makeComparator:function(e,t,i){return function(n,r){var s,o=i(n,e),l=i(r,e);return 1===t&&(s=o,o=l,l=s),o===l?0:o<l?-1:1}},moveToNextCell:function(e,t,i){var n,r,s,o,a,h=this.collection.indexOf(e),c=this.columns.indexOf(t);if(-1===c)return this;if(this.rows[h].cells[c].exitEditMode(),i.moveUp()||i.moveDown()||i.moveLeft()||i.moveRight()||i.save()){var d=this.columns.length,u=d*this.collection.length;if(i.moveUp()||i.moveDown()){o=h+(i.moveUp()?-1:1);var m=this.rows[o];m?(n=m.cells[c],l.callByNeed(n.column.editable(),n.column,e)&&(n.enterEditMode(),e.trigger("backgrid:next",o,c,!1))):e.trigger("backgrid:next",o,c,!0)}else if(i.moveLeft()||i.moveRight()){for(var p=i.moveRight(),f=h*d+c+(p?1:-1);f>=0&&f<u;p?f++:f--)if(a=f-(o=~~(f/d))*d,n=this.rows[o].cells[a],r=l.callByNeed(n.column.renderable(),n.column,n.model),s=l.callByNeed(n.column.editable(),n.column,e),r&&s){n.enterEditMode(),e.trigger("backgrid:next",o,a,!1);break}f==u&&e.trigger("backgrid:next",~~(f/d),f-o*d,!0)}}return this}});return l.Footer=t.View.extend({tagName:"tfoot",initialize:function(e){this.columns=e.columns,this.columns instanceof t.Collection||(this.columns=new l.Columns(this.columns))}}),l.Grid=t.View.extend({tagName:"table",className:"backgrid",header:M,body:U,footer:null,initialize:function(i){i.columns instanceof t.Collection||(i.columns=new N(i.columns||this.columns)),this.columns=i.columns,this.caption=i.caption;var n=e.omit(i,["el","id","attributes","className","tagName","events"]);this.body=i.body||this.body,this.body=new this.body(n),this.header=i.header||this.header,this.header&&(this.header=new this.header(n)),this.footer=i.footer||this.footer,this.footer&&(this.footer=new this.footer(n)),this.listenTo(this.columns,"reset",function(){this.header&&(this.header=new(this.header.remove().constructor)(n)),this.body=new(this.body.remove().constructor)(n),this.footer&&(this.footer=new(this.footer.remove().constructor)(n)),this.render()})},insertRow:function(){return this.body.insertRow.apply(this.body,arguments),this},removeRow:function(){return this.body.removeRow.apply(this.body,arguments),this},insertColumn:function(){return this.columns.add.apply(this.columns,arguments),this},removeColumn:function(){return this.columns.remove.apply(this.columns,arguments),this},sort:function(){return this.body.sort.apply(this.body,arguments),this},render:function(){return this.$el.empty(),this.caption&&this.$el.append(o("<caption>").text(this.caption)),this.header&&this.$el.append(this.header.render().$el),this.footer&&this.$el.append(this.footer.render().$el),this.$el.append(this.body.render().$el),this.delegateEvents(),this.trigger("backgrid:rendered",this),this},remove:function(){return this.header&&this.header.remove.apply(this.header,arguments),this.body.remove.apply(this.body,arguments),this.footer&&this.footer.remove.apply(this.footer,arguments),t.View.prototype.remove.apply(this,arguments)}}),l}(e,t)}.apply(t,n))||(e.exports=r)},557:function(e,t,i){var n,r,s;
/*
  backgrid-filter
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/r=[i(221),i(61),i(550)],void 0===(s="function"==typeof(n=function(e,t,i,n){"use strict";var r={},s=r.ServerSideFilter=i.Extension.ServerSideFilter=t.View.extend({tagName:"form",className:"backgrid-filter form-search",template:function(e){return'<span class="search">&nbsp;</span><input type="search" '+(e.placeholder?'placeholder="'+e.placeholder+'"':"")+' name="'+e.name+'" '+(e.value?'value="'+e.value+'"':"")+'/><a class="clear" data-backgrid-action="clear" href="#">&times;</a>'},events:{"keyup input[type=search]":"showClearButtonMaybe","click a[data-backgrid-action=clear]":"clear",submit:"search"},name:"q",value:null,placeholder:null,initialize:function(e){s.__super__.initialize.apply(this,arguments),this.name=e.name||this.name,this.value=e.value||this.value,this.placeholder=e.placeholder||this.placeholder,this.template=e.template||this.template;var i=this.collection,n=this;t.PageableCollection&&i instanceof t.PageableCollection&&"server"==i.mode&&(i.queryParams[this.name]=function(){return n.query()||null})},clearSearchBox:function(){this.value=null,this.searchBox().val(null),this.showClearButtonMaybe()},showClearButtonMaybe:function(){var e=this.clearButton(),t=this.query();t?e.show():e.hide()},searchBox:function(){return this.$el.find("input[type=search]")},clearButton:function(){return this.$el.find("a[data-backgrid-action=clear]")},query:function(){return this.value=this.searchBox().val(),this.value},search:function(e){e&&e.preventDefault();var i={},n=this.query();n&&(i[this.name]=n);var r=this.collection;t.PageableCollection&&r instanceof t.PageableCollection?r.getFirstPage({data:i,reset:!0,fetch:!0}):r.fetch({data:i,reset:!0})},clear:function(e){e&&e.preventDefault(),this.clearSearchBox();var i=this.collection;t.PageableCollection&&i instanceof t.PageableCollection?i.getFirstPage({reset:!0,fetch:!0}):i.fetch({reset:!0})},render:function(){return this.$el.empty().append(this.template({name:this.name,placeholder:this.placeholder,value:this.value})),this.showClearButtonMaybe(),this.delegateEvents(),this}}),o=r.ClientSideFilter=i.Extension.ClientSideFilter=s.extend({events:e.extend({},s.prototype.events,{"click a[data-backgrid-action=clear]":function(e){e.preventDefault(),this.clear()},"keydown input[type=search]":"search",submit:function(e){e.preventDefault(),this.search()}}),fields:null,wait:149,initialize:function(t){o.__super__.initialize.apply(this,arguments),this.fields=t.fields||this.fields,this.wait=t.wait||this.wait,this._debounceMethods(["search","clear"]);var i=this.collection=this.collection.fullCollection||this.collection,n=this.shadowCollection=i.clone();this.listenTo(i,"add",function(e,t,i){n.add(e,i)}),this.listenTo(i,"remove",function(e,t,i){n.remove(e,i)}),this.listenTo(i,"sort",function(e){this.query()||n.reset(e.models)}),this.listenTo(i,"reset",function(t,i){(i=e.extend({reindex:!0},i||{})).reindex&&null==i.from&&null==i.to&&n.reset(t.models)})},_debounceMethods:function(t){e.isString(t)&&(t=[t]),this.undelegateEvents();for(var i=0,n=t.length;i<n;i++){var r=t[i],s=this[r];this[r]=e.debounce(s,this.wait)}this.delegateEvents()},makeRegExp:function(e){return new RegExp(e.trim().split(/\s+/).join("|"),"i")},makeMatcher:function(e){var t=this.makeRegExp(e);return function(e){for(var i=this.fields||e.keys(),n=0,r=i.length;n<r;n++)if(t.test(e.get(i[n])+""))return!0;return!1}},search:function(){var t=e.bind(this.makeMatcher(this.query()),this),i=this.collection;i.pageableCollection&&i.pageableCollection.getFirstPage({silent:!0}),i.reset(this.shadowCollection.filter(t),{reindex:!1})},clear:function(){this.clearSearchBox();var e=this.collection;e.pageableCollection&&e.pageableCollection.getFirstPage({silent:!0}),e.reset(this.shadowCollection.models,{reindex:!1})}}),l=r.LunrFilter=i.Extension.LunrFilter=o.extend({ref:"id",fields:null,initialize:function(e){l.__super__.initialize.apply(this,arguments),this.ref=e.ref||this.ref;var t=this.collection=this.collection.fullCollection||this.collection;this.listenTo(t,"add",this.addToIndex),this.listenTo(t,"remove",this.removeFromIndex),this.listenTo(t,"reset",this.resetIndex),this.listenTo(t,"change",this.updateIndex),this.resetIndex(t)},resetIndex:function(t,i){if((i=e.extend({reindex:!0},i||{})).reindex){var r=this;this.index=n(function(){e.each(r.fields,function(e,t){this.field(t,e),this.ref(r.ref)},this)}),t.each(function(e){this.addToIndex(e)},this)}},addToIndex:function(e){var t=this.index,i=e.toJSON();t.documentStore.has(i[this.ref])?t.update(i):t.add(i)},removeFromIndex:function(e){var t=this.index,i=e.toJSON();t.documentStore.has(i[this.ref])&&t.remove(i)},updateIndex:function(t){var i=t.changedAttributes();i&&!e.isEmpty(e.intersection(e.keys(this.fields),e.keys(i)))&&this.index.update(t.toJSON())},search:function(){var e=this.collection;if(this.query()){for(var t=this.index.search(this.query()),i=[],n=0;n<t.length;n++){var r=t[n];i.push(this.shadowCollection.get(r.ref))}e.pageableCollection&&e.pageableCollection.getFirstPage({silent:!0}),e.reset(i,{reindex:!1})}else e.reset(this.shadowCollection.models,{reindex:!1})}});return r})?n.apply(t,r):n)||(e.exports=s)}}]);
//# sourceMappingURL=1.a54493cd22.js.map