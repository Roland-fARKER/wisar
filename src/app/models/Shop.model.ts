export interface Shop {
  id?: string;
  name: string;
  description: string;
  lem?:string;
  logoUrl: string;
  bannerUrl: string;
  ownerId: string;
  active: boolean;
  productListId?: string;
  facebookLInk?: string;
  instagramLink?: string;
  whatsappNumber?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  department?: string;
  municipio?: String;
  verify?: boolean;
  categories: string[];
  nRuc?: string;
}
