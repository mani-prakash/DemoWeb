System.register(['angular2/core', './course.service', './Web.service', './Auto-Grow.directive', './Inventory.component'], function(exports_1, context_1) {
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
    var core_1, course_service_1, Web_service_1, Auto_Grow_directive_1, Inventory_component_1;
    var HomeComponent;
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
            },
            function (Inventory_component_1_1) {
                Inventory_component_1 = Inventory_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(webService) {
                    this.webService = webService;
                    this.title = "title of courses";
                    this.username = '';
                    this.password = '';
                    this.menuClass = [];
                    this.submenu = [[], [], [], [], []];
                    this.menu = 0;
                }
                HomeComponent.prototype.setMenuSelection = function (val) {
                    console.log(val);
                    for (var i = 0; i <= 4; i++) {
                        this.menuClass[i] = "";
                    }
                    this.menuClass[val] = "active";
                    this.menu = val;
                };
                HomeComponent.prototype.setSubMenu = function (menu, submenu) {
                    for (var i = 0; i <= 8; i++)
                        this.submenu[menu][i] = false;
                    this.submenu[menu][submenu] = true;
                };
                HomeComponent.prototype.initLogin = function () {
                    console.log('init log in');
                    console.log(this.username);
                    this.webService.setUserCredentials(this.username, this.password);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: './app/Views/Home.html',
                        providers: [course_service_1.CourseService],
                        directive: [Auto_Grow_directive_1.AutoGrowDirective],
                        styleUrls: ['./app/Views/Home.css'],
                        directives: [Inventory_component_1.InventoryComponent]
                    }), 
                    __metadata('design:paramtypes', [Web_service_1.WebService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=Home.component.js.map