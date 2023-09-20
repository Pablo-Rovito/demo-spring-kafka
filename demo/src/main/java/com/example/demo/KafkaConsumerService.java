package com.example.demo;

import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {
    private String message;
    @org.springframework.kafka.annotation.KafkaListener(topics="test")
    public void consume(String newMessage) {
        message = newMessage;
        System.out.println("Nuevo mensaje recibido: " + message);
    }
    public String getMessage() {
        return message;
    }
}