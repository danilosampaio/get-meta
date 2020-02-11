const scrape = require('html-metadata');

const getMetadata = async function getMetadata (url) {
    const metadata = await scrape(url);
    const result = {
        title: '',
        description: '',
        canonical: '',
        price: '',
        priceCurrency: '',
        image: '',
        images: []
    };

    return function getDeepProperties(object) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                const element = object[key];
                if (Object.keys(result).indexOf(key) !== -1) {
                    result[key] = element;
                    if (typeof element === 'object') {                        
                        getDeepProperties(element);
                    } else {                    
                        if (Object.keys(result).indexOf(key) !== -1) {
                            result[key] = element;
                        } else if (typeof element === 'string' && element.match(/.*(jpg|jpeg|png)$/)){
                            if (!result.images) {
                                result.images = [];
                            }
                            result.images.push(element);
                        }
                    }
                } else {
                    if (typeof element === 'object') {
                        getDeepProperties(element);
                    }
                }
            }
        }
        return result;
    }(metadata);
}

module.exports = getMetadata;
