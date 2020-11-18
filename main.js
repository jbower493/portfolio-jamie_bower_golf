// mobile nav

const mobileNav = document.getElementById('mobile-nav');
const hamburger = document.getElementById('hamburger');
const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('closed');
});

mobileNavLinks.forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.toggle('closed');
}));

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