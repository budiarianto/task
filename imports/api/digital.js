import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Digitals = new Mongo.Collection('Digitals');

if (Meteor.isServer) {
	// this code only runs on the server
	Meteor.publish('Digitals', function DigitalsPublication() {
		return Digitals.find({}, { sort: { createdAt: -1 }});
	});
}

Meteor.methods({
	//=== remove
	'Digitals.remove'(DigitalsId){
		check(Digitals.string);
		Services.remove(DigitalsId);
	}
});
