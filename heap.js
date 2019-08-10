// getMax = O(1)
// insert = O(logN)
// remove = O(logN)

class MinHeap {
    constructor(size) {
        this.array = [];
        this.count = 0;
        this.size = size;
    }

    static swap(array, indexA, indexB) {
        var tmp = array[indexA];
        array[indexA] = array[indexB];
        array[indexB] = tmp;
    }

    getLeftChild(index) {
        if (index >= this.count) throw (new Error('Out of bounds of heap'));
        return this.array[(2*index) + 1];
    }

    getRightChild(index) {
        if (index >= this.count) throw (new Error('Out of bounds of heap'));
        return this.array[(2*index) + 2];
    }

    getParentIndex(index) {
        return Math.floor((index-1)/2);
    }

    shiftUp(index) {
        if (index <= 0) return;
        if (this.array[this.getParentIndex(index)] > this.array[index]) {
            MinHeap.swap(this.array, index, this.getParentIndex(index));
            this.shiftUp((index-1)/2);
        }
    }

    insert(val) {
        if (this.count >= this.size) throw (new Error('HeapOverFlow Error'));
        this.array[this.count] = val;
        this.count++;
        this.shiftUp(this.count-1);
    }

    getMin() {
        if (this.count == 0) throw (new Error('EmptyHeapException'));
        return this.array[0];
    }
    
}

var heap = new MinHeap(30);
heap.insert(5);
heap.insert(17);
heap.insert(10);
heap.insert(15);
heap.insert(12);
heap.insert(7);
heap.insert(6);

console.log(heap.array);