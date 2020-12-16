import { Injectable } from '@angular/core';
import { Spot, SpotForm } from './models/explore.model';

@Injectable()
export class ExploreService {
  spots = [
      {
          id: '0',
          name: '빨간모자피자 고대점',
          url: 'assets/0.jpg',
          x: 127.03065459653,
          y: 37.5836915257628,
          tags: ['1', '4'],
      },
      {
          id: '5',
          name: '오바케돈부리쌀국수',
          url: 'assets/5.jpg',
          x: 127.02863448224,
          y: 37.5833414954282,
          tags: ['3', '4'],
      },
      {
          id: '7',
          name: '버거킹 안암오거리점',
          url: 'assets/7.jpg',
          x: 127.02918119662434,
          y: 37.58254223174245,
          tags: ['3'],
      },
      {
          id: '3',
          name: '붐바타 고대안암점',
          url: 'assets/3.jpg',
          x: 127.02954541045543,
          y: 37.58504955407934,
          tags: ['3'],
      },
      {
          id: '9',
          name: '무등산참숯갈비',
          url: 'assets/9.jpg',
          x: 127.029143161755,
          y: 37.5876219378091,
          tags: ['1', '4'],
      },
      {
          id: '4',
          name: '맥도날드 안암점',
          url: 'assets/4.jpg',
          x: 127.02926437691879,
          y: 37.58440451300253,
          tags: ['4'],
      },
      {
          id: '1',
          name: '우신향병원',
          url: 'assets/1.jpg',
          x: 127.031198435951,
          y: 37.5851464360066,
          tags: ['2', '5'],
      },
      {
          id: '2',
          name: '안암역',
          url: 'assets/2.jpg',
          x: 127.029233420248,
          y: 37.586307417971,
          tags: ['2', '6'],
      },
      {
          id: '6',
          name: '고려대학교안암병원',
          url: 'assets/6.jpg',
          x: 127.026462112346,
          y: 37.5872090646066,
          tags: ['2','5', '6'],
      },
      {
          id: '8',
          name: '고대 애기능생활관',
          url: 'assets/8.jpg',
          x: 127.027452923397,
          y: 37.5844626117563,
          tags: ['1'],
      },
      {
          id: '10',
          name: '고대 학생회관',
          url: 'assets/10.jpg',
          x: 127.0322860989,
          y: 37.5869229015776,
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
