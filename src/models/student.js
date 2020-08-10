const { Schema, model } = require('mongoose');

const StudentSchema = new Schema ({
    apellidoPaterno: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },

    apellidoMaterno: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },

    nombres: {
        type: String,
        required: true,
        uppercase: true,
        
    },

    curso: {
        type: String,
        required: true,
        uppercase: true
    },

    sexo: {
        type: String,
        required: true,
        uppercase: true
    },

    fechaNacimiento: {
        type: String,
        required: true,
        uppercase: true
    },
    
    nombrePadre: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },

    numeroPadre: {
        type: Number
    },

    nombreMadre: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },

    numeroMadre: {
        type: Number
    },

    estadoCivil: {
        type: String,
        required: true,
        uppercase: true
    },

    tutor: {
        type: String,
        required: true,
        uppercase: true
    },

    emailTutor: {
        type: String,
        unique: true,
        required: true
    },

    externo: {
        type: String,
        uppercase: true,
        required: true
    },

    numeroExterno: {
        type: Number,
        required: true
    },

    observaciones: {
        type: String,
        uppercase: true
    },

    personaEmergencia: {
        type: String,
        uppercase: true
    },

    numeroEmergencia: {
        type: Number
    },

    escuelaProcedencia: {
        type: String,
        uppercase: true,
        required: true
    },

    emailAlumno: {
        type: String,
        unique: true,
        required: true
    }
});

const Student = model('student', StudentSchema);

module.exports = Student;