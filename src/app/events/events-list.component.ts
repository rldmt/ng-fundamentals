import { Component } from '@angular/core';
import { SWITCH_IVY_ENABLED__POST_R3__ } from '@angular/core/src/ivy_switch';

@Component({
    selector: 'events-list',
    templateUrl: `./events-list.component.html`
    })

export class EventsListComponent{
    event = {
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}