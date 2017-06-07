System.register(['angular2/core', './course.service', './Web.service', './Auto-Grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_service_1, Web_service_1, Auto_Grow_directive_1;
    var InventoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (Web_service_1_1) {
                Web_service_1 = Web_service_1_1;
            },
            function (Auto_Grow_directive_1_1) {
                Auto_Grow_directive_1 = Auto_Grow_directive_1_1;
            }],
        execute: function() {
            InventoryComponent = (function () {
                function InventoryComponent(webService) {
                    this.webService = webService;
                    this.recievedDate = '';
                    this.deliveryDate = '';
                    this.id = '';
                    this.status = '';
                    this.items = [{ 'recievedDate': '02-03-2017', deliveryDate: '02-03-2017', 'id': 'xyz', status: 'isStore' }];
                }
                InventoryComponent.prototype.addItem = function () {
                    this.items.push({ recievedDate: this.recievedDate, deliveryDate: this.deliveryDate, 'id': this.id, status: this.status });
                    this.recievedDate = '';
                    this.deliveryDate = '';
                    this.id = '';
                    this.status = '';
                };
                InventoryComponent = __decorate([
                    core_1.Component({
                        selector: 'inventory',
                        templateUrl: './app/Views/Inventory.html',
                        providers: [course_service_1.CourseService],
                        directive: [Auto_Grow_directive_1.AutoGrowDirective],
                        styleUrls: ['./app/Views/Home.css']
                    }), 
                    __metadata('design:paramtypes', [Web_service_1.WebService])
                ], InventoryComponent);
                return InventoryComponent;
            }());
            exports_1("InventoryComponent", InventoryComponent);
        }
    }
});
//# sourceMappingURL=Inventory.component.js.map