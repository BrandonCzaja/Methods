# String Constructor:

The String constructor is primarily used as a function to convert the given parameter to a primitive string data type. When combined with the keyword new, it can also be used to create a new String object.

### Example:

    new String(My string)
    outputs: 'My string'

## String Function vs. String Constructor

String Function create a string, while String Constructor creates a string object.

    typeof String('Hello world'); // string
    typeof new String('Hello world'); //object
