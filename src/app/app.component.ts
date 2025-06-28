import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfe1-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'mfe1';

  // Dati hardcoded per la tabella
  users = [
    { id: 1, nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@email.it', eta: 28, citta: 'Roma' },
    { id: 2, nome: 'Laura', cognome: 'Bianchi', email: 'laura.bianchi@email.it', eta: 35, citta: 'Milano' },
    { id: 3, nome: 'Giuseppe', cognome: 'Verdi', email: 'giuseppe.verdi@email.it', eta: 42, citta: 'Napoli' },
    { id: 4, nome: 'Anna', cognome: 'Neri', email: 'anna.neri@email.it', eta: 31, citta: 'Torino' },
    { id: 5, nome: 'Francesco', cognome: 'Gialli', email: 'francesco.gialli@email.it', eta: 26, citta: 'Firenze' },
    { id: 6, nome: 'Chiara', cognome: 'Blu', email: 'chiara.blu@email.it', eta: 29, citta: 'Bologna' },
    { id: 7, nome: 'Roberto', cognome: 'Viola', email: 'roberto.viola@email.it', eta: 38, citta: 'Palermo' },
    { id: 8, nome: 'Elena', cognome: 'Rosa', email: 'elena.rosa@email.it', eta: 33, citta: 'Genova' }
  ];

  ngOnInit(): void {
    window.addEventListener('user-data', (event: any) => {
      console.log('Ricevuto:', event.detail);
    });
  }
}
