import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class AbstractHttpService {
    private baseUrl = "http://localhost:3000/api";

    constructor(private http: HttpClient) {}

    getAll<T>(collation: string, query?: string): Observable<T> {
        const fullUrl = query
            ? `${this.baseUrl}/${collation}?${query}`
            : `${this.baseUrl}/${collation}`;
        return this.http.get<T>(fullUrl);
    }

    getOneById<T>(collation: string, id: string): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${collation}/${id}`);
    }

    createOne<T>(collation: string, data: T): Observable<any> {
        return this.http
            .post(`${this.baseUrl}/${collation}`, JSON.stringify(data), {observe: "response"})
            .pipe(map((res: any) => res.status));
    }

    updateOne(collation: string, data: any): Observable<any> {
        return this.http
            .patch(`${this.baseUrl}/${collation}/${data.id}`, JSON.stringify(data), {
                observe: "response"
            })
            .pipe(map((res) => res.status));
    }

    deleteOne(collation: string, id: string) {
        return this.http
            .delete(`${this.baseUrl}/${collation}/${id}`, {observe: "response"})
            .pipe(map((res) => res.status));
    }
}
