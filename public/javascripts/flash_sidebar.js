(function($){
    var SideBarLi=Backbone.View.extend({
        tagName:'li',
        template:'',
        events:{
            'click a': 'show'
        },
        initialize:function(){
        },
        render:function(){
        },
        show:function(){
            alert('Show');
        }
    });
    var Plugin=Backbone.Model.extend({
        default:{
            tabName:'Tab'
            ,tabContent:'Tab Content'
            ,headerName:'Header',
            ,liName:'li Name'
            //,html:''
        },
        initialize:function(){
        }
    });

    var Plugins=Backbone.Collection.extend({
        model:Plugin,
        url:'',
        initialize:function(plugins){
            // if plugins is not empty, add plugins to collection
        } 
    });

    var TabsView=Backbone.View.extend({
        el:$('#workTab'),
        initialize:function(){
        },
        events:{
            'click #welTab':'welcome'
        },
        welcome:function(){
            alert('Welcome!!');
        }
    });

    var SideBar=Backbone.View.extend({
        el:$('#sidebar'),
        initialize:function(){
            $('#apply_leave').addClass('active');
            this.active = '#apply_leave';
            this.apply_flag=false;
            this.query_flag=false;
        },
        events:{
            'click #apply_leave':'applyLeave',
            'click #query_leave':'queryLeave'
        },
        applyLeave:function(){
            $('li.active').removeClass('active');
            this.active = '#apply_leave';
            $(this.active).addClass('active');
            if(this.apply_flag == false)
            {
                this.apply_flag=true;
            }
        },
        queryLeave:function(){
            $('li.active').removeClass('active');
            this.active = '#query_leave';
            $(this.active).addClass('active');
            if(this.query_flag == false)
            {
                this.query_flag=true;
            }
        }
        });
    var SidebarTabsView=Backbone.View.extend({
        el:$('#sidebartabs'),
        initialize:function(option){
            this.collection=new Plugins();
            this.sidebar=new SideBar();
            this.tabs=new TabsView();
        },
        events:{
        }
    });
    var sidebartabs=new SidebarTabsView()

})(jQuery);
