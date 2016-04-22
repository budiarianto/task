import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Products } from '../../api/product.js';

import'./detailProduct.html';

Template.detailProduct.onCreated( function detailProductOnCreated() {
	this.state=new ReactiveDict();
	Meteor.subscribe('Products');
});

Template.detailProduct.helpers({
	Products() {
		var id = FlowRouter.getParam('_id');
    	return Products.find({"_id" : id});
    },
});

Template.detailProduct.events({
	'click .delete': function(confirmDel){
		var x = confirm("Are you sure you want to delete?");
  		if (x){
      		Meteor.call('Products.remove',this._id);
			FlowRouter.go('/productList');
  		}else{
    		return false;
  		}
	},
});
