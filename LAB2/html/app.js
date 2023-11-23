    var num = 10;
    let name = "Sailenzer";
    age = 20;

    fruit = ["banana","apple","mango"];
    obj ={name: "Kamonthep",age:30,tel:"065-2969800"};

    data = {adress:["180/9","Buriram","BBBBBarcelona"],name: "FRIEND"};

    console.log(fruit[1]);
    console.log(obj.tel);
    console.log(data.adress[2]);

    document.getElementById("msg").innerHTML = data.adress[2];

    let longtext = data.name + " : " + fruit[0];
    longtext = `${data.name}: 
               ${fruit[1]}`;

        $(function(){
            $("#msg").html(longtext);
        }); //jQuery ready