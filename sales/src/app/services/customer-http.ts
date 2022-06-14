import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {CustomerModel} from '../models/Customer';
import {ServerResponse} from '../models/app';

@Injectable({
    providedIn: 'root'
})

export class CustomerHttpService {
    private API: string = `${environment.API_USE}`

    constructor(private httpClient: HttpClient){}

    getAllCustomers():Observable<CustomerModel>{
        const url = `${this.API}/customers/all`;
        return this.httpClient.get<ServerResponse>(url)
        .pipe(
            map(response => response.data)
        )
    }

    getCustomer(id):Observable<CustomerModel>{
        const url = `${this.API}/customers/customer/${id}`;
        return this.httpClient.get<ServerResponse>(url)
        .pipe(
            map(response => response.data)
        )
    }

    addCustomer(customer:CustomerModel):Observable<ServerResponse>{
       const url = `${this.API}/customers/add`;
       return this.httpClient.post<ServerResponse>(url, customer)
       .pipe(
        map(response => {
            return response.data;
        })
       )
    }

    update(customer:CustomerModel, id):Observable<ServerResponse>{
        const url = `${this.API}/customers/update/${id}`;
        return this.httpClient.put<ServerResponse>(url, customer)
        .pipe(
            map(response=> {
                return response.data;
            })
        )
    }
}