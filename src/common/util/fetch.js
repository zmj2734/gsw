let fetchUtil = {
    get : function (url,params,success,error) {
        if(params){
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        fetch(url,{ method: 'GET'})
            .then(function(response) {
                if(response.status == 200)
                    return response.json();
            })
            .then(function(response) {
                success(response)
            })
            .catch(function(e) {
                error(e);
            });
    },
    post : function (url,params,header,success,error) {
        fetch(url,{method:"POST",headers:{"token":header},body:JSON.stringify(params)})
            .then(function(response) {
                if(response.status == 200)
                    return response.json();
            })
            .then(function(response) {
                success(response)
            })
            .catch(function(e) {
                error(e);
            });
    }
}