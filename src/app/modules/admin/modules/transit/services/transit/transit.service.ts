import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransitService {

  private url = environment.apiUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  getTranssitFolder() {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/DossierTransit/GetListDossierTransit?departement=&supplier=&numPo=')
  }
  
  getListPOByDepartment(params = {}) {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/PurchaseOrder/GetListPurchaseOrderByDepartement',
    {
      params: params
    })
  }

  getListDepartment() {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/Departement/GetList')
  }

  getListVendor() {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/Vendor/GetList')
  }

  getListPOByDepartmentAndVendor(params = {}) {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/PurchaseOrder/GetListPurchaseOrderByDepartementAndVendor',
    {
      params: params
    })
  }

  getListArticle(params = {}) {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/Article/GetListArticle',
    {
      params: params
    })
  }

  getOneTranssit(numero: string|null) {
    return this.httpClient.get(this.url + '/CustomClearanceAPI/DossierTransit/GetDossierTransit?numeroDossier=' + numero)
  }

  getOnePO(numero: string|null) {
    return this.httpClient.get(this.url + `/CustomClearanceAPI/PurchaseOrder/GetPurchaseOrder?numPo=${numero}`)
  }

  postTransit(data = {}) {
    return this.httpClient.post(this.url + `/CustomClearanceAPI/DossierTransit/CreateDossierTransit`, data)
  }
}
