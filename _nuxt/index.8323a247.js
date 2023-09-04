var d=`precision mediump float;

void main() {
   
   
   gl_FragColor = vec4(1, 0, 0.5, 1); 
}`,p=`attribute vec4 a_position;

void main() {

  
  
  gl_Position = a_position;
}`;function c(e,a,o){const t=e.createShader(e[a]);if(e.shaderSource(t,o),e.compileShader(t),e.getShaderParameter(t,e.COMPILE_STATUS))return t;const n=e.getShaderInfoLog(t);throw e.deleteShader(t),n}function A(e,a){const o=e.createProgram();if(a.forEach(n=>{e.attachShader(o,n)}),e.linkProgram(o),e.getProgramParameter(o,e.LINK_STATUS))return o;const i=e.getProgramInfoLog(o);throw e.deleteProgram(o),i}function R(e){const a=c(e,"FRAGMENT_SHADER",d),o=c(e,"VERTEX_SHADER",p),t=A(e,[a,o]),i=e.getAttribLocation(t,"a_position"),n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n);const f=[0,0,0,.5,.7,0];e.bufferData(e.ARRAY_BUFFER,new Float32Array(f),e.STATIC_DRAW),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(t),e.enableVertexAttribArray(i),e.bindBuffer(e.ARRAY_BUFFER,n);const r={index:i,size:2,type:e.FLOAT,normalise:!1,stride:0,offset:0};e.vertexAttribPointer(r.index,r.size,r.type,r.normalise,r.stride,r.offset);const s={primitiveType:e.TRIANGLES,offset:0,count:3};return e.drawArrays(s.primitiveType,s.offset,s.count),t}var u=`precision mediump float;

void main() {
   
   
   gl_FragColor = vec4(1, 1, 0.5, 1); 
}`,m=`attribute vec4 a_position;

void main() {

  
  
  gl_Position = a_position;
}`;function _(e){const a=c(e,"FRAGMENT_SHADER",u),o=c(e,"VERTEX_SHADER",m),t=A(e,[a,o]),i=e.getAttribLocation(t,"a_position"),n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n);const f=[0,0,0,.5,.7,0];e.bufferData(e.ARRAY_BUFFER,new Float32Array(f),e.STATIC_DRAW),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(t),e.enableVertexAttribArray(i),e.bindBuffer(e.ARRAY_BUFFER,n);const r={index:i,size:2,type:e.FLOAT,normalise:!1,stride:0,offset:0};e.vertexAttribPointer(r.index,r.size,r.type,r.normalise,r.stride,r.offset);const s={primitiveType:e.TRIANGLES,offset:0,count:3};return e.drawArrays(s.primitiveType,s.offset,s.count),t}export{R as Example001,_ as Example002};
