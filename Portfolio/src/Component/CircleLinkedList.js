export var CircularLinkedList = (function () {
  var Node = function (data) {
    this.data = data;
    this.next = null;
  };

  var CircularLinkedList = function () {
    this.tail = null;

    this.before = null;
    this.current = null;

    this.length = 0;
  };

  CircularLinkedList.prototype = {
    insert: function (data) {
      if (!data) {
        return false;
      }

      var newNode = new Node(data);
      if (this.tail) {
        var preNode = this.tail;
        newNode.next = preNode.next;
        preNode.next = newNode;
      } else {
        newNode.next = newNode;
      }
      this.tail = newNode;
      this.length += 1;
      return true;
    },

    first: function () {
      if (this.length < 1) {
        //노드 길이 0일 때는 첫번째 지정도 안됨
        return false;
      }

      this.before = this.tail; //길이에 상관없이 tail이 before, tail.next가 헤드(current)
      this.current = this.tail.next; //1일 때나 2일 때나 결국 같은 노드를 가리킴
      return true;
    },

    next: function () {
      if (!this.current || !this.tail) {
        //노드 길이가 0일 때는 이동안됨
        return false;
      }

      this.before = this.current;
      this.current = this.current.next;

      return true;
    },

    remove: function () {
      if (!this.current || this.length < 1) {
        //노드 길이가 0일 때는 삭제안됨
        return false;
      }

      if (this.length === 1) {
        this.before = null;
        this.current = null;
        this.tail = null;
        this.length = 0;
        return true;
      }

      this.before.next = this.current.next;
      this.current = this.before;

      this.length -= 1;
      return true;
    },

    count: function () {
      return this.length;
    },
  };

  return CircularLinkedList;
})();

var list = new CircularLinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
console.log(list.tail.next);
