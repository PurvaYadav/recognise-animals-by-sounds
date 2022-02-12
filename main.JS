function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QShj5NZWn/model.json',modelReady);
}

function modelReady() {
    classfier.classify(gotResults);
}

function gotResults (error, gotResults ) {
    if (error) {
        console.log(error);
    }
    else {
    console.log(results);
    random_color_r = Math.floor(Math.random()*255) + 1;
    random_color_g = Math.floor(Math.random()*255) + 1;
    random_color_b = Math.floor(Math.random()*255) + 1;
    
    document.getElementById("result_label").innerHTML = 'I can hear - ' + 
    results[0].label;
    
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + 
    (results[0].confidence*100).toFixed(2)+"%";
    
    document.getElementById("result_label").style.color = "rgb("
    +random_color_r+","+random_color_g+","+random_color_r+")";
    
    document.getElementById("result_confidence").style.color = "rgb("
    +random_color_r+","+random_color_g+","+random_color_r+")";
    
    img = document.getElementById("ear");
    
    if (results[0].label =="meowing"){
        img = document.getElementById = 'cat.gif';
    }
    else if (results[0].label =="background noise"){
        img = document.getElementById = 'ear.png.gif';
    }
    else if (results[0].label =="mooing"){
        img = document.getElementById = 'Ip_vache_reactiona_drb_180330.gif';
    }
    else if (results[0].label =="barking"){
        img = document.getElementById = 'tenor.gif';
    }
    else if (results[0].label =="roaring"){
        img = document.getElementById = 'tiger.gif';
    } 
    }
    }