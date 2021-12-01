const CircularLinkedList = (function () {
  const Node = function (data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  };

  const CircularLinkedList = function () {
    this.head = null;
    this.tail = null;

    this.current = null;

    this.length = 0;
  };

  CircularLinkedList.prototype = {
    insert: function (data) {
      if (!data) {
        return false;
      }

      const newNode = new Node(data);
      if (this.tail) {
        const preNode = this.tail;
        const headNode = this.head;
        newNode.prev = preNode;
        headNode.prev = newNode;
        newNode.next = preNode.next;
        preNode.next = newNode;
      } else {
        newNode.prev = newNode;

        newNode.next = newNode;
        this.head = newNode;
      }
      this.tail = newNode;
      this.length += 1;
      return true;
    },

    next: function () {
      if (!this.current || !this.tail) {
        //노드 길이가 0일 때는 이동안됨
        return false;
      }

      this.current = this.current.next;
      return true;
    },
  };

  return CircularLinkedList;
})();

export const list = new CircularLinkedList();
