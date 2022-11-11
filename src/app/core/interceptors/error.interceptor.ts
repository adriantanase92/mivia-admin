import {Injectable} from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HTTP_INTERCEPTORS
} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {NotificationService} from "../notifications/notification.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private notificationService: NotificationService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.error instanceof ErrorEvent) {
                        console.log("Error Event");
                    } else {
                        // Status Doc
                        // 1xx - Info
                        // 2xx - Success
                        // 3xx - Redirections
                        // 4xx - Client Error
                        // 5xx - Server Error
                        switch (error.status) {
                            case 401: // Unauthorized
                                console.log(error.statusText);
                                this.notificationService.error(
                                    `Authorization Error: ${error.statusText}`
                                );
                                break;
                            case 403: // Forbidden
                                console.log(error.statusText);
                                this.notificationService.error(`Access Error: ${error.statusText}`);
                                break;
                            case 404: // Not Found
                                console.log(error.statusText);
                                this.notificationService.error(`Route Error: ${error.statusText}`);
                                break;
                            case 503: // Server error
                                console.log(error.statusText);
                                this.notificationService.error(`Server Error: ${error.statusText}`);
                                break;
                        }
                    }
                } else {
                    console.log("An error occured.");
                }
                return throwError(() => new Error(error.statusText));
            })
        );
    }
}

/**
 * Provider POJO for the interceptor
 */
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
