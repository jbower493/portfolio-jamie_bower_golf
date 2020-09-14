const toggle = document.getElementById('toggle');
const navLinks = document.querySelectorAll('.nav-link');
const events = document.querySelectorAll('.event');
const loader = document.getElementsByClassName('loader')[0];
const readMoreButtons = document.querySelectorAll('.read-more');
const newsCardsNodeList = document.querySelectorAll('.news-card-body');
const newsCards = Array.from(newsCardsNodeList);
const tournamentsNodeList = document.querySelectorAll('.event');
const tournamentsList = Array.from(tournamentsNodeList);
const left = document.getElementById('move-left');
const right = document.getElementById('move-right');
const carousel = document.getElementById('carousel');
const carouselHolder = document.getElementById('carousel-holder');
const newsCircles = document.getElementsByClassName('news-circle');

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
/*events.forEach(event => {
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
});*/

// open and close card bodies
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
    id: 'news1',
    title: 'Perfect start to the Pennant season',
    date: '9th Mar 2020',
    image: './images/jamie_follow_through.jpg',
    body: 'I played my third match of the Melbourne Pennant season on Sunday and managed a solid 2&1 win, helping The Eastern GC team to a thumping 7-0 victory. The win on Sunday makes it 3 out of 3 wins for the team so far and 2 out of 3 wins for me personally. I\'m loving being part of the team and doing my bit to help the lads push for a third consecutive promotion this year. It\'s also great to be playing plenty of competitive golf before I return to the UK at the start of April to kick my season off.'
  },
  {
    id: 'news2',
    title: 'Close but no cigar at Vic Open Qualifying',
    date: '3rd Mar 2020',
    image: './images/course.jpg',
    body: 'The ISPS Handa Vic Open held a qualifying event on the Monday before the event. I decided to enter as it was a great chance to possibly play in a European Tour event, and also get some much needed competition leading up to the season. I shot 69 (-2), finishing T7th and 2 shots outside of the qualifying mark.'
  },
  {
    id: 'news3',
    title: 'Off season in Aus',
    date: '20th Jan 2020',
    image: './images/greg_and_dunc.jpg',
    body: 'Off season has seen me get a solid three months of warm weather training out in Melbourne, Australia, where I have been staying with my partner Olivia. I have been hard at work on all aspects of my game with regular Skype coaching from Simon and Duncan. I have been making good use of the excellent practice facilities at The Eastern Golf Club in Melbourne\'s Yarra Valley region, which is my base while I am in Melbourne. In the lead up to the 2020 Europro season, I will be playing Vic Open qualifying and representing The Eastern Golf Club\'s penant team for a few matches.'
  },
  {
    id: 'news4',
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
  newsCards[i].children[2].href = `news.html#${news[i].id}`;

  // hide every card above 3
  /*if(i > 2) {
    newsCards[i].parentElement.style.display = 'none';
  }*/
}

// slider experimenting

right.addEventListener('click', () => {
  const activeCircle = document.getElementsByClassName('active-news-circle')[0];

  if(carouselHolder.className === 'slide1') {
    carouselHolder.className = 'slide2';
    activeCircle.classList.remove('active-news-circle');
    newsCircles[1].classList.add('active-news-circle');
    return;
  }

  /*if(window.matchMedia('(min-width: 1000px')) {
    return;
  }*/

  if(carouselHolder.className === 'slide2') {
    carouselHolder.className = 'slide3';
    activeCircle.classList.remove('active-news-circle');
    newsCircles[2].classList.add('active-news-circle');
    return;
  }
  if(carouselHolder.className === 'slide3') {
    carouselHolder.className = 'slide4';
    activeCircle.classList.remove('active-news-circle');
    newsCircles[3].classList.add('active-news-circle');
    return;
  }
});

left.addEventListener('click', () => {
  const activeCircle = document.getElementsByClassName('active-news-circle')[0];

  if(carouselHolder.className === 'slide4') {
    carouselHolder.className = 'slide3';
    activeCircle.classList.remove('active-news-circle');
    newsCircles[2].classList.add('active-news-circle');
    return;
  }
  if(carouselHolder.className === 'slide3') {
    carouselHolder.className = 'slide2';
    activeCircle.classList.remove('active-news-circle');
    newsCircles[1].classList.add('active-news-circle');
    return;
  }
  if(carouselHolder.className === 'slide2') {
    carouselHolder.className = 'slide1';
    activeCircle.classList.remove('active-news-circle');
    newsCircles[0].classList.add('active-news-circle');
    return;
  }
});

// upcoming events

const tournaments = [
  {
    id: 1,
    name: 'Europro Luton Hoo',
    venue: 'Luton Hoo Golf & Spa, Luton',
    address: 'Luton Hoo Golf Course, Luton Hoo Estate, Luton',
    date: '12th - 14th May'
  },
  {
    id: 2,
    name: 'Europro Harleyford',
    venue: 'Harleyford Golf Club, Marlow',
    address: 'Harleyford Golf Club, Medmenham, Marlow',
    date: '26th - 28th May'
  },
  {
    id: 3,
    name: 'Europro Donnington Grove',
    venue: 'Donnington Grove, Newbury',
    address: 'Donnington Grove Country Club, Grove Road, Donnington, Newbury',
    date: '9th - 11th June'
  },
  {
    id: 4,
    name: 'Europro Cumberwell Park',
    venue: 'Cumberwell Park, Bradford on Avon',
    address: 'Cumberwell Park Golf Course, Bradford on Avon',
    date: '16th - 18th June'
  },
  {
    id: 5,
    name: 'Europro Montrose',
    venue: 'Montrose Golf Club, Montrose',
    address: 'Montrose Golf Club, Montrose',
    date: '23rd - 25th June'
  },
  {
    id: 6,
    name: 'TBD',
    venue: 'TBD',
    address: '',
    date: 'TBD'
  }
];

for(let i = 0; i < tournamentsList.length; i++) {
  tournamentsList[i].children[1].firstElementChild.innerText = tournaments[i].name;
  tournamentsList[i].children[1].children[1].innerText = tournaments[i].venue;
  tournamentsList[i].children[2].innerText = tournaments[i].date;
}

// recent results





// HERE maps section

const mapElement = document.getElementById('map');

// connect to backend services of HERE
const platform = new H.service.Platform({
  'apikey': 'WJbD3-rvJSbCe-X10lC_rAa3Mtq4CuhrG1IxaVp61Mc'
});

const geocodingService = platform.getGeocodingService();

// Obtain the default map types from the platform object:
const defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
const map = new H.Map(mapElement, defaultLayers.vector.normal.map, {
  zoom: 5,
  center: { lat: 54.15028, lng: -4.48096 },
  pixelRatio: window.devicePixelRatio || 1
});

window.addEventListener('resize', () => map.getViewPort().resize());

const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

const ui = H.ui.UI.createDefault(map, defaultLayers);

const addMarker = event => {
  geocodingService.geocode({ searchText: `${event.address}` }, data => {
    const position = data.Response.View[0].Result[0].Location.DisplayPosition;

    const marker = new H.map.Marker({
      lat: position.Latitude,
      lng: position.Longitude
    });
  
    map.addObject(marker);
  });
};

tournaments.forEach(event => {
  if(tournaments.indexOf(event) < 5) {
    addMarker(event);
  }
});