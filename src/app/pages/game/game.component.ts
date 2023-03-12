import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/interface';
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  nominados: Game[] = [];
  juegos: Game [] = [];

  constructor( private gamesServices: GameService,private db:AngularFirestore) { }

  ngOnInit(): void {

    this.gamesServices.getNominados().subscribe( resp=>{
      console.log('que traes:'+resp);
      this.nominados = resp;
    })

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


  //FUNCION PARA LA VOTACION
  votarJuego( juego: Game ){

    this.gamesServices.votarJuego( juego.id ).subscribe((resp:any)=>{

      if(resp.ok){
        Swal.fire({
          title:`${resp.msg}`,
          icon:'success',
          showConfirmButton: false,
          timer: 1500
        }
        )
      }else{
        Swal.fire('Oops', resp.msg,'error');
      }
    })
  }

}
