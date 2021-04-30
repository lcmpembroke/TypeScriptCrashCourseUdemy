var Tree = /** @class */ (function () {
    function Tree(branch, leaf) {
        this.branch = branch;
        this.leaf = leaf;
        this.branch = branch;
    }
    Tree.prototype.moveLeaf = function () {
        console.log("leaf is moving");
        this.leaf = "turning red";
        console.log("Leaf is now " + this.leaf);
    };
    return Tree;
}());
var tree1 = new Tree("branch", "green small leaf");
tree1.moveLeaf();
