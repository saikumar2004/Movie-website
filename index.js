let accordian = document.getElementsByClassName("title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function validation(){
    var isValid=true;
    if(document.myform.email.value==""){
        document.getElementById("emai").innerHTML="*email cannot be empty";
        isValid=false;
    }
    else{
        document.getElementById("emai").innerHTML=" ";
    }
    if(document.myform.password.value==""){
        document.getElementById("pass").innerHTML="*password cannot be empty";
        isValid=false;
    }
    else{
        document.getElementById("pass").innerHTML=" ";
    }
    return isValid
}




/*---------------------------------------------home-----------------------------*/
let movies=[
    {
        name:"Salar",
        poster:"https://m.media-amazon.com/images/M/MV5BYTY1M2Y4ZjctZTM0YS00ZjMyLWEyN2QtMWU4YWMzMmIxZGM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
        rating:6.6,
        charectors:"Prabash, Prithviraj Sukumaran, Sriya Reddy, Shruthi Hassan, Easwari Rao, Saran Shakthi",
        trailer:"https://www.youtube.com/embed/JlG4TOVZEHI?si=d2RCYhBoVe2YNQsW",
        date:2023,
        movie:"/videos/Salaar.mkv",
        detail:"A gang leader makes a promise to a dying friend by taking on other criminal gangs.One of the boys with whom Deva (Prabhas) plays cricket in the nondescript town of Tinsukia in Assam refers to his towering persona as ‘cutout’, a word that is commonly used by the star’s fans. Director Prashanth Neel uses this throwaway reference to reaffirm that this film, mounted on a massive scale, is a celebration of Prabhas’s stardom. ",
        songs:[
            {
               // name:"Aaru Sethulunnaa",
                audio:"https://open.spotify.com/embed/track/78TQJ6QyHZNRXUNFBpNuhP?utm_source=generator",
                //image:"https://m.media-amazon.com/images/M/MV5BYTY1M2Y4ZjctZTM0YS00ZjMyLWEyN2QtMWU4YWMzMmIxZGM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg"
           },
           {
                //name:"Prathi Kadalo",
                audio:"https://open.spotify.com/embed/track/0fhzrHuwT5QE889zKLqtfu?utm_source=generator",
                //image:"https://m.media-amazon.com/images/M/MV5BYTY1M2Y4ZjctZTM0YS00ZjMyLWEyN2QtMWU4YWMzMmIxZGM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg"
           },
           {
               //name:"Sooreede",
               audio:"https://open.spotify.com/embed/track/1agXTR1CU03vicQds7hpEd?utm_source=generator",
              // image:"https://m.media-amazon.com/images/M/MV5BYTY1M2Y4ZjctZTM0YS00ZjMyLWEyN2QtMWU4YWMzMmIxZGM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg"
           },
            {
               // name:"Sound of Salaar", 
                audio:"https://open.spotify.com/embed/track/4c6YXvAN8xXkqv7oO58RME?utm_source=generator",
               // image:"https://m.media-amazon.com/images/M/MV5BYTY1M2Y4ZjctZTM0YS00ZjMyLWEyN2QtMWU4YWMzMmIxZGM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg"
            },
            {
               // name:"Vinaraa",
                audio:"https://open.spotify.com/embed/track/7imABL1FlaaO5ZSSapBT47?utm_source=generator",
               // image:"https://m.media-amazon.com/images/M/MV5BYTY1M2Y4ZjctZTM0YS00ZjMyLWEyN2QtMWU4YWMzMmIxZGM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg"
            }
            

        ]
    },
    {
        name:"Joe",
        poster:"https://thesouthfirst.com/wp-content/uploads/2023/11/Fw5Ni2wX0AEgWPw.jpg",
        rating:7.7,
        charectors:"Rio Raj, Bhavya Trikha,Malavika Manoj",
        trailer:"https://www.youtube.com/embed/2lrbAHMACrM?si=OQXg4dnFdyOOELVS",
        date:2023,
        movie:"/videos/joe.mkv",
        detail:"The Premam-meets-Raja Rani plot revolves around Joe (Rio Raj, solid, though his line delivery sometimes feels artificial), who falls in love with his classmate Sujithra (Malavika Manoj, okayish) in college. Even though the Malayali girl reciprocates, the romance is doomed. ",
        songs:[
            {
                audio:"https://open.spotify.com/embed/track/6kEiZ9CJ2OHmdOyO8mEhAm?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/3ysMc34CrgKLFOszOpDmR2?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/3ysMc34CrgKLFOszOpDmR2?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/4Chb6GwBbzBeAtiD1xqXpK?utm_source=generator"
            }
           
        ]
    },
    {
        name:"HiNanna",
        poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hi-nanna-et00364503-1701678655.jpg",
        rating:8.3,
        charectors:"Nani,Mrunal Thakur,Shrithi Haasan,Angad Bedi,Jayaram",
        trailer:"https://www.youtube.com/embed/gmSWCO3-TiU?si=Ml6tw8zbHohwSkF5",
        movie:"/videos/HiNanna.mp4",
        date:2023,
        detail:"‘Hi Nanna’ movie review: A reaffirming story of love that conquers everything Nani, Mrunal Thakur and composer Hesham Abdul Wahab elevate debut director Shouryuv’s emotional drama about love and the play of destiny.Some stories urge us to suspend our disbelief and give in to their charm. Destiny and the power of love drive debut writer-director Shouryuv’s Telugu film Hi Nanna. This tale that introduces us to beautiful people in picture- perfect settings has a few nostalgic tropes such as a pet dog being a catalyst at crucial times. It is cinematic but comfortingly familiar. ",
        songs:[
            {
                audio:"https://open.spotify.com/embed/track/7xmkMdxtGt9jEQVyQK8TP8?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/3IH2WSuWyLJ6bqH2Bk3mhf?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/6KNbgCaApDFSNDva0XfRrT?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/4wyH79ssNezGR59geMIRdw?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/39aI14a48tHK2W5IrzFQ8r?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/4k9RLcTWZog34sIXt23Ibr?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/43xyHkmftrAmEKhWl3GYIv?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/0HOLbMwPsOKXl6LEc35cnj?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/7EILBnZpXLryXTBbqYtKdk?utm_source=generator"
            }
        ]
    },
    
    {
        name:"Chinna",
        poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chinna-et00370567-1695628154.jpg",
        rating:8.3,
        charectors:"Siddharth, Nimisha Sajayan, Anjali Nair and Sahasra Shree",
        trailer:"https://www.youtube.com/embed/QJlP0UjRyGQ?si=3nI1Xg-xL0r_Uv7q",
        date:2023,
        movie:"/videos/Chinna.mp4",
        detail:"Chinna means the world to his niece, and so does she to him. When she gets lost, Chinna goes on a search for her, and his whole life comes crashing down. What unfolds is an emotional thriller that asks the viewer, How far will you go for your child?",
        songs:[
            {
                audio:"https://open.spotify.com/embed/track/3TfAq5BjmAvG75BosnmWan?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/1STXRI2eZ2SMFPGWDy0v29?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/7h3sJY7XooOrcVZnEh4vOJ?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/2ZyWRd06uMolkM2eiUBOBb?utm_source=generator"
            }
            
        ]
    },
    {
        name:"Dhoota",
        poster:"https://m.media-amazon.com/images/M/MV5BM2Y2ZGRlYjgtMWEzNS00YzhhLWJiY2ItMTAxY2VjYTQzYmMzXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg",
        rating:7.8,
        charectors:"Naga Chaitanya,Prachi Desai,Parvathy Thiruvothu,Priya Bhavani Shankar",
        trailer:"https://www.youtube.com/embed/-ITBFd_K5_M?si=7ORnVAjD0kASQAiS",
        date:2023,
        movie:"/videos/Dhoota.mp4",
        detail:"Dhootha, which means messenger in Telugu, marks both the director and the lead actor’s first tryst with digital space. Vikram Kumar, who shares the writing credits with a team, casts Naga Chaitanya Akkineni as an investigative journalist, Sagar. The story begins in late 2022 when Sagar is working towards launching a newspaper. I was both chuffed and piqued by the idea of launching a newspaper post pandemic, a phase when traditional print media also had to embrace the digital medium. There is a reason why this story deals with the printed word, which is revealed gradually. ",
        songs:[
            {
                audio:"https://open.spotify.com/embed/track/2UAJRYwpu28iqvEd4bGvwG?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/5G1grQrHB56kGOCWqxR6Nn?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/0hdNruiL86Beuquf2vreGZ?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/3U4zIwHETB3UwzOLYPTwym?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/7n6MGW32vsYhqNcZECRMii?utm_source=generator"
            }
        ]


    },
    {
        name:"90s Middle Class",
        poster:"https://www.a1telugunews.in/home/dbrqjaip/public_html/media/movie_upload/2024011018383490s-Middle-Class-Biopic-Telugu-fmp2v-2024-230x345.jpg",
        rating:9.5,
        charectors:"Shivaji,Vasuki,Mouli",
        trailer:"https://www.youtube.com/embed/1V93ZsiAMX4?si=yep2cIdZ36qRW2jT",
        date:2024,
        movie:"/videos/90sMiddle.mp4",
        detail:"The tale revolves around Chandra Sekhar, a Dedicated Government Teacher, and his wife,Rani,who tirelessly manages their modest home. The couplesralses their three childen-Raghu Teja,Divya,and Aditya-amid the everyday struggles of a middle-class lifestyle. their lives echothe challenges of balancing dreams and reality,especially for the childen,often left disheartened by the compromises demanded by their circumstances.",
        songs:[
            {
                audio:"https://open.spotify.com/embed/track/5QNCGm43zARrFxnLegzZTf?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/5evqEECsvQyCiHHXtObaTv?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/42fhGZllPEB1haQ1bCQsN3?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/3iKk9E2V5CbczaGUtrEGmc?utm_source=generator"
            }
        ]
    },
    {
        name:"Alavaikunthapurramloo",
        poster:"https://m.media-amazon.com/images/M/MV5BMmRkMGMzYTUtM2E2My00YjZlLWFmZjItMDA5M2EwNjNiZTNjXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_QL75_UY562_CR9,0,380,562_.jpg",
        rating:8.0,
        charectors:"Alluarjun, pooja Hegde,Vaishnavi Chaitanya,Nivetha pethuraj,Jayaram",
        trailer:"https://www.youtube.com/embed/SkENAjfVoNI?si=e2bXVg549lEOvFDK",
        date:2020,
        movie:"/videos/alaMo.mkv",
        detail:"Bantu grows up being constantly subjected to his father corn. However, when he learns of his real parentage, he decides to carve a place for himself within the family he truly belongs to.",
        songs:[
            {
               
                audio:"https://open.spotify.com/embed/track/0nUqmLja5dpfk2mdTpss9t?utm_source=generator",
                
           },
           {
               
                audio:"https://open.spotify.com/embed/track/1gT9sc5997gi82JBxoUTYp?utm_source=generator",
               
           },
           {
               
               audio:"https://open.spotify.com/embed/track/1WBA3KunNN2GGpHghfwnNE?utm_source=generator",
               
           },
            {
               
                audio:"https://open.spotify.com/embed/track/3qWfqpB8KJFxwvbpqbuLCh?utm_source=generator",
                
            },
            {
                
                audio:"https://open.spotify.com/embed/track/0h5wFi2R8a9ReSIDbXzZgy?utm_source=generator",
               
            }
            

        ]
    },
    {
        name:"Animal",
        poster:"https://m.media-amazon.com/images/M/MV5BMWVhZTVmYzYtYzM4Ny00ZGQ5LWI3NTYtOGQyOTQ4NWZjMGY1XkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
        rating:6.8,
        charectors:"Ranbir Kapoor,Bobby Deol,Tripti Dimri,Rashmika Mandanna",
        trailer:"https://www.youtube.com/embed/OM6Sgf-Q4Ow?si=vvzsR0HrUC0xrCAv",
        date:2023,
        detail:"‘Animal’ movie review: Ranbir Kapoor suffers in Sandeep Reddy Vanga’s twisted paean to masculinity ‘Animal’ had the chance to claw out a fresh, psychology-driven path for Hindi action movies, but its director appears more tempted by franchise potential than telling a controlled, coherent story.",
        songs:[
            {
                audio:"https://open.spotify.com/embed/track/4kVsV4GhcNpHSDs6siioM0?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/3e7CUrRaEgSmbk5XxlAgWc?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/4GWaSKW0JpQsqsGjiRbiEz?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/0ljjmkJocnhXzP62JYNW8p?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/1brtmiixpIAspQgZEQKkLH?utm_source=generator"
            },
            {
                audio:"https://open.spotify.com/embed/track/5BUtT8DGziwD6l9tA7FjJu?utm_source=generator"
            }
        ]
        
    },
    {
        name:"12th-Fail",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLnuK8hojqKsvGGxfPiTDB1MWb7maUgm0Trln4OcxwTW-DTlnVi1uobJG_tQjfxbU6Yec&usqp=CAU",
        rating:9.2,
        charectors:"Medha Shankar,Vikrant Massay,Anant V joshi,Sanjay Bishnoi,Anshumaan Pushkar",
        trailer:"https://www.youtube.com/embed/WeMJo701mvQ?si=xWooK_9gmg8r3SV9",
        date:2023,
        movie:"/videos/12thFail.mkv",
        detail:"Manoj prepares cheat slips for his Class 12 exams, as do all his batchmates. However, a newly transferred police officer, DSP Dushyant Singh, stops cheating in the school. As a result, all the students, including Manoj, fail the exam. Meanwhile, his father goes to challenge his suspension in the High Court.",
        songs:[
            {
                audio:"https://open.spotify.com/embed/track/5tTCOMnKbuH1lFDIDGGmyu?utm_source=generator"
            }
        ]
    },
    {
        name:"july",
        poster:"https://m.media-amazon.com/images/M/MV5BYjQwMjM1YjMtNjAyZi00NzI4LWJhNTgtOGYyNjBmMTBlNDUxXkEyXkFqcGdeQXVyNjQ3ODkxMjE@._V1_.jpg",
        rating:8.0,
        charectors:"Alluarjun, pooja ,Ram",
        trailer:"ala.mp4",
        date:2020
    },
    {
        name:"Puspa",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnkmvImRo3uW29TyLdGtHzVWY_aZ1WdN3nA&usqp=CAU",
        rating:8.0,
        charectors:"Alluarjun, pooja ,Ram",
        trailer:"ala.mp4",
        date:2020
    },
    
    {
        name:"Alavaikunthapurramloo",
        poster:"https://m.media-amazon.com/images/M/MV5BMmRkMGMzYTUtM2E2My00YjZlLWFmZjItMDA5M2EwNjNiZTNjXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_QL75_UY562_CR9,0,380,562_.jpg",
        rating:8.0,
        charectors:"Alluarjun, pooja ,Ram",
        trailer:"ala.mp4",
        date:2020
    },
    {
        name:"Puspa",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnkmvImRo3uW29TyLdGtHzVWY_aZ1WdN3nA&usqp=CAU",
        rating:8.0,
        charectors:"Alluarjun, pooja ,Ram",
        trailer:"ala.mp4",
        date:2020
    },
    {
        name:"s/o sathyamurthy",
        poster:"https://upload.wikimedia.org/wikipedia/en/8/81/Son_of_Satyamurthy_poster.jpg",
        rating:8.0,
        charectors:"Alluarjun, pooja ,Ram",
        trailer:"ala.mp4",
        date:2020
    },
    {
        name:"Racegurram",
        poster:"https://m.media-amazon.com/images/S/pv-target-images/470c8c4d75734ff1f3402adf9f502352492dcb34d3743fbe45ae73a326243e25.jpg",
        rating:8.0,
        charectors:"Alluarjun, pooja ,Ram",
        trailer:"ala.mp4",
        date:2020
    },
    {
        name:"Sarrainodu",
        poster:"https://images.jdmagicbox.com/comp/jd_social/news/2018aug09/image-233354-m687zhqlni.jpg",
        rating:8.0,
        charectors:"Alluarjun, pooja ,Ram",
        trailer:"ala.mp4",
        date:2020
    },
    {
        name:"Dj",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorxkyd1VDPre-iA8b8bkCk4RrvpkaL5jJ1UsHihNnqfR-A4O44CIBrEdu5xeOViQ6oEE&usqp=CAU",
        rating:8.0,
        charectors:"Alluarjun, pooja ,Ram",
        trailer:"ala.mp4",
        date:2020,
        songs:[
            
        ]
    },
    {
        name:"july",
        poster:"https://m.media-amazon.com/images/M/MV5BYjQwMjM1YjMtNjAyZi00NzI4LWJhNTgtOGYyNjBmMTBlNDUxXkEyXkFqcGdeQXVyNjQ3ODkxMjE@._V1_.jpg",
        rating:8.0,
        charectors:"Alluarjun, pooja ,Ram",
        trailer:"ala.mp4",
        date:2020.


},
   
   
]
function displayInitialMovies() {
    
    let initialMovies = movies.slice(0, 8);
    displayMovies(initialMovies);
}
function searchMovie(){
   let movieName= document.getElementById('search').value;
  if(movieName!==""){
    let result=movies.filter(function(movie){
        return movie.name.toUpperCase().includes(movieName.toUpperCase());
    })
    displayMovies(result);
    document.getElementById("movies").style.display="";
    document.getElementById("eeee").style.display = "none"; 
    document.getElementById("song").style.display="none";
    document.getElementById("Son").style.display="none";
    
    
    
  }
  else{
    displayInitialMovies();
   
  }
 
 
}
 function displayMovies(data){
    document.getElementById("movies").innerHTML="";
    let htmlString=``;
for(let i=0;i<data.length;i++){
    htmlString=htmlString+`<div class="movie" id="movie" onclick="showmovie('${data[i].poster}','${data[i].name}','${data[i].date}','${data[i].rating}','${data[i].charectors}','${data[i].movie}','${data[i].detail}',${movies.indexOf(data[i])})">
    <div class="overlay">
    <div class="video">
    <iframe  class="vid" width="560" height="315" src="${data[i].trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="details">
        <h1>${data[i].name}</h1>
        <h2>IMDB :${data[i].rating}</h2>
        <p>${data[i].charectors}</p>

    </div>
    </div>
  <img class="poster" src="${data[i].poster}" alt="poster">
</div>`
}
    
    document.getElementById("movies").innerHTML=htmlString;

 }
 displayInitialMovies();


 function showmovie(poster,name,date,rating,charectors,movie,detail,movieIndex){
    
    let full=`<div class="show">
    <div class="showposter">
  <img src="${poster}" class="showpic">
</div>
  <div class="showdetails">
    <h1>${name}</h1>
    <h5>${date}</h5>
    <p></p>
    <h2>IMDB :${rating}</h2>
    <p>${charectors}</p>


  </div>
  <h3 id="Son" style="display:none">Songs</h3>
  <div class="song" id="song" style="display:none">
  </div>

</div>
<div class="showvideo">
    <video controls  class="movievideo">
       <source src="${movie}" type="video/mp4">
       <source src="${movie}" type="video/mkv">

    </video>
  

</div>
<p><span style="color:red;font-size:30px">Story: </span> ${detail}</p>


`;

    document.getElementById("eeee").innerHTML = full;
    document.getElementById("eeee").style.display = "block";
    document.getElementById('search').value = "";
    document.getElementById("movies").style.display="none";
    showSongs(movieIndex);

    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showSongs(movieIndex){
    let htmlSongs=``;
    const selectedMovie = movies[movieIndex];
    
    if (selectedMovie.songs && selectedMovie.songs.length > 0) {
for(let i=0;i<selectedMovie.songs.length;i++){
    const song =selectedMovie.songs[i];
    htmlSongs+=`<div class="Songs">
    <iframe style="border-radius:12px" src="${song.audio}" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>`;
}
    }
document.getElementById("song").innerHTML=htmlSongs;
document.getElementById("song").style.display="block";
document.getElementById("Son").style.display="";
}
    
 













 /*let movieDiv=document.createElement("div");
    movieDiv.classList.add("movie");
    let overlayDiv=document.createElement("div");
    overlayDiv.classList.add("overlay");
    movieDiv.appendChild(overlayDiv);
    
    
    

    movies.filter(function(movie){
    
   })
    
    */
   /*
   <div class="Songs">
    <div class="Songs_post">
        <img class="Songs_image" src="${song.image}" alt="" class="showpic">
    </div>
    <div class="song_details">
        <h4>${song.name}</h4>
        <iframe style="border-radius:12px" src="${song.audio}" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  </div>`
   */