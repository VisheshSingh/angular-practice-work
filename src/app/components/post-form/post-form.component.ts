import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Post } from "../../models/Post";
import { PostService } from "../../services/post.service";
@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output()
  newPost: EventEmitter<Post> = new EventEmitter();

  @Input()
  currentPost: Post;

  @Input()
  isEdit: boolean;

  constructor(private ps: PostService) {}

  ngOnInit() {}

  addPost(title, body) {
    if (!title || !body) {
      alert("Please add post");
    } else {
      this.ps.savePost({ title, body } as Post).subscribe(data => {
        this.newPost.emit(data);
      });
    }
  }
  updatePost() {
    console.log(123);
  }
}
