import {Component} from 'angular2/core';
import {CourseService} from './course.service'
import {WebService} from './Web.service'
import {AutoGrowDirective} from './Auto-Grow.directive'
@Component({
    selector : 'login',
    templateUrl :'./app/Views/Login.html',
    providers: [CourseService],
    directive: [AutoGrowDirective],
    styleUrls :['./app/Views/Login.css']
})
export class LoginComponent{
    title = "title of courses";
    courses;
    username='';
    password='';
    constructor(private webService: WebService){

    }

    initLogin(){
        console.log('init log in');
        console.log(this.username);
        this.webService.setUserCredentials(this.username, this.password);
    }
}