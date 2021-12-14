import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/service/data.service';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employee: Employee;
  saving= false;
  url='http://localhost:3000/api/v1/auth/user/register'
  constructor(private rest:RestApiService,
    private data: DataService,
    private router: Router,
    private fb: FormBuilder,) {
      this.employee= new Employee;
     }

  ngOnInit() {
  }
  info = this.fb.group({
    "name":["",[Validators.required,Validators.minLength(2)]],
    "email":["",[Validators.required,Validators.email]],
    "password":["",[Validators.required,Validators.minLength(6),Validators.maxLength(16)]],
  })
  async register(){
    this.saving=true;
    if(this.info.valid){
      this.rest.post(this.url,this.employee)
      .then(data =>{
        this.saving=false;
        this.router.navigate(['/login'])
      }).catch(error =>{
        this.saving =false;
        this.data.error('mess')
      });
    }else{
      window.alert('vui lòng nhập đầy đủ thông tin')
    }
    }

}
