import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/tokenModel';
import { environment } from '../../environments/environment';
import { LoginModel } from '../models/loginModel';
import jwt_decode  from 'jwt-decode';
import { DecodedToken } from '../models/decodedToken';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterModel } from '../models/registerModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private httpClient: HttpClient, private jwtHelper:JwtHelperService) {
 
  }

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(environment.apiUrl + "auth/login", loginModel)
  }
  register(registerModel: RegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(environment.apiUrl + "auth/register", registerModel)
  }
  isAuthenticated() {
    if (!this.jwtHelper.isTokenExpired(localStorage.getItem("token"))) {
      return true
    }
    else {
      return false
    }
  }
  decodeToken() {
    if (localStorage.getItem("token")) {
      let decodedToken=Object.assign({},this.jwtHelper.decodeToken(localStorage.getItem("token")))
      return decodedToken
    }
  }
}
