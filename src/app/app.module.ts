import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AuthInterceptorService } from "../interceptors/auth-interceptor.service";
import { FeedComponent } from './components/feed/feed.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { PostComponent } from './components/post/post.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule, DatePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
