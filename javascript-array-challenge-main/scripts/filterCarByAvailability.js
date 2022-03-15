function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (const index in cars){
    if (cars[index].available){
      result.push(cars[index])
    }
  }
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
