/*1. Создайте переменную. Занести в неё фразу “hell burned out”. Отобразить данную строку на экране. Отобразите строку посимвольно. Сгенерируйте новую строку длиной 13 символов, используя для
рандома только символы из исходной строки */

function printPhrase(): void {
    const phrase: string = 'hell burned out';
    console.log('The desired line: ', phrase);

    console.log('Character by character: ');
    for (let i = 0; i < phrase.length; i++) {
        console.log(phrase[i]);
    }

    const newStringLenght: number = 13;
    let newString: string = '';

    for (let i = 0; i < newStringLenght; i++) {
        const randomIndex: number = Math.floor(Math.random() * phrase.length);
        newString += phrase[randomIndex];
    }

    console.log('New string: ', newString);
}

printPhrase();