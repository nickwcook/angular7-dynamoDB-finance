import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-delete-invoice-dialog',
	template: `
		<p class="mat-h4">Delete Invoice</p>

		<br>
		
		<div mat-dialog-content>
		
			<p>Are you sure you want to delete this invoice? This action cannot be undone.</p>
		
		<br>
		
		</div>
		
		<mat-dialog-actions align="end">
		
			<button mat-button mat-dialog-close="false">Cancel</button>
		
			<button mat-raised-button mat-dialog-close="true" color="warn">Confirm Deletion</button>
		
		</mat-dialog-actions>
	`
})

export class DeleteInvoiceDialogComponent implements OnInit {

	constructor() {

	}

	ngOnInit() {

	}

}