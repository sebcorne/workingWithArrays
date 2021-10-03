var mainEle=document.body.querySelector(".woo2")
var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    },
];

for ( var i=0; i<warriors.length; i++ ){

        var wooEle = document.createElement("div")
        var nameEle = document.createElement("h2")
        var damageEle = document.createElement("h3")
        var healthEle = document.createElement("h4")
        var warriorEle = document.createElement("h5")
    if ( warriors[i].health>=10&&warriors[i].damage>=2&&warriors[i].warrior==true) {
        nameEle.innerHTML = "Name:" + warriors[i].name
        damageEle.innerHTML = "Damage:" + warriors[i].damage
        healthEle.innerHTML = "Health:" + warriors[i].health
        warriorEle.innerHTML = "Warrior: Yep, they do the fighty thing pretty well"

        if (warriors[i].name.includes("a"||"A")){
            nameEle.innerHTML = ("Name:")+ warriors[i].name.fontcolor("#AD2B0F")
        }
    }

        wooEle.appendChild(nameEle)
        wooEle.appendChild(damageEle)
        wooEle.appendChild(healthEle)
        wooEle.appendChild(warriorEle)
        mainEle.appendChild(wooEle)

}