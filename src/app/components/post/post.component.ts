import { Component, Input, OnInit } from '@angular/core';
import { Post } from "../../../interfaces/post.interface";
import { MessageTypeEnum } from "../../../enums/message-type.enum";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post!: Post;

  public get MessageTypeEnum() {
    return MessageTypeEnum;
  }

  get signature() {
    switch (this.post.sign.signType) {
      case 0:
      case 3:
        return this.post.sign.companyDisplayName;
      case 1:
        return this.post.sign.location;
      case 2:
        return this.post.sign.title;
      case 4:
        return this.post.sign.userName;
      case 5:
        return `${this.post.sign.firstLastName.firstName} ${this.post.sign.firstLastName.lastName}`;
      case 6:
      case 7:
        return 'Teacher';
      case 8:
        return "Deactivated user";
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
