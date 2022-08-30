$(function () {
  // matches: to store blank box ids and their matched answer box
  // #exe1-drop1: id for the first blank box and it accepts the answer box with id #exe1-ans1
  // and so on until all boxes are covered for all the pages
  // if any new question is added this will need to be updated with the right ids
  // in order for it to work properly
  // #: is the css selector for an id
  const matches = {
    // programStructure.html questions
    // let carName = "Volvo";
    "#exe1-drop1": "#exe1-ans1",
    "#exe1-drop2": "#exe1-ans2",
    "#exe1-drop3": "#exe1-ans3",
    // let x = 50;
    "#exe1-drop4": "#exe1-ans4",
    "#exe1-drop5": "#exe1-ans5",
    "#exe1-drop6": "#exe1-ans6",
    // let firstName = "John", lastName = "Doe", age = 35;
    "#exe1-drop7": "#exe1-ans7",
    "#exe1-drop8": "#exe1-ans8",
    "#exe1-drop9": "#exe1-ans9",
    "#exe1-drop10": "#exe1-ans10",
    "#exe1-drop11": "#exe1-ans11",
    // let fruitName = "Apple";
    "#exe1-drop12": "#exe1-ans12",
    "#exe1-drop13": "#exe1-ans13",
    "#exe1-drop14": "#exe1-ans14",
    // variableTypes.html questions
    // part 1
    // let length = 16; // Number
    "#exe2-drop1": "#exe2-ans1",
    // let lastName = "Johnson"; // String
    "#exe2-drop2": "#exe2-ans2",
    // const x = { firstName: "John", lastName: "Doe" }; // Object
    "#exe2-drop3": "#exe2-ans3",
    // part 2
    // let x; // undefined
    "#exe2-drop4": "#exe2-ans4",
    //  const cars = ["Saab", "Volvo", "BMW"]; // Array
    "#exe2-drop5": "#exe2-ans5",
    // let isCarsAvailable = true; // Boolean
    "#exe2-drop6": "#exe2-ans6",
    // mathCalculations.html questions
    // part 1
    // let x = 10;
    "#exe3-drop1": "#exe3-ans1",
    // let z = x + y;
    "#exe3-drop2": "#exe3-ans2",
    // console.log(z); // output: 15
    "#exe3-drop3": "#exe3-ans3",
    "#exe3-drop4": "#exe3-ans4",
    // part 2
    // let y = 2;
    "#exe3-drop5": "#exe3-ans5",
    // let z = x / y;
    "#exe3-drop6": "#exe3-ans6",
    // console.log(z); // output: 5
    "#exe3-drop7": "#exe3-ans7",
    "#exe3-drop8": "#exe3-ans8",
    // part 3
    // let y = 2;
    "#exe3-drop9": "#exe3-ans9",
    // let z = x % y;
    "#exe3-drop10": "#exe3-ans10",
    // console.log(z); // output: 1
    "#exe3-drop11": "#exe3-ans11",
    "#exe3-drop12": "#exe3-ans12",
    // part 4
    // let y = 8;
    "#exe3-drop13": "#exe3-ans13",
    //  x += y;
    "#exe3-drop14": "#exe3-ans14",
    // console.log(x); // output: 15
    "#exe3-drop15": "#exe3-ans15",
    "#exe3-drop16": "#exe3-ans16",
    // printScreen.html questions
    // part 1
    // let txt = "Hello World!";
    "#exe4-drop1": "#exe4-ans1",
    // console.log(txt); // output: "Hello World!"
    "#exe4-drop2": "#exe4-ans2",
    "#exe4-drop3": "#exe4-ans3",
    // part 2
    // let txt = "We are \"Vikings\"";
    "#exe4-drop4": "#exe4-ans4",
    // console.log(txt); // output: 'We are "Vikings"'
    "#exe4-drop5": "#exe4-ans5",
    "#exe4-drop6": "#exe4-ans6",
    "#exe4-drop7": "#exe4-ans7",
    // part 3
    // let str1 = "Hello ";
    "#exe4-drop8": "#exe4-ans8",
    // et str2 = "World!";
    "#exe4-drop9": "#exe4-ans9",
    // alert(str1 + str2); // output: "Hello World!"
    "#exe4-drop10": "#exe4-ans10",
    "#exe4-drop11": "#exe4-ans11",
    // selectionIteration.html questions
    // part 1
    // while(i < 10) {
    "#exe5-drop1": "#exe5-ans1",
    "#exe5-drop2": "#exe5-ans2",
    // console.log(i);
    "#exe5-drop3": "#exe5-ans3",
    // part 2
    // while(i < 10) {
    "#exe5-drop4": "#exe5-ans4",
    //  console.log(i);
    "#exe5-drop5": "#exe5-ans5",
    // i = i + 2;
    "#exe5-drop6": "#exe5-ans6",
    "#exe5-drop7": "#exe5-ans7",
    // part 3
    // let age = prompt("how old you are?");
    "#exe5-drop8": "#exe5-ans8",
    // if(age >= 18){
    "#exe5-drop9": "#exe5-ans9",
    // alert("You can learn to drive!");
    "#exe5-drop10": "#exe5-ans10",
    // alert(  "You can not learn to drive!");
    "#exe5-drop11": "#exe5-ans11",
    // part 4
    // for(i = 0; i < 10; i++) {
    "#exe5-drop12": "#exe5-ans12",
    "#exe5-drop13": "#exe5-ans13",
    "#exe5-drop14": "#exe5-ans14",
    "#exe5-drop15": "#exe5-ans15",
    // console.log(i);
    "#exe5-drop16": "#exe5-ans16",
  };
  // $: the symbol that calls jquery to get elements using css selectors $(".some-class")
  // activate the drag feature for answer boxes
  // draggable: is the jquery-ui method that activates the dragging feature
  // revert: "invalid" return the box to it's original place if not matched
  $(".exe-ans").draggable({ revert: "invalid" });
  // the event that will trigger when the right answer box is dropped inside a blank box
  function itemDrop(event, ui) {
    // add the class "ui-dropped" to the blank box to help target it with css when it is filled
    // append: put the answer box inside the blank box
    // this: is the current blank box being dropped into
    $(this).addClass("ui-dropped").append($(ui.draggable[0]));
    // add the class "dropped" to the answer box to disable the drag feature with css
    $(ui.draggable[0]).addClass("dropped");
    // get the closest parent element with class "exe-body"
    // and get all blank boxes inside it with the class "exe-block"
    const exeAnsEls = $(this).closest(".exe-body").find(".exe-block");
    // check if every of the found blank boxes has the class "ui-dropped"
    isAllDropped = Array.from(exeAnsEls).every(function (el) {
      return $(el).hasClass("ui-dropped");
    });
    // if all blank boxes of this question has the class "ui-dropped"
    // then the it's done and we should show the next button
    if (isAllDropped) {
      // get the closest parent element with class "exe-part"
      // then get the element with class "exe-footer" and add the class "active" to it
      $(this).closest(".exe-part").find(".exe-footer").addClass("active");
    }
  }
  // get every entry inside the matches variable
  Object.entries(matches).forEach(function (entry) {
    // entry = ["#exe1-drop1", "#exe1-ans1"]
    // activate the blank box
    // droppable: is the jquery-ui method that allow you to drop an element that your are dragging into a another like the blank box
    $(entry[0]).droppable({
      // set the element this blank box accepts
      accept: entry[1],
      // set item dropped event
      drop: itemDrop,
    });
  });
  // activate next button click
  $(".btn-next").click(function (e) {
    // get the closest parent element with class "exe-wrapper"
    // this: current clicked next button
    const exeWrapper = $(this).closest(".exe-wrapper");
    //  from "exe-wrapper" element find all the elements with the class "exe-part"
    const exePartEls = exeWrapper.find(".exe-part");
    //  from "exe-wrapper" find the element with both class "exe-part" and "active"
    const index = exeWrapper.find(".exe-part.active").index();

    // if index is less than the total elements found in exePartEls - 1
    // which means it's not the last index yet
    if (index < exePartEls.length - 1) {
      // then next button clicked is not the last one
      // remove "active" from all found "exe-part" elements
      exePartEls.removeClass("active");
      // select the next element with index and add "active" class
      exePartEls.eq(index + 1).addClass("active");
      // if index equals the last index
    } else if (index === exePartEls.length - 1) {
      // remove "active" from all found "exe-part" elements
      exePartEls.removeClass("active");
      // add class "done" to "exe-wrapper" element to show all questions at once with css
      exeWrapper.addClass("done");
    }
  });
});
