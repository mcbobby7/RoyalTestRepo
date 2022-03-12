import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoyalBasicComponent } from './royal-basic/royal-basic.component';
import { RoyalCorporateComponent } from './royal-corporate/royal-corporate.component';


const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent,},
  {path: 'register/royal-basic', component: RoyalBasicComponent},
  {path: 'register/royal-corporate', component: RoyalCorporateComponent},
  {path: 'reset', component: ResetComponent},
  {path: 'dashboard', component: DashboardComponent, data:{header:false} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
