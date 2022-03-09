import { Injectable } from '@angular/core';
import { AtivosModel } from '../pages/ativos';
import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'any'
})
export class DadosService {

    private URL = "http://localhost:3000/ativos";

    constructor(private http: HttpClient) { }

    public getData() {
        return this.http.get(this.URL);
    }

}
