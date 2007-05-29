// Example business logic

var thing = {
  makeGreeting: function(text) {
    return 'Hello ' + text + '!';
  }
}

alert(thing.makeGreeting('world')); // Hello world!


// Advice definitions

function aopizeAdvice(args) {
    args[0] = 'AOP ' + args[0];
    return args;
}

function shoutAdvice(result) {
    return result.toUpperCase();
}

function ciaoAdvice() {
    return 'Bye-bye!';
}


// Adding advices

Ajaxpect.addBefore(thing, 'makeGreeting', aopizeAdvice);
alert(thing.makeGreeting('world')); // Hello AOP world!

Ajaxpect.addAfter(thing, 'makeGreeting', shoutAdvice);
alert(thing.makeGreeting('world')); // HELLO AOP WORLD!

Ajaxpect.addAround(thing, 'makeGreeting', ciaoAdvice);
alert(thing.makeGreeting('world')); // Bye-bye!
