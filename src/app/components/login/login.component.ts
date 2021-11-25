import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/service/data.service';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee;
  btnDisabled= false;
  url='http://localhost:3000/api/v1/auth/login'
  constructor(private rest:RestApiService,
    private data: DataService,
    private router: Router) {
      this.employee= new Employee;
     }

  ngOnInit() {
  }
  validate(){
    return true;
  }
  async login(){
    this.btnDisabled=true;
    if(this.validate()){
      this.rest.post(this.url,this.employee).then(async(data:any)=>{
        let value = (data as { user: string,token:string})
        console.log(value);
       var token = value.token;
        console.log('tken',atob(token.split('.')[1]));
        localStorage.setItem('tokens',value.token);
        var item = localStorage.getItem('tokens');
  //      await this.data.getProfile();
        console.log('user', item);
        this.router.navigate(['/homes'])


      })
      .catch(error=>{
        this.data.error('Incorrect email or password');
        this.btnDisabled=false;
      })
    }
  }


}
