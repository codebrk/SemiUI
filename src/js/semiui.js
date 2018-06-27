const SemiUI = {};

!function($, root) {
	SemiUI.stack = {};
	SemiUI.create = function(name, callback) {
		SemiUI.stack[name] = callback;
		callback();
	};
}($, window);