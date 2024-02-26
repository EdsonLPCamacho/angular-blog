import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../Components/menu-title/menu-title.component";
import { BigCardComponent } from "../../Components/big-card/big-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuTitleComponent, BigCardComponent]
})
export class HomeComponent {

}
