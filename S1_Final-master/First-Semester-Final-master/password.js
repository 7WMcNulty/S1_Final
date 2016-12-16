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
    let valid = 9;
    for(var i=0; i<this.privatekey.length; i++){
      let temp = Number(this.privatekey.charAt(i));
      if(this.privatekey[4] !== "-"||this.privatekey[9] !== "-"){
        valid = false;
        return valid;
      }
      else if(Number.isNaN(temp)){
        valid = false;
        return valid;
      }
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
var test = new Password("1234567812345678123456789","8888-8888-8888");
console.log(test.validPrivateKey());
