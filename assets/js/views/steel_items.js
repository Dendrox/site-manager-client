// var $ = require('jquery')
// 	Marionette = require('backbone.marionette'),
//     SteelItemView = require('./steel_item'),
//     Template = require('../templates/steel_filter.hbs'),
//     SteelTypes = require('../collections/steel_types'),
//     SteelType = require('../models/steel_type');



// SteelItemsView = Marionette.CollectionView.extend({
// 	tagname : 'div',
// 	childView : SteelItemView,
// 	initialize : function(){
// 		$('#filter-view').show();
// 		var self = this;
// 		this.collection.fetch()
// 		.done(function(response){
// 			self.all_items = self.collection;
// 			console.log('coll',self.collection)
// 			self.showFilter();
// 		})
// 		.fail(function(response){
// 			console.log(response)
// 		})
// 	},
// 	showFilter : function(){
// 		this.filters = new SteelTypes()
// 		this.filters.on('change', this.filterByType, this);
// 		this.filters.on('change:section', this.filterBySection, this);
// 		var view = new FilterView({collection : this.filters})
// 		window.App.filterRegion.show(view);
// 	},
// 	filterByType : function(options){

// 		this.collection.each(function(model){
// 			model.set({
// 				filter : false,
// 				'filter-section' : false
// 			});

// 			if(options){
// 				if(model.get('type') !== options.get('type')){
// 					model.set({filter : true});
// 				}// end if
// 			}// end if
// 		});

// 		this.render(this.collection)
// 	},
// 	filterBySection : function(section){
// 		this.collection.each(function(model){
			
// 			model.set({'filter-section' : false});

// 			if(section){
// 				if(model.get('section') !== section){
// 					model.set({'filter-section' : true});
// 				}// end if
// 			}// end if
// 		});

// 		this.render(this.collection)
// 	},
// 	destroy : function(){
// 		console.log('close')
// 		$('#filter-view').hide();
// 	}
// });

// var FilterView = Marionette.ItemView.extend({
// 	id : 'filter-view',
// 	tagName : 'div',
// 	className : 'filter-container',
// 	template : Template,
// 	events : {
// 		'change select#type-filter' : 'filterByType',
// 		'change select#section-filter' : 'filterBySection',
// 	},
// 	initialize : function(){
// 		var self = this;
// 		this.collection.fetch().done(function(response){
// 			self.getAllTypes();
// 		});
// 	},
// 	getAllTypes : function(){
// 		this.model = new SteelType();
// 		var typesArray = [];
// 		this.collection.each(function(model){
// 		 	typesArray.push(model.get('type'));
// 	    });
// 		this.model.set({'types' : typesArray});
// 		this.render(this.model);
// 	},
// 	filterByType : function(e){
// 		var selectedType = $(e.currentTarget).val()

// 		var _this = this;

// 		if($(e.currentTarget).context.value == ''){
// 			this.collection.trigger('change')
// 			return this.getAllTypes();
// 		}

// 		this.collection.each(function(model){
				
// 		 	if(model.get('type') === selectedType)
// 		 		_this.model = model
// 	    });

// 	    this.render(this.model);
// 	    this.collection.trigger('change', this.model);
// 	},
// 	filterBySection : function(e){
// 		var selectedSection = $(e.currentTarget).val();

// 		this.collection.trigger('change:section', selectedSection)
// 	}
	
// });

// module.exports = SteelItemsView;