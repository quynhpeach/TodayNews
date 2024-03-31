import { action, makeObservable, observable } from 'mobx';

import { Articles } from './apiModel';

class AppStore {
  @observable favoriteList: Articles[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  addFavorite(article: Articles) {
    let tmp = [...this.favoriteList];
    if (!tmp.find(e => e.url === article.url)) {
      tmp = [...tmp, article];
      this.favoriteList = tmp;
    }
  }

  @action
  removeFavorite(article: Articles) {
    const tmp = this.favoriteList.filter(e => e.url !== article.url);
    this.favoriteList = [...tmp];
  }

  @action
  triggerArticle(article: Articles) {
    if(this.favoriteList.find(e => e.url === article.url)) {
        this.removeFavorite(article);
    } else {
        this.addFavorite(article);
    }
  }
}

const appStore = new AppStore();
export default appStore;
