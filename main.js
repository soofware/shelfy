var speechRecogition = window.webkitSpeechRecognition;
var reccognition = new speechRecogition();

var textbox = document.getElementById("textbox")


function start(){
    reccognition.start();
    textbox.innerHTML = ""
}

reccognition.onresult = function(event) {
    speak();
    console.log("if this appears then its working")

var Content = event.results[0][0].transcript;

    textbox.innerHTML = Content
    if(Content =="cheeseburger"){
        console.log("random word to say but ok")
        speak();
    }
}

function speak(){
    Webcam.attach(camera);
    var synt = window.speechSynthesis
    speak_data = "you only had to say cheese"
var saythis = new SpeechSynthesisUtterance(speak_data)
    synt.speak(saythis)
    setTimeout(function(){
        takecheeseburger()
        save()
    }, 5000)
   

}

function takecheeseburger(){
    Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; 
        });

}

function save() {
     link = document.getElementById("link");
      image = document.getElementById("selfie_image").src ;
    link.href = image;
     link.click(); 
}


camera = document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});