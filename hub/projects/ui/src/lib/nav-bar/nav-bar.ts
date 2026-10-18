import {
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'jde-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  open = signal(false);
  private element = inject(ElementRef<HTMLElement>);
  toggle = viewChild<ElementRef<HTMLButtonElement>>('toggle');
  links = [
    { label: 'Services', fragment: 'services' },
    { label: 'Work', fragment: 'work' },
    { label: 'Packages', fragment: 'pricing' },
    { label: 'About', fragment: 'founder' },
  ];
  close(returnFocus = false) {
    this.open.set(false);
    if (returnFocus) this.toggle()?.nativeElement.focus();
  }
  @HostListener('document:keydown.escape') escape() {
    if (this.open()) this.close(true);
  }
  @HostListener('document:click', ['$event']) outside(event: Event) {
    if (!this.element.nativeElement.contains(event.target as Node))
      this.close();
  }
  @HostListener('focusout', ['$event']) focusOut(event: FocusEvent) {
    if (
      event.relatedTarget &&
      !this.element.nativeElement.contains(event.relatedTarget as Node)
    )
      this.close();
  }
}
