import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    http: HttpClient = inject(HttpClient);

    public baseAPIUrl = 'https://icherniakov.ru/yt-course'

    getTestAccounts() {
        return this.http.get<any[]>(`${this.baseAPIUrl}/account/test-accounts`);
    }
}
