export interface Idioma {
    id : number;
    idioma : string;
    escrito: string;
    oral: string;
    comprension: string;
}

export interface Experiencia {
    id : number;
    nombre: string;
    empresa: string;
    tareas: string;
    fechaInicio: string;
    fechaFin: string;
    link : string;
    lugar : string;
}

export interface Estudio {
    id : number;
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
    id : number;
    nombre : string;
    institucion : string;
    area : string;
    nivel : string;
    duracion : number;
    descripcion : string;
}

export interface Skill {
    id : number;
    nombre : string;
    cantidad : number;
    type : string;
}


export interface Interes {
    id : number;
    nombre : string;
}

export interface Persona {
    id : number;
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
    interes : Interes[],
    skills : Skill [];
    conocimientos : Conocimiento[],
    estudios : Estudio[],
    experiencias : Experiencia[],
    idiomas : Idioma[]
}

export class Persona implements Persona {
    id = 0;
    nombre =  "";
    ocupacion = "";
    descripcion = "";
    foto = "";
    banner = "";
    fechaNacimiento = "";
    whatsapp = "";
    email = "";
    repositorio = "";
    acercademi = "";
    facebook = "";
    instagram = "";
    tweeter = "";
    interes: Interes[] = [];
    skills : Skill [] = [];
    conocimientos: Conocimiento[] = [];
    estudios: Estudio[] = [];
    experiencias: Experiencia[] = [];
    idiomas: Idioma[] = [];
}

export interface PersonaDTO {
    id : number;
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
    tweeter : string
}