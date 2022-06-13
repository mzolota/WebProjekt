let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "Médaillons De Porc",
        foodimg: 'slike/medaljoni.jpg',
        price: "80 kn",
        type: "glavnaJela",
        des: "svinjski medaljoni u umaku od gljiva s kroketima , svježa salata od rajčice, zelene salate i kukuruzom na maslinovom ulju"
    },
    {
        FoodName: "Gastronomique Pletina",
        foodimg: 'slike/gpiletinas.jpg',
        price: "100 kn",
        type: "glavnaJela",
        des: "Pileći file punjen Švicarskim sirom i slaninom u talijanskom umaku od rajčice i peršina"
    },
    {
        FoodName: "Marinirani Pileći File Lyon",
        foodimg: 'slike/lyon.jpg',
        price: "80 kn",
        type: "glavnaJela",
        des: "Pileci file mariniran u francuskoj mješavini zacina s kremastim pireom od celera, umakom od crnog vina i glaziranim povrcem"
    },
   
    {
        FoodName: "Baby Beef Odrezak",
        foodimg: 'slike/steak.jpg',
        price: "200 kn",
        type: "glavnaJela",
        des: "Odležani ramstek od Baby Beef domaceg goveda, rukola, buffalo mozzarella, paprika, bademi, Grana Padano"
    },
    {
        FoodName: "Ramstek Odrezci",
        foodimg: 'slike/stripsteak.jpg',
        price: "240 kn",
        type: "glavnaJela",
        des: "Ramstek odrezci u umaku od od krumpira i crnog papra , Ceasar salata , chrispy chips"
    },
    {
        FoodName: "Chicken Fenique",
        foodimg: 'slike/slatkoljutapiletina.jpg',
        price: "280 kn",
        type: "glavnaJela",
        des: "Slatko ljuta piletina u umaku od chilija , meda , ružmarina i crnog papra."
    },

    {
        FoodName: "Pureći odrezak",
        foodimg: 'slike/podrezak.jpg',
        price: "150 kn",
        type: "glavnaJela",
        des: "Pureći odrezak punjen gorgonzolom , mozzarellom, goudom te posipan parmezan sirom u umaku od gljiva i rajčice."
    },
    {
        FoodName: "File losos",
        foodimg: 'slike/losos.jpg',
        price: "150 kn",
        type: "glavnaJela",
        des: "Sviježi losos u umaku od meda , limna i kopra , preliven aurora umakomk."
    },

    {
        FoodName: "Rižoto s morskim plodovima",
        foodimg: 'slike/rizoto.jpg',
        price: "150 kn",
        type: "glavnaJela",
        des: "Chique rižoto u umaku od badema i maslaca , plodovi mora."
    },
    {
        FoodName: "Pizza la Palermo",
        foodimg: 'slike/pizza.jpg',
        price: "80 kn",
        type: "glavnaJela",
        des: "Celer, cešnjak, luk, cherry rajcica, boisljak, piletina, mozzarella,fomaggio gljive,talijanski umak."
    }
    ,
    {
        FoodName: "Maggio Tortilja (Vegan)",
        foodimg: 'slike/tortila.jpg',
        price: "120 kn",
        type: "glavnaJela",
        des: "Tortilja, salsa od avokada, slanutak, kukuruz, grašak, broccoli, kajenski papar, chia sjemenke, špinat, rajcica, kurkuma, kardamon, sezamovo ulje."
    }
    ,
    
    {
        FoodName: "Torta tri vrste čokolade",
        foodimg: 'slike/tortacokolada.jpg',
        price: "250 kn ",
        type: "deserti",
        des: "šećer u prahu , kakao , maslac , mlijeko , slatko vrhnje , jaja , bijela čokolada , čokolada , pšenično brašno , tamna čokolada."
    }
    ,
    {
        FoodName: "Torta Oreo Bundeva",
        foodimg: 'slike/oreobundeva.jpg',
        price: "220 kn",
        type: "deserti",
        des: "šećer , vanilin šećer , maslac , slatko vrhnje , oreo keks , bundeva"
    }
    ,
    {
        FoodName: "Milearm torta",
        foodimg: 'slike/mileram.jpg',
        price: "240 kn",
        type: "deserti",
        des: "šećer , mileram , margarin , šumsko voće , puding od vanilije , mlijeko , pšenično bijelo brašno , jaja"
    }
    ,
    {
        FoodName: "Juha od gljiva",
        foodimg: 'slike/juha.jpg',
        price: "80 kn",
        type: "predjela",
        des: "krem juha od gljiva, papar , morska sol , bosiljak , azijski začini."
    }
    ,
    {
        FoodName: "Schwarzwald torta",
        foodimg: 'slike/schwarz.jpg',
        price: "250 kn",
        type: "deserti",
        des: "šećer , kakao , višnje , maslac , slatko vrhnje , pšenično bijelo brašno , jaja , čokolada."
    }
    ,
    {
        FoodName: "Caprio de Tunne",
        foodimg: 'slike/capriodetune.jpg',
        price: "60 kn",
        type: "predjela",
        des: "salata, aceto od badema, grana padano DOP, marinirani češnjak, perle od balsamica,limun"
    }
    ,
    {
        FoodName: "Plata za dvije osobe",
        foodimg: 'slike/plata.jpg',
        price: "120 kn",
        type: "predjela",
        des: "Vrat, slanina, čajna kobasica, sir, feta, vrhnje, masline, lepinjice"
    }
    ,
    {
        FoodName: "Bruschetter",
        foodimg: 'slike/bruschetta.jpg',
        price: "60 kn",
        type: "predjela",
        des: "domaća focaccia, pršut, krema od sira, tartufata, miješane gljive, grana padano DOP"
    }
]


const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'Ponuda')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Glavna Jela'){
                if(box.classList.contains('glavnaJela'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Predjela'){
                if(box.classList.contains('predjela'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Deserti'){
                if(box.classList.contains('deserti'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            
                
            
        })
        
    })
    
})