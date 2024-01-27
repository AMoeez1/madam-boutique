// 10 Sneakers 10Shirts 10Handbags 10pant 10jackets
// Nike 10 puma 10 chanel 8 dior 7 Louis Vuitton 5 levis 5 gucci 3 addidas 2
// 10 Black 10 white 8pink 7blue 5gray 5yellow 5 multicolor
// 20 sale Products 30 non-sale products 


// Jackets
// import WJacket from '../assets/Products/WJacket1.jfif'
import LevisTruckerJacket from '../assets/Products/LevisTruckerjacket.jpg'
import YellowJacket1 from '../assets/Products/YellowJacket1.jpg'
import GrayJacket1 from '../assets/Products/GrayJacket1.webp'
import BlackJacket2 from '../assets/Products/BlackJacket2.webp'
import GreenJacket1 from '../assets/Products/GreenJacket1.jfif'



// Shirts / TShirts
import blackTshirt from '../assets/Products/blackTshirt1.webp'
import GrayShirt1 from '../assets/Products/GrayShirt1.webp'
import RedTshirt1 from '../assets/Products/RedTshirt1.jfif'
import RedShirt2 from '../assets/Products/RedShirt2.webp'
import BlueShirt1 from '../assets/Products/BlueShirt.avif'
import GreenTShirt1 from '../assets/Products/GreenTShirt1.webp'
import WhiteTShirt1 from '../assets/Products/WhiteTShirt1.jfif'
import PinkShirt1 from '../assets/Products/PinkShirt1.jfif'
import YellowKurti from '../assets/Products/YellowKurti.webp'




// Sneakers
import sneakers from '../assets/Products/sneakers.jpg'
import WhiteSneakers from '../assets/Products/WhiteSneakers.jpg'
import RedSneakers1 from '../assets/Products/RedSneakers1.webp'
import WhiteLoafer1 from '../assets/Products/WhiteLoafer1.jfif'
import GraySneakers1 from '../assets/Products/GraySneakers1.jfif'


// HandBags
import handbag1 from '../assets/Products/handbag1.jpg'
import handbag2 from '../assets/Products/handbag2.jpg'
import handbag3 from '../assets/Products/handbag3.jpg'
import Redhandbag1 from '../assets/Products/REdHandbag1.jpg'

// Pants
import PinkPant1 from '../assets/Products/PinkPant1.jpg'
import BlackPant1 from '../assets/Products/BlackPant1.jpg'
import GrayPant1 from '../assets/Products/GrayPant1.webp'
import RedPant1 from '../assets/Products/RedPant1.jpg'
import BluePant1 from '../assets/Products/BluePant1.jfif'
import YellowPant from '../assets/Products/YellowPant.jpg'



