let shopCounter =0;
var counter =0;
var counterSm = 0;
var cards = [];
var questions =["Sei più un tipo da colazione salata o dolce?", "Quale animale pensi descriva meglio la tua personalità?", "Il tuo superpotere ideale sarebbe:", "Qual è la tua stagione preferita?", "Scegli un colore che ti descrive meglio:", "Quale genere musicale rappresenta meglio la tua vita?"];
var answers =["Salata come una torta di patate", "Dolce come una ciambella", "Una colazione mista, come un brunch", "Preferisco il pranzo!", "Leopardo - elegante e indipendente", "Papero - socievole e vivace", "Gufo - saggio e riflessivo", "Pinguino - grande festaiolo", "Invisibilità", "Teletrasporto","Lettura del pensiero","Capacità di volare","Primavera - rinascita e fioriture","Estate - sole, mare, e relax","Autunno - colori caldi e accoglienti","Inverno - neve e atmosfera natalizia","Rosso - audace e appassionato","Blu - calmo e riflessivo","Giallo - allegro e ottimista","Nero - elegante e misterioso","Rock","Pop","Jazz","Elettronica"];
var quizcounter = 0;
let galleryDesc =["Animali felici, calzini eccezionali: la nostra filosofia","La nostra catena produttiva: etica, sostenibile, autentica","I nostri designer: mente creativa dietro ogni calza stravagante.","I nostri lavoratori: il cuore pulsante della nostra produzione.","Comprare le calze giuste non è mai stato così facile e conveniente.","Il nostro impegno: consegnarti le calze migliori nel modo più efficiente.","Condividere la gioia: un cliente felice mostra il suo amore per le nostre calze."]
let buttons = {
    superpower:false,
    tech:false,
    comfort:false,
    mystery:false
}
let click = false;
let giuliamora = false;
function gira(element){
    let counter = document.getElementById("counter").textContent;
    console.log(counter);
    if(counter<3){
        counter++;


        document.getElementById("counter").innerHTML = counter;
        element.style.display ="none";
        let fronte = element.nextElementSibling;
        console.log(fronte.getAttribute("alt"))
        let value = fronte.getAttribute("alt")
        cards.push(value);
        if (counter ==3){
            checkWin(cards);
        }
        fronte.style.display ="block";

    }else{
        alert("hai gia gitato il numero massimo di carte!")
    }


}
function checkWin(array){
    //let audio = new Audio('');  decidere audio vittoria
    if(array[0] == array[1] && array[1]==array[2]){
        console.log("hai vintoooo!");
        document.getElementById("overlay").style.display="block";
        confetti.start();
       // audio.play()
        setTimeout(function (){
            document.getElementById("overlay").style.display="none";
            confetti.stop();
           // audio.pause();
        },6000)
    }

}
function sliderssOut(){
    slideOut();
    slideOutSm()
}
function sliderssIn(){
    slideIn();
    slideInSm()
}
function slideOut() {
    console.log("counter slide out:"+counter)
    if(counter<6){
    counter++;
    counterSm++;
    console.log("counter slide out:"+counter);
    console.log("questo lo vedi:"+galleryDesc[counter])
    document.getElementById("description").innerHTML = galleryDesc[counter];
    console.log("slide out"+counter);
    let idPhoto = "roll"+counter
    let img =document.getElementById(idPhoto);

        if (counter%2 ==0){
            img.classList.remove("roll-in-left");
            img.classList.add("roll-out-left");
            setTimeout(function() {
                img.style.display = "none";
            }, 600);
        }else{
            img.classList.remove("roll-in-right");
            img.classList.add("roll-out-right");
            setTimeout(function() {
                img.style.display = "none";
            }, 600);
        }
    }
}
function slideIn() {
    console.log("counterSlidein:"+counter)
    if (counter>0) {

        console.log("slide in"+counter+1);

        let idPhoto = "roll" + counter
        let img = document.getElementById(idPhoto);

        if (counter % 2 == 0) {
            img.classList.add("roll-in-left");
            img.style.display = "block";


        } else {
            img.classList.add("roll-in-right");
            img.style.display = "block";

        }
        console.log("slide in small:"+counterSm);
        counter--;
        counterSm--;
        document.getElementById("description").innerHTML = galleryDesc[counter];
    }
}

