// imagelist for slider

var activeIndex = 0;
let activeIndexForSecondModal = 0;

// for slider images

var arrImages = [
  "./image/rightBackgorund.png",
  "./image/bgg13.jpg",
  "./image/bgg10.jpg",
];

// var backgroundImageList = [
//   "./image/bgg11.jpg",
//   "./image/bgg13.jpg",
//   "./image/bgg10.jpg",
// ];

var image = document.getElementById("image");
var timeout;
var timoutThird;
var i = 1; //We start at the second image, because the first one is loaded already by default
function nextImage() {
  if (i < 5) {
    image.style.opacity = 0;
    //Change picture
    image.src = arrImages[i];

    timoutThird = setTimeout(() => {
      image.style.opacity = 1;
    }, [1000]);
    image.style.opacity = 100;
  } else {
    image.style.opacity = 100;
  }

  if (i + 1 >= arrImages.length) {
    i = 0;
  } else {
    i++;
  }

  timeout = setTimeout(function () {
    image.style.opacity = 0;
  }, 4000);
}

var interval;
var secondInterval;

function startSlideshow() {
  image.src = arrImages[0]; //Load first picture by default
  image.style.opacity = 100;

  //Change opacity back to 0, 1 second before changing the picture

  secondInterval = setTimeout(function () {
    image.style.opacity = 0;
  }, 4000);
  if (!interval) {
    interval = setInterval(function () {
      clearTimeout(timeout);
      clearTimeout(secondInterval);
      clearTimeout(timoutThird);

      nextImage();
    }, 5000);
  }
}

// startSlideshow();

// for loader section

const loadingAnimationTexts = [
  {
    id: 1,
    content: "REVIEWING YOUR ANSWERS…",
  },
  {
    id: 2,
    content: "CHECKING IF FREE PASSESS ARE AVAILABLE",
  },
  {
    id: 3,
    content: "DUPLICATE REGISTRATIONS ARE BEING REVIEWED",
  },
  {
    id: 4,
    content: "LOOKING FOR FREE REGISTRATION OPTIONS.",
  },
];

var questionListForSecondModal = [
  {
    id: 1,
    question: "What type of girl turns you on?",
    answerList: [
      { id: 1, name: "Asians" },
      { id: 2, name: "Latinas" },
      { id: 3, name: "Fetish" },
      { id: 4, name: "Friendly" },
      { id: 5, name: "MILF's" },
      { id: 6, name: "BBW" },
      { id: 7, name: "Teens" },
      { id: 8, name: "Squirters" },
      { id: 9, name: "Grannies" },
      { id: 10, name: "Kinky" },
    ],
    checkedAnswer: [],
  },
  {
    id: 2,
    question: "What type of body turns you on?",
    answerList: [
      { id: 1, name: "Skinny" },
      { id: 2, name: "Big tits are a must" },
      { id: 3, name: "Regular" },
      { id: 4, name: "Sexy ass is a must" },
      { id: 5, name: "BBW" },
      { id: 6, name: "Does it really matter" },
    ],
    checkedAnswer: [],
  },
  {
    id: 3,
    question: "Are you using any messaging apps?",
    answerList: [
      { id: 1, name: "Skype" },
      { id: 2, name: "Whatsapp" },
      { id: 3, name: "Other" },
      { id: 4, name: "Snapchat" },
      { id: 5, name: "None" },
      { id: 6, name: "Viber" },
    ],
    checkedAnswer: [],
  },
];

var image = document.getElementById("image");

var questionList = [
  {
    id: 1,
    question: "Are you older than 24?",
    answer: "",
  },
  {
    id: 2,
    question:
      'These women have asked us NOT to allow men that are seeking a "Relationship". They ONLY desire quick sex. NOT DATING. Do you agree to this request?',
    answer: "",
  },

  {
    id: 3,
    question: "Have you ever had Sexually Transmitted Diseases (STDs)?",
    answer: "",
  },
  {
    id: 4,
    question:
      "Would you use a condom when having sex with a partner you met on our site?",
    answer: "",
  },
];

