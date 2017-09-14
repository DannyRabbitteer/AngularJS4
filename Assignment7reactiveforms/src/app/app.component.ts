import {Component, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validator, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  ngOnInit(): void {

    this.form = new FormGroup(
      {
        'projectname': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)],
          this.forbiddenProjectNamesAsync.bind(this)),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'projectstatus': new FormControl('Critical'),
      });
  }

  formSubmit() {
    console.log(this.form.value);
  }

  forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    if ('Test' === control.value) {
      return {'nameIsForbidden': true};
    }
    return null;
  }


  forbiddenProjectNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
        const timepit = setTimeout(() => {
          if ('Test' === control.value) {
            resolve({'nameIsForbidden': true});
            return;
          }
          resolve(null);
        }, 1000);
      }
    );
    return promise;
  }

}
