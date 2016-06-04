(function () {
    "use strict";
    // Get global canvas and store it in GTE
    // GTE is initialized by the library
    GTE.canvas = SVG('canvas').size("100%", "100%").attr({'style': 'background: #fff'});
    GTE.tools = new GTE.UI.Tools();
    // var playerListener = function(picker) {
    //     var closeControl = true;
    //     picker.addEventListener("focus", function() {
    //         // Focus is fired both when the picker opens and closes
    //         // closeControl variable is used to control whether the
    //         // picker is opening or closing
    //         closeControl = !closeControl;
    //         if (closeControl) {
    //             GTE.tree.changePlayerColour(picker.getAttribute("player"), picker.value);
    //         }
    //     });
    // };
    GTE.STORAGE = window.localStorage;

    // Always start with root and two children
    GTE.tools.newTree();
    GTE.tree.clear();

    document.getElementById("button-new").addEventListener("click", function(){
        GTE.tools.newTree();
        return false;
    });

    document.getElementById("button-strategic").addEventListener("click", function(){
        if(GTE.tools.isetToolsRan)
            GTE.tools.toStrategicForm();
        else
            alert("first assign payoffs to each player");
        return false;
    });

    document.getElementById("button-tree").addEventListener("click", function(){
        GTE.tree.draw();
        return false;
    });

    document.getElementById("button-independent-strategic-general").addEventListener("click", function(){
        var x = prompt("Enter the number of moves for the first player", "2");
        var y = prompt("Enter the number of moves for the second player", "2");
        GTE.STRATEGICFORMMODE = GTE.STRATEGICFORMMODES.GENERAL;
        GTE.tools.createIndependentStrategicForm(x, y);
        return false;
    });

    document.getElementById("button-independent-strategic-zerosum").addEventListener("click", function(){
        var x = prompt("Enter the number of moves for the first player", "2");
        var y = prompt("Enter the number of moves for the second player", "2");
        GTE.STRATEGICFORMMODE = GTE.STRATEGICFORMMODES.ZEROSUM;
        GTE.tools.createIndependentStrategicForm(x, y);
        return false;
    });

    document.getElementById("button-independent-strategic-symmetric").addEventListener("click", function(){
        var x = prompt("Enter the number of moves for the game", "2");
        GTE.STRATEGICFORMMODE = GTE.STRATEGICFORMMODES.SYMMETRIC;
        GTE.tools.createIndependentStrategicForm(x, x);
        return false;
    });

    document.getElementById("button-add").addEventListener("click", function(){
        GTE.tools.switchMode(GTE.MODES.ADD);
        return false;
    });

    document.getElementById("button-remove").addEventListener("click", function(){
        GTE.tools.switchMode(GTE.MODES.DELETE);
        return false;
    });

    document.getElementById("button-merge").addEventListener("click", function(){
        GTE.tools.switchMode(GTE.MODES.MERGE);
        return false;
    });

    document.getElementById("button-dissolve").addEventListener("click", function(){
        GTE.tools.switchMode(GTE.MODES.DISSOLVE);
        return false;
    });

    var playerButtons = document.getElementsByClassName("button-player");
    for (var i = 0; i < playerButtons.length; i++) {
        playerButtons[i].addEventListener("click",
            GTE.tools.buttonPlayerHandler(playerButtons[i].getAttribute("player")));
    }

    document.getElementById("button-player-more").addEventListener("click", function(){
        GTE.tools.addPlayer();
        return false;
    });

    document.getElementById("button-player-less").addEventListener("click", function(){
        GTE.tools.removeLastPlayer();
        return false;
    });

    document.getElementById("button-matrix").addEventListener("click", function(){
        var el = document.getElementById("matrixPopup");
        el.style.display = (el.style.display == "block") ? "none" : "block";
        el.style.position = "absolute";
        el.style.top = 0;
        el.style.left = 0;
        return false;
    });

    document.getElementById("button-matrix-close").addEventListener("click", function(){
        var el = document.getElementById("matrixPopup");
        el.style.display = (el.style.display == "block") ? "none" : "block";
        return false;
    });

    document.getElementById("matrix-settings").addEventListener("submit", function(e){
        var el = document.getElementById("matrixPopup");
        el.style.display = (popup.style.display == "block") ? "none" : "block";
        return false;
    });

    /*
        Hide irrelevant buttons for strategic.html
    */
    var hideButtons = function() {
        document.getElementById('button-tree').style.display = 'none' ;
        document.getElementById('button-strategic').style.display = 'none' ;
        document.getElementById('button-add').style.display = 'none' ;
        document.getElementById('button-remove').style.display = 'none' ;
        document.getElementById('button-player-more').style.display = 'none' ;
        document.getElementById('button-player-less').style.display = 'none' ;
        document.getElementById('button-merge').style.display = 'none' ;
        document.getElementById('button-dissolve').style.display = 'none' ;


    };
    hideButtons();

    var matrixPopup = document.getElementById("matrixPopup");
    var matrix_bar = document.getElementById("matrix_bar");
    var offset = { x: 0, y: 0 };

}());
