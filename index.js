


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


// function createLoginTracker(userInfo){
//     //example 
//     //const userInfo={
//     // username:"Ahmed",
//     // password: "12345"}

//        //attempt counter
//     let attemptCount =0;
     
//      //Then we are creating nested arrow function 
//      // the function receive the password the user tries
//      const login=(passwordAttempt)=>{
//       attemptCount++;
//       //so First call  → attemptCount = 1
//       // Second call → attemptCount = 2
//       // Third call  → attemptCount = 3
//       // Fourth call → attemptCount = 4


// //     Check whether the account is already locked

// // You need to check whether the user has gone beyond 3 attempts.
//     if(attemptCount > 3){
//       return "Account locked due to too many failed login attempts"
//     }
//     if(passwordAttemp===userInfo.passwprd){
//       return "Login successful";
//       //otherwise the login failed
//     }
//     return 'Attempt &{attemptCount}: Login failed';

//      };
//       //return the nested function 
//         return login;
//         module.exports={
//           createloginTracker
//         }
// }

// HERE IS A CODE AS ONE BLOCK
  function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const login = (passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    return `Attempt ${attemptCount}: Login failed`;
  };

  return login;
}

module.exports = {
  createLoginTracker
};
