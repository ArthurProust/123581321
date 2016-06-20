angular.module('myApp.view2', ['ngRoute'])


.controller('View2Ctrl', function($scope, $log, $http, $filter) {
    
                $log.info("in controller");
        
$http.get('view2/aeroports.json').success(function(data) {
   $scope.airportsDeparture = data;
});
$http.get('view2/aeroportsDestination.json').success(function(data) {
   $scope.airportsDestination = data;
});
    
     
         
            $scope.getFlights = function () {
                $log.info($scope.flightOrigin)
                $log.info($scope.destination)
               
                var datefilter = $filter('date'),
                    formattedStartDate = datefilter($scope.startDate, 'yyyy-MM-dd');
                    formattedEndDate = datefilter($scope.endDate, 'yyyy-MM-dd');        
                $log.info("in get flights");
                var req = {
                    method: 'GET',

                    //url: 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search/http://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?origin=IST&destination=BOS&departure_date=2016-10-15&return_date=2016-10-21&number_of_results=3&apikey=AFCdWQDcl56LDbXWi0Bc0BEAXUPDHFEC',
                    url: 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search/http://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?origin='+ $scope.flightOrigin +'&destination='+$scope.destination +'&departure_date='+ formattedStartDate+'&return_date='+ formattedEndDate +'&number_of_results=3&apikey=AFCdWQDcl56LDbXWi0Bc0BEAXUPDHFEC',

                    headers: {
                        'Content-Type': undefined
                    },
                    //data: {'apikey':'AFCdWQDcl56LDbXWi0Bc0BEAXUPDHFEC', 'origin':'BOS', 'destination':'LON', 'departure_date':'2016-06-25', 'number_of_results':5}
                }

                $http(req).then(function (response) {
                    $log.info(response);
                    $scope.results = response.data.results;
                    $scope.outbounds=[]
                    $scope.inbounds=[]
                    for (var result in $scope.results){
                    $scope.outbounds.push(result.itineraries[0].outbound)
                    $scope.inbounds.push(result.itineraries[0].inbound)
                }
                
                
                angular.forEach($scope.results, function(value, key) {
  this.push(key + ': ' + value);
}, log);
                $log.info($scope.inbounds);

                }, function () {
                    $log.info('Failure getting flights');
                });


            }
});