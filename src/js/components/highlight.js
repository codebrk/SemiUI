!function($, ui, root) {
	ui.create("highlight", function() {
		$(".semi.highlight").each(function(el) {
			el = $(el);
			let overlay = $("<span>").addClass("semi").addClass("overlay").css({ backgroundColor: el.attr("data-color") });
			let text = $("<span>").html(el.html());
			el.html("");
			el.append(text);
			el.append(overlay);
		});
	});
}($, SemiUI, window);