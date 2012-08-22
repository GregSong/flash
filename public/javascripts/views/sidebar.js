define(['jquery', 'underscore','backbone', 'models/sidebartab'], function($, _,  Backbone, sidebartab) {
	var SidebarView = Backbone.View.extend({
		events: {},
		initialize: function(item) {
			// Bind click event 
			console.log('New view item:' + JSON.stringify(this.model.toJSON()));
            this.model.bind('change',this.render);
		},
		render: function() {
			console.log('Render view');
		},
		showTab: function() {
			console.log('Show Tab');
		}
	});
	return SidebarView;
});

