const fullPath = window.location.href;
const videoId = fullPath.substr(fullPath.lastIndexOf("/")+1);
console.log(videoId);

const player = `<video  width="1000" height="1000" autoplay controls>
                 <source src="/${videoId}" >
                </video>`;

 $("#playerWrapper").append(player);               

              

