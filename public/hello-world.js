window.bundle = {
    load: function(config){
        this.el = document.createElement('div');
        document.body.appendChild(this.el);
    },
    start: function(){
        this.el.innerHTML = '<h1>Hello World!</h1>';
    }
};
