import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { Post } from "../interfaces/post.interface";

const baseUrl = `${environment.apiUrl}/posts`;

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {
  }

  getPosts(count: number, start:number): Observable<{ posts: Post[] }> {
    return this.http.get<{ posts: Post[] }>(`${baseUrl}?count=${count}&start=${start}`);
  }
}
