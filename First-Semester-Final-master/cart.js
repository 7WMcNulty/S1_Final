class Item{
  //Fill in the item class below this comment.
  constructor(n,p,s){
    this.name = n;
    this.price = p;
    this.shipping = s;
  }


}

//Create your three test items below this comment.
var book = new Item("Robin Hood", 9.99, 1);
var movie = new Item("Impractical Jokers", 19.99, 2);
var clothes = new Item("shirt", 14.99, 3);
let l1 = [book];
let l2 = [1];

class Cart{
  //What is the first part of every class? Type it below.
  constructor(l,q){
    this.itemList = l;
    this.itemQuantity = q;
  }


  //Type the instance functions below this comment.
  addItem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }
  totalCart(){
    let total = 0;
    for(i=0; i<this.itemList.length; i++){
      total += (this.itemList[i].price*this.itemQuantity[i]);
    }
    return total;
  }
  subCart(days){
    var subCart = new Cart();
    for(i=0; i<this.itemList.length; i++){
      if(this.itemList[i].shipping == days){
        subCart.itemList.push(this.itemList[i]);
        subCart.itemQuantity.push(this.itemList[i]);
      }
    }
    return subCart;
  }

}
var test = new Cart(l1,l2);
test.addItem(movie,2);
console.log(test.totalCart());
