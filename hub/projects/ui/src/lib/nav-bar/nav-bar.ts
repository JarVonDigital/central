import {Component, inject, signal} from '@angular/core';
import {Button} from "primeng/button";
import {Drawer} from "primeng/drawer";
import {Menu} from "primeng/menu";
import {MenuItem} from 'primeng/api';
import {RouterLink} from '@angular/router';
import {OidcSecurityService} from 'angular-auth-oidc-client';

@Component({
  selector: 'jde-nav-bar',
  imports: [
    Button,
    Drawer,
    Menu,
    RouterLink
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  $isDrawerVisible = signal(false)
  items: MenuItem[] = [
    {
      label: 'Services',
      icon: 'pi pi-desktop'
    },
    {
      label: 'Get Started',
      icon: 'pi pi-send'
    }
  ]

  private authService: OidcSecurityService = inject(OidcSecurityService);

  onLogin() {
    this.authService.authorize();
  }
}
