(()=>{
 const toggle=document.querySelector('.menu-toggle'),menu=document.querySelector('#mobile-menu'),close=document.querySelector('.menu-close');
 let previousOverflow='';
 function shut(){if(menu.open)menu.close();}
 toggle.addEventListener('click',()=>{previousOverflow=document.body.style.overflow;menu.showModal();document.body.style.overflow='hidden';toggle.setAttribute('aria-expanded','true');close.focus()});
 close.addEventListener('click',shut);
 menu.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const items=[...menu.querySelectorAll('button,a[href]')].filter(el=>!el.disabled&&el.getClientRects().length);const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}});
 menu.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;toggle.setAttribute('aria-expanded','false');toggle.focus({preventScroll:true})});
 menu.addEventListener('click',e=>{if(e.target===menu&&e.clientX<menu.getBoundingClientRect().left)shut()});
 menu.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const target=document.querySelector(a.getAttribute('href'));shut();if(target){target.setAttribute('tabindex','-1');requestAnimationFrame(()=>{target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});target.focus({preventScroll:true});history.replaceState(null,'',a.getAttribute('href'))})}}));
 matchMedia('(max-width:700px)').addEventListener('change',e=>{if(!e.matches)shut()});
})();
