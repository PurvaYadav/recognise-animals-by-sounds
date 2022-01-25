function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CkgZntctT/model.json',modelReady);
}

function modelReady() {
    classfier.classify(gotResults);
}

function gotResults (error, gotResults ) {
if (error) {
    console.log(error);
}
else {
    
}
}