module.exports = (input, array, object = false, isInt = false) => {
  for (let i = 0;i < array.length; i ++) {
    if (isInt) {
      if (array[i].id === input) {
        return object ? array[i] : array[i].name;
      }
    }else{
      if (array[i].name === input) {
        return object ? array[i] : array[i].name;
      }
    }
  }
}
