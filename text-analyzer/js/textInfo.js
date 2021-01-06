let textareaE1 = document.querySelector("#text");
let text = null;
let data = {
  words:0,
  uppercase:0,
  lowercase:0,
  sentences:0,
  digits:0,
  vowels:0,
  consonants:0,
  spaces:0,
};

const findLength = (item) => (item==null ? 0 : item.length );
const setText = () => {
  text=textareaE1.value;
  if(text!=null){
    data.words=findLength(text.match(/[a-zA-z]+/g));
    data.uppercase=findLength(text.match(/[A-Z]/g));
    data.lowercase=findLength(text.match(/[a-z]/g));
    data.sentences=findLength(text.match(/\./g));
    data.digits=findLength(text.match(/\d/g));
    data.vowels=findLength(text.match(/[aeiou]/g));
    data.consonants=findLength(text.match(/[bcdfghjklmnpqrstvw]/g));
    data.spaces=findLength(text.match(/\s/g));
  }
  localStorage.setItem("data" , JSON.stringify(data));
  window.location="info.html";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let data = getData();
  let htmlContent = "";
  for(item in data){
    htmlContent+=`<div class="box"><h2>${data[item]}</h2><p>${item}</p></div>`;
  }
  document.querySelector(".info-wrapper").innerHTML=htmlContent;
};