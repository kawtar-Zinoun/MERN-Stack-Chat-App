export default function authHeader() { 
//  the authHeader function checks if the user is already logged in and if the accessToken exists, if so we return it,
//  if not we return and empty object 

    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { 'x-access-token' : user.accessToken };
    } else {
      return {};
    }
  }