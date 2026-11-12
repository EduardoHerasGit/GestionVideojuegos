import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Game } from './models/game';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  games: Game[] = [];
  game: Game = this.emptyGame();
  errorMessage = '';

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.loadGames();
  }

  private emptyGame(): Game {
    return { title: '', genre: '', platform: '', price: 0, stock: 0 };
  }

  loadGames(): void {
    this.gameService.getGames().subscribe({
      next: games => {
        this.games = games;
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage =
          'No se pudo conectar con JSON Server. ¿Has ejecutado "npm run api"?';
      }
    });
  }

  /** Alta (sin id -> POST) o edición (con id -> PUT). */
  saveGame(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const request = this.game.id
      ? this.gameService.updateGame(this.game)
      : this.gameService.createGame(this.game);

    request.subscribe({
      next: () => {
        this.loadGames();
        this.resetFormState(form);
      },
      error: () => {
        this.errorMessage = 'No se pudo guardar el videojuego.';
      }
    });
  }

  editGame(game: Game): void {
    this.game = { ...game };
  }

  cancelEdit(form: NgForm): void {
    this.resetFormState(form);
  }

  /**
   * Limpia el modelo y devuelve el formulario a pristine + untouched.
   * resetForm() sin argumentos dejaría los valores en null, así que se le
   * pasan los valores iniciales.
   */
  private resetFormState(form: NgForm): void {
    this.game = this.emptyGame();
    form.resetForm(this.emptyGame());
  }
}
