const accountId = 12345
let accountEmail = "rahul@google.com"
var accountPassword = "1721"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ra@ra.com"
accountPassword = "2121"
accountCity = "Delhi"

console.log(accountId);

/* prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
