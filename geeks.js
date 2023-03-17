const nav=document.querySelector("#navb");
const ul=nav.querySelector(".nav-list")
const li=ul.querySelectorAll("li")
//var text = document.querySelector('nav.navbar background > ul > li.selected > a').textContent;

let a=li[0].querySelector("a")
a.addEventListener("mouseover",(event)=>{
    a.classList.add("myStyle")
})
a.addEventListener("mouseout",(event)=>{
    a.classList.remove("myStyle")
})
let a2=li[1].querySelector("a")
a2.addEventListener("mouseover",(event)=>{
    a2.classList.add("myStyle")
})
a2.addEventListener("mouseout",(event)=>{
    a2.classList.remove("myStyle")
})
let a3=li[2].querySelector("a")
a3.addEventListener("mouseover",(event)=>{
    a3.classList.add("myStyle")
})
a3.addEventListener("mouseout",(event)=>{
    a3.classList.remove("myStyle")
})

const search=document.querySelector(".btn-sm")
search.addEventListener("mouseover",(event)=>{
    search.classList.add("myStyle")
})
search.addEventListener("mouseout",(event)=>{
    search.classList.remove("myStyle")
})
//console.log(section)


const section=document.getElementsByClassName("firstHalf")[0]
// section.addEventListener("click",(event)=>{
//     section.classList.add("border")
// })
// section.addEventListener("mouseout",(event)=>{
//     section.classList.remove("border")
// })
section.style.bac
console.log(section)

j=0;
function inc(){
    let v=document.getElementById("count")
     v.innerHTML=j++;
}





// // let n=2
// // for(let i=0;i<n;i++){
// //   youtube('AIzaSyCs91W39bD1quXiBFovgfPmgrrr2PNQVyM')
// //   console.log(i)
// // }



// // function youtube(a){
// // // Replace YOUR_API_KEY with your actual API key
// // const apiKey = a;
// // // Replace CHANNEL_ID with the ID of the channel you want to fetch videos for
// // const channelId = 'UCY6KjrDBN_tIRFT_QNqQbRQ';

// // // Construct the URL to fetch the channel's videos
// // const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${apiKey}`;

// // // Fetch the data from the YouTube API
// // fetch(apiUrl)
// //   .then(response => response.json())
// //   .then(data => {
// //     data.items.forEach(video => {
// //       var container = document.getElementById("container");
// //       var videoDiv = document.createElement("div");
        
// //       const link=video.id.videoId;
// //       const thumbnailUrl = video.snippet.thumbnails.default.url;
// //       const videoTitle = video.snippet.title;
      
// //       // Create an <img> element for the video thumbnail
// //       var thumbnailImg = document.createElement("img");
// //       thumbnailImg.src = thumbnailUrl;
// //       thumbnailImg.alt = videoTitle;
      
// //       // Create a <p> element for the video title
// //       var titleP = document.createElement("p");
// //       titleP.textContent = videoTitle;
      
// //       // Create a <div> element for the video player
// //       var videoPlayerDiv = document.createElement("div");
// //       videoPlayerDiv.classList.add("video-player");
// //       var videoPlayer = document.createElement("iframe");
// //       videoPlayer.src = `https://www.youtube.com/embed/${link}`;
// //       videoPlayer.frameborder = "0";
// //       videoPlayer.allowfullscreen = true;
      
// //       // Append the <img>, <p>, and <iframe> elements to the video <div> element
// //       //videoDiv.appendChild(thumbnailImg);
// //       videoDiv.appendChild(titleP);
// //       videoPlayerDiv.appendChild(videoPlayer);
// //       videoDiv.appendChild(videoPlayerDiv);
      
// //       // Append the video <div> element to the HTML container
// //       container.appendChild(videoDiv);
// //     });
// //   })
// //   .catch(error => console.error(error));


// // }



// youtube('AIzaSyCs91W39bD1quXiBFovgfPmgrrr2PNQVyM')

// async function youtube(a){

//   try{
//   // Replace YOUR_API_KEY with your actual API key
//   const apiKey = a;
//   // Replace CHANNEL_ID with the ID of the channel you want to fetch videos for
//   const channelId = 'UCY6KjrDBN_tIRFT_QNqQbRQ';
  
//   // Construct the URL to fetch the channel's videos
//   const response=await fetch( `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${apiKey}`);
  
//   // Fetch the data from the YouTube API
  
//     response2 = await response.json()
//     data =response2;
//       data.items.forEach(video => {
//         var container = document.getElementById("container");
//         var videoDiv = document.createElement("div");
          
//         const link=video.id.videoId;
//         const thumbnailUrl = video.snippet.thumbnails.default.url;
//         const videoTitle = video.snippet.title;
        
//         // Create an <img> element for the video thumbnail
//         var thumbnailImg = document.createElement("img");
//         thumbnailImg.src = thumbnailUrl;
//         thumbnailImg.alt = videoTitle;
        
//         // Create a <p> element for the video title
//         var titleP = document.createElement("p");
//         titleP.textContent = videoTitle;
        
//         // Create a <div> element for the video player
//         var videoPlayerDiv = document.createElement("div");
//         videoPlayerDiv.classList.add("video-player");
//         var videoPlayer = document.createElement("iframe");
//         videoPlayer.src = `https://www.youtube.com/embed/${link}`;
//         videoPlayer.frameborder = "0";
//         videoPlayer.allowfullscreen = true;
        
//         // Append the <img>, <p>, and <iframe> elements to the video <div> element
//         //videoDiv.appendChild(thumbnailImg);
       
//         videoPlayerDiv.appendChild(videoPlayer);
        
//         videoDiv.appendChild(videoPlayerDiv);
//         videoDiv.appendChild(titleP);

        
//         // Append the video <div> element to the HTML container
//         container.appendChild(videoDiv);
//       });
//   }
//   catch(error){
//     console.log(error)
//   }
    
  
  
//   }











