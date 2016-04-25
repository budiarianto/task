import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Members } from '../../api/members.js';
import { Supports } from '../../api/supports.js';


import './ticketSupport.html';

Template.ticketSupport.onCreated(function membersOnCreated() {
	this.state = new ReactiveDict();
	Meteor.subscribe('Members');
});

Template.ticketSupport.helpers({
	Members() {
	var search =FlowRouter.getQueryParam('search');
	console.log(search);	
	return Members.find({nameMember : /s/});
	},
});
/*
var search = FlowRouter.getQueryParam('search');
		console.log(search);
		*/
Template.ticketSupport.events({
	'submit #new-ticket'(event){
		const target = event.target;
		const catagoryTicket=target.catagoryTicket.value;
		const commentTicket=target.commentTicket.value;
		const statusTicket=target.statusTicket.value;

		Supports.insert({
			catagoryTicket,
			commentTicket,
			statusTicket,
			createdAt: new Date(), 
		});
	},

	'keyup #searchMember'(event,template){
		var searchMember = template.$('#searchMember').val();
		console.log(searchMember);
		
		//var member =["Saab", "Volvo", "BMW"]; 
		//var member = Members.find({"nameMember" : /searchMember/}).count();
		//console.log(member);

		//document.getElementById("demo").innerHTML =member;
		/* FlowRouter.go('/ticketSupport/'+searchMember);

		if (searchMember=="") {
		    document.getElementById("demo").innerHTML="";
		    return;
		  } 
		  if (window.XMLHttpRequest) {
		    // code for IE7+, Firefox, Chrome, Opera, Safari
		    xmlhttp=new XMLHttpRequest();
		  } else { // code for IE6, IE5
		    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  xmlhttp.onreadystatechange=function() {
		    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		      document.getElementById("demo").innerHTML=xmlhttp.responseText;
		    }
		  }
		  xmlhttp.open("GET","/ticketSupport/"+searchMember,true);
		  xmlhttp.send(); */


	}
});
