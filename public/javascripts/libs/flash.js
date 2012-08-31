define(['jquery', 'underscore', 'backbone'], function($, _, backbone) {
	//var mainJST=require('text!templates/main.jst');
	//var compiled_template=_.template(mainJST);
	//$('body').data=$(compiled_template());
	var moduleTabView = backbone.View.extend({
		initialize: function() {
			console.log('Module Tab View');
		}
	var moduleContentView = backbone.View.extend({
		initialize: function() {
			console.log('Module Content View');
		}
	});
	var moduleModel = backbone.Model.extend({
	default:
		{
			/* module start */
			parentModuleName:
			'',
			moduleName: '',
			/* module over */
			/* side bar start */
			moduleListTemplate: '',
			/* side bar over */
			/* content start */
			moduleContentTemplate: '',
			/* content over */
			/* status start*/
			active: false,
			/* status over*/
		},
		initialize: function() {
			console.log('Module Model');
		}
	});

	var moduleCollection = backbone.Collection.extend({
		model: moduleModel,
		initialize: function() {
			console.log('Module Collections');
		},
	});

	var mainView = backbone.View.extend({
		initialize: function() {
			console.log('Main View');
		}
	});
	return mainView;
});

