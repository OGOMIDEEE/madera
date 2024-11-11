import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-abput',
  templateUrl: './abput.component.html',
  styleUrls: ['./abput.component.css']
})
export class AbputComponent implements OnInit {

  getaboutData : any;
  getblogData: any;


  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getaboutData = this.getData.aboutData;
    this.getblogData = this.getData.blogData;
  }
  //video
  @ViewChild('backgroundVideo') video: ElementRef<HTMLVideoElement> | undefined;
  isPlaying = false;

  playVideo() {
    this.video?.nativeElement.play();
    this.isPlaying = true;
  }

  pauseVideo() {
    this.video?.nativeElement.pause();
    this.isPlaying = false;
  }


  @Input() progress = 0;

}
