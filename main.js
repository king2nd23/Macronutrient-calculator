

// var myGoal = document.querySelectorAll(".selectGoals");
//
//   for (var i = 0; i < myGoal.length; i++) {
//     var goalKey = i;
//
//     myGoal[goalKey].addEventListener('click', function (e) {
//
//
//       var target = e.target;
//       text = target.textContent;
//
//
//       var clicked = this;
//       this.classList.add('selected'); //this class adds black background white text coloe
//       var goalNum = this.getAttribute("data-value");//get data value from clicked button
//
//       console.log(text);
//     })
//   }
//
//
// // var loose = document.getElementById('loose');
// // var gain = document.getElementById('gain');
// // var maintain = document.getElementById('maintain');
// var goalArray = document.querySelectorAll('.selectGoals');
//
//
// for (var i = 0; i < goalArray.length; i++) {
//   var goalNum = i
//
// goalArray[goalNum]
// }


document.addEventListener('click', function (e) {
  e = e || window.event; //the "e" references the event obkect, "window.event is for cross browser capatibility(IE)"
  var target = e.target || e.srcElement; //target gets the element n which the event occured srcElement is a IE non-standard way to obtain the target
  text = target.textContent; //textContent is literally the text content inside of the element

  if (target.id.substr(0,5)=="goals") {
    //remove all class selected
    var selecteds = document.getElementsByClassName('selected');
    while (selecteds.length)
      selecteds[0].classList.remove('selected');
      //add class to the target
      target.classList.add( 'selected');
  };
}false);

























//
