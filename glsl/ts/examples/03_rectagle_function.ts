import fragmentShaderSource from '@/glsl/03_rectangle_function/main.frag'
import vertexShaderSource from '@/glsl/03_rectangle_function/main.vert'
import { createProgram, createShader } from '@/glsl/ts/helpers'

export default function main(gl: WebGLRenderingContext) {
  const fragmentShader = createShader(gl, 'FRAGMENT_SHADER', fragmentShaderSource);
  const vertexShader = createShader(gl, 'VERTEX_SHADER', vertexShaderSource);
  const program = createProgram(gl, [fragmentShader, vertexShader]);
  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
  const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
  const colorUniformLocation = gl.getUniformLocation(program, "u_color");
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  // webgl utils
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(program);
  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const vertexAttributePointerOptions = {
    index: positionAttributeLocation,
    size: 2,
    type: gl.FLOAT,
    normalise: false,
    stride: 0,
    offset: 0,
  };
  gl.vertexAttribPointer(
    vertexAttributePointerOptions.index,
    vertexAttributePointerOptions.size,
    vertexAttributePointerOptions.type,
    vertexAttributePointerOptions.normalise,
    vertexAttributePointerOptions.stride,
    vertexAttributePointerOptions.offset
  );
  gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
  const drawArraysOptions = {
    primitiveType: gl.TRIANGLES,
    offset: 0,
    count: 6
  };
  for (let ii = 0; ii < 50; ii += 1) {
    setRectangle(
      gl, randomInt(300), randomInt(300), randomInt(300), randomInt(300));
    gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1);
    gl.drawArrays(
      drawArraysOptions.primitiveType,
      drawArraysOptions.offset,
      drawArraysOptions.count
    );
  }
  return program;
}

function randomInt(range: number) {
  return Math.floor(Math.random() * range);
}


function setRectangle(gl: WebGLRenderingContext, x: number, y: number, width: number, height: number) {
  var x1 = x;
  var x2 = x + width;
  var y1 = y;
  var y2 = y + height;
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    x1, y1,
    x2, y1,
    x1, y2,
    x1, y2,
    x2, y1,
    x2, y2,
  ]), gl.STATIC_DRAW);
}