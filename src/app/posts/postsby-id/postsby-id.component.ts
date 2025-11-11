import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-postsby-id',
  templateUrl: './postsby-id.component.html',
  styleUrls: ['./postsby-id.component.css']
})
export class PostsbyIdComponent implements OnInit {
  commentsData:any=[];
  constructor(private route:ActivatedRoute,private postService:PostsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log(params['category'])
      this.postService.getPostComments(params['category']).subscribe((response)=>{
        this.commentsData=response;
      })
    })
  }

  handlePostClick(id:any){
    console.log(id)
  }
  handleCommentClick(id:any){
    console.log(id);
  }

}
