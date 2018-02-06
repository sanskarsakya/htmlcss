var personService = new PersonService();

function $(key) {
    return document.getElementById(key);
}

var id = $('id');
var firstname = $('firstname');
var lastname = $('lastname');

var btnsave = document.getElementById('btn-save');


btnsave.onclick = function () {
    if (id.value == "" || firstname.value == "" || lastname.value == "") {
        console.log("all fields required");
    } else {
        var person = new Person();
        person.id = id.value;;
        person.firstname = firstname.value;;
        person.lastname = lastname.value;;

        personService.insert(person);

        console.log(personService.getAll());

        clear();


    }


    return false;
}


function clear() {
    id.value = "";
    firstname.value = "";
    lastname.value = "";
}