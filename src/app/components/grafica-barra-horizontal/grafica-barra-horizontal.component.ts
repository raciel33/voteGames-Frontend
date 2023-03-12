import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-barra-horizontal',
  templateUrl: './grafica-barra-horizontal.component.html',
  styleUrls: ['./grafica-barra-horizontal.component.css']
})
export class GraficaBarraHorizontalComponent implements OnDestroy {

  @Input() results:any[]=[]


  // options de la grafica
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';//tema personalizado


  //intervalo;

  constructor() {

    /**Nota: para que se ejecute el setInterval con los valores aleatoriaos
     * tengo que asignar en cada intervalo el arreglo, para ello:
     *
     * const newResults = [...this.results];--> extrae lo que tiene this.results
     *
     *
    const newResults = [...this.results];

    this.intervalo =  setInterval(()=>{
         for( let i in newResults){
              //en cada posicion se asigna un numero entero
              this.results[i].value = Math.round( Math.random()*500 ) ;
          }
          //asignamos estos valores nuevamente al arreglo this.results
          this.results = [...newResults]
       },1500);
*/
  }


  ngOnDestroy(): void {
    //clearInterval( this.intervalo)
  }

  onSelect(event: any) {
    console.log(event);
  }


}
