import axios from "axios";

export default class PostService {
    static async getAll(LIMIT = 10, page = 1){
        return await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: LIMIT,
                _page: page
            }
        });
    }

    static async getById(id){
        return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    }

    static async getCommentsById(id){
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    }
}