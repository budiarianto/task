import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tasks } from '../../api/tasks.js';

import'./addTask.html';

//=======
Template.addTask.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const nameTask = target.nameTask.value;
    const agencyTask = target.agencyTask.value;
    const startTask = target.startTask.value;
    const endTask = target.endTask.value;
    const statusTask = target.statusTask.value;
    const priorityTask = target.priorityTask.value;
    const picTask = target.picTask.value;
    const addInfoTask = target.addInfoTask.value;

 
    // Insert a task into the collection

    Tasks.insert({
      nameTask,
      agencyTask,
      startTask,
      endTask,
      statusTask,
      priorityTask,
      picTask,
      addInfoTask,
      createdAt: new Date(), 
      });
 
    FlowRouter.go('/taskList');
  },
  
});
