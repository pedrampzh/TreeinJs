var Tree = function (value) {
	this.value = value;
	this.children = [];
}
Tree.prototype.countLeaves = function () {
	var node = new Tree();
	var count = 0;
	function recurse (node) {
		if (node.children.length === 0) {
			count++
		}
	for (var i = 0; i < node.children.length; i++) {
		
		recurse(node.children[i]);
	}
	
	}
	recurse(this);
	return count;	
}
Tree.prototype._preOrder = function(node, fn) {
    if(node) {
      if(fn) {
        fn(node);
      }
      for(var i = 0; i < node.children.length; i++) {
        this._preOrder(node.children[i], fn);
      }
    }
  };
Tree.prototype.traverseDFS = function(fn, method) {
    var current = this.root;
    if(method) {
      this['_' + method](current, fn);
    } else {
      this._preOrder(current, fn);
    }
  };
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};
var root = new Tree("A");
var nodeB = new Tree("B");
var nodeC = new Tree("C");
root.addChild(nodeB);
root.addChild(nodeC);
var nodeD = new Tree("D");
var nodeE = new Tree("E");
nodeB.addChild(nodeE);
nodeB.addChild(nodeF);
var nodeF = new Tree("F");
nodeC.addChild(nodeD);
console.log(root.countLeaves());
var countt = prompt("Enter count of tree");
console.log(countt*root.countLeaves());

