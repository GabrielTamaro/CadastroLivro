import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  @Input() livros = [];

  constructor() { }

  ngOnInit(): void {
  }

}
