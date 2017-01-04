/**
 * Created by monoandcompany on 1/3/17.
 */
var myApp = angular.module('app', []);
myApp.controller('MainController', function () {
    this.deals = [
        {
            product: " Xbox S 1 TB w/ Controller",
            price:  299,
            link: "http://www.fakeurl.com/this_prouct"

        },

        {
            product: " Razor 400 DPI Mouse",
            price: 29,
            link: "http://www.fakeurl.com/this_prouct"

        },

        {
            product: "AK-47 w/ Silencer",
            price: 899,
            link: "http://www.fakeurl.com/this_prouct"



        },

        {
            product: " 2012 Honda Accord Coupe ",
            price: 1799,
            link: "http://www.fakeurl.com/this_prouct"



        },

        {
            product: "Poor Calvins: Dinner for 2",
            price: 29.00,
            link: "http://www.fakeurl.com/this_prouct"

        },

        {
            product: "Jordan 4s Metallic Blue ",
            price: 139,
            link: "http://www.fakeurl.com/this_prouct"

        },

        {
            product: "PS4 Slim 2TB",
            price: 199,
            link: "http://www.fakeurl.com/this_prouct"

        }



    ];


    this.orderByMe = function(x) {
        this.myOrderBy = x;
    }

    /*this.add = function(newtask) {
        console.log('Member '+ newtask.product + " and " + newtask.price + " has been added");
        var task = {};
        task.product = newtask.product;
        task.price = newtask.price;
        this.tasks.push(task);
        newtask.product = "";
        newtask.price = "";
}


    this.delete = function(task) {
        console.log('deleting user:' + task.price);
        for(var i = 0; i < this.tasks.length; i++) {

            if(this.tasks[i].product === task.product) {

                this.tasks.splice(i,1);
                break;
            }
        }
*/



});