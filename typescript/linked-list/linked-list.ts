import { throws } from "assert";

type HeadNode<T> = {
  next?: Node<T> | TailNode<T>;
};

type TailNode<T> = {
  prev?: Node<T> | HeadNode<T>;
};

class Node<T> {
  value: number | undefined;
  next: Node<T> | TailNode<T>;
  prev: Node<T> | HeadNode<T>;

  constructor(
    value: number | undefined, // what happens when it is undefined?
    prev: Node<T> | HeadNode<T>,
    next: Node<T> | TailNode<T>
  ) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

// null <- [headnode] -> [node] <- [tailnode] -> null

// push(node2)

export class LinkedList<T> {
  // can we initiaite an instance where this is
  head: HeadNode<T>;
  tail: TailNode<T>;
  size: number;

  constructor() {
    this.head = {};
    this.tail = {};
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  push(value: number): void {
    const node = new Node(value, this.tail.prev, this.tail);

    if (this.size === 0) {
      // first item in list
      this.head.next = node;
      this.tail.prev = node;
    } else if (this.tail.prev) {
      // add at the end
      // new Node (value, prev, next)
      this.tail.prev.next = node; // old node points to new node
      this.tail.prev = node; // tails points to new node
    }
    this.size += 1;
  }

  printAll(): void {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  pop(): number | undefined {
    const popped =
      this.tail && this.tail.prev ? this.tail.prev.value : undefined;
    if (this.tail) {
      if (this.tail.prev) {
        // console.log("value to pop", this.tail.prev.value);
        if (this.tail.prev.prev) {
          // console.log("value before value to pop", this.tail.prev.prev.value);
          this.tail.prev.prev.next = this.tail;
          this.tail.prev = this.tail.prev.prev;
        }
      }
    }
    this.size -= 1;
    return popped;
  }

  shift(): number | undefined {
    const popped =
      this.head && this.head.next ? this.head.next.value : undefined;
    if (this.head && this.head.next && this.head.next.next) {
      if (this.head.next) {
        if (this.head.next.next) {
          this.head.next.next.prev = this.head;
          this.head.next = this.head.next.next;
        }
      }
    } // head
    this.size -= 1;
    return popped;
  }

  unshift(value: number): void {
    const node = new Node(value, null, null);
    if (this.head) {
      if (this.head.next) {
        this.head.next.prev = node;
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next = node;
      }
    } else {
      this.head = new Node(undefined, null, null);
      this.tail = new Node(undefined, null, null);
      const node = new Node(value, this.head, this.tail);
      this.head.next = node;
      this.tail.prev = node;
    }
    this.size += 1;
  }

  delete(value: number): void {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        if (curr.next && curr.prev) {
          curr.prev.next = curr.next;
          curr.next.prev = curr.prev;
          this.size -= 1;
          break;
        }
      }
      curr = curr.next;
    }
  }

  count(): number {
    return this.size;
  }
}

// const list = new LinkedList<number>();
