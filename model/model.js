// class ChoiceModel{
//     constructor(data){
//         this.name=data.name;
//         this.nextSceneId=data.nextSceneId;
//     }
// }

// class SceneModel{
//     constructor(data){
//        this.id=data.id;
//        this.title=data.title;
//        this.description=data.description;
//        this.choices= data.choices.map(choice=>new ChoiceModel(choice));
//     }
    
// }
// const Scenes=[];

// export const getScenes=()=>{
//     return Scenes;
// }

// export const getSceneById=(id)=>{
//     return Scenes.find(scene=>scene.id===id);
// }
//functionen herunder skal lige rettes til at hente model fra anden path
export const loadScenes=()=>{
    const scenesData=JSON.parse(localStorage.getItem("scenes"));
    if(scenesData){
        Scenes.length=0;
        scenesData.forEach(sceneData=>Scenes.push(new SceneModel(sceneData)));
    }
    else{
        console.error("No scenes found in local storage");
    }
}
export const scenes=[
    {
        id:0,
        title: "historien begynder",
        text: "Gæve eventyrer! Din opgave er at bringe kalken med de helende egenskaber tilbage til slottet så slottets beboere kan blive raske igen. Kalken befinder sig et sted i det underjordiske hulesystem og der kan være mange farer på vejen. Som belønning vil du modtage denne magiske kniv. Accepterer du dette eventyr?",
        choices: [
          {
            name: "Ja",
            node: 1
          },
          {
            name: "Nej",
            node: 13
          }
        ]
      },
      {
        id:1,
        title: "Foran indgangen til grotten",
        text: "du står foran indgangen til hulesystemet. Der er mørkt inde i hulen og du kan ikke se ret langt. På jorden udenfor ligger knogler fra små dyr samt kviste og grene.",
        choices: [
          {
            name: "Gå ind i hulen",
            node: 2
          },
          {
            name: "Samle grene",
            node: 3
          }
        ]
      },
      {
        id:2,
        title: "hule 1",
        text: "i det svage lys fra indgangen kan du se at hulen forsætter og bliver til en mørk gang. Der er flagermus-ekskrementer på jorden og masser af spindelvæv…",
        choices: [
          {
            name: "Fortsæt lige frem",
            node: 4
          },
          {
            name: "Gå tilbage efter fakkel",
            node: 1
          }
        ]
      },
      {
        id:3,
        title: "hule 1a",
        text: "i det svage lys fra indgangen kan du se at hulen forsætter og bliver til en mørk gang. Der er flagermus-ekskrementer på jorden og masser af spindelvæv… godt du har en fakkel! Du tænder din fakkel og fortsætter ind i hulesystemet",
        choices: [
          {
            name: "Fortsæt",
            node: 5
          }
        ]
      },
      {
        id:4,
        title: "Monsteret i mørket",
        text: "du bevæger dig langsomt fremad i den mørke gang med skjold og sværd klar. Spindelvævet er tykt og klæber til dig. Du kan høre noget der løber over klippegulvet med en klikkende lyd. Du vender dig mod lyden og ser for sent ind i de mangefacetterede øjne af en kæmpeedderkop der borer sine giftklør ind din hals.",
        choices: [
          {
            name: "Fortsæt",
            node: 8
          }
        ]
      },
      {
        id:5,
        title: "første skillevej",
        text: "Som du bevæger dig ind i den mørke gang kan du høre noget som løber med en klikkende lyd mod klippegulvet. Lyden bevæger sig væk fra dig og hele tiden uden for det oplyste område. Du når til en skillevej med en forgrening til venstre og højre",
        choices: [
          {
            name: "Gå til højre",
            node: 6
          },
          {
            name: "Gå til venstre",
            node: 7
          }
        ]
      },
      {
        id:6,
        title: "blindgyde",
        text: "gangen ender blindt",
        choices: [
          {
            name: "Gå tilbage",
            node: 5
          }
        ]
      },
      {
        id:7,
        title: "skillevej 2",
        text: "gangen deler sig 3: lige ud, højre og venstre. Til venstre kan du ane lyden af rislende vand, lige frem er der mørkt og du kan lugte jord og en anden mere ubestemmelig lugt. Til højre er lyden anderledes: du fornemmer et større rum længere fremme.",
        choices: [
          {
            name: "Fortsæt",
            node: 15
          },
          {
            name: "Venstre",
            node: 9
          },
          {
            name: "Højre",
            node: 10
          }
        ]
      },
      {
        id:8,
        title: "helten er død",
        text: "dit lig er bragt ud af grottesystemet. Kaptajnen for eftersøgningsholdet tæller de overlevende og beordrer de døde læsset på kærren. ”lad os komme hjem mens der er dagslys! Fart på!”. endnu et ligbål skal forberedes.",
        choices: [
          {
            name: "Fortsæt",
            node: null
          }
        ]
      },
      {
        id:9,
        title: "den kølige kilde",
        text: "Du gangen til venstre og lyden af rislende vand bliver højere. Gangen skråner nedad og pludselig åbner den sig til et større rum. Vand strømmer frem fra et sted i klippevæggen og der er dannet en lille dam i en fordybning klippen. Du bevæger dig rundt om udspringet og ser med ét et stort krus i metal stå ved kanten af den lille dam. Du smager på vandet, som er koldt og har en let metallisk smag. Efter du har fyldt din drikkedunk kigger du dig omkring og ser at gangen fortsætter bag nogle klipper.",
        choices: [
          {
            name: "Tag kruset og fortsæt",
            node: 11
          }
        ]
      },
      {
        id:10,
        title: "Skatten!",
        text: "du træder ind i rum med et rundt stenbord i midten. På bordet står et fad af træ og flere store trækrus samt en keramik karaffel. Ved siden af bordet ligger lædersække og da du kigger i dem ser du de er fyldt med glimtende ting! Du har fundet en skat! Yeah! du tager så meget du kan. Foran dig er der to døre: den ene fortsætter lige ud og den anden går til venstre",
        choices: [
          {
            name: "Fortsæt lige ud",
            node: 9
          },
          {
            name: "Gå til venstre",
            node: 12
          }
        ]
      },
      {
        id:11,
        title: "Skatten! 1a",
        text: "du træder ind i rum med et rundt stenbord i midten. På bordet står et fad af træ og flere store trækrus samt en keramik karaffel. Ved siden af bordet ligger lædersække og da du kigger i dem ser du de er fyldt med glimtende ting! Du har fundet en skat! Yeah! du tager så meget du kan. Foran dig er der to døre: den ene fortsætter lige ud og den anden går til højre",
        choices: [
          {
            name: "Fortsæt lige ud",
            node: 7
          },
          {
            name: "Gå til højre",
            node: 12
          }
        ]
      },
      {
        id:12,
        title: "en trappe op",
        text: "du befinder dig ved foden af en trappe som er hugget ind i klippen. Du har ingen andre muligheder end at gå op. Ved toppen af trappen er der en tung trædør som du åbner. Du træder ind i et grovkøkken. En person stopper op og kigger på dig: ” har du koppen med? Og vand fra kilden?”",
        choices: [
          {
            name: "ja",
            node: 14
          },
          {
            name: "nej",
            node: 13
          }
        ]
      },
      {
        id:13,
        title: "bortvisning fra kongeriget",
        text: "”Du har ikke vist dig at være den vi håbede på” Kongen stirrer skuffet på dig. ”Gå nu og vend aldrig tilbage!”",
        choices: [
          {
            name: "afslut",
            node: null
          }
        ]
      },
      {
        id:14,
        title: "helten fejres",
        text: "”Du har vist dig at være den vi håbede på og vort rige er frelst” modtag denne magiske kniv som kan være dig til gavn på fremtidige eventyr.",
        choices: [
          {
            name: "afslut",
            node: null
          }
        ]
    },
    {
        id:15,
        title: "Monsterets hule",
        text: "du træder ind i rum som virker fugtigt. Lugten af jord er kraftigere her og du bemærker nogle mindre bunker af noget ubestemmeligt organisk. Du gyser og vender dig for at gå da du fornemmer noget iagttager dig. Du drejer og svinger faklen foran dig men kan ikke se noget. Så mærker du et stik i nakken od bliver løftet op. Inden du mister bevidstheden ser ind i kæmpeedderkoppens mangefacetterede øjne og ved at du skal dø.",
        choices: [
          {
            name: "fortsæt",
            node: 8
          }
        ]
    }

]