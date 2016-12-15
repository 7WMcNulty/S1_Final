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
    for(var i=0; i<this.privatekey.length; i++){
      let temp = Number(this.privatekey.charAt(i));
      if(i==4 || i==9){
        if(temp !== "-"){
          return false;
        }
      }
      else if(Number.isNaN(temp)){
        console.log(this.privatekey.charAt(i));
        return false;
      }
    }
/*    if(this.privatekey.charAt(4) == "-" && this.privatekey.charAt(9) == "-"){
      let valid = true;
      for(var i=0; i<this.privatekey.length; i++){
        if(i!==4 && i!==9){
          if(Number.isNaN(this.privatekey.charAt(i))){
            let valid = false;
          }
        }
      }
      return valid;
    }
    else{
      return false;
    }*/
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
var test = new Password("1234567812345678123456789","8q88-8888-8888");
console.log(test.validPrivateKey());
