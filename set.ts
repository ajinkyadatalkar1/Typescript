var arr: number[] = [];
arr.push(1);
arr.push(2);
console.log(arr[1]);

class set { 
    set_items: number[] = [];
    constructor(arr: number[]) { 
        this.set_items = arr;
        console.log(arr[0]);
    }

    add(val: number) { 
        if (this.has(val) !== null) { 
            this.set_items.push(val);
            console.log(this.set_items);
        }
        return this.set_items;
    }

    delete(val: number) { 
        if (this.has(val) !== null && this.has(val) !== -1) { 
            this.set_items = this.set_items.slice(0,this.has(val));
            console.log(this.set_items);
        }
        return this.set_items;
    }

    has(val: number) {
        return this.set_items.indexOf(val);
    }
}
let s = new set(arr);
s.add(3);
console.log(s.has(5));
s.delete(3);