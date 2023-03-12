import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//componentes
import { NavbarComponent } from './navbar/navbar.component';
import { GraficaBarraHorizontalComponent } from './grafica-barra-horizontal/grafica-barra-horizontal.component';
import { FormsModule } from '@angular/forms';
import { GraficaPieComponent } from './grafica-pie/grafica-pie.component';
//Modulo para graficas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';





@NgModule({
  declarations: [
    NavbarComponent,
    GraficaBarraHorizontalComponent,
    GraficaPieComponent
  ],
  exports:[
    NavbarComponent,
    GraficaBarraHorizontalComponent,
    GraficaPieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule



  ]
})
export class ComponentsModule { }
