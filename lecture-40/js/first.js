(function (window) {
    var person  = {};
    var state = {
        firstName: "",
        lastName: "",
        age: 0,
        people: []
    };

    var octopus = {
        setfn: (fn) => {
            state.firstName = fn;
        },
        getfn: () => {
            return state.lastName;
        },
        setln: (ln) => {
            state.lastName = ln;
        },
        getln: () => {
            return state.lastName;
        },
        setAge: (age) => {
            state.age = age;
        },
        getAge: () => {
            return state.age;
        },
        addPerson: (p) => {
            state.people.push(p);
        },
        removePerson:(index)=>{
            
        },
            
    };
    person = window.person
    var company = new Object();
    company.name = "Facebook";
    console.log(company);
    

}(window));