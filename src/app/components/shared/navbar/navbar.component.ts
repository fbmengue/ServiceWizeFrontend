import { Component } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { SideNavService } from '../../../services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  title: string = "ServiceWize";

  constructor(private sideNavService: SideNavService, private menuService: FormService) {

  }

  sidenavOpenMenu(form: string) {
    this.menuService.toggleForm(form);
    this.sideNavService.toggle();

  }
} 
