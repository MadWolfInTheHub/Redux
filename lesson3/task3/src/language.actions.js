export const LANGUAGE = 'LANGUAGE/CHANGE';


export const setLanguage = (language) => {
  console.log(language)
  return {
    type: LANGUAGE,
    payload: language
  };
};