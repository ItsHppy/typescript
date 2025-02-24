/*1. Создайте переменную. Занести в неё фразу “hell burned out”. Отобразить данную строку на экране. Отобразите строку посимвольно. Сгенерируйте новую строку длиной 13 символов, используя для
рандома только символы из исходной строки */
function printPhrase() {
    var phrase = 'hell burned out';
    console.log('The desired line: ', phrase);
    console.log('Character by character: ');
    for (var i = 0; i < phrase.length; i++) {
        console.log(phrase[i]);
    }
    var newStringLenght = 13;
    var newString = '';
    for (var i = 0; i < newStringLenght; i++) {
        var randomIndex = Math.floor(Math.random() * phrase.length);
        newString += phrase[randomIndex];
    }
    console.log('New string: ', newString);
}
printPhrase();
