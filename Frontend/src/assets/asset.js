import salad from './salad.jpg'
import cake from './cake.jpg'
import desert1 from './desert.jpg'
import rolls from './rolls.jpg'
import pasta1 from './pasta1.jpg'
import pureveg from './pureveg.jpg'
import sandwich from './sandwich.jpeg'
import noodles from './noodles.jpg'
import { Description } from '@mui/icons-material'


import salad1 from './salad.jpg'
import salad2 from './salad2.jpg'
import salad8 from './salad8.jpg'
import salad9 from './salad9.jpg'
import roll1 from './roll1.jpg'
import roll2 from './roll2.jpg'
import cake1 from './cake1.jpg'
import cake2 from './cake2.jpg'

export const menu_item=[    
    {
       menu_name:"salad",
       menu_image: salad
    },
    {
        menu_name:"rolls",
        menu_image: rolls
    },
    {
        menu_name:"desert",
        menu_image: desert1
    },
    {
        menu_name:"sandwich",
        menu_image: sandwich
    },
    {
        menu_name:"cake",
        menu_image: cake
    },
    {
        menu_name:"pure-veg",
        menu_image: pureveg
    },
    {
        menu_name:"pasta",
        menu_image: pasta1
    },
    {
        menu_name:"noodles",
        menu_image: noodles
    }
]   


export const food_list =[
  {
    id: 1,
    name: "Greek Salad",
    image: salad1,
    price: 120,
    Description: "Fresh vegetables with feta cheese and olive oil.",
    category: "salad",
  },
  {
    id: 2,
    name: "Caesar_Salad",
    image: salad2,
    price: 150,
    Description: "Romaine lettuce with creamy Caesar dressing and croutons.",
    category: "salad",
  },
  {
    id: 3,
    name: "chickpea_salad",
    image: salad8,
    price: 150,
    Description: "Protein-rich chickpeas with lemon & seasoning.",
    category: "salad",
  },
  {
    id: 4,
    name: "sprout_salad",
    image: salad9,
    price: 100,
    Description: "Nutritious sprouts mixed with veggies and spices.",
    category: "salad",
  },
  {
    id: 5,
    name: "paneer_roll",
    image: roll1,
    price: 140,
    Description: "Soft roti stuffed with spicy paneer, onions, and sauces.",
    category: "roll",
},
{
    id: 6,
    name: "chicken_roll",
    image: roll2,
    price: 160,
    Description: "Juicy chicken pieces wrapped with veggies and mayo.",
    category: "roll",
},
{
    id: 7,
    name: "chocolate_cake",
    image: cake1,
    price: 250,
    Description: "Rich and moist chocolate cake topped with creamy ganache.",
    category: "cake",
},
{
    id: 8,
    name: "red_velvet_cake",
    image: cake2,
    price: 500  ,
    Description: "Soft red velvet layers with smooth cream cheese frosting.",
    category: "cake",
}
];
