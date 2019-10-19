import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span>&nbsp;</span>
                <span></span>
                <span>{{event.location.city}}, {{event.location.country}}</span>
            </div>
            <button class="btn btn-primary" (click)="handleClickMe()"> CLick Me Mofo!</button>
        </div>     
    `
})

export class EventThumbnailComponent {
    @Input() event: any

    handleClickMe() {
        console.log('mothafukin clicked')
    }
}