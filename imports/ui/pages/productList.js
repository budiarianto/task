import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Products } from'../../api/product.js';

import './productList.html';

Template.productList.onCreated(function productListOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('Products');
});

Template.productList.helpers({
    Products() {
    return Products.find({}, { sort: { createdAt: -1 } });
  },
});