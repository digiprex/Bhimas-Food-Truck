import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    public menu: any;
    public categories: any;
    public selectedCategory: any;
    public product: any;
    public host: any = [];
    public cart: any = [];
    public menuMasterData: any = {
        "menu": [
            {
                "superCategory": [
                    {
                        "category": [
                            {
                                "categoryName": "Appetizers",
                                "items": [
                                    {
                                        "itemName": "Veggie Samosa",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/dc6ef464-b2fd-4766-a24d-76264213c6a2_Veg%20samosas.jpeg",
                                        "itemDescription": "2 Pcs. Cumin infused potatoes, veggie medley wrapped in organic white flour pastry, and deep fried.",
                                        "quantity": 0,
                                        "itemPrice": "4.50"
                                    },
                                    {
                                        "itemName": "Onion Bhajia",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "4 Pcs. Seasoned onions coated in chickpea flour and deep fried.",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Meat Samosa",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e36f4580-6a58-4757-993c-b8d69341b0c0_Meat%20samosas.jpeg",
                                        "itemDescription": "2 Pcs. Spiced minced chicken and spinach wrapped in organic white flour pastry and deep fried.",
                                        "quantity": 0,
                                        "itemPrice": "5.50"
                                    },
                                    {
                                        "itemName": "Fish Pakora",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Pcs. Marinated salmon coated in chickpea batter and deep fried.",
                                        "quantity": 0,
                                        "itemPrice": "7.99"
                                    },
                                    {
                                        "itemName": "Veg Pakora",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Marinated veggies coated in a chickpea batter and deep fried.",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Chicken Pakora",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Pcs. Marinated chicken breast coated in chickpea batter and deep fried.",
                                        "quantity": 0,
                                        "itemPrice": "5.99"
                                    },
                                    {
                                        "itemName": "Cauliflower Pakora",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "6 Pcs. Marinated cauliflower florets coated in a chickpea batter and deep fried.",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Shrimp Pakora",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "6 Pcs. Marinated shrimp coated in chickpea batter and deep fried.",
                                        "quantity": 0,
                                        "itemPrice": "7.99"
                                    },
                                    {
                                        "itemName": "Gobi manchurian",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "11.99"
                                    },
                                    {
                                        "itemName": "",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "9.99"
                                    },
                                    {
                                        "itemName": "Chilli chicken",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f4508570-49a8-4cfd-b1af-db43f17f9952_Chilli%20chicken.jpeg",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "16.99"
                                    },
                                    {
                                        "itemName": "Chilli panner",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "15.99"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Soup and Salad",
                                "items": [
                                    {
                                        "itemName": "Mulligatawny Soup",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Yellow lentil soup with veggies and minced chicken tikka in a blend of spices.",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Mushroom Soup",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Shitake and creamini mushrooms in a tomato base.",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Khira Raita",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Sliced cucumbers topped with yoghurt.",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Kachumber Salad",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Diced onion, cucumber, carrot, tomatoes, mixed pepper, cilantro, pepper, and lemon juice.",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Tomato Soup",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Blended tomatoes with a touch of cream.",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Tandoori",
                                "items": [
                                    {
                                        "itemName": "House Mixed Grill",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b7125b9c-80b2-4fd4-99f7-43576f8ec8a1_House%20mixed%20grill.jpeg",
                                        "itemDescription": "Tandoori chicken, reshmi kebab, thangidi chicken, tandoori prawn and fish, marinated in homemade yogurt, ginger, garlic, spices, lime juice, and cooked in tandoor. Served on a bed of onions and mixed peppers. Served with naan.",
                                        "quantity": 0,
                                        "itemPrice": "23.99"
                                    },
                                    {
                                        "itemName": "Whole Tandoori Chicken [8 PCS]",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/abf7ca1a-6082-44e9-8097-44d27c6fd272_Tandoori%20chicken.jpeg",
                                        "itemDescription": "Chicken marinated in yogurt, ginger, garlic, spices, lime juice, and cooked in tandoor. Served on a bed of onions and mixed peppers.",
                                        "quantity": 0,
                                        "itemPrice": "22.99"
                                    },
                                    {
                                        "itemName": "Paneer Tikka [6 PCS]",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/39b4df5f-21bc-4cc5-8c59-23bf1c751eb1_Panner%20tikka.jpeg",
                                        "itemDescription": "6 Pcs. Cubes of Indian cottage cheese marinated in yogurt, ginger, garlic, spices, lime juice, and cooked in tandoor. Served on a bed of onions and mixed peppers.",
                                        "quantity": 0,
                                        "itemPrice": "16.99"
                                    },
                                    {
                                        "itemName": "Thangidi Chicken [4 PCS]",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6afc41f6-855a-4433-b9ff-c5bcbefacb7f_Tangdi%20chicken.jpeg",
                                        "itemDescription": "4 Pcs. Chicken legs marinated in yogurt, ginger, garlic, spices, cashew paste, and cooked in tandoor. Served on a bed of onions and mixed peppers.",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "Half Tandoori Chicken [4 PCS]",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/abf7ca1a-6082-44e9-8097-44d27c6fd272_Tandoori%20chicken.jpeg",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "Tandoori Cauliflower",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Florets of cauliflower marinated in yogurt, ginger, garlic, spices, lime juice, and cooked in tandoor. Served on a bed of onions and mixed peppers.",
                                        "quantity": 0,
                                        "itemPrice": "14.99"
                                    },
                                    {
                                        "itemName": "Tandoori Fish [3 PCS]",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "3 Pcs. Boneless salmon marinated in homemade yogurt, ginger, garlic, spices, lime juice, and cooked in tandoor. Served on a bed of onions and mixed peppers. Comes with one butter naan.",
                                        "quantity": 0,
                                        "itemPrice": "21.99"
                                    },
                                    {
                                        "itemName": "Tandoori prawn",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "20.99"
                                    },
                                    {
                                        "itemName": "Reshmi kebab (4)",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "17.99"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Meat Delights",
                                "items": [
                                    {
                                        "itemName": "Butter Chicken",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/16a06268-2c68-4b3d-8137-dd6fb4392bfc_Butter%20%20chicken.jpeg",
                                        "itemDescription": "Chicken marinated and baked in the tandoor and then simmered in a creamy tomato gravy.",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "Chicken Tikka Masala",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Chicken marinated in yogurt, ginger, garlic, spices, lime juice and cooked in tandoor, then added to a masala gravy with tomato, onion, ginger, garlic, mixed pepper, cilantro, and a touch of yogurt.",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "Chicken Curry",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "18.99"
                                    },
                                    {
                                        "itemName": "LAMB VINDALOO",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "20.99"
                                    },
                                    {
                                        "itemName": "Lamb Karahi",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "ooked with mixed peppers, onion, tomato, cilantro and fresh ginger in a masala gravy, and a touch of yogurt.",
                                        "quantity": 0,
                                        "itemPrice": "20.99"
                                    },
                                    {
                                        "itemName": "CHICKEN MUGULAI",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "18.99"
                                    },
                                    {
                                        "itemName": "LAMB MUGULAI",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "20.99"
                                    },
                                    {
                                        "itemName": "\nLAMB SAAG",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "20.99"
                                    },
                                    {
                                        "itemName": "CHICKEN SAAG",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "18.99"
                                    },
                                    {
                                        "itemName": "BEEF VINDALOO",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "SHAHI CHICKEN",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "18.99"
                                    },
                                    {
                                        "itemName": "BEEF MUGULAI",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "CHICKEN MADRAS",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "18.99"
                                    },
                                    {
                                        "itemName": "Lamb Curry",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "20.99"
                                    },
                                    {
                                        "itemName": "Chicken Karahi",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/4c4bc61e-63af-4ae5-8ff3-1185a0682a55_Chicken%20karahi.jpeg",
                                        "itemDescription": "Cooked with mixed peppers, onion, tomato, cilantro and fresh ginger in a masala gravy, and a touch of yogurt.",
                                        "quantity": 0,
                                        "itemPrice": "18.99"
                                    },
                                    {
                                        "itemName": "LAMB SHAHI",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "20.99"
                                    },
                                    {
                                        "itemName": "LAMB MADRAS",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/cdbd89ee-36ec-4ac6-a813-cd72543458f3_Lamb%20madras.jpeg",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "20.99"
                                    },
                                    {
                                        "itemName": "CHICKEN VINDALOO",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "18.99"
                                    },
                                    {
                                        "itemName": "BEEF KARAHI",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "BEEF SAAG",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "Beef Curry",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "BEEF SHAHI",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "18.99"
                                    },
                                    {
                                        "itemName": "BEEF MADRAS",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e80cd219-c5b7-4d70-8e4b-273ae4945d40_Beef%20madra.jpeg",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Biryani",
                                "items": [
                                    {
                                        "itemName": "",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Choix de votre viande cuite aux herbes, riz basmati, noix, et epices.",
                                        "quantity": 0,
                                        "itemPrice": ""
                                    },
                                    {
                                        "itemName": "CHICKEN",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "13.99"
                                    },
                                    {
                                        "itemName": "BEEF",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "14.99"
                                    },
                                    {
                                        "itemName": "LAMB",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "15.99"
                                    },
                                    {
                                        "itemName": "SHRIMP",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "16.99"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Seafood Delights",
                                "items": [
                                    {
                                        "itemName": "Shrimp Karahi",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Cooked with mixed peppers, onion, tomato, cilantro and fresh ginger in a masala gravy, and a touch of yogurt.",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "Shrimp Vindaloo",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Tiger prawns and seasoned potato and simmered in a sour and tangy tamarind sauce with a blend of spices.",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "Fish Curry",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Boneless salmon fish cooked in a tamarind sauce with tomato, yogurt, onion, and light spices.",
                                        "quantity": 0,
                                        "itemPrice": "20.99"
                                    },
                                    {
                                        "itemName": "Shrimp Shahi",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Tiger prawns cooked in a creamy coconut milk and onion gravy with spices.",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Vegetarian Dishes",
                                "items": [
                                    {
                                        "itemName": "Pois verts sautés / Sauteed green beans",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Pois verts sautés avec ine touche de tomates, oignons et épices",
                                        "quantity": 0,
                                        "itemPrice": "14.99"
                                    },
                                    {
                                        "itemName": "Channa Aloo",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Pois chiches et patates cuits avec poivrons, oignons au feut lentavec une sauce masala delicieuse",
                                        "quantity": 0,
                                        "itemPrice": "13.99"
                                    },
                                    {
                                        "itemName": "aag aloo",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "pinards et patates cuits avec tomates, oignons, herbes et une touche de creme",
                                        "quantity": 0,
                                        "itemPrice": "13.99"
                                    },
                                    {
                                        "itemName": "Palak Paneer",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Cottage cheese, spinach, and tomato with touch of cream.",
                                        "quantity": 0,
                                        "itemPrice": "15.99"
                                    },
                                    {
                                        "itemName": "Aloo Gobi",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3b9e0938-4bad-40ca-96a2-c2afd8a718c1_Aloo%20gobi.jpeg",
                                        "itemDescription": "Cauliflower and potatoes cooked in onion, tomato, and aromatic spices.",
                                        "quantity": 0,
                                        "itemPrice": "13.99"
                                    },
                                    {
                                        "itemName": "Daal with Spinach",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a1b7804f-bc71-4fb5-9daf-690c0879c278_Dhall%20with%20spinach.jpeg",
                                        "itemDescription": "Split lentils and spinach cooked with tomato seasoned with spices and herbs in Hyderabadi style.",
                                        "quantity": 0,
                                        "itemPrice": "12.99"
                                    },
                                    {
                                        "itemName": "Baingan Bhartha",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Whole eggplant baked in tandoor, mashed and sauted with onions, tomatoes, touch of cream, and fresh herbs.",
                                        "quantity": 0,
                                        "itemPrice": "14.99"
                                    },
                                    {
                                        "itemName": "PANEER MAKHANI",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "16.99"
                                    },
                                    {
                                        "itemName": "PANEER TIKKA MASALA",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/39b4df5f-21bc-4cc5-8c59-23bf1c751eb1_Panner%20tikka.jpeg",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "16.99"
                                    },
                                    {
                                        "itemName": "Spinach Fry",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Spinach sauted with garlic, onions, spices, and lemon.",
                                        "quantity": 0,
                                        "itemPrice": "14.99"
                                    },
                                    {
                                        "itemName": "Aloo Mogulai",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Seasoned potatoes cooked with a blend of spices in a creamy cashew gravy.",
                                        "quantity": 0,
                                        "itemPrice": "13.99"
                                    },
                                    {
                                        "itemName": "Shahi Paneer",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Indian cottage cheese cooked in a creamy onion and coconut milk gravy and spices.",
                                        "quantity": 0,
                                        "itemPrice": "15.99"
                                    },
                                    {
                                        "itemName": "Channa Masala",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Chickpea cooked in tomato, spices, and herbs to perfection.",
                                        "quantity": 0,
                                        "itemPrice": "13.99"
                                    },
                                    {
                                        "itemName": "Navarathan Mogulai",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "9 vegetables: potato, baby corn, paneer, peas, beans, carrots, broccoli, cauliflower, and mushrooms cooked with a blend of spices in a creamy cashew gravy.",
                                        "quantity": 0,
                                        "itemPrice": "14.99"
                                    },
                                    {
                                        "itemName": "DAAL MAKHANI",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "15.99"
                                    },
                                    {
                                        "itemName": "Daal Curry",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Split lentils cooked with tomato seasoned with spices and herbs in Hyderabadi style.",
                                        "quantity": 0,
                                        "itemPrice": "12.99"
                                    },
                                    {
                                        "itemName": "Navrathan Curry",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "9 vegetables: potato, baby corn, paneer, peas, beans, carrots, broccoli, cauliflower, and mushrooms cooked with a blend of spices in a curry gravy.",
                                        "quantity": 0,
                                        "itemPrice": "13.99"
                                    },
                                    {
                                        "itemName": "Bhendi Masala",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Crisp okra prepared with fresh onions, tomatoes, spices, and herbs.",
                                        "quantity": 0,
                                        "itemPrice": "14.99"
                                    },
                                    {
                                        "itemName": "Mutter Paneer",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Cottage cheese and green peas cooked in cream and tomato sauce.",
                                        "quantity": 0,
                                        "itemPrice": "15.99"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Rice Dishes",
                                "items": [
                                    {
                                        "itemName": "Garlic Rice",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Basmati rice mixed with fried garlic, cilantro, and herbs.",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Saffron Rice",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Saffron infused rice with a touch of cream.",
                                        "quantity": 0,
                                        "itemPrice": "5.99"
                                    },
                                    {
                                        "itemName": "Jeera Rice",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Basmati rice tampered with cumin seeds.",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Peas Pulao",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Flavored basmati rice cooked with green peas, sautéed onion, mixed pepper, and yoghurt.",
                                        "quantity": 0,
                                        "itemPrice": "5.99"
                                    },
                                    {
                                        "itemName": "Plain Rice",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Superior quality basmati rice cooked to perfection.",
                                        "quantity": 0,
                                        "itemPrice": "3.99"
                                    },
                                    {
                                        "itemName": "Vegetable Biryani",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Stewed vegetables mixed with basmati rice, herbs, cashews, and spices.",
                                        "quantity": 0,
                                        "itemPrice": "12.99"
                                    },
                                    {
                                        "itemName": "Pulao Rice",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Basmati rice cooked with onion and Indian spices.",
                                        "quantity": 0,
                                        "itemPrice": "4.50"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Bread's",
                                "items": [
                                    {
                                        "itemName": "Garlic Naan",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8ff72337-805e-4b5e-8a88-e1b1f928b5f6_Garlic%20nann.jpeg",
                                        "itemDescription": "Tandoori bread topped with garlic and cilantro.",
                                        "quantity": 0,
                                        "itemPrice": "4.50"
                                    },
                                    {
                                        "itemName": "Cheese Naan",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Tandoori bread stuffed with mozzarella and Cheddar cheese and spices. Great for kids.",
                                        "quantity": 0,
                                        "itemPrice": "6.50"
                                    },
                                    {
                                        "itemName": "Aloo Kulcha",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Bread stuffed with potatoes and spices.",
                                        "quantity": 0,
                                        "itemPrice": "6.50"
                                    },
                                    {
                                        "itemName": "Chilli Garlic Naan",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Tandoori bread topped with garlic, red chilli flakes, and cilantro.",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Butter Roti",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Whole wheat bread baked in tandoor.",
                                        "quantity": 0,
                                        "itemPrice": "3.50"
                                    },
                                    {
                                        "itemName": "Plain Naan",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Traditional bread baked in tandoor.",
                                        "quantity": 0,
                                        "itemPrice": "3.99"
                                    },
                                    {
                                        "itemName": "Butter Naan",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Traditional bread baked in tandoor with butter (butter naan).",
                                        "quantity": 0,
                                        "itemPrice": "3.99"
                                    },
                                    {
                                        "itemName": "Plain Roti",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Whole wheat bread baked in tandoor.",
                                        "quantity": 0,
                                        "itemPrice": "3.50"
                                    },
                                    {
                                        "itemName": "Bhatura",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "All purpose organic flour bread deep fried (bhatura).",
                                        "quantity": 0,
                                        "itemPrice": "3.99"
                                    },
                                    {
                                        "itemName": "Poori",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Whole wheat bread deep fried (poori)",
                                        "quantity": 0,
                                        "itemPrice": "3.99"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Beverages",
                                "items": [
                                    {
                                        "itemName": "Lassi: Mango - Sweet - Salt",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/0930595b-c520-40fc-9c9d-c4c0ed69cf76_Mango%20lassi.jpeg",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Mango Milk Shake",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Fiji water",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "3.99"
                                    },
                                    {
                                        "itemName": "Juice",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "3.99"
                                    },
                                    {
                                        "itemName": "Masala Tea",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Indian milk tea infused with ginger and cardamom.",
                                        "quantity": 0,
                                        "itemPrice": "4.50"
                                    },
                                    {
                                        "itemName": "TEA",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "3.99"
                                    },
                                    {
                                        "itemName": "Soft drink",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "Coke - coke diet - nestea - ginger ale - pepsi - sprite - cPlus - soda",
                                        "quantity": 0,
                                        "itemPrice": "2.99"
                                    },
                                    {
                                        "itemName": "Small",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "2.99"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Side orders",
                                "items": [
                                    {
                                        "itemName": "RAITA",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "3.50"
                                    },
                                    {
                                        "itemName": "",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "3.00"
                                    },
                                    {
                                        "itemName": "Mint chutney",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "3.00"
                                    },
                                    {
                                        "itemName": "Jeera papadam(2 piece)",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "1.00"
                                    },
                                    {
                                        "itemName": "Homemade yogurt",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "3.00"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Dessert",
                                "items": [
                                    {
                                        "itemName": "Ras Malai",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "4.99"
                                    },
                                    {
                                        "itemName": "Rice pudding",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "2.50"
                                    },
                                    {
                                        "itemName": "Gulab jamun",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "4.50"
                                    }
                                ]
                            },
                            {
                                "categoryName": "Combos",
                                "items": [
                                    {
                                        "itemName": "Vegetarian",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/4f580f21-d0ef-4920-80e6-e546864ebaf7_Combo.jpeg",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "15.99"
                                    },
                                    {
                                        "itemName": "Chicken meat choice",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "17.99"
                                    },
                                    {
                                        "itemName": "Beef meat choice",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "18.99"
                                    },
                                    {
                                        "itemName": "Lamb meat choice",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "Seafood",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "Shrimp",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    },
                                    {
                                        "itemName": "Fish",
                                        "icon": "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f32a1d25-1e59-46f4-b6d8-be2c34e82312_logo.png",
                                        "itemDescription": "",
                                        "quantity": 0,
                                        "itemPrice": "19.99"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    constructor(private router: Router) {
        this.menu = this.menuMasterData['menu'][0];
        this.categories = this.menuMasterData['menu'][0].superCategory[0].category;
        this.host = this.host[this.host.length - 1];
    }

    ngOnInit(): void {
        this.getDiv(0, this.categories[0]);
    }

    cartPage() {
        this.router.navigate(['/cart']);
    }

    addQuantity(item: any) {
        item.quantity = item.quantity + 1;
    }
    subQuantity(item: any) {
        item.quantity = item.quantity < 1 ? 0 : item.quantity - 1;
    }
    addToCart(item: any, category: any) {
        localStorage.setItem('location', this.host)
        this.cart.push({
            categoryName: category.categoryName,
            itemName: item.itemName,
            itemIcon: item.icon,
            itemPrice: item.itemPrice,
            itemQuantity: item.quantity
        })
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    getDiv(index: any, item: any) {
        if (item.items.length) {
            this.product = item;
            this.selectedCategory = index;
            this.router.navigate([`/menu/${this.host}`], { fragment: item.routeName });
        } else {
            this.product = undefined;
            this.selectedCategory = index;
            this.router.navigate([`/menu/${this.host}`]);
        }
    }
}
