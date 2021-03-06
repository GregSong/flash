define(['jquery', 'underscore', 'backbone','views/sidebar','views/tabcontent'], function($, _, Backbone,sidebarview, tabcontentview) {
	var SidebarTab = Backbone.Model.extend({
    default:{
        tabName:'flash_tab',
        tabNameId:'flash_tab_id',
        tabNameTemplate:'tabtitle.jst',
        tabContentId:'flash_content',
        tabContTemplate:'tabcontent.jst',
        listHeaderName:'flash_header',
        listItemName:'flash_list_name',
        listItemId:'flash_list_item_id',
        listItemTemplate:'sidebar.jst',
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

