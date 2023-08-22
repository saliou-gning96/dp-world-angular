import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.apiUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  login(params = {}) {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/Utilisateur/Authenticate',
    {
      params: params
    })
  }
}
