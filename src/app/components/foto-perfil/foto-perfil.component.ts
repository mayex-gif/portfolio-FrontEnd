import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { SPersonaService } from 'src/app/service/s-persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css']
})
export class FotoPerfilComponent implements OnInit {

  persona: Persona = null;

  constructor(public sPersona: SPersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona() {
    this.sPersona.detail(1).subscribe(data => { this.persona = data })
  }
}