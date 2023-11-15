class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }

  insert(value) {
    const insertRecursive = (node, value) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new BinarySearchTree(value);
        } else {
          insertRecursive(node.left, value);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new BinarySearchTree(value);
        } else {
          insertRecursive(node.right, value);
        }
      }
    };

    insertRecursive(this, value);
    this.magnitude++;
  }

  size() {
    const sizeRecursive = (node) => {
      if (node === null) {
        return 0;
      }
      return 1 + sizeRecursive(node.left) + sizeRecursive(node.right);
    };

    return sizeRecursive(this);
  }

  contains(value) {
    const containsRecursive = (node, value) => {
      if (node === null) {
        return false;
      }
      if (value === node.value) {
        return true;
      } else if (value < node.value) {
        return containsRecursive(node.left, value);
      } else {
        return containsRecursive(node.right, value);
      }
    };

    return containsRecursive(this, value);
  }

  depthFirstForEach(callback, order = 'in-order') {
    const traverse = (node, order) => {
      if (node !== null) {
        if (order === 'pre-order') {
          callback(node.value);
        }
        traverse(node.left, order);
        if (order === 'in-order') {
          callback(node.value);
        }
        traverse(node.right, order);
        if (order === 'post-order') {
          callback(node.value);
        }
      }
    };

    traverse(this, order);
  }

  breadthFirstForEach(callback) {
    const queue = [this];
    while (queue.length > 0) {
      const node = queue.shift();
      callback(node.value);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
}

module.exports = BinarySearchTree;