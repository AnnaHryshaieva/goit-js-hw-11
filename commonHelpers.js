import{S as c,i as l}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const i=document.querySelector(".gallery");function u(s){const o=s.hits.map(r=>`<li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img
            src="${r.webformatURL}"
            class="gallery-image"
            alt="${r.tags}"
          />
        </a>
        <p>
          Likes
          <span>${r.likes}</span>
        </p>
        <p>
          Views
          <span>${r.views}</span>
        </p>
        <p>
          Comments
          <span>${r.comments}</span>
        </p>
        <p>
          Downloads
          <span>${r.downloads}</span>
        </p>
      </li>`).join("");i.insertAdjacentHTML("afterbegin",o),new c(".gallery a",{captionType:"attr",captionsData:"alt",captionDelay:250}).refresh()}const p=document.querySelector(".form");p.addEventListener("submit",f);function f(s){s.preventDefault(),i.innerHTML="";const o=s.target.elements.search.value;o!==""&&(m(o),s.target.reset())}function m(s){const o="https://pixabay.com/api/",r=`?key=34206508-2ad29bd7e91dc1db4e67bd855&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`,t=o+r;return fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>(e.hits.length===0&&l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),u(e))).catch(e=>{console.log(e)})}
//# sourceMappingURL=commonHelpers.js.map
