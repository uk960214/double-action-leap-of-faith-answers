const createSteps = (quests) => {
  return Object.keys(quests).reduce((elementStr, quest) => {
    const steps = quests[quest].reduce((acc, step, i) => {
      return `${acc}
      <details class="step-details">
        <summary class="step-summary">${
          quests[quest].length === 1 ? "정답" : `${i + 1}단계`
        }</summary>
        <p class="step-content">${step}</p>
      </details>`;
    }, `<h3 class="quest-title">${quest}</h3>`);
    return `${elementStr}
    <div class="quest-steps">${steps}</div>
    <br/>`;
  }, ``);
};

export const createAnswerSection = (answerObj) => {
  const elements = Object.keys(answerObj).reduce((elementStr, mission) => {
    const quests = createSteps(answerObj[mission]);
    return `${elementStr}
    <details class="mission-card">
      <summary class="mission-summary">
        ${mission}
      </summary>
      ${quests}
    </details>`;
  }, "");
  return elements;
};
