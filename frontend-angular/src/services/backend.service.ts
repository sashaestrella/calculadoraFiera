import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class BackendService {
    constructor(private http: HttpClient) {}

    private URL = environment.backendUrl;

    postDato(dato: any): Observable<any> {
        return this.http.post<any>(`${this.URL}/agregarDato`, dato)
    }
      
    getDatos(): Observable<any[]> {
        return this.http.get<any[]>(`${this.URL}/obtenerDatos`);
    }
}  