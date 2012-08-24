define(['jquery', 'underscore', 'backbone', 'text', 'models/sidebartab'], function($, _, Backbone, text, sidebartab) {
	var SidebarView = Backbone.View.extend({
		events: {
			'click a': 'show'
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
					var item = $(compiled_template(that.toJSON()));
					$(header).after(item);
					that.view.setElement(item);
				} else {
					header = $("<li class='nav-header'></li>");
          header.append(that.get('listHeaderName')); 
					$('ul#sidebarul.nav.nav-list').append(header);
					var item = $(compiled_template(that.toJSON()));
          header.after(item);
					that.view.setElement(item);
				}
			});
		},
		show: function() {
			console.log('Show');
		}
	});
	return SidebarView;
});

