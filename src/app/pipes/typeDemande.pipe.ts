import { Pipe, PipeTransform } from '@angular/core';
import {  TypeDemande} from '../Model/TypeDemande';

@Pipe({name: 'typeDemandeNamePipe'})
export class TypeDemandePipe implements PipeTransform {
  transform(value: number ): string {
    return   (TypeDemande[value]).replace(/_/g, " ");
  }
}
