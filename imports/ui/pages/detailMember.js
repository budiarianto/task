import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Members } from '../../api/members.js';

import './detailMember.html';

Template.detailMember.onCreated( function detailMemberOnCreated() {
	this.state=new ReactiveDict();
	Meteor.subscribe('Members');
});

Template.detailMember.helpers({
	Members() {
		var id = FlowRouter.getParam('_id');
    	return Members.find({"_id" : id});
	}
});

Template.detailMember.events({
	'click .delete': function (confirmDelete){
		var x = confirm ("Are you sure want to delete?");
		if (x){
			Meteor.call('Members.remove',this._id);
			FlowRouter.go('/memberList')
		}else{
			return false;
		}	
	},

	'click .save':function (event,template){
		var x = confirm ("Are you sure want to update ?");
		if(x){
			var id = FlowRouter.getParam('_id');
			var newNameMember = template.$('#newNameMember').val();
			var newNickMember = template.$('#newNickMember').val();
			var NewTLahirMember = template.$('#NewTLahirMember').val();
			var newTglLahirMember = template.$('#newTglLahirMember').val();
			var newAddressMember = template.$('#newAddressMember').val();
			var NewHpMember = template.$('#NewHpMember').val();
			var newTlpMember = template.$('#newTlpMember').val();
			var newEmailMember = template.$('#newEmailMember').val();
			var newAgamaMember = template.$('#newAgamaMember').val();
			var newStatusMember = template.$('#newStatusMember').val();
			var newJabatanMember = template.$('#newJabatanMember').val();
			var newCompanyMember = template.$('#newCompanyMember').val();
			var newAddrsCompanyMember = template.$('#newAddrsCompanyMember').val();

			Members.update({_id:id},{$set:{
				nameMember:newNameMember,
				nickMember:newNickMember,
				tempatLahirMember:NewTLahirMember,
				tglLahirMember:newTglLahirMember,
				addressMember:newAddressMember,
				hpMember:NewHpMember,
				tlpMember:newTlpMember,
				emailMember:newEmailMember,
				agamaMember:newAgamaMember,
				statusMember:newStatusMember,
				jabatanMember:newJabatanMember,
				companyMember:newCompanyMember,
				addrsCompanyMember:newAddrsCompanyMember,
			}});

		}else{
			return false;
		}
	}

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
