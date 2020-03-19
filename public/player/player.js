const fullPath = window.location.pathname;
const videoId = fullPath.substring(fullPath.lastIndexOf("/")+1);
console.log(videoId);
