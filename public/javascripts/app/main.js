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
		'text': 'libs/text',
		'require': 'libs/require',
		'models': 'models'
	}
});

require(['require', 'collections/sidebartabs'], function(require, sidebartabs) {
	//alert('Hello '+sidebartabs);
	var sidebartabs = new sidebartabs();

	// For debug, mannually add element 
	sidebartabs.add({
        tabName:'Apply Leave',
        tabNameId:'apply_leave_id',
        tabNameTemplate:'tabtitle.jst',
        tabContentId:'apply_leave_cont_id',
        tabContTemplate:'tabcontent.jst',
        listHeaderName:'LEAVE APPLICATION',
        listItemName:'Apply leave',
        listItemId:'apply_id',
        listItemTemplate:'listitem.jst',
        active:true,
        showTab:false,
        showListItem:true
	});
	sidebartabs.add({
        tabName:'Query Leave',
        tabNameId:'query_leave_id',
        tabNameTemplate:'tabtitle.jst',
        tabContentId:'query_leave_cont_id',
        tabContTemplate:'tabcontent.jst',
        listHeaderName:'LEAVE APPLICATION',
        listItemName:'Query leave',
        listItemId:'query_id',
        listItemTemplate:'listitem.jst',
        active:false,
        showTab:false,
        showListItem:true
	});
	sidebartabs.add({
        tabName:'Query People',
        tabNameId:'query_people_id',
        tabNameTemplate:'tabtitle.jst',
        tabContentId:'query_people_cont_id',
        tabContTemplate:'tabcontent.jst',
        listHeaderName:'RESOURCE MANAGEMENT',
        listItemName:'Query People',
        listItemId:'query_people_id',
        listItemTemplate:'listitem.jst',
        active:false,
        showTab:false,
        showListItem:true
	});
});

