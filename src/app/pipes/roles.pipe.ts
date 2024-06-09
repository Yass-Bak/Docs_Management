import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../Model/role';

@Pipe({name: 'roleNamePipe'})
export class RoleNamePipe implements PipeTransform {
  transform(value: number ): string {
    return Role[value];
  }
}
