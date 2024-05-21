var M=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var a=(s,t,e)=>(M(s,t,"read from private field"),e?e.call(s):t.get(s)),r=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},_=(s,t,e,o)=>(M(s,t,"write to private field"),o?o.call(s,e):t.set(s,e),e);import{_ as L}from"./nuxt-link.0934993e.js";import{f as $,o as p,c as x,a as h,b as f,w as S,F as P,r as j,d as B,t as E,p as F,e as H,_ as I,g as z,h as C,i as N,j as A,k as V}from"./entry.861ce5cf.js";const D=s=>(F("data-v-53245724"),s=s(),H(),s),U={class:"text-black font-bold font-mono py-2 z-50 fixed left-0 top-0 right-0 bg-yellow-500/50"},q={class:"flex max-w-6xl mx-auto justify-between"},J=D(()=>h("span",{class:"text-xl uppercase font-bold"},"Jon",-1)),R={class:"flex gap-4 text-xl"},W=$({__name:"Header",setup(s){const t=[{id:0,label:"Blog",link:"/blog"},{id:1,label:"Projects",link:"/projects"},{id:2,label:"Demo",link:"/demo"}];return(e,o)=>{const n=L;return p(),x("header",U,[h("nav",q,[h("div",null,[f(n,{to:"/"},{default:S(()=>[J]),_:1})]),h("ul",R,[(p(),x(P,null,j(t,c=>h("li",null,[f(n,{to:c.link},{default:S(()=>[B(E(c.label),1)]),_:2},1032,["to"])])),64))])])])}}});const G=I(W,[["__scopeId","data-v-53245724"]]);function K(){const s=z({pos:[0,0]}),t=e=>{s.value.pos=[e.x,e.y]};return C(()=>window.addEventListener("mousemove",t)),N(()=>window.removeEventListener("mousemove",t)),s}var v,u,y,m,w,i,b,k,g;class O{constructor({num:t,ctx:e,colorArray:o=[],maxSpeed:n=1}){r(this,v,void 0);r(this,u,void 0);r(this,y,[0,0]);r(this,m,void 0);r(this,w,void 0);r(this,i,void 0);r(this,b,void 0);r(this,k,100);r(this,g,10);_(this,i,e),_(this,w,t),_(this,b,20),_(this,m,n),_(this,u,o||[]),_(this,v,this.createItems())}set_cursor(t){_(this,y,t)}createItem(){const t=a(this,u)[Math.floor(Math.random()*a(this,u).length)],e=Math.random()*(a(this,k)-a(this,g))+a(this,g),o=Math.random()*(a(this,i).canvas.width-e)+e/2,n=Math.random()*(a(this,i).canvas.height-e)+e/2,c=Math.random()*a(this,m),l=Math.random()*a(this,m);return{color:t,size:e,x:o,y:n,dx:c,dy:l}}createItems(){const t=[];for(let e=0;e<a(this,w);e+=1)t.push(this.createItem());return t}updateItem(t){const{size:e,x:o,y:n,dx:c,dy:l}=t,[d,T]=[a(this,i).canvas.width,a(this,i).canvas.height];(o+e/2>=d||o-e/2<=0)&&(t.dx=-c),(n+e/2>=T||n-e/2<=0)&&(t.dy=-l),t.x+=t.dx,t.y+=t.dy}drawItem(t,e="diamond"){const o=a(this,i),{color:n,size:c,x:l,y:d}=t;e=="diamond"?(o.beginPath(),o.moveTo(l,d),o.lineTo(l-c/2,d),o.lineTo(l,d+c/2),o.lineTo(l+c/2,d),o.lineTo(l,d-c/2),o.lineTo(l-c/2,d),o.closePath(),o.fillStyle=n,o.fill()):e=="circle"&&(o.beginPath(),o.arc(l,d,c/2,0,360),o.closePath,o.fillStyle=n,o.fill())}draw({doUpdate:t=!1}){a(this,v).forEach(e=>{this.drawItem(e,"circle"),t&&this.updateItem(e)})}animate(){a(this,i).clearRect(0,0,a(this,i).canvas.width,a(this,i).canvas.height),requestAnimationFrame(this.animate.bind(this)),this.draw({doUpdate:!0})}}v=new WeakMap,u=new WeakMap,y=new WeakMap,m=new WeakMap,w=new WeakMap,i=new WeakMap,b=new WeakMap,k=new WeakMap,g=new WeakMap;const Q={class:"fixed inset-0 bg-red -z-1 overflow-hidden"},X=$({__name:"CaoticMovement",setup(s){const t=z(null),e=K();return C(()=>{if(t.value!=null){t.value.width=window.innerWidth,t.value.height=window.innerHeight;const o=t.value.getContext("2d"),n=new O({num:10,ctx:o,colorArray:["#de3d3d","#090c0b","#0d2527","#267368","#00b1a0"],maxSpeed:.5});n.animate(),A(e.value,c=>{n.set_cursor(c.pos)})}}),(o,n)=>(p(),x("div",Q,[h("canvas",{class:"bg-black w-full h-full",ref_key:"cvs",ref:t},null,512)]))}}),Y={},Z={class:"-mt-10 h-10 bg-black/0 w-full text-yellow font-mono text-center uppercase"};function tt(s,t){return p(),x("footer",Z," 2023-present 🄯 CopyLeft @gnuion ")}const et=I(Y,[["render",tt]]);const ot={},st={class:"min-h-[100vh] flex flex-col"},nt={class:"text-lg text-white w-full grow-1 max-w-6xl px-6 pt-20 mx-auto font-mono"};function at(s,t){const e=G,o=X,n=et;return p(),x("div",st,[f(e),f(o),h("main",nt,[V(s.$slots,"default")]),f(n)])}const rt=I(ot,[["render",at]]);export{rt as default};
