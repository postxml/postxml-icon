module.exports = function () {
	return function ($) {
		$('icon').each(function (i, el) {
			var icon = $.load('<svg><use xlink:href="#icon--' + $(el).text() + '"></use></svg>');

			Object.keys(el.attribs).forEach(function (attr) {
				icon('svg').attr(attr, el.attribs[attr]);
			});

			$(el).replaceWith(icon.html());
		});
	};
};
