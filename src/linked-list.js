class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  addToHead(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  }

  removeHead() {
    if (!this.head) {
      return null;
    }

    const removedValue = this.head.value;
    this.head = this.head.next;

    if (this.head) {
      this.head.previous = null;
    } else {
      this.tail = null;
    }

    return removedValue;
  }

  removeTail() {
    if (!this.tail) {
      return null;
    }

    const removedValue = this.tail.value;
    this.tail = this.tail.previous;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    return removedValue;
  }

  search(comparator) {
    let currentNode = this.head;

    while (currentNode) {
      if (typeof comparator === 'function' && comparator(currentNode.value)) {
        return currentNode.value;
      } else if (currentNode.value === comparator) {
        return currentNode.value;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
}

module.exports = { LinkedList, Node };
