import { combineReducers } from 'redux';
import feedReducer from './reducers-feed';
import sidebarReducer from './reducers-sidebar';
import selectedArticle from './selected-article';
import activeArticleReducer from './select-article';
/**
  * imports combine reducers and all available sub reducers
  * Since, Store is just one giant object, we will have to combineReducers
  * all available reducers
  **/
const storeObject = combineReducers({
    newsFeeds: feedReducer,
    sidebar: sidebarReducer,
    selectedArticle,
    activeArticle: activeArticleReducer
});
/**
  * Setting the store object and combining the reducers
  * the news feed object will now be globally available
  * with property attribute 'newsFeeds' and then export the store object
  **/
export default storeObject;
