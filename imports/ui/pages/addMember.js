import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Members } from '../../api/members.js';

import'./addMember.html';

Template.addMember.events({ 
	//===== add
	'submit .new-member'(event){
		event.preventDefault();

	//======get from form
	const target=event.target;
	const nameMember=target.nameMember.value;
	const nickMember=target.nickMember.value;
	const tempatLahirMember=target.tempatLahirMember.value;
	const tglLahirMember=target.tglLahirMember.value;
	const addressMember=target.addressMember.value;
	const hpMember=target.hpMember.value;
	const tlpMember=target.tlpMember.value;
	const emailMember=target.emailMember.value;
	const agamaMember=target.agamaMember.value;
	const statusMember=target.statusMember.value;
	const jabatanMember=target.jabatanMember.value;
	const companyMember=target.companyMember.value;
	const addrsCompanyMember=target.addrsCompanyMember.value;

	//====== INSERT 
	Members.insert({
		nameMember,
		nickMember,
		tempatLahirMember,
		tglLahirMember,
		addressMember,
		hpMember,
		tlpMember,
		emailMember,
		agamaMember,
		statusMember,
		jabatanMember,
		companyMember,
		addrsCompanyMember,
		createdAt: new Date(),
	});

	FlowRouter.go('/memberList');
	
	},
});
