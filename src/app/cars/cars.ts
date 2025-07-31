import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cars.html',
  styleUrls: ['./cars.css']
})
export class CarsComponent {


  // 718 Series Models
  seven18Models = [
    {
      id: '718-cayman',
      name: '718 Cayman',
      price: 'From $75,400¹',
      acceleration: '4.7 s',
      accelerationNote: '0 - 60 mph',
      horsepower: '300 hp',
      horsepowerNote: 'Max. engine power',
      topSpeed: '171 mph',
      topSpeedNote: 'Top track speed (with summer tires)',
      engineType: 'Gasoline',
      imageUrl: 'https://images-porsche.imgix.net/-/media/673D5125F9EE4F73BFB55EDD5707D5E5_96B1785F323441A792E878F8C52F63ED_718-Cayman-sideshot?w=900&q=45&crop=faces%2Centropy%2Cedges&auto=format'
    },
    {
      id: '718-boxster-style',
      name: '718 Boxster Style Edition',
      price: 'From $84,200¹',
      acceleration: '4.7 s',
      accelerationNote: '0 - 60 mph',
      horsepower: '300 hp',
      horsepowerNote: 'Max. engine power',
      topSpeed: '171 mph',
      topSpeedNote: 'Top track speed (with summer tires)',
      engineType: 'Gasoline',
      imageUrl: 'https://images-porsche.imgix.net/-/media/60CD3B3E5B914480B5C36B412D875135_FAC15FB326A34734923FDCB1976F34A2_718-Boxster-Style-Edition-sideshot?w=900&q=45&crop=faces%2Centropy%2Cedges&auto=format'
    },
    {
      id: '718-cayman-gts',
      name: '718 Cayman GTS 4.0',
      price: 'From $103,300¹',
      acceleration: '3.8 s',
      accelerationNote: '0 - 60 mph with Sport Chrono Package',
      horsepower: '394 hp',
      horsepowerNote: 'Max. engine power',
      topSpeed: '179 mph',
      topSpeedNote: 'Top track speed (with summer tires)',
      engineType: 'Gasoline',
      imageUrl: 'https://images-porsche.imgix.net/-/media/E27875C9513D4899B596093AC53B7407_8EA111E8A92F4A7BAC344DAD79DA99EE_718-Boxster-GTS-40-sideshot?w=900&q=45&crop=faces%2Centropy%2Cedges&auto=format'
    }
  ];

  // 911 Series Models
  nine11Models = [
    {
      id: '911-carrera',
      name: '911 Carrera',
      price: 'From $107,000¹',
      acceleration: '3.9 s',
      accelerationNote: '0 - 60 mph',
      horsepower: '388 hp',
      horsepowerNote: 'Max. engine power',
      topSpeed: '183 mph',
      topSpeedNote: 'Top track speed (with summer tires)',
      engineType: 'Gasoline',
      imageUrl: 'https://images-porsche.imgix.net/-/media/66C5132442584A4EBE1159CEB1B5D476_9694CB9F5C63484D9509AFD68A47CC0A_911-carrera-sideshot?w=900&q=45&crop=faces%2Centropy%2Cedges&auto=format'
    },
    {
      id: '911-carrera-s',
      name: '911 Carrera S',
      price: 'From $151,700¹',
      acceleration: '3.3 s',
      accelerationNote: '0 - 60 mph',
      horsepower: '473 hp',
      horsepowerNote: 'Max. engine power',
      topSpeed: '191 mph',
      topSpeedNote: 'Top track speed (with summer tires)',
      engineType: 'Gasoline',
      imageUrl: 'https://images-porsche.imgix.net/-/media/9EDE0298FE814C2784B12D4FD1B901D9_2EE74A761D2F40EDBF4928098334F8B3_911-carrera-s-sideshot?w=900&q=45&crop=faces%2Centropy%2Cedges&auto=format'
    },
    {
      id: '911-carrera-gts',
      name: '911 Carrera GTS',
      price: 'From $175,900¹',
      acceleration: '2.9 s',
      accelerationNote: '0 - 60 mph with Sport Chrono Package',
      horsepower: '532 hp',
      horsepowerNote: 'Max. power combined',
      topSpeed: '194 mph',
      topSpeedNote: 'Top track speed (with summer tires)',
      engineType: 'Gasoline',
      imageUrl: 'https://images-porsche.imgix.net/-/media/9CD53A02737F40A0806BB5EAE1A80F54_D92CC07A446F4B0A8A492A88DD260C0C_911_carrera_gts_sideshot?w=900&q=45&crop=faces%2Centropy%2Cedges&auto=format'
    }
  ];

  // Combine all models
  allModels = [...this.seven18Models, ...this.nine11Models];
  selectedModel: any = null;

  selectModel(model: any) {
    this.selectedModel = model;
  }

  hoveredId: string | null = null;

}