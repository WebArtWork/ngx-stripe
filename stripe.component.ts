import { Component, Input } from '@angular/core';
import { StripeService } from './stripe.service';
import { ChemistryService } from 'src/app/services';
import { HttpService } from 'wacom';



@Component({
	selector: 'stripe',
	templateUrl: './stripe.component.html',
	styleUrls: ['./stripe.component.scss']
})
export class StripeComponent {
	@Input() amount: number;
	invalidError = false
	cardDetailsFilledOut = false
	cardCaptureReady = 1

	setStripeSource(source: stripe.Source) {
		console.log('Stripe Source', source)
		this.http.post("/api/stripe/source", {
			source,
			amount: this.amount
		})
	}
	constructor(

		public st: StripeService,
		public ch: ChemistryService,
		private http: HttpService
	) {

	}

}