const Products = [
    {
        id: 'a45s412dsgf89tu145ad12sa45wtlk3mnb',
        name: "Chic Handbag",
        category: "Handbags",
        price: 49.99,
        delPrice: 59.99,
        alt: 'Chick handbag',
        color: "Black",
        material: "Leather",
        brand: "Louis Vuitton",
        image: handbag3,
      },
      {
        id: 'a45s412dsgf89aa4512w5a4sdtu1tlk3mnb',
        name: "Levis Trucker Jacket",
        alt: 'Levis Trucker jacket',
        category: "Jackets",
        price: 65.45,
        delPrice: 80.50,
        color: "Red",
        size: "M",
        brand: "Levis",
        image: LevisTruckerJacket,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb8asd54asd',
        name: "Levis Black TShirt",
        alt: 'Levis Black TShirt',
        category: "Tees",
        price: 29.99,
        delPrice: 45.99,
        color: "Black",
        brand: "Levis",
        image: blackTshirt
      },
      {
        id: 'a45s412dsgf89ta45a21das4u1tlk3mnb',
        name: "Pink Sneakers",
        alt: 'Pink Sneaters',
        category: "Footwear",
        price: 69.99,
        delPrice: 80.99,
        color: "Pink",
        size: "7",
        brand: "Nike",
        image: sneakers,
      },
      {
        id: 'a45s412dsgf89as4521dadsatu1tlk3mnb',
        name: "Handbag for Women",
        alt: "Handbag for Women",
        category: "Handbags",
        price: 59.99,
        delPrice: 68.15,
        color: "Rose Gold",
        brand: "Louis Vuitton",
        image: handbag1,
      },
      {
        id: 'a4dsds48853awdass1d5s412dsgf89tu1tlk3mnb',
        name: "Slim Fit Pink Pant",
        alt: "Slim Fit Pink Pant",
        category: "Pants",
        color: 'Pink',
        price: 34.99,
        delPrice: 40.45,
        brand: "Puma",
        image: PinkPant1,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnbda785dad45as5a',
        name: "Jeans Black Pant",
        alt: "Jeans Black Pant",
        category: "Pants",
        price: 54.99,
        delPrice: 60.20,
        color: "Black",
        brand: "Puma",
        image: BlackPant1,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnbad565623sdsfws45',
        name: "Black Handbag",
        alt: "Black Handbag",
        category: "Handbags",
        price: 49.99,
        delPrice: 72.99,
        color: "Black",
        material: "Leather",
        brand: "Dior",
        image: handbag2,
      },
      {
        id: 'a45s412dsgf89sadsaf74d5451tlk3mnbrefdf',
        name: "Yellow Cargo Jacket",
        alt: "Yellow Cargo Jacket",
        category: "Jackets",
        price: 89.99,
        delPrice: 99.99,
        color: "Yellow",
        brand: "Nike",
        image: YellowJacket1,
      },
      
      {
        id: 'fdfa45s412dsgf89tu1tlk3mnbsads',
        name: "Pleated Long Sleeve Shirt ",
        alt: "Pleated Long Sleeve Shirt ",
        category: "Shirt",
        price: 54.99,
        delPrice: 81.45,
        color: "Gray",
        material: "Canvas",
        brand: "Chanel",
        image: GrayShirt1,
      },
      {
        id: 'a45s412dsgf89tu1tdsd7845dsdfsa3mnb',
        name: "Slim Fit Gray Pant",
        alt: "Slim Fit Gray Pant",
        category: "Pants",
        price: 79.99,
        delPrice: 95.45,
        color: "Gray",
        brand: "Chanel",
        image: GrayPant1,
      },
      {
        id: 'a45s412dsgf89tu1tlk3ndfd478sfdgd',
        name: "Red Baggy TShirt",
        alt: "Red Baggy TShirt",
        category: "Tees",
        price: 44.99,
        delPrice: 55.45,
        color: "Red",
        brand: "Nike",
        image: RedTshirt1,
      },
      {
        id: 'a45s412dsgf89tu1tdsd475mnb',
        name: "Gray Denim Jacket",
        alt: "Gray Denim Jacket",
        category: "Jackets",
        price: 79.99,
        delPrice: 89.99,
        color: "Gray",
        brand: "Levis",
        image: GrayJacket1,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb45da',
        name: "Adidas White Sneakers",
        alt: "Adidas White Sneakers",
        category: "Footwear",
        price: 89.99,
        delPrice: 105.55,
        color: "White",
        brand: "Adidas",
        image: WhiteSneakers,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb',
        name: "Dior Red Handbag",
        alt: "Dior Red Handbag",
        category: "HandBags",
        price: 65.99,
        delPrice: 80.99,
        color: "Red",
        brand: "Dior",
        image: Redhandbag1,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnbds45a45da5',
        name: "Blue Hooded Sweatshirt",
        alt: "Blue Hooded Sweatshirt",
        category: "Shirt",
        price: 59.99,
        delPrice: 69.99,
        color: "Blue",
        brand: "Nike",
        image: BlueShirt1,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb45daad545sad',
        name: "Black Leather Jacket",
        alt: "Black Leather Jacket",
        category: "Jackets",
        price: 129.99,
        delPrice: 149.99,
        color: "Black",
        brand: "Zara",
        image: BlackJacket2,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb45dada4512wfaw',
        name: "Red Plaid Shirt",
        alt: "Red Plaid Shirt",
        category: "Shirt",
        price: 39.99,
        delPrice: 49.99,
        color: "Red",
        brand: "Levis",
        image: RedShirt2,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb45da454awfd',
        name: "Jordan Air Red for Women",
        alt: "Jordan Red Sneakers",
        category: "Footwear",
        price: 49.99,
        delPrice: 59.99,
        color: "Red",
        brand: "Nike",
        image: RedSneakers1,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb45da7884542w',
        name: "Green TShirt for Women",
        alt: "Green TShirt",
        category: "Tees",
        price: 29.99,
        delPrice: 39.99,
        color: "Green",
        brand: "Dior",
        image: GreenTShirt1,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb45daadfsc4547asd',
        name: "Red Striped Pants",
        alt: "Red Pant",
        category: "Pants",
        price: 69.99,
        delPrice: 79.99,
        color: "Red",
        brand: "Louis Vuitton",
        image: RedPant1,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb45dads7854542a',
        name: "Striped Black & White T-shirt",
        alt: "Striped T-shirt",
        category: "Tees",
        price: 19.99,
        delPrice: 24.99,
        color: "Blue/White",
        brand: "Louis Vuitton",
        image: WhiteTShirt1,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb45da87asdff454',
        name: "White Gucci Loafers",
        alt: "White Loafers",
        category: "Footwear",
        price: 79.99,
        delPrice: 89.99,
        color: "White",
        brand: "Gucci",
        image: WhiteLoafer1,
      },
      
      {
        id: 'a45s412dsgf89tu1tlk3mnb45daafsf5s',
        name: "Formal Pink Shirt",
        alt: "Pink Shirt",
        category: "Shirt",
        price: 49.99,
        delPrice: 59.99,
        color: "Pink",
        brand: "Gucci",
        image: PinkShirt1,
      },
      {
        id: 'a45s412dsgf89tasd5sdu1tlk3mnb45da',
        name: "Gray Sneakers",
        alt: "Gray Sneakers",
        category: "Footwear",
        price: 54.99,
        delPrice: 64.99,
        color: "Gray",
        brand: "Nike",
        image: GraySneakers1,
      },
      {
        id: 'aa4545s412dsgf89tu1tlk3mnb45da878as',
        name: "Green Jacket by Louis Vuitton",
        alt: "Green Jacket",
        category: "Jackets",
        price: 39.99,
        delPrice: 49.99,
        color: "Green",
        brand: "Louis Vuitton",
        image: GreenJacket1,
      },
      {
        id: 'a45sasd4545aw8a412dsgf89tu1tlk3mnb45da',
        name: "Blue slim fit pant",
        alt: "Blue pant",
        category: "Pants",
        price: 14.99,
        delPrice: 19.99,
        color: "Blue",
        brand: "Dior",
        image: BluePant1,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb45da4as4awwfb',
        name: "Yellow Kurti",
        alt: "Yellow Kurti",
        category: "Shirt",
        price: 89.99,
        delPrice: 99.99,
        color: "Yellow",
        brand: "J.",
        image: YellowKurti,
      },
      {
        id: 'a45s412dsgf89tu1tlk3mnb45da78asdrt',
        name: "Yellow FLowery print pants",
        alt: "Yellow pant",
        category: "Pants",
        price: 69.99,
        delPrice: 79.99,
        color: "Yellow",
        brand: "Dior",
        image: YellowPant,
      },
]

export default Products;