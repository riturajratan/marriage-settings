'use strict';

/**
 * @ngdoc function
 * @name marriageSettingsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marriageSettingsApp
 */
angular.module('marriageSettingsApp')
  .factory('Orders', function Order($log) {
    
    //list of order which we have save by users
    var orderCollection=[
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

			},
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
		    						'name':'Rituraj',
		    						'quantity':2,
		    						'options':['paneer pakoda','allo pakoda'],
		    						'example':'test'
		    					},{
		    						'name':'Nishant',
		    						'quantity':2,
		    						'options':['paneer pakoda','allo pakoda'],
		    						'example':'test'
		    					}


		  				]

			}
	];

    return {
      getorders: function() {
        return orderCollection;
      },
      removeOrder:function(index){
      	$log.info(index);
      	 orderCollection.splice(index,1);
      }
    };

  }); 

angular.module('marriageSettingsApp')
  .controller('MainCtrl', function ($scope,$modal,Orders) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //list of order which we have save by users
    $scope.orderCollection=Orders.getorders();
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
  
	 // on click of delete button open popup for confirmation
	  
	  $scope.removeItem = function (item,key) {

	    var modalInstance = $modal.open({
	      templateUrl: 'deleteOrder.html',
	      controller: 'ModaldeleteOrderCtrl',
	      scope:$scope,
	      backdrop: 'static',	      resolve: {
	        items: function(){
	        return 	item;
	        },
	        key:function(){

	        	return key;
	        }
	      }
	  
	  });
  };

	 // on click of delete button open popup for confirmation
	  
	  $scope.addItem = function () {

	    var modalInstance = $modal.open({
	      templateUrl: 'addOrder.html',
	      controller: 'ModaldeleteOrderCtrl',
	      scope:$scope,
	      size:'lg',
	      backdrop: 'static',	
        resolve: {
	        items:'',
	        key:''
	      }
	  
	  });
  };

});


angular.module('marriageSettingsApp')
.controller('ModaldeleteOrderCtrl', function ($scope, $modalInstance, items ,key,Orders) {

  $scope.item = items;

  
  $scope.delete = function () {
  	Orders.removeOrder(key);
  	// $scope.orderCollection[key];
  	$scope.orderCollection=Orders.getorders();
    $modalInstance.close($scope.item);
  };

  $scope.cancel = function () {
     $modalInstance.dismiss('cancel');
  };

});


