var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var apidoc_service_1 = require('../apidoc.service');
var apidoc_1 = require('../../model/apidoc');
var pipes_1 = require('../../pipes/pipes');
var router_1 = require('angular2/router');
var LeftMenu = (function () {
    function LeftMenu(apiDocService, router) {
        this.apiDocService = apiDocService;
        this.router = router;
        this.apiDoc = new apidoc_1.ApiDefinition();
    }
    LeftMenu.prototype.ngOnInit = function () {
        var _this = this;
        this.apiDocService.getApi().subscribe(function (apiDoc) { return _this.apiDoc = apiDoc; });
    };
    LeftMenu.prototype.onSelectApi = function (event, index) {
        event.preventDefault();
        this.router.navigate(['ApiDocList', { path: index + 1 }]);
    };
    LeftMenu = __decorate([
        core_1.Component({
            selector: 'left-menu',
            template: require('./left-menu.html'),
            pipes: [pipes_1.ValuesPipe, pipes_1.CountPipe]
        }), 
        __metadata('design:paramtypes', [apidoc_service_1.ApiDocService, router_1.Router])
    ], LeftMenu);
    return LeftMenu;
})();
exports.LeftMenu = LeftMenu;
//# sourceMappingURL=left-menu.js.map