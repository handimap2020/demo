import { Injectable } from '@angular/core';
import { Tag, TagForm } from './models/tag.model';

@Injectable()
export class TagService {
  tags = [
      {
          id: '1',
          name: '휠체어 공간 있음',
          desc: '휠체어를 이용하기에 충분한 공간이 존재합니다.',
      },
      {
          id: '2',
          name: '엘리베이터 있음',
          desc: '이용 가능한 엘리베이터가 있습니다.',
      },
      {
          id: '3',
          name: '낮은 키오스크 높이',
          desc: '키오스크의 높이가 충분히 낮습니다.',
      },
      {
          id: '4',
          name: '주문 담당 직원 있음',
          desc: '별도로 주문을 담당하는 직원이 있습니다.',
      },
  ];

  constructor() { }

  getAll(): Tag[] {
      return this.tags;
  }

  add(data: TagForm): void {
    this.tags = [...this.tags, {
        id: this.tags.length.toString(),
        ...data
    }];
  }

  edit(id: string, data: TagForm): void {
      const target = this.tags.find(x => x.id === id);
      this.tags[this.tags.indexOf(target)] = {
          ...data,
          id,
      };
  }

  get(id: string): Tag {
      return this.tags.find(x => x.id === id);
  }

  delete(id: string): void {
    this.tags = [...this.tags.filter(x => x.id !== id)];
  }
}
