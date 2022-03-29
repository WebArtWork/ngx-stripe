import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { StripeComponent } from './stripe.component';
import { StripeModule as Stripe } from "stripe-angular";

@NgModule({
	imports: [
		CoreModule,
		Stripe
	],
	declarations: [
		StripeComponent
	],
	exports: [
		StripeComponent
	],
	providers: []
})

export class StripeModule { }
