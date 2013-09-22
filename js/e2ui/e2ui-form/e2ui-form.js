YUI.add('e2ui-form', function (Y) {

	Y.namespace('E2UI.Form').Abstract = Y.Base.create('e2ui-form', Y.View, [], {
		_renderTitle: function (node) {
			var elem = Y.Node.create('<legend></legend>');

			elem.setHTML(this.get('title'));

			node.appendChild(elem);
		},

		render: function (parentNode) {
			var container = this.get('container');

			if (parentNode instanceof Y.Node && container.get('parent') !== parentNode) {
				parentNode.appendChild(container);
			}

			container.setHTML(this.template);

			this._renderTitle(container);

			return this;
		}
	}, {
		ATTRS: {
			container: {
				valueFn: function () {
					return Y.Node.create('<fieldset></fieldset>');
				}
			},
			title: {
				value		: null,
				validator	: Y.Lang.isString,
				readonly	: true
			}
		}
	});

}, '0.1', {
	requires: [
		'view'
	],
	skinnable: true
});