 //    console.log(document.getElementById("main"));
 const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
 const IMGPATH = "https://image.tmdb.org/t/p/w1280";
 const SEARCHAPI =
     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


 const getmovies = async (url) => {
     const response = await fetch(url);
     const data = await response.json();
     //     console.log(data)
     showmoview(data.results);
 };
 // const movieBox = document.querySelector("main")

 const showmoview = (data) => {
     movieBox.innerHTML = ""
     data.forEach(
         (item) => {

             //             console.log(item)

             const contener = document.createElement("div");

             contener.classList.add('card-container');

             contener.innerHTML = `  <div class="h-72 w-full  rounded-lg overflow-hidden relative  card-container shadow-md   ">
                 <img src="${IMGPATH + item.poster_path}" class=" rounded-lg h-full w-full object-cover">

                 <div class="card-containt w-full h-1/2 absolute left-0 flex flex-col items-left rounded-sm " style="background-color: rgba(143, 143, 208, 0.6)">
                     <h1 class="text-2xl font- bold text-left px-2 py-4">${item.original_title
}</h1>        <div class="  h-26  ">
                     <p class=" p-2  ">${item.overview}</p>
</div>
                     <button type="submit" class="rounded-sm button w-1/2 my-4 ml-2 py-1  "> Watch Now</button>
                 </div>


             </div>`;


             movieBox.appendChild(contener);
             //             console.log({
             //                 IMGPATH + item.poster_path
             //             });
         }
     )

 }


 // console.log(movieBox)
 getmovies(APIURL);






 //});
