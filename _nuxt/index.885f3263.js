var d=`precision mediump float;

void main() {
   
   
   gl_FragColor = vec4(1, 0, 0.5, 1); 
}`,v=`attribute vec4 a_position;

void main() {

  
  
  gl_Position = a_position;
}`;function u(e,s,r){const o=e.createShader(e[s]);if(e.shaderSource(o,r),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))return o;const i=e.getShaderInfoLog(o);throw e.deleteShader(o),i}function A(e,s){const r=e.createProgram();if(s.forEach(i=>{e.attachShader(r,i)}),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS))return r;const a=e.getProgramInfoLog(r);throw e.deleteProgram(r),a}function E(e){const s=u(e,"FRAGMENT_SHADER",d),r=u(e,"VERTEX_SHADER",v),o=A(e,[s,r]),a=e.getAttribLocation(o,"a_position"),i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);const c=[0,0,0,.5,.7,0];e.bufferData(e.ARRAY_BUFFER,new Float32Array(c),e.STATIC_DRAW),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(o),e.enableVertexAttribArray(a),e.bindBuffer(e.ARRAY_BUFFER,i);const n={index:a,size:2,type:e.FLOAT,normalise:!1,stride:0,offset:0};e.vertexAttribPointer(n.index,n.size,n.type,n.normalise,n.stride,n.offset);const t={primitiveType:e.TRIANGLES,offset:0,count:3};return e.drawArrays(t.primitiveType,t.offset,t.count),o}var _=`precision mediump float;

void main() {
   
   
   gl_FragColor = vec4(1, 1, 0.5, 1); 
}`,R=`attribute vec2 a_position;
uniform vec2 u_resolution;

void main() {
  
  vec2 zeroToOne = a_position / u_resolution;

  
  vec2 zeroToTwo = zeroToOne * 2.0;

  
  vec2 clipSpace = zeroToTwo - 1.0;

  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  
}`;function S(e){const s=u(e,"FRAGMENT_SHADER",_),r=u(e,"VERTEX_SHADER",R),o=A(e,[s,r]),a=e.getAttribLocation(o,"a_position"),i=e.getUniformLocation(o,"u_resolution"),c=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,c);var n=[10,20,80,20,10,30,10,30,80,20,80,30];e.bufferData(e.ARRAY_BUFFER,new Float32Array(n),e.STATIC_DRAW),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(o),e.enableVertexAttribArray(a),e.bindBuffer(e.ARRAY_BUFFER,c);const t={index:a,size:2,type:e.FLOAT,normalise:!1,stride:0,offset:0};e.vertexAttribPointer(t.index,t.size,t.type,t.normalise,t.stride,t.offset),e.uniform2f(i,e.canvas.width,e.canvas.height);const f={primitiveType:e.TRIANGLES,offset:0,count:6};return e.drawArrays(f.primitiveType,f.offset,f.count),o}var T=`precision mediump float;
uniform vec4 u_color;

void main() {
   
   
   gl_FragColor = u_color; 
}`,h=`attribute vec2 a_position;
uniform vec2 u_resolution;

void main() {
  
  vec2 zeroToOne = a_position / u_resolution;

  
  vec2 zeroToTwo = zeroToOne * 2.0;

  
  vec2 clipSpace = zeroToTwo - 1.0;

  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  
}`;function b(e){const s=u(e,"FRAGMENT_SHADER",T),r=u(e,"VERTEX_SHADER",h),o=A(e,[s,r]),a=e.getAttribLocation(o,"a_position"),i=e.getUniformLocation(o,"u_resolution"),c=e.getUniformLocation(o,"u_color"),n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(o),e.enableVertexAttribArray(a),e.bindBuffer(e.ARRAY_BUFFER,n);const t={index:a,size:2,type:e.FLOAT,normalise:!1,stride:0,offset:0};e.vertexAttribPointer(t.index,t.size,t.type,t.normalise,t.stride,t.offset),e.uniform2f(i,e.canvas.width,e.canvas.height);const f={primitiveType:e.TRIANGLES,offset:0,count:6};for(let p=0;p<50;p+=1)F(e,m(300),m(300),m(300),m(300)),e.uniform4f(c,Math.random(),Math.random(),Math.random(),1),e.drawArrays(f.primitiveType,f.offset,f.count);return o}function m(e){return Math.floor(Math.random()*e)}function F(e,s,r,o,a){var i=s,c=s+o,n=r,t=r+a;e.bufferData(e.ARRAY_BUFFER,new Float32Array([i,n,c,n,i,t,i,t,c,n,c,t]),e.STATIC_DRAW)}export{E as Example001,S as Example002,b as Example003};
