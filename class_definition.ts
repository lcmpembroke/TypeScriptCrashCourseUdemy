class Tree {

    constructor(public branch: string, public leaf: string) {
        this.branch = branch;
    }

    moveLeaf() {
        console.log("leaf is moving");

        this.leaf = "turning red";
        console.log(`Leaf is now ${this.leaf}`);
    }
}

let tree1 = new Tree("branch", "green small leaf");
tree1.moveLeaf();
