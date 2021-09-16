import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [// Qué componenetes tiene este módulo
        ContadorComponent
    ],
    exports: [ // Cosas que queremos que sean visibles
        ContadorComponent
    ],
    imports: [// Módulos
        CommonModule
    ]
})

export class ContadorModule {

}