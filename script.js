document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector(".menu");
  let modifiedList = document.querySelector(".afterclick_content");
  let remove_btn = document.querySelector(".remove");
  let seeAllBtn=document.querySelector(".more_option");
  let articleBtn=document.querySelector(".top_btn");
  let arrows=document.querySelectorAll(".arrow");
  let bookBtn=document.querySelector(".book");
  let card=document.querySelectorAll(".card");
  menu.addEventListener("click", () => {
    modifiedList.style.display = "block";
  });
  remove_btn.addEventListener("click", () => {
    modifiedList.style.display = "none";
  });
  // Get the tour link
  let blogLinkOne = document.querySelector('.items a[href="#tours"]');
  let aboutUsOne = document.querySelector('.items a[href="#about"]');
  let bookingOne = document.querySelector('.items a[href="#booking"]');
  let faqOne = document.querySelector('.items a[href="#faq"]');

  // Get the tour blog section
  let tourSection = document.getElementById("tour_blog_page");
  let aboutSection = document.querySelector(".about_page");
  let bookingSection = document.querySelector(".booking_info");
  let faqSection = document.querySelector(".footer");

  // Add click event listener to the tour link
  blogLinkOne.addEventListener("click", function (event) {
    // Prevent default link behavior
    event.preventDefault();
    modifiedList.style.display = "none";

    // Scroll to the tour blog section smoothly
    tourSection.scrollIntoView({ behavior: "smooth" });
  });

  aboutUsOne.addEventListener("click", function (event) {
    event.preventDefault();
    modifiedList.style.display = "none";
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

  bookingOne.addEventListener("click", function (event) {
    event.preventDefault();
    modifiedList.style.display = "none";
    bookingSection.scrollIntoView({ behavior: "smooth" });
  });

  faqOne.addEventListener("click", function (event) {
    event.preventDefault();
    modifiedList.style.display = "none";
    faqSection.scrollIntoView({ behavior: "smooth" });
  });

  let blogLinkTwo = document.querySelector('a[href="#tours_m"]');
  let aboutUsTwo = document.querySelector('a[href="#about_m"]');
  let bookingTwo = document.querySelector('a[href="#booking_m"]');
  let faqTwo = document.querySelector('a[href="#faq_m"]');
  blogLinkTwo.addEventListener('click', function(event) {
       // Prevent default link behavior
    event.preventDefault();
    modifiedList.style.display = "none";

    // Scroll to the tour blog section smoothly
    tourSection.scrollIntoView({ behavior: "smooth" });
    });
     aboutUsOne.addEventListener("click", function (event) {
    event.preventDefault();
    modifiedList.style.display = "none";
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
   aboutUsTwo.addEventListener("click", function (event) {
    event.preventDefault();
    modifiedList.style.display = "none";
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
   bookingTwo.addEventListener("click", function (event) {
    event.preventDefault();
    modifiedList.style.display = "none";
    bookingSection.scrollIntoView({ behavior: "smooth" });
  });
  faqTwo.addEventListener("click", function (event) {
    event.preventDefault();
    modifiedList.style.display = "none";
    faqSection.scrollIntoView({ behavior: "smooth" });
  });
  
  seeAllBtn.addEventListener("mouseover",()=>
{
  seeAllBtn.style.backgroundColor="black";
  seeAllBtn.style.color="white";
  seeAllBtn.addEventListener("mouseleave",()=>
{
  seeAllBtn.style.backgroundColor="white";
  seeAllBtn.style.color="black";
})
})
 articleBtn.addEventListener("mouseover",()=>
{
 articleBtn.style.backgroundColor="black";
 articleBtn.style.color="white";
  articleBtn.addEventListener("mouseleave",()=>
{
 articleBtn.style.backgroundColor="white";
 articleBtn.style.color="black";
})
})
arrows.forEach(arrow_btn => {
  arrow_btn.addEventListener("mouseover",()=>
{
arrow_btn.style.backgroundColor="white";
 arrow_btn.style.color="black";
   arrow_btn.addEventListener("mouseleave",()=>
{
  arrow_btn.style.backgroundColor="transparent";
  arrow_btn.style.color="white";
})
})
});
bookBtn.addEventListener("mouseover",()=>
{
  bookBtn.style.backgroundColor="rgb(225, 225, 225)";
    bookBtn.addEventListener("mouseleave",()=>
{
  bookBtn.style.backgroundColor="white";
})
})

card.forEach(card_eff=>
{
  card_eff.addEventListener("mouseover",()=>
{
  card_eff.style.boxShadow="0 4px 30px black";
  card_eff.addEventListener("mouseleave",()=>
{
  card_eff.style.boxShadow="none";
})
})
})
  window.scrollTo({top:0,behavior:"smooth"});
});

