let API_KEY = "AIzaSyBg-fpvrwjg"

let lower_body = document.getElimentById('lower-body');
let search =document.getElementById("search").value || "hgyh";
async function getData() {
    let data =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)
    
}
