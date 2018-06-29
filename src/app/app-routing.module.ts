import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/landing/index.component';
import { LoginComponent } from './components/cms/login.component';
import { DashboardComponent } from './components/cms/dashboard/dashboard.component';
import { MainComponent } from './components/cms/main/main.component';
import { BreakfastComponent } from './components/cms/breakfast/breakfast.component';
import { LunchComponent } from './components/cms/lunch/lunch.component';
import { DinnerComponent } from './components/cms/dinner/dinner.component';
import { AdditemComponent } from './components/cms/additem/additem.component';
import { EdititemComponent } from './components/cms/edititem/edititem.component';

export const routes: Routes = [
	{path:'', component: IndexComponent},
	{path:'admin', component: LoginComponent },
	{path: 'admin/dashboard', component: DashboardComponent },
	{path: 'admin/main', component: MainComponent },
	{path: 'admin/breakfast', component: BreakfastComponent},
	{path: 'admin/lunch', component: LunchComponent},
	{path: 'admin/dinner', component: DinnerComponent},
	{path: 'admin/additem', component: AdditemComponent},
	{path: 'admin/edit/:id', component: EdititemComponent },
	{
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
