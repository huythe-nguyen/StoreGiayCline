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
      this.rest.post(this.url,this.employee).then(data=>{
        let value = data as { user: string,tokens:string}

        localStorage.setItem('tokens',value.tokens);
        //
        console.log('user', value.user)
        this.router.navigate(['/tat-ca-san-pham'])


      })
      .catch(error=>{
        this.data.error('Incorrect email or password');
        this.btnDisabled=false;
      })
    }
  }


}
