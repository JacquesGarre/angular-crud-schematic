import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { <%= capitalizedEntity %> } from '../<%= entity %>.interface';

@Component({
    selector: 'app-<%= entity %>-list',
    templateUrl: './<%= entity %>-list.component.html',
    styleUrls: ['./<%= entity %>-list.component.css']
})
export class <%= capitalizedEntity %>ListComponent implements OnInit {
    
    <%= entity %>s: <%= capitalizedEntity %>[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.fetch<%= capitalizedEntity %>s();
    }

    fetch<%= capitalizedEntity %>s(): void {
        this.http.get<<%= capitalizedEntity %>[]>('<%= apiEndpoint %>')
        .subscribe(<%= entity %>s => {
            this.<%= entity %>s = <%= entity %>s;
        });
    }
}