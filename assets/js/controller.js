// var $ = require('jquery'),
// 	_ = require('underscore'),
// 	Marionette = require('backbone.marionette'),
// 	LoginView = require('./views/login'),
// 	UserView = require('./views/user'),
//     UsersView = require('./views/users'),
// 	HeaderView = require('./modules/user/views/index'),
// 	HomeView = require('./modules/application/views/index'),
//     AddMaterialsView = require('./modules/application/views/add'),
//     SearchMaterialsView = require('./modules/application/views/search')
//     AddSteelView = require('./views/add_steel'),
//     SteelItems = require('./collections/steel_items'),
//     Orders = require('./collections/orders'),
//     SteelPosts = require('./collections/steel_posts'),
//     SteelTypes = require('./collections/steel_types'),
//     SteelItem = require('./models/steel_item'),
//     SteelOrderView = require('./views/steel_order'),
//     SteelItemsView = require('./views/steel_items'),
//     AccountView = require('./views/account'),
//     OrdersView = require('./views/my_orders'),
//     PostsView = require('./views/my_posts'),
//     SteelEditView = require('./views/steel_edit'),
//     FilterView = require('./views/steel_filter');

// var Controller = Marionette.Controller.extend({
//     initialize : function(){
        
//     },
//     showHeader : function(view){
//         window.App.headerRegion.show(view);
//         //this.filterSteel();
//     },
//     login : function() {
//     	window.App.views.loginView = new LoginView();
//     	var view = window.App.views.loginView;
//     	this.renderView(view);
//     },
//     navHome : function(){
//     	console.log('navHome');
//     	var view = new HomeView();
//         var header = new HeaderView({model : window.App.instance.get('user')});
//         this.showHeader(header);
//     	this.renderView(view);
//     },
//     addMaterials : function(){
//         console.log('addMaterials');
//         var view = new AddMaterialsView();
//         this.renderView(view);
//     },
//     searchMaterials : function(){
//         console.log('search materials');
//         var view = new SearchMaterialsView();
//         this.renderView(view);
//     },
//     // addSteel : function(){
//     //     console.log('AddSteelView');
//     //     var view = new AddSteelView();
//     //     this.renderView(view);
//     // },
//     // searchSteel : function(){
//     //     console.log('search Steel view')
//     //     var steelItems = new SteelItems();
//     //     var view = new SteelItemsView({collection : steelItems});
//     //     this.renderView(view);
//     // },
//     // filterSteel : function(){
//     //     var steelType = new SteelType()
//     //     var view = new FilterView({model : steelType});
//     //     window.App.filterRegion.show(view);
//     // },
//     // orderSteelItem : function(id){
//     //     console.log('order Steel view')
//     //     var steelItem = new SteelItem({
//     //         id : id,
//     //         extension : 'steel_item'
//     //     });
//     //     var view = new SteelOrderView({model : steelItem});
//     //     this.renderView(view);
//     // },
//     // openAccount : function(){
//     //     var view = new AccountView();
//     //     this.renderView(view) 
//     // },
//     // showOrders : function(){
//     //     var orders = new Orders();
//     //     var view = new OrdersView({collection : orders})
//     //     this.renderView(view);
//     // },
//     // showPosts : function(){
//     //     var posts = new SteelPosts();
//     //     var view = new PostsView({collection : posts})
//     //     this.renderView(view);
//     // },
//     // editPost : function(id){
//     //     var steelItem = new SteelItem({
//     //         id : id,
//     //         extension : 'steel_item'
//     //     });
//     //     var view = new SteelEditView({model : steelItem});
//     //     this.renderView(view);
//     // },
//     renderView: function(view) {
//         this.destroyCurrentView(view);
//         window.App.mainRegion.show(view);
        
//     },
//     destroyCurrentView: function(view) {
//         if (!_.isUndefined(window.App.views.currentView)) {
//             window.App.views.currentView.destroy();
//         }
//         window.App.views.currentView = view;
//     }
// });

// module.exports = Controller;