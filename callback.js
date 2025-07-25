function greeting (greetingHandler, name){
    greetingHandler(name);
}


function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

greeting(greetingHandler, 'Mamun');
greeting(greetingHandler, 'Noboni');
greeting(greetEvening, 'Noboni');