export interface ICharachter
{
    count: number;
    next: string;
    results: ICharachterData[];
}

export interface ICharachterData
{
    name: string; 
    height: number; 
    mass: number; 
    hair_color: string; 
    skin_color: string; 
    eye_color: string; 
    birth_year: string; 
    gender: string; 
    homeworld: string; 
    films: string[]; 
    species: []; 
    vehicles: []; 
    starships: []; 
    created: Date; 
    edited: Date; 
    url: string
}
