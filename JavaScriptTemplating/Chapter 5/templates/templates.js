(function(dust){dust.register("bio",body_0);function body_0(chk,ctx){return chk.w("My name is ").f(ctx.get(["name"], false),ctx,"h").w(" and I'm ").f(ctx.get(["age"], false),ctx,"h").w(" years old.<br/>My hobbies are:<ul>").s(ctx.get(["hobbies"], false),ctx,{"block":body_1},{}).w("</ul>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<li>").f(ctx.getPath(true, []),ctx,"h").w("</li>");}body_1.__dustBody=!0;return body_0;})(dust);