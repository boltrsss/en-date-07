var activeIndex = 0;
let activeIndexForSecondModal = 0;

// if (window.innerWidth < 991.98) {
//   console.log(document.getElementById("ltimg"), "call");
//   document.getElementById("ltimg").src = "dist/css/image/backgroundImage.png";
// }

var questionListForSecondModal = [
  {
    id: 1,
    englishQuestion: "What type of body turns you on?",
    question: "What type of body turns you on?",
    answerList: [
      { id: 1, name: "Skinny", LangName: "Skinny" },
      { id: 2, name: "Curvy", LangName: "Curvy" },
      { id: 3, name: "Regular", LangName: "Regular" },
      { id: 4, name: "Big Boobs", LangName: "Big Boobs" },
      { id: 5, name: "Small boobs", LangName: "Small boobs" },
      { id: 6, name: "Milf", LangName: "Milf" },
      { id: 7, name: "Big Round Ass", LangName: "Big Round Ass" },
      { id: 8, name: "Tight Small Ass", LangName: "Tight Small Ass" },
      { id: 9, name: "Other", LangName: "Other" },
    ],
    checkedAnswer: [],
  },

  {
    id: 2,
    englishQuestion: "What age of women fits you best?",
    question: "What age of women fits you best?",
    answerList: [
      { id: 1, name: "18-25", LangName: "18-25" },
      { id: 2, name: "25-32", LangName: "25-32" },
      { id: 3, name: "32-37", LangName: "32-37" },
      { id: 4, name: "37-54", LangName: "37-54" },
      { id: 5, name: "55 and above", LangName: "55 and above" },
    ],
    checkedAnswer: [],
  },
  {
    id: 3,
    englishQuestion: "What type of relationship are you looking for?",
    question: "What type of relationship are you looking for?",
    answerList: [
      { id: 1, name: "One Night Stand", LangName: "One Night Stand" },
      { id: 2, name: "Fuck Buddy", LangName: "Fuck Buddy" },
      { id: 3, name: "Discreet Affair", LangName: "Discreet Affair" },
      { id: 4, name: "Dating", LangName: "Dating" },
      { id: 5, name: "Marriage", LangName: "Marriage" },
    ],
    checkedAnswer: [],
  },
  {
    id: 4,
    englishQuestion: "How far are you willing to travel for sex?",
    question: "How far are you willing to travel for sex?",
    answerList: [
      {
        id: 1,
        name: "Within Walking Distance",
        LangName: "Within Walking Distance",
      },

      {
        id: 2,
        name: "Within 10-50 Miles",
        LangName: "Within 10-50 Miles",
      },
      { id: 3, name: "Same State", LangName: "Same State" },
      { id: 4, name: "Doesn't Matter", LangName: "Doesn't Matter" },
      {
        id: 5,
        name: "Within 2-10 Miles",
        LangName: "Within 2-10 Miles",
      },
    ],
    checkedAnswer: [],
  },
];

var image = document.getElementById("image");
document.getElementById("checkBoxList").style.display = "none";
var questionList = [
  {
    id: 1,

    title: "Important",
    englishQuestion:
      "Before we can show you a list and photos of local MILFS, who are  online and ready to have sex right now, we need to ask you a few quick questions.",
    question:
      "Before we can show you a list and photos of local MILFS, who are  online and ready to have sex right now, we need to ask you a few quick questions.",
    answer: "",
  },
  {
    id: 2,
    title: "Question 1/4",

    englishQuestion:
      "Many of these milfs are desperate single moms and cheating wives or girlfriends looking for some fun. They could be your neighbors or someone you know. Do you agree to keep the identity of these women a secret?",
    question:
      "Many of these milfs are desperate single moms and cheating wives or girlfriends looking for some fun. They could be your neighbors or someone you know. Do you agree to keep the identity of these women a secret?",
    answer: "",
  },
  {
    id: 3,
    title: "Question 2/4",

    englishQuestion:
      'These women have asked us to not allow men that are seeking a "relationship". They only desire sex with no strings attached. Not dating. Do you agree to this request?',
    question:
      "These women have asked us to not allow men that are seeking a 'relationship'. They only desire sex with no strings attached. Not dating. Do you agree to this request?",
    answer: "",
  },

  {
    id: 4,
    title: "Question 3/4",
    englishQuestion:
      "Do you agree to use a condom when having sex with a partner you meet on our site if asked to do so?",
    question:
      "Do you agree to use a condom when having sex with a partner you meet on our site if asked to do so?",
    answer: "",
  },
  {
    id: 5,
    title: "Question 4/4",

    englishQuestion:
      "Each day that you check your account you will likely have multiple sex requests from MILFs on our site, will you be comfortable with this?",
    question:
      "Each day that you check your account you will likely have multiple sex requests from MILFs on our site, will you be comfortable with this?",
    answer: "",
  },
];

