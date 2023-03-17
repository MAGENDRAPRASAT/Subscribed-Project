let arr=[];


const sub=document.querySelector("#sub");
console.log("call")
sub.addEventListener("click",add)
window.onload=()=>{
  arr=JSON.parse(localStorage.getItem('subs')) || []
  arr.forEach(sub=>youtube(sub))
}

function add(){

  var container = document.getElementById("container");
  container.innerHTML=""
    console.log("add() function called");
    const a=document.getElementById("id");
    if(!arr.includes(a.value)){
    arr.push(a.value);
    localStorage.setItem("subs",JSON.stringify(arr))
    }
    a.value=""
    arr.forEach(sub=>youtube(sub))
    console.log(arr)
    //var container = document.getElementById("container").innerHTML="";
    
  }

 

  async function youtube(a){

    try{
      console.log("insude")
    // Replace YOUR_API_KEY with your actual API key
    const apiKey = 'AIzaSyCtCSpe5PQABzHNfJHCtGym5PtbrX9pl-I';
    // Replace CHANNEL_ID with the ID of the channel you want to fetch videos for
    const channelId = a;
    
    // Construct the URL to fetch the channel's videos
    const response=await fetch( `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=12&order=date&type=video&key=${apiKey}`);
    
    // Fetch the data from the YouTube API
    
      response2 = await response.json()
      console.log(response2)
      data =response2;
        data.items.forEach(video => {
          var container = document.getElementById("container");
          var videoDiv = document.createElement("div");
          videoDiv.setAttribute("id", "content");
          const link=video.id.videoId;
          console.log("id"+link)
          const thumbnailUrl = video.snippet.thumbnails.default.url;
          const videoTitle = video.snippet.title;
          
          // Create an <img> element for the video thumbnail
          var thumbnailImg = document.createElement("img");
          thumbnailImg.src = thumbnailUrl;
          thumbnailImg.alt = videoTitle;
          
          // Create a <p> element for the video title
          var titleP = document.createElement("p");
          titleP.textContent = videoTitle;
          
          // Create a <div> element for the video player
          var videoPlayerDiv = document.createElement("div");
          //videoPlayerDiv.setAttribute("id", "content");
          videoPlayerDiv.classList.add("video-player");
          var videoPlayer = document.createElement("iframe");
          videoPlayer.src = `https://www.youtube.com/embed/${link}`;
          videoPlayer.frameborder = "1";
          videoPlayer.setAttribute("allowfullscreen","true")
          
          // Append the <img>, <p>, and <iframe> elements to the video <div> element
          //videoDiv.appendChild(thumbnailImg);
         
          videoPlayerDiv.appendChild(videoPlayer);
          
          videoDiv.appendChild(videoPlayerDiv);
          videoDiv.appendChild(titleP);
  
          
          // Append the video <div> element to the HTML container
          container.appendChild(videoDiv);
        });
    }
    catch(error){
      console.log(error)
    }
  }

 
// async function youtube(a){

//   try{
//     console.log("insude")
//   // Replace YOUR_API_KEY with your actual API key
//   const apiKey = 'AIzaSyCs91W39bD1quXiBFovgfPmgrrr2PNQVyM';
//   // Replace CHANNEL_ID with the ID of the channel you want to fetch videos for
//   const channelId = a;
  
//   // Construct the URL to fetch the channel's videos
//   const response=await fetch( `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=12&order=date&type=video&key=${apiKey}`);
  
//   // Fetch the data from the YouTube API
  
//     response2 = await response.json()
//     data =response2;
//       data.items.forEach(video => {
//         var container = document.getElementById("container");
//         var videoDiv = document.createElement("div");
//         videoDiv.setAttribute("id", "content");
//         const link=video.id.videoId;
//         console.log("id"+link)
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
//         //videoPlayerDiv.setAttribute("id", "content");
//         videoPlayerDiv.classList.add("video-player");
//         var videoPlayer = document.createElement("iframe");
//         videoPlayer.src = `https://www.youtube.com/embed/${link}`;
//         videoPlayer.frameborder = "1";
//         videoPlayer.setAttribute("allowfullscreen" ,"true");
        
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

// const tokenUrl = 'https://oauth2.googleapis.com/token';
// const authCode = '4/0AWtgzh6jKIEVtGttme7jyp0n_tkDWCaUVH6MkI0C0fdmHySmr8TVQxBPzj2GoJQ1BaJgYA';
// const clientId = '297919664416-jdjqhfcv7lgdaii5vdoi698g7gdelqmm.apps.googleusercontent.com';
// const clientSecret = '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GOCSPX-3g1hmVqxBfe-6mNBt9Njh7la8SRI';
// const redirectUri = 'https://www.google.com/';

// let data = {
//   code: authCode,
//   client_id: clientId,
//   client_secret: clientSecret,
//   redirect_uri: redirectUri,
//   grant_type: 'authorization_code'
// };
// //data=JSON.stringify(data)

// fetch(tokenUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   body: new URLSearchParams(data)
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     const accessToken = data.access_token;
//     const refreshToken = data.refresh_token;
//     const expiresIn = data.expires_in;
//     console.log('Access token:', accessToken);
//     console.log('Refresh token:', refreshToken);
//     console.log('Expires in:', expiresIn);
//   })
//   .catch(error => console.error(error));
