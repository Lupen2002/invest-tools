import React, {Component} from "react";
import {getRasSchema} from "./storageForRAS";
import {getIfrsSchema} from "./storageForIFRS";

class Storage {
    getSchema(){}

}

class RasStorage extends Storage {
    getSchema() {
        return getRasSchema()
    }
}

class IFRSStorage extends Storage {
    getSchema() {
        return getIfrsSchema()
    }
}

export const bulderSchema = (type) => {
    if (type === "IFRS"){
        return new IFRSStorage();
    } else if (type === "RAS") {
        return new RasStorage();
    }
};

export default Storage;