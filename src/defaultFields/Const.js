export let standards = ["IFRS", "RAS"];
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
            "enum": standards
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

/**NEW SCHEMAS*/
export function createNewSchema(title) {
    return {
        "type": "object",
        "required": [
            "newValue"
        ],
        "properties": {
            "newValue": {
                "type": "string",
                "title": title
            },
        }
    };
}

// TODO I don't know how do better
export function _isEmpty(obj) {
    return (Object.getOwnPropertyNames(obj).length >= 1);
}