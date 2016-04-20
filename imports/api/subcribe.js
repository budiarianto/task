import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Subcribes = new Mongo.Collection('Subcribes');

if (Meteor.isServer) {
	// this code only runs on the server
	Meteor.publish('Subcribes', function SubcribesPublication() {
		return Subcribes.find({}, { sort: { createdAt: -1 }});
	});
}

Meteor.methods({
	//=== remove
	'Subcribes.remove'(SubcribesId){
		check(Subcribes.string);
		Subcribes.remove(SubcribesId);
	}
});
