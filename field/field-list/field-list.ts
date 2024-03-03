import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Field } from '../field.interface';

@Component({
    selector: 'app-field-list',
    templateUrl: './field-list.component.html',
    styleUrls: ['./field-list.component.css']
})
export class FieldListComponent implements OnInit {
    
    fields: Field[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.fetchFields();
    }

    fetchFields(): void {
        this.http.get<Field[]>('http://localhost:8000/api/fields')
        .subscribe(fields => {
            this.fields = fields;
        });
    }
}