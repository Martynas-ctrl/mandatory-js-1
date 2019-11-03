// <-----Changed title to Fruits & Vegetables Corp ----->
let title = document.querySelector('title').innerHTML = 'Fruits & Vegetables Corp';

// <-----added main.css file to head----->
let headElement = document.querySelector('head');
let addLink = document.createElement('link');
headElement.appendChild(addLink);
document.querySelector('link').rel = 'stylesheet';
document.querySelector('link').type = 'text/css';
document.querySelector('link').href = 'main.css';

// <-----Changed text content in header h1 to Fruits & Vegetables Corp------>
document.querySelector('h1').innerHTML = 'Fruits & Vegetables Corp';
// document.querySelector('h1').style.color = 'red';<--- no need because of css

// <-----Changed text content and href attribut in last a tag to Vegetables----->
let ulElements = document.querySelector('ul li:last-child');
let aElements = ulElements.querySelector('a').innerHTML = 'Vegetables';
aElements = ulElements.querySelector('a').href='#vegetables';

// <----- In main I removed last <section id="about"> element with text content "We're the best in fruits & vegetables"----->
let remove = document.getElementById('about');
remove.remove(remove);
console.log(remove);

// <-----Create element section with id about----->
let h1Element = document.getElementById('main');
let sectionElement = document.createElement('section');//<---Create element section
sectionElement.setAttribute('id', 'about');//<---set id="about" for element <section>
let h2Element = document.createElement('h2');//<---create h2 element
h2Element.textContent = 'About';//<---set text for h2 element
let secondSection = document.getElementById('contact');
h1Element.insertBefore(sectionElement, secondSection);//<---swapted order for section #contact and #about
document.querySelector('section:first-child').appendChild(h2Element);//<--- add h2 element with text content "about" to the first section element in main element

// <-----Created p element with text content 'Were the best in fruits & vegetables' for section element with #about id-->
let pElement = document.createElement('p');//<---Created p element
pElement.textContent = "We're the best in fruits & vegetables";//<---set text content for p element
sectionElement.appendChild(pElement);//<---set p element in section with #about id

// <-----Swaped p element with h2 element so that h2 is the first-child of parent element <section id="contact">----->
let sectioncontact = document.getElementById('contact');
let beforeptag = sectioncontact.querySelector('p');
let hTwoElement = document.createElement('h2');//<--created h2 element
hTwoElement.textContent = 'Contact';//<-- set text content for h2 element
sectioncontact.insertBefore(hTwoElement, beforeptag);//<-- set h2 element as first child and p element as second child

// <-----Changed td to th element in thead element----->
let removetd1 = sectioncontact.querySelector('td:first-child');
removetd1.remove(removetd1); //<<--removed td name

let removetd2 = sectioncontact.querySelector('td:last-child');
removetd2.remove(removetd2); //<---removed td email

// <-----Created new th name and new th email----->
let createth1 = sectioncontact.querySelector('tr:first-child');//<--- first tr under <section id="contact"> element
let th1Element = document.createElement('th');//<---created th element
th1Element.textContent = 'Name'; //<---set text for th element
createth1.appendChild(th1Element);//<---added new th for name to first tr in section contact element

let createth2 = sectioncontact.querySelector('tr:last-child');//<--- last tr under <section id="contact"> element
let th2Element = document.createElement('th');//<---created second th element
th2Element.textContent = 'Email';//<---set text for second th element
createth2.appendChild(th2Element);//<---added second new th for email to second tr in section contact element
