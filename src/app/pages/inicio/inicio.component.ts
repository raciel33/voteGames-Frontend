import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: Game[] =[];

  constructor( private db: AngularFirestore) { }

  ngOnInit() {

    //apuntamos a nuestra collection de firebase
    this.db.collection('games').valueChanges()
      .pipe(
        map( (resp:any[]) =>
        //destructuracion de la respuesta pa cojer solo nombre y votos y asignarselo a la grafica
         resp.map( ({ nombre, votos }) => ({ name: nombre, value: votos }) ))
      )
      .subscribe( (juegos:any) => {
         //console.log(juegos);
          this.juegos = juegos;
      });

  }

}
