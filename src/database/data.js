import about1 from '../assets/images/about1.jpg'
import about2 from '../assets/images/about2.jpg'
import about3 from '../assets/images/about3.png'
import hero_1 from '../assets/images/hero_1.jpg'
import hero_2 from '../assets/images/hero_2.jpg'
import type from '../assets/images/type.png'

function shuffleList(list) {
  const newList = [...list]; // Create a copy of the original list
  let currentIndex = newList.length;

  // While there are elements to shuffle
  while (currentIndex > 0) {
    // Pick a remaining element
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap the current element with the randomly selected element
    const temp = newList[currentIndex];
    newList[currentIndex] = newList[randomIndex];
    newList[randomIndex] = temp;
  }

  return newList;
}


export const images = [
    about1,
    about2,
    about3,
    hero_1,
    hero_2
]

// console.log("solving ",shuffleList(images))
export const data = [
  {
    id: 1,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:3,
    category: "Bungalow",
    img: about3,
    name: "Xclusive Lodge",
    price: 102,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)
  },
  {
    id: 2,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:5,
    category: "Hotels",
    img: hero_2,
    name: "Xclusive Lodge",
    price: 30,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)
  },
  {
    id: 3,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:4,
    category: "skyscraper",
    img: type,
    name: "Xclusive Lodge",
    price: 60,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)
  },
  {
    id: 4,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:2,
    category: "Flats",
    img: hero_2,
    name: "Xclusive Lodge",
    price: 600,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)
  },
  {
    id: 5,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:1,
    category: "skyscraper",
    img: about3,
    name: "Xclusive Lodge",
    price: 90,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)
  },
  {
    id: 6,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:0,
    category: "Flats",
    img: hero_1,
    name: "Xclusive Lodge",
    price: 150,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)
  },
  {
    id: 7,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:5,
    category: "Duplex",
    img: type,
    name: "Xclusive Lodge",
    price: 110,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)
  },
  {
    id: 8,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:3,
    category: "Hotels",
    img: hero_1,
    name: "Xclusive Lodge",
    price: 180,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)
  },
  {
    id: 9,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:5,
    category: "Bungalow",
    img: about2,
    name: "Xclusive Lodge",
    price: 100,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)
  },
  {
    id: 10,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:3,
    category: "Duplex",
    img: type,
    name: "Xclusive Lodge",
    price: 100,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)
  },
  {
    id: 11,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:3,
    category: "Self contain",
    img: about2,
    name: "Xclusive Lodge",
    price: 100,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)
  },
  {
    id: 12,
    description:"adipisicing elit. Sint maxime exercitationem odio autem molestias",
    rating:3,
    category: "Self contain",
    img: about1,
    name: "Xclusive Lodge",
    price:200,
    location: "Ikeja, Lagos",
    agent: "Portablex",
    images:shuffleList(images)

  },
];
