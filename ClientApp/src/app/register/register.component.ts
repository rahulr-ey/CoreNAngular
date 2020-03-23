import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
/** register component*/
export class RegisterComponent {

  @Output() cancelRegister = new EventEmitter()

  model: any = {};

    /** register ctor */
    constructor(private authService: AuthService , private alertify : AlertifyService  ) {

  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration is successsful');
    }, error => {
      this.alertify.error(error);
    });
  }
 
  cancel() {
    this.cancelRegister.emit(false);
  }
}
