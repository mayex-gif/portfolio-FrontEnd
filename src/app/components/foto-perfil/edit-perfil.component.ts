import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { SImageService } from 'src/app/service/s-image.service';
import { SPersonaService } from 'src/app/service/s-persona.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {
  persona: Persona = null;

  constructor(private sPersona: SPersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imageService: SImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id)
      .subscribe(
        data => {
          this.persona = data;
        }, err => {
          alert("Error al modificar el perfil");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.sPersona.update(id, this.persona).subscribe(
      data => {
        alert("Perfil modificado exitosamente")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el perfil");
        this.router.navigate(['/editperfil/{{Perfil.id}}']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.uploadImage($event, name)
  }
}
