import { defineStore } from 'pinia';

/**
 * 文章数据
 */
const useArticle = defineStore({
  id: 'ballot',
  state: () => ({
    data: {
      title: '文章标题',
      content: '文章内容'
    }
  }),
  getters: {
    /**
     * 文章标题
     */
    title():string {
      return this.data.title;
    },
    /**
     * 文章内容
     */
    content():string {
      return this.data.content;
    }
  },
  actions: {
    
    refreshArticleByID(id:number) {
      console.log(id);
      this.data.title = '更新后的标题';
      this.data.content = '更新后的内容'
    }
  }
});
export default useArticle;