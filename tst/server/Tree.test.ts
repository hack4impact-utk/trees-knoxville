import { addTree } from "../../server/actions/Tree";
import TreeSchema from "../../server/models/Tree";
import { Tree } from "../../utils/types";

describe("addTree() tests", () => {
    test("valid tree", async () => {
        const mockTree = {
            species: "test species",
            age: 1234,
            coordinates: {
                latitude: 12345,
                longitude: 123456,
            },
            adopted: true,
            watering: true,
            pruning: false,
        };

        TreeSchema.create = jest.fn().mockImplementation(async (tree: Tree) => tree);

        /* eslint @typescript-eslint/unbound-method: "off" */
        await addTree(mockTree);
        expect(TreeSchema.create).lastCalledWith(mockTree);
        expect(TreeSchema.create).toHaveBeenCalledTimes(1);
    });
});