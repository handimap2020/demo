import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tag } from '../../tag/models/tag.model';
import { Spot, SpotForm } from '../models/explore.model';

@Component({
  selector: 'app-explore-form',
  templateUrl: './explore-form.component.html',
  styleUrls: ['./explore-form.component.scss']
})
export class ExploreFormComponent implements OnInit {
  @Input() set data(value: Spot) {
    this.editId = value.id;
    this.formGroup = new FormGroup({
      name: new FormControl([value.name]),
      x: new FormControl([value.x]),
      y: new FormControl([value.y]),
      url: new FormControl([value.url]),
      tags: new FormControl(this.tags.filter(x => value.tags.includes(x.id))),
    });
  }
  @Input() tags: Tag[];
  @Output() output = new EventEmitter<SpotForm>();

  kakao = window['kakao'];
  map: any;

  formGroup: FormGroup;
  editId: string;
  name: string;

  constructor() { }

  ngOnInit(): void {
    const container = document.getElementById('map2'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new this.kakao.maps.LatLng(37.585953, 127.028881), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    this.map = new this.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


    if (!this.editId) {
      this.formGroup = new FormGroup({
        name: new FormControl(['']),
        x: new FormControl(['']),
        y: new FormControl(['']),
        url: new FormControl(['']),
        tags: new FormControl([]),
      });
    }
    else {
      const bounds = new this.kakao.maps.LatLngBounds();
      bounds.extend(new this.kakao.maps.LatLng(this.formGroup.controls['y'].value, this.formGroup.controls['x'].value));
      this.map.setBounds(bounds);
      const marker = new this.kakao.maps.Marker({
          map: this.map,
          position: new this.kakao.maps.LatLng(this.formGroup.controls['y'].value, this.formGroup.controls['x'].value) 
      });
      // 마커에 클릭이벤트를 등록합니다
      const infowindow = new this.kakao.maps.InfoWindow({zIndex:1});
      infowindow.setContent('<div style="padding:5px;font-size:12px;">' + this.formGroup.controls['name'].value + '</div>');
      infowindow.open(this.map, marker);
    }
  }

  save(): void {
    this.output.emit({
      name: this.formGroup.controls['name'].value,
      x: this.formGroup.controls['x'].value,
      y: this.formGroup.controls['y'].value,
      url: this.formGroup.controls['url'].value,
      tags: this.formGroup.controls['tags'].value.map(x => x.id),
    });
  }

  findByName(value: string): void{
    if (!value.length) {
      return;
    }
    const search = new this.kakao.maps.services.Places();
    const infowindow = new this.kakao.maps.InfoWindow({zIndex:1});
    const that = this;

    search.keywordSearch(value, (data, status, pagination) => {
      if (status === that.kakao.maps.services.Status.OK) {
          const bounds = new that.kakao.maps.LatLngBounds();
          data.forEach(location => {
            const marker = new that.kakao.maps.Marker({
                map: that.map,
                position: new that.kakao.maps.LatLng(location.y, location.x) 
            });
            // 마커에 클릭이벤트를 등록합니다
            that.kakao.maps.event.addListener(marker, 'click', () => {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + location.place_name + '</div>');
                infowindow.open(that.map, marker);
                that.formGroup.controls['name'].setValue(location.place_name);
                that.formGroup.controls['x'].setValue(location.x);
                that.formGroup.controls['y'].setValue(location.y);
            });
            bounds.extend(new that.kakao.maps.LatLng(location.y, location.x));
          });
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          this.map.setBounds(bounds);
      }
    });
  } 
}
