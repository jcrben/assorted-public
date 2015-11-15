function quickSort(arr,left,right){

  if(typeof left !== 'number') {
    left = 0;
  }
  if(typeof right !== 'number') {
    right = arr.length - 1;
  }

  if (left < right){
    var pivotIndex = partition(arr,left,right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr, pivotIndex+1,right);
  }
  return arr;
}

function partition(arr,left,right){
  var midPoint = Math.floor(left + (right - left)/2);
  var pivotElem = arr[midPoint];
  var storeIndex = left;

  //place midPoint element at the far right
  swap(arr,midPoint,right);

  for (var i=left; i < right; i++){
    if (arr[i] < pivotElem){
      swap(arr,i,storeIndex);
      storeIndex++;
    }
  }
  //move pivot element from far right to final location
  swap(arr,storeIndex,right);
  return storeIndex;
}

function swap(arr,indexA,indexB){

  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}
