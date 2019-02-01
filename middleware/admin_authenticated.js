export default  function ({store,redirect}) {
    if(!store.state.auth.user){
        return redirect('/login');
    }
    if(store.state.auth.user.isAdmin!=1){
        return redirect('/');
    }
   
}
