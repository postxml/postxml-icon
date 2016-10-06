module.exports = function () {
	return function ($) {
		$('icon').each(function (i, el) {
			var inline = el.attribs.inline,
				svg;

			if (inline !== undefined) {
				$(el).removeAttr('inline')
				svg = '<svg>' + $('#icon--' + $(el).text()).html() + '</svg>'
			} else {
				svg = '<svg><use xlink:href="#icon--' + $(el).text() + '"></use></svg>'
			}

			var icon = $.load(svg);

			Object.keys(el.attribs).forEach(function (attr) {
				icon('svg').attr(attr, el.attribs[attr]);
			});

			console.log(icon.html())

			$(el).replaceWith(icon.html());
		});
	};
};
