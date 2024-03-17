const moonPhases = ['new moon', 'waxing crescent', 'half moon', 'waxing gibbous', 'full moon', 'waning gibbous', 'waning crescent'];
const luckTypes = ['good', 'bad', 'excellent', 'dumb', 'tough'];
const advice = [
    'stay inside', 'be social', 'try new things', 'make a career change', 'focus on yourself', 'try a new hobby',
    'spend time with family', 'avoid social media'
];


function moonPhaseSentence(randomWord) {
    const randomMoonPhase = Math.floor(Math.random() * 7);
    return `The moon is in its ${randomWord[randomMoonPhase]} phase.`
};
// console.log(moonPhaseSentence(moonPhases));

function luckSentence(randomWord) {
    const randomLuck = Math.floor(Math.random() * 5);
    return `You will have ${randomWord[randomLuck]} luck today.`
};

function adviceSentence(randomWord) {
    const randomAdvice = Math.floor(Math.random() * 8);
    return `You should ${randomWord[randomAdvice]}.`
};

function mixedMessage() {
    console.log(`Today's fortune: \n ${moonPhaseSentence(moonPhases)} \n ${luckSentence(luckTypes)} \n ${adviceSentence(advice)}`)
};

mixedMessage();