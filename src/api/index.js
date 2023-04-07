import ajax  from "./ajax"

export const reqRegister = (user) => ajax('http://localhost:3000/api1/register', user, 'POST')

export const reqLogin = ({Username,Password}) => ajax('http://localhost:3000/api1/login', {Username,Password}, 'POST')

export const reqUpdateUser = (user) => ajax('http://localhost:3000/api1/update',user,'POST')

export const reqUser = () => ajax('http://localhost:3000/api1/user')

export const reqUserList = (type) => ajax('http://localhost:3000/api1/userlist',{type})