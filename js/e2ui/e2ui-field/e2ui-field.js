YUI.add('e2ui-field', function (Y) {

	Y.namespace('E2UI.Field').Abstract = Y.Base.create('e2ui-field', Y.View, [], {}, {});

}, '0.1', {
	requires: [
		'view'
	]
});