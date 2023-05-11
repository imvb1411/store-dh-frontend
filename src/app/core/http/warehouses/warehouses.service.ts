import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WarehouseCreatedResponse, WarehouseResponse } from './warehouse.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehousesService {

  constructor(private http: HttpClient) { }

  baseUrl: string = `${environment.apiUrl}/warehouses`

  baseHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });
  
  list(responseType?: 'json'): Observable<WarehouseResponse[]> {
    return this.http.get<WarehouseResponse[]>(this.baseUrl, {
      headers: this.baseHeaders,
      responseType: responseType,
    });
  }

  create(body: any, params?: HttpParams): Observable<WarehouseCreatedResponse> {
    return this.http.post<WarehouseCreatedResponse>(this.baseUrl, body, {
      headers: this.baseHeaders,
      params: params,
    });
  }

  update(id: number, body: any): Observable<WarehouseCreatedResponse> {
    return this.http.put<WarehouseCreatedResponse>(`${this.baseUrl}/${id}`, body, {
      headers: this.baseHeaders,
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {
      headers: this.baseHeaders,
    });
  }
}
