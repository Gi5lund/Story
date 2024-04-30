import {scenes} from "./model/model.js";
"use strict"
window.addEventListener("load",start)
function start(){
    console.log("start")
     currentScene=scenes[0];
    showScene(currentScene);
    // showScene(scene2);
    registerButtonClicks();
}
let currentScene;
// const scene8={
//     title: "skillevej",
//     text:/*html*/`<p> gangen deler sig 3: lige ud, højre og venstre.</p>
//     <p> Til venstre kan du ane lyden af rislende vand, lige frem er der mørkt og du kan lugte jord og en anden mere ubestemmelig lugt.</p>
//     <p> Til højre er lyden anderledes: du fornemmer et større rum længere fremme.</p>`,
//     choices:[
//         {name:"Gå til venstre",
//         node:"scene10"},
//         {name:"Gå lige ud",
//         node:"scene11"},
//         {name:"Gå til højre",
//         node:"scene12"}
//     ]
// }
// const scene9={
//     title: "blindgyde",
//     text:/*html*/`<p> gangen ender blindt. Du kan kun gå tilbage</p>`,
//     choices:[
//         {name:"Gå tilbage",
//         node: scene7}
//     ]
// }
// const scene7={
//     title:"første skillevej",
//     text:/*html*/`<p> Som du bevæger dig ind i den mørke gang kan du høre noget som løber med en klikkende lyd mod klippegulvet.</p>
//     <p> Lyden bevæger sig væk fra dig og hele tiden uden for det oplyste område. Du når til en skillevej med en forgrening til venstre og højre</p>`,
//     choices:[
//         {name:"Gå til venstre",
//         node:scene8},
//         {name:"Gå til højre",
//         node:scene9}
//     ]
// }
// const scene6={
//     title:"Monsteret i mørket",
//     text:/*html*/`<p> du bevæger dig langsomt fremad i den mørke gang med skjold og sværd klar. Spindelvævet er tykt og klæber til dig.</p>
//     <p> Du kan høre noget der løber over klippegulvet med en klikkende lyd. Du vender dig mod lyden og ser for sent ind i de mangefacetterede øjne af en kæmpeedderkop der borer sine giftklør ind din hals.</p>`,
//     choices:[
//         {name:"spillet er slut - prøv igen",
//         node:null} //helten er død
//     ]

// }
// const scene5={
//     title:"Gå ind i hulen",
//     text:/*html*/`<p> Du samler grene og kviste til at lave en fakkel.</p>
//     <p> Du  går ind i hulen, i det svage lys fra indgangen kan du se at hulen forsætter og bliver til en mørk gang.</p>
//     <p> Der er flagermus-ekskrementer på jorden og masser af spindelvæv… godt du har en fakkel! Du tænder din fakkel og fortsætter ind i hulesystemet</p>`,
//     choices:[
//         {name:"fortsæt ind i hulen",
//         node:scene7}]
    
// }
// const scene4={
//     title: "Gå ind i hulen",
//     text: /*html*/`<p>i det svage lys fra indgangen kan du se at hulen forsætter og bliver til en mørk gang.
//              Der er flagermus-ekskrementer på jorden og masser af spindelvæv… </p>`,
//     choices:[
//         {name: "Monsteret i mørket",
//         node: scene6},
//         {name: "Gå tilbage efter fakkel",
//         node: scene2}
//     ]};
// const scene3={
//     title: "bortvisning fra kongeriget",
//     text: /*html*/`<p> Du har ikke vist dig at være den vi håbede på Kongen stirrer skuffet på dig. ”Gå nu og vend aldrig tilbage!”</p>`,
//     choices:[
//         {name: "spillet er slut - prøv igen",
//         node: null}
//     ]};
    
//     const scene2={
//         title: "foran indgangen til grotten",
//         text: /*html*/`<p> du står foran indgangen til hulesystemet. Der er mørkt inde i hulen og du kan ikke se ret langt. På jorden udenfor ligger knogler fra små dyr samt kviste og grene.
//     Du overvejer om skal samle nogle grene, du kan bruge som fakler eller trække sværd og skjold og gå ind i hulen
//     </p>`,
//     choices:[
//         {name:  "Gå ind i hulen: med sværd og skjold går man aldrig kold!",
//         node: scene4},
//         {name: "Samle grene: man ved aldrig hvornår man får brug en fakkel",
//         node: scene5}
//     ]};
//     const scene1={
//         title: "historien begynder",
//         text: /*html*/`<p>Gæve eventyrer! Din opgave er at bringe kalken med de helende egenskaber tilbage til slottet så slottets beboere kan blive raske igen.</p>
//     <p> Som belønning vil du modtage denne magiske kniv. Accepterer du dette eventyr?</p>`,
//     choices:[
//       {name: "Nej: jeg er bange for mørket (og edderkopper som lever i mørke huler!)",
//       node: scene3},
//       {name: "Ja : Magisk kniv, mørke huler, eventyr og farer er lige mig!",
//       node: scene2}
//     ]};
//             // const scene5={
//             //     title: "Gå
    function registerButtonClicks(){
        document.querySelector("main").addEventListener("click",userClicked);
        function userClicked(event){
            const target=event.target;
            if(target.tagName==="BUTTON"){
                buttonClicked(target);
                console.log("userClicked",choice)
            }
        }
    }
    function buttonClicked(button){
       
        console.log(button);
        // fjern knapper
        button.parentElement.remove();
        //find scene for den knap der blev klikket på
        //find index for knappen
        const index= Number(button.id.substring(10));
        const choice=currentScene.choices[index];
        console.log(choice.name);
         console.log(index);
        currentScene=scenes[choice.node];
        showScene(currentScene);


    }
    function showScene(scene){
        const html=/*htm*/`<div class="scene">
        <h2>${scene.title}</h2>
        <div class="text">${scene.text}</div>
        <div class="choices">
        ${scene.choices.map((choice,i)=>`<button id="btn-choice${i}">${choice.name}</button>`).join("")}
        
        </div>
        </div>`;
        document.querySelector("main").insertAdjacentHTML("beforeend",html)
        
    }
