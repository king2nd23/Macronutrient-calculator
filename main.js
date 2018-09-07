//
// var selectSex = document.querySelector('#loose')
// console.log(selectSex);
//
// var sexClick = 0;//counts button clicks
// selectSex.onclick = function () {
//   sexClick = sexClick + 1;
//
//   if (sexClick % 2 === 0) {
//     selectSex.style.color = 'black'
//     selectSex.style.backgroundColor = 'white'
//   }
//   else {
//     selectSex.style.color = 'white'
//     selectSex.style.backgroundColor = 'black'
//   }
//
// };

var myGoal = document.querySelectorAll(".selectGoals");
console.log(myGoal.length);

// myGoal[1].classList.add('selected');//works

// var clickCounter = 0; //counts clicks
//
// function selectMyGoal() {
//   // clickCounter = clickCounter + 1;
//   // myGoal[i].classList.add('selected');
//
//   for (var i = 0; i < myGoal.length; i++) {
//     myGoal[i].addEventListener('click', selectMyGoal);
//     myGoal[i].classList.add('selected');
//   }
// }

//test



  for (var i = 0; i < myGoal.length; i++) {
    // var counter = i;
    var goalKey = i;

    myGoal[goalKey].addEventListener('click', function (e) {
    e.target.classList.add('selected');

    var goalKey = e.target.getAttribute("data-value");//get data value from clicked button

    if (myGoal[0].classList.contains('selected')) {
      // myGoal[1].classList.remove('selected');
      // myGoal[2].classList.remove('selected');
      return;
    }

    if (myGoal[1].classList.contains('selected')) {
      // myGoal[0].classList.remove('selected');
      // myGoal[2].classList.remove('selected');
    }

    if (myGoal[2].classList.contains('selected')) {
      // myGoal[0].classList.remove('selected');
      // myGoal[1].classList.remove('selected');
    }

    })
  }


// console.log(myGoal);













//
