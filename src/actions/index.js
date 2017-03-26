export const selectArticle = (article) => {
    return {
        type: 'SELECTED_ARTICLE',
        payload: article
    };
};
