import {Component} from 'angular2/core';
import {CoursesComponent} from './Courses.component'
import {LoginComponent} from './Login.component'
import {HomeComponent} from './Home.component'
import {WebService} from './Web.service'

@Component({
    selector: 'my-app',
    template:
        `<login *ngIf="!webService.LoginStatus()"></login>
         <home *ngIf="webService.LoginStatus()">logged in</home>
        `,
    directives: [LoginComponent,HomeComponent]
})
export class AppComponent {
    constructor(private webService: WebService){

    }
}