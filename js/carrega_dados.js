document.addEventListener('DOMContentLoaded', ()=>{
  // First try localStorage (newly created recipes), otherwise load js/dados.json
  const local = JSON.parse(localStorage.getItem('receitas') || '[]');
  if(local.length > 0){
    populateAll(local);
    return;
  }
  fetch('js/dados.json',{cache:'no-store'}).then(r=> r.ok? r.json(): Promise.reject(r.status)).then(data=>{
    const list = data.receitas || [];
    populateAll(list);
  }).catch(err=>{ console.error(err);});

  function populateAll(list){
    // carousel
    const carousel = document.getElementById('carousel');
    if(carousel){ carousel.innerHTML=''; list.slice(0,6).forEach(item=>{ const c=document.createElement('div'); c.className='card-hero'; c.innerHTML=`<img src="${item.imagem}" alt="${item.nome}"><div class="time-badge">${item.tempo_forno}</div><div class="meta">${item.nome}</div>`; carousel.appendChild(c); }); }
    // grid
    const grid = document.getElementById('grid');
    if(grid){ grid.innerHTML=''; list.slice(0,8).forEach(item=>{ const card=document.createElement('div'); card.className='recipe-card'; card.innerHTML=`<img class="card-img" src="${item.imagem}" alt="${item.nome}"><div class="body"><div class="title">${item.nome}</div><div class="meta">${item.tipo} <strong>${item.tempo_forno}</strong></div></div>`; grid.appendChild(card); }); }
    // tables (tabela.html and especialista)
    document.querySelectorAll('table tbody').forEach(tbody=>{ tbody.innerHTML=''; list.forEach(item=>{ const tr=document.createElement('tr'); tr.innerHTML=`<td><img src="${item.imagem}" style="width:120px;height:80px;object-fit:cover;border-radius:8px"></td><td>${item.nome}</td><td>${item.tipo}</td><td>${item.tempo_forno}</td>`; tbody.appendChild(tr); }); });
  }
});
