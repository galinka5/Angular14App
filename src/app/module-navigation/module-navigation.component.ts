import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module-navigation',
  templateUrl: './module-navigation.component.html',
  styleUrls: ['./module-navigation.component.css'],
})
export class ModuleNavigationComponent {
  menuMode = 0;

  @Input() expanded: boolean = false;

  patientName: string = 'BOIREC Jean';
  patientData = 'depuis: 12.12.2023 *13.11.1970 LIT 07';

  alerts = [
    {
      color: 'red',
      label: '!',
      subitems: [
        { label: 'Allergies', additionalHeader: true },
        { label: 'Pénicillines', additionalHeader: false },
        { label: 'Amoxicilline + Acide clavulanique', additionalHeader: false },
      ],
    },
    {
      color: 'tomato',
      label: 'ALL',
      subitems: [
        { label: 'Allergies', additionalHeader: true },
        { label: 'Pénicillines', additionalHeader: false },
        { label: 'Amoxicilline + Acide clavulanique', additionalHeader: false },
      ],
    },

    {
      color: 'yellow',
      label: 'ISO',
      subitems: [
        { label: 'Isolement', additionalHeader: true },
        { label: 'Début', additionalHeader: false },
        { label: 'SARM', additionalHeader: false },
        { label: 'COVID 19', additionalHeader: false },
        { label: '29/04/2024 10:48', additionalHeader: false }
      ],
    },
    {
      color: 'yellow',
      label: 'ISO',
      subitems: [
        { label: 'Isolement', additionalHeader: true },
        { label: 'Début', additionalHeader: false },
        { label: 'SARM', additionalHeader: false },
        { label: 'COVID 19', additionalHeader: false },
        { label: '29/04/2024 10:48', additionalHeader: false }
      ],
    },
    {
      color: 'yellow',
      label: 'ISO',
      subitems: [
        { label: 'Isolement', additionalHeader: true },
        { label: 'Début', additionalHeader: false },
        { label: 'SARM', additionalHeader: false },
        { label: 'COVID 19', additionalHeader: false },
        { label: '29/04/2024 10:48', additionalHeader: false }
      ],
    },
    {
      color: 'yellow',
      label: 'ISO',
      subitems: [
        { label: 'Isolement', additionalHeader: true },
        { label: 'Début', additionalHeader: false },
        { label: 'SARM', additionalHeader: false },
        { label: 'COVID 19', additionalHeader: false },
        { label: '29/04/2024 10:48', additionalHeader: false }
      ],
    },
    {
      color: 'yellow',
      label: 'ISO',
      subitems: [
        { label: 'Isolement', additionalHeader: true },
        { label: 'Début', additionalHeader: false },
        { label: 'SARM', additionalHeader: false },
        { label: 'COVID 19', additionalHeader: false },
        { label: '29/04/2024 10:48', additionalHeader: false }
      ],
    },
    {
      color: 'yellow',
      label: 'ISO',
      subitems: [
        { label: 'Isolement', additionalHeader: true },
        { label: 'Début', additionalHeader: false },
        { label: 'SARM', additionalHeader: false },
        { label: 'COVID 19', additionalHeader: false },
        { label: '29/04/2024 10:48', additionalHeader: false }
      ],
    },
  ];

  mainMenu = [{
    id: '0-1',
    label: "Occupation des lits", subitems: false,
    icon: 'Home'
  },
  {
    id: '0-2', label: "PRESCRIPTIONS", subitems: true, icon: 'Document'
  },
  {
    id: '0-3', label: "VUES DE SYNTHESE", subitems: true, icon: 'Lab'
  },
  {
    id: '0-4', label: "RESULTATS LABO", subitems: true, icon: 'Table'
  },
  {
    id: '0-5', label: "EQUIPEMENTS ET PLAIES", subitems: false, icon: 'Prescription_List'
  },
  {
    id: '0-6', label: "BILAN ENTREES-SORTIES", subitems: false, icon: 'Eye'
  },
  {
    id: '0-7', label: "TRANSMISSIONS", subitems: true, icon: 'Transmission'
  },
  {
    id: '0-8', label: "INTERVENANTS EXTERNES", subitems: false, icon: 'Tools'
  },
  {
    id: '1-9', label: "Administratif", subitems: false, icon: 'Bubbles'
  },
  {
    id: '0-10', label: "DOSSIER MEDICAL", subitems: true, icon: 'Open_Folder'
  },
  {
    id: '0-11', label: "EVOLUCARE", subitems: false, icon: 'Users'

  },
  {
    id: '0-12', label: "OPROOM", subitems: false, icon: 'Patient'
  },

  ];

