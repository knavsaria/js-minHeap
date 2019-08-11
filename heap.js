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
        if (index >= this.count) return;
        return this.array[(2*index) + 1];
    }

    getRightChild(index) {
        if (index >= this.count) return;
        return this.array[(2*index) + 2];
    }

    getParentIndex(index) {
        return Math.floor((index-1)/2);
    }

    shiftUp(index) {
        if (index <= 0) return;
        if (this.array[this.getParentIndex(index)] > this.array[index]) {
            MinHeap.swap(this.array, index, this.getParentIndex(index));
            this.shiftUp(this.getParentIndex(index));
        }
    }

    insert(val) {
        if (this.count >= this.size) throw (new Error('HeapOverFlow Error'));
        this.array[this.count] = val;
        this.count++;
        this.shiftUp(this.count-1);
    }

    shiftDown(index) {        
        if (2*index+1 >= this.count && 2*index+2 >= this.count) return;

        while (this.array[index] > this.getLeftChild(index) || this.array[index] > this.getRightChild(index)) {
            if (this.getLeftChild(index) <= this.getRightChild(index)) {
                MinHeap.swap(this.array, index, 2*index+1);
                this.shiftDown(2*index+1);
            }
            else {
                MinHeap.swap(this.array, index, 2*index+2);
                this.shiftDown(2*index+2);
            }
        }
    }

    remove() {
        if (this.count <= 0) throw (new Error('HeapUnderflowException'));
        var min = this.array[0];
        this.array[0] = this.array[this.count-1];
        this.count--;
        this.array.pop();
        this.shiftDown(0);
        return min;
    }


    getMin() {
        if (this.count == 0) throw (new Error('EmptyHeapException'));
        return this.array[0];
    }

    

    static isHeap(array) {
        function isLessThanKids(index) {
            if (2*index+1 >= array.length  && 2*index+2 >= array.length) return true;
            if (array[2*index+1] < array[index] || array[2*index+2] < array[index]) return false;
            return isLessThanKids(2*index+1) && isLessThanKids(2*index+2);            
        }

        if (array.length <= 0) throw (new Error('EmptyArrayException'));
        var result = isLessThanKids(0);        
        return result;        
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
heap.insert(43);
heap.insert(23);
heap.insert(18);
heap.insert(6);
heap.insert(68);
heap.insert(64);

console.log(heap.array);
console.log(MinHeap.isHeap(heap.array));

heap.remove();
console.log(heap.array);
console.log(MinHeap.isHeap(heap.array));

heap.remove();
console.log(heap.array);
console.log(MinHeap.isHeap(heap.array));

heap.remove();
console.log(heap.array);
console.log(MinHeap.isHeap(heap.array));

heap.remove();
console.log(heap.array);
console.log(MinHeap.isHeap(heap.array));

heap.remove();
console.log(heap.array);
console.log(MinHeap.isHeap(heap.array));

heap.remove();
console.log(heap.array);
console.log(MinHeap.isHeap(heap.array));