import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/main-page/services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup
  registerForm: FormGroup
  decodedToken= this.authService.decodeToken()
  name:any
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.createRegisterForm()
    this.decodedToken=this.authService.decodeToken()
    console.log(this.decodedToken)
    console.log(this.name)
  

  
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required]
    })
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required]
    })
  }
  register() {
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value)
      this.authService.register(registerModel).subscribe(response => {
        console.log(response)
        this.toastrService.success(response.message);
      }, responseError => {
        this.toastrService.error(responseError.error.message);
      })
    }
  }
  logout(){
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token")
      this.toastrService.success("Hesabınızdan başarıyla çıkış yaptınız")
    }
  }
  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      let loginModel = Object.assign({}, this.loginForm.value)
      this.authService.login(loginModel).subscribe(response => {
        this.toastrService.success(response.message);
        localStorage.setItem("token", response.data.token)
        this.name=this.decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
      },
        responseError => {
          console.log(responseError)
          this.toastrService.error(responseError.error.message);
        }
      )
    }
  }
  isAuthenticated() {
    return this.authService.isAuthenticated()
  }
}
