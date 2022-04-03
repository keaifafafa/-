const common = require('./common')
const utils = require('./utils')
require('./style.css')
// 调用导入的方法
common.info('Hello world!' + utils.add(100, 200))
