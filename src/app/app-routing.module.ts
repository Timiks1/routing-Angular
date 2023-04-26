import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixComponent } from './six/six.component';
const routes: Routes = [ { path: 'first-component', component: FirstComponent },
{ path: 'second-component', component: SecondComponent },
{path: 'third-component', component: ThirdComponent },
{path: 'fourth-component', component: FourthComponent },
{path: 'fifth-component', component: FifthComponent },
{path: 'six-component', component: SixComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
