// *************************All Questions*******************
// ******************Uncomment to see the output*************
// *************************Qno 1*******************
// Write a ts program to find length of a string.
// var a:string|null=prompt("Enter any string: ");
// var b:string=String(a);
// console.log("So the length is: ",b.length);
// *************************Qno 2*******************
// Write a ts program to copy one string to another string.
// var str:string="Ali Ahmad";
// var copyStr:string=str;
// console.log(copyStr);
// *************************Qno 3*******************
// Write a ts program to concatenate two strings.
// var strOne:string="Ali ";
// var strTwo:string="Ahmad";
// var concatStr:string=strOne.concat(strTwo);
// console.log(concatStr);
// *************************Qno 4*******************
// Write a ts program to compare two strings.
// var strOne: string = "Ali";
// var strTwo: string = "Ahmad";
// if (strOne === strTwo) {
//     console.log("String are same.");
// }
// else {
//     console.log("String are not same.");
// }
// *************************Qno 5*******************
// Write a ts program to convert lowercase string to uppercase.
// var a:string="Usman";
// console.log("So after Conversion to uppercase: ",a.toUpperCase());
// *************************Qno 6**********************
// Write a ts program to convert uppercase string to lowercase.
// var a:string="USMAN";
// console.log("So after Conversion to uppercase: ",a.toLowerCase());
// *************************Qno 7*************************
// Write a ts program to toggle case of each character of a string.
//  var a:string="Usman";
//  var b:string[]=[];
//  for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     if(a[index]>='A'&&a[index]<='Z'){
//         b[index]=a[index].toLowerCase();
//     }
//     else if(a[index]>='a'&&a[index]<='z'){
//         b[index]=a[index].toUpperCase();
//     }
//  }
//  a=b.join(" ");
//  console.log("So the string after toggle is : ",a);
// *************************Qno 8*************************
// Write a ts program to find total number of alphabets, digits or special character in a string.
// var a: string | null = prompt("Enter any string: ");
// var b: string = String(a);
// var alphabets: number = 0;
// var num: number = 0;
// var specialChar: number = 0;
// for (let index = 0; index < b.length; index++) {
//     if (b[index] >= 'A' && b[index] <= 'Z' || b[index] >= 'a' && b[index] <= 'z') {
//         alphabets++;
//     }
//     else if (b[index].charCodeAt(index) >= 48 && b[index].charCodeAt(index) <= 57) {
//         num++;
//     }
//     else {
//         specialChar++;
//     }
// }
// console.log("So the alphabets are: ", alphabets);
// console.log("So the numbers are: ", num);
// console.log("So the special Characters are: ", specialChar);
// *************************Qno 9*************************
// Write a ts program to count total number of vowels and consonants in a string.
// var a: string | null = prompt("Enter any text: ");
// var b: string = String(a);
// var vow: number = 0;
// var cons: number = 0;
// for (let index = 0; index < b.length; index++) {
//     if (b[index] == 'a' || b[index] == 'i' || b == 'o' || b[index] == 'e' || b[index] == 'u' || b[index] == 'A' || b[index] == 'I' || b[index] == 'O' || b[index] == 'U' || b[index] == 'E') {
//         vow++;
//     }
//     else if (b[index] != ' ' || b[index] != '.') {
//         cons++;
//     }
// }
// console.log("So the vowels are: ", vow);
// console.log("So the consonants are: ", cons);
// *************************Qno 10*************************
// Write a ts program to count total number of words in a string.
// var a: string | null = prompt("Enter any sentence.");
// var b: string = String(a);
// var word: string[] = b.split(" ");
// console.log("So the number of words are: ", word.length);
// *************************Qno 11*************************
// Write a ts program to find reverse of a string.
// var a: string | null = prompt("Enter any sentence.");
// var b: string = String(a);
// console.log("SO the reverse of array is: ");
// for (let index = b.length - 1; index >= 0; index--) {
//     const element = b[index];
//     console.log(element);
// }
// *************************Qno 12*************************
// Write a ts program to check whether a string is palindrome or not.
// var a: string | null = prompt("Enter any word.");
// var b: string = String(a);
// var notpalidrome: number = 0;
// for (let index = 0; index < b.length; index++) {
//     if (b[index] != b[b.length - index - 1]) {
//         notpalidrome++;
//     }
// }
// if (notpalidrome >= 1) {
//     console.log("The string is not palindrome.");
// }
// else {
//     console.log("The string is Palindrome.");
// }
// *************************Qno 14*************************
// Write a ts program to reverse order of words in a given string
// var a: string | null = prompt("Enter any Sentences.");
// var b: string = String(a);
// var words: string[] = b.split(" ");
// console.log("So the reversing of words are: ");
// for (let index = words.length - 1; index >= 0; index--) {
//     const element = words[index];
//     console.log(element);
// }
// *************************Qno 15*************************
// Write a ts program to find first occurrence of a character in a given string.
// var a: string = "This is a book.";
// console.log("So the index of T from start is ", a.indexOf("T"));
// *************************Qno 16*************************
// Write a ts program to find last occurrence of a character in a given string.
//  var a: string = "This is a book.";
//  console.log("So the index of T from start is ", a.lastIndexOf("s"));
// *************************Qno 17*************************
