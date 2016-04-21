import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Supports } from '../../api/supports.js';

import './ticketSupport.html';

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
	
	'change ticketSupport#searchMember'(event){
		var searchMember = template.$('#searchMember').val();
		console.log(searchMember);
	}
});