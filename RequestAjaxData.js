class RequestAjaxData {
    data;
    url;
    type;
    callbackActionSuccess;
    callbackActionError;
    callbackActionComplete;

    constructor(url, type = 'POST', callbackSuccess = null, callbackError = null, callbackComplete = null) {
        this.url = url;
        this.type = type;
        this.data = {}
        this.callbackActionSuccess = callbackSuccess;
        this.callbackActionError = callbackError;
        this.callbackActionComplete = callbackComplete;
    }

    propertyAdd = (name, value) =>{
        this.data[name] = value;
    }

    setData = (data) => {
        this.data = data;
    }

    callback = (data, success) => {
        if( success && this.callbackActionSuccess || !success && this.callbackActionError ){
            if(success) {
                this.callbackActionSuccess(data);
            }
            else{
                this.callbackActionError(data)
            }
        }
        else{
            this.callbackDefault(data);
        }
    }

    callbackDefault = (data) =>{
        if(data.success){
            window.location.reload();
        }
        else{

        }
    }

    callbackComplete = () => {
        if(this.callbackActionComplete){
            this.callbackActionComplete();
        }
    }
}
