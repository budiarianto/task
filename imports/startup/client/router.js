import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/default.js';


import'../../ui/pages/notFound.js';
//====== DASHBOARD
import'../../ui/pages/dashboard.js';
//=======TASK 
import'../../ui/pages/taskList.js';
import'../../ui/pages/addTask.js';
import'../../ui/pages/detailTask.js';

//====== BISNIS 
import'../../ui/pages/bisnisList.js';
import'../../ui/pages/addBisnis.js';
import'../../ui/pages/detailBisnis.js';

//====== PRODUCT
import'../../ui/pages/productList.js';
import'../../ui/pages/addProduct.js';
import'../../ui/pages/detailProduct.js';

//========SERVICE 
import'../../ui/pages/serviceList.js';
import'../../ui/pages/addService.js';

//======== DIGITAL
import'../../ui/pages/digitalList.js';
import'../../ui/pages/addDigital.js';

//======== SUBCRIBE
import'../../ui/pages/subcribeList.js';
import'../../ui/pages/addSubcribe.js';

//=== USER
import'../../ui/pages/userList.js';

//======== MEMBER
import'../../ui/pages/memberList.js';
import'../../ui/pages/addMember.js';
import'../../ui/pages/detailMember.js';

///===== NOT FOUND
import'../../ui/pages/notFound.html';

//===== CC
import'../../ui/pages/dashCC.js';
import'../../ui/pages/ticketSupport.js';

FlowRouter.route('/', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('default', {content: 'dashboard' });
  },
});

FlowRouter.route('/taskList', {
  name: 'taskList',
  action() {
    BlazeLayout.render('default', { content: 'taskList' });
  },
});

FlowRouter.route('/addTask', {
  name: 'addTask',
  action() {
    BlazeLayout.render('default', { content: 'addTask' });
  },
});

FlowRouter.route('/detailTask/:_id', {
  name: 'detailTask',
  action(params, queryParams) {
  BlazeLayout.render('default', { content: 'detailTask' });
  }
});

//========= BISNIS ==============================

FlowRouter.route('/bisnisList', {
  name: 'bisnisList',
  action() {
    BlazeLayout.render('default', { content: 'bisnisList' });
  },
});

FlowRouter.route('/addBisnis', {
  name: 'addBisnis',
  action() {
    BlazeLayout.render('default', { content: 'addBisnis' });
  },
});

FlowRouter.route('/detailBisnis/:_id', {
  name: 'detailBisnis',
  action(params, queryParams) {
    BlazeLayout.render('default', { content: 'detailBisnis' });
  },
}); 
//================ PRODUCT

FlowRouter.route('/productList',{
  name: 'productList',
  action() {
    BlazeLayout.render('default', { content: 'productList' });
  },
});

FlowRouter.route('/addProduct',{
  name: 'addProduct',
  action() {
    BlazeLayout.render('default', { content: 'addProduct' });
  },
});

FlowRouter.route('/detailProduct/:_id',{
  name: 'detailProduct',
  action(params, queryParams) {
    BlazeLayout.render('default', { content: 'detailProduct' });
  },
});

//============== SERVICE

FlowRouter.route('/serviceList',{
  name: 'serviceList',
  action() {
    BlazeLayout.render('default', { content: 'serviceList' });
  },
});

FlowRouter.route('/addService',{
  name: 'addService',
  action() {
    BlazeLayout.render('default', { content: 'addService' });
  },
});
//============== DIGITAL

FlowRouter.route('/digitalList',{
  name: 'digitalList',
  action() {
    BlazeLayout.render('default', { content: 'digitalList' });
  },
});

FlowRouter.route('/addDigital',{
  name: 'addDigital',
  action() {
    BlazeLayout.render('default', { content: 'addDigital' });
  },
});


//============= SUBCRIBE

FlowRouter.route('/subcribeList',{
  name: 'subcribeList',
  action() {
    BlazeLayout.render('default', { content: 'subcribeList' });
  },
});

FlowRouter.route('/addSubcribe',{
  name: 'addSubcribe',
  action() {
    BlazeLayout.render('default', { content: 'addSubcribe' });
  },
});

//============= USER

FlowRouter.route('/userList',{
  name: 'userList',
  action() {
    BlazeLayout.render('default', { content: 'userList' });
  },
});

//============== MEMBER

FlowRouter.route('/memberList',{
  name: 'memberList',
  action() {
    BlazeLayout.render('default', { content: 'memberList' });
  },
});

FlowRouter.route('/addMember',{
  name: 'addMember',
  action() {
    BlazeLayout.render('default', { content: 'addMember' });
  },
});

FlowRouter.route('/detailMember/:_id',{
  name: 'detailMember',
  action() {
    BlazeLayout.render('default', { content: 'detailMember' });
  },
});

//============== NOT FOUND
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('default', { main: 'notFound' });
  },
};
//============= dashCC
FlowRouter.route('/dashCC',{
  name: 'dashCC',
  action() {
    BlazeLayout.render('default', { content: 'dashCC' });
  },
});

FlowRouter.route('/ticketSupport',{
  name: 'ticketSupport',
  action() {
    BlazeLayout.render('default', { content: 'dashCC',subContent:'ticketSupport' });
  },
});

FlowRouter.route('/overView',{
  name: 'overView',
  action() {
    BlazeLayout.render('default', { content: 'dashCC',subContent:'' });
  },
});