
import './App.css';

export default function App() {
  
  const users = [
    { name: "Home", 
      pic: "https://upload.wikimedia.org/wikipedia/en/3/36/Home_%282021_film%29.jpg",
      rating: "9/10",
      // summary: " Oliver Twist (Indrans) wants to be tech-savvy and become a better companion to his two sons who spend more time on their phones than with their loved ones."
  },
    { name: "Shershaah",
      pic: "http://www.fridaynirvana.com/film/wp-content/uploads/2021/08/Shershaah-Movie-Review.jpg",
      rating: "8.7/10",
      // summary: "Based on the life of Captain Vikram Batra who was an officer of the Indian Army, posthumously awarded with the Param Vir Chakra, India's highest and most prestigious award for valour, for his actions during the 1999 Kargil War in Kashmir between India and Pakistan. "
  },
    { name: "sarpatta",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxahkxswWQLCxMvZYI2OcdwfuaC6T6iXTEtw&usqp=CAU",
      rating: "8.7/10"
  },
    { name: "Drishyam 2",
      pic: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Drishyam_2.jpg/330px-Drishyam_2.jpg",
      rating: "8.6/10"
},

{ name: "Karnan",
  pic: "https://upload.wikimedia.org/wikipedia/en/6/62/Karnan_2021_poster.jpg",
  rating: "8.3/10"
},
{ name: "Malik",
  pic: "https://upload.wikimedia.org/wikipedia/en/e/e3/Malik_film_poster.jpg",
  rating: "8.2/10"
}
  ];


    return(
    <div className = "App">
      {users.map((ur) => ( <Msg name={ur.name} pic= {ur.pic} rating = {ur.rating}/>
      ))}
    </div>
  );
}

function Msg({name, pic, rating}){
  return(
    <div>
      <img className = "user-pic" src={pic} alt={name}/>
      <h1 className = "user-name"> {name}</h1>
      <h1 className = "user-rating">{rating}</h1>
      {/* <h1 className = "user-summary">{Summary}</h1> */}
    </div>
  );
}






// export default function App() {
//   // const names = ["thaarik", "john", "surya", "bala"];
//   const users = [
//     { name: "thaarik", 
//       pic: "https://lh3.googleusercontent.com/CQ20dUIcE8o4K4zOwKAjJMWboCeFNrbO9ngxrrkwFAhuoP_r_ehqzj4e_eYw7YBA-ZE8QM7LmWPpue9R9_X3RwLL1BzSoMzjHoj5Z-DyC1JHDMSO1rDAMCqTDpYdNS4xefv4X9wD4vs9HK--xYqoZz-SWQo2mMm8gWtywrHBPBUAERuYQkRzP_l8vMv3TvGZzSZ7DoF-EEGIAhsKBoQNZCbsk4iqdJhnKBWKSRTzNnj82IwFRo7B3s8SfRJ9D-9Yvbpx08ddN27Jujj0W6zua4vklwSuat6XxVgdNQhiu0oV2y0u7zypgJJN5Y0p8oR8cdA-wtK5Ak3eB46S4aGpDPBqTtNepOJEtqNFvhpcCHicvRH_QrUzIzGMHlaLqS2mP9ltOienO50uTWI3RnCAjm0v2n78ANHSltby0qEr3PoRnWFyb8EHEbZVTPKgFitGZpSJoe4d21xUra3QFWqbpdoGwQcAR4apahSKSnz8QsxaNYRhAiQD9QfbjqGv0i_xuc43lkuVnYNJN-9jqKseAztVpdTJujCVgp9yYennvtx1O76OxD93Wzht4KS0uMw80eAtqYhu9PUMSVg6FlTRtDCBwIkjdHYjIoVF_qV36rzzi7_xSzfhD8Jny5a6Eah_CSQ1ehlmGX5Bqfb4R5hqB-GCHzXj8FbSfh7gsudJx8kyTt0gT-v9kt-JFoDQgsc15UJiCGG0faMAO9NHkd7KC9U=w468-h830-no?authuser=0"
//   },
//     { name: "vijay",
//       pic: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202101/Master_1_1200x768.jpeg?D5kZ5cDrLiRQyVoZAlwaUxLV_d26CJkU&size=770:433"
//   },
//     { name: "surya",
//       pic: "https://www.wallpapertip.com/wmimgs/14-146207_sikander-surya-samantha-data-src-vertical-surya-hd.jpg"
//   },
//     { name: "Ajith",
//       pic: "https://moviegalleri.net/wp-content/gallery/viswasam-movie-hd-images/viswasam-movie-hd-images-ajith-nayanthara-369b9fc.jpg"
//   }
    
//   ];
      
//     return(
//     <div className = "App">
//       {users.map((ur) => ( <Msg name={ur.name} pic= {ur.pic}/>
//       ))}
//     </div>
//   );
// }

// function Msg({name, pic}){
//   return(
//     <div>
//       <img className = "user-pic" src={pic} alt={name}/>
//       <h1 className = "user-name">hello, {name} 🌎!!! 🤗🤗📢</h1>
//     </div>
//   );
// }

