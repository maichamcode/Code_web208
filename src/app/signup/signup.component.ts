import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms'
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
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
      this.authService.signup(product).subscribe(data=>{
        this.router.navigate(['/'])
      })
      alert("Dang ky thanh cong")
    }
  }
}
