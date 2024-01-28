import { TaskModel } from "../models/task.model";
import { Usuario } from "../models/user.model";

export interface IUser {
  uid: string;
  name: string;
  email: string;
  role?: string;
}

export interface ILoginData {
  email: string;
  password: string;
  remember?: boolean;
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  repassword: string;
  terminos: boolean;
}




export interface CargarUsuario {
    total: number;
    usuarios: Usuario[];
}


export interface CargarTareas {
  total: number;
  tareas: TaskModel[];
}