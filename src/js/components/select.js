!function($, ui, root) {
	ui.create("input", function() {
		$(".semi.select").each(function(select) {
			select = $(select);
			let label = select.children().filter("label");

			if (select.attr("data-hint") !== null) {
				let wrap = $("<div>").css({ display: "inline-block", position: "relative" });
				let hint = $("<div>").addClass("semi").addClass("hint").html(select.attr("data-hint"));
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

			select = select.children().filter("select");

			select.css({
				backgroundPositionX: select.width() - 20 + "px"
			})
		});
	});
}($, SemiUI, window);