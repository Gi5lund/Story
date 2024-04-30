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
