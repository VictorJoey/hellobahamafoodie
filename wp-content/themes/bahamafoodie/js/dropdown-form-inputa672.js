$((function () { $(".checkbox-container input[type=checkbox]").after("<span>"), $("select").each((function () { var t = $(this), e = $(this).children("option").length; t.addClass("s-hidden"), t.wrap('<div class="select"></div>'), t.after('<div class="styledSelect"></div>'); var i = t.next("div.styledSelect"); i.text(t.children("option").eq(0).text()); for (var c = $("<ul />", { class: "options" }).insertAfter(i), n = 0; n < e; n++)$("<li />", { text: t.children("option").eq(n).text(), rel: t.children("option").eq(n).val() }).appendTo(c); var o = c.children("li"); i.click((function (t) { t.stopPropagation(), $("div.styledSelect.active").each((function () { $(this).removeClass("active").next("ul.options").hide() })), $(this).toggleClass("active").next("ul.options").toggle() })), o.click((function (e) { e.stopPropagation(), i.text($(this).text()).removeClass("active"), t.val($(this).attr("rel")), t.trigger("change"), c.hide() })), $(document).click((function () { i.removeClass("active"), c.hide() })) })) }));