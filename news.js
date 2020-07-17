const toggle = document.getElementById('toggle');
const navLinks = document.querySelectorAll('.nav-link');
const loader = document.getElementsByClassName('loader')[0];
const newsCards = Array.from(document.getElementsByClassName('news-card'));

// loader
window.addEventListener('load', () => {
  loader.classList.add('hidden');
});

// open and close mobile nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('open');
});

// news content 

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

/* <div class="news-item">
    <img src="" alt="">
    <div class="body">
      <h3></h3>
      <small></small>
      <p></p>
    </div>
  </div>
*/

for(let i = 0; i < newsCards.length; i++) {
  newsCards[i].id = news[i].id;
  newsCards[i].firstElementChild.src = news[i].image;
  newsCards[i].children[1].firstElementChild.innerText = news[i].title;
  newsCards[i].children[1].children[1].innerText = news[i].date;
  newsCards[i].children[1].children[2].innerText = news[i].body;
}

