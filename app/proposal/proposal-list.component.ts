import { Component } from '@angular/core';
import { Proposal } from './proposal';
@Component ({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://testing.com', 
		'Ruby on Rails', 150, 120, 15, 'jchristopher.cato@gmail.com')
	proposalTwo: Proposal = new Proposal(99, 'XZY Company', 'http://testing.com', 
		'Ruby on Rails', 150, 120, 15, 'jchristopher.cato@gmail.com')
	proposalThree: Proposal = new Proposal(300, 'Something Company', 'http://testing.com', 
		'Ruby on Rails', 150, 120, 15, 'jchristopher.cato@gmail.com')
	proposals: Proposal[] = [
		this.proposalOne, this.proposalTwo, this.proposalThree
	]
}