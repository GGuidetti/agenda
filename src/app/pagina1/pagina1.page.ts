import { Component, OnInit } from '@angular/core';
import { Pagina2Page } from '../pagina2/pagina2.page';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

contato: Pagina2Page = new Pagina2Page();
  constructor(private banco: AngularFireDatabase,
  private rota: Router) { }

  ngOnInit() {
  }
salvar(){
  this.banco.list('contato').push(this.contato);
  this.contato = new Pagina2Page();
  this.rota.navigate(['pagina2'])

}
}
