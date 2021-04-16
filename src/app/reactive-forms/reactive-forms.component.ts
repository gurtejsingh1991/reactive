import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

   Registerform!:FormGroup;
    Submitted=false
  constructor(private formbuilder:FormBuilder) { }
  ngOnInit(): void {
    this.Registerform=this.formbuilder.group({
    username:['',Validators.required],
    fathername:['',Validators.required],
    mother:['',Validators.required],
    email:['',Validators.required,Validators.email],
    address:['',Validators.required],
    contact:['',[Validators.required,Validators.minLength(10)]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirmpassword:['',Validators.required],
    gender:['',Validators.required],
    location: ['',Validators.required],
    checkbox: [false, Validators.requiredTrue],
    },{

  });

}
get f()
{
  return this.Registerform.controls;
}

getDetails()
{
  this.Submitted=true;
  if(this.Registerform.invalid){
    return;
  }

}

}

