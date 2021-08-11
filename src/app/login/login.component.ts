import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname = "";
  pswd = "";


  loginForm = this.fb.group({
    
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],

    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  login() {
    if (this.loginForm.valid) {
      var name1 = this.loginForm.value.uname;
      var pass = this.loginForm.value.pswd;
      if (name1 == "admin" && pass == "admin1234") {
        // if (name=="admin" && pass=="admin1234")
        // {

        alert("login successfull")

        this.router.navigateByUrl("items")
      }
      else {
        alert("invalid account")
      }
    }
  }
}
