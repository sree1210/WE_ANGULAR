import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { ShowempComponent } from './showemp/showemp.component';
import { ExpPipe } from './exp.pipe';
import { GenderPipe } from './gender.pipe';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { HrhomepageComponent } from './hrhomepage/hrhomepage.component';


@NgModule({
  declarations: [   //components and pipes
    AppComponent,
    DemoComponent,
    LoginComponent,
    ShowempComponent,
    ExpPipe,
    GenderPipe,
    HeaderComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    PagenotfoundComponent,
    RegisterComponent,
    HrhomepageComponent
  ],
  imports: [    //modules
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],  //services
  bootstrap: [AppComponent]
})
export class AppModule { }
