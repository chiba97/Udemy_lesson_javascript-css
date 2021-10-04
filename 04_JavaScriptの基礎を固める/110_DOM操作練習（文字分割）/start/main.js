



document.addEventListener("DomContentLoaded", function(){
  const el = document.querySelector(".animate-title");
  const str = el.innerHTML.trim().split("");
  
  let concatStr ="";

  for(let c of str){
    concatStr = concatStr + `<span class="char">${c}</span>`;
  }
  el.innerHTML = concatStr;
});

