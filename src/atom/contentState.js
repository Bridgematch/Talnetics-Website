import {atom} from 'recoil'


  export const contentIdState = atom({
    key: 'contentIdState',
    default: '',
  });

  export const previewContent = atom({
    key: 'previewContent',
    default:false
  })


  export const modalState = atom({
    key: 'modalState',
    default: false,
  });

  export const contentId =atom({
    key: 'contentId',
    default: ''
  })

  export const previewComment = atom({
    key: 'previewComment',
    default:false,
  })