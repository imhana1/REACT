import api from "./api";

export const readAll = (pageno)=>api.get(`/api/posts?pageno=${pageno}`);