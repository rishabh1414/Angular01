import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form01',
  templateUrl: './reactive-form01.component.html',
  styleUrls: ['./reactive-form01.component.css'],
})
export class ReactiveForm01Component {
  myForm: FormGroup;
  regex: string = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}';
  constructor(fb: FormBuilder) {
    // this.myForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   email: new FormControl(),
    //   message: new FormControl(),
    // });

    this.myForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern(this.regex)]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit(f: any) {
    console.log(f);
  }
}
