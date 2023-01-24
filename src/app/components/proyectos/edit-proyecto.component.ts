import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})

export class EditProyectoComponent implements OnInit {

  proYec: Proyecto = null;
  nombreP: string = '';
  descripcionP: string = '';
  linkE: string = '';

  constructor(private sProyecto: SProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id)
      .subscribe(
        data => {
          this.proYec = data;
        }, err => {
          alert("Error al modificar el proyecto");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proYec).subscribe(
      data => {
        alert("Proyecto modificado exitosamente")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['/editpro/{{Proyecto.id}}']);
      }
    )
  }
}