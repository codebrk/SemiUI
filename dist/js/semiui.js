"use strict";

var SemiUI = {};

!function ($, root) {
	SemiUI.stack = {};
	SemiUI.create = function (name, callback) {
		SemiUI.stack[name] = callback;
		callback();
	};
}($, window);
"use strict";

!function ($, ui, root) {
	$.plugin(function (titleText, contentText) {
		var _self = {};

		var wrap = $("<div>").addClass("semi").addClass("dialog").addClass("wrap");
		var win = $("<div>").addClass("semi").addClass("dialog");
		var overlay = $("<div>").addClass("semi").addClass("screen");

		var title = $("<h3>").addClass("title").html(titleText);
		var content = $("<p>").addClass("content").html(contentText);

		win.append(title).append(content);
		wrap.append(overlay).append(win);
		$(document.body).prepend(wrap);

		var btnWrap = $("<div>").css({ textAlign: "right", paddingTop: "10px" });
		_self.addButton = function (type, s, callback) {
			var btn = $("<button>").addClass("semi").addClass("button").html(s).addClass(type);
			btnWrap.append(btn);

			btn.bind("click", function () {
				callback(_self);
			});

			return _self;
		};

		_self.hide = function () {
			wrap.css({ "display": "none" });
			return _self;
		};

		_self.show = function () {
			wrap.css({ "display": "block" });
			return _self;
		};

		win.append(btnWrap);

		ui.stack["highlight"]();

		_self.hide();
		return _self;
	}, "createAlert");
}($, SemiUI, window);
"use strict";

!function ($, ui, root) {
	ui.create("highlight", function () {
		$(".semi.highlight").each(function (el) {
			el = $(el);
			var overlay = $("<span>").addClass("semi").addClass("overlay").css({ backgroundColor: el.attr("data-color") });
			var text = $("<span>").html(el.html());
			el.html("");
			el.append(text);
			el.append(overlay);
		});
	});
}($, SemiUI, window);
"use strict";

!function ($, ui, root) {
	ui.create("input", function () {
		$(".semi.input").each(function (tab) {
			tab = $(tab);
			var label = tab.children().filter("label");
			var input = tab.children().filter("input");

			if (input.length === undefined) {
				input = tab.children().filter("textarea");
			}

			var color1 = void 0;
			var color2 = root.getComputedStyle(input[0]).getPropertyValue("color");;
			if (label.length !== undefined) {
				color1 = root.getComputedStyle(label[0]).getPropertyValue("color");
			} else {
				color1 = "#333";
			}

			if (tab.attr("data-hint") !== null) {
				var wrap = $("<div>").css({ display: "inline-block", position: "relative" });
				var hint = $("<div>").addClass("semi").addClass("hint").html(tab.attr("data-hint"));
				label.append(hint);
				label.append(wrap.append($("<i>").addClass("material-icons").html('help_outline')));

				hint.css({
					top: -(label.height() + hint.height()) + "px"
				});

				wrap.bind("mouseover", function () {
					hint.css({
						visibility: "visible",
						opacity: "1"
					});
				});

				wrap.bind("mouseout", function () {
					hint.css({
						visibility: "hidden",
						opacity: "0"
					});
				});
			}

			label.css({ color: color2 });

			input.bind("focus", function () {
				label.css({ color: color1 });
			});

			input.bind("focusout", function () {
				label.css({ color: color2 });
			});
		});
	});
}($, SemiUI, window);
"use strict";

!function ($, ui, root) {
	ui.create("input", function () {
		$(".semi.select").each(function (select) {
			select = $(select);
			var label = select.children().filter("label");

			if (select.attr("data-hint") !== null) {
				var wrap = $("<div>").css({ display: "inline-block", position: "relative" });
				var hint = $("<div>").addClass("semi").addClass("hint").html(select.attr("data-hint"));
				label.append(hint);
				label.append(wrap.append($("<i>").addClass("material-icons").html('help_outline')));

				hint.css({
					top: -(label.height() + hint.height()) + "px"
				});

				wrap.bind("mouseover", function () {
					hint.css({
						visibility: "visible",
						opacity: "1"
					});
				});

				wrap.bind("mouseout", function () {
					hint.css({
						visibility: "hidden",
						opacity: "0"
					});
				});
			}

			select = select.children().filter("select");

			select.css({
				backgroundPositionX: select.width() - 20 + "px"
			});
		});
	});
}($, SemiUI, window);
"use strict";

!function ($, ui, root) {
	ui.create("tab", function () {
		$(".semi.tab").each(function (tab) {
			tab = $(tab);
			var bar = $("<div>").addClass("bar");
			tab.prepend(bar);
			var sections = tab.children().filter(".section");
			sections.each(function (section, i) {
				section = $(section);
				var button = $("<button>");

				if (section.attr("data-icon") !== null) {
					button.append($("<i>").addClass("material-icons").html(section.attr("data-icon")));
				}

				button.append(section.attr("data-title"));
				bar.append(button.addClass("tab"));

				if (i !== 0) {
					section.addClass("hide");
				} else {
					button.addClass("active");
					section.addClass("show");
				}

				button.bind("click", function () {
					$(this).addClass("active");
					section.removeClass("hide").addClass("show");
					$(this).siblings().filter(".tab").removeClass("active");
					section.siblings().filter(".section").removeClass("show").addClass("hide");
				});
			});
		});
	});
}($, SemiUI, window);
//# sourceMappingURL=semiui.js.map