function slideOutSm() {

    document.getElementById("description").innerHTML = galleryDesc[counterSm];
    console.log( galleryDesc[counterSm]);
    console.log("cliccato");
    if(counterSm<7){


        let idPhoto = "rollsm"+(counterSm)
        let img =document.getElementById(idPhoto);

        if (counterSm%2 ==0){
            img.classList.remove("roll-in-left");
            img.classList.add("roll-out-left");
            setTimeout(function() {
                img.style.display = "none";
            }, 600);
        }else{
            img.classList.remove("roll-in-right");
            img.classList.add("roll-out-right");
            setTimeout(function() {
                img.style.display = "none";
            }, 600);
        }
    }

}
function slideInSm() {
    document.getElementById("description").innerHTML = galleryDesc[counterSm];
    console.log( galleryDesc[counterSm]);
    console.log("slide in small:"+counterSm);
    if (counterSm>=0) {
        console.log("slide in small 2:"+counterSm);

        let idPhoto = "rollsm" + (counterSm+1)
        console.log(idPhoto);
        let img = document.getElementById(idPhoto);

        if (counterSm%2 == 0) {
            img.classList.add("roll-in-left");
            img.style.display = "block";

        } else {
            img.classList.add("roll-in-right");
            img.style.display = "block";

        }
    }

}

function change(foto){
    let swap;
    let thumbnail = document.getElementById("thumbanil_active");
    swap = thumbnail.src;
    thumbnail.src= foto.src;
    foto.src = swap;
}

function addP(bottone){
    let counter = document.getElementById("p_counter").textContent;
        if(bottone.id == "less"){
            if (counter !=1){
                counter--;
                document.getElementById("p_counter").innerHTML = counter;
            }
        }else{
            counter++;
            document.getElementById("p_counter").innerHTML = counter;
        }
}


function quizNext(){

    if (quizcounter < questions.length -1) {
        console.log("hai premuto")
        quizcounter++;
        console.log(questions[quizcounter])
        document.getElementById("question").innerHTML = questions[quizcounter];
        console.log(answers[(quizcounter*4)+1]);
        document.getElementById("a1").innerHTML = answers[(quizcounter*4)];
        document.getElementById("a2").innerHTML = answers[(quizcounter*4)+1];
        document.getElementById("a3").innerHTML = answers[(quizcounter*4)+2];
        document.getElementById("a4").innerHTML = answers[(quizcounter*4)+3];
        document.getElementById("exampleRadios1").checked = false;
        document.getElementById("exampleRadios2").checked = false;
        document.getElementById("exampleRadios3").checked = false;
        document.getElementById("exampleRadios4").checked = false;
        document.getElementById("bar").style.width=16.7*(quizcounter+1)+"%";

    }
    displayButton();
}
function quizBack(){
    if (quizcounter > 0) {

        console.log("hai premuto")
        quizcounter--;
        console.log(questions[quizcounter])
        document.getElementById("question").innerHTML = questions[quizcounter];
        console.log(answers[(quizcounter*4)+1]);
        document.getElementById("a1").innerHTML = answers[(quizcounter*4)];
        document.getElementById("a2").innerHTML = answers[(quizcounter*4)+1];
        document.getElementById("a3").innerHTML = answers[(quizcounter*4)+2];
        document.getElementById("a4").innerHTML = answers[(quizcounter*4)+3];
        document.getElementById("exampleRadios1").checked = false;
        document.getElementById("exampleRadios2").checked = false;
        document.getElementById("exampleRadios3").checked = false;
        document.getElementById("exampleRadios4").checked = false;
        document.getElementById("bar").style.width=16.7*(quizcounter+1) +"%";
    }
    displayButton();
}

function clicked(){
    if(quizcounter ==5){
        giuliamora = true;
    }

    displayButton();
}
function displayButton (){
    console.log(giuliamora)
    if (quizcounter===5 && giuliamora) {
        document.getElementById('HideMe').style.display='block';}
    else {document.getElementById('HideMe').style.display='none';}
}

