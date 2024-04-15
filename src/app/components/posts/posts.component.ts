import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  // providers: [PostService],
})
export class PostsComponent {
  posts: any = [];

  constructor(postService: PostService) {
    // let postService = new PostService();
    this.posts = postService.getAllPost();
  }
}
