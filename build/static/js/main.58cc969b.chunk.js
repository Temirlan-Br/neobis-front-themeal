(this["webpackJsonpneobis-front-themeal"]=this["webpackJsonpneobis-front-themeal"]||[]).push([[0],{13:function(e,a,t){e.exports=t(27)},21:function(e,a,t){},22:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(12),r=t.n(c),s=(t(21),t(22),t(5)),m=t(3);var i=()=>n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement("a",{href:"/"},"The Meal"))),o=t(28);var u=()=>{const[e,a]=Object(l.useState)([]);return Object(l.useEffect)(()=>{o.a.get("https://www.themealdb.com/api/json/v1/1/random.php").then(e=>{a(e.data.meals)})},[]),n.a.createElement("div",null,e.length>0?n.a.createElement("div",{className:"food__block"},n.a.createElement("div",{className:"info__block"},n.a.createElement("p",{className:"heading"},"Meal of the day"),n.a.createElement(s.b,{to:{pathname:"/".concat(e[0].idMeal)}},n.a.createElement("h1",{className:"title"},e[0].strMeal)),n.a.createElement("p",{className:"subtitle"},e[0].strCategory," | ",e[0].strArea)),n.a.createElement("div",{className:"img__block"},n.a.createElement(s.b,{to:{pathname:"/".concat(e[0].idMeal)}},n.a.createElement("img",{src:e[0].strMealThumb,alt:"{meal.strMeal}"})))):n.a.createElement("h3",{className:"subtitle"},"Loading..."))};var E=()=>{const[e,a]=Object(l.useState)([]),[t,c]=Object(l.useState)(""),r=e=>{e.preventDefault();const l="https://www.themealdb.com/api/json/v1/1/search.php?s="+t;o.a.get(l).then(e=>{a(e.data.meals)})};return n.a.createElement("div",null,n.a.createElement("div",{className:"search__block"},n.a.createElement("h3",{className:"heading"},"Find your Meal"),n.a.createElement("form",{className:"search__form",onSubmit:r},n.a.createElement("input",{className:"search__input",type:"text",placeholder:"Find your meal",value:t,onChange:e=>{c(e.target.value)}}),n.a.createElement("button",{className:"search__btn",onClick:r},"Search"))),n.a.createElement("div",{className:"content__block"},e.length>0?e.map(e=>n.a.createElement("div",{key:e.idMeal,className:"food__block"},n.a.createElement("div",{className:"img__block"},n.a.createElement(s.b,{to:{pathname:"/".concat(e.idMeal)}},n.a.createElement("img",{src:e.strMealThumb,alt:e.strMeal}))),n.a.createElement("div",null,n.a.createElement(s.b,{to:{pathname:"/".concat(e.idMeal)}},n.a.createElement("h2",{className:"title"},e.strMeal)),n.a.createElement("p",{className:"subtitle"},e.strCategory," | ",e.strArea)))):n.a.createElement("h3",{className:"subtitle"},"Write food name")))};var d=()=>n.a.createElement("div",null,n.a.createElement(i,null),n.a.createElement(u,null),n.a.createElement(E,null));var h=()=>{const{id:e}=Object(m.q)(),[a,t]=Object(l.useState)([]);return Object(l.useEffect)(()=>{const a="https://www.themealdb.com/api/json/v1/1/lookup.php?i="+e;o.a.get(a).then(e=>{t(e.data.meals[0])})}),n.a.createElement("div",null,n.a.createElement(i,null),n.a.createElement("div",{className:"details"},n.a.createElement("h2",{className:"title",id:a.idMeal},a.strMeal),n.a.createElement("p",{className:"subtitle"},a.strCategory," | ",a.strArea),n.a.createElement("div",null,n.a.createElement("div",{className:"details__block"},n.a.createElement("div",{className:"ingredients"},Object.keys(a).filter(e=>e.includes("strIngredient")&&a[e]).map((e,t)=>n.a.createElement("p",null,"- ",a[e]," ",n.a.createElement("b",null,a["strMeasure"+(t+1)])))),n.a.createElement("div",{className:"img__block"},n.a.createElement("img",{src:a.strMealThumb,alt:a.strMeal})))),n.a.createElement("div",{className:"instruction"},n.a.createElement("h2",null,"Instruction"),n.a.createElement("p",null,a.strInstructions),n.a.createElement("button",{className:"btnYoutube"},n.a.createElement("a",{href:a.strYoutube},"Watch on Youtube")))))};var b=function(){return n.a.createElement(s.a,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/",element:n.a.createElement(d,null)}),n.a.createElement(m.a,{path:"/:id",element:n.a.createElement(h,null)})))};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)))}},[[13,1,2]]]);
//# sourceMappingURL=main.58cc969b.chunk.js.map