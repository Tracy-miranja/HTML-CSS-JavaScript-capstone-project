const bigDiv = document.getElementById('bigDiv');

const data = [
  {
    name: 'Ellis Scott',
    position:
      'Proffessor of Entrepreneurial Legal Studies at Harvard Law School.',
    description:
      'Ellis studies commons-based peer production, and published his seminal book The Wealth of Netvmds 2006.',
    image: './images/image1.jpg',
    mobileDisplay: true,
  },
  {
    name: 'Liam Berry',
    position: 'Liam helped bring the Internet to Asia and is an',
    description:
      "outspoken advocate for the open web and digtal commons. In 2012, he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame.",
    image: './images/image2.jpg',
  },
  {
    name: 'Ruby Dean',
    position: 'Director of Art Centre Nabi and a board member of CC Korea.',
    description:
      'As the main venue for new meda art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: './images/image3.jpg',
  },
  {
    name: 'Eliza Harvey',
    position: 'President of Young Pirates of Europe',
    description:
      "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parlament in July.",
    image: './images/image4.jpg',
  },
  {
    name: 'Eva Knight',
    position: 'Executive Director of the Wikimedia Foundation.',
    description:
      'Eva Is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month. ',
    image: './images/image5.jpg',
  },
  {
    name: 'Finlay Smith',
    position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description:
      'Finlay had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
    image: './images/image6.jpg',
  },
];

let displayCount = 4;

const incValue = 1;

function createDiv(index) {
  const div = document.createElement('div');
  div.className = 'contain';
  div.innerHTML = `
  <div class="bg-back">
  <div class="trans-bg">
  <img src="${data[index].image}" alt="${data[index].name}">
  </div>
  </div>
  <div class="bg-text">
      <h2>${data[index].name}</h2>
      <h3>${data[index].position}</h3>
      <div class='gray-dash'></div>
      <p>${data[index].description}</p>
      </div
    `;
  bigDiv.appendChild(div);
}

function displayData() {
  bigDiv.innerHTML = '';
  for (let i = 0; i < displayCount; i += incValue) {
    createDiv(i);
  }

  if (displayCount < data.length) {
    const showButton = document.createElement('button');
    showButton.innerText = 'MORE';
    showButton.addEventListener('click', () => {
      displayCount = data.length;
      displayData();
    });
    bigDiv.appendChild(showButton);
  }
}

displayData();

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    displayCount = 3;
  } else {
    displayCount = data.length;
  }
  displayData();
});
