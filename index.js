class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  add(value) {
    if(!this.head){
      this.head = this.tail = new Node(value)
    } else {
      this.head.next = new Node(value)
      this.head.next.prev = this.head
      this.head = this.head.next
      
    }
    this.size++
  }

  getHead() {
    return this.head
  }

    getTail() {
    return this.tail
  }
}

let ll = new LinkedList()
ll.add(10)
ll.add(20)
ll.add(30)
ll.add(40)
ll.getHead()
ll.getTail()