(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["bio.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\nMy name is ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += ".<br/>\nI'm ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "age"), env.opts.autoescape);
output += " years old.\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["child.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
env.getTemplate("parent.html", true, "child.html", function(t_2,parentTemplate) {
if(t_2) { cb(t_2); return; }
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n\n";
output += "\n";
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_top(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\nMy Top is AWESOME!\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_bottom(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\nMy Bottom is Meh\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_top: b_top,
b_bottom: b_bottom,
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["child2.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
env.getTemplate("parent.html", true, "child2.html", function(t_2,parentTemplate) {
if(t_2) { cb(t_2); return; }
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_top(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\nMy Top is AWESOME!!!\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_top: b_top,
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["parent.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n";
context.getBlock("top")(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
output += "\n\n<p/>\n\n";
context.getBlock("bottom")(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_top(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\nThis is top level content.\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_bottom(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\nThis is bottom level content.\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_top: b_top,
b_bottom: b_bottom,
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["product.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "I'm a product template.\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["products.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h2>Products</h2>\n\n";
frame = frame.push();
var t_3 = (lineno = 2, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [0,5]));
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("i", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n  ";
env.getTemplate("product.html", false, "products.html", function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame.push(), function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "<br/>\n";
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

