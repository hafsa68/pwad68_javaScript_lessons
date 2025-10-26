class FormData{
    constructor(name,address,phone){
        this.name = name;
        this.address =address;
        this.phone = phone;



    }
    DataDisplay(){
       let output = "<h1> Student Form </h1>" 
       output+= "Name:" + this.name + "<br>";
       output += "address:" + this.address + "<br>";
       output += "Phone:" + this.phone + "<br>";
       return output;
    }


}