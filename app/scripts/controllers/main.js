'use strict';

/**
 * @ngdoc function
 * @name marriageSettingsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marriageSettingsApp
 */
angular.module('marriageSettingsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //list of order which we have save by users
    $scope.orderCollection=[
			{
				'name':'rituraj',
				'type':'Veg',
				'shift':['Morning','Evening'],
				'min_people':100,
				'max_people':200,
		    'quoted_price':100000,
		    'min_price':10000,
		    'menu':[
		    					{
		    						'name':'name',
		    						'quantity':2,
		    						'options':['paneer pakoda','allo pakoda'],
		    						'example':'test'
		    					},{
		    						'name':'name',
		    						'quantity':2,
		    						'options':['paneer pakoda','allo pakoda'],
		    						'example':'test'
		    					}


		  				]

			}
	];

    //type of menus 
    
    $scope.menusType=[
	    '	Welcome Drink',
	    '	Starter',
	    '	Salad',
	    '	Breakfast',
	    '	Main Course',
	    '	Dal',
	    '	Rice',
	    '	Raitha',
	    '	Keser'
    ];

    // type of food
    
    $scope.foodType=[
			'Veg',
			'Non Veg',
			'Jainokey'
			];

		// type of shift		
    
    $scope.shiftType=[
    	'Morning',
    	'Evening',
    	'Night'
    	];
  
  });
