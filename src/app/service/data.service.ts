import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly http = inject(HttpClient);
  private jsonUrl = "/FrontendMentor_ProductListWithCart_5MmqLVAp_d/data/data.json";

  constructor() { 
    this.getData();
  }

  public getData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
