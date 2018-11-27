/*
 * Exercise 1
 */

function ucfirst( word ) {

    if( typeof word !== "string" ){
        return '';
    }

    return word[0].toUpperCase() + word.substring(1);
}

/*
console.log("Exercise 1 Ucfirst : with string : ");
console.log( ucfirst( "toto") );
console.log("Exercise 1 Ucfirst : with number : ");
console.log( ucfirst( 1 ) );
*/


function capitalize( sentence, isCamelCase ) {

    var finalSentence = '';
    var words ='';

    if( typeof sentence !== "string" ){
        return '';
    }
    else{
        words = sentence.split(' ');
    }


    for( var i = 0 ; i < words.length; i++ ){
        if( typeof words[i] !== "string" ){
            return finalSentence;
        }
        else{

            if( isCamelCase ){
                finalSentence += ucfirst( words[i] );
            }
            else{
                if( i === ( words.length ) - 1 ){
                    finalSentence += ucfirst( words[i] );
                }
                else{
                    finalSentence += ucfirst( words[i] ) + ' ';
                }
            }

        }
    }

    return finalSentence;
}
/*
Capitalize
 */
/*
console.log("Exercise 1 Capitalize : with string : ");
console.log( capitalize( "toto est une tapette", false) );
console.log("Exercise 1 Capitalize : with number : ");
console.log( capitalize( 1 , false ) );
*/

/*
CamelCase
 */
/*console.log("Exercise 1 CamelCase : with string : ");
console.log( capitalize( "toto est une tapette", true) );
console.log("Exercise 1 CamelCase : with number : ");
console.log( capitalize( 1 , true ) );*/


function snake_case( sentence ) {
    if( typeof sentence !== "string" ){
        return '';
    }

    return sentence.split(' ').join('_');
}

/*console.log("Exercise 1 snake_case : with string : ");
console.log( snakeCase( "toto est une tapette") );
console.log("Exercise 1 snake_case : with number : ");
console.log( snakeCase( 1 ) );*/

function leet( word ) {
    var crypted = {
        "A": 4,
        "E": 3,
        "I": 1,
        "O": 0,
        "U": '(_)',
        "Y": 7
    };

    if( typeof word !== "string" ){
        return '';
    }

    for( var i = 0; i < word.length; i++ ){
        var index = word[i].toUpperCase();
        if( crypted[index] !== undefined ){
           word = word.replace(word[i], crypted[index] );
        }
    }

    return word;
}

/*console.log("Exercise 1 Leet : with string : ");
console.log( leet( "toto est une tapette") );
console.log("Exercise 1 leet : with number : ");
console.log( leet( 1 ) );*/


function prop_access() {
    
}

function yoda( sentence ) {

    if( typeof sentence !== "string" ){
        return '';
    }

    var words = sentence.split(" ");
    var final = '';
    var lengh = 0;
    lengh = ( words.length ) - 1;


    for( var i = lengh; i >= 0  ; i -- ){

        if( i == 0 ){
            final += words[i];
        }
        else{
            final += words[i] + ' ';
        }

    }

    return final;
}

console.log("Exercise 1 Yoda : with string : ");
console.log( yoda( "toto est une tapette") );
console.log("Exercise 1 Yoda : with number : ");
console.log( yoda( 1 ) );

function verlan( sentence ) {


}



function vig() {
    
}