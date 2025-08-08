import {Component} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {Button} from 'primeng/button';
import {InputGroup} from 'primeng/inputgroup';
import {InputText} from 'primeng/inputtext';
import {InputGroupAddon} from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-nav',
  imports: [
    Menubar,
    Button,
    InputGroup,
    InputText,
    InputGroupAddon
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
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
