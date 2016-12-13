#The Cart Class

This class is a blueprint for the **cart-object**. The cart-object is a container that stores multiple items-objects in an array and records how many items in a parallel array.

##Instance Variables

As mentioned above, there are two instance variables which are both arrays.
  -  **itemList** // An array that contains pre-made item-objects.
  -  **itemQuantity** // An array that stores how many of each corresponding item you have in the cart.

##Instance functions

You will need to implement three instance functions for this class.
  -  **addItem()**
    +  The function accepts two inputs **i** and **q**
    +  **i** represents a pre-made item.
    +  **q** represents how many Items **i** that you want to buy.
    +  This function will not return anything. It updates the instance variables in the cart-object.

  -  **totalCart()**
    +  The function will not use any inputs as it will talk to the cart directly using the specific object keyword.
    +  You should make a variable named **total**.
    +  For each item-object in the cart-object add it's price to the total also taking into account the item's quantity.
    +  Finally return the total once it is added correctly.

  -  **subCart()**
    +  The function will accept one input **days**. This represents the number of days you are expecting an item to take to ship to you hypothetically.
    +  The function will create a new empty cart-object named **subCart**.
    +  You will loop through the original cart-object and if you find an item that matches the correct shipping time **days**, you will add it to the **subCart**.
    +  Then return the subCart.
