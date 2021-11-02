var dict ;
dict=
{
    "firstname":"AAA",
    "lastname":"XYZ",
    "USN":      8,
    "Address":
    {
        "House_No":11,
        "Street":"1st cross",
        "city":"Hubli",
        "pin_No":580031
    },
    "course":"NodeJs",
    "mark":45

};
var key;

for( key in dict) 
{
    console.log(key,":",dict[key]);
}