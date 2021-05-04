class Tree {

    constructor(public branch: string, public leaf: string, public weed: string = "Ivy") {
        this.branch = branch;
    }

    moveLeaf() {
        console.log("leaf is moving");

        this.leaf = "turning red";
        console.log(`Leaf is now ${this.leaf} and weed is ${this.weed}`);
    }
}

// weed is set to the default as not specified it in sonctructor
let tree1 = new Tree("branch", "green small leaf");
tree1.moveLeaf();
