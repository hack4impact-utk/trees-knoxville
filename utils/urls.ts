
export default {
    dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017",
    pages: {
        index: "/",
        adminHome: "/admin",
        addTree: "/admin/create",
        adminTrees: "/admin/trees",
        updateTree: (treeId: string) => `/admin/trees/${treeId}`,
        getUser: (userId: string) => `/admin/users/${userId}`
    },
    api: {
        trees: {
            index: "/api/admin/trees",
            updateTree: (treeId: string) => `/api/admin/trees/${treeId}`,
        },
        users: {
            index: () => `/api/auth/users/`,
            getUser: (userId: string) => `/api/auth/users/${userId}`
        },
    },
}
