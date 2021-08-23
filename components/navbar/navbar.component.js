
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

    function injectStylecheet(){
       // let dynamicStyle = document.getElementById('');
    }

    this.render = function(){

        injectStylesheet();

        injectTemplate(() => {
            //navigating stuff
        });
    }
}