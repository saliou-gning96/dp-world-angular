import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DouaneService {

  private url = environment.apiUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  getTranssitFolder(params = {}) {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/DossierTransit/GetListDossierTransit',
    {
      params: params
    })
  }

  getDouaneFolder(params = {}) {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/DossierDouane/GetListDossierDouane',
    {
      params: params
    })
  }

  getListDepartment() {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/Departement/GetList')
  }

  getListArticle(params = {}) {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/Article/GetListArticle',
    {
      params: params
    })
  }
}
