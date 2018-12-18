import restoreBinaryTree from './binaryRestore';

describe("Binary Tree Restore", () => {
    it("Should Throw on Invalid Params", () => {
        expect(() => restoreBinaryTree()).toThrow();
        expect(() => restoreBinaryTree([], 3)).toThrow();
        expect(() => restoreBinaryTree(3, [])).toThrow();
        expect(() => restoreBinaryTree(null, undefined)).toThrow();
    })

    it("Should Return Empty Object for Empty Arrays", () => {
        expect(restoreBinaryTree([], [])).toEqual({});
    })

    it("Should Throw on Unequal Array Lengths", () => {
        expect(() => restoreBinaryTree([3, 2, 1], [3])).toThrow();
    })

    it("Should Restore 4-Tier Tree from Arrays", () => {

        // Inorder traversal:
        const inOrder = [7, 4, 2, 1, 8, 5, 3, 9, 6, 10];
        // Preorder traversal:
        const preOrder = [1, 2, 4, 7, 3, 5, 8, 6, 9, 10];

        /*
                1
               / \
              2   3
             /   / \
            4   5   6
           /   /   /  \
          7   8   9   10
        */

        const expectedTree = {
            value: 1,
            left: {
                value: 2,
                left: {
                    value: 4,
                    left: {
                        value: 7,
                        left: null,
                        right: null
                    },
                    right: null
                },
                right: null
            },
            right: {
                value: 3,
                left: {
                    value: 5,
                    left: {
                        value: 8,
                        left: null,
                        right: null
                    },
                    right: null
                },
                right: {
                    value: 6,
                    left: {
                        value: 9,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 10,
                        left: null,
                        right: null
                    }
                }
            }
        }


        const restoredTree = restoreBinaryTree(inOrder, preOrder);
        expect(restoredTree).toEqual(expectedTree);

    })

    it("Should Restore 3-Tier Tree from Arrays", () => {

        // Inorder traversal:
        const inOrder = [4, 2, 1, 5, 3, 6];
        // Preorder traversal:
        const preOrder = [1, 2, 4, 3, 5, 6];

        /*
                1
               / \
              2   3
             /   / \
            4   5   6
        */

        const expectedTree = {
            value: 1,
            left: {
                value: 2,
                left: {
                    value: 4,
                    left: null,
                    right: null
                },
                right: null
            },
            right: {
                value: 3,
                left: {
                    value: 5,
                    left: null,
                    right: null
                },
                right: {
                    value: 6,
                    left: null,
                    right: null
                }
            }
        }


        const restoredTree = restoreBinaryTree(inOrder, preOrder);
        expect(restoredTree).toEqual(expectedTree);

    })

    it("Should Restore 2-Tier Tree from Arrays", () => {

        // Inorder traversal:
        const inOrder = [2, 1, 3];
        // Preorder traversal:
        const preOrder = [1, 2, 3];

        /*
                1
               / \
              2   3
        */

        const expectedTree = {
            value: 1,
            left: {
                value: 2,
                left: null,
                right: null
            },
            right: {
                value: 3,
                left: null,
                right: null
            }
        }


        const restoredTree = restoreBinaryTree(inOrder, preOrder);
        expect(restoredTree).toEqual(expectedTree);

    })

    it("Should Restore 1-Tier Tree from Arrays", () => {

        // Inorder traversal:
        const inOrder = [1];
        // Preorder traversal:
        const preOrder = [1];

        /*
                1
        */

        const expectedTree = {
            value: 1,
            left: null,
            right: null
        }


        const restoredTree = restoreBinaryTree(inOrder, preOrder);
        expect(restoredTree).toEqual(expectedTree);

    })

})