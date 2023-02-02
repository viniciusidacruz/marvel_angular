import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {
  callToSearch: string = 'Pesquisar';
  fieldValue: any = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/result'], {
      queryParams: { value: this.fieldValue },
    });
  }
}
