// --------------- 🌺 THE MARK TWAIN QUOTE PROJECT 🌺 ----------------

// QUOTES FROM  https://www.quoteambition.com/mark-twain-quotes/

const quotes = `“Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. So, throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”-
“The secret of getting ahead is getting started.”-
“Continuous improvement is better than delayed perfection.”-
“With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.”-
“Life is short, break the rules. Forgive quickly, kiss slowly. Love truly. Laugh uncontrollably and never regret anything that makes you smile.”-
“All you need in this life is ignorance and confidence, and then success is sure.”-
“Give every day the chance to become the most beautiful of your life.”-
“The world owes you nothing. It was here first.”-
“Do something every day that you don’t want to do. This is the golden rule for acquiring the habit of doing your duty without pain.”-
“I can teach anybody how to get what they want out of life. The problem is that I can’t find anybody who can tell me what they want.”-
“Don’t wait. The time will never be just right.”-
“It is wiser to find out than suppose.”-
“We are all in the gutter, but some of us are looking at the stars.”-
“Courage is resistance to fear, mastery of fear, not absence of fear.”-
“Wisdom is the reward you get for a lifetime of listening when you would rather have talked.”-
“The two most important days in your life are the day you are born and the day you find out why.”-
“It is better to deserve honors and not have them than to have them and not deserve them.”-
“Never argue with stupid people, they will drag you down to their level and then beat you with experience.”-
“Never allow someone to be your priority while allowing yourself to be their option.”-
“Life does not consist mainly, or even largely, of facts or happenings. It consist mainly of the storm of thoughts that is forever flowing through one’s head.”`

const quotesArray = quotes.split('-');

const body = document.querySelector('body');
const bg = document.querySelector('.bg');
const image = document.querySelector('.image');
const buttonDiv = document.querySelector('.buttonDiv');
const text = document.querySelector('.text');
const button = document.querySelector('.submit');
const quotesDiv = document.querySelector('.quotesDiv');
const quoteText = document.querySelector('.fade-in-text');

function getQuotes() {
  let quotesArrayCopy = [...quotesArray];
  let random = quotesArrayCopy[Math.floor(Math.random() * (quotesArrayCopy.length - 1))];

  quoteText.textContent = random;
}

function refreshPage(){
  window.location.reload();
} 

button.addEventListener('submit', getQuotes)
getQuotes()

  