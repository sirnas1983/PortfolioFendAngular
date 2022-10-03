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
    fechaInicio: Date;
    fechaFin: Date;
    link : string;
    lugar : string;
}

export interface Estudio {
    titulo: string;
    institucion : string;
    lugar : string;
    nivel : string;
    fechaInicio : Date;
    fechaFin : Date;
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
}

export interface General {
    nombre : string,
	ocupacion : string,
	descripcion : string,
	foto : string,
	banner : string,
	nacimiento : Date,
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
    general : General[],
    interes : Interes[],
    softSkill : Skill[],
    hardSkill : Skill[],
    conocimientos : Conocimiento[],
    estudios : Estudio[],
    experiencias : Experiencia[],
    idiomas : Idioma[]
}