import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { NgxJsonViewerModule } from "ngx-json-viewer";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { environment } from "../environments/environment";
import { AdminModule } from "./admin/admin.module";
import { AdminAuthGuard } from "./admin/services/admin-auth-guard.service";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./core/components/about/about.component";
import { ContactComponent } from "./core/components/contact/contact.component";
import { LoginComponent } from "./core/components/login/login.component";
import { ServicesComponent } from "./core/components/services/services.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { ProductsComponent } from "./shopping/components/products/products.component";
import { ShoppingModule } from "./shopping/shopping.module";

const appRoutes: Routes = [
  { path: "", component: ProductsComponent },
  { path: "login", component: LoginComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    NgxJsonViewerModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
