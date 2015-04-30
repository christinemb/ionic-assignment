angular.module('cavamenu.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.categories = ['Snacks', 'Fruit', 'Vegetables', 'Meats', 'Breads']
})

.controller('DishesCtrl', function($scope, $stateParams) {
  categories = ['Snacks', 'Fruit', 'Vegetables', 'Meats', 'Breads'];

  dishes = [
    [
      "almonds",
      "crisps",
      "chocolate", 
	  "toffee,",
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
   ]
  ];
  
 $scope.category = categories[$stateParams.dishesId];
  $scope.dishes = dishes[$stateParams.dishesId];

});

