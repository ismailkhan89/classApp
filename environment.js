import Constants from 'expo-constants';

const ENV = {
    
        development: {  
        GRAPHQL_URL : 'http://3.128.185.181/graphql',
        WS_GRAPHQL_URL: 'ws://3.128.185.181/graphql',
        SERVER_URL : "http://3.128.185.181/",

        CLOUDINARY_URL: "",
        CLOUDINARY_PRESET: "",

        UPLOAD_FILE : '',
        MEDIA_UPLOAD_FILE : '',


        IOS_CLIENT_ID_GOOGLE : '',
        ANDROID_CLIENT_ID_GOOGLE : ''

    },

    production: {  
        GRAPHQL_URL : 'http://3.128.185.181/graphql',
        WS_GRAPHQL_URL: 'ws://3.128.185.181/graphql',
        SERVER_URL : "http://3.128.185.181/",

        CLOUDINARY_URL: "",
        CLOUDINARY_PRESET: "",

        UPLOAD_FILE : '',
        MEDIA_UPLOAD_FILE : '',


        IOS_CLIENT_ID_GOOGLE : '',
        ANDROID_CLIENT_ID_GOOGLE : ''

    },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
    if (__DEV__) {
        return ENV.development;
    } else if (env === 'production') {
        return ENV.production;
    } else if (env === 'staging') {
        return ENV.staging;
    } else {
        return ENV.development;
    }
};

export default getEnvVars;