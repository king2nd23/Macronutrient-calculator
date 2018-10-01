//select fitness goal
document.addEventListener('click', function(e) {
  e = e || window.event; //the "e" references the event object, "window.event is for cross browser capatibility(IE)"
  var target = e.target || e.srcElement; //target gets the element n which the event occured srcElement is a IE non-standard way to obtain the target
  text = target.textContent; //textContent is literally the text content inside of the element

  if (target.id.substr(0, 5) == "goals") {
    //remove all class selected
    var selecteds = document.getElementsByClassName('selectedGoals');
    while (selecteds.length)
      selecteds[0].classList.remove('selectedGoals');
    //add class to the target
    target.classList.add('selectedGoals');
  };
});

//select sex
document.addEventListener('click', function(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  text = target.textContent;

  if (target.id.substr(0, 3) == "sex") {
    var selecteds = document.getElementsByClassName('selectedSex');
    while (selecteds.length)
      selecteds[0].classList.remove('selectedSex');
    target.classList.add('selectedSex');
  };
});

//select activity Level
document.addEventListener('click', function(e) {
  e = e || window.event;
  var target = e.target || srcElement;
  text = target.textContent;

  if (target.id.substr(0, 11) == "activeLevel") {
    var selecteds = document.getElementsByClassName('selectedActivity');
    while (selecteds.length)
      selecteds[0].classList.remove('selectedActivity');
    target.classList.add('selectedActivity');
  };
});

//select body type
document.addEventListener('click', function(e) {
  e = e || window.event;
  var target = e.target || srcElement;
  text = target.textContent;

  if (target.id.substr(0, 8) == "bodyType") {
    var selectBodyType = document.getElementsByClassName('selectedBodyType');
    while (selectBodyType.length)
      selectBodyType[0].classList.remove('selectedBodyType');
    target.classList.add('selectedBodyType');
  };
});

//INPUT INFO & clear or submit
var ree; //resting energy expenditure
var tdee; //Total Daily Energy Expenditure
var protein;
var carbs;
var fat;

var calculateButton = document.querySelector('.calculate');
calculateButton.addEventListener('click', getMacros);

function getMacros() {

  var age = document.getElementById('inputAge').value;
  var weight = document.getElementById('inputWeight').value;
  weight = weight * 0.45359237; //converts pounds into kg
  var height = document.getElementById('inputHeight').value;
  height = height * 2.54; //convert inches to cm

  //check if male or Female
  if (document.getElementById('sex1').classList.contains('selectedSex')) {
    ree = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else if (document.getElementById('sex2').classList.contains('selectedSex')) {
    ree = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  } else(
    alert('Please select male or female.')
  )

  //activity level, used to calculate TDEE
  if (document.getElementById('activeLevel1').classList.contains('selectedActivity')) {
    tdee = ree * 1.375;
  } else if (document.getElementById('activeLevel2').classList.contains('selectedActivity')) {
    tdee = ree * 1.55;
  } else if (document.getElementById('activeLevel3').classList.contains('selectedActivity')) {
    tdee = ree * 1.725;
  } else {
    alert('Please select your level of physical activity.')
  }

  //adjust TDEE based off goals

  //weight loss
  if (document.getElementById('goals1').classList.contains('selectedGoals')) {
    tdee = tdee - (tdee * .2);
    console.log(tdee);
  }
  //Maintain weight
  else if (document.getElementById('goals2').classList.contains('selectedGoals')) {
    tdee = tdee;
    console.log(tdee);
  }
  //weight gain
  else if (document.getElementById('goals3').classList.contains('selectedGoals')) {
    tdee = tdee + (tdee * .2);
    console.log(tdee);
  } else {
    alert('Please choose a weight goal')
  }

  //final results
  var calories = tdee;
  //Ectomorphs
  if (document.getElementById('bodyType1').classList.contains('selectedBodyType')) {
    protein = Math.floor((calories * .25) / 4);
    carbs = Math.floor((calories * .55) / 4);
    fats = Math.floor((calories * .2) / 9);
  }
  //Mesomorph
  else if (document.getElementById('bodyType2').classList.contains('selectedBodyType')) {
    protein = Math.floor((calories * .35) / 4);
    carbs = Math.floor((calories * .25) / 4);
    fats = Math.floor((calories * .40) / 9);
  }
  //Endomorph
  else if (document.getElementById('bodyType3').classList.contains('selectedBodyType')) {
    protein = Math.floor((calories * .30) / 4);
    carbs = Math.floor((calories * .40) / 4);
    fats = Math.floor((calories * .30) / 9);
  } else {
    alert('Please select your body type')
  }

  //Get and display Macronutrient values
  var totalCalories = document.getElementById('totalCalories');
  var totalProtein = document.getElementById('protein');
  var totalFat = document.getElementById('fats');
  var totalCarbs = document.getElementById('carbs');

  totalCalories.innerText = Math.floor(calories) || 0;
  totalProtein.innerText = protein || 0;
  totalFat.innerText = fats || 0;
  totalCarbs.innerText = carbs || 0;

  //jump to display results section

}

//reload page with clear button
document.getElementById('clearOrSubmit1').addEventListener('click', function() {
  window.location.reload(true);
})

// update weight goal text on left hand side
calculateButton.addEventListener('click', function (e) {
  var loose = document.getElementById('goals1');
  var maintain = document.getElementById('goals2');
  var gain = document.getElementById('goals3');
  var span  = document.getElementById('weightGoal');

  if (loose.classList.contains('selectedGoals')) {
    span.innerText = 'loose';
  }
  else if (maintain.classList.contains('selectedGoals')) {
    span.innerText = 'maintain';
  }
  else if (gain.classList.contains('selectedGoals')) {
    span.innerText = 'gain';
  }
});











//
