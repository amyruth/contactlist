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
    var match = 0;
        var search = prompt("Enter a name to search");
        
            for(var each in friends){
                if(friends[each].firstName === search){
                    
                    console.log(friends[each].firstName);
                    console.log(friends[each].lastName);
                    console.log(friends[each].number);
                  
                    for(var i = 0;i<friends[each].address.length;i++){
                        addr += friends[each].address[i] + '\n';
                    }
                    console.log(addr);
                    match++;
                    return match +" match found.";
                }
            }
            if(match == 0){
                return "No match found.";
            }
} /*end function*/

searchName();
/*6/26/2014 added a throw statement to indicate no match found.*/
/*6/27/2014 never mind the throw; removed*/
/*7/12/2014 FINALLY IT WORKS! With a match variable to keep count and use as a condition*/