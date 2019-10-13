function squares(x, n) {
    if(n<=0){
      return []
    }
    else {
  var array =[x]
  for (var i  = 0 ;i <n-1;i++){
  var square = array[i] * array[i]
  array.push(square)
  }
  return array
  }
  }
