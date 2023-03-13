export function baseUrl(url = ''){
    // return 'https://new.visapickmap.com/api/panel/v1/user/' + (url!=''?'/'+url:'');
    return 'https://rosena.ir/api' + (url!=''?'/'+url:'');
}

export function checkAuthLogin(){
    // load token 
    if (typeof window !== "undefined") {
        let mobile = window.localStorage.getItem('mobile');
        let password = window.localStorage.getItem('password');
        if(mobile&&password) {
            // return true;
            location.href = '/';
        }else{
            localStorage.clear();
            location.href = '/auth/login';
        }
    }
    return false;
}