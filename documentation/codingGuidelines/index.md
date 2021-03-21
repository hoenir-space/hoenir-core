# Coding Guidelines

## Motivation

As to facilitate an easier exchange of code we shall create a set of coding guidelines.
Per usual: This is motivated by personal taste, so take it as is or let's talk about it.

The phrasing here will follow [RFC 2119](https://tools.ietf.org/html/rfc2119).


## Naming

The most difficult problem in prgramming I'm told.

### Wording

The starting point for most naming SHOULD be nouns, unless you end up at actions for controllers, commands, interfaces etc.

* We MUST use english words and we SHOULD prefere british english if in doubt.

### Folders

* We SHOULD use 'full words' in singular and camelCase.
* We SHOULD organise our code by 'functional domain' (= What topic does the code concern? e.g. exchanging data, accounting, people) and  not by 'design patterns' (= What kind of class is it? e.g. controllers, services). This however might be overrules while creating code to solve an actual coding pattern as an 'infrastructure'.

### Classes

* We SHOULD use 'full words' in singular and PascalCase.

### Interfaces

* We SHOULD use 'full words' in singular and PascalCase.
* The first word SHOULD be a (1) verb, then (0+) ajectives and at last (0+) nouns. e.g. 'isSuperGreatClass' or 'wantsData'


