/**
 * Created by monoandcompany on 1/3/17.
 */
var myApp = angular.module('app', []);
myApp.controller('MainController', function () {
    this.tasks = [
        {
            product: " Rolondo Smith ",
            price: " Seph "

        },

        {
            product: " Rotha Bun",
            price: "Shinvirus"

        },

        {
            product: "Sarith Khim",
            price: "DeadShotz"



        },

        {
            product: " James Freshwater",
            price: "Silverwolf"



        },

        {
            product: "Jeremy Freshwater",
            price: "Coldfusion"

        },

        {
            product: "Nyong Otudor",
            price: "Daddy Universe"

        },

        {
            product: "Jarret Louden",
            price: "Grief"

        }



    ];

    this.add = function(newtask) {
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


    };

});