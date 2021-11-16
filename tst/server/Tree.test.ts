import { addTree, deleteTree, getTree } from "../../server/actions/Tree";
import TreeSchema from "../../server/models/Tree";
import { Tree } from "../../utils/types";
import mongoose from "mongoose";

jest.mock("server");

describe("addTree() tests", () => {  
    afterAll(() => mongoose.disconnect());

    test("valid tree", async () => {
        const mockTree: Tree = {
            species: "test species",
            age: 222,
            coordinates: {
                latitude: 12345,
                longitude: 123456,
            },
            adopted: true,
            watering: true,
            pruning: false,
        };

        TreeSchema.create = jest.fn().mockImplementation(async (tree: Tree) => tree);

        await addTree(mockTree);
        expect(TreeSchema.create).lastCalledWith(mockTree);
        expect(TreeSchema.create).toHaveBeenCalledTimes(1);
    });
});

describe("deleteTree() tests", () => {
    afterAll(() => mongoose.disconnect());

    test ("valid deletion", async () => {
        const mockTree: Tree = {
            _id: "test-id123",
            species: "test species",
            age: 222,
            coordinates: {
                latitude: 12345,
                longitude: 123456,
            },
            adopted: true,
            watering: true,
            pruning: false,
        };
        TreeSchema.findByIdAndDelete = jest.fn().mockImplementation(async (tree: Tree) => tree);

        await addTree(mockTree);
        await deleteTree("test-id123");
        expect(TreeSchema.findByIdAndDelete).lastCalledWith("test-id123");
        expect(TreeSchema.findByIdAndDelete).toHaveBeenCalledTimes(1);
    });
});

describe("getTree() tests", () => {
    afterAll(() => mongoose.disconnect());

    test("valid call", async () => {
        const mockQueryTree: Tree = {
            _id: "test-id123"
        }

        TreeSchema.findById = jest.fn().mockImplementation(async (tree: Tree) => tree);

        await getTree(mockQueryTree);
        expect(TreeSchema.findById).lastCalledWith(mockQueryTree);
        expect(TreeSchema.findById).toHaveBeenCalledTimes(1);
    });

    test("tree found", async () => {
        const mockTree: Tree = {
            _id: "test-id1234",
            species: "test species",
            age: 222,
            coordinates: {
                latitude: 12345,
                longitude: 123456,
            },
            adopted: true,
            watering: true,
            pruning: false,
        };
        
        const mockQueryTree: Tree = {
            _id: "test-id1234"
        };

        TreeSchema.findById = jest.fn().mockResolvedValue(mockTree);
        
        await expect(getTree(mockQueryTree)).resolves.toEqual(mockTree);
    });

    test("tree not found", async () => {
        const mockQueryTree: Tree = {
            _id: "test-id1234"
        };

        // findById returns null if a tree was not found
        TreeSchema.findById = jest.fn().mockResolvedValue(null);
        
        expect(getTree(mockQueryTree)).rejects.toThrow("Tree not found");
    });
    
    test("invalid query tree", async () => {
        // query tree contains more than just an ID
        const mockQueryTree: Tree = {
            _id: "test-id1234",
            species: "test species",
        };

        // query tree does not contain an ID
        const mockQueryTree2: Tree = {
            species: "test species",
        };

        expect(getTree(mockQueryTree)).rejects.toThrow("Invalid ID");
        expect(getTree(mockQueryTree2)).rejects.toThrow("Invalid ID");
    });
});