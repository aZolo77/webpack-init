module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'), // ? сжимает все media-запросы в один файл
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true // ? удаление комментариев
          }
        }
      ]
    })
  ]
};
