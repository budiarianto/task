import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({}, { sort: { createdAt: -1 } });
  });
}

Meteor.methods({
	//===== remove
	'Tasks.remove'(TasksId){
		check(TasksId.string);

		Tasks.remove(TasksId);
	}
});






