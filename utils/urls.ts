
export default {
    dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017",
    pages: {
        index: "/",
        adminHome: "/admin",
        addTree: "/admin/create",
        adminTrees: "/admin/trees",
        adminUsers: "/admin/users",
        updateTree: (treeId: string) => `/admin/trees/${treeId}`,
        user: (userId: string) => `/admin/users/${userId}`
    },
    api: {
        trees: {
            index: "/api/admin/trees",
            updateTree: (treeId: string) => `/api/admin/trees/${treeId}`,
        },
        users: {
            index: `/api/auth/users/`,
            user: (userId: string) => `/api/auth/users/${userId}`
        },
        contentful: {
            treeEntry: (treeId: string) => `/api/contentful/${treeId}`
        },
    },
}
