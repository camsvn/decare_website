let layers = 15; // Number of layers
let t = 0; // Time variable for animation

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // createCanvas(800, 800, WEBGL);
  // noLoop(); // Stops draw from looping
}

function draw() {
  background(255);
  strokeWeight(0.25);
  stroke(228, 233, 239);
  fill(242, 242, 242);

  let degree = 85;
  let radian = degree * PI / 180;
  rotateX(radian);
  scale(1, 1.55, 0);

  let maxRadius = min(width, height) / 2 - 20;
  let minSize = 1; // Minimum size for the outermost circles
  let maxSize = 20; // Maximum size for the innermost circles

  for (let layer = 1; layer <= layers; layer++) {
    let layerRadius = map(layer, 1, layers, maxRadius, 0);
    let circleSize = map(layer, 1, layers, minSize, maxSize);
    let circlesPerLayer = map(layer, 1, layers, 88, 1);

//     inside to outside
    let rippleOffset = sin(t + layer * 0.5) * 5; // Ripple effect
//     outside to inside
    // let rippleOffset = sin(t - layer * 1) * 5; // Ripple effect

    for (let i = 0; i < circlesPerLayer; i++) {
      let angle = TWO_PI / circlesPerLayer * i;
      let x = (layerRadius + rippleOffset) * cos(angle);
      let y = (layerRadius + rippleOffset) * sin(angle);

      ellipse(x, y, circleSize, circleSize);
    }
  }

  t += 0.04; // Update time variable for animation
}


// you can use the sin() function to modulate the radius of the circles over time. 

// Ripple Effect Calculation:
// Added rippleOffset which modulates the radius of the circles using a sine wave function: let rippleOffset = sin(t + layer * 0.2) * 20;. The 0.2 controls the frequency of the ripple effect across layers, and 20 determines the amplitude of the ripple.


// Update Circle Position:
// Updated the circle positions to include the ripple effect: (layerRadius + rippleOffset) * cos(angle) and (layerRadius + rippleOffset) * sin(angle).

// Animation Control:
// Added t as a time variable to control the ripple effect over time: t += 0.05;. This makes the ripple effect animate smoothly.

// This code will create an animated ripple effect that progresses from the outer layers to the inner layers, giving a dynamic visual effect. You can adjust the amplitude and frequency of the ripple effect by modifying the values in rippleOffset and t.