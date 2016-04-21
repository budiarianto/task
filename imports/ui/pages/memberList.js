import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Members } from '../../api/members.js';


import './memberList.html';

Template.memberList.onCreated(function membersOnCreated() {
	this.state = new ReactiveDict();
	Meteor.subscribe('Members');
});

Template.memberList.helpers({
	Members() {
		return Members.find({},{sort : { createdAt : -1 } });
	},
});
