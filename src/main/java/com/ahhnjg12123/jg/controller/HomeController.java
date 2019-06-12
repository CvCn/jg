package com.ahhnjg12123.jg.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/{path}.html")
    public String chaxun(@PathVariable("path") String path, Model model){
        model.addAttribute("de", 123);
        return "/page/"+path;
    }


    @RequestMapping("/{path}")
    public String chaxun2(@PathVariable("path") String path, Model model){
        model.addAttribute("de", 123);
        return "/page/"+path;
    }

    @RequestMapping("/{path}-{path2}.html")
    public String chaxun3(@PathVariable("path") String path, @PathVariable("path2") String path2, Model model){
        model.addAttribute("de", 123);
        return "/page/"+path + "-" + path2;
    }
}
