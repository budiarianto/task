import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Members } from '../../api/members.js';
import { Supports } from '../../api/supports.js';

import './ticketSupport.html';
Template.ticketSupport.helpers({
	Members() {
		var id = FlowRouter.getParam('_id');
		console.log(id);
		document.getElementById("demo").innerHTML =id;
    	//return Members.find({"_id" : id});
	}
});

Template.ticketSupport.events({
	'submit #new-ticket'(event){
		const target = event.target;
		const catagoryTicket=target.catagoryTicket.value;
		const commentTicket=target.commentTicket.value;
		const statusTicket=target.statusTicket.value;

		Supports.insert({
			catagoryTicket,
			commentTicket,
			statusTicket,
			createdAt: new Date(), 
		});
	},

	'keyup #searchMember'(event,template){
		var searchMember = template.$('#searchMember').val();
		//console.log('/ticketSupport/'+searchMember);
		
		//var member =["Saab", "Volvo", "BMW"]; 
		//var member = Members.find({"nameMember" : /searchMember/});
		//console.log(member);
		//document.getElementById("demo").innerHTML =member+"tes<br>";
		FlowRouter.go('/ticketSupport/'+searchMember);


	}
});
