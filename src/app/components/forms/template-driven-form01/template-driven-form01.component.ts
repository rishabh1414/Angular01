import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form01',
  templateUrl: './template-driven-form01.component.html',
  styleUrls: ['./template-driven-form01.component.css'],
})
export class TemplateDrivenForm01Component {
  onSubmit(e: any) {
    console.log(e.value);
  }
}
