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

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  }

  resetAutoSlide() {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  next() {
    const nextIndex = (this.activeIndex() + 1) % this.images.length;
    this.activeIndex.set(nextIndex);
  }

  prev() {
    const prevIndex =
      (this.activeIndex() - 1 + this.images.length) % this.images.length;
    this.activeIndex.set(prevIndex);
  }
}
