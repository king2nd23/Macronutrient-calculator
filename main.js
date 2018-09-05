
var selectSex = document.querySelector('#loose')
console.log(selectSex);

var sexClick = 0;//counts button clicks
selectSex.onclick = function () {
  sexClick = sexClick + 1;

  if (sexClick % 2 === 0) {
    selectSex.style.color = 'black'
    selectSex.style.backgroundColor = 'white'
  }
  else {
    selectSex.style.color = 'white'
    selectSex.style.backgroundColor = 'black'
  }

};
