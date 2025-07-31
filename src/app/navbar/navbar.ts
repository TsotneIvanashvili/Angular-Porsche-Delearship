import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent {
  isBurgerOpen = false;
  showPopup = false;

  toggleBurger() {
    this.isBurgerOpen = !this.isBurgerOpen;
  }

  closeBurger() {
    this.isBurgerOpen = false;
  }

  toggleProfilePopup() {
    this.showPopup = !this.showPopup;
  }

  closeProfilePopup() {
    this.showPopup = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Close profile popup if clicked outside of '.profile' container
    if (!target.closest('.profile')) {
      this.closeProfilePopup();
    }
  }
}
