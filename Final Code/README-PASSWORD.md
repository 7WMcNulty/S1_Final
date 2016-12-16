#The Password Class

This class is a blueprint for a password-object that has a few instance variables, instance methods, and a super important static function.

##Instance Variables
The password-object has two instance variables: **publickey** and **privatekey**.
  -  **publickey** is a string of any kind of symbol or character.
  -  **privatekey** is a secret string of numbers "xxxx-xxxx-xxxx"

##Instance Functions
The password-object has two instance functions that will check to make sure that each password key fits the proper criteria.
  -  **validPublicKey()**
    +  The function does not accept any inputs.
    +  Will conditionally check to see if the string is between 8 and 25 characters long inclusively.
    +  Based on the length of the publickey the function should return the booleans true or false.
  -  **validPrivateKey()**
    +  The function does not accept any input.
    +  Will conditionally check if the dashes are in the correct location
    +  Will conditionally check to see if the three groups of four characters are actually numbers.
    +  If the privatekey passes both criteria, then return true, otherwise return false.

##Static Functions
The password-object has one static function.

-  **makePrivateKey()**
  +  The function does not accept any inputs.
  +  Create an empty string variable named **key**
  +  Create a variable named **limit** and assign it the value 14.
  +  Use a for-loop or a while-loop to build your random 12 digit number with two dashes. Pay close attention to the indices.
