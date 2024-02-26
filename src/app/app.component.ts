import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SamallCardComponent } from "./Components/samall-card/samall-card.component";
import { BigCardComponent } from "./Components/big-card/big-card.component";
import { MenuTitleComponent } from "./Components/menu-title/menu-title.component";
import { HomeComponent } from "./Pages/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      SamallCardComponent,
      BigCardComponent,
      MenuTitleComponent,
      HomeComponent
    ]
})
export class AppComponent {
  title = 'angular-blog';
}
