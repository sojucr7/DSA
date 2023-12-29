class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }
 
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
    partitionList(partitionValue) {
        if (this.head === null || this.head.next === null) {
            // No need to partition if the list is empty or has only one element.
            return;
        }
    
        let beforeHead = null;
        let beforeTail = null;
        let afterHead = null;
        let afterTail = null;
        let current = this.head;
    
        while (current !== null) {
            const next = current.next;
            current.next = null; // Unlink the current node.
    
            if (current.value < partitionValue) {
                if (beforeHead === null) {
                    beforeHead = current;
                    beforeTail = current;
                } else {
                    beforeTail.next = current;
                    beforeTail = current;
                }
            } else {
                if (afterHead === null) {
                    afterHead = current;
                    afterTail = current;
                } else {
                    afterTail.next = current;
                    afterTail = current;
                }
            }
    
            current = next;
        }
    
        if (beforeHead === null) {
            // All elements are greater than or equal to the partition value.
            this.head = afterHead;
        } else {
            // Connect the "before" and "after" partitions.
            beforeTail.next = afterHead;
            this.head = beforeHead;
        }
    }

}



let myLinkedList = new LinkedList(3);
myLinkedList.push(8);
myLinkedList.push(5);
myLinkedList.push(10);
myLinkedList.push(2);
myLinkedList.push(1);

console.log("Original list:");
myLinkedList.printList();

const partitionValue = 5;
myLinkedList.partitionList(partitionValue);

console.log(`\nList after partitioning around ${partitionValue}:`);
myLinkedList.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    3
    5
    8
    5
    10
    2
    1
    List after partitioning around 5:
    3
    2
    1
    5
    8
    5
    10
*/
