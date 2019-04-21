/**
 * 
 */

import {onChange} from 'on-change'

/*import * as onChange from './on-change2.js'

/*const onChange = require('on-change')*/
function save(foo){
	alert("ss")
}

const foo = onChange({
	a: 0,
	b: 0
}, () => save(foo))


foo.a = 3

console.log(foo)