function yesNoHandler(aggree) {
  if (activeIndex < 2) {
  }

  var olderThanDescription = document.getElementById("olderThanDescription");

  var questionAndContent = document.getElementById("olderThanTitle");
  var actualQuestions = document.getElementById("actualQuestion");
  var rightButtonContainer = document.getElementById("noButtonContainer");
  var yesButton = document.getElementById("okButtonContainer");

  yesButton.innerHTML = "CONTINUE";

  if (activeIndex === 0) {
    rightButtonContainer.style.display = "none";
    yesButton.innerHTML = "CONTINUE";
  } else if (activeIndex > 0) {
    document.getElementsByClassName("landingPage-middle-buttons")[0].style.gap =
      "2rem";

    rightButtonContainer.style.display = "flex";
    yesButton.innerHTML = "NO";

    yesButton.style.color = "#fff";
  }

  // if (activeIndex == 1) {
  //   yesButton.style.padding = "0.8rem 4rem";
  // }

  activeIndex = activeIndex + 1;
  if (activeIndex <= 6 && activeIndex >= 2) {
    if (window.innerWidth < 381) {
      questionAndContent.style.fontSize = "2.2rem";
    }

    if (window.innerWidth < 321) {
      questionAndContent.style.fontSize = "1.8rem";
    }
    // questionAndContent.style.textAlign = "center";
  }

  if (activeIndex <= 6 && activeIndex > 2) {
    if (aggree === 1) {
      questionList[activeIndex - 2].answer = "yes";
    } else if (aggree === -1) {
      questionList[activeIndex - 2].answer = "no";
    }
  }
  if (activeIndex >= 6) {
    olderThanDescription.style.display = "none";

    yesButton.innerHTML = "SKIP";

    if (activeIndexForSecondModal < 4) {
      questionAndContent.style.fontSize = "5vw";
      if (window.innerWidth < 992) {
        questionAndContent.style.fontSize = "2rem";
      }

      if (window.innerWidth < 700) {
        questionAndContent.style.fontSize = "1.8rem";
      }

      if (window.innerWidth < 430 && window.innerWidth < 1000) {
        questionAndContent.style.fontSize = "2.3rem";
      }

      if (window.innerWidth < 381) {
        questionAndContent.style.fontSize = "1.8rem";
      }
      if (window.innerWidth < 321) {
        questionAndContent.style.fontSize = "1.5rem";
      }
      actualQuestions.innerHTML =
        questionListForSecondModal[activeIndexForSecondModal].question;
      id = "checkBoxList";

      let activeRadioContent =
        questionListForSecondModal[activeIndexForSecondModal];

      var sampleDom = document.createElement("div");

      var letButton = document.getElementById("yesButton");

      var rightButton = document.getElementById("noButton");

      var ButtonContainer = document.getElementById("yesButtonContainer");
      var thirdPageContentChoose = document.getElementById(
        "thirdPageContentChoose"
      );

      var datacollect = [];

      document.getElementById("landingPageContentChoose").style.display =
        "block";

      if (activeIndexForSecondModal <= 3) {
        for (i = 0; i < activeRadioContent.answerList.length; i++) {
          var checkBox = document.createElement("input");
          var label = document.createElement("label");

          var checkboxContainer = document.createElement("div");
          var customCheckbox = document.createElement("label");
          customCheckbox.htmlFor = activeRadioContent.answerList[i].name;
          customCheckbox.className = "customCheckboxQuestion";
          var tickArrow = document.createElement("img");
          tickArrow.src = "check.png";
          tickArrow.className = "icons";
          customCheckbox.appendChild(tickArrow);
          var label = document.createElement("label");
          checkBox.type = "checkbox";
          checkBox.name = activeRadioContent.answerList[i].name;
          checkBox.value = activeRadioContent.answerList[i].name;
          checkBox.id = activeRadioContent.answerList[i].name;
          checkBox.className = "customCheckboxQuestion_input";
          datacollect.push(checkBox);
          label.id = activeRadioContent.answerList[i].name;
          label.name = activeRadioContent.answerList[i].name;
          label.value = activeRadioContent.answerList[i].name;
          label.className = "customCheckbox";
          label.htmlFor = activeRadioContent.answerList[i].name;
          label.textContent = activeRadioContent.answerList[i].LangName;
          checkboxContainer.appendChild(checkBox);
          checkboxContainer.appendChild(customCheckbox);
          checkboxContainer.appendChild(label);

          checkboxContainer.className = "checkbox-container";
          sampleDom.appendChild(checkboxContainer);
          sampleDom.id = "checkBoxList";
          sampleDom.className = "landingPage-middle-checkBoxList";
        }
      }

      datacollect.forEach((item) => {
        item.addEventListener("change", (el) => {
          if (el.target.checked) {
            questionListForSecondModal[
              activeIndexForSecondModal - 1
            ].checkedAnswer.push(el.target.name);
          }
        });
      });

      if (activeIndexForSecondModal >= 0) {
        document.getElementById("checkBoxList").replaceWith(sampleDom);

        var checkboxes = document.getElementsByClassName("checkbox-container");

        if (activeIndexForSecondModal === 1) {
          for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].style.flexBasis = "28%";
          }
        }
      }

      // to change the question content
      questionAndContent.innerHTML =
        questionListForSecondModal[activeIndexForSecondModal].question;
      if (window.innerWidth == 1024 && window.innerHeight == 1366) {
        questionAndContent.style.background =
          "url('image/titleBackgorundLasts.png')";

        questionAndContent.style.backgroundSize = "cover";
        questionAndContent.style.backgroundRepeat = "no-repeat";
        questionAndContent.style.backgroundPosition = "bottom";

        questionAndContent.style.alignItems = "center";
      }
      if (window.innerWidth < 993) {
        questionAndContent.style.background =
          "url('image/titleBackgorundLasts.png')";

        questionAndContent.style.backgroundSize = "cover";
        questionAndContent.style.backgroundRepeat = "no-repeat";
        questionAndContent.style.backgroundPosition = "bottom";

        // questionAndContent.style.alignItems = "center";
      }

      if (window.innerWidth < 321) {
        questionAndContent.style.minHeight = "unset";
      }

      activeIndexForSecondModal = activeIndexForSecondModal + 1;
    } else if (activeIndexForSecondModal >= 4) {
      questionAndContent.innerHTML = "Thank You";
      questionAndContent.style.fontSize = "7rem";
      if (window.innerWidth < 500) {
        questionAndContent.style.fontSize = "4rem";
      }

      if (window.innerWidth < 993) {
        questionAndContent.style.background =
          "url('image/titleBackground.png')";
        questionAndContent.style.backgroundSize = "contain";
        questionAndContent.style.backgroundRepeat = "no-repeat";
        questionAndContent.style.alignItems = "flex-end";
        questionAndContent.style.backgroundPosition = "bottom";
        questionAndContent.style.fontSize = "3.4rem";

        // questionAndContent.style.paddingBottom = "3vh";
      }
      olderThanDescription.style.display = "flex";
      olderThanDescription.innerHTML = `<div class="landingPage-middle-thankYou">           
      <p>You may now see our list and photos of women who are online and ready to chat in your area. Again, please keep their identity a secret.
</p>
                         
      <p>Click on the "Continue" button below to join our site and begin chatting to MILFs who live near you.</p>`;
      document.getElementById("landingPageContentChoose").style.display =
        "none";
      document.getElementById("checkBoxList").style.display = "none";
      document.getElementById("continueButtonContainer").style.display = "flex";

      rightButtonContainer.style.display = "none";

      var continues = document.getElementById("continueButton");
      var skipButton = document.getElementById("okButtonContainer");
      skipButton.style.display = "none";

      var continuesContainer = document.getElementById(
        "continueButtonContainer"
      );

      document.getElementsByClassName(
        "landingPage-top-left-olderThan-buttons"
      )[0].style.gap = "0rem";

      if (window.innerWidth < 500) {
        continues.style.fontSize = "1.5rem";
      }
      if (window.innerWidth <= 475) {
        // Apply styles for max-width: 975px
        continues.style.padding = "7px 12px";
        continues.style.fontSize = "1.3rem";
      }

      continues.innerHTML = "CONTINUE";
    }
  }

  if (activeIndex <= 5) {
    questionAndContent.innerHTML = questionList[activeIndex - 1].title;
    actualQuestions.innerHTML = questionList[activeIndex - 1].question;
  }
}
