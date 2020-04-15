let fileValid= false;

function validateForm(){
    const title=  document.videoupload.title.value;
    const description=  document.videoupload.description.value;
    const tags = document.videoupload.tags.value;
    const category = document.videoupload.category.value;

    console.log(title, description);
    if (title < 8 || title > 64) {
        return false;
    }
    if (description > 2048){
        return false;
    }
    return true;
}

function handleFileUpload (files){
    const file = files [0];

    const mimeTypeArray = file.type.split("/");

    if (mimeTypeArray[0] !== "video"){
        fileValid =false;
        return;
    }

    const fileSize = file.fileSize;
    const twoGBFileLimit = 2147483648;

    if (fileSize > twoGBFileLimit ){
        fileValid = false;
        return;
    }
    fileValid =true;
}


