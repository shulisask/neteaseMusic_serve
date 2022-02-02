import { baseUrl } from "./config.js"

export function topList(){
	return new Promise(function(reslove,reject){
		uni.request({
			url:`${baseUrl}/toplist/detail`,
			method:"GET",
			data:{},
			success:res=>{
				let result=res.data.list;
				result.length=4;
				reslove(result)
			},
			fail:()=>{},
			complete: () => {}
		})
	})
}

// 榜单
export function list(id){
	return uni.request({
		url:`${baseUrl}/playlist/detail?id=${id}&realIP=116.25.146.177`,
		method:"GET",
	})
}

// 歌曲详情
export function songDetail(songId){
	return uni.request({
		url:`${baseUrl}/song/detail?ids=${songId}&realIP=116.25.146.177`,
		method:"GET",
	})
}

// 相似歌曲
export function songSimi(songId){
	return uni.request({
		url:`${baseUrl}/simi/song?id=${songId}&realIP=116.25.146.177`,
		method:"GET",
	})
}

// 评论
export function songComment(songId){
	return uni.request({
		url:`${baseUrl}/comment/music?id=${songId}&realIP=116.25.146.177`,
		method:"GET",
	})
}

// 歌词
export function songLyric(songId){
	return uni.request({
		url:`${baseUrl}/lyric?id=${songId}&realIP=116.25.146.177`,
		method:"GET",
	})
}

// 播放歌曲地址
export function songUrl(songId){
	return uni.request({
		url:`${baseUrl}/song/url?id=${songId}&realIP=116.25.146.177`,
		method:"GET",
	})
}

// 搜索
export function searchWord(word){
	return uni.request({
		url:`${baseUrl}/cloudsearch?keywords=${word}&realIP=116.25.146.177`,
		method:"GET",
	})
}

// 搜索建议
export function searchSuggest(word){
	return uni.request({
		url:`${baseUrl}/search/suggest?keywords=${word}&type=mobile&realIP=116.25.146.177`,
		method:"GET",
	})
}
