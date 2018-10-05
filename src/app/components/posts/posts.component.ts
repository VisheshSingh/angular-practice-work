import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/Post";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: "",
    body: ""
  };
  isEdit: boolean = false;

  constructor(private ps: PostService) {}

  ngOnInit() {
    this.ps.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  updatePost() {
    console.log(123);
  }
}
