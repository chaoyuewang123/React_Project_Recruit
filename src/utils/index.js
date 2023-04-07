
export function getnavigate(type,Avatar){
    let path=''
    if(type === '1'){
        path = '/boss'
    }
    else{
        path = '/candidate'
    }
    if(!Avatar){
        path +='info'
    }
    return path
}