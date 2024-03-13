import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EdialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DialogProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/icons/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      width: '100px',
      height: "51px",
      description:'HBVAJNBJHIFVBVH\HBDYCVASHUGFHbhvchjishcvSAHBCHUBSDHUVsjbv hsaghvuSHFghuyfYUYHSDYFHGSygfyusgfuyguyg',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'www.google.com.br'
        },
      ],
    },
  ])
  
  public openDialog(data: IProjects){
    debugger
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}
