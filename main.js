var guestarray = [];
function submit() {
    submittedname = document.getElementById("textinput1").value;
    var newname = "<br>" + submittedname;
    guestarray.push(newname);
    console.log(submittedname);
}

function lookatlist() {
    document.getElementById("guestlist").innerHTML = guestarray;
    console.log(guestarray);
}

function sort() {
    guestarray.sort();
    document.getElementById("guestlist").innerHTML = guestarray;
    console.log(guestarray);
}

function lengthoflist() {
    var listlength = guestarray.length;
    document.getElementById("guestlistlength").innerHTML = listlength;
    console.log(listlength);
}

function search() 
{
    var a = document.getElementById("textinputtwo").value;
    var b = "<br>" + a;
    var found = 0;
    var i 
    for (i = 0; i < guestarray.length; i++) 
        {
            if (b == guestarray[i]) {
                found = found + 1;
            }
        }
    document.getElementById("searchedresults").innerHTML = "Found " + found;
    console.log("Found " + found + " with name " + a);
}