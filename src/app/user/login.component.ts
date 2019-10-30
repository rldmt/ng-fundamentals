import { Component } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    username
    password
    constructor(private authService:AuthService, private router: Router)    {

    }

    login(formValues)   {
        this.authService.loginUser(formValues.userName, formValues.password)
        // console.log(formValues)
        this.router.navigate(['events'])
    }

    cancel()    {
        this.router.navigate(['events'])
    }
}