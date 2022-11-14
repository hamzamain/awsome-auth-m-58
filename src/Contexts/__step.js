/* 
Basic Context API Setup
---------------------------------------------------------
1.Context API: Share auth state with other components (across the application);
2.Create an UserContext
3.ContextProvider with passed children
4.ser the UserContext in the index.js file
5.Now to Consume the context: export the AuthContext from UserContext
6.now at Header or anywhere else: use UserContext hook to get the info in the context
*/

/* 
Auth Integration
-----------------------------------------------------------------
1. get auth by useing getAuth from firebase.init.js 
2. create a function named createUser to return createUserWithEmailAndPassword
*/
