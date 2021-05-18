class RequestAjax{

    constructor(token) {
        this.init(token);
    }

    init(token){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': token,
            }
        });
    }

    request(requestAjaxData){

        const responseCallback = (data, sucess) => {
            requestAjaxData.callback({
                data: data,
                success: sucess
            });
        };

        const ajaxParameter = {
            url: requestAjaxData.url,
            data: requestAjaxData.data,
            type: requestAjaxData.type,
            success: (data) => {
                responseCallback(data, true);
            },
            error: (data) => {
                responseCallback(data, false);
            },
            complete: () => {
                requestAjaxData.callbackComplete();
            }
        };

        $.ajax(ajaxParameter)
    }
}
