import Api from './Api';
import Csfr from './Csfr';

export default{
   register(form){
     return  Api.post('/register',form);
    },
      login(form){
     return  Api.post('/login',form);
    },
     logout(){
     return  Api.post('/logout');
    },
    auth(){
     return  Api.get('/user');
    }
}