// Definition for binary tree:
function Tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
}
let isDebug = false;

const debug = (...args) => isDebug ? console.log(...args) : null;

function restoreBinaryTree(inorder, preorder) {
    if (!Array.isArray(inorder) || !Array.isArray(preorder)) {
        throw new TypeError('Both inorder and preorder parameters must be arrays.');
    }

    if (inorder.length !== preorder.length) {
        throw new Error(`Both arrays must be same length. indorder was ${inorder.length}; preorder was ${preorder.length}`)
    }

    const tracker = [];
    let currentParent = null, tree = null;
    const visited_nodes = [];
    let inorder_index = 0;
    let preorder_index = 0;

    let traverse_pre = true;
    let counter = 0;

    while (inorder_index < inorder.length && preorder_index < preorder.length) {
        counter++;
        let inorder_value = inorder[inorder_index]
        debug(`inorder: index: ${inorder_index}; value: ${inorder_value}`)
        let preorder_value = preorder[preorder_index]
        debug(`preorder: index: ${preorder_index}; value: ${preorder_value}`)

        const newNode = new Tree(preorder_value);

        if (traverse_pre) {
            debug('Traversing Preordered')
            if (!tree) {
                debug('Root');
                tree = newNode;
            } else {
                debug(`Adding to Left: `, newNode);
                currentParent.left = newNode;
            }
            currentParent = newNode;
            tracker.push(currentParent);

            visited_nodes.push(preorder_value);
            preorder_index++;

            if (inorder_value === preorder_value) {
                debug('Reached Next In Order');
                traverse_pre = false;
            }

        } else {
            if (visited_nodes.includes(inorder_value)) {
                currentParent = tracker.pop()
                debug('Pop Up Stack', currentParent.value)
                debug('Move to Next In Order')
                inorder_index++
            } else {
                debug(`Adding to Right: `, newNode);
                currentParent.right = newNode;
                currentParent = newNode;
                visited_nodes.push(preorder_value);
                tracker.push(currentParent);

                preorder_index++;
                traverse_pre = true;
            }
        }
        debug('Current Parent: ', currentParent);
        debug('Full Tree: ', tree);
    }
    debug(`Looped ${counter} times.`);
    debug(tree && JSON.stringify(tree, null, 2));
    return tree || {};
}

export default restoreBinaryTree;

