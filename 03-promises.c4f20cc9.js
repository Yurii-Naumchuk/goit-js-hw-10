function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=i);var r=i("eWCmQ");e(r).Notify.init({fontSize:"20px",width:"500px",borderRadius:"30px"});const u=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),d=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');function s(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(t){t.preventDefault();let n=Number(l.value),o=Number(d.value),i=Number(a.value);for(let t=1;t<=i;t++)s(t,n).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms.`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms.`)})),n+=o}));
//# sourceMappingURL=03-promises.c4f20cc9.js.map
