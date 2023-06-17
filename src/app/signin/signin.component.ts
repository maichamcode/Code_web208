import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  form = this.fb.group({
    email:[''],
    password:[''],
  })
  constructor (private authService:AuthService, private router:Router, private fb:FormBuilder){}

  onHandleSubmit(){
    if(this.form.valid){
      const product:any = {
        email:this.form.value.email || "",
        password:this.form.value.password || "",
      }
      this.authService.signin(product).subscribe(data=>{
        this.router.navigate(['product'])
      })
    }

  }
}
