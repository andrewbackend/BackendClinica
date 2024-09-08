window.addEventListener('load', () => {
    const form = document.querySelector('#appointmentForm')
    const patientName = document.getElementById('patientName')
    const patientID = document.getElementById('patientID')
    const patientDOB = document.getElementById('patientDOB')
    const patientGender = document.getElementById('patientGender')
    const patientPhone = document.getElementById('patientPhone');
    const email = document.getElementById('patientEmail');
    form.patientPhone.addEventListener("keypress", soloNumeros, false);

    // ARTURO 
    const fechaCita = document.getElementById('appointmentDate')
    const horaCita = document.getElementById('appointmentTime')
    const motivoConsulta = document.getElementById('appointmentReason')
    const especialidad = document.getElementById('specialty')
    const drAsignado = document.getElementById('doctor')
    const tipoConsulta = document.getElementById('appointmentType')
    //ARTURO FIN

    form.addEventListener('submit' , (e) => {

    e.preventDefault()
    validarCampos()
})


const validarCampos = () => {
    // capturar los valores ingresados por el usuario
    const patientNameValor = patientName.value.trim()
    const patientIDValor = patientID.value.trim()
    const patientDOBValor = patientDOB.value.trim()
    const patientGenderValor= patientGender.value.trim()
    const patientPhoneValor = patientPhone.value.trim()
    const emailValor = email.value.trim()

    //ARTURO

    const fechaCitaValor = fechaCita.value.trim()
    const horaCitaValor = horaCita.value.trim()
    const motivoConsultaValor = motivoConsulta.value.trim()
    const especialidadValor = especialidad.value.trim()
    const drAsignadoValor = drAsignado.value.trim()
    const tipoConsultaValor = tipoConsulta.value.trim()

    // ARTURO FIN

    if(!patientNameValor){
        validaFalla(patientName, 'Campo Vacio, Nombre Completo');return false;
    } else {
        validaOk(patientName)
    }
    let ochocaracteres = /.{8,}/.test(patientIDValor)
    let nuevecaracteres = /.{9,}/.test(patientPhoneValor)
    //validando dni
    if(!patientIDValor){
        validaFalla(patientID, 'Campo Vacio, DNI');return false;
    } else if (!ochocaracteres){
            validaFalla(patientID, 'DNI, Debe tener 8 caracteres como minimo');return false;
    }else {
        validaOk(patientID)
    }
    if(!patientDOBValor){
        validaFalla(patientDOB, 'Campo Vacio, Fecha Nacimiento');return false;
    } else {
        validaOk(patientDOB)
    }
    if(patientGenderValor==0){
        validaFalla(patientGender, 'Campo Vacio, Sexo');return false;
    } else {
        validaOk(patientGender)
    }
    if(!patientPhoneValor){
        validaFalla(patientPhone, 'Campo Vacio, Telefono');return false;
    } else if (!nuevecaracteres){
            validaFalla(patientPhone, 'Telefono, debe tener 9 caracteres como minimo');return false;
    }else {
        validaOk(patientPhone)
    }

    // validando como email

    if(!emailValor){
        validaFalla(email, 'Campo Vacio')
    } else if(!validaEmail(emailValor)){
        validaFalla(email, 'El e-mail no es valido')
    }else {
        validaOk(email)
    }

     // ARTURO
    let minQuinceCaracteres = /^.{15,}$/.test(motivoConsultaValor)

    if (!fechaCitaValor) {
        validaFalla(fechaCita, 'Campo Vacio, Fecha de la cita')
    } else if (!validarFecha(fechaCitaValor)) {
        validaFalla(fechaCita, 'Error En el formato')
    } else {
        validaOk(fechaCita) // FORMATO 2024-09-20
    }

    if (!horaCitaValor){
        validaFalla(horaCita, 'Campo Vacio, Hora de la cita')
    }else{
        validaOk(horaCita)
    }

    if (!motivoConsultaValor){
        validaFalla(motivoConsulta, 'Campo Vacio, Motivo de la cita')
    }else if(!minQuinceCaracteres){
        validaFalla(motivoConsulta, 'Debe especificar mejor el motivo de la consulta.')
    }else{
        validaOk(motivoConsulta)
    }

    if(especialidadValor==0){
        validaFalla(especialidad, 'Campo Vacio, Especialista de la cita')
    }else{
        validaOk(especialidad)
    }

    if(!drAsignadoValor){
        validaFalla(drAsignado, 'Campo vacio, Doctor de la cita')
    }else{
        validaOk(drAsignado)
    }

    if(tipoConsultaValor==0){
        validaFalla(tipoConsulta, 'Campo Vacio, Consultorio de la cita')
    }else {
        validaOk(tipoConsulta)
    }
    
    // ARTURO FIN

}   
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje
    
        formControl.className = 'form-control falla'
    }
    const validaOk= (input) => {
        const formControl= input.parentElement
        formControl.className = 'form-control Ok'
        const aviso = formControl.querySelector('p')
        aviso.innerText = "";

    }
    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    function soloNumeros(e){
        var key = window.event ? e.which : e.keyCode;
        if (key < 48 || key > 57) {
          e.preventDefault();
        }
    }

// ARTURO
    const validarFecha = (fecha) => {
        const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
        return regex.test(fecha)
    }




})