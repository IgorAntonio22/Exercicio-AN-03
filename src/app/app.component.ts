import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio3AN';
  valor: number = 0


  aumentarValor(event:any): void {
    this.valor += 1
  }

  diminuirValor(event:any): void {
    this.valor -= 1

    if(this.valor < 0) {
      this.valor = 0
    }
  }
}



