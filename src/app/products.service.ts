import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:any='http://localhost:3000/Products';
  constructor(private http: HttpClient) { }
  
  
  getAllProduct(){
   return this.http.get(this.url)
  }
  savedata(data:any){
    return this.http.post<any>(this.url,data)
  }
  deletedata(id:any){
    return this.http.delete<any>(`${this.url}/${id}`);
  }
  getProductById(id:Number){
    return this.http.get(`${this.url}/${id}`)
  }
}
