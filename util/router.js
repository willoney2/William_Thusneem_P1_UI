export function Router(routes){

    this.navigate = function(routePath){
        let destination = routes.filter(route => route.path === routePath).pop();
        if(destination){
            destination.component.render();
        } else {
            console.error(`No component found for ${routePath}`);
        }
    }
}