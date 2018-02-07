<?php

use Illuminate\Http\Request;

Route::any('viewProject', 'UserController@viewProject');
Route::any('signup', 'UserController@signup');
Route::any('signin', 'UserController@signin');
Route::any('signout', 'UserController@signout');
Route::any('getVcode','UserController@getVcode');
Route::any('checkVcode','UserController@checkVcode');
Route::any('resetPwd','UserController@resetPwd');
//Route::group(['middleware' => 'checkLogin'], function () {
Route::any('getUserInfo', 'UserController@getUserInfo');
Route::any('updateUserInfo', 'UserController@updateUserInfo');
Route::any('toggleFocus', 'UserController@toggleFocus');
//});
Route::any('uploadFile', 'FileController@uploadFile');

Route::any('getProjList', 'ProjectController@getProjList');
Route::any('getProjTopList', 'ProjectController@getProjTopList');
Route::any('getProjDetail', 'ProjectController@getProjDetail');
Route::any('getProjTagList', 'ProjectController@getProjTagList');

Route::any('adminSignin', 'AdminController@signin');
Route::any('adminSignout', 'AdminController@signout');
Route::group(['middleware' => 'checkAdmin'], function () {

    Route::any('addProject', 'AdminController@addProject');
    Route::any('getProjBasicInfo', 'AdminController@getProjBasicInfo');
    Route::any('getProjBasicList', 'AdminController@getProjBasicList');
    Route::any('updProjBasicInfo', 'AdminController@updProjBasicInfo');
    Route::any('delProject', 'AdminController@delProject');

    Route::any('getProjMemberList', 'AdminController@getProjMemberList');
    Route::any('addProjMember', 'AdminController@addProjMember');
    Route::any('delProjMember', 'AdminController@delProjMember');
    Route::any('updProjMember', 'AdminController@updProjMember');

    Route::any('getProjEventList', 'AdminController@getProjEventList');
    Route::any('addProjEvent', 'AdminController@addProjEvent');
    Route::any('delProjEvent', 'AdminController@delProjEvent');
    Route::any('updProjEvent', 'AdminController@updProjEvent');

    Route::any('getProjSocialList', 'AdminController@getProjSocialList');
    Route::any('addProjSocial', 'AdminController@addProjSocial');
    Route::any('delProjSocial', 'AdminController@delProjSocial');
    Route::any('updProjSocial', 'AdminController@updProjSocial');

    Route::any('getProjAdvisorList', 'AdminController@getProjAdvisorList');
    Route::any('addProjAdvisor', 'AdminController@addProjAdvisor');
    Route::any('delProjAdvisor', 'AdminController@delProjAdvisor');
    Route::any('updProjAdvisor', 'AdminController@updProjAdvisor');

    Route::any('getProjPartnerList', 'AdminController@getProjPartnerList');
    Route::any('addProjPartner', 'AdminController@addProjPartner');
    Route::any('delProjPartner', 'AdminController@delProjPartner');
    Route::any('updProjPartner', 'AdminController@updProjPartner');

    Route::any('getProjReportList', 'AdminController@getProjReportList');
    Route::any('addProjReport', 'AdminController@addProjReport');
    Route::any('delProjReport', 'AdminController@delProjReport');
    Route::any('updProjReport', 'AdminController@updProjReport');

    Route::any('getMediaList', 'AdminController@getMediaList');
    Route::any('addMedia', 'AdminController@addMedia');
    Route::any('updMedia', 'AdminController@updMedia');
    Route::any('delMedia', 'AdminController@delMedia');
    Route::any('updMedia', 'AdminController@updMedia');

    Route::any('getSocialList', 'AdminController@getSocialList');
    Route::any('addSocial', 'AdminController@addSocial');
    Route::any('updSocial', 'AdminController@updSocial');
    Route::any('delSocial', 'AdminController@delSocial');
    Route::any('updSocial', 'AdminController@updSocial');
});

//min program api
Route::get('getproject/{id?}', 'ProjectController@getProInfo');
Route::get('getplist/{p?}{chid?}','ProjectController@getPList');
