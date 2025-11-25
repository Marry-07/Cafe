// плавная прокрутка по id

document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    }
});
});


// меню
document.getElementById("buttn").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open")
})



// Карточки с переворотом на 180
document.querySelectorAll('.one-strange-card').forEach(card => {

  card.addEventListener('click', () => {

    card.classList.add('flip');

    // если таймер уже был — сбрасываем
    if (card.autoTimer) {
      clearTimeout(card.autoTimer);
    }

    // новыц таймер на 3 секунды
    card.autoTimer = setTimeout(() => {
      card.classList.remove('flip');
    }, 2000);
  });

});


// Переключение влево вправо циклично
const quotes = [{
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of
type and scrambled it to make a type specimen book. It has
survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was
popularised in the 1960s with the release of Letraset...`,
    name: 'Jonny Thomas',
    who: 'Project Manager',
    img: 'images/man.png'
  },
  {
    text: `Purple calculators dance with silent jellyfish.
The floating clock eats Tuesday's shimmering noise.
My spoon is full of green televisions and whispers.
Tomorrow's invisible banana sings loud equations.
A quiet mountain made of pillows argues logically.
Digita code rainbows.
Forgotten languages taste like fuzzy electric stairs.
His polka-dot umbrella collects falling starlight and numbers.
The transparent elephant solved a riddle with a glass key...`,
    name: 'Mira Cloudy',
    who: 'Cool woman',
    img: 'images/woman.jpg'
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of
type and scrambled it to make a type specimen book. It has
survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was
popularised in the 1960s with the release of Letraset...`,
    name: 'Alex Miller',
    who: 'Designer',
    img: 'images/man2.jpg'
  },
  {
    text: `Giraffes in top hats juggle melting clocks.
A silent typewriter writes with glowing pickles.
My dreams are filled with buzzing cardboard.
Tomorrow's newspaper smells of rusty trumpets.
The moon is made of fuzzy green cheese.
Electric eels play chess in a velvet fog.
Lost socks speak in tangled alphabet soup.
A concrete feather dances on a hot stove.
Quiet avalanches happen in teacups at dawn....`,
    name: 'Darina Centra',
    who: 'funny girl',
    img: 'images/woman2.jpg'
  }
];


const quote = document.querySelector('.wrap-quote blockquote');
const authorName = document.querySelector('.author .title-info');
const authorWho = document.querySelector('.author .min-text');
const authorImg = document.querySelector('.author img');
const btnLeft = document.querySelector('.square--left');
const btnRight = document.querySelector('.square--right');
let element = 0;

function showQuote(index) {
  const currentElement = quotes[index];

  quote.textContent = currentElement.text;
  authorName.textContent = currentElement.name;
  authorWho.textContent = currentElement.who;
  authorImg.src = currentElement.img;
}

// цикл
btnRight.addEventListener('click', () => {
  element = (element + 1) % quotes.length;
  showQuote(element);
});

btnLeft.addEventListener('click', () => {
  element = (element - 1 + quotes.length) % quotes.length;
  showQuote(element);
});




