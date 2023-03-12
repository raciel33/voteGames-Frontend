import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-pie',
  templateUrl: './grafica-pie.component.html',
  styleUrls: ['./grafica-pie.component.css']
})
export class GraficaPieComponent {

  @Input() results:any[]=[]

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = 'nightLights';//tema personalizado


  constructor() {
    Object.assign(this.results);
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
