(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['result'] = template({"1":function(depth0,helpers,partials,data) {
    return "			<li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel panel-warning\">\n\n	<div class=\"panel-heading\">\n	<h3 class=\"panel-title\">"
    + alias3(((helper = (helper = helpers.model || (depth0 != null ? depth0.model : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"model","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.trim || (depth0 != null ? depth0.trim : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"trim","hash":{},"data":data}) : helper)))
    + "</h3>\n	</div>\n\n	<div class=\"panel-body\">\n		<p class=\"pull-right\">\n		<img class=\"img-thumbnail\" src=\""
    + alias3(((helper = (helper = helpers.imgUrl || (depth0 != null ? depth0.imgUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imgUrl","hash":{},"data":data}) : helper)))
    + "\">\n		</p>\n		<p>\n		The "
    + alias3(((helper = (helper = helpers.model || (depth0 != null ? depth0.model : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"model","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.trim || (depth0 != null ? depth0.trim : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"trim","hash":{},"data":data}) : helper)))
    + " is "
    + alias3(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"color","hash":{},"data":data}) : helper)))
    + ". \n		It has the following features:\n		<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.features : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n		</p>\n	</div>\n	<div class=\"panel-footer\">List Price: $ "
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n</div>\n";
},"useData":true});
})();(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['color'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<label for=\"color\">Color</label>\n<select class=\"form-control\" id=\"color\">\n<option></option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
templates['feature'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "	<label><input type=\"checkbox\" class=\"feature\"\n		value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</label><br/>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<strong>Features</strong><br/>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.features : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['model'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<label for=\"model\">Model</label>\n<select class=\"form-control\" id=\"model\">\n<option></option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.models : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
templates['results'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.result,depth0,{"name":"result","data":data,"indent":"\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<h2>Total Results: "
    + this.escapeExpression(((helper = (helper = helpers.totalResults || (depth0 != null ? depth0.totalResults : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"totalResults","hash":{},"data":data}) : helper)))
    + "</h2>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['trim'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "	<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<label for=\"trim\">Trim</label>\n<select class=\"form-control\" id=\"trim\">\n<option></option>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.trims : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
})();