import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { IndexComponent } from './components/landing/index.component';
import { CarouselComponent } from './components/landing/carousel/carousel.component';
import { CateringComponent } from './components/landing/catering/catering.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { IntroComponent } from './components/landing/intro/intro.component';
import { MenusComponent } from './components/landing/menus/menus.component';
import { MiscfloatComponent } from './components/landing/miscfloat/miscfloat.component';
import { TimingsComponent } from './components/landing/timings/timings.component';
import { BreakfastmenuComponent } from './components/landing/menus/breakfastmenu/breakfastmenu.component';
import { LunchmenuComponent } from './components/landing/menus/lunchmenu/lunchmenu.component';
import { DinnermenuComponent } from './components/landing/menus/dinnermenu/dinnermenu.component';

import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/cms/login.component';
import { DashboardComponent } from './components/cms/dashboard/dashboard.component';
import { MainComponent } from './components/cms/main/main.component';
import { SidebarComponent } from './components/cms/sidebar/sidebar.component';
import { NavbarComponent } from './components/cms/navbar/navbar.component';
import { BreakfastComponent } from './components/cms/breakfast/breakfast.component';
import { LunchComponent } from './components/cms/lunch/lunch.component';
import { DinnerComponent } from './components/cms/dinner/dinner.component';
import { ListComponent } from './components/cms/list/list.component';
import { SpecialsformComponent } from './components/cms/specialsform/specialsform.component';
import { AdditemComponent } from './components/cms/additem/additem.component';

import { CgService } from './cg.service';
import { EdititemComponent } from './components/cms/edititem/edititem.component';
import { CgnavbarComponent } from './components/landing/cgnavbar/cgnavbar.component';
import { AddressComponent } from './components/landing/address/address.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CarouselComponent,
    CateringComponent,
    FooterComponent,
    IntroComponent,
    MenusComponent,
    MiscfloatComponent,
    TimingsComponent,
    BreakfastmenuComponent,
    LunchmenuComponent,
    DinnermenuComponent,
    LoginComponent,
    DashboardComponent,
    MainComponent,
    SidebarComponent,
    NavbarComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    ListComponent,
    SpecialsformComponent,
    AdditemComponent,
    EdititemComponent,
    CgnavbarComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule],
  providers: [CgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