  subMenus = [
    {
      root: "0-2", items: [
        { id: '0-2-1', label: "Prescription", icon: 'Patient' },
        {
          id: "0-2-2", label: "Focus Médicaments", subitems: true, icon: 'Patient'
        },
        { id: "0-2-3", label: "Focus surveillances et soins", icon: 'Patient' },
        {
          id: "0-2-4", label: "Pancarte de surveillance", subitems: true, icon: 'Patient'
        },
        { id: "0-2-5", label: "Plan de soins (GHT77)", icon: 'Patient' }
      ]
    },
    {
      root: "0-3",
      items: [
        { id: '0-3-1', label: "General", icon: 'Patient' },
        { id: "0-3-2", label: "Cardiovasculaire", icon: 'Patient' },
        { id: "0-3-3", label: "Pulmonologie", icon: 'Patient' },
        { id: "0-3-4", label: "Neurologie", icon: 'Patient' },
        { id: "0-3-5", label: "Néphrologie", icon: 'Patient' }]
    },

    {
      root: "0-4", items: [
        { id: '0-4-1', label: "Laboratoire tout", icon: 'Patient' },
        { id: "0-4-2", label: "Gaz du sang", icon: 'Patient' },
        { id: "0-4-3", label: "Labo Hématologie", icon: 'Patient' },
        { id: "0-4-4", label: "Labo Sérologie", icon: 'Patient' },
        { id: "0-4-5", label: "Microbiologie", icon: 'Patient' }]
    },
    {
      root: "0-7", items: [
        { id: '1-7-1', label: "Transmissions libres", icon: 'Patient' },
        { id: "1-7-2", label: "Transmissions ciblées", icon: 'Patient' },
        { id: "1-7-3", label: "Observations IDE", icon: 'Patient' },
        { id: "1-7-4", label: "Fiche de liaison", icon: 'Patient' }]
    },
    {
      root: "0-10", items: [
        { id: '0-10-1', label: "Examens entrée", icon: 'Patient' },
        { id: "0-10-2", label: "Profil médical", icon: 'Patient' },
        { id: "0-10-3", label: "Observations quotidiennes", icon: 'Patient' },
        { id: "0-10-4", label: "Suivi des observations", icon: 'Patient' },
        { id: "0-10-5", label: "SOFA", icon: 'Patient' },
        { id: "0-10-6", label: "CR Hospitalisation", icon: 'Patient' },
      ]
    },
    {
      root: "0-2-2",
      items: [
        { id: '0-2-2-1', label: "Tous les médicaments", icon: 'Patient' },
        { id: "0-2-2-2", label: "Injections continues", icon: 'Patient' },
        { id: "0-2-2-3", label: "Injections discontinues", icon: 'Patient' },
        { id: "0-2-2-4", label: "Perfusions solutés", icon: 'Patient' },
        { id: "0-2-2-5", label: "ATB", icon: 'Patient' }
      ]
    },
    {
      root: "0-2-4", items: [
        { id: '0-2-4-1', label: "Pancarte de surveillance (GHT77)", icon: 'Patient' },
        { id: "0-2-4-2", label: "Drains", icon: 'Patient' },
        { id: "0-2-4-3", label: "Vérifications", icon: 'Patient' },
        { id: "0-2-4-4", label: "Dialyse/ECMO", icon: 'Patient' },
        { id: "0-2-4-5", label: "Pupillométrie", icon: 'Patient' }
      ]
    }
  ]


