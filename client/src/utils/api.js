import axios from "axios";

export default {

    getbooks: (query) => axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: "title:" + query } }),
    savebook: (book) => axios.post("/api/books", book),
    getallbooks: () => axios.get("/api/books"),
    deletebook: (id) => axios.delete("/api/books/" + id)
}