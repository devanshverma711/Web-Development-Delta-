let smallImages =document.getElementsByClassName("oldImage");

for(let i=0;i<smallImages.length;i++){
    console.dir(smallImages[i]);
}

for(let i=0;i<smallImages.length;i++){
    console.dir(smallImages[i].src);
}

for(let i=0;i<smallImages.length;i++){
    smallImages[i].src="spiderman.jpg";
    console.dir(`value of image no. ${i} is changed.`);
}