//book dictionary
var books = {
    "Book 1": 0,
    "Book 2": 1,
    "Book 3": 1,
    "Book 4": 1,
    "Book 5": 0
};
//
//potion dictionary
var potions = {
  "Potion 1" : 1,
  "Potion 2" : 0,
  "Potion 3" : 0,
  "Potion 4" : 1,
  "Potion 5" : 1
};
//
//scroll dictionary
var scrolls = {
  "Scroll 1" : 0,
  "Scroll 2" : 1,
  "Scroll 3" : 1,
  "Scroll 4" : 1,
  "Scroll 5" : 0
};
console.log("Welcome to the magic Library!");
//return to the main menu
onEvent("bookBackButton", "click", function( ) {
  setScreen("MainMenu");
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
});
//Reserve Books
onEvent("button1", "click", function( ) {
  //go to book screen
  setScreen("bookRegister");
  playSound("assets/category_achievements/lighthearted_bonus_objective_2.mp3", false);
  //search for the book 
  onEvent("findBook", "click", function( ) {
    var name = getText("bookTextInput");
    var exist = getValue(books, name);
    if (exist == 1 || exist == 0) {
      setText("label3", "Book is found!");
    } else {
      setText("label3", "Book does not exist.");
    }
  });
  //RESERVE for the book
  onEvent("resBook", "click", function( ) {
    //Looks through the books dictonary from the text input. 
    var res = getValue(books, getText("bookTextInput"));
    if (res == 0) {
      addPair(books, getText("bookTextInput"), 1);
      setText("label3", getText("bookTextInput") + " is sucessfully reserved!");
    } else if (res == 1) {
      setText("label3", getText("bookTextInput") + " is already reserved!");
    } else {
      setText("label3", getText("bookTextInput") + " does not exist.");
    }
  });
  //REGISTER Books
  onEvent("bookReg", "click", function( ) {
    var reg = 1;
    addPair(books, getText("bookTextInput"), reg);
    setText("label3", getText("bookTextInput") + " is successfully registered!");
  });
});
//-----Potions------
onEvent("mainMenuPotion", "click", function( ) {
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
  setScreen("MainMenu");
});
onEvent("button2", "click", function( ) {
  setScreen("potionRegister");
  playSound("assets/category_achievements/lighthearted_bonus_objective_2.mp3", false);
  //Search Potion
  onEvent("searchPotion", "click", function( ) {
    var name = getText("Potiontext_input");
    var exist = getValue(potions, name);
    if (exist == 1 || exist == 0) {
      setText("label5", "Potion is found!");
    } else {
      setText("label5", "Potion does not exist.");
    }
    
  });
  //Register Potion
  onEvent("potionReg", "click", function( ) {
    var reg = 1;
    addPair(potions, getText("Potiontext_input"), reg);
    setText("label5", getText("Potiontext_input") + " is successfully registered!");
  });
  //Reserve Potion
  onEvent("potionRes", "click", function( ) {
    var res = getValue(potions, getText("Potiontext_input"));
    if (res == 0) {
      addPair(potions, getText("Potiontext_input"), 1);
      setText("label5", getText("Potiontext_input") + " is sucessfully reserved!");
    } else if (res == 1) {
      setText("label5", getText("Potiontext_input") + " is already reserved!");
    } else {
      setText("label5", getText("Potiontext_input") + " does not exist.");
    }
  });
  
});
//----Scrolls-----
onEvent("scrollBackButton", "click", function( ) {
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
  setScreen("MainMenu");
});
onEvent("button3", "click", function( ) {
  playSound("assets/category_achievements/lighthearted_bonus_objective_2.mp3", false);
  setScreen("scrollRegister");
  //Look up a Scroll
  onEvent("scrollSearch", "click", function( ) {
    var name = getText("Scrolltext_input");
    var exist = getValue(scrolls, name);
    if (exist == 1 || exist == 0) {
      setText("label7", "Scroll is found!");
    } else {
      setText("label7", "Scroll does not exist.");
    }
  });
  //Register Scroll
  onEvent("scrollReg", "click", function( ) {
    var reg = 1;
    addPair(scrolls, getText("Scrolltext_input"), reg);
    setText("label7", getText("Scrolltext_input") + " is successfully registered!");
    
  });
  //Reserve Scroll
  onEvent("scrollRes", "click", function( ) {
    var res = getValue(scrolls, getText("Scrolltext_input"));
    if (res == 0) {
      addPair(scrolls, getText("Scrolltext_input"), 1);
      setText("label7", getText("Scrolltext_input") + " is sucessfully reserved!");
    } else if (res == 1) {
      setText("label7", getText("Scrolltext_input") + " is already reserved!");
    } else {
      setText("label7", getText("Scrolltext_input") + " does not exist.");
    }
    
  });
});
