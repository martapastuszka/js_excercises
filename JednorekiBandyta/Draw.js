class Draw {
    constructor(){
        this.options = ['red', 'green', 'blue'];
        let _result = this.getDrawResult();
        this.getDrawResult = () => _result;
    }
    drawResult(){
        let colors = [];
        //uzupełnieniae poprzez losowanie
        for (let i =0; i<this.options.length; i++){
            const index = Math.floor(Math.random()*this.options.length);
            const color = this.options[index];
            colors.push(color);
        }
        return colors;
    }
}

// const draw = new Draw()