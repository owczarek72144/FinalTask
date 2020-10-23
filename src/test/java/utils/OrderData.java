package utils;

public class OrderData {
    private String orderTotal;
    private String orderReference;


    public OrderData(String orderTotal, String orderReference){
        this.orderReference = orderReference;
        this.orderTotal = orderTotal;
    }
    public String getOrderTotal() {
        return orderTotal;
    }

    public void setOrderTotal(String orderTotal) {
        this.orderTotal = orderTotal;
    }

    public String getOrderReference() {
        return orderReference;
    }

    public void setOrderReference(String orderReference) {
        this.orderReference = orderReference;
    }
}
