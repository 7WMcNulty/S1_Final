class Password{
  //The first part of the class.
  constructor(pub,priv){
    this.publickey = pub;
    this.privatekey = priv;
  }


  //Instance functions below this comment.
  validPublicKey(){
    if(this.publickey.length >=8 && this.publickey.length <= 25){
      return true;
    }
    else{
      return false;
    }
  }
  validPrivateKey(){
    if(this.privatekey[4] !== "-"||this.privatekey[9] !== "-"){
      return false;
    }
    else if(Number.isNaN(Number(this.privatekey.substring(0,4)))){
      return false;
    }
    else if(Number.isNaN(Number(this.privatekey.substring(5,9)))){
      return false;
    }
    else if(Number.isNaN(Number(this.privatekey.substring(10,14)))){
      return false;
    }
    else{
      return true;
    }
  }
  //Static function below this comment.
  static makePrivateKey(){
    var key = "";
    var limit = 14;
    for(let i=0; i<limit; i++){
      if(i==4 || i==9){
        key = key+"-";
      }
      else{
        let temp = Math.random();
        temp = temp*10;
        temp = Math.floor(temp);
        key = key+temp;
      }
    }
    return key;
  }
}
