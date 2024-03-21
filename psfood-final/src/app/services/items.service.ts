import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

interface ApiResponse {
  message: string;
  data: any; // Change this to the actual type of your data
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  bookEvent(eventData: any): Observable<ApiResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<ApiResponse>(`${this.apiUrl}/book-event`, eventData, { headers });
  }
}
