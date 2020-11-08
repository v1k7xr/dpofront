var vm = new Vue({
    el: '#vue_det',
    data: { 
        input : "0",
        output : "0",
        key: "1",
    },

    computed : {
        convertInput : function() {

            var inputNumber = Number.parseFloat(this.input);

            switch(this.key) {
                case '1':
                    this.output = (inputNumber / 3.2808).toFixed(2) + ' m';
                    break;
                case '2':
                    this.output = (inputNumber * 1.852).toFixed(2) + ' km';
                    break;
                case '3':
                    this.output = (inputNumber * Math.PI / 180).toFixed(3) + ' r';
                    break;
                case '4':
                    this.output = ((inputNumber * 9/5) + 32).toFixed(2) + ' °F';
                    break;
            }

            return "Результат: " + this.output;
        }
    },

    methods: {
        onChange(event) {
            this.key = event.target.value;
        }
    }
 })