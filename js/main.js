const tabsContentInner=document.querySelectorAll(".tabs__content-list--nojs");tabsContentInner.forEach((t=>{t.classList.remove("tabs__content-list--nojs")})),document.querySelectorAll(".tabs__item").forEach((t=>t.addEventListener("click",(function(e){e.preventDefault();const s=e.target.getAttribute("href").replace("#","");document.querySelectorAll(".tabs__item").forEach((t=>t.classList.remove("tabs__item--active"))),document.querySelectorAll(".tabs__content-list").forEach((t=>t.classList.remove("tabs__content-list--active"))),t.classList.add("tabs__item--active"),document.getElementById(s).classList.add("tabs__content-list--active")}))));const tabs=()=>{document.querySelector(".tabs__item").click()};