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
/*
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Bizs } from '../../api/bizs.js';

import './detailBisnis.html';

Template.detailBisnis.onCreated( function detailBisnisOnCreated() {
	this.state=new ReactiveDict();
	Meteor.subscribe('Bizs');
});

Template.detailBisnis.helpers({
	 Bizs() {
	 	var active = FlowRouter.getParam('_id');
    	return Bizs.find({"_id" : active});
    	//console.log(active);
   },
});

Template.detailBisnis.events({
	'click .delete': function(confirmDel){
		var x = confirm("Are you sure you want to delete?");
  		if (x){
      		Meteor.call('Bizs.remove',this._id);
			FlowRouter.go('/bisnisList');
  		}else{
    		return false;
  		}
	},
});
*/