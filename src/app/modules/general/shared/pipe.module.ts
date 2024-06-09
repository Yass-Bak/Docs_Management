import { NgModule } from "@angular/core";
import { TypeDemandePipe } from "src/app/pipes/typeDemande.pipe";

@NgModule({
    imports: [
    ],
    declarations: [
        TypeDemandePipe,
    ],
    exports: [
        TypeDemandePipe
    ]
})
export class PipeModule { }