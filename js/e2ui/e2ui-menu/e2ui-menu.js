YUI.add('e2ui-menu', function (Y) {

	Y.namespace('E2UI.Menu').Item = Y.Base.create('e2ui-menu-item', Y.View, [], {
		events: {
			'a': {
				mouseover 	: '_hoverOn',
				mouseout	: '_hoverOff'
			}
		},

		_hoverOn: function () {
			if (this.get('children')) {
				this.get('container').one('ul').show();
			}
		},

		_hoverOff: function () {
			if (this.get('children')) {
				this.get('container').one('ul').hide();
			}
		},

		_renderLabel: function (node) {
			var menu,
				arrow,
				elem 		= Y.Node.create('<a></a>'),
				label 		= this.get('label'),
				icon		= this.get('icon'),
				link		= this.get('link'),
				children 	= this.get('children');

			if (this.get('divider')) {
				node.addClass('divider');
			}

			if (icon) {
				label = '<i class="' + icon + '"></i> ' + label;
			}

			elem.setHTML(label);
			elem.setAttribute('href', link);

			node.appendChild(elem);

			if (children) {
				node.addClass('has-menu');

				arrow = Y.Node.create('<span></span>');
				arrow.setHTML('&nbsp;')
				arrow.addClass('arrow');

				elem.appendChild(arrow);

				menu = Y.Node.create('<ul></ul>');

				Y.Array.each(children, function (item) {
					var iview = new Y.E2UI.Menu.Item(item);
					iview.render(menu);
				});

				menu.hide();

				node.appendChild(menu);
			}
		},

		_updateDisabled: function () {
			var disabled = this.get('disabled');
		},

		render: function (parentNode) {
			var container = this.get('container');

			if (parentNode instanceof Y.Node && container.get('parent') !== parentNode) {
				parentNode.appendChild(container);
			}

			this._renderLabel(container);

			return this;
		}
	}, {
		ATTRS: {
			container: {
				valueFn: function () {
					return Y.Node.create('<li></li>');
				}
			},
			icon: {
				value 		: null,
				validator	: Y.Lang.isString,
				readonly 	: true
			},
			label: {
				value 		: '-noname-',
				validator	: Y.Lang.isString,
				readonly	: true
			},
			link: {
				value 		: '#',
				validator	: Y.Lang.isString,
				readonly 	: true
			},
			children: {
				value 		: null,
				validator	: Y.Lang.isArray,
				readonly 	: true
			},
			divider: {
				value 		: false,
				validator	: Y.Lang.isBoolean,
				readonly 	: true
			},
			disabled: {
				value 		: false,
				validator 	: Y.Lang.isBoolean
			}
		}
	});

	Y.namespace('E2UI.Menu').Nav = Y.Base.create('e2ui-menu', Y.View, [], {
		_renderTitle: function (node) {
			var elem = Y.Node.create('<div></div>');

			elem.setHTML(this.get('title'));
			elem.addClass('title');
			node.appendChild(elem);
		},

		_renderItems: function (node) {
			Y.Array.each(this.get('items'), function (item) {
				var iview = new Y.E2UI.Menu.Item(item);

				iview.render(node);
			});
		},

		render: function (parentNode) {
			var container = this.get('container');

			if (parentNode instanceof Y.Node && container.get('parent') !== parentNode) {
				parentNode.appendChild(container);
			}

			container.addClass('menu');
			if (this.get('vertical')) {
				container.addClass('vertical');
			}

			this._renderTitle(container);
			this._renderItems(container);

			return this;
		}
	}, {
		ATTRS: {
			container: {
				valueFn: function () {
					return Y.Node.create('<ul></ul>');
				}
			},
			title: {
				value 		: '',
				validator	: Y.Lang.isString,
				readonly	: true
			},
			vertical: {
				value 		: false,
				validator	: Y.Lang.isBoolean,
				readonly 	: true
			},
			items: {
				value 		: [],
				validator	: Y.Lang.isArray
			}
		}
	});

}, '0.1', {
	requires: [
		'view'
	],
	skinnable: true
});