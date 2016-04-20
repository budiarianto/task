import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Bizs = new Mongo.Collection('bizs');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Bizs', function BizsPublication() {
    return Bizs.find();
  });
}

Meteor.methods({
	//===== remove
	'Bizs.remove'(BizsId){
		check(Bizs.string);
		Bizs.remove(BizsId);
	}
});
