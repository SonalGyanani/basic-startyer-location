export const limit = 3; 

export const radius = 50;

export const defaultQuery = "";

export const baseApiUrl = "https://liveapi-sandbox.yext.com/v2/accounts/me";

export const liveAPIKey = "7024c7bbfa74594dedcfd95c1206c0ea";

export const savedFilterId = "";

export const entityTypes = "location";

export const googleMapsConfig =  {
    centerLatitude:	51.5095146286,
    centerLongitude:-0.1244828354,
    googleMapsApiKey: "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"   
};

export const AnswerExperienceConfig =  {
    experienceKey: "donaldson",
    locale:"en_GB",
    apiKey: "f5db9f723a7d2fd5badfb2d57d1ab853",
    verticalKey: "locations",
    experienceVersion: "STAGING",
    sessionTrackingEnabled: true,
    endpoints:{
        universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
        verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
        questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
        universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
        verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
        filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch"
    }
};



