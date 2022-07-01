import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.scss']
})
export class BootstrapFormComponent implements OnInit {
  @ViewChild('form') form!:ElementRef; 
  //prende la referenza del form 

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.form.nativeElement.checkValidity();

    this.form.nativeElement.classList.add('was-validated');

  }

}
