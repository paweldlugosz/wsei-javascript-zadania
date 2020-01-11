// Zadanie 1
function Tree(type) {
    this.type = type;
}

let tree0 = new Tree('tree type 0');
let tree1 = new Tree('tree type 1');
let tree2 = new Tree('tree type 2');

Tree.prototype.bloom = () => 'I am blooming';

console.log(tree0.bloom());