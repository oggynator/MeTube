const fullPath = window.location.pathname;
let videoId = fullPath.substring(fullPath.lastIndexOf("/")+1);
console.log(videoId);

const player = `<video  width="1000" height="1000" autoplay controls>
                 <source src="/${videoId}" type="video/mp4">
                </video>`;

 $("#playerWrapper").append(player);               

              

