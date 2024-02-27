import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../Components/menu-title/menu-title.component";
import { BigCardComponent } from "../../Components/big-card/big-card.component";
import { SmallCardComponent } from "../../Components/small-card/small-card.component";
import { MenuBarComponent } from "../../Components/menu-bar/menu-bar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent]
})
export class HomeComponent {

}
