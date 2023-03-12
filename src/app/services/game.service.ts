import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/interface';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

 private juegos:Game[]=[];

 constructor( private http: HttpClient) { }

 getNominados(){

    /*Nota: para no tener que disparar la peticion http cada vez que se reacarga la pagina
    revisamos si lo tenemos cargado en memoria sino se ejecuta nuevamente la peticion al servidor*/

    if(this.juegos.length > 0){

    //coje lo que tenemos en cache
      return of(this.juegos);

    }else{

      //haz la peticion http nuevamente
      return this.http.get<Game[]>(`${ environment.base_url }/api/games`).
        pipe(
          tap(
            juegos => this.juegos = juegos
          )
        )

          }
  }
  votarJuego( id: string){

    return this.http.post(`${ environment.base_url }/api/games/${id}`,{}).pipe(
      catchError( err => {
          return of( err.error)
      })
    );
  }


}
