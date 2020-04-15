const fullPath = window.location.href;
const videoId = fullPath.substr(fullPath.lastIndexOf("/")+1);
console.log(videoId);


$.get(`/videos/${videoId}`)
.done((response)=>{
    console.log("is this it", response.response);
    $(".title").text(response.response.title);
    const player = `<video  width="500" height="500" autoplay controls>
                 <source src="/${videoId}" >
                </video>`;
                $("#playerWrapper").append(player); 

                $(".description").text(response.response.description);
}).catch((error)=>{
    console.log(error);
    $(".title").text("Could not find video")
});

   
 


              

