import { Role } from "./role";
export class Model {
  userId: number = 0;
  nom!: string;
  prenom!: string;
  email!: string;
  motpasse!: string;
  role!: Role;

}
