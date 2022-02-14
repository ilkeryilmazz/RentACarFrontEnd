import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { BodyComponent } from './components/body/body.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AppRoutingModule } from '../app/app-routing.module';
import { RentComponent } from './components/rent/rent.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    BodyComponent,
    AuthComponent,
    RentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
    ToastrModule.forRoot({
      positionClass:"toast-center-center"
    })
  ],
  providers:[{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},  JwtHelperService,],
  exports:[
    IndexComponent
  ]
})
export class MainPageModule { }
