let textY = 0;
let noiseOffset = 0;

function setup() {
  createCanvas(600, 200);
  textSize(48);
  textStyle(BOLD);
  stroke(0, 150, 255); // 科技蓝
}

function draw() {
  background(0, 5); // 半透明背景（拖尾效果）
  
  // 动态网格
  drawGrid();
  
  let signature = "Ivan Wang";
  let x = 50;
  
  // 每个字母单独波动
  for (let i = 0; i < signature.length; i++) {
    let charY = 100 + sin(noiseOffset + i * 0.5) * 30; // 用噪声函数生成波动
    fill(255, 200); 
    text(signature[i], x, charY);
    x += textWidth(signature[i]);
  }
  
  noiseOffset += 0.05; // 波动速度
}

// 画极简网格
function drawGrid() {
  stroke(100, 50);
  for (let i = 0; i < width; i += 40) {
    line(i, 0, i, height);
  }
  for (let j = 0; j < height; j += 40) {
    line(0, j, width, j);
  }
}

if (mouseX > 50 && mouseX < 300) {
    stroke(255, 0, 0);
    drawStockChart(); // 自定义函数画K线
  }