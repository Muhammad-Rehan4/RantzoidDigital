// Custom cursor
(function(){
  if(window.matchMedia('(max-width:768px)').matches) return;
  const dot=document.createElement('div');dot.className='cursor-dot';
  const ring=document.createElement('div');ring.className='cursor-ring';
  document.body.appendChild(dot);document.body.appendChild(ring);
  let mx=0,my=0,rx=0,ry=0;
  window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});
  function raf(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(raf)}raf();
  document.addEventListener('mouseover',e=>{if(e.target.closest('a,button,.tilt,input,textarea,[data-cursor]'))document.body.classList.add('cursor-hover')});
  document.addEventListener('mouseout',e=>{if(e.target.closest('a,button,.tilt,input,textarea,[data-cursor]'))document.body.classList.remove('cursor-hover')});
})();

// 3D Tilt
(function(){
  if(window.matchMedia('(max-width:768px)').matches) return;
  document.querySelectorAll('.tilt').forEach(el=>{
    el.style.perspective='1000px';
    el.addEventListener('mousemove',e=>{
      const r=el.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      el.style.transform=`perspective(1000px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateZ(0)`;
    });
    el.addEventListener('mouseleave',()=>{el.style.transform='perspective(1000px) rotateY(0) rotateX(0)'});
  });
})();

// Mobile nav
(function(){
  const t=document.querySelector('[data-nav-toggle]');const m=document.querySelector('[data-nav-mobile]');
  if(!t||!m)return;t.addEventListener('click',()=>m.classList.toggle('hidden'));
})();
