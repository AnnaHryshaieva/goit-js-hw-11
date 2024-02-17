import{S as l,i as u}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery");function f(s){const o=s.hits.map(t=>`<li class="gallery-item">
  <a href="${t.largeImageURL}">
    <img src="${t.webformatURL}" class="gallery-image" alt="${t.tags}" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b> </br>${t.likes}
    </p>
    <p class="info-item">
      <b>Views</b> </br>${t.views}
    </p>
    <p class="info-item">
      <b>Comments</b> </br>${t.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> </br>${t.downloads}
    </p>
  </div>
</li>`).join("");y(),c.insertAdjacentHTML("afterbegin",o),new l(".gallery a",{captionType:"attr",captionsData:"alt",captionDelay:250}).refresh()}function m(s){const o="https://pixabay.com/api/?",i=new URLSearchParams({key:"34206508-2ad29bd7e91dc1db4e67bd855",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=o+i;return fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>(e.hits.length===0&&u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),f(e))).catch(e=>{console.log(e)})}const d=document.querySelector(".form"),a=document.querySelector("span");d.addEventListener("submit",p);function p(s){s.preventDefault(),c.innerHTML="";const o=s.target.elements.search.value;o!==""&&(g(),m(o),s.target.reset())}function g(){a.classList.add("loader")}function y(){a&&a.classList.remove("loader")}
//# sourceMappingURL=commonHelpers.js.map
