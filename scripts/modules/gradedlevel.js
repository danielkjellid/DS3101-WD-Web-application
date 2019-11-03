class GradedLevel {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    /* getters */
    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    /* setters */
    setId(id) {
        this.id = id;
    }

    setName(name) {
        this.name = name;
    }

}

export default GradedLevel;