export class Transport {
    id: number;
    taraIncarcare: string;
    orasIncarcare: string;
    taraDescarcare: string;
    orasDescarcare: string;
    pret: number;
    km: number;

    constructor(id: number, taraIncarcare: string, orasIncarcare: string, taraDescarcare: string, orasDescarcare: string, pret: number, km: number) {
        this.id = id;
        this.taraIncarcare = taraIncarcare;
        this.orasIncarcare = orasIncarcare;
        this.taraDescarcare = taraDescarcare;
        this.orasDescarcare = orasDescarcare;
        this.pret = pret;
        this.km = km;
    }
}
