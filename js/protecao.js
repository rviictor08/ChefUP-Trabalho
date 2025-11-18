document.addEventListener('DOMContentLoaded', ()=>{
  if(sessionStorage.getItem('logado') !== 'true'){ window.location.href='login.html'; }
});
