import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  postsData :any=[]
  openCommentModal:boolean=false;
  postComments=[];
  constructor(private postsService:PostsService,private router:Router) { }
  ngOnInit() {
    this.postsService.getPosts().subscribe((response)=>{
      this.postsData=response.slice(0,18);
    })
  }
  handleCommentClick(id:number){
    this.postsService.getPostComments(id).subscribe((response)=>{
      this.openCommentModal=true
      this.postComments=response
    })
  }
  handleModalClose(){
    this.openCommentModal=false
  }
  handlePostClick(id:any){
    this.router.navigate(['/posts/comment'],{
      queryParams:{category:1}
    })
  }

}
