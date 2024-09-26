import { Rol } from "./Rol.model";

export interface User {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePhotoUrl?: string | null;
  phone?: string;
  rol?: Rol;
  nCedula?: string;
  departamento?: string;
  municipio?: string;
  direccion?: string;
  genero?: string;
  shopId?:string;
}

export interface createUser{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  departamento?: string;
  municipio?: string;
  direccion?: string;
  genero?: string;
}
