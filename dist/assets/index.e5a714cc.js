import{a as g,j as d,r as l,B as v,R as C,b as m,c as x}from"./vendor.6db82796.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};N();const b=async s=>{try{return await g.get(`https://api.coingecko.com/api/v3/coins/${s.toLowerCase()}`,{headers:{"Content-Type":"application/json"}})}catch(n){console.log(n)}},e=d.exports.jsx,c=d.exports.jsxs,y=d.exports.Fragment,D=({coinName:s,currencyPrice:n,vsCurrencyToDisplay:o})=>e(y,{children:c("div",{className:"display-currency-data",children:[e("h3",{className:"display-currency-data__title",children:s}),s!=="Coin not found"&&s&&c("h4",{className:"display-currency-data__price",children:["Price: ",n," ",o]})]})}),S=()=>{const[s,n]=l.exports.useState(""),[o,a]=l.exports.useState("usd"),[t,r]=l.exports.useState(0),[i,f]=l.exports.useState("USD"),[_,h]=l.exports.useState("");return c("div",{className:"input-user",children:[e("h1",{className:"input-user__title",children:"Search Crypto Coins"}),c("form",{className:"input-user__form",children:[c("div",{className:"input-user__form--input",children:[e("label",{className:"input-user__form--input--label",htmlFor:"currency",children:"Coin"}),e("input",{type:"text",name:"currency",value:s,className:"input-user__form--input--field",id:"currency",onChange:u=>n(u.target.value)})]}),c("div",{className:"input-user__form--input",children:[e("label",{className:"input-user__form--input--label",htmlFor:"vs_currency",children:"Currency"}),e("input",{type:"text",name:"vs_currency",value:o,className:"input-user__form--input--field",id:"vs_currency",onChange:u=>a(u.target.value)})]}),e("button",{className:"input-user__form--button",type:"submit",onClick:async u=>{u.preventDefault();try{const p=await b(s);h(p.data.name),r(p.data.market_data.current_price[`${o.toLowerCase()}`]),f(o.toUpperCase())}catch{h("Coin not found")}finally{n(""),a("")}},children:"Search"})]}),e(D,{coinName:_,currencyPrice:t,vsCurrencyToDisplay:i})]})},j=()=>e(y,{children:e(S,{})});const P=()=>e("div",{children:"InfoPage"}),I=()=>e("div",{children:e("h1",{children:"This page doesn't exist!"})}),L=()=>e(y,{children:e("div",{className:"container",children:e(v,{children:c(C,{children:[e(m,{element:e(P,{}),path:"/"}),e(m,{element:e(j,{}),path:"/coin"}),e(m,{element:e(I,{}),path:"*"})]})})})});x.render(e(L,{}),document.getElementById("root"));
