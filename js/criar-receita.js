document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('formReceita');
  if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const tipo = document.getElementById('tipo').value;
    const tempo = document.getElementById('tempo').value;
    const ingredientes = document.getElementById('ingredientes').value;
    const preparo = document.getElementById('preparo').value;
    const fotoInput = document.getElementById('foto');
    let imagem = '';
    if(fotoInput && fotoInput.files && fotoInput.files[0]){
      imagem = await fileToDataUrl(fotoInput.files[0]);
    } else {
      imagem = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80';
    }
    const nova = { id: Date.now(), nome, tipo, tempo_forno: tempo+' min', forno: tempo+' min', imagem };
    const arr = JSON.parse(localStorage.getItem('receitas')||'[]');
    arr.unshift(nova);
    localStorage.setItem('receitas', JSON.stringify(arr));
    // redirect back to index to see it
    window.location.href = 'index.html';
  });
  function fileToDataUrl(file){
    return new Promise((resolve,reject)=>{
      const reader = new FileReader();
      reader.onload = ()=> resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
});
