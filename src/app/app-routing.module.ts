import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [

  { path: 'home', component: InicioComponent },
  { path: 'game', component: GameComponent },
  { path: '**', pathMatch: 'full', redirectTo : 'home' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
