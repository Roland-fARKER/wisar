import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/User.model';
import { UserService1 } from '../../../chats/services/user.service';
import { Router } from '@angular/router';
import { Categories } from '../../../models/Category.model';
import { CategoryService } from '../../services/Categories.service';
import { Shop } from '../../../models/Shop.model';
import { MessageService } from 'primeng/api';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { departamentos } from '../../utils/Departamentos';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrl: './create-shop.component.css',
  providers: [MessageService],
})
export class CreateShopComponent {
  active: number = 0;
  categories: Categories[] = [];
  createShopForm: FormGroup;

  CurrentUser?: User | null;
  uploadedFiles: any[] = [];

  depart = departamentos;
  selectedDepartment: any;
  selectedMunicipio: any;
  municipios: string[] = [];

  constructor(
    private userService: UserService1,
    private categoryService: CategoryService,
    private messageService: MessageService,
    private storage: AngularFireStorage,
    private shopService: ShopService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createShopForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      lema: [''],
      whatsappNumber: ['', Validators.required],
      facebookLink: [''],
      instagramLink: [''],
      phoneNumber: [''],
      email: ['', [Validators.email]],
      address: ['', Validators.required],
      department: ['', Validators.required],
      municipio: ['', Validators.required],
      categories: [[], Validators.required],
      logoUrl: [''],
      bannerUrl: [''],
      ownerId: [''],
    });
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.CurrentUser = user;
      this.createShopForm.patchValue({
        ownerId: user?.uid,
      });
    });

    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });
  }

  onDepartmentChange(event: any) {
    const selectedDept = event.value;

    if (selectedDept) {
      this.municipios = selectedDept.municipios;
      this.createShopForm
        .get('department')
        ?.setValue(selectedDept.departamento);
      this.createShopForm.get('municipio')?.setValue('');
    } else {
      this.municipios = [];
    }
    console.log('Municipios actualizados:', this.municipios);
  }

  onSubmit() {
    const shopData: Omit<Shop, 'id'> = this.createShopForm.value;
    this.shopService.createShop(shopData).then(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Tienda creada',
        detail: 'La tienda se ha creado correctamente.',
      });
      this.router.navigate(['/ecomerce/profile/my-shop']);
    });
  }

  onCategoryChange(event: any) {
    const selectedCategories =
      this.createShopForm.get('categories')?.value || [];

    if (event.target.checked) {
      selectedCategories.push(event.target.value);
    } else {
      const index = selectedCategories.indexOf(event.target.value);
      if (index > -1) {
        selectedCategories.splice(index, 1);
      }
    }

    this.createShopForm.get('categories')?.setValue(selectedCategories);
  }

  uploadFile(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `shop_images/${Date.now()}_${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, file);

      uploadTask
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.createShopForm.patchValue({
                [field]: url,
              });
              this.messageService.add({
                severity: 'success',
                summary: 'Subida exitosa',
                detail: `Imagen subida correctamente: ${url}`,
              });
            });
          })
        )
        .subscribe();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se seleccionó ningún archivo',
      });
    }
  }
}
