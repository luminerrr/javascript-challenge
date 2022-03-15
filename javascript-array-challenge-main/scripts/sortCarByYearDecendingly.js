function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  
  // Tulis code-mu disini
  var n = result.length
  for (var i = 0; i<n;i+=1){
    console.log(result[i].year)
    for (var j = 0; j < n-1; j++){
      if(result[j].year < result[j+1].year){
        var temp = result[j]
        result[j] = result[j + 1]
        result[j + 1] = temp
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara 
  console.log(result)
  return result;
}
