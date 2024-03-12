import { Component, signal } from '@angular/core';
import { iknowledge } from '../../interface/iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowLedge = signal<iknowledge[]>([
    {
      src: "assets/icons/knowledge/angular.svg",
      alt: 'Icone de conhecimento de Angular',
    },
    {
      src: "assets/icons/knowledge/html5.svg",
      alt: 'Icone de conhecimento de html5',
    },
    {
      src: "assets/icons/knowledge/javascript.svg",
      alt: 'Icone de conhecimento de JavaScript',
    },
    {
      src: "assets/icons/knowledge/banco.svg",
      alt: 'Icone de conhecimento de Banco de dados SQL',
    },
    {
      src: "assets/icons/knowledge/git.svg",
      alt: 'Icone de conhecimento de GitHub',
    },
  ])
}
