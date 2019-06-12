package com.ahhnjg12123.jg.controller;

import com.ahhnjg12123.jg.pojo.ClassesInfo;
import com.ahhnjg12123.jg.pojo.UserInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/{path}.html")
    public String chaxun(@PathVariable("path") String path){
        return "/page/"+path;
    }


    @RequestMapping("/{path}")
    public String chaxun2(@PathVariable("path") String path){
        return "/page/"+path;
    }

    @RequestMapping("/{path}-{path2}.html")
    public String chaxun3(@PathVariable("path") String path, @PathVariable("path2") String path2){
        return "/page/"+path + "-" + path2;
    }


    @RequestMapping("/query")
    public String chaxun4(String shenfenzheng, String xingming, Model model){
        if(StringUtils.isEmpty(shenfenzheng) || StringUtils.isEmpty(xingming)){
            return "/page/error";
        }
        UserInfo userInfo = new UserInfo("黄亚坚", "男", "350583196507151357", "潍坊市车管所", "淮安市");
        ClassesInfo classesInfo = new ClassesInfo("92", "90", "100", "预约成功");
        model.addAttribute("user", userInfo);
        model.addAttribute("class", classesInfo);
        return "/page/zigezheng";
    }
}
