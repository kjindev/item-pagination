export declare const getPagination: <T extends {}>(inputData: T[], itemCnt: number, currentPage: number) => (T & {
    page: number;
})[];
export default getPagination;
