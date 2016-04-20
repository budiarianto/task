import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Services = new Mongo.Collection('Services');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Services', function ServicesPublication() {
    return Services.find({}, { sort: { createdAt: -1 } });
  });
}

Meteor.methods({
	//===== remove
	'Services.remove'(ServicesId){
		check(Services.string);
		Services.remove(ServicesId);
	}
}); 

