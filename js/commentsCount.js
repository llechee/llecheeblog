function comCount(){let e=loadData("comCount",10);e?document.querySelectorAll(".card_comment").forEach((t=>{t.innerHTML=e})):fetch("https://tkapi.yisous.xyz/",{method:"POST",body:JSON.stringify({event:"COMMENT_GET_FOR_ADMIN",accessToken:"1059857c25a2ce9fba9cff298f4f33ee",per:1,page:1}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{document.querySelectorAll(".card_comment").forEach((t=>{t.innerHTML=e.count})),document.getElementsByClassName("card_comment").innerText=e.count,saveData("comCount",e.count)}))}function saveData(e,t){localStorage.setItem(e,JSON.stringify({time:Date.now(),data:t}))}function loadData(e,t){let n=JSON.parse(localStorage.getItem(e)),o=0;return null!=n&&(o=Date.now()-n.time),o<60*t*1e3&&o>0?n.data:0}window.addEventListener("pjax:complete",comCount),window.addEventListener("DOMContentLoaded",comCount);