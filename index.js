import{a as v,i as l,S as b}from"./assets/vendor-YT4DRQk6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const C of o.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&r(C)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const c="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_88088_5)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89915%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89915%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80621C16.3037%206.76847%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76847%2016.7874%206.80621C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12151%2017.1938%207.21262C17.2315%207.30373%2017.2509%207.40138%2017.2509%207.5C17.2509%207.59861%2017.2315%207.69626%2017.1938%207.78737C17.156%207.87848%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30366%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_88088_5'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",g=async(a,e,s)=>{try{return(await v.get("https://pixabay.com/api/",{params:{key:"48488586-a0a2593ae7f5d81beed47469e",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:e}})).data}catch(r){l.show({message:`${r}`,messageColor:"#ffffff",iconUrl:c,backgroundColor:"#ce5a57",position:"topRight"}),console.log(r)}},k=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),h=document.querySelector(".gallery"),u=a=>{const e=a.map(s=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}">
          <img 
          class="gallery-image"
          src="${s.webformatURL}"
          alt="${s.tags}"
          />
        </a>
        <div class="start-container">
          <div>
            <span class="start-span"><b>Likes</b></span>
            <span class="start-span">${s.likes}</span>
          </div>
          <div>
            <span class="start-span"><b>Views</b></span>
            <span class="start-span">${s.views}</span>
          </div>
          <div>
            <span class="start-span"><b>Comments</b></span>
            <span class="start-span">${s.comments}</span>
          </div>
          <div>
            <span class="start-span"><b>Downloads</b></span>
            <span class="start-span">${s.downloads}</span>
          </div>
        </div>
      </li>
    `).join("");h.insertAdjacentHTML("beforeend",e),k.refresh()},M="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_78)'%3e%3cpath%20d='M11.907%203.02393C11.9364%203.00781%2011.9695%202.99954%2012.003%202.99993C12.0361%202.9998%2012.0686%203.00805%2012.0975%203.02393C12.1318%203.0445%2012.1599%203.07407%2012.1785%203.10943L22.464%2020.6099C22.518%2020.6999%2022.5165%2020.7959%2022.467%2020.8844C22.448%2020.9207%2022.4202%2020.9517%2022.386%2020.9744C22.3563%2020.9926%2022.3218%2021.0015%2022.287%2020.9999H1.71904C1.68422%2021.0016%201.64971%2020.9927%201.62004%2020.9744C1.58592%2020.9517%201.55807%2020.9207%201.53904%2020.8844C1.51432%2020.8428%201.50153%2020.7952%201.50206%2020.7468C1.50259%2020.6983%201.51642%2020.651%201.54204%2020.6099L11.826%203.10943C11.8448%203.07411%2011.8728%203.04456%2011.907%203.02393ZM13.473%202.34893C13.3246%202.09027%2013.1105%201.87538%2012.8524%201.72594C12.5942%201.5765%2012.3013%201.4978%2012.003%201.4978C11.7048%201.4978%2011.4118%201.5765%2011.1537%201.72594C10.8956%201.87538%2010.6815%202.09027%2010.533%202.34893L0.247541%2019.8494C-0.437959%2021.0164%200.384041%2022.4999%201.71754%2022.4999H22.287C23.6205%2022.4999%2024.444%2021.0149%2023.757%2019.8494L13.473%202.34893Z'%20fill='white'/%3e%3cpath%20d='M10.5031%2017.9999C10.5031%2017.8029%2010.5419%2017.6079%2010.6172%2017.4259C10.6926%2017.2439%2010.8031%2017.0786%2010.9424%2016.9393C11.0817%2016.8%2011.247%2016.6895%2011.429%2016.6141C11.611%2016.5387%2011.8061%2016.4999%2012.0031%2016.4999C12.2%2016.4999%2012.3951%2016.5387%2012.5771%2016.6141C12.7591%2016.6895%2012.9244%2016.8%2013.0637%2016.9393C13.203%2017.0786%2013.3135%2017.2439%2013.3889%2017.4259C13.4643%2017.6079%2013.5031%2017.8029%2013.5031%2017.9999C13.5031%2018.3978%2013.345%2018.7793%2013.0637%2019.0606C12.7824%2019.3419%2012.4009%2019.4999%2012.0031%2019.4999C11.6052%2019.4999%2011.2237%2019.3419%2010.9424%2019.0606C10.6611%2018.7793%2010.5031%2018.3978%2010.5031%2017.9999ZM10.6501%208.99243C10.6301%208.80319%2010.6501%208.61187%2010.7089%208.43087C10.7676%208.24988%2010.8637%208.08325%2010.991%207.94181C11.1183%207.80037%2011.2739%207.68727%2011.4478%207.60986C11.6216%207.53244%2011.8098%207.49243%2012.0001%207.49243C12.1903%207.49243%2012.3785%207.53244%2012.5523%207.60986C12.7262%207.68727%2012.8818%207.80037%2013.0091%207.94181C13.1364%208.08325%2013.2325%208.24988%2013.2913%208.43087C13.35%208.61187%2013.37%208.80319%2013.3501%208.99243L12.8251%2014.2529C12.8074%2014.4596%2012.7129%2014.6521%2012.5601%2014.7924C12.4073%2014.9327%2012.2075%2015.0105%2012.0001%2015.0105C11.7926%2015.0105%2011.5928%2014.9327%2011.44%2014.7924C11.2872%2014.6521%2011.1927%2014.4596%2011.1751%2014.2529L10.6501%208.99243Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_78'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",d=document.querySelector(".search-form"),m=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");let p,i=1,f=15;const y=()=>{m.style.display="block"},L=()=>{m.style.display="none"},w=(a,e)=>{a>=e&&(n.style.display="none",l.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#ffffff",iconUrl:M,backgroundColor:"#ff7300",position:"topRight"}))};d.addEventListener("submit",a=>{if(a.preventDefault(),n.style.display="none",h.innerHTML="",p=a.target.elements.search.value.trim().toLowerCase(),p===""){l.show({message:"Input field cannot be empty.",messageColor:"#ffffff",iconUrl:c,backgroundColor:"#ff0745",position:"topRight"});return}y(),i=1,g(p,i,f).then(e=>{if(e.hits.lengh===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ff0745",iconUrl:c,position:"topRight"});return}n.style.display="block",w(i*f,e.totalHits),u(e.hits)}).catch(e=>{l.show({message:`${e}`,messageColor:"#ffffff",backgroundColor:"#ff0745",iconUrl:c,position:"topRight"}),console.log(e)}).finally(()=>{L()}),d.reset()});n.addEventListener("click",a=>{n.style.display="none",i+=1,y(),g(p,i,f).then(e=>{n.style.display="block",w(i*f,e.totalHits),u(e.hits);const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}).catch(e=>{l.show({message:`${e}`,messageColor:"#ffffff",backgroundColor:"#ff0745",iconUrl:c,position:"topRight"}),console.log(e)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
