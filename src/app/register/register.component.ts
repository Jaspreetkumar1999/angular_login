import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerUserData: any = {};

  constructor(private _auth : AuthService,
              private _router : Router     ) { }

  ngOnInit(): void {
  }
  registerUser(){
    // console.log("data",this.registerUserData)
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {console.log("res", res),
      localStorage.setItem('token',res.token)
       this._router.navigate(['/special'])},
      err => console.log("err", err)
    )
  }

}
