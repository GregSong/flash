define(['jquery', 'underscore', 'backbone', 'models/sidebartab'], function($, _, Backbone, sidebartab) {
	var SidebarTabs = Backbone.Collection.extend({
		model: sidebartab,
		initialize: function() {
			//alert('Initialize Sidebar Tabs');
		}, 
	});
	return SidebarTabs;
});

