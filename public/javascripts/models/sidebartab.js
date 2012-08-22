define(['jquery', 'underscore', 'backbone','views/sidebar','views/tabcontent'], function($, _, Backbone,sidebarview, tabcontentview) {
	var SidebarTab = Backbone.Model.extend({
    default:{
        tabName:'flash_tab',
        tabContent:'flash_content',
        listHeaderName:'flash_header',
        listItemName:'flash_list_item',
        active:false,
        showTab:false,
        showListItem:true
    },
    initialize:function() {
        var sidebarView=new sidebarview({model:this})
        this.view=sidebarView; 
        this.set({show:true});
    }
    });
	return SidebarTab;
});

