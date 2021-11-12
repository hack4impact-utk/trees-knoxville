import { addTree, deleteTree } from "../../server/actions/Tree";
import TreeSchema from "../../server/models/Tree";
import { Tree } from "../../utils/types";
import mongoose from "mongoose";

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