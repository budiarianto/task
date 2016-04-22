import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Bizs } from '../../api/bizs.js';


import'./addBisnis.html';
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

    //console.log("oke");
  },
});