import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class BannerComponent implements OnInit {
  images = [
    'https://images-porsche.imgix.net/-/media/673D5125F9EE4F73BFB55EDD5707D5E5_96B1785F323441A792E878F8C52F63ED_718-Cayman-sideshot?w=900&q=45&auto=format',
    'https://images-porsche.imgix.net/-/media/9CD53A02737F40A0806BB5EAE1A80F54_D92CC07A446F4B0A8A492A88DD260C0C_911_carrera_gts_sideshot?w=900&q=45&auto=format',
    'https://images-porsche.imgix.net/-/media/E27875C9513D4899B596093AC53B7407_8EA111E8A92F4A7BAC344DAD79DA99EE_718-Boxster-GTS-40-sideshot?w=900&q=45&auto=format',
    'https://images-porsche.imgix.net/-/media/9EDE0298FE814C2784B12D4FD1B901D9_2EE74A761D2F40EDBF4928098334F8B3_911-carrera-s-sideshot?w=900&q=45&auto=format',
    'https://images-porsche.imgix.net/-/media/60CD3B3E5B914480B5C36B412D875135_FAC15FB326A34734923FDCB1976F34A2_718-Boxster-Style-Edition-sideshot?w=900&q=45&auto=format'
  ];

  activeIndex = signal(0);
  intervalId!: any;

  startX = 0;
  currentX = 0;
  dragging = false;
  hasMoved = false;
  canSlide = true;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => this.next(), 3000);
  }

  resetAutoSlide() {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  next() {
    if (!this.canSlide) return;

    this.canSlide = false;
    this.activeIndex.set((this.activeIndex() + 1) % this.images.length);

    setTimeout(() => {
      this.canSlide = true;
    }, 1000);
  }

  prev() {
    if (!this.canSlide) return;

    this.canSlide = false;
    this.activeIndex.set(
      (this.activeIndex() - 1 + this.images.length) % this.images.length
    );

    setTimeout(() => {
      this.canSlide = true;
    }, 1000);
  }

  getTransform(): string {
    const offsetPercent = this.dragging
      ? ((this.currentX - this.startX) / window.innerWidth) * 100
      : 0;

    return `translateX(${this.activeIndex() * -100 + offsetPercent}%)`;
  }

  onDragStart(event: MouseEvent | TouchEvent) {
    if (!this.canSlide) return;
    if (event.cancelable) event.preventDefault();

    this.dragging = true;
    this.hasMoved = false;
    this.startX = this.getPositionX(event);
    this.currentX = this.startX;
    this.resetAutoSlide();
  }

  onDragMove(event: MouseEvent | TouchEvent) {
    if (!this.dragging) return;

    this.currentX = this.getPositionX(event);
    const moved = Math.abs(this.currentX - this.startX);

    if (moved > 10) {
      this.hasMoved = true;
    }
  }

  onDragEnd() {
    if (!this.dragging || !this.canSlide) return;

    const diff = this.currentX - this.startX;

    if (this.hasMoved && Math.abs(diff) > 50) {
      diff > 0 ? this.prev() : this.next();
    }

    this.dragging = false;
    this.startX = 0;
    this.currentX = 0;
    this.hasMoved = false;
  }

  getPositionX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
  }
}
