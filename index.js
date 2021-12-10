$(document).ready(function(){
    
    //Limpiar.
    let clean = function(){
        $('#nombre').val('')
        $('#apellido').val('')
        $('#edad').val('')
        $('#calle').val('')
        $('#numero').val('')
        $('#colonia').val('')
        $('#correo').val('')
        $('#telefono').val('')
        $('#fecha').val('') 
    }

    //Dibujar.
    let drawName =function(){
        $('#AllPerson').html('')

        let Myarray = localStorage.getItem('person')
        Myarray = JSON.parse(Myarray)
        if(Myarray !=null && Myarray.length >= 1){
            for(let i of Myarray){
                console.log(i)
                $('#AllPerson').append('<p>El nombre es:  '+i.Name+' '+ i.LastN+ 
                '    '+'Su edad es:  '+ i.Age+ '   '+ 'La dirección es:  ' +i.Street+ ' '+i.Number+' '+i.Col+ 
                '    '+ 'Su correo electronico es:  '+i.Email+ '   '+ 'Su número de telefono es:  '+i.Cel+ 
                '    '+'Su fecha de nacimiento es:  '+i.Date +'</p> <button type="button" class="btn btn-danger del_btn" value="'+i.Email+'"> X </button>')
            }
        }
        
    }
    
    clean()
    drawName()

    //Agregar.
    $('#agregarBoton').click(function(){
        //campo-nombre
        if($('#nombre').val() == '' || $('#nombre').val() == null || $('#nombre').val().length == 0){
            alert('Favor de llenar los campos faltantes.') 
            return 0
        }
        //campo-edad
        if($('#edad').val() == '' || $('#edad').val() == null || $('#edad').val() <= 17){
            alert('Para continuar usted debe ser mayor de edad.') 
            return 0
        }
        //campo-email
        const array1 = ['@', '.']
        console.log(array1.includes('@', '.'))
        if($('#correo').val() == '' || $('#correo').val() == null || $('#correo').val().includes('@') == false || $('#correo').val().includes('.') == false){
            alert('El correo es incorrecto, favor de ingresarlo correctamente.') 
            return 0
        }
        

        let MyName = $('#nombre').val()
        let MyLasN = $('#apellido').val()
        let MyAge = $('#edad').val()
        let MyStreet = $('#calle').val()
        let MyNumber = $('#numero').val()
        let MyCol = $('#colonia').val()
        let MyEmail = $('#correo').val()
        let MyCel = $('#telefono').val()
        let MyDate = $('#fecha').val()
    
        console.log(MyName,MyLasN,MyAge,MyStreet,MyNumber,MyCol,MyEmail, MyCel, MyDate)
    
        let NewPerson = {}
        NewPerson.Name=MyName
        NewPerson.LastN=MyLasN
        NewPerson.Age=MyAge
        NewPerson.Street=MyStreet
        NewPerson.Number=MyNumber
        NewPerson.Col=MyCol
        NewPerson.Email=MyEmail
        NewPerson.Cel=MyCel
        NewPerson.Date=MyDate
    
        console.log(NewPerson)
    
        let ExArray = localStorage.getItem('person')
        ExArray = JSON.parse(ExArray)
    
        if(ExArray == null || ExArray.length == 0){
            ExArray = []
        }
    
        ExArray.push(NewPerson)
        console.log(ExArray)
        localStorage.setItem('person', JSON.stringify(ExArray))
    
        drawName()
        clean()
    })

    //Eliminar.
    $(document.body).on('click','.del_btn',function(){
        console.log(this.value)

        let del = localStorage.getItem('person')
        del=JSON.parse(del)
        console.log(del)

        del = del.filter(e => e.Email != this.value)

        console.log(del)

        localStorage.setItem('person',JSON.stringify(del))
        drawName()
    })

    
})