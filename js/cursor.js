var CURSOR;Math.lerp=(t,s,e)=>(1-e)*t+e*s;const getStyle2=(t,s)=>{try{return window.getComputedStyle?window.getComputedStyle(t)[s]:t.currentStyle[s]}catch(t){}return""};class Cursor{constructor(){this.pos={curr:null,prev:null},this.pt=[],this.create(),this.init(),this.render()}move(t,s){this.cursor.style.left=`${t}px`,this.cursor.style.top=`${s}px`}create(){this.cursor||(this.cursor=document.createElement("div"),this.cursor.id="cursor",this.cursor.classList.add("hidden"),document.body.append(this.cursor));var t=document.getElementsByTagName("*");for(let s=0;s<t.length;s++)"pointer"==getStyle2(t[s],"cursor")&&this.pt.push(t[s].outerHTML);document.body.appendChild(this.scr=document.createElement("style")),this.scr.innerHTML="* {cursor: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><style>circle {fill: white;}</style><circle cx='4' cy='4' r='4' opacity='.5'/></svg>\") 4 4, auto!important}"}refresh(){this.scr.remove(),this.cursor.classList.remove("hover"),this.cursor.classList.remove("active"),this.pos={curr:null,prev:null},this.pt=[],this.create(),this.init(),this.render()}init(){document.onmouseover=t=>this.pt.includes(t.target.outerHTML)&&this.cursor.classList.add("hover"),document.onmouseout=t=>this.pt.includes(t.target.outerHTML)&&this.cursor.classList.remove("hover"),document.onmousemove=t=>{null==this.pos.curr&&this.move(t.clientX-8,t.clientY-8),this.pos.curr={x:t.clientX-8,y:t.clientY-8},this.cursor.classList.remove("hidden")},document.onmouseenter=t=>this.cursor.classList.remove("hidden"),document.onmouseleave=t=>this.cursor.classList.add("hidden"),document.onmousedown=t=>this.cursor.classList.add("active"),document.onmouseup=t=>this.cursor.classList.remove("active")}render(){this.pos.prev?(this.pos.prev.x=Math.lerp(this.pos.prev.x,this.pos.curr.x,.15),this.pos.prev.y=Math.lerp(this.pos.prev.y,this.pos.curr.y,.15),this.move(this.pos.prev.x,this.pos.prev.y)):this.pos.prev=this.pos.curr,requestAnimationFrame((()=>this.render()))}}CURSOR=new Cursor;