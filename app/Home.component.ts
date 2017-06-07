import {Component} from 'angular2/core';
import {CourseService} from './course.service'
import {WebService} from './Web.service'
import {AutoGrowDirective} from './Auto-Grow.directive'
import {InventoryComponent} from './Inventory.component'
@Component({
    selector : 'home',
    templateUrl :'./app/Views/Home.html',
    providers: [CourseService],
    directive: [AutoGrowDirective],
    styleUrls :['./app/Views/Home.css'],
    directives: [InventoryComponent]
})
export class HomeComponent{
    title = "title of courses";
    courses;
    username='';
    password='';
    menuClass = [];
    submenu = [[],[],[],[],[]];
    menu = 0;
    constructor(private webService: WebService){

    }

    setMenuSelection(val){
        console.log(val);
        for( var i = 0; i <= 4; i++ )
        {
            this.menuClass[i] = "";
        }
        this.menuClass[val] = "active";
        this.menu = val;
    }

    setSubMenu(menu, submenu)
    {
        for( var i = 0; i <= 8 ; i++ )  this.submenu[menu][i] = false;
        this.submenu[menu][submenu] = true;
    }

    initLogin(){
        console.log('init log in');
        console.log(this.username);
        this.webService.setUserCredentials(this.username, this.password);
    }
}