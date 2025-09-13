---
layout: default
title: Ivan Wang
---

<div id="signature-container"></div>

<div class="contact-info">
  <p>New York, NY | yw6505@nyu.edu | (646) 283-8025 |
  <a href="https://linkedin.com/in/ivan-wang-3b2661287">linkedin.com/in/ivan-wang-3b2661287</a></p>
</div>

<div class="section">
  <h2>EDUCATION</h2>
  <div class="item">
    <div class="item-header">
      <span>New York University</span>
      <span>New York, NY</span>
    </div>
  </div>
</div>

<div class="section">
  <h2>PROFESSIONAL EXPERIENCE</h2>

  <div class="item">
    <div class="item-header">
      <span>Dalian Commodity Exchange</span>
      <span>Dalian, China</span>
    </div>
    <div class="item-header">
      <span>Derivatives Summer Analyst</span>
      <span>Jun 2024 – Aug 2024</span>
    </div>
    <div class="item-content">
      <ul>
        <li>Researched hedging strategies for temperature-linked derivatives…</li>
        <li>Supported regional contract design by analyzing 50+ cities' climate data…</li>
      </ul>
    </div>
  </div>

  <div class="item">
    <div class="item-header">
      <span>Huatai Securities</span>
      <span>Nanjing, China</span>
    </div>
    <div class="item-header">
      <span>Wealth Management Operations Summer Analyst</span>
      <span>May 2023 – Jul 2023</span>
    </div>
    <div class="item-content">
      <ul>
        <li>Engineered an Excel dynamic dashboard…</li>
        <li>Conducted geospatial analysis…</li>
        <li>Evaluated client communication patterns…</li>
      </ul>
    </div>
  </div>
</div>

<script>
let noiseOffset = 0;
let isHovering = false;
let stockData = [];

function setup() {
  let canvas = createCanvas(600, 100);
  canvas.parent('signature-container');
  canvas.mouseOver(() => isHovering = true);
  canvas.mouseOut(() => { isHovering = false; redraw(); });
  textSize(36);
  strokeWeight(1);
  for (let i = 0; i < 20; i++) stockData.push(random(50, 150));
}

function draw() {
  clear();
  if (isHovering) drawStockChart(); else drawSignature();
}

function drawSignature() {
  let signature = "IVAN WANG";
  let x = 50;
  for (let i = 0; i < signature.length; i++) {
    let charY = height/2 + sin(noiseOffset + i * 0.5) * 12;

    if (i < 4) {
      let g = drawingContext.createLinearGradient(x, charY-15, x, charY+15);
      g.addColorStop(0, '#00FFFF'); g.addColorStop(1, '#00FF00');
      drawingContext.fillStyle = g;
    } else {
      fill(0, 255, 0);
    }
    noStroke();
    text(signature[i], x, charY);
    x += textWidth(signature[i]);
  }
  noiseOffset += 0.02;
}

function drawStockChart() {
  let w = width / stockData.length;
  drawingContext.lineWidth = 1.2;
  for (let i = 0; i < stockData.length; i++) {
    let h = stockData[i];
    let x = i * w + w/2, y = height/2;
    stockData[i] = constrain(stockData[i] + random(-2, 2), 60, 140);
    let g = drawingContext.createLinearGradient(x, y - h/2, x, y + h/2);
    g.addColorStop(0, '#00FFFF'); g.addColorStop(1, '#009900');
    drawingContext.strokeStyle = g;
    line(x, y - h/2, x, y + h/2);
    noStroke(); fill(g); rectMode(CENTER);
    rect(x, y - h/2, w * 0.5, 2);
    rect(x, y + h/2, w * 0.5, 2);
  }
}
</script>
