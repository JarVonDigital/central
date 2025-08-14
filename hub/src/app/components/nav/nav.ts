import {Component, signal} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {Drawer} from 'primeng/drawer';
import {Menu} from 'primeng/menu';

@Component({
  selector: 'app-nav',
  imports: [
    Button,
    RouterLink,
    Drawer,
    Menu
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
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
}
