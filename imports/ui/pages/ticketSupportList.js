import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Supports } from '../../api/supports.js';

import './ticketSupportList.html';

Template.ticketSupportList.onCreated(function ticketSupportOnCreated() {
	this.state = new ReactiveDict();
	Meteor.subscribe('Supports');
});

Template.ticketSupportList.helpers({
	Supports(){
		return Supports.find({},{ sort : {createdAt : -1 }});
	}
});
