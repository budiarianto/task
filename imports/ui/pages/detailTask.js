import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tasks } from '../../api/tasks.js';

import'./detailTask.html';



Template.detailTask.onCreated(function taskListOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');

});

Template.detailTask.helpers({
    tasks() {
    var active = FlowRouter.getParam('_id');
    //console.log(active);
	return Tasks.find({"_id" :active});
	//console.log(active);
   },
});

Template.detailTask.events({
	'click .delete': function(confirmDel){
		var x = confirm("Are you sure you want to delete?");
  		if (x){
      		Meteor.call('Tasks.remove',this._id);
			FlowRouter.go('/taskList');
  		}else{
    		return false;
  		}
	},

	'submit .update-task':function(event,template){
		var x = confirm("Are you sure you want to update?");
		if (x){
			var active = FlowRouter.getParam('_id');
			var newNameTask = template.$('.newNameTask').val();
			var newAgencyTask = template.$('.newAgencyTask').val();
			var newStartTask = template.$('.newStartTask').val();
			var newEndTask = template.$('.newEndTask').val();
			var newStatusTask = template.$('.newStatusTask').val();
			var newPriorityTask = template.$('.newPriorityTask').val();
			var newPicTask = template.$('.newPicTask').val();
			var newAddInfoTask = template.$('.newAddInfoTask').val();

			Tasks.update({_id:active},{$set:{
			agencyTask:newAgencyTask,	
			startTask:newStartTask,
			endTask:newEndTask,
			statusTask:newStatusTask,
			priorityTask:newPriorityTask,
			picTask:newPicTask,
			addInfoTask:newAddInfoTask
			}})
			//==== update
		}else{
			return false;
		}	

	},
});