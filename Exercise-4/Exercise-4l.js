// Continuing from 4g, add a <script> element so that when the page loads, it displays the message 'Welcome!' in the Console.
document.body.innerHTML = '<div id="box"></div>\n' +
    '<style>\n' +
    '  #box {\n' +
    '    border: 2px solid red\n' +
    '  }\n' +
    '</style>'
console.log('Welcome!')