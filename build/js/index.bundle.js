!function(){"use strict";console.log("123"),document.querySelectorAll(".accordion__item").forEach((e=>{e.querySelector(".accordion__header").addEventListener("click",(()=>{const c=document.querySelector(".accordion-open");o(e),c&&c!==e&&o(c)}))}));const o=o=>{const e=o.querySelector(".accordion__content");o.classList.contains("accordion-open")?(e.removeAttribute("style"),o.classList.remove("accordion-open")):(e.style.height=e.scrollHeight+"px",o.classList.add("accordion-open"))}}();