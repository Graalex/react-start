/**
 *
 * index.js
 *
 * Сервер для разработки приложения
 *
 */


const express = require('express');
const webpackConfig = require('../config/webpack/webpack.common');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);
const app = express();
