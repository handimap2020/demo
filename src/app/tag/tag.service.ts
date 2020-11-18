import { Injectable } from '@angular/core';
import { Tag, TagForm } from './models/tag.model';

@Injectable()
export class TagService {
  tags = [
      {
          id: '1',
          name: '테스트',
          desc: '테스트',
      },
      {
          id: '2',
          name: 'asdsad',
          desc: '테스트',
      },
      {
          id: '3',
          name: '테스트3333',
          desc: '테스트',
      },
      {
          id: '4',
          name: '테스트2222',
          desc: '테스트',
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
