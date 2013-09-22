YUI.add('e2ui-app', function (Y) {

	Y.namespace('E2UI.App').Abstract = Y.Base.create('e2ui-app', Y.App, [], {}, {});

}, '0.1', {
	requires: [
		'app'
	]
});