!function($, ui, root) {
	ui.create("input", function() {
		$(".semi.input").each(function(tab) {
			tab = $(tab);
			let label = tab.children().filter("label");
			let input = tab.children().filter("input");

			if (input.length === undefined) {
				input = tab.children().filter("textarea");
			}

			let color1;
			let color2 = root.getComputedStyle(input[0]).getPropertyValue("color");;
			if (label.length !== undefined) {
				color1 = root.getComputedStyle(label[0]).getPropertyValue("color");
			} else {
				color1 = "#333";
			}

			if (tab.attr("data-hint") !== null) {
				let wrap = $("<div>").css({ display: "inline-block", position: "relative" });
				let hint = $("<div>").addClass("semi").addClass("hint").html(tab.attr("data-hint"));
				label.append(hint);
				label.append(wrap.append($("<i>").addClass("material-icons").html('help_outline')));
			
				hint.css({
					top: -(label.height() + hint.height()) + "px",
				});

				wrap.bind("mouseover", function() {
					hint.css({
						visibility: "visible",
						opacity: "1"
					});
				});

				wrap.bind("mouseout", function() {
					hint.css({
						visibility: "hidden",
						opacity: "0"
					});
				});
			}

			label.css({ color: color2 });

			input.bind("focus", function() {
				label.css({ color: color1 });
			});

			input.bind("focusout", function() {
				label.css({ color: color2 });
			});
		});
	});
}($, SemiUI, window);