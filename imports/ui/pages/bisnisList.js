import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Bizs } from '../../api/bizs.js';

import'./bisnisList.html';

Template.bisnisList.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('Bizs');
});

Template.bisnisList.helpers({
    Bizs() {
    return Bizs.find({}, { sort: { createdAt: -1 } });
   },
});



