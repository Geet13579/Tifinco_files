
class AuthService {
  AdminAuth() {
    let userid = sessionStorage.getItem('userid');
    if(userid){
        return true;
    }else{
        return false;
    }

  }

  logout() {
    sessionStorage.clear();
  }

//   register(username, email, password) {
//     return axios.post(API_URL + "signup", {
//       username,
//       email,
//       password
//     });
//   }

//   getCurrentUser() {
//     return JSON.parse(localStorage.getItem('user'));;
//   }
}

export default new AuthService();