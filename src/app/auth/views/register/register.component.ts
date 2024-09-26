import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { departamentos } from '../../../ecomerce/utils/Departamentos';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService],
})
export class RegisterComponent {
  registerForm: FormGroup;

  departamentos = departamentos;
  municipios: { label: string; value: string }[] = [];

  generos = ['Masculino', 'Femenino', 'Otro', 'Prefiero no decirlo'];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      departamento: ['', Validators.required],
      municipio: ['', Validators.required],
      direccion: ['', Validators.required],
      genero: ['', Validators.required],
    });

    this.registerForm
      .get('departamento')
      ?.valueChanges.subscribe((departamento) => {
        const selectedDepartamento = this.departamentos.find(
          (d) => d.departamento === departamento
        );
        this.municipios = selectedDepartamento
          ? selectedDepartamento.municipios.map((m) => ({ label: m, value: m }))
          : [];
        this.registerForm.get('municipio')?.setValue('');
      });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      this.authService
        .register(formData)
        .then((response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Registro exitoso',
            detail: 'El usuario ha sido registrado exitosamente.',
          });
          this.router.navigate(['auth/login']);
        })
        .catch((error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error en el registro',
            detail: 'Ocurrió un error al intentar registrar al usuario.',
          });
        });
    } else {
      this.checkFormValidity();
    }
  }

  checkFormValidity() {
    Object.keys(this.registerForm.controls).forEach((key) => {
      const control = this.registerForm.get(key);
      if (control?.invalid) {
        console.log(`Campo inválido: ${key}`);
        console.log(control.errors); // Muestra los errores específicos de ese control
      }
    });

    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Por favor complete todos los campos requeridos correctamente.',
    });
  }
}
