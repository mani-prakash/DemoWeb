import {Component} from 'angular2/core';
import {CourseService} from './course.service'
import {WebService} from './Web.service'
import {AutoGrowDirective} from './Auto-Grow.directive'
@Component({
    selector : 'inventory',
    templateUrl :'./app/Views/Inventory.html',
    providers: [CourseService],
    directive: [AutoGrowDirective],
    styleUrls :['./app/Views/Home.css']
})
export class InventoryComponent{
    recievedDate = '';
    deliveryDate = '';
    id = '';
    status = '';
    items = [{'recievedDate' : '02-03-2017', deliveryDate : '02-03-2017', 'id' : 'xyz' , status : 'isStore' }];
    constructor(private webService: WebService){

    }

    addItem(){
        this.items.push({recievedDate : this.recievedDate, deliveryDate : this.deliveryDate, 'id' : this.id , status : this.status });
        this.recievedDate = '';
        this.deliveryDate = '';
        this.id = '';
        this.status = '';
    }
}