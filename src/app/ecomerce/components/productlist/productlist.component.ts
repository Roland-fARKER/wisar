import { Component } from '@angular/core';
import { Product } from '../../../models/Product.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent {
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  products: Product[] = [
    {
      id: '1',
      name: 'Camiseta Deportiva',
      description: 'Camiseta de alta calidad para deportes al aire libre.',
      price: 150.0,
      stock: 20,
      shopId: 'shop001',
      categoryId: 'cat001',
      imageUrl: 'https://siman.vtexassets.com/arquivos/ids/5926936-800-800?v=638557345546030000&width=800&height=800&aspect=true',
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
      imageUrl: 'https://photo3.i-run.fr/asics-gel-nimbus-25-m-chaussures-homme-606845-1-z.jpg',
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
      imageUrl: 'https://www.naturehike.com.ar/img/slides/productos_mochilas_grandes_1.jpg',
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
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_939480-MLA69350028293_052023-O.webp',
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
      imageUrl: 'https://www.bordamar.es/tienda-ropa-trabajo-online/wp-content/uploads/2017/08/sudadera_capucha_55_azulmarino_827_1024.jpg',
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
      imageUrl: 'https://www.viajaporlibre.com/wp-content/uploads/2017/08/north-face-horizon.jpg',
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
      imageUrl: 'https://m.media-amazon.com/images/I/61e4l622RKL._AC_SY580_.jpg',
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
      imageUrl: 'https://hollerworld.com/cdn/shop/collections/lentes_collection_image.jpg?v=1642435637',
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

  productsWinter: Product[] = [
    {
      id: '10',
      name: 'Chaqueta Aislante',
      description: 'Chaqueta térmica con aislamiento para temperaturas bajo cero.',
      price: 350.0,
      stock: 12,
      shopId: 'shop010',
      categoryId: 'cat010',
      imageUrl: 'https://underarmourcl.vtexassets.com/arquivos/ids/789800/1380868-001_N11_1.jpg?v=638588437007800000',
      state: true,
      discount: 15,
      discountPrice: 297.5,
      discountDesc: 15,
      nombreTienda: 'WinterFit',
    },
    {
      id: '11',
      name: 'Botas Impermeables',
      description: 'Botas resistentes al agua con forro de lana para mayor calidez.',
      price: 180.0,
      stock: 20,
      shopId: 'shop011',
      categoryId: 'cat011',
      imageUrl: 'https://www.michy.cl/cdn/shop/files/la-michy-tienda-chile-botas-impermeables-ab-42616536367351.webp?v=1715278981&width=2048',
      state: true,
      discount: 10,
      discountPrice: 162.0,
      discountDesc: 10,
      nombreTienda: 'IceTrek',
    },
    {
      id: '12',
      name: 'Gorro de Lana',
      description: 'Gorro de lana suave y cálido, ideal para el invierno.',
      price: 25.0,
      stock: 50,
      shopId: 'shop012',
      categoryId: 'cat012',
      imageUrl: 'https://treck.vtexassets.com/arquivos/ids/168695/06-02-046-F1-1300.jpg?v=638412813107130000',
      state: true,
      nombreTienda: 'WarmThreads',
    },
    {
      id: '13',
      name: 'Bufanda de Cachemira',
      description: 'Bufanda ligera de cachemira para protección contra el frío.',
      price: 80.0,
      stock: 30,
      shopId: 'shop013',
      categoryId: 'cat013',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzltZU3vVUCrQJiMITCMCSMV1fi4fjRSPVg&s',
      state: true,
      discount: 5,
      discountPrice: 76.0,
      discountDesc: 5,
      nombreTienda: 'LuxuryWinter',
    },
    {
      id: '14',
      name: 'Abrigo de Invierno',
      description: 'Abrigo largo y acolchado para máxima protección contra el frío.',
      price: 400.0,
      stock: 8,
      shopId: 'shop014',
      categoryId: 'cat014',
      imageUrl: 'https://s.libertaddigital.com/2022/01/22/abrigo-de-invierno-para-mujer-yxp-militar.jpg',
      state: true,
      discount: 20,
      discountPrice: 320.0,
      discountDesc: 20,
      nombreTienda: 'SnowPeak',
    },
    {
      id: '15',
      name: 'Mallas Térmicas',
      description: 'Mallas térmicas para mantenerte caliente en temperaturas frías.',
      price: 60.0,
      stock: 40,
      shopId: 'shop015',
      categoryId: 'cat015',
      imageUrl: 'https://down-mx.img.susercontent.com/file/ccbcf163bb33d368117aaca05ea01a88_tn.webp',
      state: true,
      nombreTienda: 'ArcticWear',
    },
    {
      id: '16',
      name: 'Calcetines de Lana',
      description: 'Calcetines gruesos de lana merino para un aislamiento superior.',
      price: 15.0,
      stock: 60,
      shopId: 'shop016',
      categoryId: 'cat016',
      imageUrl: 'https://supercalcetines.com/sites/default/files/imagecache/Blog_principal/LANA.jpg',
      state: true,
      nombreTienda: 'WinterBasics',
    },

    {
      id: '18',
      name: 'Chaleco Acolchado',
      description: 'Chaleco con relleno de plumas, ideal para climas fríos y ventosos.',
      price: 100.0,
      stock: 18,
      shopId: 'shop018',
      categoryId: 'cat018',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/marc-forne-wears-black-sunglasses-silver-earrings-a-beige-news-photo-1634283486.jpg?crop=0.669xw:1.00xh;0.176xw,0&resize=640:*',
      state: true,
      nombreTienda: 'FrostGuard',
    },
  ];
}
