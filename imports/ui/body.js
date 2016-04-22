import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tasks } from '../api/tasks.js';
import { Bizs } from '../api/tasks.js';
import { Products } from '../api/product.js';

import'./body.html';
import'./router.js';



Template.taskList.onCreated(function taskListOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});

Template.taskList.helpers({
    tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});

Template.bisnisList.onCreated(function bisnisListOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('bizs');
});

Template.bisnisList.helpers({
    Bizs() {
    return Bizs.find({}, { sort: { createdAt: -1 } });
  },
});
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
//==========
Template.addBisnis.events({
	//==========add bisnis
  'submit .new-bisnis'(event){
  	// Prevent default browser form submit
  	event.preventDefault();

  	// get value from
  	const target = event.target;
  	const nameBiz =target.nameBiz.value;
  	const brandBiz =target.brandBiz.value;
  	const addressBiz =target.addressBiz.value;
  	const tlpBiz =target.tlpBiz.value;
  	const faxBiz =target.faxBiz.value;
  	const webBiz =target.webBiz.value;
  	const webmailBiz =target.webmailBiz.value;

  	// insert biz
  	 Bizs.insert({
	   nameBiz,
	   brandBiz,
	   addressBiz,
	   tlpBiz,
	   faxBiz,
	   webBiz,
	   webmailBiz,
	   createdAt: new Date(),  		
  	});

  	FlowRouter.go('/bisnisList');
  },
});

Template.productList.helpers({
    Products() {
    return Products.find({}, { sort: { createdAt: -1 } });
  },
});

Template.addProduct.events({
  //==========add bisnis
  'submit .new-product'(event){
    // Prevent default browser form submit
    event.preventDefault();

    // get value from
    const target = event.target;
    const nameProduct =target.nameProduct.value;
    
    // insert biz
     Products.insert({
     nameProduct,
     createdAt: new Date(),     
    });

    FlowRouter.go('/productList');
  },
});

