import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Members } from '../../api/member.js';

import './detailMember.html';


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

	'submit .save':function(event,template){
		var x = confirm("Are you sure you want to update?");
		if (x){
			var active = FlowRouter.getParam('_id');
			var newBrandBiz = template.$('.newBrandBiz').val();
			var newAddressBiz = template.$('.newAddressBiz').val();
			var newTlpBiz = template.$('.newTlpBiz').val();
			var newFaxBiz = template.$('.newFaxBiz').val();
			var newWebBiz = template.$('.newWebBiz').val();
			var newWebmailBiz = template.$('.newWebmailBiz').val();

			
			Bizs.update({_id:active},{$set:{brandBiz:newBrandBiz,
			addressBiz:newAddressBiz,
			tlpBiz:newTlpBiz,
			faxBiz:newFaxBiz,
			webBiz:newWebBiz,
			webmailBiz:newWebmailBiz}});
		}else{
    		return false;
  		}
	
			
	},
});

/*
db.inventory.update(
...    { item: "TBD2" },
...    {
...      $set: {
...         details: { "model" : "14Q3", "manufacturer" : "IJK Co." },
...         category: "houseware"
...      }
...    },
...    { upsert: true }
... )
*/
