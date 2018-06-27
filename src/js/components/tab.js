!function($, ui, root) {
	ui.create("tab", function() {
		$(".semi.tab").each(function(tab) {
			tab = $(tab);
			let bar = $("<div>").addClass("bar");
			tab.prepend(bar);
			let sections = tab.children().filter(".section");
			sections.each(function(section, i) {
				section = $(section);
				let button = $("<button>");
				
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

				button.bind("click", function() {
					$(this).addClass("active");
					section.removeClass("hide").addClass("show");
					$(this).siblings().filter(".tab").removeClass("active");
					section.siblings().filter(".section").removeClass("show").addClass("hide");
				});
			});
		});
	});
}($, SemiUI, window);