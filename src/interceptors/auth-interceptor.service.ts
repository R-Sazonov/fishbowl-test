import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authenticatedRequest = req.clone({
      headers: req.headers.set('session-key', environment.sessionKey)
    });

    return next.handle(authenticatedRequest);
  }
}
