document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('loginForm'); if(!form) return;
  const err = document.getElementById('erro');
  const USER = 'mestre@culinaria.com'; const PASS = '123456';
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    if(email === USER && senha === PASS){
      sessionStorage.setItem('logado','true');
      const btn = form.querySelector('button'); btn.innerHTML = 'Entrando...'; btn.disabled=true;
      setTimeout(()=> window.location.href='especialista.html',700);
    } else { err.style.display='block'; form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake'); setTimeout(()=>err.style.display='none',2200);}
  });
});
