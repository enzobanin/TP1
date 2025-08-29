import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header', // para chamar em outro componente <app-header>
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  tituloLoja = input.required<string>(); //<app-header [tituloLoja] = "'Titulo'"></app-header>

  textoSobre = output<string>();


  enviarSobre(){ //:void
    this.textoSobre.emit('Técnicas de Programação 1. Desenvolvido por Enzo.')
  }

  // exibirSobre(nome:string): void {
  //   alert('Boa noite ' + nome);
  // }
}
