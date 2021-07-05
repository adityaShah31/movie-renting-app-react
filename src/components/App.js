import { useState, useEffect } from 'react';
import '../assets/css/App.css';
import HomePage from '../pages/HomePage';

function App() {
  const bannerMovies1 = [
    {
      id: 1,
      title: 'The Tomorrow War',
      description:
        'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester (Chris Pratt). Determined to save the world for his young daughter, Dan teams up with a brilliant scientist (Yvonne Strahovski) and his estranged father (J.K. Simmons) in a desperate quest to rewrite the fate of the planet.',
      imgBanner: 'https://static.bunnycdn.ru/i/cache/images/9/9e/9e85743034f1869fdb72db884d34490d.jpg',
      imgPoster: '',
    },
    {
      id: 2,
      title: 'F9',
      description: "Cipher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.",
      imgBanner: 'https://static.bunnycdn.ru/i/cache/images/f/ff/ff45c7097a9eeb1126adf8ed520b63e3.jpg',
      imgPoster: '',
    },
    {
      id: 3,
      title: 'Conjuring: The Devil Made Me Do It',
      description:
        "In 1981, only a few years after Michael Taylor's particularly violent Ossett Murder case that shocked the United Kingdom, and Janet Hodgson's blood-curdling Enfield Haunting case in The Conjuring 2 (2016), the experienced investigators of the unexplained, Ed Warren and Lorraine Warren, found themselves in Brookfield, Connecticut. There, Ed and Lorraine encountered something they'd never seen before: after the challenging exorcism of eight-year-old David Glatzel, Arne Johnson, a young friend of the Glatzels, began exhibiting increasingly strange behaviour. Then, more and more, the suffocating stranglehold of evil tightened around everyone involved, leading to murder and Johnson's incarceration. But, according to Arne, evil forces were at work. Did the devil, indeed, make him do it?",
      imgBanner: 'https://static.bunnycdn.ru/i/cache/images/a/a7/a722704b851747bf2be024ba5527b3e9.jpg',
      imgPoster: 'https://static.bunnycdn.ru/i/cache/images/3/31/31673239e8937fc3eca9be273aad2cee.jpg-w180',
    },
  ];

  const [bannerMovies, setBannerMovies] = useState([bannerMovies1]);
  useEffect(() => {
    const bannerMovies1 = [
      {
        id: 1,
        title: 'The Tomorrow War',
        description:
          'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester (Chris Pratt). Determined to save the world for his young daughter, Dan teams up with a brilliant scientist (Yvonne Strahovski) and his estranged father (J.K. Simmons) in a desperate quest to rewrite the fate of the planet.',
        imgBanner: 'https://static.bunnycdn.ru/i/cache/images/9/9e/9e85743034f1869fdb72db884d34490d.jpg',
        imgPoster: '',
      },
      {
        id: 2,
        title: 'F9',
        description: "Cipher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.",
        imgBanner: 'https://static.bunnycdn.ru/i/cache/images/f/ff/ff45c7097a9eeb1126adf8ed520b63e3.jpg',
        imgPoster: '',
      },
      {
        id: 3,
        title: 'Conjuring: The Devil Made Me Do It',
        description:
          "In 1981, only a few years after Michael Taylor's particularly violent Ossett Murder case that shocked the United Kingdom, and Janet Hodgson's blood-curdling Enfield Haunting case in The Conjuring 2 (2016), the experienced investigators of the unexplained, Ed Warren and Lorraine Warren, found themselves in Brookfield, Connecticut. There, Ed and Lorraine encountered something they'd never seen before: after the challenging exorcism of eight-year-old David Glatzel, Arne Johnson, a young friend of the Glatzels, began exhibiting increasingly strange behaviour. Then, more and more, the suffocating stranglehold of evil tightened around everyone involved, leading to murder and Johnson's incarceration. But, according to Arne, evil forces were at work. Did the devil, indeed, make him do it?",
        imgBanner: 'https://static.bunnycdn.ru/i/cache/images/a/a7/a722704b851747bf2be024ba5527b3e9.jpg',
        imgPoster: 'https://static.bunnycdn.ru/i/cache/images/3/31/31673239e8937fc3eca9be273aad2cee.jpg-w180',
      },
    ];

    console.log(bannerMovies1);

    setBannerMovies(bannerMovies1);
  }, []);

  return (
    <>
      <HomePage bannerMovies={bannerMovies} />
    </>
  );
}

export default App;
