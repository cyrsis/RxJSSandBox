(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['person'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h1>Hello "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\nIt is great that you are "
    + alias3(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"age","hash":{},"data":data}) : helper)))
    + " years old!\n";
},"useData":true});
templates['someother'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "This is a random "
    + alias3(((helper = (helper = helpers.thing || (depth0 != null ? depth0.thing : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"thing","hash":{},"data":data}) : helper)))
    + " for "
    + alias3(((helper = (helper = helpers.testing || (depth0 != null ? depth0.testing : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"testing","hash":{},"data":data}) : helper)))
    + ".";
},"useData":true});
})();