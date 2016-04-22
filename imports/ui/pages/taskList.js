import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tasks } from '../../api/tasks.js';

import'./taskList.html';



Template.taskList.onCreated(function taskListOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});

Template.taskList.helpers({
    tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 } });
    
  },

});
