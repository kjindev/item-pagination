export declare const getPagination: <T extends {}>(inputData: T[], itemCnt: number, currentPage: number) => (T & {
    page: number;
})[];
export declare const getTotalPages: <T extends {}>(inputData: T[], itemCnt: number) => number[];
