import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from "@angular/core";
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from "../shared/event.model";
import { By } from "@angular/platform-browser";
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared';
import { CollapsibleWell } from 'src/app/common';

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement

    beforeEach(async(() => {
        let mockAuthService = [];
        let mockVoterService = {};

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWell
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: []
        })
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('initial display', () => {

        it('should have the correct session title', () => {
            component.sessions = [{ id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob'] }];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
        })
    })
})