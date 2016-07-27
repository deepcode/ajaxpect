# ajaxpect
Ajaxpect is an Aspect-Oriented Programming (AOP) library for Ajax with JavaScript

![logo](https://raw.githubusercontent.com/deepcode/ajaxpect/master/ajaxpect/logo.png)

*This repository is automatically exported from code.google.com/p/ajaxpect*

The project was started back in 2003 as a blog post titled "AOP Fun with JavaScript".
Refactored and branded "Ajaxpect", in 2007 the code was released as a version 0.8 of the project.
The next version (0.9.0) enriched Ajaxpect with regexp-based and function-based pointcut location capabilities.

**Usage example:**

```
// Example business logic

var thing = { makeGreeting: function(text) { return 'Hello ' + text + '!'; } }

alert(thing.makeGreeting('world')); // Hello world!

// Advice definitions

function aopizeAdvice(args) { args[0] = 'AOP ' + args[0]; return args; }

function shoutAdvice(result) { return result.toUpperCase(); }

function ciaoAdvice() { return 'Bye-bye!'; }

// Adding advices

Ajaxpect.addBefore(thing, 'makeGreeting', aopizeAdvice); alert(thing.makeGreeting('world')); // Hello AOP world!

Ajaxpect.addAfter(thing, /make*/, shoutAdvice); alert(thing.makeGreeting('world')); // HELLO AOP WORLD!

var filter = function(name) { return name.indexOf('Greet') != -1 } Ajaxpect.addAround(thing, filter, ciaoAdvice); alert(thing.makeGreeting('world')); // Bye-bye!
```

**Who uses Ajaxpect?**

* Pathfinder http://www.pathf.com/blogs/2007/07/ajaxpect-aop-fo/
* Helma http://helma.org/
* TiddlyDesktop http://www.digitaldimsum.co.uk/tiddlywiki/
