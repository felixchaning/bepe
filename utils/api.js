'use strict';
var HOST_URI = 'https://api.behance.net/v2/';
var CLIENT_ID = 'client_id=LmRY3Dfb5xwx8bXXpXEscAhmXlW7ZGT6'
// 获取节点
// 所有的节点
var ALL_FIELDS = 'fields';
// 获取节点信息 
// 节点id :id 节点名 :name
var NODE_INFO = 'nodes/show.json';

// 获取主题
// 取最新的主题
var LATEST_TOPIC = 'projects?q=UX&time=today&client_id=LmRY3Dfb5xwx8bXXpXEscAhmXlW7ZGT6';
// 获取热议主题
var HOT_TOPIC = 'projects?q=UX&sort=views&client_id=LmRY3Dfb5xwx8bXXpXEscAhmXlW7ZGT6';
// 获取主题信息  :id | (:username | :node_id | :node_name)
var GET_TOPICS = 'projects';

// 获取回复 :topic_id (:page , :page_size)?
var GET_REPLIES = 'replies/show.json';


// 获取用户信息
var GET_USERINFO = 'members/show.json';

function _obj2uri(obj){
	return Object.keys(obj).map(function(k) {
		return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
	}).join('&');
}


function _getAllFields(){
	return HOST_URI+ALL_FIELDS;
}

function _getNodeInfo(o){
	return HOST_URI+NODE_INFO+'?'+_obj2uri(o);
}

function _getTopicInfo(o) {
	// return HOST_URI+GET_TOPICS+'?'+_obj2uri(o);
	return HOST_URI+GET_TOPICS+'/'
} 

function _getLatestTopic(o){
	// return HOST_URI+LATEST_TOPIC+'?'+_obj2uri(o);
	return HOST_URI+LATEST_TOPIC
}

function _getHotestTopic(o) {
	// return HOST_URI+HOT_TOPIC+'?'+_obj2uri(o);
	return HOST_URI+HOT_TOPIC
}

function _getReplies(o){
	// return HOST_URI+GET_REPLIES+'?'+_obj2uri(o);
	return HOST_URI+GET_TOPICS+'/'
}

function _getField(o){
	// return HOST_URI+GET_REPLIES+'?'+_obj2uri(o);
	return HOST_URI+GET_TOPICS
}

module.exports = {
	getAllFields: _getAllFields,
	getNodeInfo: _getNodeInfo,
	getLatestTopic: _getLatestTopic,
	getHotestTopic: _getHotestTopic,
	getTopicInfo: _getTopicInfo,
	getReplies: _getReplies,
	getField: _getField,
	clientID: CLIENT_ID
};