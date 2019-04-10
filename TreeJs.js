var Tree = function (value) {
	this.value = value;
	this.children = [];
}
var CountleafE = 0 ;
Tree.prototype.countHLeafE = function () {
	var node = new Tree();
	function recurse (node) {
		if (node.children.length == 0 ) {
      if(node.value== "E"){CountleafE++;}
		}
	for (var i = 0; i < node.children.length; i++) {
		
		recurse(node.children[i]);
	}
	}
	recurse(this);
	return CountleafE;	
}
Tree.prototype.countHLeafG = function () {
	var node = new Tree();
  var countHLeafG = 0 ;
	function recurse (node) {
		if (node.children.length === 0) {
      if(node.value== "G"){countHLeafG++;}
		}
	for (var i = 0; i < node.children.length; i++) {
		
		recurse(node.children[i]);
	}
	}
	recurse(this);
	return countHLeafG;	
}
Tree.prototype.countHLeafI = function () {
	var node = new Tree();
	var countHLeafI= 0;
	function recurse (node) {
		if (node.children.length === 0) {
      if(node.value== "I"){countHLeafI++;}
		}
	for (var i = 0; i < node.children.length; i++) {
		
		recurse(node.children[i]);
	}
	}
	recurse(this);
	return countHLeafI;	
}
Tree.prototype.countHLeafH = function () {
	var node = new Tree();
	var countHLeafH= 0;
	function recurse (node) {
		if (node.children.length === 0) {
      if(node.value== "H"){countHLeafH++;}
		}
	for (var i = 0; i < node.children.length; i++) {
		
		recurse(node.children[i]);
	}
	}
	recurse(this);
	return countHLeafH;	
}
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    
  }
  // return the new child node for convenience
  return child;
};
6
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
nodeB.addChild(nodeD);
var nodeF = new Tree("F");
var nodeG = new Tree("G");
nodeC.addChild(nodeF);
nodeC.addChild(nodeG);
var nodeI = new Tree("I");
var nodeH = new Tree("H");
nodeF.addChild(nodeI);
nodeF.addChild(nodeH);
nodeD.addChild(nodeF);
nodeD.addChild(nodeC);
var CountOfB = 0 ;
var CountOfC = 0 ;
var CountOfD = 0 ;
var CountOfE = 0 ;
var CountOfF = 0 ;
var CountOfG = 0 ;
var CountOfH = 0 ;
var CountOfI = 0 ;
Tree.prototype.CountwittraversDF=function(callback) {
  function recurse(data) {
    for (var i = 0; i < data.children.length; i++) {
       recurse(data.children[i]);
      if (data.children[i].value =="B") {
        CountOfB++;
      }
      if (data.children[i].value =="C") {
        CountOfC++; 
      }
      if (data.children[i].value =="D") {
        CountOfD++;
      }
      if (data.children[i].value =="E") {
        CountOfE++;
      }
      if (data.children[i].value =="F") {
        CountOfF++;
      }
      if (data.children[i].value =="G") {
        CountOfG++;
      }
      if (data.children[i].value =="H") {
        CountOfH++;
      }
      if (data.children[i].value =="I") {
        CountOfI++;
      }
    }
    callback(data);
  }
  recurse(this);
};
/////////////////////////////////////////////////////////////////
var str =root;
root.CountwittraversDF(function(data){
 // console.log(data);
 });
//var countt = 1;
var countt = prompt("Enter count of tree");
 console.log("Count of B node with Value and Coefficient :"+CountOfB*3*countt);
 console.log("Count of C node with value  and Coefficient :"+CountOfC*2*countt);
 console.log("Count of D node with value  and Coefficient :"+CountOfD*7*countt);
 console.log("Count of E node with value  and Coefficient :"+CountOfE*5*countt);
 console.log("Count of F node with value  and Coefficient :"+CountOfF*2*countt);
 console.log("Count of G node with value  and Coefficient :"+CountOfG*5*countt);
 console.log("Count of H node with value  and Coefficient :"+CountOfH*3*countt);
 console.log("Count of I node with value  and Coefficient :"+CountOfI*5*countt);
 console.log("Count of leaf E "+root.countHLeafE());
 console.log("Count of leaf G "+root.countHLeafG());
 console.log("Count of leaf I "+root.countHLeafI());
 console.log("Count of leaf H "+root.countHLeafH());
