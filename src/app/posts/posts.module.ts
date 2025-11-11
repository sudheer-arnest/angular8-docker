import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsbyIdComponent } from './postsby-id/postsby-id.component';
import { PostcardComponent } from '../components/postcard/postcard.component';


@NgModule({
  declarations: [ViewPostsComponent, PostsbyIdComponent,PostcardComponent],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
