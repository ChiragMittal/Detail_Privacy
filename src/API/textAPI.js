var FluxActions = require('../Actions/index');
import AES from "crypto-js/aes"
import SHA256 from "crypto-js/sha256"

module.exports = {

  retrieveText: function ( ) {
    var user = [
    //     {
    //   name : 'Chirag' ,
    //   address : 'ndjvsonfoveo' ,
    //   number : '908765643'
    // },
    // {
    //     name : 'Chirdnsjag' ,
    //     address : 'ndjvsonfoveo' ,
    //     number : '908765643'
    //   },
]

    //sleep(5000);
    var a =[]

    for (var val in user){
        let password = 'hello'
        let a1 = AES.encrypt(val.name,password);
        let b1 = AES.encrypt(val.address,password);
        let c1 = AES.encrypt(val.number,password);

        let pass = SHA256(password).toString();
        // console.log(a1)
        // FluxActions.addText('aaa','aaa','aaa');
        // textAPI.retrieveText('aaa','aaa','aaa');
        a.push({
            name : a1 ,
            address : b1 ,
            number : c1,
            password:pass
          })
    }

     
    FluxActions.recieveText(a);
    // FluxActions.aaa()


  },

  addText: function(name, address, number){
    // FluxActions.addText(name, address, number)
  }
}