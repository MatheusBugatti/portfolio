import { Component, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/icons/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      width: '100px',
      height: "51px",
      description:'s',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'www.google.com.br'
        },
      ],
    },
  ])

}
