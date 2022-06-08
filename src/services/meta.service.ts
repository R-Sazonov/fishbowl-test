import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { Meta } from "../interfaces/meta.interface";

const baseUrl = `${environment.apiUrl}/meta`;

@Injectable({ providedIn: 'root' })
export class MetaService {
  constructor(private http: HttpClient) {
  }

  getMeta(): Observable<Meta> {
    return this.http.get<Meta>(baseUrl);
  }
}
