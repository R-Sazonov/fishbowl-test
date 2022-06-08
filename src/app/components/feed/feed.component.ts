import { Component, OnInit } from '@angular/core';
import { PostService } from "../../../services/post.service";
import { Meta } from "../../../interfaces/meta.interface";
import { Card } from "../../../interfaces/card.interface";
import { Post } from "../../../interfaces/post.interface";
import { environment } from "../../../environments/environment";
import { MetaService } from "../../../services/meta.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];
  positionCardMap: Map<number, Card> = new Map<number, Card>();

  fetchPostsFrom = 0;

  constructor(
    private postService: PostService,
    private metaService: MetaService,
  ) {
    this.fetchPosts();
  }

  ngOnInit(): void {
    this.metaService.getMeta()
      .subscribe(
        (meta: Meta) => {
          const cards = (meta?.cards || []).filter(card => card.type === 0 || card.type === 2);

          console.log("cards: ", cards)

          for (const card of cards) {
            const cardAtPosition = this.positionCardMap.get(card.position);

            if (cardAtPosition) {
              if (cardAtPosition.priority && card.priority && card.priority > cardAtPosition.priority) {
                this.positionCardMap.set(card.position, card);
              }
            } else {
              this.positionCardMap.set(card.position, card);
            }
          }

          console.log("cardsMap: ", this.positionCardMap.entries())
        },
        error => console.log("Meta error: ", error)
      );
  }

  onScrollDown() {
    this.fetchPostsFrom += environment.postsBatch;
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getPosts(environment.postsBatch, this.fetchPostsFrom)
      .subscribe(
        (res: { posts: Post[] }) => {
          this.posts.push(...res.posts);
          console.log("posts: ", this.posts);
        },
        error => console.log("Posts error: ", error)
      );
  }
}
