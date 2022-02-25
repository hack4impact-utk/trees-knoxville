
export default {
    dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017",
    pages: {
        index: "/",
        adminHome: "/admin",
        addTree: "/admin/create",
        adminTrees: "/admin/trees",
        updateTree: (treeId: string) => `/admin/trees/${treeId}`,
    },
    api: {
        trees: {
            index: "/api/admin/trees",
            updateTree: (treeId: string) => `/api/admin/trees/${treeId}`,
        },
        auth: {
            index: () => `/api/auth/users/`,
        },
    },
}
