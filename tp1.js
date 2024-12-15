var movable=false
function showHello(){
    var nom=document.getElementById("nom").value
    console.log("Hello"+nom)
}

function somme(){
    var a=parseInt(document.getElementById("a").value)
    var b=parseint(document.getElementById("b").value)
    var resultat=document.getElementById("resultat")
    resultat.innerHTML=a+b
}

function updatePosition(event){
    var image=document.getElementById('image')
    if(movable){
        image.src='images/animated_image.gift'
        var xpos=document.getElementById("xpos")
        var ypos=document.getElementById("ypos")
        xpos.innerHTML=event.clientX
        ypos.innerHTML=event.clientY
        image.style.top=(event.clientY-image.clientHeight/2)+"px"
        image.style.left=(event.clientX-image.clientWidth/2)+"px"
    }else{
        image.src='image/static_image.png'
    }
}

function move(){
    movable=!movable
}

function deposit(e){
    var cat=document.getElementById('cat')
    cat.appendChild(e.target)
    console.log(e.target)
}