export class WebService{
    private isLogin = false;
    LoginStatus() : boolean{
        return this.isLogin;
    }

    setUserCredentials(private userName: String, private password)
    {
        console.log( userName + ':' + password );
        this.isLogin = true;
    }

}