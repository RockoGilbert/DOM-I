// Nav

const anchorTags = document.querySelectorAll('a');
console.log(anchorTags)










const navColor = document.querySelectorAll('.container header nav a');
  navColor.forEach(link => link.getElementsByClassName.color = "green";


const services = document.getElementsByTagName('a')[0];
  services.innerHTML = 'Services';
const product = document.getElementsByTagName('a')[1];
  product.innerHTML = 'Product';
const vision = document.getElementsByTagName('a')[2];
  vision.innerHTML = 'Vision';
const features = document.getElementsByTagName('a')[3];
  features.innerHTML = 'Features';
const about = document.getElementsByTagName('a')[4];
  about.innerHTML = 'About';
const contact = document.getElementsByTagName('a')[5];
  contact.innerHTML = 'Contact';

// CTA
const logoImg = document.querySelector('logo-img');
  logoImg.src = ("img/logo.png");

const h1Element = document.querySelector('h1');
  h1ELement.innerHTML = "DOM<br> Is<br> Awesome.";

const buttonId = document.querySelector('button')
  buttonId.innerHTML = "Get Started";

const ctaImg = document.querySelector('cta-img');
  logoImg.src = ("img/header-img.png");

const h4Element = document.querySelector('h4');
  h4Element.innerHTML = "Services";


// Main 
const h4Features = document.getElementsByTagName('h4')[0];
  h4Features.innerHTML = 'Features';

const featuresContent = document.getElementsByTagName('p')[0];
  featuresContent.innerHTML = " 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';";



const h4About = document.getElementsByTagName('h4'[1]);
  h4About.innerHTML = "About";  

const aboutContent = document.getElementsByTagName('p')[1];
aboutContent.innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


const middleImg = document.getElementsByTagName('middle-img');
  middleImg.src = ("img/mid-page-accent.jpg");



const h4Services = document.getElementsByTagName('h4')[2];
  h4Services.innerHTML = "Services";

const servicesContent = document.getElementsByTagName('p')[2];
  servicesContent.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const h4Product = document.getElementsByTagName('h4')[3];
  h4Product.innerHTML = "Product";

const productContent = document.getElementsByTagName('p')[3];

const h4Vision = document.getElementsByTagName('h4')[4];
  h4Vision.innerHTML = "Vision";

const visionContent = document.getElementsByTagName('p')[4];
  visionContent.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";  


const h4Contact = document.getElementsByTagName('h4')[5];
  h4Contact.innerHTML = "Contact";

const fifthP = document.getElementsByTagName("p")[5];
  fifthP.innerHTML = "123 Way 456 Street<br>Somewhere, USA";

const sixthP = document.getElementsByTagName('p')[6];
  sixthP.innerHTML = "1 (888) 888-8888";

const seventhP = document.getElementsByTagName('p')[7];
  seventhP.innerHTML = "sales@greatidea.io";

const footer = document.getElementsByTagName('p');
  footer.innerHTML = "Copyright Great Idea 2018";


const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },

  const footer = doucument.get = ElementById("footer");
  footer.innerHTML 
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
