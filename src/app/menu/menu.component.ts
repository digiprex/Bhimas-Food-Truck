import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public menu: any;
  public css: any = {
    itemNameCss: 'font-weight: bold; font-size: 16px;',
    itemPriceCss: 'font-weight: 500; color: green;',
  };

  public categories: any[] = [];
  public selectedCategory: number = 0;
  public product: any;
  public host: string = 'all';
  public cart: any[] = [];

  public menuMasterData: any = {
    menu: [
      {
        superCategory: [
          {
            category: [
              {
                categoryName: 'House Special Beverages',
                routeName: 'House Special Beverages',
                items: [
                  {
                    itemName: 'Soft Drinks',
                    itemDescription:
                      'Coke / Diet Coke / Dr. Pepper / Sprite / Lemonade',
                    quantity: 1,
                    itemPrice: '2.00',
                  },
                  {
                    itemName: 'Tea',
                    itemDescription: 'Sweet Tea / Unsweet Tea',
                    quantity: 1,
                    itemPrice: '2.00',
                  },
                  {
                    itemName: 'Lassi',
                    itemDescription: 'Sweet Lassi, Salt Lassi, Mango Lassi',
                    quantity: 1,
                    itemPrice: '4.00',
                  },
                  {
                    itemName: 'Homemade Shakes',
                    itemDescription: 'Rose Milk, Masala Chaas (Majjiga)',
                    quantity: 1,
                    itemPrice: '3.00',
                  },
                  {
                    itemName: 'Kids Special',
                    itemDescription:
                      'Pink Lemonade / Chocolate Milk / Kids Juice',
                    quantity: 1,
                    itemPrice: '',
                  },
                ],
              },
              {
                categoryName: 'Appetizers - Vegetarian',
                routeName: 'Appetizers - Vegetarian',
                items: [
                  {
                    itemName: 'Chilly Gobi / Paneer',
                    quantity: 1,
                    itemPrice: '9',
                  },
                  {
                    itemName: 'Manchurian Gobi / Paneer',
                    quantity: 1,
                    itemPrice: '9',
                  },
                  {
                    itemName: '65 Gobi / Paneer',
                    quantity: 1,
                    itemPrice: '9',
                  },
                  {
                    itemName: 'Mixed Veg / Onion / Spinach Pakoras',
                    quantity: 1,
                    itemPrice: '6',
                  },
                  {
                    itemName: 'Cut Mirchi (Spicy) / Potato / Plantain',
                    quantity: 1,
                    itemPrice: '6',
                  },
                  {
                    itemName: 'Veg. Samosa (2 Pieces)',
                    quantity: 1,
                    itemPrice: '4',
                  },
                  {
                    itemName: 'Crispy Pepper Corn Masala',
                    quantity: 1,
                    itemPrice: '9',
                  },
                ],
              },
              {
                categoryName: 'Appetizers - Non Vegetarian',
                routeName: 'Appetizers - Non Vegetarian',
                items: [
                  {
                    itemName: 'Chilly Chicken / Fish / Shrimp',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Manchurian Chicken / Fish / Shrimp',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: '65 Chicken / Fish/ Shrimp',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Sukha Chicken / Goat / Shrimp / Lamb',
                    quantity: 1,
                    itemPrice: '',
                  },
                  {
                    itemName: 'Fry Piece / Kodi Vepudu',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Roasted Chicken Sticks',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Chicken Keema Samosa',
                    quantity: 1,
                    itemPrice: '5',
                  },
                ],
              },
              {
                categoryName: 'Tandoori Sizzlers - Vegetarian',
                routeName: 'Tandoori Sizzlers - Vegetarian',
                items: [
                  {
                    itemName: 'Paneer Tikka',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Mix Veg Grill',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Grilled Potato wedges',
                    quantity: 1,
                    itemPrice: '10',
                  },
                ],
              },
              {
                categoryName: 'Tandoori Sizzlers - Non-Vegetarian',
                routeName: 'Tandoori Sizzlers - Non-Vegetarian',
                items: [
                  {
                    itemName: 'Chicken Tikka',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Tandoori Chicken',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Mix Meat Grill',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Chicken Malai Kabab',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Lamb Shish Kebab',
                    quantity: 1,
                    itemPrice: '14',
                  },
                  {
                    itemName: 'Grilled Pomfret fish',
                    quantity: 1,
                    itemPrice: '14',
                  },
                ],
              },
              {
                categoryName: 'Entrees (Non- Vegetarian) - Chicken',
                routeName: 'Entrees (Non- Vegetarian) - Chicken',
                items: [
                  {
                    itemName: 'Chicken Curry',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Kadai Chicken',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Palak / Mint / Curry Leaf Chicken',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Chicken Korma',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Chicken Vindaloo',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Chicken Tikka Masala',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Butter Chicken',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Chicken Chettinad (Bone in)',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Gongura Chicken (Bone in)',
                    quantity: 1,
                    itemPrice: '12',
                  },
                ],
              },
              {
                categoryName: 'Entrees (Non- Vegetarian) - Fish / Shrimp',
                routeName: 'Entrees (Non- Vegetarian) - Fish / Shrimp',
                items: [
                  {
                    itemName: 'Andhra Style Chepala Pulusu',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Kerala Fish Curry',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Fish / Shrimp Masala',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Fish / Shrimp Chettinad',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Fish / Shrimp Vindaloo',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Fish / Shrimp Tikka Masala',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Palak Fish / Shrimp',
                    quantity: 1,
                    itemPrice: '12',
                  },
                ],
              },
              {
                categoryName: 'Entrees (Non- Vegetarian) - Lamb / Goat',
                routeName: 'Entrees (Non- Vegetarian) - Lamb / Goat',
                items: [
                  {
                    itemName: 'Goat / Lamb Curry',
                    quantity: 1,
                    itemPrice: '13',
                  },
                  {
                    itemName: 'Kadai Gosht Goat / Lamb',
                    quantity: 1,
                    itemPrice: '13',
                  },
                  {
                    itemName: 'Palak Goat / Lamb',
                    quantity: 1,
                    itemPrice: '13',
                  },
                  {
                    itemName: 'Goat / Lamb Korma',
                    quantity: 1,
                    itemPrice: '13',
                  },
                  {
                    itemName: 'Goat / Lamb Vindaloo',
                    quantity: 1,
                    itemPrice: '13',
                  },
                  {
                    itemName: 'Goat / Lamb Chettinad',
                    quantity: 1,
                    itemPrice: '13',
                  },
                  {
                    itemName: 'Gongura Goat / Lamb',
                    quantity: 1,
                    itemPrice: '13',
                  },
                  {
                    itemName: 'Goat / Lamb Tikka Masala',
                    quantity: 1,
                    itemPrice: '13',
                  },
                ],
              },
              {
                categoryName: 'Entrees (Vegetarian)- Dry',
                routeName: 'Entrees (Vegetarian)- Dry',
                items: [
                  {
                    itemName: 'Bhindi Fry (South Indian)',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Tindora Fry (Crispy / Baked)',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Aloo Fry fine Chopped',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Aloo Gobi (Vegan)',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Egg Bhurji',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Paneer Bhurji',
                    quantity: 1,
                    itemPrice: '10',
                  },
                ],
              },
              {
                categoryName: 'Entrees (Vegetarian) - Gravy',
                routeName: 'Entrees (Vegetarian) - Gravy',
                items: [
                  {
                    itemName: 'Dal Makhani',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Dal Tadka (Vegan)',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Malai Kofta',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Malai Paneer',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Palak Aloo / Gobi / Paneer',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Saag Gobi (Cauliflower)',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Kadai Paneer',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Aloo (Potato) / Gobi Mutter',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Egg Masala',
                    quantity: 1,
                    itemPrice: '10',
                  },
                ],
              },
              {
                categoryName: 'Entrees (Vegetarian) - Masala',
                routeName: 'Entrees (Vegetarian) - Masala',
                items: [
                  {
                    itemName: 'Bhindi (Okra) Masala',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Chana Masala',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Mutter Paneer',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Bendakaya pulusu',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Sorakaya pulusu',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Egg Pulusu',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Paneer Butter Masala',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Navratan Korma',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Bagara Baingan',
                    quantity: 1,
                    itemPrice: '10',
                  },
                ],
              },
              {
                categoryName: 'South Indian Tiffins - Steam',
                routeName: 'South Indian Tiffins - Steam',
                items: [
                  {
                    itemName: 'Idly (4pc)',
                    quantity: 1,
                    itemPrice: '6',
                  },
                  {
                    itemName: 'Idly with Sambar (2pc)',
                    quantity: 1,
                    itemPrice: '7',
                  },
                  {
                    itemName: 'Ghee Idly (3pc)',
                    quantity: 1,
                    itemPrice: '7',
                  },
                  {
                    itemName: 'Podi Idly (3pc)',
                    quantity: 1,
                    itemPrice: '6',
                  },
                  {
                    itemName: 'Upma',
                    quantity: 1,
                    itemPrice: '6',
                  },
                ],
              },
              {
                categoryName: 'South Indian Tiffins - Tawa',
                routeName: 'South Indian Tiffins - Tawa',
                items: [
                  {
                    itemName: 'Plain Dosa',
                    quantity: 1,
                    itemPrice: '9',
                  },
                  {
                    itemName: 'Masala / Paneer Dosa',
                    quantity: 1,
                    itemPrice: '12',
                  },
                  {
                    itemName: 'Ghee Karam / Onion / Mysore Dosa',
                    quantity: 1,
                    itemPrice: '11',
                  },
                  {
                    itemName: 'Set Dosa / Uttapam',
                    quantity: 1,
                    itemPrice: '9',
                  },
                  {
                    itemName: 'Plain / Kothu Paratha',
                    quantity: 1,
                    itemPrice: '9',
                  },
                ],
              },
              {
                categoryName: 'South Indian Tiffins - Fry',
                routeName: 'South Indian Tiffins - Fry',
                items: [
                  {
                    itemName: 'Chole Bhature',
                    quantity: 1,
                    itemPrice: '9',
                  },
                  {
                    itemName: 'Poori (3pc)',
                    quantity: 1,
                    itemPrice: '9',
                  },
                  {
                    itemName: 'Medu Vada (4pc)',
                    quantity: 1,
                    itemPrice: '9',
                  },
                  {
                    itemName: 'Mysore Bonda',
                    quantity: 1,
                    itemPrice: '9',
                  },
                  {
                    itemName: 'Plantain Bajji',
                    quantity: 1,
                    itemPrice: '9',
                  },
                ],
              },
              {
                categoryName: 'Rice Specialities - Flavored Rice',
                routeName: 'Rice Specialities - Flavored Rice',
                items: [
                  {
                    itemName: 'Lemon Rice',
                    quantity: 1,
                    itemPrice: '7',
                  },
                  {
                    itemName: 'Sambar Rice',
                    quantity: 1,
                    itemPrice: '7',
                  },
                  {
                    itemName: 'Biryani Rice',
                    quantity: 1,
                    itemPrice: '7',
                  },
                  {
                    itemName: 'Tamarind Rice',
                    quantity: 1,
                    itemPrice: '7',
                  },
                  {
                    itemName: 'Yogurt Rice',
                    quantity: 1,
                    itemPrice: '7',
                  },
                  {
                    itemName: 'Coconut Rice',
                    quantity: 1,
                    itemPrice: '7',
                  },
                ],
              },
              {
                categoryName: 'Rice Specialities - Biryani',
                routeName: 'Rice Specialities - Biryani',
                items: [
                  {
                    itemName: 'Hyderabadi Chicken Dum',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Hyderabadi Goat Dum',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Bezwada Chicken',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Vegetable Dum',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Lamb',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Shrimp',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Egg',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Paneer Biryani',
                    quantity: 1,
                    itemPrice: '10',
                  },
                ],
              },
              {
                categoryName: 'Rice Specialities - Pulao',
                routeName: 'Rice Specialities - Pulao',
                items: [
                  {
                    itemName: 'Fry piece chicken',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Fried Fish',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Goat',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Fried Shrimp',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Raju gari Kodi',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Mix Meat',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Vegetable',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Jackfruit / Minced Paneer',
                    quantity: 1,
                    itemPrice: '10',
                  },
                ],
              },
              {
                categoryName: 'Rice Specialities - Street Style',
                routeName: 'Rice Specialities - Street Style',
                items: [
                  {
                    itemName: 'Veg Fried Rice / Noodle',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Chicken Fried Rice / Noodle',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Egg Fried Rice / Noodle',
                    quantity: 1,
                    itemPrice: '10',
                  },
                  {
                    itemName: 'Shrimp Fried Rice / Noodle',
                    quantity: 1,
                    itemPrice: '10',
                  },
                ],
              },
              {
                categoryName: 'Breads',
                routeName: 'Breads',
                items: [
                  {
                    itemName: 'Naan',
                    quantity: 1,
                    itemPrice: '2',
                  },
                  {
                    itemName: 'Butter Naan',
                    quantity: 1,
                    itemPrice: '2.5',
                  },
                  {
                    itemName: 'Garlic Naan',
                    quantity: 1,
                    itemPrice: '3',
                  },
                  {
                    itemName: 'Roti',
                    quantity: 1,
                    itemPrice: '2',
                  },
                  {
                    itemName: 'Onion Kulcha',
                    quantity: 1,
                    itemPrice: '3',
                  },
                  {
                    itemName: 'Paneer Kulcha',
                    quantity: 1,
                    itemPrice: '3',
                  },
                  {
                    itemName: 'Bullet Naan (Spicy)',
                    quantity: 1,
                    itemPrice: '3',
                  },
                ],
              },
              {
                categoryName: 'Side Orders',
                routeName: 'Side Orders',
                items: [
                  {
                    itemName: 'Steamed Rice',
                    quantity: 1,
                    itemPrice: '2',
                  },
                  {
                    itemName: 'Roasted Papad',
                    quantity: 1,
                    itemPrice: '2',
                  },
                  {
                    itemName: 'Plain Yogurt',
                    quantity: 1,
                    itemPrice: '2',
                  },
                  {
                    itemName: 'Raita',
                    quantity: 1,
                    itemPrice: '2',
                  },
                  {
                    itemName: 'Sambar',
                    quantity: 1,
                    itemPrice: '5',
                  },
                  {
                    itemName: 'Onions and Lemon',
                    quantity: 1,
                    itemPrice: 'Free',
                  },
                  {
                    itemName: 'Mint & Tamarind Sauce Free',
                    quantity: 1,
                    itemPrice: 'Free',
                  },
                ],
              },
              {
                categoryName: 'Desserts',
                routeName: 'Desserts',
                items: [
                  {
                    itemName: 'Rasmalai',
                    quantity: 1,
                    itemPrice: '4',
                  },
                  {
                    itemName: 'Gulab Jamun',
                    quantity: 1,
                    itemPrice: '3',
                  },
                  {
                    itemName: 'Rasgulla',
                    quantity: 1,
                    itemPrice: '3',
                  },
                  {
                    itemName: 'Gajar Halwa',
                    quantity: 1,
                    itemPrice: '3',
                  },
                  {
                    itemName: 'Rice Kheer',
                    quantity: 1,
                    itemPrice: '3',
                  },
                  {
                    itemName: 'Semiya payasam',
                    quantity: 1,
                    itemPrice: '3',
                  },
                  {
                    itemName: 'Kesar Halwa',
                    quantity: 1,
                    itemPrice: '3',
                  },
                ],
              },
              {
                categoryName: 'Speciality Ice-creams',
                routeName: 'Speciality Ice-creams',
                items: [
                  {
                    itemName: 'Falooda Shakes',
                    itemDescription:
                      'Bhadshahi, Malai, Kesar Pista, Chikoo, Mango',
                    quantity: 1,
                    itemPrice: '9.00',
                  },
                  {
                    itemName: 'Ice-cream Shakes',
                    itemDescription:
                      'Chocalate, Chikoo, Mango, Pistachio, Vanilla',
                    quantity: 1,
                    itemPrice: '8.00',
                  },
                  {
                    itemName: 'Ice-cream Desserts',
                    itemDescription:
                      'Gulab Jamun Ice-cream, Rasmalai Ice-cream',
                    quantity: 1,
                    itemPrice: '6.00',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.setTitleAndMetaTags();

    this.menu = this.menuMasterData.menu[0];
    this.categories = this.menu.superCategory[0].category;

    this.product = this.categories[0]; // Show first category by default
    this.selectedCategory = 0;
  }

  setTitleAndMetaTags(): void {
    this.titleService.setTitle('');
    this.metaService.updateTag({
      name: 'description',
      content: '',
    });
  }

  getDiv(index: number, item: any): void {
    this.selectedCategory = index;
    this.product = item;

    if (item.items.length) {
      this.router.navigate([`/menu/${this.host}`], {
        fragment: item.routeName,
      });
    } else {
      this.router.navigate([`/menu/${this.host}`]);
    }
  }

  scrollLeft(): void {
    const container = document.querySelector('.options-tab') as HTMLElement;
    container.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(): void {
    const container = document.querySelector('.options-tab') as HTMLElement;
    container.scrollBy({ left: 200, behavior: 'smooth' });
  }

  addQuantity(item: any): void {
    item.quantity += 1;
  }

  subQuantity(item: any): void {
    item.quantity = Math.max(0, item.quantity - 1);
  }

  addToCart(item: any, category: any): void {
    localStorage.setItem('location', this.host);
    this.cart.push({
      categoryName: category.categoryName,
      routeName: category.routeName,
      itemName: item.itemName,
      itemIcon: item.icon,
      itemPrice: item.itemPrice,
      itemQuantity: item.quantity,
    });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
