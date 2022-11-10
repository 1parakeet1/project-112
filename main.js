Webcam.set({
    height: 350,
    width: 350,
    image_format: 'png',
    png_quality: 90
    });

    camera = document.getElementById("camera");

    Webcam.attach('#camera');


function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri+'">';
    });}


    
    console.log('ml5_version', ml5.version);


    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aWUu70T8l/model.json", model_Loaded);


    function check(){
        img = document.getElementById("captured_image");
        classifier.classify(img, gotResult);
    }

    function model_Loaded(){
        console.log("Model Loaded!");
    }
    function gotResult(error, results){
        if(error){
            console.error(error)
        }
        else{
            console.log(results)
            document.getElementById("gesture_name").innerHTML = results[0].label;
            percent = result[0].confidence;
            multiply = percent * 100;
            document.getElementById("gesture_accuracy").innerHTML = multiply.toFixed(2) + "%";
            prediction_1 = results[0].label;
            
            speak();
            if(results[0].label == "Amazing"){
                document.getElementById("update_emoji").innerHTML = "&#128076;";
            }
            if(results[0].label == "Best of luck"){
                document.getElementById("update_emoji").innerHTML = "&#128077;";
            }
            if(results[0].label == "Victory"){
                document.getElementById("update_emoji").innerHTML = "&#9996;";
            }
        }
    }



    function speak(){
        synth = window.speechSynthesis;
        speak_1 = "The first prediction is-"+prediction_1;
         utterthis = new SpeechSynthesisUtterance(speak_1);
        synth.speak(utterthis);
        
    }