"use strict"
window.addEventListener("load",start)
function start(){
    console.log("start")
    showScene(scene1);
    showScene(scene2);
}
const scene1={
    title: "historien begynder",
    text: /*html*/`<p>Gæve eventyrer! Din opgave er at bringe kalken med de helende egenskaber tilbage til slottet så slottets beboere kan blive raske igen.</p>
    <p> Som belønning vil du modtage denne magiske kniv. Accepterer du dette eventyr?</p>`,
    choices:[
       "Nej: jeg er bange for mørket (og edderkopper som lever i mørke huler!)",
       "Ja : Magisk kniv, mørke huler, eventyr og farer er lige mig!"
    ]};
    const scene2={
        title: "foran indgangen til grotten",
        text: /*html*/`<p> du står foran indgangen til hulesystemet. Der er mørkt inde i hulen og du kan ikke se ret langt. På jorden udenfor ligger knogler fra små dyr samt kviste og grene.
        Du overvejer om skal samle nogle grene, du kan bruge som fakler eller trække sværd og skjold og gå ind i hulen
         </p>`,
        choices:[
           "Gå ind i hulen: med sværd og skjold går man aldrig kold!",
           "Samle grene: man ved aldrig hvornår man får brug en fakkel"
        ]};
    function showScene(scene){
        const html=/*htm*/`<div class="scene">
        <h2>${scene.title}</h2>
        <div class="text">${scene.text}</div>
        <div class="choices">
        ${scene.choices.map((choice,index)=>`<button>${choice}</button>`).join("")}
        
        </div>
        </div>`;
        document.querySelector("main").insertAdjacentHTML("beforeend",html)
        
    }
