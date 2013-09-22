YUI().use('e2ui-form', 'e2ui-menu', 'e2ui-app', function (Y) {

	var fm = new Y.E2UI.Form.Abstract({
			title: 'Test'
		});

	fm.render(Y.one('#form'));

	// var app = new Y.E2UI.App.Abstract({
	// 	container 		: '#app',
	// 	serverRouting	: false,
	// 	transitions 	: true
	// });

	// app.render();

	var mi = new Y.E2UI.Menu.Nav({
		title: 'E2 UI',
		items: [
			{ label : 'Getting started' },
			{
				label 		: 'Itemized elements',
				icon 		: 'icon-list',
				children	: [
					{ label : 'Lists' },
					{ label : 'Menus' },
					{
						label : 'BreadCrumbs',
						children: [
							{ label : 'Test one' },
							{ label : 'Test two' }
						]
					},
					{ label : 'Tabs', divider : true }
				] 
			},
			{ label : 'Buttons', divider : true },
			{ label : 'Tables' },
			{ label : 'Tooltips', divider : true },
			{ label : 'Typography' },
			{ label : 'Horizontal Rules' },
			{ label : 'Icon Glups', icon : 'icon-instagram' },
			{ label : 'Code/Pre' },
			{ label : 'Grids/Columns' },
			{ label : 'Images', divider : true },
			{ label : 'Slideshow' },
			{ label : 'Forms', divider : true }
		]
	});

	mi.render(Y.one('#test'));

});