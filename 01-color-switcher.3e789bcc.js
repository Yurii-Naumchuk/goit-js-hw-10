const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");t.disabled=!0,e.addEventListener("click",(function(){o=setInterval(a,1e3),e.disabled=!0,t.disabled=!1,t.style.background="#de632f",e.style.background="#eaf0e9"})),t.addEventListener("click",(function(){clearInterval(o),e.disabled=!1,t.disabled=!0,e.style.background="#50db2a",t.style.background="#eaf0e9"}));const a=()=>d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`;let o;
//# sourceMappingURL=01-color-switcher.3e789bcc.js.map