function filter(button){

    let check = button.getAttribute('data-active');
    let buttonPressed = button.getAttribute('data-val');

    let total = document.getElementsByClassName("products");
    let target = document.getElementById(buttonPressed);
    console.log(buttons);
    if( buttons[target.id]==="true"){
        buttons[target.id]="none";
    }else{
        buttons[target.id]="true";
        for (const attributo in buttons) {

            if(attributo ===target.id ) {
                buttons[target.id]="true";
            }else{
                buttons[target.id]="none";
            }
        }
    }

    console.log(buttons);
    if(check === "none"){
        for(let i=0;i<total.length;i++){
            if(target!==total[i]){
                total[i].classList.add('hidden');
            }
        }
        console.log("hai cliccato per filtrare");
        button.classList.replace("btn-purple","btn-yellow");
        button.setAttribute("data-active","true");
    }else{
        console.log("hai cliccato per togliere il  filtroo");
        for(let i=0;i<total.length;i++){
            console.log("ahaha");
            total[i].classList.remove('hidden');
        }
        button.classList.replace("btn-yellow","btn-purple");
        button.setAttribute("data-active","none");

    }
}
function filterButtons(button){
    let buttonPressed = button.getAttribute('data-val');
    let control = check(buttonPressed); //controlla se c'è un altro bottone attivo
    if(control && !buttons[buttonPressed]){ //se c'è un altro bottne attivo diverso da quello cliccato entra
        console.log("c'è un altro bottone attivo"); //in questo caso bisogna settare prima tutti i bottoni falsi e mettere quello selezionato true
        for (let k in buttons){
            buttons[k] = false;
        }
        buttons[buttonPressed] = true;

    }else{ // qui invece basta mettere true se il bottone è false o pttere false se il bottone è true!
        if(buttons[buttonPressed]){
            buttons[buttonPressed] = false
        }else{
            buttons[buttonPressed] = true
        }
    }
    change();
    console.log(buttons)
}

function check(){
    let checked = false;
    for (const attributo in buttons) {
        if(buttons[attributo]){
            checked  = true;
            break;
        }
    }
    return checked;
}

function change(){
    for (let k in buttons){
        if(buttons[k]===true){
            console.log(k)
            let element = document.getElementsByClassName(k)[0];
            console.log(element);
            element.classList.replace("btn-purple","btn-yellow");

        }else{
            let element = document.getElementsByClassName(k)[0];
            element.classList.replace("btn-yellow","btn-purple");
        }
    }
    hide();
}

function hide() {
    let info =check();
        if(info){
        for (let id in buttons) {
            if (buttons[id] === true) {
                let ele = document.getElementById(id);
                ele.classList.remove("hidden");
            } else {
                let ele = document.getElementById(id);
                ele.classList.add("hidden");
            }
        }
    }else{
            for (let id in buttons){
                let ele = document.getElementById(id);
                ele.classList.remove("hidden");
            }
        }
}

function switchImg(val){
    let change; //variabile di scambio
    let boh = document.getElementById('thumbanil_active'); //thumbnail
    change = boh.src; //mi salvo l'iimagine nella variabile
    boh.src=val.src; //sostituisco la thumbnail con l'immagine cliccata
    val.src = change //sostituisco l'iiagine sotto con quella di copertina
}

function addCart(){
    if (!sessionStorage.getItem('counter')) {
        sessionStorage.setItem('counter', 0);
    }
    let counterShop = parseInt(sessionStorage.getItem('counter'), 10);
    counterShop ++;

// Salvare nuovamente il valore incrementato
    sessionStorage.setItem('counter', counterShop);

    if(counterShop>0){
        document.getElementById('counterCart').innerHTML = counterShop;
        document.getElementById('counterCart').style.display ="block";
    }
}

function onLoadCart(){
    let counterShop = parseInt(sessionStorage.getItem('counter'), 10);

    if (counterShop>0){
        document.getElementById('counterCart').innerHTML = counterShop;
        document.getElementById('counterCart').style.display ="block";
    }
}