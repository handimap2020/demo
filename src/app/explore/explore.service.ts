import { Injectable } from '@angular/core';
import { Spot, SpotForm } from './models/explore.model';

@Injectable()
export class ExploreService {
  spots = [
      {
          id: '0',
          name: '테스트',
          x: 5,
          y: 1,
          tags: ['1', '2'],
      },
  ];

  constructor() { }

  getAll(): Spot[] {
      return this.spots;
  }

  add(data: SpotForm): void {
    this.spots = [...this.spots, {
        id: this.spots.length.toString(),
        ...data
    }];
  }

  edit(id: string, data: SpotForm): void {
      const target = this.spots.find(x => x.id === id);
      this.spots[this.spots.indexOf(target)] = {
          ...data,
          id,
      };
  }

  get(id: string): Spot {
      return this.spots.find(x => x.id === id);
  }

  delete(id: string): void {
    this.spots = [...this.spots.filter(x => x.id !== id)];
  }
}
