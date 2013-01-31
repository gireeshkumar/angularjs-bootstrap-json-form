//Project Questions / options etc
var myapp = angular.module('myApp', []);
myapp.directive('select2', function($rootScope, $compile){
	return {
		restrict: 'A',			
		compile: function compile(tElement, tAttrs, transclude) {
			return {
				post: function postLink($scope, iElement, iAttrs, controller) {


					
					$(iElement).attr("name",$scope.quest.name);
					var valkey = "result."+$scope.quest.name;

					 $scope.$watch(valkey, function ngBindWatchAction(value) {
					    $(iElement).val(value == undefined ? '' : value);
					  });


					if(typeof $scope.quest.options !== "undefined" && $scope.quest.options != null){

						setTimeout(function(){
							var opts = {tags:$scope.quest.options, tokenSeparators: [",", ";"]};

							if(typeof $scope.quest.maximumSelectionSize !== "undefined" && $scope.quest.maximumSelectionSize !== null){
								opts.maximumSelectionSize = $scope.quest.maximumSelectionSize;
							}

							
							$(iElement).select2(opts);

							if(typeof $scope.quest.help !== "undefined" && $scope.quest.help != null){
								var inin = iElement.parent().find("ul.select2-choices");

								$(inin).tooltip({html:false, placement:'right',title:$scope.quest.help,trigger:'hover'});

							}

						}, 100);

					}else{
						if(typeof $scope.quest.help !== "undefined" && $scope.quest.help != null){
							$(iElement).tooltip({html:false, placement:'right'});
						}
					}

					 
					$(iElement).change(function(){
						$scope.$apply(function(){
							var inputVal = $(iElement).val();
							inputVal = $.trim(inputVal);
							if(typeof inputVal === "undefined" || inputVal == null || inputVal.length == 0){
								delete $scope.result[$scope.quest.name];
							}else{
								$scope.result[$scope.quest.name] = inputVal;
							}
							
							var count = 0;
							for (var k in $scope.result) {
							    if ($scope.result.hasOwnProperty(k)) {
							       ++count;
							    }
							}

							$rootScope.completedCount = count;
							$rootScope.progress = "10%";
						});
					});

				}
			};
		}
	};
});





function ApplicationController($scope){

	$scope.getCompletedCount = function(){
		var count = 0;
		for (var k in $scope.result) {
		    if ($scope.result.hasOwnProperty(k)) {
		       ++count;
		    }
		}
		return count;
	};
	$scope.getProgress = function(){
		return Math.round( ($scope.getCompletedCount()*100)/$scope.totalQuestions );
	};

	$scope.handleBreadcrumb = function(idx){
		$scope.currentGroup = $scope.groups[idx];
		$scope.curPage = idx;
	};


	$scope.result = {};


	$scope.groups = questionDataGroups;


	var totalQuestions = 0;
	$.each(questionDataGroups, function(idx, grp){
		$.each(grp.groups, function(idx, qgrp){
			totalQuestions += ((typeof qgrp === "undefined" || typeof qgrp.questions === "undefined") ? 0 : qgrp.questions.length);
		});
	});

	$scope.totalQuestions = totalQuestions;
	$scope.completedCount = 0;

	$scope.currentGroup = projDetails;
	$scope.curPage = 0;

	$scope.progress = "0%";


	$scope.resetData = function(){
		$scope.result = {};
	}
	$scope.sendEmail = function(){
	

		var emailAddress = "Gireesh Kumar Gopalakrishnan Nair (UST, IND) <GireeshKumar.GopalakrishnanNair@ust-global.com>"
	    var subject = "Project Profile :: "+$scope.result.name;
	   
	    location.href = 'mailto:' + encodeURIComponent(emailAddress) +
	                    '?subject=' + encodeURIComponent(subject) +
	                    '&body=' + encodeURIComponent(JSON.stringify($scope.result));

	}
}