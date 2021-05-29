import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Stock from '../shared/model/stock-model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'http://bootcamp-dio.herokuapp.com/bootcamp';

  constructor(private http: HttpClient) { }

  async getStock(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

}
