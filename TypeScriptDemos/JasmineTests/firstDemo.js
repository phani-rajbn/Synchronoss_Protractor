demo = module.exports = {};

demo.squareOfNumber = function(arg){
    return arg * arg;
}

demo.squareRoot = function(arg){
    return Math.sqrt(arg);
}

demo.getResult = () => true;

demo.mathCalc = function(){
    this.curVal = 0.0;

    this.addFunc = function(v1){
        this.curVal += v1;
        //return this.curVal;
    }

    this.addMany = function(args){
        for(let i =0; i < args.length;i++){
            this.curVal+= args[i];
            
        }return this.curVal;
    }

    this.minus = function(arg){
        this.curVal -= arg;
        return this.curVal;
    }
}
