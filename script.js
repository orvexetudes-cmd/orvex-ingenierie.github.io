(function(){
var H=document.querySelector("header");function hh(){document.documentElement.style.setProperty("--hh",H.offsetHeight+"px")}addEventListener("resize",hh);hh();
var d=document.querySelector(".dd"),a=d.querySelector("a");
a.addEventListener("click",function(e){if(!matchMedia("(hover:hover)").matches){e.preventDefault();a.setAttribute("aria-expanded",d.classList.toggle("open"))}else d.classList.add("shut")});
d.querySelector(".menu").addEventListener("click",function(e){if(e.target.closest("a")){d.classList.remove("open");d.classList.add("shut");a.setAttribute("aria-expanded","false")}});
d.addEventListener("mouseleave",function(){d.classList.remove("shut")});a.addEventListener("pointerdown",function(){d.classList.remove("shut")});
document.addEventListener("click",function(e){if(!d.contains(e.target)){d.classList.remove("open");a.setAttribute("aria-expanded","false")}});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){d.classList.remove("open");a.setAttribute("aria-expanded","false")}});
var ps=document.querySelectorAll(".ps");if(ps.length&&"IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting)document.querySelectorAll(".pin a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+x.target.id)})})},{rootMargin:"-30% 0px -60% 0px"});ps.forEach(function(s){io.observe(s)})}
})();
