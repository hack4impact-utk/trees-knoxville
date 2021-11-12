
export default {
    dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017",
    api: {
        trees: "/api/admin/trees"
    }
}