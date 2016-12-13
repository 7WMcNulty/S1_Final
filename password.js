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
    if(this.privatekey.charAt(4) == "-" && this.privatekey.charAt(9) == "-"){
      if(this.privatekey){

      }
    }
  }

  //Static function below this comment.
}
var test = new Password("1234567812345678123456789","8888-8888-8888");
console.log(test.validPublicKey());
