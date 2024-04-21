export interface IResults{
    id: number;
    name: string;
}
export interface ISearch{
    page: number;
    results: IResults[];
    total_pages: number;
    total_results: number;
}