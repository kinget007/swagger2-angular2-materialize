import {Component} from 'angular2/core';
import {LeftMenu} from '../left-menu/left-menu';
import {Router} from 'angular2/router';
import {ApiDocService} from '../apidoc.service';
import {OperationObject,ParameterObject,ApiDefinition} from '../../model/apidoc';
import {Response} from 'angular2/http';
import {TypeModal} from '../modals/type.modal';
import {BodyModal} from '../modals/body-modal';

@Component({
    selector:'doc-detail',
    template:require('./detail.html'),
    directives:[LeftMenu,TypeModal,BodyModal]
})
export class ApiDocDetail {
    operation:OperationObject;
    apiDoc:ApiDefinition;
    constructor(private apiDocService:ApiDocService, private router:Router) {
        this.operation = new OperationObject();
        this.apiDoc = new ApiDefinition();

        apiDocService.selectedDetailApi.subscribe((operation:OperationObject) => this.operation = operation);
        apiDocService.getApi().subscribe((apiDoc:ApiDefinition) => this.apiDoc = apiDoc);
    }
    goToContentPage(event:Event):void {
        event.preventDefault();
        this.router.navigate(['Apis']);
    }
    generateJSON(event:Event,parameter:ParameterObject):void {
        event.preventDefault();
    }
}
