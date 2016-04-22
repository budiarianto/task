import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Products } from '../../api/product.js';

import './addProduct.html';

Template.addProduct.events({
  //==========add bisnis
  'submit .new-product'(event){
    // Prevent default browser form submit
    event.preventDefault();

    // get value from
    const target = event.target;
    const nameProduct =target.nameProduct.value;
    const hargaProduct =target.hargaProduct.value;
    const dimensiProduct =target.dimensiProduct.value;
    const beratProduct =target.beratProduct.value;
    const warnaProduct =target.warnaProduct.value;
    const keteranganProduct =target.keteranganProduct.value;

    // insert 
     Products.insert({
     nameProduct,
     hargaProduct,
     dimensiProduct,
     beratProduct,
     warnaProduct,
     keteranganProduct,
     createdAt: new Date(),     
    });

    FlowRouter.go('/productList');
  },
});

