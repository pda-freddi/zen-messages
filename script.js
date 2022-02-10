// Create an object containing three arrays
// First array should contain adjectives
// Second array should contain all days of the week
// Third array should contain contemplation topics

const words = {
    adjectives: ['beautiful', 'splendid', 'marvelous', 'peaceful', 'wonderful', 'striking', 'remarkable', 'wondrous', 'miraculous',
    'magnificent', 'glorious', 'superb', 'good', 'fantastic', 'great', 'lovely', 'delightful', 'sublime'],
    daysOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    contemplationTopics: ['impermanence', 'non-self', 'interconnection', 'human life', 'mindfulness', 'karma'],
};

// Create a function that generates a random number ranging from 0 to array.length
function randIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Create variables to hold the randomly selected values from the arrays
const adjective = words.adjectives[randIndex(words.adjectives)];
const dayOfWeek = words.daysOfWeek[randIndex(words.daysOfWeek)];
const contemplationTopic = words.contemplationTopics[randIndex(words.contemplationTopics)];

// Log the final message to the console concatenating the variables
const message = `Next ${dayOfWeek} will be a ${adjective} day! A great opportunity to contemplate on ${contemplationTopic}.`;
console.log(message);