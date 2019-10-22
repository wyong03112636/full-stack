export default {
    get({url, type="GET", data=''}){
       return $.ajax({
            url: '/api/users/signup',
            type: type,
            data:data,
            dataType:'json',
            success: (result)=>{
               return result
            } 
        })
    }
}
