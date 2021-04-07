import {LitElement, html, customElement, property, css, unsafeCSS} from 'lit-element';
import {TrancheAge, TrancheAgeSelected} from "../components/vmd-tranche-age-selector.component";
import {Departement, DepartementSelected} from "../components/vmd-departement-selector.component";
import {Router} from "../routing/Router";
import globalCss from "../styles/global.scss";
import searchDoseCss from "../styles/components/_searchDose.scss";
import searchAppointment from "../styles/components/_searchAppointment.scss";

@customElement('vmd-home')
export class VmdHomeView extends LitElement {

    //language=css
    static styles = [
        css`${unsafeCSS(globalCss)}`,
        css`${unsafeCSS(searchDoseCss)}`,
        css`${unsafeCSS(searchAppointment)}`,
        css`
            :host {
                display: block;
            }
        `
    ];

    @property({type: String}) trancheAge: TrancheAge|undefined = undefined;
    @property({type: Object}) departement: Departement|undefined = undefined;

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="searchDose">
                <h1 class="searchDose-title">
                    Trouvez une dose de vaccin <span class="text-secondary">facilement</span> et <span class="text-primary">rapidement</span>
                </h1>
                
                <div class="searchDose-form">
                    <div class="searchDoseForm-fields row align-items-center">
                        <div class="col-sm-24 col-md-auto mb-md-3">
                            J'ai 
                        </div>
                        <div class="col">
                            <vmd-tranche-age-selector class="mb-3" @tranche-age-changed="${(event: CustomEvent<TrancheAgeSelected>) => this.trancheAge = event.detail.trancheAge}"></vmd-tranche-age-selector>
                        </div>
                        <div class="col-sm-24 col-md-auto mb-md-3">
                            J'habite en
                        </div>
                        <div class="col">
                            <vmd-departement-selector class="mb-3" @departement-changed="${(event: CustomEvent<DepartementSelected>) => this.departement = event.detail.departement}"></vmd-departement-selector>
                        </div>
                    </div>
                    <div class="searchDoseForm-action">
                        <button class="btn btn-primary btn-lg" ?disabled="${!this.trancheAge || !this.departement}"
                                @click="${() => Router.navigateToRendezVous(this.departement!.code_departement, this.trancheAge!)}">
                            Rechercher
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="searchAppointment mt-5">
                <h5 class="text-black-50 text-center mb-5">Trouvez vos rendez-vous avec</h5>

                <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                        <a href=""><img class="searchAppointment-logo _doctolib" src="/src/assets/images/png/logo_doctolib.png" alt="Doctolib"></a>
                    </div>
                    <div class="col-auto">
                        <a href=""><img class="searchAppointment-logo _maiia" src="/src/assets/images/png/logo_maiia.jpg" alt="Maiia"></a>
                    </div>
                    <div class="col-auto">
                        <a href=""><img class="searchAppointment-logo _keldoc" src="/src/assets/images/png/logo_keldoc.png" alt="Keldoc"></a>
                    </div>
                    <div class="col-auto">
                        <a href=""><img class="searchAppointment-logo _ordoclic" src="/src/assets/images/png/logo_ordoclic.png" alt="Ordoclic"></a>
                    </div>
                </div>
            </div>
            
            <div class="spacer mt-5 mb-5"></div>
            
            <div class="row g-5">
                <div class="col-sm-24 col-md">
                    <div class="p-5 text-dark bg-light rounded-3">
                        <h2>VaccinTracker</h2>
                        
                        <p>
                            Combien de personnes ont été vaccinées ? Suivez la campagne vaccinale sur VaccinTracker.
                        </p>

                        <div class="row justify-content-center mt-5">
                            <a href="" class="col-auto btn btn-primary btn-lg">
                                Accéder à VaccinTracker&nbsp;<i class="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-24 col-md">
                    <div class="p-5 text-dark bg-light rounded-3">
                        <h2>Carte des centres</h2>
                        
                        <p>
                            Trouvez un centre de vaccination directement sur la carte, appelez les centres pour savoir il y a des rendez-vous.
                        </p>
                        
                        <div class="row justify-content-center mt-5">
                            <a href="" class="col-auto btn btn-primary btn-lg">
                                Accéder à la carte des centres&nbsp;<i class="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        // console.log("connected callback")
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // console.log("disconnected callback")
    }
}