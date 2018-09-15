//select fitness goal

//this solution works but it still affects all other event listeners
// var goals = document.querySelectorAll('.selectGoals');
// for (var i = 0; i < goals.length; i++) {
//   goals[i].onclick = selectMyGoal;
// }
//
// function selectMyGoal() {
//   var selectedx = document.getElementsByClassName('selected')[0];
//   if (selectedx) {
//     selectedx.classList.remove('selected')
//   };
//   this.classList.add('selected');
// }

//select fitness goal
document.addEventListener('click', function (e) {
  e = e || window.event; //the "e" references the event object, "window.event is for cross browser capatibility(IE)"
  var target = e.target || e.srcElement; //target gets the element n which the event occured srcElement is a IE non-standard way to obtain the target
  text = target.textContent; //textContent is literally the text content inside of the element

  if (target.id.substr(0,5)=="goals") {
    //remove all class selected
    var selecteds = document.getElementsByClassName('selectedGoals');
    while (selecteds.length)
      selecteds[0].classList.remove('selectedGoals');
      //add class to the target
      target.classList.add( 'selectedGoals');
  };
});


//select sex

document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  text = target.textContent;

  if (target.id.substr(0,3)=="sex") {
    var selecteds = document.getElementsByClassName('selectedSex');
    while (selecteds.length)
      selecteds[0].classList.remove('selectedSex');
      target.classList.add('selectedSex');
  };
});


//select activity Level
document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || srcElement;
  text = target.textContent;

  if (target.id.substr(0,11)=="activeLevel") {
    var selecteds = document.getElementsByClassName('selectedActivity');
    while(selecteds.length)
    selecteds[0].classList.remove('selectedActivity');
    target.classList.add('selectedActivity');
  };
});


//select body type
document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || srcElement;
  text = target.textContent;

  if (target.id.substr(0,8)=="bodyType") {
    var selectBodyType = document.getElementsByClassName('selectedBodyType');
    while (selectBodyType.length)
      selectBodyType[0].classList.remove('selectedBodyType');
      target.classList.add('selectedBodyType');
  };
});


//INPUT INFO & clear or submit
var  ree;//resting energy expenditure
var tdee;//
var calculateButton = document.querySelector('.calculate');
calculateButton.addEventListener('click', getMacros)

function getMacros() {

  var age = document.getElementById('inputAge').value;
  var weight = document.getElementById('inputWeight').value;
  weight = weight * 0.45359237;//converts pounds into kg
  var height = document.getElementById('inputHeight').value;
  height = height * 2.54;//convert inches to cm

  //check if male or Female
  if (document.getElementById('sex1').classList.contains('selectedSex')) {
    ree = (10 * weight) + (6.25 * height ) - (5 * age) + 5;
  }
  else if (document.getElementById('sex2').classList.contains('selectedSex')) {
    ree = (10 * weight) + (6.25 * height ) - (5 * age) - 161;
  }
  else(
    alert('Please select male or female.')
  )

  //activity level, used to calculate TDEE
  if (document.getElementById('activeLevel1').classList.contains('selectedActivity')) {
    tdee = ree * 1.375;
  }
  else if (document.getElementById('activeLevel2').classList.contains('selectedActivity')) {
    tdee = ree * 1.55;
  }
  else if (document.getElementById('activeLevel3').classList.contains('selectedActivity')) {
    tdee = ree * 1.725;
  }
  else {
    alert('Please select your level of physical activity.')
  }
console.log(tdee);
  //adjust TDEE based off goals
  if (document.getElementById('goals1').classList.contains('selectGoals')) {
    tdee = tdee - (tdee * .2);
    console.log(tdee);
  }
  else if (document.getElementById('goals3').classList.contains('selectGoals')) {

  }
}



















//
