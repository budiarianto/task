import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Services } from '../../api/service.js';

import './serviceList.html';

Template.serviceList.onCreated(function serviceListOnCreated() {
	this.state = new ReactiveDict();
	Meteor.subscribe('Services');
});

Template.serviceList.helpers({
	Services() {
	return Services.find({},{ sort: { createdAt: -1 } });
	},
});

