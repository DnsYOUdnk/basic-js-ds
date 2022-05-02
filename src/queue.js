const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
      return (this.length === 0) ? null : this.head;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (this.length === 0) {
      this.head = newNode;
    }
    else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.length != 0) {
      let del = this.head.value;
      this.head = this.head.next;
      this.length--;
      return del;
    }
    else {
      return this.head;
    }
  }
}

module.exports = {
  Queue
};
