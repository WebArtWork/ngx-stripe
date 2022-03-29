import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { StripeComponent } from './stripe.component';
import { StripeModule as Stripe } from "stripe-angular";
import { environment } from 'src/environments/environment';

@NgModule({
	imports: [
		CoreModule,
		Stripe.forRoot(environment.stripe)
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
