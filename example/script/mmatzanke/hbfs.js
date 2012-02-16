define(["jquery", "moduleMediator", "mmatzanke/rechenschieber"], function($, moduleMediator, rechenschieber){
    var exports = {};
    
    exports.init = function(elem){
        //moduleMediator.publish("muh", "HARDER","BETTER","FASTER","STRONGER");
        $("head").append("<link rel='stylesheet' href='script/mmatzanke/hbfs.css'>");
        
        var clicked = false;
        var hbfsBTN = $("#hbfsBTN").attr("value");
        var eqBTN = $("#EqBTN").attr("value");
        var stopText = "Stop that Sh**"; 
        var divList = document.querySelectorAll("div");
        var i;
        var divArray = Array.prototype.slice.call(divList, 0);
        //Button ONE
        $('#hbfsBTN', elem).click(function(){
            if(clicked == false){
                          clicked = true;
                          $("#EqBTN").attr("disabled", true);
                          $("#hbfsBTN").attr("value", stopText);
                                var hbfs = new Array("HARDER","BETTER","FASTER","STRONGER");
                                
                                    for (i=3 ; i < divArray.length; ++i) { //TODO-Liste :S
                                           $(divArray[i]).hover(hoverIn, hoverOut);
                         };
            } 
            else{
                clicked = false;
                    $("#EqBTN").attr("disabled", false);
                    $("#hbfsBTN").attr("value", hbfsBTN);
                         for (i=3 ; i < divArray.length; ++i) { //TODO-Liste :S
                             $(divArray[i]).css({paddingLeft : "", opacity: ""}); 
                             $(divArray[i]).off();                                           
                   };
            }
                  
        });//end EqBtn Click
        
        
        
        //Button TWO
        $('#EqBTN', elem).click(function(){
             if(!$.browser.mozilla){
                alert('use MozFF!!!');
                return;
              }
           
           //get HTML 5 audio
            var audio = document.getElementById('acMM');
            //create List
            var liList = document.querySelectorAll("li");
            var liArray = Array.prototype.slice.call(liList, 0); 
           
      
           if(clicked == false){
                   clicked = true;
    
           $("#hbfsBTN").attr("disabled", true);
           
           $("#EqBTN").attr("value", stopText);           
           
           $('body').css({backgroundColor:"rgb(0,0,0)"});
                        
                     //EventHandler Audio-Event
                     function audioAv(event) {
                        var fb = event.frameBuffer,
                            signal = new Float32Array(fb.length/channels),
                            magnitude;
                
                        for (var i = 0, fbl = frameBufferLength / 2; i < fbl; i++ ) {
                          signal[i] = (fb[2*i] + fb[2*i+1]) / 2;
                        }
                
                        fft.forward(signal);
                                                                                   
                        for (var i = 0; i < fft.spectrum.length; i++ ) {
                            magnitude = fft.spectrum[i]*1000; //oscillograph Ausschlag :S
                                //animate this stf for rly n1 disco effects :S
                                $(liArray[i]).animate({paddingLeft: magnitude+(i)+"", color: "rgb(15, 99, 30)"}, {duration: 2, queue: false, complete: function(){}});
                                $(liArray[i]).css({color: "rgb("+Math.floor(Math.random()*256)+","+
                                                              +Math.floor(Math.random()*256)+","+
                                                              +Math.floor(Math.random()*256)+")",
                                                 backgroundColor: "rgb("+Math.floor(Math.random()*32)+","+
                                                              +Math.floor(Math.random()*32)+","+
                                                              +Math.floor(Math.random()*32)+")"}
                                                              );           
                        }
                      }//End audioAvailable

      //get init-params of the audio      
      var channels          = audio.mozChannels;
      var rate              = audio.mozSampleRate;
      var frameBufferLength = audio.mozFrameBufferLength;
      
      
      var fft = new rechenschieber.FFT(frameBufferLength/channels, rate);
      //Audio-Events sequence analyze                                       
      audio.addEventListener('MozAudioAvailable', audioAv, false);                                   
    
       rechenschieber.FFT.prototype.forward = function(buffer){
                                          
                                        var bufferSize   = this.bufferSize,
                                            cosTable     = this.cosTable,
                                            sinTable     = this.sinTable,
                                            reverseTable = this.reverseTable,
                                            real         = this.real,
                                            imag         = this.imag,
                                            spectrum     = this.spectrum;
                                
                                        if ( bufferSize !== buffer.length ) {
                                          throw "Supplied buffer is not the same size as defined FFT. FFT Size: " + bufferSize + " Buffer Size: " + buffer.length;
                                        }
                                
                                        for ( var i = 0; i < bufferSize; i++ ) {
                                          real[i] = buffer[reverseTable[i]];
                                          imag[i] = 0;
                                        }
                                
                                        var halfSize = 1,
                                            phaseShiftStepReal, 
                                            phaseShiftStepImag,
                                            currentPhaseShiftReal,
                                            currentPhaseShiftImag,
                                            off,
                                            tr,
                                            ti,
                                            tmpReal,    
                                            i;
                                
                                        while ( halfSize < bufferSize ) {
                                          phaseShiftStepReal = cosTable[halfSize];
                                          phaseShiftStepImag = sinTable[halfSize];
                                          currentPhaseShiftReal = 1.0;
                                          currentPhaseShiftImag = 0.0;
                                
                                          for ( var fftStep = 0; fftStep < halfSize; fftStep++ ) {
                                            i = fftStep;
                                
                                            while ( i < bufferSize ) {
                                              off = i + halfSize;
                                              tr = (currentPhaseShiftReal * real[off]) - (currentPhaseShiftImag * imag[off]);
                                              ti = (currentPhaseShiftReal * imag[off]) + (currentPhaseShiftImag * real[off]);
                                
                                              real[off] = real[i] - tr;
                                              imag[off] = imag[i] - ti;
                                              real[i] += tr;
                                              imag[i] += ti;
                                
                                              i += halfSize << 1;
                                            }
                                
                                            tmpReal = currentPhaseShiftReal;
                                            currentPhaseShiftReal = (tmpReal * phaseShiftStepReal) - (currentPhaseShiftImag * phaseShiftStepImag);
                                            currentPhaseShiftImag = (tmpReal * phaseShiftStepImag) + (currentPhaseShiftImag * phaseShiftStepReal);
                                          }
                                
                                          halfSize = halfSize << 1;
                                    }
                                
                                        i = bufferSize/2;
                                        while(i--) {
                                          spectrum[i] = 2 * Math.sqrt(real[i] * real[i] + imag[i] * imag[i]) / bufferSize;
                                    }
                };
                       
                       //init GUI and play Harder
                       $("#EqBTN").animate({marginTop: '80'});
                       $('ul').animate({rotate: '-90deg', "z-index" : "998"},{queue: false, duration: 2000, complete:function() { 
                                       audio.play();                    
                                     }});
                           //$(liArray[i]).animate({heigth: '2'}, 1000, function() {/*n' maybe*/});
                                 
             }else{
                 clicked = false;
                 $('body').css({backgroundColor:""});
                 $("#hbfsBTN").attr("disabled", false);
                 $("#EqBTN").attr("value", eqBTN);
                    
                        
                         
                  $("#EqBTN").animate({marginTop : ""});
                  $("ul").animate({rotate: "0deg", "z-index" : ""},{queue: false, duration: 2000, complete:function() { 
                                         audio.pause();            
                                     }
                        }
                      );
                  }      
        }); //end EqBtn Click
        
       
        
   
  };//end exports.init 
   
   
   
   //Btn ONE
   function hoverIn(e) {
          $(this).animate({
                paddingLeft: e.clientX-100,
                opacity: "0.5",
            }, 200, function() {
        });
    }//end hoverin
    
    //Btn ONE
   function hoverOut(e, pT) {
       console.log(pT);
        $(this).animate({
                paddingLeft: "",
                opacity: "1.0"
            }, 1000, function() {                  
        });
   }//end hoverout  
  return exports;
});