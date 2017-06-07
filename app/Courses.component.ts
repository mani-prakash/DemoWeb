import {Component} from 'angular2/core';
import {CourseService} from './course.service'
import {AutoGrowDirective} from './Auto-Grow.directive'
@Component({
    selector : 'courses',
    template :
        `<h2> Courses </h2>
         <h3>{{ title }}</h3>
            <input style="width: 20px;" autoGrow />
            <ul>
                <li *ngFor="#course of courses">
                    {{ course }}
                </li>
            </ul>
        `,
    providers: [CourseService],
    directive: [AutoGrowDirective]
})
export class CoursesComponent{
    title = "title of courses";
    courses;
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}