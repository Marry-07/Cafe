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
    role: 'Project Manager',
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
    role: 'Cool woman',
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
    role: 'Designer',
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
    role: 'funny girl',
    img: 'images/woman2.jpg'
  }
];


const quoteEl = document.querySelector('.wrap-quote blockquote');
const authorNameEl = document.querySelector('.author .title-info');
const authorRoleEl = document.querySelector('.author .min-text');
const authorImgEl = document.querySelector('.author img');

const btnLeft = document.querySelector('.square--left');
const btnRight = document.querySelector('.square--right');

let currentIndex = 0;

/* ---------- функция обновления содержимого (с анимацией появления) ---------- */
function showQuote(index) {
  const q = quotes[index];



  // через небольшой таймаут меняем контент (промежуток = время CSS перехода)
  setTimeout(() => {
    quoteEl.textContent = q.text;
    authorNameEl.textContent = q.name;
    authorRoleEl.textContent = q.role;
    authorImgEl.src = q.img;
    authorImgEl.alt = `Photo of ${q.name}`;


  }, 100); 
}

/* ---------- обработчики кнопок (цикличность) ---------- */
btnRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % quotes.length;
  showQuote(currentIndex);
});

btnLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
  showQuote(currentIndex);
});




