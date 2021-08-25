import { Router } from "../../util/router";

const NAVBAR_ELEMENT = document.getElementById('navbar');

function NavbarComponent(){

    let templateHolder = '';
    let address = 'components/navbar/navbar.component';

    function injectTemplate(cb){

        if(templateHolder){
            NAVBAR_ELEMENT.innerHTML = templateHolder;
        } else{
            fetch(`${address}.html`)
            .then(resp => resp.text())
            .then(html => {
                templateHolder = html;
                NAVBAR_ELEMENT.innerHTML = templateHolder;
                cb();
            })
            .catch(err => console.error(err));
        } 
    }

    function navigateToCatalog(){
        console.log("navigating to catalog");
    }

    function navigatingToDashboard(){
        console.log("navigating to dashboard");
    }

    function navigatingToHome(){
        console.log("navigating to home");
    }

    function navigatingToLogin(e){
        console.log("navigating to login");
        Router.navigate(e.target.dataset.route)
    }

    function injectStylesheet(){
       // let dynamicStyle = document.getElementById('');
    }

    this.render = function(){

        injectStylesheet();

        injectTemplate(() => {
            document.getElementById('catalog').addEventListener('click', navigateToCatalog);
            document.getElementById('dashboard').addEventListener('click', navigatingToDashboard);
            document.getElementById('home').addEventListener('click', navigatingToHome);
            document.getElementById('login').addEventListener('click', navigatingToLogin);
        });
    }
}

export default new NavbarComponent();