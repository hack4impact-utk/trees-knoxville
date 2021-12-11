import { addTree, deleteTree, getTree, getTrees } from "../../server/actions/Tree";
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
        TreeSchema.findOneAndDelete = jest.fn().mockImplementation(async (tree: Tree) => tree);

        await addTree(mockTree);
        await deleteTree({ _id: "test-id123" });
        expect(TreeSchema.findOneAndDelete).lastCalledWith({ _id: "test-id123" });
        expect(TreeSchema.findOneAndDelete).toHaveBeenCalledTimes(1);
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

describe("getTrees() tests", () => {
    test("valid call", async () => {

        TreeSchema.find = jest.fn().mockImplementation(async (tree: Tree) => tree);

        await getTrees();
        expect(TreeSchema.find).toHaveBeenCalledTimes(1);
    });

    test("trees found", async () => {

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

        const mockTree2: Tree = {
            _id: "test-id12345",
            species: "test species2",
            age: 2222,
            coordinates: {
                latitude: 123452,
                longitude: 1234562,
            },
            adopted: false,
            watering: false,
            pruning: true,
        };

        TreeSchema.find = jest.fn().mockResolvedValue([mockTree, mockTree2]);

        expect(getTrees()).resolves.toEqual([mockTree, mockTree2]);
    });

    test("no trees found", async () => {

        TreeSchema.find = jest.fn().mockResolvedValue(null);

        expect(getTrees()).rejects.toThrow("No trees found");
    });
});