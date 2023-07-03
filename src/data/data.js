import focaccia from '/images/focaccia.jpg';
import funghi from '/images/funghi.jpg';
import margherita from '/images/margherita.jpg';
import prosciutto from '/images/prosciutto.jpg';
import salamino from '/images/salamino.jpg';
import spinaci from '/images/spinaci.jpg';

export const data = {
    title: 'FAST REACT PIZZA CO.',
    subTitle: 'OUR MENU',
    tagLine: 'Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.',
    items: [
        {
            img: focaccia,
            title: 'Pizza Focaccia',
            desc: 'Bread with italian olive oil and rosemary',
            quantity: 6
        },
        {
            img: margherita,
            title: 'Pizza Margherita',
            desc: 'Tomato and mozarella',
            quantity: 10
        },
        {
            img: spinaci,
            title: 'Pizza Spinaci',
            desc: 'Tomato, mozarella, spinach, and ricotta cheese',
            quantity: 12
        },
        {
            img: funghi,
            title: 'Pizza Funghi',
            desc: 'Tomato, mozarella, mushrooms, and onion',
            quantity: 12
        },
        {
            img: salamino,
            title: 'Pizza Salamino',
            desc: 'Tomato, mozarella, and pepperoni',
            quantity: 'SOLD OUT'
        },
        {
            img: prosciutto,
            title: 'Pizza Prosciutto',
            desc: 'Tomato, mozarella, ham, aragula, and burrata cheese',
            quantity: 18
        },
    ],
    time: "We're open from 12:00 to 22:00. Come visit us or order online.",
    order: 'Order'
}