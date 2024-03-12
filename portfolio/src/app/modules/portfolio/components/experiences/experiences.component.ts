import { Component, signal } from '@angular/core';

//inteface
import { IExperiences } from '../../interface/IExperience.inetrrface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Estágio Central de serviços",
        p: "MazaTarraf | Nov 2023 - Present",
        },
        text: "<p>só um texto de teste</p>"
      },
    {
      summary: {
        strong: "Designer Grafico",
        p: "Autonomo | Nov 2022 - Present",
        },
        text: "<p>só um texto de teste tambem </p>"
      }
  ])
}
