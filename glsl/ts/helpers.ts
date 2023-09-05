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

export function createProgramFromScript(gl: WebGLRenderingContext, scripts: Array<string>) {
  const shaders = [createShader(gl, 'VERTEX_SHADER', scripts[0]), createShader(gl, 'FRAGMENT_SHADER', scripts[1])]
  return createProgram(gl, shaders)
}


export function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
  // Lookup the size the browser is displaying the canvas in CSS pixels.
  const displayWidth = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;

  // Check if the canvas is not the same size.
  const needResize = canvas.width !== displayWidth ||
    canvas.height !== displayHeight;

  if (needResize) {
    // Make the canvas the same size
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }

  return needResize;
}

export function randomInt(range: number) {
  return Math.floor(Math.random() * range);
}