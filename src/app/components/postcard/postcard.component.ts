import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {

  constructor() { }
  @Input() cardData:any
  @Output() clickedComment = new EventEmitter<any>();
  @Output() clickedPost = new EventEmitter<any>();
  ngOnInit() {
  }
  handleCommentClick(id:number){
    this.clickedComment.emit(id)
  }
  handlePostClick(id:number){
    this.clickedPost.emit(id)
  }
}
