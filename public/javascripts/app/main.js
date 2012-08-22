require.config({
	baseUrl: '/javascripts',
	paths: {
		'jquery': 'libs/jquery-1.7.2',
		'json2': 'libs/json2',
		'underscore': 'libs/AMD_underscore',
		'backbone': 'libs/AMD_backbone',
		'backbone-localstorage': 'libs/backbone-localstorage',
		'dropdown': 'libs/bootstrap-dropdown',
		'tab': 'libs/bootstrap-tab',
		'bootstrap': 'libs/bootstrap',
		'test': 'libs/test',
		'require': 'libs/require',
		'models': 'models'
	}
});

require(['require', 'collections/sidebartabs'], function(require, sidebartabs) {
	//alert('Hello '+sidebartabs);
	var sidebartabs = new sidebartabs();

	// For debug, mannually add element 
	sidebartabs.add({
		tabName: 'Welcome',
		tabContent: 'Welcome to use flash',
		listHeaderName: 'General',
		listItemName: 'Main',
		active: true,
		showTab: true,
		showListItem: true
	});
});

