import { Component, OnInit } from '@angular/core';
import { Tag } from '../../tag/models/tag.model';
import { TagService } from '../../tag/tag.service';
import { ExploreService } from '../explore.service';
import { Spot } from '../models/explore.model';

@Component({
  selector: 'app-explore-layout',
  templateUrl: './explore-layout.component.html',
  styleUrls: ['./explore-layout.component.scss']
})
export class ExploreLayoutComponent implements OnInit {
  kakao = window['kakao'];
  map: any;

  spotList: Spot[];
  spots: Spot[];
  tags: Tag[];
  nameFilter = '';
  tagFilter = [];

  constructor(
    public exploreService: ExploreService,
    public tagService: TagService,
  ) { }

  ngOnInit(): void {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new this.kakao.maps.LatLng(37.585953, 127.028881), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    this.map = new this.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    this.tags = this.tagService.getAll();
    this.spotList = this.exploreService.getAll();
    this.spots = this.spotList;
    // 마커가 표시될 위치입니다 
    const markerPosition  = new this.kakao.maps.LatLng(37.585953, 127.028881); 
    // 마커를 생성합니다
    const marker = new this.kakao.maps.Marker({
      position: markerPosition
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(this.map);

    var iwContent = `
    <div style="width: 200px; padding:10px">
      <strong>
        <a href="https://www.naver.com" title="안암역">안암역</a>
      </strong>
      <div class="content">
          <div>
          <span class="label label-blue">낮은 문턱</span>
          <span class="label label-light-blue">넓은 공간</span>
          </div>
          <p data-id="contact" class="contact">
            <a href="#none" target="_blank" class="detail">상세보기</a>
            <a href="#none" data-id="report" class="report">정보수정</a>
          </p>
      </div>
    </div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new this.kakao.maps.LatLng(37.585953, 127.028881); //인포윈도우 표시 위치입니다
    
    // 인포윈도우를 생성합니다
    var infowindow = new this.kakao.maps.InfoWindow({
      position : iwPosition, 
      content : iwContent,
    });
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(this.map, marker); 
  }

  filter() {
    this.spots = this.spotList.filter(x => x.name.includes(this.nameFilter));
    if (this.tagFilter) {
      this.tagFilter.forEach(tag => {
        this.spots = this.spots.filter(x => x.tags.includes(tag.id));
      })
    }
  }

  onDelete(id: string): void {
    this.exploreService.delete(id);
    this.spotList = this.exploreService.getAll();
    this.filter();
  }

}
