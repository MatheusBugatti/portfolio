import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';

//interfaces
import { IProjects } from '../../../interface/IProjects.interface';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  // providers: [{provide:MAT_DIALOG_DEFAULT_OPTIONS, useValue:{hasBackdrop: false}}],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{

    constructor(
      private _diaLogRef: MatDialogRef<DialogProjectsComponent>,
      @Inject(MAT_DIALOG_DATA) private _data: IProjects
      ){}

    public getData = signal<IProjects | null>(null);

    ngOnInit(): void {
      this.getData.set(this._data);
    }

    public closeModal(){
      return this._diaLogRef.close();
    }
}


