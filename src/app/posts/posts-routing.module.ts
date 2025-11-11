import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ViewPostsComponent } from "./view-posts/view-posts.component";
import { PostsbyIdComponent } from "./postsby-id/postsby-id.component";

const routes:Routes=[{path:'',component:ViewPostsComponent},{path:'comment',component:PostsbyIdComponent}]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PostsRoutingModule{}