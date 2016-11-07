var postApp = angular.module('postApp', []);
postApp.controller('postController', function($scope, $http)
{
	$scope.comment = {};
	$scope.submitForm = function() {
		if ($scope.issueHash == undefined) {
			$scope.status = 'Enter a number of issue!';
			return;
		}
		if (!$scope.comment.content) {
			$scope.status = 'Enter a comment!';
			return;
		}
		$http({
			method	:	'POST',
			url	:	'/api/issues/' + $scope.issueHash + '/comments',
			data	:	$scope.comment
		})
			.success(function() {
				$scope.status = 'Comment posted.';
			})
			.error(function() {
				$scope.status = 'Comment didn\'t post.';
			});
	};
});
