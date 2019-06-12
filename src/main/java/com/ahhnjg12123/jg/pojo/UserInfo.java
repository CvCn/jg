package com.ahhnjg12123.jg.pojo;

public class UserInfo {
    private String userName;
    private String sex;
    private String card;
    private String organ;
    private String address;

    public UserInfo() {
    }

    public UserInfo(String userName, String sex, String card, String organ, String address) {
        this.userName = userName;
        this.sex = sex;
        this.card = card;
        this.organ = organ;
        this.address = address;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getCard() {
        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }

    public String getOrgan() {
        return organ;
    }

    public void setOrgan(String organ) {
        this.organ = organ;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
