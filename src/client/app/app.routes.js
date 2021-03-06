"use strict";

(function () {
    angular
        .module("argo")
        .config(config)
        .run(setup);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("default", {
                abstract: true,
                url: "/",
                templateUrl: "app/layout/default.html",
                controller: "Default",
                controllerAs: "default"
            })
            .state("default.subs", {
                views: {
                    "header": {
                        templateUrl: "app/header/header.html",
                        controller: "Header",
                        controllerAs: "vm"
                    },
                    "trades": {
                        templateUrl: "app/trades/trades.html",
                        controller: "Trades",
                        controllerAs: "vm"
                    },
                    "orders": {
                        templateUrl: "app/orders/orders.html",
                        controller: "Orders",
                        controllerAs: "vm"
                    },
                    "positions": {
                        templateUrl: "app/positions/positions.html",
                        controller: "Positions",
                        controllerAs: "vm"
                    },
                    "exposure": {
                        templateUrl: "app/exposure/exposure.html",
                        controller: "Exposure",
                        controllerAs: "vm"
                    },
                    "activity": {
                        templateUrl: "app/activity/activity.html",
                        controller: "Activity",
                        controllerAs: "vm"
                    },
                    "news": {
                        templateUrl: "app/news/news.html",
                        controller: "News",
                        controllerAs: "vm"
                    },
                    "account": {
                        templateUrl: "app/account/account.html",
                        controller: "Account",
                        controllerAs: "vm"
                    },
                    "quotes": {
                        templateUrl: "app/quotes/quotes.html",
                        controller: "Quotes",
                        controllerAs: "vm"
                    },
                    "charts": {
                        templateUrl: "app/charts/charts.html",
                        controller: "Charts",
                        controllerAs: "vm"
                    }
                }
            });

        $urlRouterProvider.otherwise("/");
    }

    setup.$inject = ["$state"];
    function setup($state) {
        $state.transitionTo("default.subs");
    }

}());
