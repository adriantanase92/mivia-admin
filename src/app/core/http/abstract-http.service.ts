import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class AbstractHttpService {
    private url = "http://localhost:3000/api";

    constructor(private http: HttpClient) {}

    getAll<T>(collation: string, query?: string): Observable<T[]> {
        const fullUrl = query ? `${this.url}/${collation}&${query}` : `${this.url}/${collation}`;
        return this.http.get<T[]>(fullUrl);
    }

    createOne<T>(collation: string, data: T): Observable<any> {
        return this.http
            .post(`${this.url}/${collation}`, JSON.stringify(data), {observe: "response"})
            .pipe(map((res: any) => res.status));
    }

    getOneById<T>(collation: string, id: string): Observable<T> {
        return this.http.get<T>(`${this.url}/${collation}/${id}`);
    }

    updateOne(collation: string, data: any): Observable<any> {
        return this.http
            .patch(`${this.url}/${collation}/${data.id}`, JSON.stringify(data), {
                observe: "response"
            })
            .pipe(map((res) => res.status));
    }

    deleteOne(collation: string, id: string) {
        return this.http
            .delete(`${this.url}/${collation}/${id}`, {observe: "response"})
            .pipe(map((res) => res.status));
    }
}
