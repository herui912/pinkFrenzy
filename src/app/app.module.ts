import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//add router
import { RouterModule, Routes } from '@angular/router';
//add component
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FoodComponent } from './component/food/food.component';
import { FunComponent } from './component/fun/fun.component';
import { PinkComponent } from './component/pink/pink.component';
import { FooterComponent } from './component/footer/footer.component';

const appRoutes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'food', component: FoodComponent},
  {path:'fun', component: FunComponent},
  {path:'pink', component: PinkComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FoodComponent,
    FunComponent,
    PinkComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
