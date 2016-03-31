
import {Component,DynamicComponentLoader, Injector,Inject,forwardRef} from 'angular2/core';
import {ApiDocService} from '../apidoc.service';
import {ApiDefinition} from '../../model/apidoc';
import {ApiDocDetail} from '../detail/detail';
import {Host} from 'angular2/core';
import {Router} from 'angular2/router';
import {LeftMenu} from '../left-menu/left-menu';
import {ApiMain} from '../main/api.main';
import {PathsObject, OperationObject, DefinitionsObject} from '../../model/apidoc';
import {TypeModal} from '../modals/type.modal';

@Component({
    selector:'doc-list',
    template:require('./list.html'),
    directives:[LeftMenu,TypeModal]
})
export class ApiDocList {
    private apiPath:PathsObject;
    private apiDoc:ApiDefinition;
    private definition:DefinitionsObject;
    constructor(private apiDocService:ApiDocService, @Inject(forwardRef(() => ApiMain)) private apiMain:ApiMain) {
        this.apiPath = new PathsObject();
        this.definition = new DefinitionsObject();
        this.apiDoc = new ApiDefinition();

        this.apiDocService.selectedApi.subscribe((apiPath:PathsObject) => this.apiPath = apiPath);

        apiDocService.getApi().subscribe((apiDoc:ApiDefinition) => this.apiDoc = apiDoc);
    }
    hasStats(index:number):boolean {
        return false;
    }
    goToDetailPage(event:Event,operation:OperationObject):void {
        event.preventDefault();
        this.apiMain.selectDetailMode(operation);
    }
}

