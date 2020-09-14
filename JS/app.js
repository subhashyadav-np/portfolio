//Delearring all the navigation elements
const home = document.querySelector('#navHome');
const about = document.querySelector('#navAbout');
const services = document.querySelector('#navService');
const portfolio = document.querySelector('#navPortfolio');
const experiences = document.querySelector('#navExperience');
const contact = document.querySelector('#navContact');

//declearing all the html views
const homePage = document.querySelector('#homePage');
const aboutPage = document.querySelector('#aboutPage');
const servicePage = document.querySelector('#servicePage');
const portfolioPage = document.querySelector('#portfolioPage');
const experiencePage = document.querySelector('#experiencePage');
const contactPage = document.querySelector('#contactPage');

window.addEventListener('load', mainFunction);

function mainFunction() {

    //initially removeing all the element except homepage
    aboutPage.style.display = "none";
    servicePage.style.display = "none";
    portfolioPage.style.display = "none";
    experiencePage.style.display = "none";
    contactPage.style.display = "none";


    //Hiding PreLoader
    const preLoader = document.querySelector('#preLoader');
    preLoader.style.display = "none";


    //if someone click on home
    home.addEventListener('click', function () {
        aboutPage.style.display = "none";
        servicePage.style.display = "none";
        portfolioPage.style.display = "none";
        experiencePage.style.display = "none";
        contactPage.style.display = "none";
        homePage.style.display = "flex";
    });

    //if someone click on about Nav
    about.addEventListener('click', function () {
        homePage.style.display = "none";
        servicePage.style.display = "none";
        portfolioPage.style.display = "none";
        experiencePage.style.display = "none";
        contactPage.style.display = "none";
        aboutPage.style.display = "block";
    });

    //if someone click on service nav
    services.addEventListener('click', function () {
        homePage.style.display = "none";
        aboutPage.style.display = "none";
        portfolioPage.style.display = "none";
        experiencePage.style.display = "none";
        contactPage.style.display = "none";
        servicePage.style.display = "block";
    });

    //if someone click on portfolio nav
    portfolio.addEventListener('click', function () {
        homePage.style.display = "none";
        aboutPage.style.display = "none";
        servicePage.style.display = "none";
        experiencePage.style.display = "none";
        contactPage.style.display = "none";
        portfolioPage.style.display = "block";
    });

    //if someone click on contact nav
    contact.addEventListener('click', function () {
        homePage.style.display = "none";
        aboutPage.style.display = "none";
        servicePage.style.display = "none";
        portfolioPage.style.display = "none";
        experiencePage.style.display = "none";
        contactPage.style.display = "block";
    });


    //if someone click on experience nav
    experiences.addEventListener('click', function () {
        homePage.style.display = "none";
        aboutPage.style.display = "none";
        servicePage.style.display = "none";
        portfolioPage.style.display = "none";
        contactPage.style.display = "none";
        experiencePage.style.display = "block";
    });


    //mobile-nav-toggler functionality
    let mobileNavToggler = document.querySelector('.mobile-nav-toggler');
    let sideBar = document.querySelector('.sidebar');
    let bodyContent = document.querySelector('.content');

    navIsOpen = true;

    mobileNavToggler.addEventListener('click', function () {
        if (navIsOpen) { //if navIsOpen = true then closenav else open nav
            closeNav();
        } else {
            openNav();
        }
    });

    function closeNav() {
        navIsOpen = false;

        mobileNavToggler.children[0].classList.replace("fa-arrow-circle-left", "fa-arrow-circle-right");
        sideBar.style.width = "0px";
        sideBar.style.display = "none";
        bodyContent.style.width = "100%";
        bodyContent.style.borderLeft = "2px solid #fff";
    }

    function openNav() {
        navIsOpen = true;

        mobileNavToggler.children[0].classList.replace("fa-arrow-circle-right", "fa-arrow-circle-left")
        sideBar.style.width = "20%";
        sideBar.style.display = "flex";
        bodyContent.style.width = "80%";
        bodyContent.style.borderLeft = "none";
    }



    /*
    for aboutPage [team profile div effect]
    */
    let teamProfile = document.querySelectorAll('.teamMem .profile');

    //console.log(teamProfile[1].children[1]);
    for (let i = 0; i < teamProfile.length; i++) {
        //console.log(teamProfile[i].children[1])

        teamProfile[i].addEventListener('mouseenter', function () {
            this.children[0].style.display = "block";
        });
        teamProfile[i].addEventListener('mouseleave', function () {
            this.children[0].style.display = "none";
        });


    }



    /*
    for servicePage or view
    */
    var serviceBtn = document.querySelectorAll('.service-btn');

    for (let i = 0; i < serviceBtn.length; i++) {
        //console.log(serviceBtn[i]);
        serviceBtn[i].addEventListener('click', function () {
            this.parentNode.children[1].classList.toggle("open");
        });
    }


    /*
    for portfolioPage or view
    */
    var portfolioImg = document.querySelectorAll('.port-img img');

    for (let i = 0; i < portfolioImg.length; i++) {

        portfolioImg[i].addEventListener('click', function () {
            this.parentNode.children[1].classList.toggle('open');
        });
    }



    /*
    for experiencePage or view
    */
    var expTitleBtn = document.querySelectorAll('.exp-title-btn');

    for (let i = 0; i < expTitleBtn.length; i++) {

        expTitleBtn[i].addEventListener('click', function () {
            this.parentNode.children[1].classList.toggle('toggle');
        });
    }

};
