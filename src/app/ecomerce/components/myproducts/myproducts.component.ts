import { Component } from '@angular/core';
import { Product } from '../../../models/Product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrl: './myproducts.component.css',
})
export class MyproductsComponent {
  visible: boolean = false;
  productForm!: FormGroup;
  stateOptions: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [null], // Solo se usa en edición
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      shopId: ['', Validators.required],
      imageUrl: ['', Validators.required],
      state: [true, Validators.required],
      discount: [null],
      discountPrice: [null],
      nombreTienda: ['', Validators.required],
    });

    this.stateOptions = [
      { label: 'Activo', value: true },
      { label: 'Inactivo', value: false },
    ];
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      console.log('Producto creado/actualizado:', productData);
    }
  }

  onClear() {
    this.productForm.reset();
  }

  showDialog() {
    this.visible = true;
  }

  onUpload(event: any) {
    // Aquí debes manejar la subida de archivos y obtener la URL de la imagen
    // En esta simulación, se asigna directamente una URL de ejemplo
    const imageUrl = 'https://via.placeholder.com/150'; // Aquí va la URL real después de la subida
    this.productForm.patchValue({ imageUrl });
  }
  products: Product[] = [
    {
      id: '1',
      name: 'Camiseta Deportiva',
      description: 'Camiseta de alta calidad para deportes al aire libre.',
      price: 150.0,
      stock: 20,
      shopId: 'shop001',
      categoryId: 'cat001',
      imageUrl:
        'https://siman.vtexassets.com/arquivos/ids/5926936-800-800?v=638557345546030000&width=800&height=800&aspect=true',
      state: true,
      discount: 10,
      discountPrice: 135.0,
      discountDesc: 10,
      nombreTienda: 'DeportesManía',
    },
    {
      id: '2',
      name: 'Zapatillas de Running',
      description: 'Zapatillas ligeras y cómodas para correr.',
      price: 200.0,
      stock: 15,
      shopId: 'shop002',
      categoryId: 'cat002',
      imageUrl:
        'https://photo3.i-run.fr/asics-gel-nimbus-25-m-chaussures-homme-606845-1-z.jpg',
      state: true,
      discount: 5,
      discountPrice: 190.0,
      discountDesc: 5,
      nombreTienda: 'FootwearPro',
    },
    {
      id: '3',
      name: 'Mochila de Montaña',
      description: 'Resistente al agua, ideal para largas caminatas.',
      price: 300.0,
      stock: 10,
      shopId: 'shop003',
      categoryId: 'cat003',
      imageUrl:
        'https://www.naturehike.com.ar/img/slides/productos_mochilas_grandes_1.jpg',
      state: true,
      discount: 20,
      discountPrice: 240.0,
      discountDesc: 20,
      nombreTienda: 'Aventuras365',
    },
    {
      id: '4',
      name: 'Reloj Deportivo',
      description: 'Reloj resistente al agua con cronómetro y GPS.',
      price: 500.0,
      stock: 5,
      shopId: 'shop004',
      categoryId: 'cat004',
      imageUrl:
        'https://http2.mlstatic.com/D_NQ_NP_939480-MLA69350028293_052023-O.webp',
      state: true,
      discount: 15,
      discountPrice: 425.0,
      discountDesc: 15,
      nombreTienda: 'TechTime',
    },
    {
      id: '5',
      name: 'Sudadera con Capucha',
      description: 'Sudadera cómoda y cálida para el invierno.',
      price: 80.0,
      stock: 25,
      shopId: 'shop005',
      categoryId: 'cat005',
      imageUrl:
        'https://www.bordamar.es/tienda-ropa-trabajo-online/wp-content/uploads/2017/08/sudadera_capucha_55_azulmarino_827_1024.jpg',
      state: true,
      nombreTienda: 'UrbanWear',
    },
    {
      id: '6',
      name: 'Pantalones de Senderismo',
      description: 'Pantalones duraderos y ligeros para caminatas.',
      price: 120.0,
      stock: 30,
      shopId: 'shop006',
      categoryId: 'cat006',
      imageUrl:
        'https://www.viajaporlibre.com/wp-content/uploads/2017/08/north-face-horizon.jpg',
      state: true,
      nombreTienda: 'OutdoorsLife',
    },
    {
      id: '7',
      name: 'Cinturón de Cuero',
      description: 'Cinturón de cuero genuino, disponible en varios tamaños.',
      price: 60.0,
      stock: 40,
      shopId: 'shop007',
      categoryId: 'cat007',
      imageUrl:
        'https://m.media-amazon.com/images/I/61e4l622RKL._AC_SY580_.jpg',
      state: true,
      nombreTienda: 'ClassicFashion',
    },
    {
      id: '8',
      name: 'Lentes de Sol Polarizados',
      description: 'Protección UV y estilo para el verano.',
      price: 220.0,
      stock: 50,
      shopId: 'shop008',
      categoryId: 'cat008',
      imageUrl:
        'https://hollerworld.com/cdn/shop/collections/lentes_collection_image.jpg?v=1642435637',
      state: true,
      nombreTienda: 'SunnyDays',
    },
    {
      id: '9',
      name: 'Guantes Térmicos',
      description: 'Guantes aislantes para el frío extremo.',
      price: 90.0,
      stock: 35,
      shopId: 'shop009',
      categoryId: 'cat009',
      imageUrl: 'https://img.uline.com/is/image/uline/S-24002G-L?$Mobile_SI$',
      state: true,
      discount: 10,
      discountPrice: 81.0,
      discountDesc: 10,
      nombreTienda: 'WinterGear',
    },
  ];
}
