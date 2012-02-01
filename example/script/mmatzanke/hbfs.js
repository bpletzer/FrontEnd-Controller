define(["jquery", "moduleMediator", "libs/jQuery/jquery-acrs.wrapper", "libs/jQuery/jquery-css-transform.wrapper"], function($, moduleMediator){
    var exports = {};
    
    exports.init = function(elem){
        //moduleMediator.publish("muh", "HARDER","BETTER","FASTER","STRONGER");
        $("head").append("<link rel='stylesheet' href='script/mmatzanke/hbfs.css'>");
        
        
        //Button ONE
        $('#hbfsBTN', elem).click(function(){
            $("#hbfsBTN").attr("value", "Stop that Sh**");
                    var hbfs = new Array("HARDER","BETTER","FASTER","STRONGER");
                    var divList = document.querySelectorAll("div");
                    var i;
                    var divArray = Array.prototype.slice.call(divList, 0);
                        for (i=3 ; i < divArray.length; ++i) { //TODO-Liste :S
                               $(divArray[i]).hover(hoverIn, hoverOut);
             };           
        });//end EqBtn Click
        
        //Button TWO
        $('#EqBTN', elem).click(function(){
            if(!$.browser.mozilla){
                alert('use MozFF!!!');
                return;
            }
           $('body').css({backgroundColor:"rgb(0,0,0)"});
           var liList = document.querySelectorAll("li");
           var liArray = Array.prototype.slice.call(liList, 0); 
                        
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
                                $(liArray[i]).animate({paddingLeft: magnitude+(i)+"", color: "rgb(15, 99, 30)"}, {duration: 2, queue: true }, function() {});
                                $(liArray[i]).css({color: "rgb("+Math.floor(Math.random()*256)+","+
                                                              +Math.floor(Math.random()*256)+","+
                                                              +Math.floor(Math.random()*256)+")",
                                                 backgroundColor: "rgb("+Math.floor(Math.random()*32)+","+
                                                              +Math.floor(Math.random()*32)+","+
                                                              +Math.floor(Math.random()*32)+")"}
                                                              );           
                        }
                      }//End audioAvailable
        
      //get HTML 5 audio
      var audio = document.getElementById('acMM');
      //get init-params of the audio      
      var channels          = audio.mozChannels;
      var rate              = audio.mozSampleRate;
      var frameBufferLength = audio.mozFrameBufferLength;
      
        
      var fft = new FFT(frameBufferLength/channels, rate);
      //Audio-Events sequence analyze                                       
      audio.addEventListener('MozAudioAvailable', audioAv, false);
                                    
                                    
                                    
                                     // Special guest FFT by MozFFDeveloper
                                      function FFT(bufferSize, sampleRate) {
                                        this.bufferSize   = bufferSize;
                                        this.sampleRate   = sampleRate;
                                        this.spectrum     = new Float32Array(bufferSize/2);
                                        this.real         = new Float32Array(bufferSize);
                                        this.imag         = new Float32Array(bufferSize);
                                        this.reverseTable = new Uint32Array(bufferSize);
                                        this.sinTable     = new Float32Array(bufferSize);
                                        this.cosTable     = new Float32Array(bufferSize);
                                
                                        var limit = 1,
                                            bit = bufferSize >> 1;
                                
                                        while ( limit < bufferSize ) {
                                          for ( var i = 0; i < limit; i++ ) {
                                            this.reverseTable[i + limit] = this.reverseTable[i] + bit;
                                          }
                                
                                          limit = limit << 1;
                                          bit = bit >> 1;
                                        }
                                
                                        for ( var i = 0; i < bufferSize; i++ ) {
                                          this.sinTable[i] = Math.sin(-Math.PI/i);
                                          this.cosTable[i] = Math.cos(-Math.PI/i);
                                        }
                                      };

                                      FFT.prototype.forward = function(buffer) {
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
                       var i;
                       for(i=0; i <= liArray.length; ++i){
                           $(liArray[i]).css({color: 'white', backgroundColor: 'black'});
                           $('body').animate({rotate: '-90deg'}, 2000, function() { 
                                       audio.play();                    
                                     });
                           $(liArray[i]).animate({heigth: '2'}, 1000, function() {/*n' maybe*/});; 
                       }                                  
        }); //end EqBtn Click
        
   
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
  };//end exports.init 
   
  return exports;
});