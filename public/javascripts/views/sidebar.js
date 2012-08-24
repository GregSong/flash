define(['jquery', 'underscore', 'backbone', 'text', 'models/sidebartab'], function($, _, Backbone, text, sidebartab) {
	var SidebarView = Backbone.View.extend({
		events: {
			'click': 'show'
		},
		initialize: function(item) {
			// Bind click event 
			this.model.bind('change', this.render);
		},
		render: function() {
			// 'this' is model here
			var that = this;
			require(['text!templates/' + that.get('listItemTemplate')], function(jst) {
				var compiled_template = _.template(jst);
				var header = _.find($('li.nav-header'), function(item) {
					return item.innerHTML == that.get('listHeaderName');
				});
				if (header) {
					that.view.el = $($(header).after(compiled_template(that.toJSON())));
				} else {
					header = $('ul#sidebarul.nav.nav-list').append('<li class=\'nav-header\'>' + that.get('listHeaderName') + '</li>');
					that.view.el = $(header.append(compiled_template(that.toJSON())));
				}
			});
		},
		show: function() {
			console.log('Show');
		}
	});
	return SidebarView;
});

