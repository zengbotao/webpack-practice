/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-08-29 09:17:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 14:19:44
 */
import $ from 'jquery'
import "./css/index.css"
import "./less/index.less"
$(function() {
  $('#app li:nth-child(odd)').css('color', 'red')
  $('#app li:nth-child(even)').css('color', 'green')
})
console.log('fdsfsdf')
const fn = () => {
  console.log("你好babel");
}
console.log(fn)