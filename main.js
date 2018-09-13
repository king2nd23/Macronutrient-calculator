//select fitness goal
document.addEventListener('click', function (e) {
  e = e || window.event; //the "e" references the event object, "window.event is for cross browser capatibility(IE)"
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
});


//select sex
document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  text = target.textContent;

  if (target.id.substr(0,3)=="sex") {
    var selecteds = document.getElementsByClassName('selected');
    while (selecteds.length)
      selecteds[0].classList.remove('selected');
      target.classList.add('selected');
  };
});


//select activity Level
document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || srcElement;
  text = target.textContent;

  if (target.id.substr(0,11)=="activeLevel") {
    var selecteds = document.getElementsByClassName('selected');
    while(selecteds.length)
    selecteds[0].classList.remove('selected');
    target.classList.add('selected');
  };
});


//select body type
document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || srcElement;
  text = target.textContent;

  if (target.id.substr(0,8)=="bodyType") {
    var selectBodyType = document.getElementsByClassName('selected');
    while (selectBodyType.length)
      selectBodyType[0].classList.remove('selected');
      target.classList.add('selected');
  };
});


//clear or submit
document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || srcElement;
  text = target.textContent;

  if (target.id.substr(0,13)=="clearOrSubmit") {
    var selecteds = document.getElementsByClassName('selected');
    while (selecteds.length)
      selected[0].classList.remove('selected');
      target.classList.add('selected');

  };
});
















//
