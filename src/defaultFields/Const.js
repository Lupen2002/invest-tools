/**DEFAULT SCHEMAS*/
export let jsonSchema = {
    "title": "A registration form",
    "type": "object",
    "required": [
        "CompanyName",
        "Margin",
        "Capitalization"
    ],
    "properties": {
        "CompanyName": {
            "type": "string",
            "title": "Company Name"
        },
        "Margin": {
            "type": "integer",
            "title": "Margin"
        },
        "Capitalization": {
            "type": "integer",
            "title": "Capitalization"
        },
        "year": {
            "type": "integer",
            "title": "Year"
        },
        "quarter": {
            "type": "integer",
            "title": "Quarter",
            "enum": [
                1,
                2,
                3,
                4
            ]
        },
        "info": {
            "type": "string",
            "title": "Info"
        },
        "standard": {
            "type": "string",
            "title": "Standard",
            "enum": [
                "IFRS",
                "RAS"
            ]
        }
    }
};
export let uiSchema = {
    "Capitalization": {
        "ui:autofocus": true,
        "ui:emptyValue": ""
    },
    "year": {
        "ui:widget": "updown",
        "ui:title": "Report year"
    },
    "info": {
        "ui:widget": "textarea"
    },
    "date": {
        "ui:widget": "alt-datetime"
    }
};
/**IFRS SCHEMAS*/
export let ifrsSchema = {
    "title": "Options by IFRS",
    "type": "object",
    "required": [
        "IFRSParam1"
    ],
    "properties": {
        "IFRSParam1": {
            "type": "string",
            "title": "IFRSParam1"
        },
        "IFRSParam2": {
            "type": "string",
            "title": "IFRSParam2"
        },
        "IFRSParam3": {
            "type": "string",
            "title": "IFRSParam3"
        },
    }
};
/**RAS SCHEMAS*/
export let rasSchema = {
    "title": "Options by RAS",
    "type": "object",
    "required": [
        "RASParam1"
    ],
    "properties": {
        "RASParam1": {
            "type": "string",
            "title": "RASParam1"
        },
        "RASParam2": {
            "type": "string",
            "title": "RASParam2"
        },
        "RASParam3": {
            "type": "string",
            "title": "RASParam3"
        },
    }
};