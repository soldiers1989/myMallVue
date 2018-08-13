   /**
    * 项目中的一些配置在此管理
    */
   let $ = $||{};
   $.config = {
		sysVersion: '1.0.2',
		 /*
         * 配置默认document.title标题
         */
        documentTitle: "英大金点理财商城",
        //项目的css目录
        cssPathName: "css",
        //项目的images目录
        imagesPathName: "images",
        //项目的scripts目录
        scriptsPathName: "scripts",
        //项目的views目录
        viewsPathName: "views",
        //壳子文件scripts文件路径
        shellScriptPath: "/shellFunction/msgFunction.js",
        /**
         * 后端接口返回过滤
         */
        executeFilter: {
            executeFilterFunc: function(data)
            {
                if(data.error_no === '-999')//未登录
                {
                    //这里
                	$.clearSStorage("_isLoginIn");
                    $.clearSStorage("userInfo");
                    $.clearSStorage("user_id");
                    $.clearSStorage("user_name");
                    $.clearSStorage("account_name");
                    $.clearSStorage("fund_account");
                    $.clearSStorage("client_no");
                    $.clearSStorage("risk_level");
                    $.clearSStorage("mobile_phone");
                    $.clearSStorage("identity_num");
                    $.clearSStorage("login_by_mail");
                    $.clearSStorage("lc_client_no");
                    $.clearSStorage("lc_fund_account");
                    $.clearSStorage("lc_branch_no");
                    $.clearSStorage("img_url");
                    if($.config.platform != "0"){
                        $.clearSStorage($.config.projName + "_login_token");
                        $.setSStorageInfo("_myPageCode",$.getCurrentPageObj().pageCode);
                        $.pageInit($.getCurrentPageObj().pageCode, "mall/forLogin", {});
                    }else{
                        $.pageInit($.getCurrentPageObj().pageCode, "login/userLogin", {});
                    }
                    return false;
                }else
                {
                    return true;
                }

            }
        },
        /***
         * 扩展全局配置
         * */
        globalExtend:function(){
            //弹出框架不关闭前一个，默认是关闭
            $.modal.prototype.defaults.modalCloseByOutside = true;
            //弹出提示插件默认是ok和cancel，这里可以自定义
            $.modal.prototype.defaults.modalButtonOk = '确定';
            $.modal.prototype.defaults.modalButtonCancel = '取消';
  
            var opts = {
                length: 5, // 花瓣长度
                width: 3, // 花瓣宽度
                radius: 8, // 花瓣距中心半径
                corners: 1, // 花瓣圆滑度 (0-1)
                rotate: 0, // 花瓣旋转角度
                color: '#FFF', // 花瓣颜色
                speed: 0.5, // 花瓣旋转速度
                trail: 50, // 花瓣旋转时的拖影(百分比)
                shadow: false // 花瓣是否显示阴影
            };
            var spinner = new Spinner(opts);
            $.showPreloader = function(){
                if ($(".iLoading_overlay").length > 0 && $(".iLoading_container").length > 0) {
                    $(".iLoading_overlay").show();
                    $(".iLoading_container").fadeIn(1);
                } else {
                    var preloaderHtml = '<div class="iLoading_overlay"></div>\
										 <div class="iLoading_container">\
											<div class="iLoading"></div>\
											<div class="iLoading_text">加载中...</div>\
										 </div>';
                    $("body").append(preloaderHtml);
                }
                spinner.spin($(".iLoading_container .iLoading").get(0));
            };

            // 重新隐藏数据等待层
            $.hidePreloader = function(){
                $(".iLoading_overlay").hide();
                $(".iLoading_container").fadeOut(100, function(){
                    spinner.spin();
                });
            };
            /**
			 * 重写alert方法
			 * @param msg 提示信息
			 * @param okText 按钮文本，默认为确定
			 * @param callBack 按钮回调函数
			 */ 
			$.alert = function(msg, okText, okCallBack, title){
				okText = okText || "确定";
				var alertEle = $(".custom_alert_global");
	    		if (alertEle.length > 0) {
	    			alertEle.remove();
				}
	    		var titleHtml = title ? "<h5 class='custom_alert_title'>"+title+"</h5>" : "";
				var alertHtml = '<div class="custom_alert_global">\
									<div class="ui dialog-overlay z_index10000 overlayFadeInUp" style="display: block;"></div>\
									<div class="pop_box z_index10001">\
									    <div class="pop_prompt bounceInUp">'+titleHtml+'\
									        <div class="prompt_inner">\
												<h5 class="text-center has_padding">'+ msg +'</h5>\
											</div>\
									        <div class="btns_box clearfix">\
									            <a href="javascript:void(0)" id="okBtn" style="width:100%;color:#c0a062;">' + okText + '</a>\
									        </div>\
									    </div>\
									 </div>\
								 </div>';
				var _pageId = "#" + $.getCurrentPageObj().pageId + " ";
				// 需要追加到当前页面的section下面，否则在手机上面会出现闪屏的现象
				$(_pageId + "section").append(alertHtml); 
				alertEle = $(".custom_alert_global");
				
	    		// 绑定确定按钮事件
				$.bindEvent(".custom_alert_global #okBtn", function(){
					alertEle.hide();
					if (typeof(okCallBack) == "function") {
						okCallBack();
					}
				});
			};
			/**
	    	 * 重写弹出确认框样式
	    	 * @param msg 提示信息
	    	 * @param okCallBack 确定回调函数
	    	 * @param cancelCallBack 取消回调函数
	    	 * @param okText 确定按钮文本
	    	 * @param cancelText 取消按钮文本
	    	 * @param opts 扩展参数
	    	 * 			title：标题；
	    	 * 			okBtnHideWindow：点击确定按钮是否需要关闭窗口，默认关闭；
	    	 * 			subMsg: 子提示信息；
	    	 * 			styleType: 风格类型，可以根据重构样式自行扩展
	    	 */ 
	    	$.confirm = function(msg, okCallBack, cancelCallBack, okText, cancelText, opts){
	    		opts = opts || {};
	    		okText = okText || "确定";
	    		cancelText = cancelText || "取消";
	    		var title = opts.title || "";
	    		subMsg = opts.subMsg || "";
	    		var confirmEle = $(".custom_confirm_global");
	    		if (confirmEle.length > 0) {
	    			confirmEle.remove();
				}
	    		var contentHtml = '<h5 class="text-center has_padding">'+ msg +'</h5>';
	    		var styleType = opts.styleType || "0";
	    		if (styleType == "1") {
	    			contentHtml = '<h5>' + title + '</h5>\
						            <strong>' + msg + '</strong>\
						            <div class="con_bot2">' + subMsg + '</div>';
				}
	    		if (styleType == "2") {
	    			contentHtml = '<em class="icon_success"></em>\
				                    <h5>'+ msg +'</h5>\
				                    <p>'+ subMsg +'</p>';
				}
				var alertHtml = '<div class="custom_confirm_global">\
									<div class="ui dialog-overlay z_index10000 overlayFadeInUp" style="display: block;"></div>\
									<div class="pop_box z_index10001">\
									    <div class="pop_prompt bounceInUp">\
									        <div class="prompt_inner">'+ contentHtml +'</div>\
									        <div class="btns_box clearfix">\
									            <a href="javascript:void(0)" id="cancelBtn" style="color:#c0a062;">' + cancelText + '</a>\
									            <a href="javascript:void(0)" id="okBtn" style="color:#c52627;">' + okText + '</a>\
									        </div>\
									    </div>\
									 </div>\
								</div>';
				
				var _pageId = "#" + $.getCurrentPageObj().pageId + " ";
				// 需要追加到当前页面的section下面，否则在手机上面会出现闪屏的现象
				$(_pageId + "section").append(alertHtml); 
				confirmEle = $(".custom_confirm_global");
	    		
	    		// 绑定确定按钮事件
	    		$.bindEvent(".custom_confirm_global #okBtn", function(){
	    			var okBtnHideWindow = opts.okBtnHideWindow === false ? false : true; 
	    			if (okBtnHideWindow) {
	    				confirmEle.hide();
					}
					if (typeof(okCallBack) == "function") {
						okCallBack();
					}
				});
	    		
	    		// 绑定取消按钮事件
				$.bindEvent(".custom_confirm_global #cancelBtn", function(){
					confirmEle.hide();
					if (typeof(cancelCallBack) == "function") {
						cancelCallBack();
					}
				});
	    	};
        },
        //登录检测(一个模块里面登录只要一个)
        loginCheck: {
            isAsynch: false,//是否异步,默认同步(区别在于如果设置为true，需要等当前异步操作完毕后才会执行后续操作(比如页面跳转))
            //可以是页面pagecode，也可以是页面路径 如果是某个目录下面所有页面都不需要校验
            "pageFilters" : [
                ['register/*'],['login/userLogin','main/index','mall/fundDetail','mall/finanDetail','mall/fundGaik',
                 'mall/index','mall/fundRate','mall/fundList','mall/pdtNotice','mall/newsDetail','mall/newsList','mall/fundManager','mall/filterList','mall/finaList','mall/jzList','mall/fundFilter','mall/search'],
            ], //过滤的pageCode,可以绕过登录
            "checkFunc" : function(url, noAnimation, replace, reload,param,pagecode,prePageCode,_callback,direct){
                //常规登录判断

                    return true;
                  var _isLoginIn = $.getSStorageInfo("_isLoginIn");//是否登录的标志
                  if(_isLoginIn === 'true'){//这里必须使用===字符串判断为 true,原因是登录后设置 $.setSStorageInfo("_isLoginIn",'false');或者任何值都会进入
                      return true;
                  } else {
                      $.pageInit(pagecode,'./views/login/userLogin.html',{});
                      return false;
                  }
              
            }
        },
        global: {
            "shareLink" : "http://218.17.161.51:32840/download/index.html",
            "capitalMode" : "M", // 资金方式 3：银联，M:通联
            "XJBCode" : "000434", // 现金宝产品代码【恒泰】000434
 	        "token":"servlet/Token?function=Token",
            "srcUrl":"http://58.251.50.25:8086",
        	"validateimg" : "http://58.251.50.25:8086/servlet/Image", // 图片验证码地址（外网地址）
            "fileUploadUrl" : "http://58.251.50.25:8086/servlet/UploadMobileImage", // 文件上传地址（外网地址）
            "serverUrl":"http://58.251.50.25:8086/", //测试环境地址（外网地址）
            "serverPath":"http://58.251.50.25:8086/servlet/json" //外网后台接口地址（外网地址
//            "serverUrl":"http://127.0.0.1:8020/", //测试环境地址（外网地址）
//            "serverPath":"http://127.0.0.1:8020/servlet/json" //外网后台接口地址（外网地址
        },

    };
   export default $.config
