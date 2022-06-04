// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(targetName
) {

  var result = [];

  var traverseNode = function(element) {

    if (element.classList && element.classList.contains(targetName)) {
      result.push(element);
    }

    if (element.children) {
      _.each(element.children, traverseNode);
    }
  };

  traverseNode(document.body);
  return result;

};
