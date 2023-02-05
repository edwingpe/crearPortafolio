import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { LoginUsuario } from 'src/app/model/login-usuario';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  formLogin: FormGroup;
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;


  constructor(private formBuilder: FormBuilder){

    this.formLogin = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }
  

  onEnviar(event: Event){
    event.preventDefault;

    if (this.formLogin.valid){
      //Por completar, se envian los datos al servidor.
      //
    } else {
      //Se activan las validaciones para que se muestren en el html
      this.formLogin.markAllAsTouched();
    }

  }

  //Metodos para el formulario

  get emailControl(): FormControl {
    return this.formLogin.get('email') as FormControl;
  }

  get passwordControl(): FormControl{
    return this.formLogin.get('password') as FormControl;
  }

}
