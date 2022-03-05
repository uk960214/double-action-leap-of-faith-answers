const createSteps = (quests) => {
  return Object.keys(quests).reduce((elementStr, quest) => {
    const steps = quests[quest].reduce((acc, step, i) => {
      return `${acc}<details>
      <summary>${i + 1}단계</summary>
      <p>${step}</p>
    </details>`;
    }, `${quest}`);
    return `${elementStr}${steps}<br/>`;
  }, ``);
};

export const createAnswerSection = (answerObj) => {
  const elements = Object.keys(answerObj).reduce((elementStr, mission) => {
    const quests = createSteps(answerObj[mission]);
    return `${elementStr}<div><h2>${mission}</h2>${quests}</div>`;
  }, "");
  return elements;
};
