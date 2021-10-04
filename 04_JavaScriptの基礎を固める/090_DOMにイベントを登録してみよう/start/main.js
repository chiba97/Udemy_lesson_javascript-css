const btn = document.querySelectorr("#btn")
btn.addEventListener("click",function(){
  alert("hello");
});

const hello = function(){
  alert("hello");
};

btn.addEventListener("click",hello);


