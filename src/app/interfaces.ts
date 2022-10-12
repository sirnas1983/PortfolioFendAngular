export interface Idioma {
    idioma : string;
    escrito: string;
    oral: string;
    comprension: string;
}

export interface Experiencia {
    nombre: string;
    empresa: string;
    tareas: string;
    fechaInicio: string;
    fechaFin: string;
    link : string;
    lugar : string;
}

export interface Estudio {
    titulo: string;
    institucion : string;
    lugar : string;
    nivel : string;
    fechaInicio : string;
    fechaFin : string;
    promedio : number;
    link : string;
}

export interface Conocimiento {
    nombre : string;
    institucion : string;
    area : string;
    nivel : string;
    duracion : number;
    descripcion : string;
}

export interface Skill {
    nombre : string;
    cantidad : number;
    type : string;
}

export interface General {
    nombre : string,
	ocupacion : string,
	descripcion : string,
	foto : string,
	banner : string,
	fechaNacimiento : string,
	whatsapp : string,
	email : string,
	repositorio : string,
	acercademi : string,
    facebook : string,
    instagram : string,
    tweeter : string,
}

export interface Interes {
    nombre : string;
}

export interface Persona {
    general : General,
    interes : Interes[],
    softSkill : Skill[],
    hardSkill : Skill[],
    conocimientos : Conocimiento[],
    estudios : Estudio[],
    experiencias : Experiencia[],
    idiomas : Idioma[]
}

export class Personas implements Persona {
    general: General = {
        nombre : "",
        ocupacion : "",
        descripcion : "",
        foto : "",
        banner : "",
        fechaNacimiento : "",
        whatsapp : "",
        email : "",
        repositorio : "",
        acercademi : "",
        facebook : "",
        instagram : "",
        tweeter : "",
    };
    interes: Interes[] = [];
    softSkill: Skill[] = [];
    hardSkill: Skill[] = [];
    conocimientos: Conocimiento[] = [];
    estudios: Estudio[] = [];
    experiencias: Experiencia[] = [];
    idiomas: Idioma[] = [];

}
