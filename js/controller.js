angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        
    })
    .controller('AboutController', function($scope) {
        // Image Carousel
        var carousel_images = [
            "images/Carousel-Images/electrician-1.jpg",
            "images/Carousel-Images/electrician-2.jpg",
            "images/Carousel-Images/electrician-3.jpg"
        ]

        var num = 0
        
        $scope.next = function next() {
            var slider = document.getElementById("slider");
            num++;
            if(num >= carousel_images.length) {
                num = 0
            }
            slider.src = carousel_images[num];
        };
        
        $scope.prev = function prev() {
            var slider = document.getElementById("slider");
            num--;
            if(num < 0) {
                num = carousel_images.length-1
            }
            slider.src = carousel_images[num];
        };
    })

    .controller('PortfolioController', function($scope) {
        // modals
        //modal variables
        var designModal = document.getElementById('modalDesign');
        var installationModal = document.getElementById('installationModal')
        var repairModal = document.getElementById('repairModal')

        //click functions
        $scope.design_modal = function() {
            designModal.style.display = "block";
        }
        $scope.installation_modal = function() {
            installationModal.style.display = "block";
        }
        $scope.repair_modal = function() {
            repairModal.style.display = "block";
        }

        //close functions

        $scope.close_modal = function () {
            designModal.style.display = "none",
            installationModal.style.display = "none",
            repairModal.style.display = "none"
        };
    })
    
    .controller('ContactController', function($scope) {

    
    });