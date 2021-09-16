import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [// Qué componenetes tiene este módulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // Cosas que queremos que sean visibles
        ListadoComponent
    ],
    imports: [// Módulos
        CommonModule
    ]
})

export class HeroesModule {

}