(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["color.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<label for=\"color\">Color</label>\n<select class=\"form-control\" id=\"color\">\n<option></option>\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "colors");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("color", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t<option value=\"";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</option>\n";
;
}
}
frame = frame.pop();
output += "\n</select>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["feature.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<strong>Features</strong><br/>\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "features");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("feature", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t<label><input type=\"checkbox\" class=\"feature\"\n\t\t\tvalue=\"";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</label><br/>\n";
;
}
}
frame = frame.pop();
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["model.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<label for=\"model\">Model</label>\n<select class=\"form-control\" id=\"model\">\n<option></option>\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "models");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("model", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t<option value=\"";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</option>\n";
;
}
}
frame = frame.pop();
output += "\n</select>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["result.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"panel panel-warning\">\n\n\t<div class=\"panel-heading\">\n\t<h3 class=\"panel-title\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "result")),"model", env.opts.autoescape), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "result")),"trim", env.opts.autoescape), env.opts.autoescape);
output += "</h3>\n\t</div>\n\n\t<div class=\"panel-body\">\n\t\t<p class=\"pull-right\">\n\t\t<img class=\"img-thumbnail\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "result")),"imgUrl", env.opts.autoescape), env.opts.autoescape);
output += "\">\n\t\t</p>\n\t\t<p>\n\t\tThe ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "result")),"model", env.opts.autoescape), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "result")),"trim", env.opts.autoescape), env.opts.autoescape);
output += " is ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "result")),"color", env.opts.autoescape), env.opts.autoescape);
output += ". \n\t\tIt has the following features:\n\t\t<ul>\n\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "result")),"features", env.opts.autoescape);
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("feature", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t<li>";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</li>\n\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t</ul>\n\t\t</p>\n\t</div>\n\t<div class=\"panel-footer\">List Price: $";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "result")),"price", env.opts.autoescape), env.opts.autoescape);
output += "</div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["results.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h2>Total Results: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "totalResults"), env.opts.autoescape);
output += "</h2>\n\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "results");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("result", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t";
env.getTemplate("result.html", false, "results.html", function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame.push(), function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n";
})});
}
}
frame = frame.pop();
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["trim.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<label for=\"trim\">Trim</label>\n<select class=\"form-control\" id=\"trim\">\n<option></option>\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "trims");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("trim", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t<option value=\"";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</option>\n";
;
}
}
frame = frame.pop();
output += "\n</select>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

