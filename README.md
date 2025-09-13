---
layout: default
title: Ivan Wang
description: Ivan Wang · Quantitative Finance · NYU · Factor models, AI, and portfolio strategies.
---


<div id="signature-container"></div>


<div class="contact-info" style="text-align:center;margin-bottom:30px;">
<p>New York, NY · <a href="mailto:yw6505@nyu.edu">yw6505@nyu.edu</a> · (646) 283-8025 ·
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
<li>Analyzed 50+ cities' climate data and simulated DAT threshold triggers…</li>
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
<li>Conducted geospatial analysis of 10,000+ service records…</li>
<li>Evaluated client communication patterns and sentiment…</li>
</ul>
</div>
</div>
</div>


<script>
let noiseOffset = 0, isHovering = false, stockData = [];
function setup(){
let canvas = createCanvas(600, 100); canvas.parent('signature-container');
canvas.mouseOver(()=>isHovering=true); canvas.mouseOut(()=>{isHovering=false; redraw();});
textSize(36); strokeWeight(1); for (let i=0;i<20;i++) stockData.push(random(50,150));
}
</script>
