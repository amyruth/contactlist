/*Contact List w/Search Prompt*/

var friends = {};
friends.jeff = {
    firstName:'Jeff',
    lastName: 'Jones',
    number: '(458) 444-5585',
    address: ['953 Kelton Ave', 'Columbus', 'OH', '43206']
    };
friends.bill = {
    firstName: 'Bill',
    lastName: 'Smith',
    number: '(202) 585-5846',
    address: ['One Easton Way', 'Columbus', 'OH', '43230']
    };
friends.steve = {
    firstName: 'Steve',
    lastName: 'Williams',
    number: '(845) 555-8855',
    address: ['1200 Florida Ave', 'Washington', 'DC', '12345']
    };

/*var list = function(friends){
    for(var key in friends){
        console.log(key); 
    }
};*/

function searchName(){
    var addr = "";
    
        var search = prompt("Enter a name to search");
        for(var each in friends){
            if(friends[each].firstName === search){
                console.log(friends[each].firstName);
                console.log(friends[each].lastName);
                console.log(friends[each].number);
               /* prints each address item on its own line*/
                for(var i = 0;i<friends[each].address.length;i++){
                    addr += friends[each].address[i] + '\n';
                }
                console.log(addr);
            }else{
                throw "No match found.";
            }
        }
}

searchName();
/*6/26/2014 added a throw statement to indicate no match found.*/
/*the for loop prints no match found b/c if the first entry it checks doesn't match, it prints out not match found.
how to keep that from happening?*/

/*This code prints out no match correctly but gives no match when a result is found

var search = prompt("Enter a name to search");
    for(var each in friends){
        if(friends[each].firstName === search){
            console.log(friends[each].firstName);
            console.log(friends[each].lastName);
            console.log(friends[each].number);
         }else{
            	console.log("no match");
            }
    }*/
