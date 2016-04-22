import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Products = new Mongo.Collection('Products');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Products', function ProductsPublication() {
    return Products.find();
  });
}

Meteor.methods({
  //===== remove
  'Products.remove'(ProductsId){
    check(Products.string);
    Products.remove(ProductsId);
  }
});










