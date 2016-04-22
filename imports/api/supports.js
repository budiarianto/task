import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Supports = new Mongo.Collection('Supports');

if (Meteor.isServer) {
	// this code only runs on the server
	Meteor.publish('Supports', function SupportsPublication() {
		return Supports.find({}, { sort: { createdAt: -1 }});
	});
}

Meteor.methods({
	//=== remove
	'Supports.remove'(SupportsId){
		check(Supports.string);
		Supports.remove(SupportsId);
	}
});
