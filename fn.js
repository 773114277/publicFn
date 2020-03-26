/**
 * 随机获取数组中的n个数据
 * @param {Array} origin	源数据
 * @param {Array} result	接收结果的对象
 * @param {Number} n	随机取几个
 */
function getRandomData(origin,result, n){
	let len = 0,	// 用于限定取值范围
		rd = -1;	// 随机数
	for (var i = 0; i < n; i++) {
		len = origin.length;
		rd = Math.floor(Math.random()*len);
		result.push(origin[rd]);
		origin.splice(rd, 1)
	}
}