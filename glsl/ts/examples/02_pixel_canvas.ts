import fragmentShaderSource from '@/glsl/02_pixel_canvas/main.frag'
import vertexShaderSource from '@/glsl/02_pixel_canvas/main.vert'
import { createProgram, createShader } from '@/glsl/ts/helpers'

export default function main(gl: WebGLRenderingContext) {
  const fragmentShader = createShader(gl, 'FRAGMENT_SHADER', fragmentShaderSource)
  const vertexShader = createShader(gl, 'VERTEX_SHADER', vertexShaderSource)
  const program = createProgram(gl, [fragmentShader, vertexShader]);
  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const positions = [
    0, 0,
    0, 0.5,
    0.7, 0,
  ]
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
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
  }
  gl.vertexAttribPointer(
    vertexAttributePointerOptions.index,
    vertexAttributePointerOptions.size,
    vertexAttributePointerOptions.type,
    vertexAttributePointerOptions.normalise,
    vertexAttributePointerOptions.stride,
    vertexAttributePointerOptions.offset
  )
  const drawArraysOptions = {
    primitiveType: gl.TRIANGLES,
    offset: 0,
    count: 3
  }
  gl.drawArrays(
    drawArraysOptions.primitiveType,
    drawArraysOptions.offset,
    drawArraysOptions.count
  )
  return program
}