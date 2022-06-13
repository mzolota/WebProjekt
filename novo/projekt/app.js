/*************************************RECENZIJE*********************************** */
let recenzijeContainer = document.querySelector('.recenzije-container');

const fooditem=[
    {
        ime: "Marko",
        prezime:'Ivic',
        type: "pet",
        des: "Ugodan ambijent , ljubazno osoblje i vrhunska hrana",
        zvjezdica:'&#9733 &#9733 &#9733 &#9733 &#9733;',
        img:"slike/logo.jpg" 
    },
    {
        ime: "Ivan",
        prezime: 'Macić',
        type: "pet",
        des: "Najbolja pizza u Zadru :) .",
        zvjezdica:'&#9733 &#9733 &#9733 &#9733 &#9733;',
        img:"slike/logo.jpg" 
    },
    {
        ime: "Marta",
        prezime: 'Maric',
        type: "pet",
        des: "Cekali svega 20 minuta , dobili salatu besplatno jer nam je bio rođendan , sve pohvale.",
        zvjezdica:'&#9733 &#9733 &#9733 &#9733 &#9733;',
        img:"slike/logo.jpg" 
    },
    {
        ime: "Jakov",
        prezime: 'Plazibat',
        type: "cetri",
        des: " Uvijek puno , ali se isplati čekati",
        zvjezdica:'&#9733 &#9733 &#9733 &#9733;',
        img:"slike/logo.jpg" 
    },
    {
        ime: "Martin",
        prezime: 'Ljubic',
        type: "cetri",
        des: "Malo mi je pre skupo ali je hrana toliko fina da se isplati , sve pohvale kuharu.",
        zvjezdica:'&#9733 &#9733 &#9733 &#9733',
        img:"slike/logo.jpg" 
    },
    {
        ime: "Ivana",
        prezime: 'Majic',
        type: "cetri",
        des: "Shwarz torta je san snova , obavezno probati ako ste u restoranu!!.",
        zvjezdica:'&#9733 &#9733 &#9733 &#9733',
        img:"slike/logo.jpg" 
    },
    {
        ime: "Marin",
        prezime: 'Pejic',
        type: "tri",
        des: "Malo smo duze cekali ali je bila jako velika gužva , ali cijene su pre velike za peteročlanu obitelj",
        zvjezdica:'&#9733 &#9733 &#9733',
        img:"slike/logo.jpg" 
    },

    {
        ime: "Petar",
        prezime: 'Karlović',
        type: "tri",
        des: "Čuo sam puno dobrih komentara u vezi restorana , ali meni nije nešto..Naručio Bečki",
        zvjezdica:'&#9733 &#9733 &#9733',
        img:"slike/logo.jpg" 
    },
    {
        ime: "Slaven",
        prezime: 'Magdic',
        type: "dva",
        des: "Osoblje drsko , hrana hladna.",
        zvjezdica:'&#9733 &#9733 ',
        img:"slike/logo.jpg" 
    },

    {
        ime: "Maja",
        prezime: 'Pavić',
        type: "dva",
        des: "Ja sam platio 50 kuna za jednu obicnu pizzu , pa to nije ok .",
        zvjezdica:'&#9733 &#9733 ',
        img:"slike/logo.jpg" 
    },
    {
        ime: "Tamara",
        prezime: 'Cukrov',
        type: "jedan",
        des: "HRANA JE BILA UŽAS , OSOBLJE SPORO A ABIJENT BOŽE ME SAČUVAJ ..",
        zvjezdica:'&#9733',
        img:"slike/logo.jpg" 
    }
]


const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.img}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.ime}</span>
                <!-- price -->
                <span class="price">${item.zvjezdica}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
recenzijeContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'sve recenzije')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='pet'){
                if(box.classList.contains('pet'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='cetri'){
                if(box.classList.contains('cetri'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='tri'){
                if(box.classList.contains('tri'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='dva'){
                if(box.classList.contains('dva'))
                {
                    box.classList.remove('d-none')
                }

                
            }
            else if(e.target.innerHTML==='jedan'){
                if(box.classList.contains('jedan'))
                {
                    box.classList.remove('d-none')
                }
            }
           
            
        } )
        
        
        
    })
})



