!function($, ui, root) {
	$.plugin(function(titleText, contentText) {
		let _self = {};

		let wrap = $("<div>").addClass("semi").addClass("dialog").addClass("wrap");
		let win = $("<div>").addClass("semi").addClass("dialog");
		let overlay = $("<div>").addClass("semi").addClass("screen");

		let title = $("<h3>").addClass("title").html(titleText);
		let content = $("<p>").addClass("content").html(contentText);

		win.append(title).append(content);	
		wrap.append(overlay).append(win);
		$(document.body).prepend(wrap);



		let btnWrap = $("<div>").css({ textAlign: "right", paddingTop: "10px" });
		_self.addButton = function(type, s, callback) {
			let btn = $("<button>").addClass("semi").addClass("button").html(s).addClass(type);
			btnWrap.append(btn);

			btn.bind("click", function() {
				callback(_self);
			});

			return _self;
		};


		_self.hide = function() {
			wrap.css({ "display": "none" });
			return _self;
		};

		_self.show = function() {
			wrap.css({ "display": "block" });
			return _self;
		};

		win.append(btnWrap);

		ui.stack["highlight"]();

		_self.hide();
		return _self;

	}, "createAlert");
}($, SemiUI, window);