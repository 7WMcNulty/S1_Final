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
    for(let i=0; i<this.itemList.length; i++){
      total += (this.itemList[i].price*this.itemQuantity[i]);
    }
    return total;
  }
  subCart(days){
    var subCart = new Cart([],[]);
    for(let i=0; i<this.itemList.length; i++){
      if(this.itemList[i].shipping == days){
        subCart.itemList.push(this.itemList[i]);
        subCart.itemQuantity.push(this.itemQuantity[i]);
      }
    }
    return subCart;
  }

}
