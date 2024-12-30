import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./paginas/inicio/inicio.component";
import { ProductosComponent } from "./paginas/productos/productos.component";
import { ContactoComponent } from "./paginas/contacto/contacto.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

export const routes: Routes = [ 
    { path: "", component: InicioComponent },
    { path: "productos", component: ProductosComponent },
    { path: "contacto", component: ContactoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule, ReactiveFormsModule],
    exports: [RouterModule]
})
export class AppRoutesModule {}
