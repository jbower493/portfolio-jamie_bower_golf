const toggle = document.getElementById('toggle');
const navLinks = document.querySelectorAll('.nav-link');
const events = document.querySelectorAll('.event');
const loader = document.getElementsByClassName('loader')[0];
const readMoreButtons = document.querySelectorAll('.read-more');
const newsCardsNodeList = document.querySelectorAll('.news-card-body');
const newsCards = Array.from(newsCardsNodeList);
const tournamentsNodeList = document.querySelectorAll('.event');
const tournamentsList = Array.from(tournamentsNodeList);


// loader
window.addEventListener('load', () => {
  loader.classList.add('hidden');
});

// open and close mobile nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('open');
});

// close nav when link clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('open');
  });
});

// highlight map marker when event is clicked
events.forEach(event => {
  event.addEventListener('click', (e) => {
    const marked = document.querySelector('.marked');
    if(marked) {
      marked.classList.remove('marked');
    };
    events.forEach(item => {
      if(item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
    let marker;
    if(e.target.parentElement.classList.contains('event')) {
      marker = e.target.parentElement;
    } else if(e.target.classList.contains('event')) {
      marker = e.target;
    } else {
      marker = e.target.parentElement.parentElement;
    }
    marker.classList.add('active');
    const currentMarker = document.querySelector(`.${marker.id}`);
    currentMarker.classList.add('marked');
  });
});

// open and close sponsorship info
readMoreButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle('open');
    if(e.target.innerHTML === 'Read more') {
      e.target.innerHTML = 'Read less';
    } else {
      e.target.innerHTML = 'Read more';
    }
  });
});

// dynamically generate content

// news

const news = [
  {
    title: 'Perfect start to the Pennant season',
    date: '9th Mar 2020',
    image: './images/jamie_follow_through.jpg',
    body: 'I played my third match of the Melbourne Pennant season on Sunday and managed a solid 2&1 win, helping The Eastern GC team to a thumping 7-0 victory. The win on Sunday makes it 3 out of 3 wins for the team so far and 2 out of 3 wins for me personally. I\'m loving being part of the team and doing my bit to help the lads push for a third consecutive promotion this year. It\'s also great to be playing plenty of competitive golf before I return to the UK at the start of April to kick my season off.'
  },
  {
    title: 'Close but no cigar at Vic Open Qualifying',
    date: '3rd Mar 2020',
    image: './images/course.jpg',
    body: 'The ISPS Handa Vic Open held a qualifying event on the Monday before the event. I decided to enter as it was a great chance to possibly play in a European Tour event, and also get some much needed competition leading up to the season. I shot 69 (-2), finishing T7th and 2 shots outside of the qualifying mark.'
  },
  {
    title: 'Off season in Aus',
    date: '20th Jan 2020',
    image: './images/greg_and_dunc.jpg',
    body: 'Off season has seen me get a solid three months of warm weather training out in Melbourne, Australia, where I have been staying with my partner Olivia. I have been hard at work on all aspects of my game with regular Skype coaching from Simon and Duncan. I have been making good use of the excellent practice facilities at The Eastern Golf Club in Melbourne\'s Yarra Valley region, which is my base while I am in Melbourne. In the lead up to the 2020 Europro season, I will be playing Vic Open qualifying and representing The Eastern Golf Club\'s penant team for a few matches.'
  },
  {
    title: 'Reflecting on 2019 season',
    date: '5th Jan 2020',
    image: './images/sunrise.jpg',
    body: 'The 2019 PGA Europro season on the whole was a great success for me. Although a final OOM position of 56th was not excactly what I had in mind, it represents a huge improvement after the struggles of my first two seasons as a pro. My season included two top tens, and eight out of fifteen cuts made. A big thanks goes to my team; Simon (coach), Andy (physio) and Greg and Dunc (Underpin); and all of my sponsors and supporters who helped make everything possible.'
  }
];

for(let i = 0; i < newsCards.length; i++) {
  newsCards[i].parentElement.firstElementChild.src = news[i].image;
  newsCards[i].children[0].innerText = news[i].title;
  newsCards[i].children[1].innerText = news[i].date;
  newsCards[i].children[2].innerText = news[i].body;

  // hide every card above 3
  /*if(i > 2) {
    newsCards[i].parentElement.style.display = 'none';
  }*/
}

// slider experimenting

const left = document.getElementById('move-left');
const right = document.getElementById('move-right');
//const cards = Array.from(document.querySelectorAll('.news-card'));
const cardHolder = document.querySelector('#news-card-holder');

left.addEventListener('click', () => {
  if(cardHolder.className === 'one') {
    cardHolder.className = 'two';
  }
});

right.addEventListener('click', () => {
  if(cardHolder.className === 'two') {
    cardHolder.className = 'one';
  }
});

// upcoming events

const tournaments = [
  {
    name: 'Party Poker Championship',
    venue: 'Caversham Heath, Reading',
    date: '12-14 Jun'
  },
  {
    name: 'Cumberwell Park Championship',
    venue: 'Cumberwell Park, Bath',
    date: '19-21 Jun'
  },
  {
    name: 'World Snooker Open',
    venue: 'Clevedon, Bristol',
    date: '26-28 Jun'
  },
  {
    name: 'Clipper Logistics Championship',
    venue: 'Moor Allerton, Leeds',
    date: '18-20 Jul'
  },
  {
    name: 'Scottish Links Championship',
    venue: 'Montrose, Scotland',
    date: '1-3 Aug'
  }
];

for(let i = 0; i < tournamentsList.length; i++) {
  tournamentsList[i].children[1].firstElementChild.innerText = tournaments[i].name;
  tournamentsList[i].children[1].children[1].innerText = tournaments[i].venue;
  tournamentsList[i].children[2].innerText = tournaments[i].date;
}

// recent results