package com.ahhnjg12123.jg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})
public class JgApplication {

    public static void main(String[] args) {
        SpringApplication.run(JgApplication.class, args);
    }

}
