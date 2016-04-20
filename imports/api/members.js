import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';    

export const Members = new Mongo.Collection('Members');

if (Meteor.isServer) {
	// this code only runs
	Meteor.publish('Members',function MembersPublication() {
		return Members.find({},{ sort : { createdAt: -1 }});
	});
}

Meteor.methods({
	//remove
	'Members.remove'(MembersId){
		check(MembersId.string);
		Members.remove(MembersId);
	}
});
