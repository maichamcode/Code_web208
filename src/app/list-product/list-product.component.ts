import { Component } from '@angular/core';
import { IProduct } from 'src/interface';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products:IProduct[] = []
  constructor (private productService:ProductService){
    this.productService.getProduct().subscribe(data=>{
      this.products = data
    })
  }
  removeProduct(id:any){
    const xoa = confirm("Ban co muon xoa khong?")
    if(xoa == true){
      alert("Xoa thanh cong")
      this.productService.removeProduct(id).subscribe(data=>{
        this.products = this.products.filter(product=>product.id!==id)
      })
    }else{
      alert("Xoa that bai")
    }
  }
}