function yesNoHandler(aggree) {
  var olderThanDescription = document.getElementById("olderThanDescription");
  olderThanDescription.style.display = "none";
  var questionAndContent = document.getElementById("olderThanTitle");
  if (activeIndex <= 3) {
    if (aggree === 1) {
      questionList[activeIndex].answer = "yes";

      activeIndex = activeIndex + 1;
    } else if (aggree === -1) {
      questionList[activeIndex].answer = "no";
      activeIndex = activeIndex + 1;
    }

    // console.log(questionList, "question list yes no");
  }

  // it is the collection of question and their corresponding action for yes no section
  // console.log(questionList, "questionList");

  if (activeIndex > 3) {
    id = "checkBoxList";

    // document.getElementById("checkBoxList").style.display = "flex";

    document.getElementById("description").style.display = "none";
    if (activeIndexForSecondModal === 2) {
      document.getElementById("landingPageContentChoose").innerHTML =
        "A lot of our members use Whatsapp, Snapchat, Viber or Skype to exchange messages and photos";
    }
    let activeRadioContent =
      questionListForSecondModal[activeIndexForSecondModal];

    var sampleDom = document.createElement("div");

    var letButton = document.getElementById("yesButton");
    var rightButton = document.getElementById("noButton");
    var leftButtonContainer = document.getElementById("yesButtonContainer");
    var thirdPageContentChoose = document.getElementById(
      "thirdPageContentChoose"
    );

    leftButtonContainer.innerHTML =
      "<div><p>CONTINUE</p></div>" +
      '<div class="arrowIconContinue"><img src="arrowIcon.png"></img></div>';

    leftButtonContainer.style.flex = "unset";

    document.getElementById("noButtonContainer").style.display = "none";

    // To cretae the checkbox with coreespondng label dynamically

    var datacollect = [];

    // collection of checkboxes selected value with their corresponding questions

    // console.log(questionListForSecondModal, "question list for second modal ");

    document.getElementById("landingPageContentChoose").style.display = "block";

    if (activeIndexForSecondModal < 3) {
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
        label.textContent = activeRadioContent.answerList[i].name;
        checkboxContainer.appendChild(checkBox);
        checkboxContainer.appendChild(customCheckbox);
        checkboxContainer.appendChild(label);

        checkboxContainer.className = "checkbox-container";
        sampleDom.appendChild(checkboxContainer);
        sampleDom.id = "checkBoxList";
        sampleDom.className = "landingPage-top-left-olderThan-checkBoxList";
      }
    }

    if (activeIndexForSecondModal >= 3) {
      document.getElementById("multiStepModal").style.display = "block";
      document.getElementById("leftSection").style.justifyContent =
        "flex-start";

      document.getElementById("description").style.display = "none";
      document.getElementById("olderThan").style.display = "none";

      loadingTexthandler();
    }

    datacollect.forEach((item) => {
      item.addEventListener("change", (el) => {
        if (el.target.checked) {
          questionListForSecondModal[
            activeIndexForSecondModal - 1
          ].checkedAnswer.push(el.target.name);
        }

        // console.log(
        //   questionListForSecondModal,
        //   "question list for second modal"
        // );
      });
    });

    if (activeIndexForSecondModal === 0) {
      document.getElementById("checkBoxList").replaceWith(sampleDom);

      var checkboxes = document.getElementsByClassName("checkbox-container");

      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].style.width = "30%";
      }
    } else if (activeIndexForSecondModal === 4) {
      thirdPageContentChoose.remove();
      var aTag = document.createElement("a");
      aTag.setAttribute("href", "https://track.opt-tds.com/click");
      aTag.innerHTML =
        "<p>Continue</p>" +
        '<i class="fa-solid fa-chevron-right fa-sm" style="color: #ffffff;"></i>';

      NextContainer.innerHTML = aTag;

      letButton.innerHTML = aTag.innerHTML;

      if (activeIndexForSecondModal === 4) {
        letButton.addEventListener("click", () => {
          aTag.click();
        });
      }
    } else {
      document.getElementById("checkBoxList").replaceWith(sampleDom);
    }

    // to change the question content
    questionAndContent.innerHTML =
      questionListForSecondModal[activeIndexForSecondModal].question;
    activeIndexForSecondModal = activeIndexForSecondModal + 1;
  }

  // document.getElementById("landingPageBottom").style.display = "none";
  if (activeIndex < 4) {
    questionAndContent.innerHTML = questionList[activeIndex].question;
  }
}

// for loading animation section

function loadingTexthandler() {
  let activeLoadingIndex = 0;
  let loadingvar = setInterval(function () {
    let loadingText = loadingAnimationTexts[activeLoadingIndex].content;

    document.getElementById("loadingText").innerHTML = loadingText;
    activeLoadingIndex = activeLoadingIndex + 1;
  }, 1250);

  setTimeout(() => {
    clearInterval(loadingvar);

    setTimeout(() => {
      document.getElementById("multiStepModal").style.display = "none";

      document.getElementById("finalPage").style.display = "flex";

      document.getElementById("floralImageButton").style.display = "none";
      // typeWriter();

      document.getElementById("important").style.display = "none";
      document.getElementById("importantParagraph").style.display = "none";
    }, 500);
  }, 5000);
}

// typeWriter for congratulation

var j = 0;
var txt = "Congratulations"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (j < txt.length) {
    document.getElementById("congratulations").innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}

// changes the background in infinte loop

// document.getElementById("container").style.backgroundImage =
//   "url('./image/bgg11.jpg.jpg')";

// document.getElementById("image").style.backgroundImage =
//   "url('./image/rightBackgorund.png')";

var activeBackgroundIndex = 1;

setInterval(function () {
  let imageData = backgroundImageList[activeBackgroundIndex];

  document.getElementById("container").style.backgroundImage =
    "url(" + imageData + ")";

  document.getElementById("image").style.backgroundImage =
    "url(" + imageData + ")";

  activeBackgroundIndex = activeBackgroundIndex + 1;
  if (activeBackgroundIndex >= backgroundImageList.length) {
    activeBackgroundIndex = 0;
  }
}, 2500);

// for I aggree button click handler
function iAggreeHandler() {
  var aTag = document.getElementById("iAggreeId");
  aTag.setAttribute("href", "https://t.opt-tds.com/click");
  aTag.click();
}

// for countdown times in first page

var now = new Date().getTime();
var tweleveminuteAhead = now + 12 * 60 * 1000;
var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = tweleveminuteAhead - now;
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
