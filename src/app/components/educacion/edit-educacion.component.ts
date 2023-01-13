import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  expLab: Educacion = null;
  nombreE: string = '';
  descripcionE: string = '';
  desdehastaE: string = '';

  constructor(private sEducacion: SEducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id)
      .subscribe(
        data => {
          this.expLab = data;
        }, err => {
          alert("Error al modificar educacion");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.expLab).subscribe(
      data => {
        alert("Educación modificada exitosamente")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate(['/editeduc/{{Educacion.id}}']);
      }
    )
  }

}