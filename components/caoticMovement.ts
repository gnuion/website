export class CaoticMovement {
  #items: Array<{
    size: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
    color: string;
  }>;
  #colorArray;
  #cursor = [0, 0]
  #maxSpeed = 1;
  #num;
  #ctx;
  #defaultSize;
  #maxSize = 100;
  #minSize = 20;
  constructor({ num, ctx, colorArray = [] }: {
    num: number;
    ctx: CanvasRenderingContext2D;
    colorArray?: Array<string>
  }) {
    this.#ctx = ctx;
    this.#num = num;
    this.#defaultSize = 20;
    this.#colorArray = colorArray || [];
    this.#items = this.createItems();
  }

  set_cursor(cursor: [number, number]) {
    this.#cursor = cursor
  }

  private createItem() {
    const color = this.#colorArray[Math.floor(Math.random() * this.#colorArray.length)]
    const size = this.#defaultSize;
    const x = Math.random() * (this.#ctx.canvas.width - size) + size / 2
    const y = Math.random() * (this.#ctx.canvas.height - size) + size / 2
    const dx = Math.random() * this.#maxSpeed
    const dy = Math.random() * this.#maxSpeed
    return { color, size, x, y, dx, dy }
  }
  private createItems() {
    const result = []
    for (let i = 0; i < this.#num; i += 1) {
      result.push(this.createItem())
    }
    return result
  }
  private updateItem(item: ReturnType<typeof this.createItem>) {
    const { size, x, y, dx, dy } = item;
    const [width, height] = [this.#ctx.canvas.width, this.#ctx.canvas.height]
    if (x + size / 2 >= width
      || x - size / 2 <= 0) {
      item.dx = -dx
    }
    if (y + size / 2 >= height
      || y - size / 2 <= 0) {
      item.dy = -dy
    }
    item.x += item.dx
    item.y += item.dy

    if (false) {
      // interaction
      const [mx, my] = this.#cursor
      if (
        mx - x <= 80 &&
        mx - x >= -80 &&
        my - y <= 80 &&
        my - y >= -80 &&
        item.size < this.#maxSize
      ) {
        item.size += 1;
        item.x -= 1;
        item.y -= 1;
      } else if (size > this.#minSize) {
        item.size -= 1;
        item.x += 1;
        item.y += 1;
      }
    }

  }
  private drawItem(item: ReturnType<typeof this.createItem>, shape = 'diamond') {
    const c = this.#ctx
    const { color, size, x, y } = item
    if (shape == 'diamond') {
      c.beginPath()
      c.moveTo(x, y)
      c.lineTo(x - size / 2, y)
      c.lineTo(x, y + size / 2)
      c.lineTo(x + size / 2, y)
      c.lineTo(x, y - size / 2)
      c.lineTo(x - size / 2, y)
      c.closePath();
      c.fillStyle = color
      c.fill()
    } else if (shape == 'circle') {
      c.beginPath();
      c.arc(x, y, size / 2, 0, 360);
      c.closePath
      c.fillStyle = color
      c.fill()
    }
  }
  draw({ doUpdate = false }) {
    this.#items.forEach((item) => {
      this.drawItem(item, 'circle')
      if (doUpdate) {
        this.updateItem(item)
      }
    })
  }
  animate() {
    this.#ctx.clearRect(0, 0, this.#ctx.canvas.width, this.#ctx.canvas.height)
    requestAnimationFrame(this.animate.bind(this));
    this.draw({ doUpdate: true })
  }

}
