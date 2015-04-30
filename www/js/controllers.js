angular.module('cavamenu.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.categories = ['Snacks', 'Fruit', 'Vegetables', 'Meats', 'Breads','Drinks']
})

.controller('DishesCtrl', function($scope, $stateParams) {
  categories = ['Snacks', 'Fruit', 'Vegetables', 'Meats', 'Breads','Drinks'];

  dishes = [
    [
	
    "icecream",
      "crisps",
      "chocolate", 
	  "toffee",
      "cake",
    ],
    [
      "Apples",
      "Oranges",
      "Bananas",
      "Grapes",
      "Melon",
      "Kiwi",
      "Raisins",
      "Watermelon",
      "Strawberry",
   ],
   [
      "Potatoes",
      "Mushrooms",
      "Peppers",
      "Parsnips",
      "Onions",
      "Spinach",
      "Beetroot",
      "lentils",
      "Carrots",
      "Beanshoots",
      "Beans",
      "Peas",
      
    ],
    [
      "Mince meat",
      "Beef burgers",
      "Chicken Breast",
      "Chicken Leg",
      "Sirloin Steak",
      "Chicken nuggets",
      "Rashers",
      "Ham",
      "Pork Fillet",
      "Chorizo",
      "MeatBalls",
      "Sausages",
      ],
	  [
	  "Brown Bread",
	  "Wholemeal Bread",
	  "Ciabatta",
	  "White Slice Bread",
	  "Tortilla Wraps",
	  "Pitta Pockets",
	  ],
	  [
	  "Bottled Beer",
	  "Glass of Milk(full fat)",
	  "Orange Juice",
	  "Coca Cola",
	  "Coffee",
	  "Tea",
	  "Small Glass of Wine",
   ]
  ];
  
 $scope.category = categories[$stateParams.dishesId];
  $scope.dishes = dishes[$stateParams.dishesId];

});

