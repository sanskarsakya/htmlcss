function PersonService() {
    return {
        list: [],

        insert: function (person) {
            this.list.push(person);
        },

        getAll: function () {
            return this.list;
        },

        getById: function (id) {
            for (var i = 0; i < this.list.length; i++) {
                var person = this.list[i];
                if (person.id == id) {
                    return person;
                }
            }
            return null;
        }

    }
}