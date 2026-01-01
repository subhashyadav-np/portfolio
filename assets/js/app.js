window.addEventListener('load', mainFunction);

function mainFunction() {

    //Hiding PreLoader
    const preLoader = document.querySelector('#preLoader');
    preLoader.style.display = "none";

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

        mobileNavToggler.children[0].classList.replace("fa-chevron-left", "fa-chevron-right");
        sideBar.style.width = "0px";
        sideBar.style.overflow = "hidden";
        sideBar.style.borderRight = "0px solid #ffffff41";
    }

    function openNav() {
        navIsOpen = true;

        mobileNavToggler.children[0].classList.replace("fa-chevron-right", "fa-chevron-left")
        sideBar.style.width = "25%";
        sideBar.style.borderRight = "2px solid #ffffff41";
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
    
};
