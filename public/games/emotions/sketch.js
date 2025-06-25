let video;
let faceapi;
let detections = [];

const detectionOptions = {
  withLandmarks: true,
  withExpressions: true,
  withDescriptors: false,
};

function setup() {
  createCanvas(400, 300);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  faceapi = ml5.faceApi(video, detectionOptions, modelReady);
}

function modelReady() {
  console.log('FaceAPI ready!');
  faceapi.detect(gotResults);
}

function gotResults(err, result) {
  if (err) {
    console.error(err);
    return;
  }

  detections = result;
  faceapi.detect(gotResults);
}

function draw() {
  image(video, 0, 0, width, height);

  if (detections && detections.length > 0) {
    const expressions = detections[0].expressions;
    const sorted = Object.entries(expressions).sort((a, b) => b[1] - a[1]);
    const top = sorted[0];

    if (top[1] > 0.3) {
      document.getElementById('emotion').innerText = `Emotion: ${top[0].toUpperCase()} 😃`;
    } else {
      document.getElementById('emotion').innerText = `Emotion: Not confident`;
    }
  }
}
