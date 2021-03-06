import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { SoruEkleComponent } from './components/soru-ekle/soru-ekle.component';
import { SoruDuzenleComponent } from './components/soru-duzenle/soru-duzenle.component';


const redirectLogin = () => redirectUnauthorizedTo(['login'])
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'soruekle',
    component: SoruEkleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'soruduzenle',
    component: SoruDuzenleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
