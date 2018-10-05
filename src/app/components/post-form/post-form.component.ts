import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/Post";
import { PostService } from "../../services/post.service";
@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  constructor(private ps: PostService) {}

  ngOnInit() {}

  addPost(title, body) {
    if (!title || !body) {
      alert("Please add post");
    } else {
      this.ps.savePost({ title, body } as Post).subscribe(data => {
        console.log(data);
      });
    }
  }
}
