import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Services } from '../../api/service.js';

import './addService.html';

Template.addService.events({
  //==========add bisnis
  'submit .new-service'(event){
    // Prevent default browser form submit
    event.preventDefault();

    // get value from
    const target = event.target;
    const nameService =target.nameService.value;
    const hargaService =target.hargaService.value;
    const keteranganProduct =target.keteranganProduct.value;
    
    // insert 
     Services.insert({
     nameService,
     hargaService,
     keteranganProduct,
     createdAt: new Date(),     
    });

    FlowRouter.go('/serviceList');
  },
});

