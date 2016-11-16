module.exports={
	judge:function(para,callback){
		if(para){
			console.log(true)
			callback && callback(true)
			return true
		}else{
			console.log(false)
			return false
		}
	}
}