define(["jquery", "moduleMediator"], function($, moduleMediator){
      var exports = {};
        moduleMediator.publish('muh', 'FFT free to use on module rechenschieber'); 
      
        exports.FFT = function(bufferSize, sampleRate) {
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
    return exports;
});