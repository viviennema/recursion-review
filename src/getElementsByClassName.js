// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(targetName
) {
  var result = [];

  console.log(document.body);
  console.log(document.body);

  var traverseNode = function(node) {

    if (node.classList && node.className === targetName) {
      result.push(node.nodeName);
    }
    if (node.children) {
      _.each(node.children, traverseElement);
    }
  };

  traverseElement(document.body);
  return result;

};