  currentItem: any;

  showTopMenu: boolean = false;

  subActionBlocks = [
    {
      id: 1, root: 1, width: "20%", header: "Grundpflege", list: [
        "Augenpflege", "Haarpflege / Rasur", "Hautschutz", "Intertrigoprophylaxe", "Mikrobewegungen", "Mund-Nasen-Augenpflege", "Mundpflege", "Nasenpflege", "Pflege, komplett", "Waschung"
      ]
    },
    {
      id: 2, root: 1, width: "20%", header: "Lagerung, Mobilisierung", list: [
        "Druckverteilende Systeme", "Lagerung Extremitäten", "Lagerung, Mobilisation"
      ]
    },
    {
      id: 2, root: 1, width: "20%", header: "Physiotherapie", list: [
        "Physio - Bettkante",
        "Physio - Bettkante, Gehtraining und Stehbrett",
        "Physio - Gehtraining",
        "Physiotherapie",
        "Stehbrett"]
    },
    {
      id: 3, root: 1, width: "20%", header: "Luft, Atmung", lits: [
        "Absaugen",
        "Absaugen MNR",
        "Absaugen, endotracheal",
        "Absaugen, transglottisch",
        "Spontanatmungsversuch"
      ]
    },
    {
      id: 4, root: 1, width: "20%", header: "Systemwechsel", lits: [
        "Katheter Neuanlage", " Systemwechsel - Atmung und Beatmung", "Systemwechsel - Infusion und ent. Ernährung",
        "Systemwechsel - komplett", "Systemwechsel - Kompression", "Systemwechsel Spülsysteme", "Systemwechsel-Drucksysteme", " Wunden Neuanlage"
      ]
    },
    {
      id: 5, root: 1, width: "20%", header: "Ein- und Ausfuhr", list: ["Erbrechen / Übelkeit", "Erbrechen, Stuhl und Urin", "Essen", "Essen und Trinken", "Gesamte Ausfuhr Katheter eintragen", "Logopädie Behandlungsempfehlung", "Schluckversuch",
        "Spontanurin", "Stuhlgang", "Trinken"]
    },
    {
      id: 6, root: 3, width: "20%",
      header: "Validierung", list: ["BZ - Stix", "Validation Beatmung", "Validation BGA", "Validation Dialyse", "Validation ECMO", "Validation Größe und Gewicht", "Validation NMT - Monitoring", "Validation Vitalwerte", "Validation Vitalwerte AWR"]
    },
    {
      id: 7, root: 3, width: "20%", header: "Kontrollen", lits: ["ACT Kontrolle",
        "Antrittskontrolle",
        "AWR Beginn (das hier bitte zuerst ausfüllen)",
        "AWR Check (nicht Verlegung)",
        "AWR Check vor Verlegung",
        "Check Ablauf Ventrikeldrainage",
        "CK/ CK-MB Kontrolle",
        "DMS Kontrolle (auch Druckverband/Schleuse)",
        "Lappenkontrolle",
        "Orientierung",
        "Pupillenkontrolle",
        "Shuntkontrolle",
        "Sonstige Kontrollen",]
    },
    {
      id: 8, root: 3, width: "20%", header: "Scores Braden-Skala", lits: ["GlasgowComaScale",
        "Glasgow-Coma-Scale mit Pupillenkontrolle",
        "NIHSSplus",
        "Pflegescores (Braden, RASS etc)",
        "RASS und CAM-ICU",
        "Schmerzen (NRS, BPS)"]
    },
    {
      id: 9, root: 3, width: "20%", header: "Laborabnahmen etc.", lits: ["Abstrich VRE/MRSA",
        "BGA Abnahme",
        "Bitte Troponin-Kontrolle abnehmen",
        "EKG",
        "Info:",
        "Laborabnahme",
        "Liquorlaborabnahme",
        "Medikamentenspiegelabnahme",]
    },
    {
      id: 10, root: 3, width: "20%", header: "Sonstiges Anaconda-Validierung", lits: ["Anleitung / Schulung",
        "Aufnahme, pflegerisch",
        "Diagnosen",
        "Dokumentation verworfenes BTM",
        "Elternbesuche",
        "Erwärmung / Kühlung",
        "Fixierung",
        "Katheter Dokumentation",
        "Krampfanfall",
        "Präsenz",
        "Soziale Interaktion",
        "Spezielle Pflegetechniken",
        "Test Dokumentation SR",
        "Wertsachenprotokoll",
        "Wunden Dokumentation"]
    },
    {
      id: 11, root: 4, width: "20%", header: "Grundpflege", lits: ["Augenpflege",
        "Haarpflege / Rasur",
        "Hautschutz",
        "Intertrigoprophylaxe",
        "Mikrobewegungen",
        "Mund-Nasen-Augenpflege",
        "Mundpflege",
        "Nasenpflege",
        "Pflege, komplett",
        "Waschung"]
    },
    {
      id: 12, root: 4, width: "20%", header: "Lagerung, Mobilisierung", lits: []
    },
    {
      id: 13, root: 2, width: "12.5%", header: "Maßnahmen Atemweg", lits: ["Anordnung Weaning", "Beilufttest", "Einlungenventilation", "Extubation",
        "Intubation", "Larynxmaske", "NIV-Therapie Anordnung"]
    },
    {
      id: 14, root: 2, width: "12.5%", header: "Maßnahmen Extrakorporaleverfahren", lits: ["Dialyse", "ECMO", "Visite Stroke Unit"]
    },
    {
      id: 15, root: 2, width: "12.5%", header: "Körperliche Untersuchung", lits: ["Abdomen",
        "Allgemein (Hautzustand etc.)",
        "Herz",
        "Körperl. Untersuchung",
        "Krampfanfall Myoklonien",
        "Lunge",
        "Neurologie",
        "Neurologie Augen",
        "Pulsstatus",
        "Schmerz",
        "Vigilanz"]
    },
    {
      id: 16, root: 2, width: "12.5%", header: "Diagnostik auf Station", lits: ["AKI Risk Score",
        "Bronchoskopie",
        "Diagnostische Laryngoskopie",
        "EEG",
        "EKG",
        "Elektrophysiologische Untersuchung",
        "Endoskopie",
        "OP auf Station",
        "Röntgen",
        "Sonographie"]
    },
    {
      id: 17, root: 2, width: "12.5%", header: "Diagnostik außerhalb der Station", lits: ["Angiographie",
        "Bronchoskopie (AUSSERHALB der Station)",
        "CT",
        "Elektrophysiologische Untersuchung",
        "Endoskopie",
        "Kardiologische Intervention",
        "MRT",
        "OP",
        "Röntgen (außerhalb der Station)"]
    },
    {
      id: 18, root: 2, width: "12.5%", header: "Maßnahmen Extrakorporaleverfahren", lits: ["Diaasdasdasdlyse", "ECMasdadO", "Visite Sasdasdasdtroke Unit"]
    },
    {
      id: 19, root: 2, width: "12.5%", header: "Maßnahmen Extrakorporaleverfahren", lits: ["Dialyse", "ECsadsdsaMO", "Visiteasdads Stroke Unit"]
    },
    {
      id: 12, root: 2, width: "12.5%", header: "Maßnahmen Extrakorporaleverfahren", lits: ["Diasdadadsadadalyse", "ECMO", "Visite Stroke Unit"]
    },
  ]

  actions = [
    { id: 1, label: "Pflege Ausführen", },
    { id: 2, label: "Pflege Verschreiben", },
    { id: 3, label: "Arzt Ausführen", },
    { id: 4, label: "Arzt Verschreiben", },
    { id: 5, label: "Medikation verschreiben", }
  ]


  activeAction: number = -1;

  constructor() { }

  selectMenuItem(item: any, event: any) {
    event?.stopPropagation();
    this.currentItem = item;
    this.expanded = true;

    if (this.menuMode == 1) {
      this.showTopMenu = true;
      this.expanded = false;
    }
    console.log(this.currentItem);
  }
}
