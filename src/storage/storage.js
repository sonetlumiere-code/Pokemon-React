export const storageFavorites = {
    
    getData: function(key) {
        return JSON.parse(sessionStorage.getItem(key));
    },

    setData: function(key, data) {
        const storageData = this.getData(key);
        if (!storageData) {
            sessionStorage.setItem(key, JSON.stringify([data]));
        } else {
            storageData.push(data);
            sessionStorage.setItem(key, JSON.stringify(storageData));
        }
    },

    removeData: function(key, data) {
        const storageData = this.getData(key);
        if (storageData.length > 1) {
            const storageDataFiltered = storageData.filter(x => x.id != data.id);
            sessionStorage.setItem(key, JSON.stringify(storageDataFiltered));
        } else {
            sessionStorage.clear();
        }
    }

}