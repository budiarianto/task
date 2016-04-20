import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Digitals } from '../../api/digital.js';

import './addDigital.html';

Template.addDigital.events({
	//====== add 
	'submit .new-digital'(event){
		event.preventDefault();

	// ==== get 
	const target = event.target;
	const nameDigital = target.nameDigital.value;
	const priceDigital = target.priceDigital.value;
	const durationDigital = target.durationDigital.value;	
	const additionalDigital = target.additionalDigital.value;

	//===== insert
	Digitals.insert({
		nameDigital,
		priceDigital,
		durationDigital,
		additionalDigital,
		createdAt: new Date(),
	});

	//==== redirect
	FlowRouter.go('/digitalList');
	},
});
