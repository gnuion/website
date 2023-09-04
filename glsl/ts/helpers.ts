export function createShader(gl: WebGLRenderingContext,
  type: 'VERTEX_SHADER' | 'FRAGMENT_SHADER',
  source: string) {
  const shader = gl.createShader(gl[type])!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader)
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader
  }
  const error = (gl.getShaderInfoLog(shader));
  gl.deleteShader(shader)
  throw error;
}


export function createProgram(gl: WebGLRenderingContext, shaders: Array<WebGLShader>) {
  const program = gl.createProgram()!;
  shaders.forEach((shader) => {
    gl.attachShader(program, shader);
  })
  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }
  const error = gl.getProgramInfoLog(program);
  gl.deleteProgram(program);
  throw error;
}


export function randomInt(range: number) {
  return Math.floor(Math.random() * range);
}