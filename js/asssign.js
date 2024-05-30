
    document.getElementById('b-but').addEventListener('click' ,function(){
        document.getElementById('input-field').style.fontWeight="bold"
        
    })

    //italic
    document.getElementById('I-but').addEventListener('click' ,function(){
        document.getElementById('input-field').style.fontStyle="italic"
        
    })

    //color

    document.getElementById('color-def').addEventListener('click' ,function(){
        document.getElementById('input-field').style.color =event.target.value
        
    })

    ///alignment
    //left
    document.getElementById('left-but').addEventListener('click' ,function(){
        document.getElementById('input-field').style.textAlign = 'start'
        
    })

    //center
    document.getElementById('center-but').addEventListener('click' ,function(){
        document.getElementById('input-field').style.textAlign = 'center'
        
    })

    //right
    document.getElementById('right-but').addEventListener('click' ,function(){
        document.getElementById('input-field').style.textAlign = 'end'
        
    })
