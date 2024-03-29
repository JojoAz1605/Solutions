"use strict";

let data = [
    {
        "id": "item_64693452",
        "categorie": "accompagnement",
        "ingredient": "Avocat, cru",
        "energie": 205,
        "proteines": 1.56,
        "glucides": 0.83,
        "lipides": 20.6,
        "sucres": 0.4
    }, {
        "id": "item_23821602",
        "categorie": "accompagnement",
        "ingredient": "Carotte, crue",
        "energie": 40.2,
        "proteines": 0.63,
        "glucides": 7.59,
        "lipides": 0,
        "sucres": 6
    }, {
        "id": "item_82244448",
        "categorie": "accompagnement",
        "ingredient": "Champignon, tout type, cru",
        "energie": 21.7,
        "proteines": 2.37,
        "glucides": 1.88,
        "lipides": 0.23,
        "sucres": 1.43
    }, {
        "id": "item_29409944",
        "categorie": "accompagnement",
        "ingredient": "Concombre, pulpe et peau, cru",
        "energie": 15.6,
        "proteines": 0.64,
        "glucides": 2.54,
        "lipides": 0.11,
        "sucres": 1.67
    }, {
        "id": "item_28759348",
        "categorie": "accompagnement",
        "ingredient": "Endive, crue",
        "energie": 20.2,
        "proteines": 1.19,
        "glucides": 2.83,
        "lipides": 0,
        "sucres": 2.4
    }, {
        "id": "item_79532574",
        "categorie": "accompagnement",
        "ingredient": "Laitue, crue",
        "energie": 0,
        "proteines": 1.3,
        "glucides": 1.33,
        "lipides": 0.2,
        "sucres": 0.73
    }, {
        "id": "item_97508845",
        "categorie": "accompagnement",
        "ingredient": "Tomate, crue",
        "energie": 19.3,
        "proteines": 0.86,
        "glucides": 2.49,
        "lipides": 0.26,
        "sucres": 2.48
    }, {
        "id": "item_37924840",
        "categorie": "accompagnement",
        "ingredient": "Tomate cerise, crue",
        "energie": 33.7,
        "proteines": 1.31,
        "glucides": 5.62,
        "lipides": 0,
        "sucres": 4.8
    }, {
        "id": "item_87193723",
        "categorie": "accompagnement",
        "ingredient": "Brocoli, cuit",
        "energie": 0,
        "proteines": 2.1,
        "glucides": 1.1,
        "lipides": 0.78,
        "sucres": 1.1
    }, {
        "id": "item_35825828",
        "categorie": "accompagnement",
        "ingredient": "Carotte, cuite",
        "energie": 18.9,
        "proteines": 0.55,
        "glucides": 2.6,
        "lipides": 0.1,
        "sucres": 1.3
    }, {
        "id": "item_19779220",
        "categorie": "accompagnement",
        "ingredient": "Courgette, pulpe et peau, cuite",
        "energie": 15.5,
        "proteines": 0.93,
        "glucides": 1.4,
        "lipides": 0.36,
        "sucres": 1.39
    }, {
        "id": "item_22656207",
        "categorie": "accompagnement",
        "ingredient": "Haricot vert, cuit",
        "energie": 29.4,
        "proteines": 2,
        "glucides": 3,
        "lipides": 0.17,
        "sucres": 1
    }, {
        "id": "item_23258014",
        "categorie": "accompagnement",
        "ingredient": "Chou-fleur, cuit \u00e0 la vapeur",
        "energie": 30.1,
        "proteines": 2.56,
        "glucides": 3.41,
        "lipides": 0.3,
        "sucres": 2.4
    }, {
        "id": "item_93137830",
        "categorie": "accompagnement",
        "ingredient": "Courgette, pulpe et peau, r\u00f4tie\/cuite au four",
        "energie": 23,
        "proteines": 1.5,
        "glucides": 3.13,
        "lipides": 0,
        "sucres": 2.7
    }, {
        "id": "item_42298390",
        "categorie": "accompagnement",
        "ingredient": "Pomme de terre, bouillie\/cuite \u00e0 l'eau",
        "energie": 80.5,
        "proteines": 1.8,
        "glucides": 16.7,
        "lipides": 0.34,
        "sucres": 0.86
    }, {
        "id": "item_65381638",
        "categorie": "accompagnement",
        "ingredient": "Chips de pommes de terre nature ou aromatis\u00e9es, standard",
        "energie": 545,
        "proteines": 5.67,
        "glucides": 51.1,
        "lipides": 34.3,
        "sucres": 1.59
    }, {
        "id": "item_59697317",
        "categorie": "accompagnement",
        "ingredient": "Pomme de terre po\u00eal\u00e9e, avec mati\u00e8re grasse",
        "energie": 137,
        "proteines": 2.5,
        "glucides": 17.3,
        "lipides": 5.7,
        "sucres": 2.2
    }, {
        "id": "item_92879668",
        "categorie": "accompagnement",
        "ingredient": "Pomme de terre, pur\u00e9e (aliment moyen)",
        "energie": 91.8,
        "proteines": 2.11,
        "glucides": 12.7,
        "lipides": 3.25,
        "sucres": 1.49
    }, {
        "id": "item_80202268",
        "categorie": "accompagnement",
        "ingredient": "Haricot blanc, bouilli\/cuit \u00e0 l'eau",
        "energie": 112,
        "proteines": 6.75,
        "glucides": 12,
        "lipides": 1.1,
        "sucres": 0.3
    }, {
        "id": "item_18418205",
        "categorie": "accompagnement",
        "ingredient": "Lentille, bouillie\/cuite \u00e0 l'eau",
        "energie": 0,
        "proteines": 9.02,
        "glucides": 12.2,
        "lipides": 0.38,
        "sucres": 1.8
    }, {
        "id": "item_62325325",
        "categorie": "accompagnement",
        "ingredient": "Pois cass\u00e9, bouilli\/cuit \u00e0 l'eau",
        "energie": 0,
        "proteines": 8.6,
        "glucides": 16.3,
        "lipides": 1.49,
        "sucres": 3.85
    }, {
        "id": "item_75569921",
        "categorie": "accompagnement",
        "ingredient": "Haricot flageolet, bouilli\/cuit \u00e0 l'eau",
        "energie": 112,
        "proteines": 6.75,
        "glucides": 12,
        "lipides": 1.1,
        "sucres": 0.3
    }, {
        "id": "item_27899653",
        "categorie": "accompagnement",
        "ingredient": "Lentille verte, bouillie\/cuite \u00e0 l'eau",
        "energie": 127,
        "proteines": 10.1,
        "glucides": 16.2,
        "lipides": 0.58,
        "sucres": 0.2
    }, {
        "id": "item_79864310",
        "categorie": "accompagnement",
        "ingredient": "Riz blanc \u00e9tuv\u00e9, cuit, non sal\u00e9",
        "energie": 146,
        "proteines": 2.95,
        "glucides": 31.7,
        "lipides": 0.56,
        "sucres": 0.11
    }, {
        "id": "item_80629467",
        "categorie": "accompagnement",
        "ingredient": "Riz tha\u00ef, cuit, non sal\u00e9",
        "energie": 143,
        "proteines": 2.92,
        "glucides": 30.5,
        "lipides": 0.7,
        "sucres": 0
    }, {
        "id": "item_63138717",
        "categorie": "accompagnement",
        "ingredient": "P\u00e2tes fra\u00eeches, aux oeufs, cuites, non sal\u00e9es",
        "energie": 168,
        "proteines": 5.76,
        "glucides": 32,
        "lipides": 1.3,
        "sucres": 0
    }, {
        "id": "item_70580067",
        "categorie": "fruits",
        "ingredient": "Abricot, d\u00e9noyaut\u00e9, cru",
        "energie": 45.9,
        "proteines": 0.81,
        "glucides": 9.01,
        "lipides": 0,
        "sucres": 6.7
    }, {
        "id": "item_12228159",
        "categorie": "fruits",
        "ingredient": "Kiwi, pulpe et graines, cru",
        "energie": 60.5,
        "proteines": 0.88,
        "glucides": 11,
        "lipides": 0.6,
        "sucres": 8.9
    }, {
        "id": "item_69369297",
        "categorie": "fruits",
        "ingredient": "Cl\u00e9mentine ou Mandarine, pulpe, crue",
        "energie": 47.3,
        "proteines": 0.81,
        "glucides": 9.17,
        "lipides": 0,
        "sucres": 8.6
    }, {
        "id": "item_24260499",
        "categorie": "fruits",
        "ingredient": "Melon cantaloup (par ex.: Charentais, de Cavaillon) pulpe, cru",
        "energie": 62.7,
        "proteines": 1.13,
        "glucides": 14.8,
        "lipides": 0,
        "sucres": 10.6
    }, {
        "id": "item_88182831",
        "categorie": "fruits",
        "ingredient": "Nectarine ou brugnon, pulpe et peau, crue",
        "energie": 0,
        "proteines": 1.16,
        "glucides": 8.9,
        "lipides": 0.31,
        "sucres": 7.89
    }, {
        "id": "item_18158862",
        "categorie": "fruits",
        "ingredient": "Pomme, pulpe et peau, crue",
        "energie": 0,
        "proteines": 0.25,
        "glucides": 11.6,
        "lipides": 0.25,
        "sucres": 9.35
    }, {
        "id": "item_43783310",
        "categorie": "fruits",
        "ingredient": "Pomelo (dit Pamplemousse), pulpe, cru",
        "energie": 39.8,
        "proteines": 0,
        "glucides": 8.02,
        "lipides": 0,
        "sucres": 6.6
    }, {
        "id": "item_59531941",
        "categorie": "fruits",
        "ingredient": "Pomme, pulpe, crue",
        "energie": 0,
        "proteines": 0.27,
        "glucides": 10.7,
        "lipides": 0.13,
        "sucres": 10.1
    }, {
        "id": "item_64262415",
        "categorie": "pains",
        "ingredient": "Pain, baguette, de tradition fran\u00e7aise",
        "energie": 279,
        "proteines": 8.15,
        "glucides": 56.6,
        "lipides": 1,
        "sucres": 2.1
    }, {
        "id": "item_68220163",
        "categorie": "pains",
        "ingredient": "Pain complet ou int\u00e9gral (\u00e0 la farine T150)",
        "energie": 244,
        "proteines": 8.38,
        "glucides": 44.3,
        "lipides": 1.8,
        "sucres": 2.2
    }, {
        "id": "item_29596606",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Boeuf, entrec\u00f4te, partie maigre, grill\u00e9e\/po\u00eal\u00e9e",
        "energie": 198,
        "proteines": 25.5,
        "glucides": 0,
        "lipides": 10.7,
        "sucres": 0
    }, {
        "id": "item_70812046",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Boeuf, faux-filet, grill\u00e9\/po\u00eal\u00e9",
        "energie": 182,
        "proteines": 27.1,
        "glucides": 0,
        "lipides": 8.17,
        "sucres": 0
    }, {
        "id": "item_79302552",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Boeuf, rumsteck, grill\u00e9",
        "energie": 123,
        "proteines": 25,
        "glucides": 0,
        "lipides": 2.5,
        "sucres": 0
    }, {
        "id": "item_84020150",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Boeuf, rosbif, r\u00f4ti\/cuit au four",
        "energie": 117,
        "proteines": 21.9,
        "glucides": 0.3,
        "lipides": 3.16,
        "sucres": 0
    }, {
        "id": "item_87601874",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Boeuf, steak hach\u00e9 5% MG, cuit",
        "energie": 155,
        "proteines": 25.5,
        "glucides": 0,
        "lipides": 5.85,
        "sucres": 0
    }, {
        "id": "item_48441947",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Porc, \u00e9paule, cuite",
        "energie": 253,
        "proteines": 30,
        "glucides": 0,
        "lipides": 14.8,
        "sucres": 0
    }, {
        "id": "item_54304523",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Porc, c\u00f4te, grill\u00e9e",
        "energie": 211,
        "proteines": 29.6,
        "glucides": 0,
        "lipides": 10.3,
        "sucres": 0
    }, {
        "id": "item_62255953",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Porc, filet, maigre, en r\u00f4ti, cuit",
        "energie": 198,
        "proteines": 28.3,
        "glucides": 0,
        "lipides": 9.39,
        "sucres": 0
    }, {
        "id": "item_43710367",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Porc, filet mignon, cuit",
        "energie": 168,
        "proteines": 26.1,
        "glucides": 0,
        "lipides": 7.1,
        "sucres": 0
    }, {
        "id": "item_58281883",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Porc, \u00e9chine, r\u00f4tie\/cuite au four",
        "energie": 295,
        "proteines": 26.2,
        "glucides": 0,
        "lipides": 21.2,
        "sucres": 0
    }, {
        "id": "item_94178062",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Poulet, viande et peau, r\u00f4ti\/cuit au four",
        "energie": 213,
        "proteines": 28.9,
        "glucides": 2.1,
        "lipides": 9.88,
        "sucres": 0
    }, {
        "id": "item_87671152",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Poulet, filet, sans peau, saut\u00e9\/po\u00eal\u00e9",
        "energie": 141,
        "proteines": 30.1,
        "glucides": 0,
        "lipides": 2,
        "sucres": 0
    }, {
        "id": "item_29222953",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Dinde, escalope, saut\u00e9e\/po\u00eal\u00e9e",
        "energie": 124,
        "proteines": 28.5,
        "glucides": 0,
        "lipides": 1.09,
        "sucres": 0
    }, {
        "id": "item_61854982",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Chipolata, cuite",
        "energie": 282,
        "proteines": 18.8,
        "glucides": 0.8,
        "lipides": 22.4,
        "sucres": 0.4
    }, {
        "id": "item_57225502",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Saucisse de Toulouse, cuite",
        "energie": 274,
        "proteines": 18.8,
        "glucides": 0,
        "lipides": 22.1,
        "sucres": 0
    }, {
        "id": "item_29635100",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Cabillaud, cuit, sans pr\u00e9cision (aliment moyen)",
        "energie": 98.9,
        "proteines": 23.1,
        "glucides": 0,
        "lipides": 0.73,
        "sucres": 0
    }, {
        "id": "item_99085931",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Lieu noir, cuit",
        "energie": 99.7,
        "proteines": 23.1,
        "glucides": 0,
        "lipides": 0.81,
        "sucres": 0
    }, {
        "id": "item_40545234",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Merlan, frit",
        "energie": 125,
        "proteines": 23.1,
        "glucides": 0,
        "lipides": 3.61,
        "sucres": 0
    }, {
        "id": "item_23194588",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "\u00c9glefin, grill\u00e9\/po\u00eal\u00e9",
        "energie": 84.9,
        "proteines": 20,
        "glucides": 0,
        "lipides": 0.55,
        "sucres": 0
    }, {
        "id": "item_45544965",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Oeuf, \u00e0 la coque",
        "energie": 142,
        "proteines": 12.2,
        "glucides": 1.08,
        "lipides": 9.82,
        "sucres": 0.77
    }, {
        "id": "item_76407655",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Oeuf, au plat, frit, sal\u00e9",
        "energie": 204,
        "proteines": 14.3,
        "glucides": 0.74,
        "lipides": 16,
        "sucres": 0.4
    }, {
        "id": "item_41544042",
        "categorie": "viande, volaille, poisson, \u0153ufs",
        "ingredient": "Oeuf, brouill\u00e9, avec mati\u00e8re grasse",
        "energie": 145,
        "proteines": 9.99,
        "glucides": 1.62,
        "lipides": 11,
        "sucres": 1.43
    }, {
        "id": "item_23857792",
        "categorie": "fromages",
        "ingredient": "Camembert, sans pr\u00e9cision",
        "energie": 280,
        "proteines": 19.5,
        "glucides": 0,
        "lipides": 22.5,
        "sucres": 0
    }, {
        "id": "item_34727318",
        "categorie": "fromages",
        "ingredient": "Coulommiers",
        "energie": 279,
        "proteines": 18.8,
        "glucides": 0,
        "lipides": 22.8,
        "sucres": 0
    }, {
        "id": "item_74085005",
        "categorie": "fromages",
        "ingredient": "Brie, sans pr\u00e9cision",
        "energie": 297,
        "proteines": 17.3,
        "glucides": 0,
        "lipides": 25.5,
        "sucres": 0
    }, {
        "id": "item_90484907",
        "categorie": "fromages",
        "ingredient": "Neufch\u00e2tel",
        "energie": 287,
        "proteines": 18.5,
        "glucides": 0,
        "lipides": 23.9,
        "sucres": 0
    }, {
        "id": "item_17875968",
        "categorie": "fromages",
        "ingredient": "Livarot",
        "energie": 301,
        "proteines": 24.6,
        "glucides": 0,
        "lipides": 22.6,
        "sucres": 0
    }, {
        "id": "item_36219822",
        "categorie": "fromages",
        "ingredient": "Pont l'\u00c9v\u00eaque",
        "energie": 326,
        "proteines": 22.7,
        "glucides": 0,
        "lipides": 26.2,
        "sucres": 0
    }, {
        "id": "item_81593521",
        "categorie": "fromages",
        "ingredient": "Crottin de Chavignol (fromage de ch\u00e8vre)",
        "energie": 296,
        "proteines": 19.7,
        "glucides": 0,
        "lipides": 24.4,
        "sucres": 0
    }, {
        "id": "item_18381940",
        "categorie": "fromages",
        "ingredient": "Rocamadour (fromage de ch\u00e8vre)",
        "energie": 274,
        "proteines": 17.9,
        "glucides": 0,
        "lipides": 22.6,
        "sucres": 0
    }, {
        "id": "item_87842370",
        "categorie": "fromages",
        "ingredient": "Roquefort",
        "energie": 384,
        "proteines": 19.5,
        "glucides": 0,
        "lipides": 33.9,
        "sucres": 0
    }, {
        "id": "item_94407591",
        "categorie": "fromages",
        "ingredient": "Fromage bleu d'Auvergne",
        "energie": 343,
        "proteines": 22.4,
        "glucides": 0,
        "lipides": 28.4,
        "sucres": 0
    }, {
        "id": "item_52748758",
        "categorie": "fromages",
        "ingredient": "Gorgonzola",
        "energie": 312,
        "proteines": 19,
        "glucides": 0,
        "lipides": 26.4,
        "sucres": 0
    }, {
        "id": "item_82621829",
        "categorie": "fromages",
        "ingredient": "Comt\u00e9",
        "energie": 418,
        "proteines": 27.2,
        "glucides": 0,
        "lipides": 34.6,
        "sucres": 0
    }, {
        "id": "item_95420755",
        "categorie": "fromages",
        "ingredient": "Ossau-Iraty",
        "energie": 428,
        "proteines": 24.2,
        "glucides": 0,
        "lipides": 37,
        "sucres": 0
    } ];