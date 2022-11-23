export interface ListDataResponse<T> {
    data: T[];
    total: number;
    page: number;
    last_page: number;
}
