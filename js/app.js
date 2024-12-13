//Access DOM Elements
const confirmBtn = document.getElementById('confirmBtn')
const  totalDisplay = document.getElementById
('total')
const cartSubtotal= document.getElementById('cartSubtotal')
const menuDivs = document. querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')
// set subtotal & tax
let subtotal=0
let tax =.07
// grab the menu types
const menuTypes =[
    'appetizers',
    'entrees',
    'drinks',
    'desserts',
    'sides',
]

// create menu items; array of objects
const menuItems =[
    {
        id:1,
        type:'appetizers',
        item:'salmon dip',
        desc:'fresh salmon spread and toast',
        imgUrl:'',
        price:10.99,
        qty:0
    },
    {
        id:2,
        type:'appetizers',
        item:'fried pickles',
        desc:'deep fried pickles',
        imgUrl:'',
        price:2.99,
        qty:0
    },
    {
        id:3,
        type:'appetizers',
        item:'wings',
        desc:'fried wings with differnt sause',
        imgUrl:'',
        price: 5.99,
        qty:0
    },
    {
        id:4,
        type:'appetizers',
        item:'mozzarella',
        desc:'deep fried cheeese',
        imgUrl:'',
        price:2.99,
        qty:0
    },
    {
        id:5,
        type:'entrees',
        item:'Burger',
        desc:'beef patty,chesse,pickles,totmatoes,lettuce,mayo,oions,',
        imgUrl:'',
        price:10.99,
        qty:0
    },
    {
        id:6,
        type:'entrees',
        item:'steak',
        desc:'well-done,medium-well,or rare',
        imgUrl:'',
        price:10.99,
        qty:0
    },
    {
        id:7,
        type:'entrees',
        item:'veggie burger',
        desc:'vegan meat,lettuce,totmatoes,vegan mayo,oions',
        imgUrl:'',
        price:8.99,
        qty:0
    },
    {
        id:8,
        type:'entrees',
        item:'chicken tenders',
        desc:'dipped in your choose of flavor ',
        imgUrl:'',
        price:11.99,
        qty:0,
    },
    {
        id:9,
        type:"drinks",
        item:'water',
        desc:'water',
        imgUrl:'',
        price:0.00,
        qty:0,
    },
    {
        id:11,
        type:"drinks",
        item:'sweet tea',
        desc:'sweet tea',
        imgUrl:'',
        price:1.00,
        qty:0,
    },
    {
        id:12,
        type:"drinks",
        item:'lemonade',
        desc:'lemonade',
        imgUrl:'',
        price:1.00,
        qty:0,
    },
    {
        id:13,
        type:"drinks",
        item:'dr.pepper',
        desc:'dr.pepper',
        imgUrl:'',
        price:1.00,
        qty:0,
    },
    {
        id:14,
        type:'desserts',
        item:'pizzokie',
        desc:'cookie with icecream on top',
        imgUrl:'',
        price:2.99,
    },
    {
        id:15,
        type:'desserts',
        item:'lava cake',
        desc:'chocolate cake with fugde in the middle',
        imgUrl:'',
        price:2.99,
    },
    {
        id:16,
        type:'desserts',
        item:'brownie',
        desc:'brownie',
        imgUrl:'',
        price:2.99,
    },
    {
        id:17,
        type:'desserts',
        item:'cookie',
        desc:'cookie',
        imgUrl:'',
        price:2.99,
    },
    {
        id:18,
        type:'desserts',
        item:'cheesecake',
        desc:'cheesecake with your choice of toppings',
        imgUrl:'',
        price:2.99,
    },
    {
        id:19,
        type:'sides',
        item:'ceaser salad',
        desc:'lettuce,ceaser dressing,with curtons',
        imgUrl:'',
        price:.99,
    },
    {
        id:20,
        type:'sides',
        item:'broccoli',
        desc:'steamed broccoli',
        imgUrl:'',
        price:.99,
    },
    {
        id:21,
        type:'sides',
        item:'fries',
        desc:'fries',
        imgUrl:'',
        price:.99,
    },
    {
        id:22,
        type:'sides',
        item:'corn',
        desc:'corn',
        imgUrl:'',
        price:.99,
    },
]

// confirm button
confirmBtn.addEventListener('click',(e)=> {
    e.preventDefault()
    console.log('click')
})

// load the menu items
// make rows
menuDivs.forEach(div => {
    const menuSubheading=document.createElement('h3')
    menuSubheading.classList.add('menu-subheading','text-capitalize')

    const row =document.createElement('div')
    row.classList.add('row')

    div.appendChild(menuSubheading)
    div.appendChild(row)
})


for(let i=0; i <menuTypes.length;i++){
    menuDivs[i].children[0].innerText =menuTypes[i]
    menuDivs[i].children[1].setAttribute('id',`$(menuType[i]}Row`)
    console.log(menuDivs[i])
}
// grab the appRow
const appRow =document.getElementById('appetizersRow')
const entreesRow = document.getElementById('entreesRow')
const drinksRow = document.getElementById('drinksRow')
const dessertsRow = document.getElementById('dessertsRow')
const sidesRow = document.getAnimations('sidesRow')

// build cols and cards
menuItems.forEach(item => {
    // do stuff
    const column =document.createElement('div')
    column.classList.add ('col-sm-3')

    const card =document.createElement('div')
    card.classList.add('add')

    card.innerHTML=`
    < img src='images/${item.imgUrl}' alt='${item.desc}' class='img-fluid menu-image card-image-top'/>
    <div class ='card-body'>
            <h4 class='card-title text-capitalize item-item'>${item.item}</h4>
            <p class='card-text text-uppercase item-desc'>${item.desc}</p>
            </div>
    `
})