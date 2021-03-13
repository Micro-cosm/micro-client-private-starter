

import { environment		} from '../../environments/environment';
import { AngularFireAuth	} from '@angular/fire/auth';
import { Component 			} from '@angular/core';
import { User 				} from '../_models/user';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})

export class HomeComponent {
	env:	any;
	auth:	any;
	loggedIn	= false;
	title		= 'micro-client-private-starter';
	
	constructor( private fireAuth: AngularFireAuth ) { this.env = environment; }
	
	ngOnInit(): void {
		this.fireAuth.authState.subscribe(auth => {
			this.auth = auth;
			console.log( '>> HomeComponent -> authState change:', auth );
			this.loggedIn = ! auth === null;
		});
	}
}
