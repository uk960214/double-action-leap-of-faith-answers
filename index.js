import { createAnswerSection } from "./createAnswerSection.js";
import { nineAnswers } from "./nineAnswers.js";
import { sevenAnswers } from "./sevenAnswers.js";

const answerSection = document.querySelector("#answer-section");
const showSevenButton = document.querySelector("#show-seven-button");
showSevenButton.addEventListener("click", () => {
  answerSection.innerHTML = createAnswerSection(sevenAnswers);
});
const showNineButton = document.querySelector("#show-nine-button");
showNineButton.addEventListener("click", () => {
  answerSection.innerHTML = createAnswerSection(nineAnswers);
});
