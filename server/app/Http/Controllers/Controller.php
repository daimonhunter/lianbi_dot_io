<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use Illuminate\Http\Request;
use Validator;


class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    const ERROR = [
        '0' => ['errcode' => 0, 'errmsg' => '成功执行'],
        // 通用错误码
        '100' => ['errcode' => 100, 'errmsg' => '参数错误'],
        '101' => ['errcode' => 101, 'errmsg' => '未知错误'],
        '110' => ['errcode' => 110, 'errmsg' => '文件名称错误'],
        // 用户错误码
        '201' => ['errcode' => 201, 'errmsg' => '用户名已注册'],
        '202' => ['errcode' => 202, 'errmsg' => '用户名或密码错误'],
        '203' => ['errcode' => 203, 'errmsg' => '用户不存在'],
        '204' => ['errcode' => 204, 'errmsg' => '重复关注'],
        // 项目错误码
        '301' => ['errcode' => 301, 'errmsg' => '项目不存在'],
    ];

    public function validation(Request $request, Array $rules)
    {
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return false;
        } else {
            $params = $request->only(array_keys($rules));
            foreach ($params as $key => &$value) {
                if (strpos($rules[$key], 'numeric') !== false) {
                    $value = intval($value);
                }
            }
            return $params;
        }
    }

    public static function curlPost($url, $dataArr)
    {
        $dataJson = json_encode($dataArr);
        $length = strlen($dataJson);
        $curlObj = curl_init();
        curl_setopt($curlObj, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curlObj, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curlObj, CURLOPT_HEADER, 0);
        curl_setopt($curlObj, CURLOPT_POST, 1);
        curl_setopt($curlObj, CURLOPT_URL, $url);
        curl_setopt($curlObj, CURLOPT_POSTFIELDS, $dataJson);
        curl_setopt($curlObj, CURLOPT_HTTPHEADER, array(
            "Content-type: application/json; charset=utf-8",
            "Content-length: $length"
        ));
        $result = curl_exec($curlObj);
        curl_close($curlObj);
        return $result;
    }

    public function output($data = [])
    {
        if (is_object($data)) {
            $data = $data->toArray();
        }
        if ($data == null) {
            return json_encode(self::ERROR[0], JSON_UNESCAPED_UNICODE);
        }
        $result = $this->arrayKeyToCamel($data);
        $rtnArr = self::ERROR[0];
        $rtnArr['data'] = $result;
        return json_encode($rtnArr, JSON_UNESCAPED_UNICODE);
    }

    public function error($errcode)
    {
        if (array_key_exists($errcode, self::ERROR)) {
            return json_encode(self::ERROR[$errcode], JSON_UNESCAPED_UNICODE);
        }
        return json_encode(self::ERROR[101], JSON_UNESCAPED_UNICODE);
    }

    public function arrayKeyToCamel (Array $array)
    {
        $newArray = array();
        foreach ($array as $key => $value) {
            $newKey = preg_replace_callback('/([-_]+([a-z]{1}))/i', function($matches){
                return strtoupper($matches[2]);
            }, $key);
            $newArray[$newKey] = is_array($value) ? $this->arrayKeyToCamel($value) : $value;
        }
        return $newArray;
    }

    public function arrayKeyToLine (Array $array)
    {
        $newArray = array();
        foreach ($array as $key => $value) {
            $newKey = preg_replace_callback('/([A-Z]{1})/', function($matches){
                return '_'.strtolower($matches[0]);
            }, $key);
            $newArray[$newKey] = is_array($value) ? $this->arrayKeyToCamel($value) : $value;
        }
        return $newArray;
    }
}
