
// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

// // module.exports = withPlugins(
// //   [HtmlWebpackPlugin],
// //   {
// //   module: {
// //     rules: [
// //         {
// //             test: /\.html$/,
// //             use: [
// //                 {
// //                     loader: "html-loader",
// //                     options: { minimize: true }
// //                 }
// //             ]
// //         }
// //     ]
// //   },
// //   plugins: [
// //       new HtmlWebpackPlugin({
// //           template: './public/header-en.html'
// //       })
// //   ]
// // )};
  


// module.exports = withPlugins({
//   webpack: function (config) {
//     config.module.rules.push({
//       test: /\.html$/,
//       use: [
//           {
//               loader: "html-loader",
//               options: { minimize: true }
//           }
//       ]
//     })
//     return config
//   }
// })

module.exports = {
    webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.html$/,
      use: 'raw-loader',
    });
    return config;
  },
};
