import index from './index';
import templateName from './template-name';

const global = {
  title: "Global Site Title",
  name: "Joey",
  dir: {
    images: "images/"
  },
  icons: {
    btnClose: "icon__btn-x.png"
  },
  views: {
    index,
    templateName
  }
};

export default { global };
