
import './App.css';

export default function App() {
  
  const movies = [
      { name: "Home", 
       pic: "https://upload.wikimedia.org/wikipedia/en/3/36/Home_%282021_film%29.jpg",
        rating: "9/10",
         summary: " Oliver Twist (Indrans) wants to be tech-savvy and become a better companion to his two sons who spend more time on their phones than with their loved ones."
      },
      { name: "Shershaah",
        pic: "http://www.fridaynirvana.com/film/wp-content/uploads/2021/08/Shershaah-Movie-Review.jpg",
       rating: "8.7/10",
       summary: "Based on the life of Captain Vikram Batra who was an officer of the Indian Army, posthumously awarded with the Param Vir Chakra, India's highest and most prestigious award for valour, for his actions during the 1999 Kargil War in Kashmir between India and Pakistan. "
      },
     { name: "sarpatta",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxahkxswWQLCxMvZYI2OcdwfuaC6T6iXTEtw&usqp=CAU",
        rating: "8.7/10",
        summary:"A Sports Drama film, Set during the 1970s, the film revolves around a clash between two clans namely Sarpatta Parambarai and Idiyappa Parambarai in North Chennai, which also showcases the boxing culture in the locality and also the politics being involved in it."

      },
    { name: "Drishyam 2",
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Drishyam_2.jpg/330px-Drishyam_2.jpg",
      rating: "8.6/10",
      summary: "Six years after the terrible event that almost destroyed his family, Georgekutty is the proud owner of a movie theater and aspiring to write and produce his own hit film."
    },

    { name: "Karnan",
      pic: "https://upload.wikimedia.org/wikipedia/en/6/62/Karnan_2021_poster.jpg",
      rating: "8.3/10",
      summary:"Karnan, a fearless village youth, must fight for the rights of the conservative people of his village, due to the torture given by a police officer."
    },
    { name: "Malik",
      pic: "https://upload.wikimedia.org/wikipedia/en/e/e3/Malik_film_poster.jpg",
      rating: "8.2/10",
      summary:"Freddy, a juvenile criminal is given the task of eliminating Sulaiman, an aging patriarch, within a time period of 14 days. An infamous smuggler and local strongman, Sulaiman also happens to be Freddy's paternal uncle."
    }
  ];


    
      return(
      <div className = "movie-list">
        {movies.map(({name, pic, rating, summary}) => ( <Movie name={name} pic= {pic} rating = {rating} summary={summary}/>
        ))}
    </div>
  );
    
}
  

  function Movie({name, pic, rating, summary}){
    return(
      <div className="movie-container">
        <img className = "movie-pic" src={pic} alt={name}/>
        <div className="movie-specs">
          <h1 className = "movie-name"> {name}</h1>
          <h1 className = "movie-rating">{rating}</h1>
        </div>
        
        <p className = "movie-summary"> {summary}</p>
      </div>
    );
  }





