import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  uploadPercent: Observable<number | undefined> | undefined = undefined;
  downloadURL: string | undefined;
  showPassword: boolean = false;

  isLoader:boolean = false;

  constructor(
    private authService: AuthService,
    private storage: AngularFireStorage,
    private router: Router,
    private messageService: MessageService
  ) {}

  login() {
    if (!this.email || !this.password) {
      this.messageService.add({severity:'error', summary:'Error', detail: 'Correo y contraseña son requeridos'});
      return;
    }

    this.isLoader = true;
    this.authService.login(this.email, this.password)
      .then(() => {
        this.messageService.add({severity:'success', summary:'Éxito', detail: 'Login exitoso'});
        this.isLoader = false;
        this.router.navigate(['ecomerce/home']);
      })
      .catch(error => {
        console.error('Error en el login:', error);
        this.isLoader = false;
        let errorMessage = 'Error desconocido. Por favor, intente nuevamente.';
        
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          this.isLoader = false;
          errorMessage = 'Correo o contraseña incorrectos';
        }
        this.isLoader = false;
        this.messageService.add({severity:'error', summary:'Error', detail: errorMessage});
      });
  }
}
