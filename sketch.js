function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(1);
}

function draw() {
    var blue = color(0,53,113);
    var white = color(255,255,255);
    var salmon = color(246,127,94);
    var pink = color(250,228,233);
    
    for (n=30; n < width; n+=60) {
        for(p=0; p < height; p += 40) {
            function fillRandom() {
                if (random(100) < 25) {
                    fill(blue);
                } else if (random(100) < 50) {
                    fill(salmon);
                } else if (random(100) <75) {
                    fill(pink);
                } else {
                    fill(white);
                }
            }
            
            fillRandom();
            noStroke();
            
            beginShape();
                vertex(n,p+40);
                vertex(n+60,p);
                vertex(n+60,p+40);
            endShape(CLOSE);            
        }
    }
    
    for (k=30; k < width; k+=60) {
        for(m=0; m < height; m += 40) {
            function fillRandom() {
                if (random(100) < 25) {
                    fill(blue);
                } else if (random(100) < 50) {
                    fill(salmon);
                } else if (random(100) <75) {
                    fill(pink);
                } else {
                    fill(white);
                }
            }
            
            fillRandom();
            noStroke();
            
            rect(k,m,30,40,0,0,50,0);
            
        }
    }
    
    for (q=0; q < width; q+=60) {
        for(s=0; s < height; s += 40) {
            function fillRandom() {
                if (random(100) < 25) {
                    fill(blue);
                } else if (random(100) < 50) {
                    fill(salmon);
                } else if (random(100) <75) {
                    fill(pink);
                } else {
                    fill(white);
                }
            }
            
            fillRandom();
            noStroke();
            
            beginShape();
                vertex(q,s);
                vertex(q+30,s+40);
                vertex(q+60,s);
            endShape(CLOSE);
        }
    }
    
    for (i=0; i < width; i+=60) {
        for(j=0; j < height; j += 40) {
            function fillRandom() {
                if (random(100) < 25) {
                    fill(blue);
                } else if (random(100) < 50) {
                    fill(salmon);
                } else if (random(100) <75) {
                    fill(pink);
                } else {
                    fill(white);
                }
            }
            
            fillRandom();
            noStroke();
            
            rect(i,j,30,40,0,50,0,0);
        }
    }
    
    for (n=0; n < width; n+=60) {
        for(p=0; p < height; p += 40) {
            function fillRandom() {
                if (random(100) < 25) {
                    fill(blue);
                } else if (random(100) < 50) {
                    fill(salmon);
                } else if (random(100) <75) {
                    fill(pink);
                } else {
                    fill(white);
                }
            }
            
            fillRandom();
            noStroke();
            
            beginShape();
                vertex(n,p);
                vertex(n,p+40);
                vertex(n+30,p+40);
            endShape(CLOSE);
        }
    }
    
}
