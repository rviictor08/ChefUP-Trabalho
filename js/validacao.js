document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('contatoForm'); if(!form) return;
  const email = form.querySelector('#email'); const cpf = form.querySelector('#cpf');
  const emailRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}(?:\.[A-Za-zÀ-ÖØ-öø-ÿ]{2,})+@[A-Za-z0-9-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/;
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  form.addEventListener('submit', e=>{
    let ok=true;
    if(!emailRegex.test(email.value.trim())){ ok=false; show('err-email','Email inválido. Use joao.silva@provedor.com'); }
    else hide('err-email');
    if(!cpfRegex.test(cpf.value.trim())){ ok=false; show('err-cpf','CPF inválido. Use 999.999.999-99'); }
    else hide('err-cpf');
    if(!ok) e.preventDefault();
  });
  function show(id,msg){ let el=document.getElementById(id); if(!el){ el=document.createElement('div'); el.id=id; el.style.color='#b00020'; el.style.marginTop='8px'; form.appendChild(el);} el.textContent=msg;}
  function hide(id){ const el=document.getElementById(id); if(el) el.textContent=''; }
});
