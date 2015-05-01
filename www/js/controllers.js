
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
      "Banana",
      "Grapes",
      
   ],
   [
      "Potatoes",
      "Mushrooms",
      "Peppers",
      "Parsnips",
      "Onions",
      
      
    ],
    [
      "Mince meat",
      "Beef burgers",
      "Chicken Breast",
      
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

